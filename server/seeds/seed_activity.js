
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
      table.increments('id');
      table.integer('group_id');
      table.string('name');
      table.integer('custom_category_id');
      table.integer('category_id');
      table.date('date');
      table.time('time');
      table.integer('location_id');
      table.integer('business_id');
      table.string('address');
      table.string('city');
      table.string('state');
      table.string('category_name');
      table.float('lat');
      table.float('long');
      table.string('phone');
      table.string('image_url');
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
      name: "test2",
      custom_category_id: 0,
      category_id: 1,
      date: "2016-06-02",
      time: "19:00:00",
      location_id: 1,
      business_id: 3}),
    knex('activity').insert({id: 4,
      group_id: 3,
      name: "test1",
      custom_category_id: 0,
      category_id: 1,
      date: "2016-06-03",
      time: "19:00:00",
      location_id: 1,
      business_id: 4})
    );
  };
