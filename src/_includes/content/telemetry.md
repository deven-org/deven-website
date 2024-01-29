## Getting started
Telemetry is a DEVEN project, which is designed to collect anonymized, automized metrics using bots for Git SaaS services (e.g GitHub), to inform about how teams can improve development retention, productivity and satisfaction for more effectiveness. So far our project implements a service that listens to webhook events from a GitHub organisation or repo, to process and save them into a private data repository.
The whole solution is designed to be as cost efficient as possible to give the biggest group of people the chance to collect and later on analyze relevant data.

## How do we collect data?
The project collects data based on the following GitHub events:
- `check-suite`
- `create`
- `deployment`
- `pull_request`
- `workflow_job`

One can also define new events to be used, e.g. `tooling-usage` and more.

Those events are used to collect data for a multitude of metrics, those include:
- `code-review-involvement`
- `test-coverage`
- `documentation-updated`
- and more

For more details have a look at the documentation of our [metrics](https://github.com/deven-org/telemetry-functions/blob/develop/doc/METRICS.md)

## Goals
- Help engineers to be more efficient
- Make it easier for leads to see which changes really effect productivity
- Detect unexpected trends in metrics to be able to react in time

## Resources
- [Check out our code](https://github.com/deven-org/telemetry-functions)
- [Read our documentation](https://github.com/deven-org/telemetry-functions/tree/develop/doc)