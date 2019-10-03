// utility function that allows for: [err, data] = await to(someAsyncAction());
function to(promise) {  
  return promise.then(data => {
    return [ null, data ];
  }).catch(err => {
    return [ err, null ]
  });
}

module.exports = to;
