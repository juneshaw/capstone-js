
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('activity_member').del(),

    // Inserts seed entries
    knex('activity_member').insert({id: 5001,
      activity_id: 5002,
      member_id: 5001,
      rsvp: 'Y'}),
    knex('activity_member').insert({id: 5002,
      activity_id: 5002,
      member_id: 5002,
      rsvp: 'N'}),
    knex('activity_member').insert({id: 5003,
      activity_id: 5002,
      member_id: 5003,
      rsvp: 'N'}),
    knex('activity_member').insert({id: 5004,
      activity_id: 5002,
      member_id: 5004,
      rsvp: 'Y'}),
    knex('activity_member').insert({id: 5005,
      activity_id: 5002,
      member_id: 5005,
      rsvp: 'M'}),
    knex('activity_member').insert({id: 5006,
      activity_id: 5002,
      member_id: 5006,
      rsvp: 'U'}),
    knex('activity_member').insert({id: 5007,
      activity_id: 5002,
      member_id: 5007,
      rsvp: 'U'}),
    knex('activity_member').insert({id: 5008,
      activity_id: 5002,
      member_id: 5008,
      rsvp: 'U'}),
    knex('activity_member').insert({id: 5009,
      activity_id: 5002,
      member_id: 5009,
      rsvp: 'U'})
  );
};
