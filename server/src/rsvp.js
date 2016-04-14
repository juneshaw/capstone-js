var twilio = require('twilio');

// Create a new REST API client to make authenticated requests against the
// twilio back end

module.exports = {
  invite: function(id, group, activity, time, category_filter) {

    // Pass in parameters to the REST API using an object literal notation. The
    // REST client will handle authentication and response serialzation for you.
    var greetingText = "Time for a new event! ";
    var activityText = "Group " + group.title + " will be meeting at " + activity.name +" (" + category_filter + ") on " + group.next_activity_date + ", " + time + "!";
    var inviteBody = greetingText + activityText;
    var urlText = "Go here for more info!  Hope to see you there!"
    var urlLink = "https://capstone-js2.firebaseapp.com/#/activities/" + id;
    var urlBody = urlText + urlLink;
    var rsvpBody = "Please RSVP here with a Y or N";
    // var wholeBody = inviteBody + " " + urlBody;
    this.sendMessage(inviteBody);
    this.sendMessage(urlBody);
    this.sendMessage(rsvpBody);
  },

sendMessage: function(body) {
  var client = new twilio.RestClient(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

  client.sms.messages.create({
      to:'+13037264083',
      // to:'+17202327517',
      // 720-232-7517
      // to:'16142708123',
      from:process.env.TWILIO_NUMBER,
      body:body
      // body:'Would you like to go to my the next group event for activity'+id+'?'
  }, function(error, message) {
      // The HTTP request to Twilio will run asynchronously. This callback
      // function will be called when a response is received from Twilio
      // The "error" variable will contain error information, if any.
      // If the request was successful, this value will be "falsy"
      if (!error) {
          // The second argument to the callback will contain the information
          // sent back by Twilio for the request. In this case, it is the
          // information about the text messsage you just sent:
          console.log('Success! The SID for this SMS message is:');
          console.log(message.sid);

          console.log('Message sent on:');
          console.log(message.dateCreated);
      }
      else {
          console.log('Oops! There was an error.');
          console.log('Error: ', error);
      }
    });
  }
}
