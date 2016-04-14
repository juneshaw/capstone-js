
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('group').del(),

    // Inserts seed entries
    knex('group').insert({id: 5001,
      title: 'CSU Buddies',
      host_id: 5001,
      bio: "Friends from CSU.  This group originated from dorm suitemates and extended friends.  We went on spring break trips, went to away athletic functions, hung out together.  We reunite during CSU football season, but are trying to get together occasionally during the rest of the year.",
      image_url: 'https://s3-us-west-1.amazonaws.com/connectbot/friends_dusk.jpg',
      preference_id: 5001,
      location_id: 5001,
      sort: 1,
      next_activity_date: "2016-04-25",
      city_state: "Arvada+CO"}),
    knex('group').insert({id: 5002,
      title: 'Galvanize Cohort',
      host_id: 5001,
      bio: "Galvanize Full Stack G18 Cohort.  We went through 6 months of intense web developer curriculum together.  Now that we are off to our own adventures, we want to keep the group together",
      image_url: 'https://s3-us-west-1.amazonaws.com/connectbot/friends_street.jpg',
      preference_id: 5002,
      location_id: 5002,
      sort: 2,
      next_activity_date: "2016-06-01",
      city_state: "Denver+CO"}),
    knex('group').insert({id: 5003,
      title: 'Cousins in Denver',
      host_id: 5001,
      bio: "These are cousins from the Murphy side of my family.  There are 6 of us that live in the Denver metro area.  Family reunions stopped a while back, but we want to catch up every now and then!",
      image_url: 'https://s3-us-west-1.amazonaws.com/connectbot/friends_river.jpg',
      preference_id: 5003,
      location_id: 5003,
      sort: 0,
      next_activity_date: "2016-06-05",
      city_state:"Denver+CO"})
  );
};
