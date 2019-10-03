# to

To provides a Go style return for async / await Promises. 

## Install

`npm install --save @ryansann/to`

## Usage

```
const to = require('to');

let err, data;
[ err, data ] = await to(someAsyncAction());
if (err) handle(err);
```
