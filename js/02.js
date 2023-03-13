const countProps = function (obj) {
  let arrays = Object.keys(obj)
  let textLength = arrays.length
  return textLength
}

console.log(countProps({}));
console.log(countProps({name: `Mango`, age: 2}));
console.log(countProps({mail: `poly@mail.com`, isOnline: true, score: 500}));