
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('activity').del(),

    // Inserts seed entries
    knex('activity').insert({id: 1,
      group_id: 1,
      name: 'Reunion!',
      custom_category_id: 0,
      category_id: 1,
      date: "2016-05-01",
      time: "19:00:00",
      location_id: 1,
      business_id: 1}),
    knex('activity').insert({id: 2,
      group_id: 1,
      name: "Graduation Party",
      custom_category_id: 0,
      category_id: 1,
      date: "2016-06-01",
      time: "19:00:00",
      location_id: 1,
      business_id: 2}),
    knex('activity').insert({id: 3,
      group_id: 2,
      name: "Matthew Winters Hike",
      custom_category_id: 0,
      category_id: 1,
      date: "2016-06-02",
      time: "19:00:00",
      location_id: 1,
      business_id: 3}),
    knex('activity').insert({id: 4,
      group_id: 3,
      name: "Creek Winery Tour",
      custom_category_id: 0,
      category_id: 1,
      date: "2016-06-03",
      time: "19:00:00",
      location_id: 1,
      business_id: 4})
    );
  };
