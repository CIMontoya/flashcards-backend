
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('methods').del()
    .then(function () {
      // Inserts seed entries
      return knex('methods').insert([
        {id: 1, name: 'map', description: 'Creates a new array with the results of calling a provided function on every element in the calling array.'},
        {id: 2, name: 'filter', description: 'Creates a new array with all elements that pass the test implemented by the provided function.'},
        {id: 3, name: 'reduce', description: 'Executes a reducer function (that you provide) on each member of the array resulting in a single output value.'},
        {id: 4, name: 'push', description: 'Adds one or more elements to the end of an array and returns the new length of the array.'},
        {id: 5, name: 'pop', description: 'Removes the last element from an array and returns that element. This method changes the length of the array.'},
        {id: 6, name: 'splice', description: 'Changes the contents of an array by removing or replacing existing elements and/or adding new elements.'}
      ]);
    });
};
