var APP_ID = arn:aws:lambda:us-east-1:646350141162:function:Mobile-test-skill; //replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');

var TMobile = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
TMobile.prototype = Object.create(AlexaSkill.prototype);
TMobile.prototype.constructor = TMobile;

TMobile.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    console.log("TMobile onSessionStarted requestId: " + sessionStartedRequest.requestId
        + ", sessionId: " + session.sessionId);
    // any initialization logic goes here
};

TMobile.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    console.log("TMobile onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    var speechOutput = "Welcome to T Mobile, you can ask for your balance";
    var repromptText = "You can ask for your balance";
    response.ask(speechOutput, repromptText);
};

TMobile.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    console.log("TMobile onSessionEnded requestId: " + sessionEndedRequest.requestId
        + ", sessionId: " + session.sessionId);
    // any cleanup logic goes here
};

TMobile.prototype.intentHandlers = {
    // register custom intent handlers
    "TMobile": function (intent, session, response) {
        response.tellWithCard("Your current balance is $69", "Your current balance is $69", "Your current balance is $69!");
    },
    "AMAZON.HelpIntent": function (intent, session, response) {
        response.ask("You can ask for your balance", "You can ask for your balance");
    }
};

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the HelloWorld skill.
    var TMobile = new TMobile();
    TMobile.execute(event, context);
};

