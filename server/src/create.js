
var oauthSignature = require('oauth-signature');
var n = require('nonce')();
var request = require('request');
var qs = require('querystring');
var _ = require('lodash');
var db = require('./db.js');
var rsvp = require('./rsvp.js');

module.exports = {

  createActivity: function(group, category_filter, time) {
    console.log('got the createActivity call with', group, category_filter, time.time);

    var set_parameters =
    {location: group.city_state, sort: group.sort, category_filter: category_filter}
    // {location:req.params.location,sort:req.params.sort};
    //  {location:'Evergreen+CO',sort:'2'};
    function callback(error, response, body) {
      // res.send(body);
      console.log('error: ', error);
      console.log('response: ', response);
      console.log('body: ', body);
      var activities = JSON.parse(body).businesses;
      console.log('activities in gen: ', activities);
      var randomResultIndex= Math.floor(Math.random() * (activities.length - 0 )) + 0;
      console.log('chosen activity: ', activities[randomResultIndex]);
      var activity = activities[randomResultIndex];

      db.insertActivity({group_id:group.id,
      name: activity.name,
      custom_category_id: 0,
      category_id: 0,
      date: group.next_activity_date,
      time: time.time,
      location_id: group.location_id,
      business_id: 0,
      address: activity.location.address[0],
      city: activity.location.city,
      state: activity.location.state_code,
      lat: activity.location.coordinate.lat,
      long: activity.location.coordinate.long,
      phone: activity.display_phone,
      image_url: activity.image_url,
      category_name: category_filter
    }).then(function(data) {
        var activityId = data[0];
        console.log('new activity data: ', data[0]);   // need the id back
        console.log('ACTIVITY: ', activity);
        console.log('GROUP: ', group);
        console.log('TIME: ', time.time);
        var oldActivityId = this;
        db.groupMembers(group.id).then(function(members, oldActivityId) {
          console.log('members!!', members);
          console.log('this above db: ****', oldActivityId);
          console.log('before ac id: ', activityId);
          var activityId = this.activityId;
          console.log('outside ac id', activityId);
          console.log('members: ', members);
          members.forEach(function(member) {
            console.log('to am *****', this, member.id);
            db.insertActivity_Member({activity_id: this.activityId,
                                    member_id: member.id,
                                    rsvp: 'N'}).then(function() {
                                      console.log('inserted');
                                      db.member(member.id).then(function(data) {
                                        var phone = data.phone;
                                        rsvp.invite(data[0], group, activity, time.time, category_filter, phone);
                                      })
            })
          }, this)
        }, this)
      })
    }




  var request_yelp = function(set_parameters, callback) {

      /* The type of request */
    var httpMethod = 'GET';

      /* The url we are using for the request */
    var url = 'http://api.yelp.com/v2/search';

      /* We can setup default parameters here */
    var default_parameters = {
      location: 'Denver+CO',
      sort: '2'
    };

  /* We set the require parameters here */
    var required_parameters = {
      // oauth_consumer_key : process.env.oauth_consumer_key,
      oauth_consumer_key : process.env.YELP_CONSUMER_KEY,
      oauth_token : process.env.YELP_TOKEN,
      oauth_nonce : n(),
      oauth_timestamp : n().toString().substr(0,10),
      oauth_signature_method : 'HMAC-SHA1',
      oauth_version : '1.0'
    };
    console.log('required parameters: ', required_parameters, '*****');

    /* We combine all the parameters in order of importance */
    var parameters = _.assign(default_parameters, set_parameters, required_parameters);

    /* We set our secrets here */
    var consumerSecret = process.env.YELP_CONSUMER_SECRET;
    var tokenSecret = process.env.YELP_TOKEN_SECRET;

    /* Then we call Yelp's Oauth 1.0a server, and it returns a signature */
    /* Note: This signature is only good for 300 seconds after the oauth_timestamp */
    var signature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret, { encodeSignature: false});

    /* We add the signature to the list of paramters */
    parameters.oauth_signature = signature;

    /* Then we turn the paramters object, to a query string */
    var paramURL = qs.stringify(parameters);

    /* Add the query string to the url */
    var apiURL = url+'?'+paramURL;
    console.log('apiURL: ', apiURL);

    /* Then we use request to send make the API Request */

    request(apiURL, function(error, response, body){
      return callback(error, response, body);
    });

    };

    request_yelp(set_parameters, callback);
  }
}
