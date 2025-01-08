const promise = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve('Success');
  } else {
    reject('Failure');
  }
});

promise
  .then(
    (value) => {
      console.log(value);
    },
    (fail) => {
      console.error(fail);
    }
  )
  .catch((error) => {
    console.error(error);
  });
