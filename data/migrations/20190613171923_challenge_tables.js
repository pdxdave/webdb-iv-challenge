
exports.up = function(knex, Promise) {
  return knex.schema 
   .createTable('recipe', tbl => {
       tbl.increments();

       tbl
        .string('recipe_name', 128)
        .notNullable()
        .unique();

       tbl
        .string('recipe_instructions', 128);
        
       tbl 
        .integer('dish_id') //fk
        .unsigned() 
        .notNullable()
        .references('id')
        .inTable('dish')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
   })

   .createTable('dish', tbl => {
       tbl.increments();

       tbl
         .string('dish_name', 128)
         .notNullable()
         .unique();
   })

   .createTable('ingredient', tbl => {
       tbl.increments();
  
       tbl
        .string('ingredient_name')
        .notNullable()
        .unique();
   })

   .createTable('recipe_ingredients', tbl => {
       tbl.increments();

       tbl
         .float('quanity');

       tbl
         .integer('recipe_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('recipe')
         .onDelete('RESTRICT')
         .onUpdate('CASCADE');

        tbl
          .integer('student_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('ingredients')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
   })

};

exports.down = function(knex, Promise) {
   return knex.schema
     .dropTableIfExists('recipe_ingredients')
     .dropTableIfExists('ingredients')
     .dropTableIfExists('dish')
     .dropTableIfExists('recipe');
};
