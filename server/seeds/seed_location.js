
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('location').del(),

    // Inserts seed entries
    knex('location').insert({id: 5001,
      address_1: '10555 West Jewell Avenue',
      address_2: 'Apartment 1',
      city: 'Lakewood',
      state: 'CO',
      zipcode: '80232',
      lat: 39.6332817,
      long: -105.3184662}),
    knex('location').insert({id: 5002,
      address_1: '7783 West 55th Avenue',
      address_2: 'Apartment 2',
      city: 'Arvada',
      state: 'CO',
      zipcode: '80002',
      lat: 39.6332817,
      long: -105.3184662}),
    knex('location').insert({id: 5003,
      address_1: '6917 Timbers Drive',
      address_2: ' ',
      city: 'Evergreen',
      state: 'CO',
      zipcode: '80439',
      lat: 39.6332817,
      long: -105.3184662})
  );
};
