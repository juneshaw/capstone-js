var knex = require('../db/knex')

module.exports =
{
  Members: function() {
  return knex('member');
},

  Groups: function() {
  return knex('group');
},

  Preferences: function() {
  return knex('preference');
},

  Categories: function() {
  return knex('category');
},

  Activities: function() {
  return knex('activity');
},

  Contact_Info: function() {
  return knex('contact_info');
},

  Locations: function() {
  return knex('location');
},

  Comments: function() {
  return knex('comment');
},

  Activity_Members: function() {
  return knex('activity_member');
},

  Group_Members: function() {
  return knex('group_member');
},

  Preference_Categories: function() {
  return knex('preference_category');
},

  Custom_Categories: function() {
  return knex('custom_category');
},

  Businesses: function() {
  return knex('business');
},

insertMember: function (member) {
   return(this.Members().insert(member).returning('id'));
},

member: function(id) {
  return(this.Members().where('id', id).first());
},

updateMember: function(id, member) {
  return(this.Members().where('id', id).first().update(member));
},

deleteMember: function(id) {
  return(this.Members().where('id', id).del())
},

insertGroup: function(group) {
  return(this.Groups().insert(group).returning('id'));
},

group: function(id) {
  return(this.Groups().where('id', id).first())
},

updateGroup: function(id, group) {
  return(this.Groups().where('id', id).first().update(group));
},

deleteGroup: function(id) {
  return(this.Groups().where('id', id).del());
},

insertPreference: function (preference) {
   return(this.Preferences().insert(preference).returning('id'));
},

preference: function(id) {
  return(this.Preferences().where('id', id))
},

updatePreference: function(id, preference) {
  console.log('got to updatePreference', preference);
  return(this.Preferences().where('id', id).first().update(preference));
},

deletePreference: function(id) {
  return(this.Preferences().where('id', id).del())
},

insertCategory: function(category) {
  return(this.Categories().insert(category).returning('id'));
},

category: function(id) {
  return(this.Categories().where('id', id))
},

updateCategory: function(id, category) {
  return(this.Categories().where('id', id).first().update(category));
},

deleteCategory: function(id) {
  return(this.Categories().where('id', id).del());
},

insertActivity: function (activity) {
   return(this.Activitys().insert(activity).returning('id'));
},

activity: function(id) {
  console.log('in activity get');
  return(this.Activities().where('id', id))
},

updateActivity: function(id, activity) {
  return(this.Activitys().where('id', id).first().update(activity));
},

deleteActivity: function(id) {
  return(this.Activitys().where('id', id).del())
},

insertContact_Info: function(contact_info) {
  return(this.Contact_Info().insert(contact_info).returning('id'));
},

contact_info: function(id) {
  return(this.Contact_Info().where('id', id))
},

updateContact_Info: function(id, contact_info) {
  return(this.Contact_Info().where('id', id).first().update(contact_info));
},

deleteContact_Info: function(id) {
  return(this.Contact_Info().where('id', id).del());
},

insertLocation: function (location) {
   return(this.Locations().insert(location).returning('id'));
},

location: function(id) {
  return(this.Locations().where('id', id))
},

updateLocation: function(id, location) {
  return(this.Locations().where('id', id).first().update(location));
},

deleteLocation: function(id) {
  return(this.Locations().where('id', id).del())
},

insertComment: function(comment) {
  return(this.Comments().insert(comment).returning('id'));
},

comment: function(id) {
  return(this.Comments().where('id', id))
},

updateComment: function(id, comment) {
  return(this.Comments().where('id', id).first().update(comment));
},

deleteComment: function(id) {
  return(this.Comments().where('id', id).del());
},

insertActivity_Member: function (activity_member) {
   return(this.Activity_Members().insert(activity_member).returning('id'));
},

activity_member: function(id) {
  return(this.Activity_Members().where('id', id))
},

updateActivity_Member: function(id, activity_member) {
  return(this.Activity_Members().where('id', id).first().update(activity_member));
},

deleteActivity_Member: function(id) {
  return(this.Activity_Members().where('id', id).del())
},

insertGroupMember: function(group_member) {
  return(this.GroupMembers().insert(group_member).returning('id'));
},

group_member: function(id) {
  return(this.GroupMembers().where('id', id))
},

updateGroupMember: function(id, group_member) {
  return(this.GroupMembers().where('id', id).first().update(group_member));
},

deleteGroupMember: function(id) {
  return(this.GroupMembers().where('id', id).del());
},

insertPreference_Category: function (preference_category) {
   return(this.Preference_Categories().insert(preference_category).returning('id'));
},

preference_category: function(id) {
  return(this.Preference_Categories().where('id', id))
},

updatePreference_Category: function(id, preference_category) {
  return(this.Preference_Categories().where('id', id).first().update(preference_category));
},

deletePreference_Category: function(id) {
  return(this.Preference_Categories().where('id', id).del())
},

insertCustom_Category: function(custom_category) {
  return(this.Custom_Categories().insert(custom_category).returning('id'));
},

custom_category: function(id) {
  return(this.Custom_Categories().where('id', id))
},

updateCustom_Category: function(id, custom_category) {
  return(this.Custom_Categories().where('id', id).first().update(custom_category));
},

deleteCustom_Category: function(id) {
  return(this.Custom_Categories().where('id', id).del());
},

insertBusiness: function(business) {
  return(this.Businesses().insert(business).returning('id'));
},

business: function(id) {
  console.log('in the db business!');
  return(this.Businesses().where('id', id))
},

updateBusiness: function(id, business) {
  return(this.Businesses().where('id', id).first().update(business));
},

deleteBusiness: function(id) {
  return(this.Businesses().where('id', id).del());
},

//////////////

activitiesForGroup: function(id) {
  console.log('activitiesForGroup id: ', id);
  return(this.Activities().where('group_id', id));
},

activityMembers: function(activityId) {
  // return (this.Activities().where('id', activityId).join('activity_member', 'activity.id', 'activity_member.actiivty_id'));
  return (this.Members().join('activity_member', 'member.id', 'activity_member.member_id').where('activity_member.activity_id', activityId));
},

groupByPreference: function(preferenceId) {
  return (this.Groups().where('preference_id', preferenceId).first());
}
//   return(this.Members().join('activity_member', 'member.id', 'activity_member.member_id').where('activity_member.activity_id', activityId))
// }

// userByName: function(user_name) {
//     return(this.Users().where('user_name', user_name));
// },
//
// authorDefaults: function(id) {
//     return({'first_name': "", 'last_name': "", 'biography': "", 'portrait_url': ""});
// },
//
// bookDefaults: function() {
//     return({'title': "", 'genre': "", 'portrait_url': "", 'description': ""});
// },
//
// bookContributorsByBook: function(book_id) {
//     return(this.BookContributors().where('book_id', book_id));
// },
//
// bookContributorsByAuthor: function(author_id) {
//     return(this.BookContributors().where('author_id', author_id));
// },
};
