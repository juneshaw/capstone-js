
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('contact_info').del(),

    // Inserts seed entries
    knex('contact_info').insert({id: 5001,
      location_id: 5001,
      email: 'june.shaw@me.com',
      phone: '+13037264083'})
  );
};
