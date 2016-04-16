var db = require('./db.js');
var utilities = require('./utilities.js');
var create = require('./create.js');

module.exports =
{
createActivities: function () {

  // Groups to schedule next
  var groups = [];
  // Lead time needed to build activity from the today to that day
  var leadDays = 20;

  // Get today's date to see what activities need to be built.
  var dateToday = new Date();

  // Get the Groups
  db.Groups().then(function(data) {

    // For each group, calculate the number of days left until the next activity date.
    data.forEach(function(group) {
      var dayDiff = utilities.dayDiff(dateToday, group.next_activity_date);

      // If the activity is within the lead time, put the group in the array to schedule
      if (dayDiff <= leadDays) {
        groups.push(group);
      }
    })

    // For each of the groups that need an activity scheduled, retrieve a random category,
    // and create those activities with the groups city_state and sort parameters for yelp.
    var randomCategoryIndex;
    groups.forEach(function(group) {
      console.log('group: ', group);
      db.preferenceTimes(group.preference_id).then(function(times) {
        db.preferenceCategories(group.preference_id).then(function(categories) {

          // Randomize the category to be one of the categories of the group
          var randomCategoryIndex = Math.floor(Math.random() * (categories.length - 0)) + 0;
          console.log('randomCategoryIndex: ', randomCategoryIndex);
          create.createActivity(group, categories[randomCategoryIndex].name, times);
        })
      })
    })
  })
},


};
