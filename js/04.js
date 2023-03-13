const countTotalSalary = function (employees) {
  let arrays = Object.values(employees);
  let total = 0;

  for (const array of arrays) {
    total += array;
  }

  return `Загальна сума заробітних плат, становить: ${total}`;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400
