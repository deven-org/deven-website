---
title: Why do we need Web Compatibility
description: Why do we need standards for a healthy web
date: 2017-01-16
author: User 2
tags:
  - mozilla
  - web
  - webcompat
  - open source
  - standards
layout: layouts/post.njk
---

Last week, I published the first part of this blog post called [What is Web Compatibility](https://zoepage.github.io/posts/20170110-what-is-web-compatibility/index.html)? It explained what web compatibility is (Does it work in most browsers? Is the bug appearing in just this one?) and how you can report it.

### But why do we need Web Compatibility?

There are a so many things I've heard from people why they do not report bugs.

- "I know this bug already."

- "I can make this work in what... like 5 minutes."

- "It's such an easy hack!"

- "Reporting that bug will take FOREVER!!!!"

<br />

**"To be accepted as a full standard, a spec must have two independent and interoperable implementations."**

<br />

<em>Web Compatibility is what we need when the Web interoperability process failed in some fashion. And here I'm not talking only about standard organisations, but when different vendors failed to reach an agreement and it creates issues for the end users. Then you have to understand the issue and what is the best way to adjust the path. The power of a technological proposal is influenced a lot by the market shares of the vendor product.</em>

<em> If a vendor implements a tool to be able to reload part of a document without making a HTTP request for the full document AND has a very large market share… you get XMLHttpRequest which was created by IE (initially as an activeX mechanism) and that other browsers were forced to implement (with its own twisted history). </em>

<em> Web SQL and IndexedDB is a twisted history of Apple which had vested interests in another technology.</em>

[@karlcow](https://github.com/karlcow)

### Please, stop...

We need to stop hacking things. Your voice matters to show browser vendors that we need interoperable specs, not different implementations. We as developers need tools that work from the get go in the right way.

<img class="post-item-image" src="https://media.giphy.com/media/wpoLqr5FT1sY0/giphy.gif" alt="Dog typing on keyboard." />

Clean code is valuable for everyone. Not just because updating hacked code is hard and you get yourself in a bigger mess everytime you do something. But also, because it takes us forever to find those browser quirks and learn things, we shouldn't need to know. Just think about how much time and frustration you had to go through, while you fought with those type of bugs?!

We should have a web that works for everyone. Make it not just user-, but developer-friendly.

### Benefits of reporting &lt;3

You might assume the bug was already reported, because other developers do that all the time, right?
Well... most likely? No. If you ask at a meetup, conference or where ever you meet other developers how many of them reported a bug before, 1-2 hands will go up. _If_ you're lucky!

And _what if_ it was _already_ reported? There is no dragon standing in front of the bug tracker and eat you alive, just because you dared to raise your voice and say a word about that bug...

<img class="post-item-image" src="https://media.giphy.com/media/SIClNyzUQv5Vm/giphy.gif" alt="Cute dragon scratching himself." />

<small>(Okay, maybe just a very cute one, who is actually really nice and would love to give you a hug!)</small>

The more developers report bugs, the higher is the chance to get all of them covered. PLUS it makes specific bugs so much more visible and the fact how annoyed developers are by "this specific one", so browser vendors will prioritize it higher and fix it sooner.

Your experience, knowledge and voice is what is the most important thing. Browser vendors need you! Your input. You are the ones building the web, shaping up the web.

### How can I help beyond just reporting bugs?

With reporting, you already did the biggest part on helping make the web accessible for everyone.
But you can help also with checking out bugs, finding solutions or share your knowledge... You can find more about the how at [https://webcompat.com/contributors](https://webcompat.com/contributors).

<img class="post-item-image" src="https://media.giphy.com/media/tnivTK2URZm7e/giphy.gif" alt="Care bears sending hearts out of their bellies." />

**Thank you <3**

<small>_This is the second part of a two part blog post._</small>
