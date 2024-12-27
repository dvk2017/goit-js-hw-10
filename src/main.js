// console.time('Execute log from cycle for: ');
// for (let i = 0; i < 100_000; i++) {
//   console.log(i);
// }
// console.timeEnd('Execute log from cycle for: ');

// const currentTime = new Date();
// console.log('🚀 ~ currentTime:', currentTime);

// console.log(currentTime.getFullYear());
// console.log(currentTime.getYear());
// currentTime.setYear(0);
// console.log(currentTime.getFullYear());

// function reject() {
//   return console.log('bad');
// }

// function resolve() {
//   return console.log('Good!');
// }

// const promis = new Promise((reject, resolve) => {
//   reject();
//   resolve();
// });

// console.log(promis);

// let innerP;

// const oterP = new Promise(resolveOuter => {
//   resolveOuter(
//     (innerP = new Promise(resolveInner => {
//       setTimeout(resolveInner, 3000);
//     }))
//   );
// });

// console.log(oterP);
// console.log(innerP);

// setTimeout(() => {
//   console.log(oterP);
//   console.log(innerP);
// }, 5000);

const myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing asynchronously
  // was successful, and reject(...) when it failed.
  setTimeout(() => {
    resolve('Success!'); // Yay! Everything went well!
  }, 250);
});

const x = myFirstPromise.then(successMessage => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log(`Yay! ${successMessage}`);
  return 555;
});

console.log(x);
