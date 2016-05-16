function getTempCallback (location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

getTempCallback('Manahawkin', function (err, temp) {
  if (err) console.log('error', err);
  else console.log('Success', temp);
});

function getTempPromise (location) {
  return new Promise(function(resolve, reject) {
    setTimeout(function () {
      resolve(79);
      reject('City Not Found');
    }, 1000)

  });
}

getTempPromise('Manahawkin').then(function (temp) {
  console.log('promise success', temp);
}, function (err) {
  console.log('promise error', err);
})

function addPromise (a , b) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof a === "number" && typeof b === "number") {
        resolve(a + b);
      } else {
        reject('Please pass numbers only!');
      }
    }, 1000)
  });
}

addPromise(2,7).then(function (sum) {
  console.log(sum);
}, function (err) {
  console.log(err);
})
addPromise(2,'a').then(function (sum) {
  console.log(sum);
}, function (err) {
  console.log(err);
})
