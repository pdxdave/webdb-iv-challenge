
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dish').del()
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dish').insert([
        {dish_name: 'Tuna Salad'},
        {dish_name: 'Hamburger'},
        {dish_name: 'Fries'}
      ]);
    });
};
