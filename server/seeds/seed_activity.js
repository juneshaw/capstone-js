
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('activity').del(),

    // Inserts seed entries
    knex('activity').insert({id: 5001,
      group_id: 5001,
      name: 'Reunion!',
      custom_category_id: 5000,
      category_id: 5001,
      date: "2016-05-01",
      time: "19:00:00",
      location_id: 5001,
      business_id: 5001}),
    knex('activity').insert({id: 5002,
      group_id: 5001,
      name: "Graduation Party",
      custom_category_id: 5000,
      category_id: 5001,
      date: "2016-06-01",
      time: "19:00:00",
      location_id: 5001,
      business_id: 5002}),
    knex('activity').insert({id: 5003,
      group_id: 5002,
      name: "Matthew Winters Hike",
      custom_category_id: 5000,
      category_id: 5001,
      date: "2016-06-02",
      time: "19:00:00",
      location_id: 5001,
      business_id: 5003}),
    knex('activity').insert({id: 5004,
      group_id: 5003,
      name: "Creek Winery Tour",
      custom_category_id: 5000,
      category_id: 5001,
      date: "2016-06-03",
      time: "19:00:00",
      location_id: 5001,
      business_id: 5004})
    );
  };
