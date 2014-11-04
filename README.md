#Telephones JS

This repository contains a bunch of code illustrating some of the ways in which you can use JS to handle telephone numbers.

There are two principal components; an extremley simple Node.js / Express app demonstrating [this JQuery plugin](https://github.com/Bluefieldscom/intl-tel-input) along with Google's [libphonenumber](https://code.google.com/p/libphonenumber/).

The second is a really simple example of how you might use the data from [this library](https://github.com/mledoze/countries) to deal with international dialling codes.

This code is designed to accompany [this article](http://www.sitepoint.com/working-phone-numbers-javascript/).

##Demo App

To install and run the app:

```
npm install
bower install
node server.js
```

##Dialling Codes Library

Take a look in `tests/intl-dialling-codes.js` for example usage, or to run the tests yourself:

```
mocha tests/intl-dialling-codes.js
```

