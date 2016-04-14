var express = require('express');
var router = express.Router();
var db = require('../src/db.js');
var engine = require('../src/engine.js')
// var mailcomposer = require('mailcomposer');
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// require('dotenv').load();
var dotenv = require('dotenv');
dotenv.load();

/* GET index page. */
router.get('/', function(req, res, next) {
  console.log('got to the right groups route');
  db.Groups().then(function(data) {
    res.send({payload:data});
  })

  // res.send({'test':"BACK from the server"});
});

router.get('/preference/:id', function(req, res, next) {
  console.log('**************** group id in get is: ', req.params.id);
  db.groupByPreference(req.params.id).then(function(data) {
    res.send({payload:data});
  });
})

router.get('/actgen', function(req, res, next) {
  console.log('in activitygen');
  var activities = engine.createActivities();
    res.send({payload:activities});

})

router.get('/:id/activities', function(req, res, next) {
  // knex('users').orderBy('name', 'desc')

  db.activitiesForGroup(req.params.id).orderBy('date', 'desc').first().then(function(data) {
    res.send({payload:data});
  });
});

router.get('/:id/members', function(req, res, next) {
  db.groupMembers(req.params.id).then(function(data) {
    console.log('in db, groupmembers: ', data);
    res.send({payload:data});
  });
});

router.get('/:id/members/:member_id', function(req, res, next) {
  db.groupMembers(req.params.id).then(function(data) {
    console.log('in db, groupmembers: ', data);
    res.send({payload:data});
  });
});

router.get('/:id', function(req, res, next) {
  console.log('got to the show group route');
  db.group(req.params.id).then(function(data) {
    res.send({payload:data});
  })
});

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'ConnectBot' });
// });

// Test of Twilio send
// This can be a link to a suggestion of the activity, or HTML of the idea
// or ticket stub/date/time/event.
// WORKING CORRECTLY ON HEROKU
router.get('/send', function(req, res, next) {
  // Load the twilio module
  var twilio = require('twilio');

  // Create a new REST API client to make authenticated requests against the
  // twilio back end
  var client = new twilio.RestClient(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

  // Pass in parameters to the REST API using an object literal notation. The
  // REST client will handle authentication and response serialzation for you.
  client.sms.messages.create({
      to:'+13037264083',
      from:process.env.TWILIO_NUMBER,
      body:'ahoy hoy! Testing Twilio and node.js'
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
      } else {
          console.log('Oops! There was an error.');
          console.log('Error: ', error);
      }
  });
});

// Reply back to app SMS number will be received here
// This could be a Y, N, M confirmation to register.
// The Y/N will be stored, and the M will be questioned again closer to the date.
// Comments can be allowed to store on bulletin board for STRETCH
// A THANK YOU can be added if necessary.
// HTML pic of animal can be generated for STRETCH
// calendar.ics can be returned for STRETCH
// (console.log can screw up Twilio.)
// (get was suggested, but post is working.)
// WORKING ON HEROKU
router.post('/receive', function(req, res, next) {
  console.log('Received a message from Twilio: ');
  console.log('Message: ', req.body.Body);
  console.log('From: ', req.body.From);
});

module.exports = router;
