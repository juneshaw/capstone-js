# Event Bot

##_Deployment_
* Client - ANOTHER DIRECTORY
https://event-bot-client-jshaw.firebaseapp.com/#/

* Server - THIS DIRECTORY
(Do not run for app access, run the client above)
http://event-bot-server-jshaw.herokuapp.com/
_Server side only: not a user executable.  Run the client side above._

##_Git_
* Client
https://github.com/juneshaw/event-bot-client-jshaw
* Server
https://github.com/juneshaw/event-bot-server-jshaw

##_Description_
Event Bot takes the place of the dream host for your different groups, whether family, friends, or colleagues.

Event Bot is a web application that allows groups to automate the recurrence of get-togethers.  The user enters a group of friends' phone numbers, pictures, and preferences for category and periodicity of events.  Event Bot takes care of the rest!  
1. 2 weeks before the group's 'next event date', and using the Yelp API, Event Bot selects an event that is random and within the group's central location radius.  The event will be for the group's chosen day-of-the-week and time.
2. It sends SMS text invitations to each group member.  The text includes all the info.
* Date, time
* Category of event
* Place name
* Address
* Phone number
3. It collects SMS text replies to those invitations for Y,N,M.
4. 2 days before the event, it sends a reminder text to the group.
Event Bot group members can peruse the site to see the group history, event RSVPs and event detailed information such as maps and possible pictures and ratings for the venue.


##_Technology_
* HTML/CSS, Express, Node.js, postgreSQL with CRUD.
MVC.
* RESTful services.
* HTTP Asynchronous processing.
* APIs: Yelp, Google
* Knex ORM for postgreSQL database connection.
* Event planning custom algorithm that randomizes events.

##_Seeds_
* Seed files for groups and past events can be run to reset to the initial configuration.
