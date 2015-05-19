Code for America Email Builder
==========

This is a relatively simple project that quickly builds compliant emails that work in many email browsers.

# Why?

Code for America sometimes needs to send transactional emails or custom emails that fit our branding. This tooling allows us to quickly build up an email from pre-defined styles, inline our CSS and prepare for sending.

# How?

Email Builder uses the following tools:
* Grunt: To control our build process, and run our emails through an CSS inliner
* Jekyll: For templating and generally organizing our HTML that builds up to email templates
* Premailer: To inline our CSS so it will be read by Gmail, Outlook and other clients that strip style tags
* Ink by Zurb: A set of predefined, battle-testing email CSS styles that work across clients

# How do I use it?

You'll need to install [Ruby](https://github.com/codeforamerica/howto/blob/master/Ruby.md), [Jekyll](https://github.com/codeforamerica/howto/blob/master/Jekyll.md) and [Node](https://github.com/codeforamerica/howto/blob/master/Node.js.md).

Then, clone down the repo:
```
$ git clone https://github.com/codeforamerica/email-builder.git
$ cd email-bulder
```

Install the dependencies:
```
$ npm install
```

Create a new .html file in the `source/` folder. See the `source/index.html` file for an example on how to format your document.

Then run grunt in the root directory.
```
$ grunt
```

A new `built/` folder will be created with your processed html. Take this to your email sending tool of choice.

# License

The MIT License (MIT)

Copyright (c) 2015 Code for America

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.