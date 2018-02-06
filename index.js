// utility function that allows us to do:
// [err, data] = await to(someAsyncAction());
// if (err) handle(err)
function to(promise) {  
  return promise.then(data => {
    return [ null, data ];
  }).catch(err => {
    return [ err, null ]
  });
}

module.exports = to;
