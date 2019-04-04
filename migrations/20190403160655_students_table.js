
exports.up = function(knex, Promise) {
    return knex.schema.createTable('students', table => {
        table.increments() 
        // creates primary id
        table.string('name', 128).notNullable().unique() 
        // creates name column
        table.foreign('id').references('id').inTable('cohorts') 
        // creates cohort column which refers to cohorts table
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('students');
};
