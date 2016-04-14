
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('preference_category').del(),

    // Inserts seed entries
    knex('preference_category').insert(
      {id: 5001,
      preference_id: 5001,
      category_id: 5001}),
    knex('preference_category').insert(
      {id: 5002,
      preference_id: 5001,
      category_id: 5002}),
    knex('preference_category').insert(
      {id: 5003,
      preference_id: 5001,
      category_id: 5003})
  );
};
