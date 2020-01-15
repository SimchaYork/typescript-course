// const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done!');
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(' ');
// });

function merge<T1 extends object, T2 extends object>(objA: T1, objB: T2) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Simcha' }, { age: 52 });

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value';

  switch (element.length) {
    case 0:
      descriptionText = 'Got no value.';
      break;
    case 1:
      descriptionText = 'Got 1 element.';
      break;
    default:
      descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe([1, 2, 3]));
