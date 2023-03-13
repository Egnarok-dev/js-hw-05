const findBestEmployee = function (employees) {
  const arrays = Object.keys(employees);
  let mostDaysAtWork = employees[arrays[0]];
  let bestEmployee = arrays[0];

  for (let array of arrays) {
    if (employees[array] > mostDaysAtWork) {
      mostDaysAtWork = employees[array];
      bestEmployee = array;
    }
  }
  return bestEmployee;
};
console.log(findBestEmployee({ ann: 29, david: 35, helen: 1, lorence: 99 }));
console.log(findBestEmployee({ poly: 12, mango: 17, ajax: 4 }));
console.log(findBestEmployee({ lux: 147, david: 21, kiwi: 19, chelsy: 38 }));
