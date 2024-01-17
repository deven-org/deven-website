import pandas
import sys
import getopt
from enum import Enum

# The script needs to be called with at least the input parameter and then either output or dryrun
# The source xlsx file should be copied into the _data folder, git will ignore xlsx files in that folder.
# to run the script navigate in the terminal to the script folder and execute:
# 'python3 excelToJson.py -i '../_data/Hackathon-Collection.xlsx' -o '../_data/hackthondata.json''

Parameters = Enum("Parameters", ["INPUT", "OUTPUT", "DRYRUN"])

def checkOptions(argv: list[str]) -> dict[Parameters, str]:
    """check if provided input parameters are correct, otherwise print help text

    Args:
        argv (list[string]): arguments provided when calling the script from command line
        requiredParamNr (integer): the minimum amount of parameters that have to be provided in addition to the script name, defaults to 1

    Returns:
        dictionary: available parameters and their provided values
    """

    arg_help = "{0} \n-i | --input <inputExcelFile> \t\tInput file. Needs to be an excel file. The third row is used as headers and the first two rows are cut off.\n-o | --output <outputFile> \tOutput file. Path including name. File extension needs to be .json.\n-d | --dryRun <dryRun> \t\tRun script without writing file. The JSON data will be printed in terminal.".format(
        argv[0]
    )

    arg_inputFile = ""
    arg_outputFile = ""
    arg_dryRun = ""

    try:
        opts, args = getopt.getopt(
            argv[1:], "hi:o:d:", ["help", "inputFile=", "outputFile=", "dryRun="]
        )
    except:
        print(arg_help)
        sys.exit(2)

    if len(opts) < 2:
        print("Please provide all required input parameters for the executed script:")
        print(arg_help)
        sys.exit(2)

    for opt, arg in opts:
        if opt in ("-h", "--help"):
            print(arg_help)
            sys.exit(2)
        elif opt in ("-i", "--input"):
            arg_inputFile = arg
        elif opt in ("-o", "--output"):
            arg_outputFile = arg
        elif opt in ("-d", "--dryRun"):
            arg_dryRun = arg

    return {
        Parameters.INPUT: arg_inputFile,
        Parameters.OUTPUT: arg_outputFile,
        Parameters.DRYRUN: arg_dryRun
    }

params = checkOptions(sys.argv)

excel_data_df = pandas.read_excel(params[Parameters.INPUT], sheet_name='Sheet1', header=2)
excel_data_df = excel_data_df.drop(['Who (Accenture ID)','Which Area Does It Effect', 'What Does It Improve', 'Link To Result'], axis=1)
json_str = excel_data_df.to_json(orient='records')

if params[Parameters.DRYRUN]:
    print(json_str)
else:
     with open(params[Parameters.OUTPUT], "w") as file:
        file.write(json_str)