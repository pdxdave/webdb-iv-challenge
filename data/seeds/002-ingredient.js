
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredient').del()
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert([
        {ingredient_name: 'fish'},
        {ingredient_name: 'beef'},
        {ingredient_name: 'potato'}
      ]);
    });
};
