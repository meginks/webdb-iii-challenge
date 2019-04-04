
exports.seed = function(knex, Promise) {
 
      return knex('cohorts').insert([
        {name: 'rowValue1'},
        {name: 'rowValue2'},
        {name: 'rowValue3'}
      ]);
};
