
exports.up = function(knex, Promise) {
return knex.schema.createTable('cohorts', table => {
    table.increments()
    // creates primary key
    table.string('name', 128).notNullable()
    .unique() 
    // creates cohort name column
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cohorts');
};
