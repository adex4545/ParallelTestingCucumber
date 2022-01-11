$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/flightBooking.feature");
formatter.feature({
  "name": "Book flight ticket",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Book Flight for one way trip",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@BookOneWayFlight"
    }
  ]
});
formatter.step({
  "name": "I want to book one way flight ticket from Dublin to London on 22nd July for 2 adults and 2 kids",
  "keyword": "Given "
});
formatter.match({
  "location": "parallelStepDefinitions.FlightBookingDefinitions.i_want_to_book_one_way_flight_ticket_from_Dublin_to_London_on_22nd_July_for_adults_and_kids(java.lang.Integer,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "TripAdvisor should provide me options to book flight ticket",
  "keyword": "Then "
});
formatter.match({
  "location": "parallelStepDefinitions.FlightBookingDefinitions.tripadvisor_should_provide_me_options_to_book_flight_ticket()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Book Flight for round trip",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@BookRoundTripFlight"
    }
  ]
});
formatter.step({
  "name": "I want to book round trip flight ticket from Dublin to India on 30th June and return 10th July for 2 adults and 1 kid",
  "keyword": "Given "
});
formatter.match({
  "location": "parallelStepDefinitions.FlightBookingDefinitions.i_want_to_book_round_trip_flight_ticket_from_Dublin_to_India_on_30th_June_and_return_10th_July_for_adults_and_kid(java.lang.Integer,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "TripAdvisor should provide me options to book flight ticket",
  "keyword": "Then "
});
formatter.match({
  "location": "parallelStepDefinitions.FlightBookingDefinitions.tripadvisor_should_provide_me_options_to_book_flight_ticket()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/homePage.feature");
formatter.feature({
  "name": "Home page validation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login with valid credentials to check Quick Launch options  - Feature 2, Scenario -1",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ValidQuickLaunch"
    }
  ]
});
formatter.step({
  "name": "User is in Dashboard page",
  "keyword": "When "
});
formatter.step({
  "name": "there are valid QuickLaunch options \u0027\u003coptions\u003e\u0027",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "options"
      ]
    },
    {
      "cells": [
        "Assign Leave"
      ]
    },
    {
      "cells": [
        "Leave List"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User Navigates to HRM login page",
  "keyword": "Given "
});
formatter.match({
  "location": "parallelStepDefinitions.HomePageDefinition.user_Navigates_to_HRM_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "parallelStepDefinitions.HomePageDefinition.user_login_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with valid credentials to check Quick Launch options  - Feature 2, Scenario -1",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ValidQuickLaunch"
    }
  ]
});
formatter.step({
  "name": "User is in Dashboard page",
  "keyword": "When "
});
formatter.match({
  "location": "parallelStepDefinitions.HomePageDefinition.user_is_in_Dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there are valid QuickLaunch options \u0027Assign Leave\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "parallelStepDefinitions.HomePageDefinition.there_are_valid_QuickLaunch_options(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User Navigates to HRM login page",
  "keyword": "Given "
});
formatter.match({
  "location": "parallelStepDefinitions.HomePageDefinition.user_Navigates_to_HRM_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "parallelStepDefinitions.HomePageDefinition.user_login_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with valid credentials to check Quick Launch options  - Feature 2, Scenario -1",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ValidQuickLaunch"
    }
  ]
});
formatter.step({
  "name": "User is in Dashboard page",
  "keyword": "When "
});
formatter.match({
  "location": "parallelStepDefinitions.HomePageDefinition.user_is_in_Dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there are valid QuickLaunch options \u0027Leave List\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "parallelStepDefinitions.HomePageDefinition.there_are_valid_QuickLaunch_options(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login with valid credentials to check Menu Options - Feature 2, Scenario -2",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ValidLegendOptions"
    }
  ]
});
formatter.step({
  "name": "User is in Dashboard page",
  "keyword": "When "
});
formatter.step({
  "name": "there are valid Legend options \u0027\u003clegendOptions\u003e\u0027",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "legendOptions"
      ]
    },
    {
      "cells": [
        "Administration"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User Navigates to HRM login page",
  "keyword": "Given "
});
formatter.match({
  "location": "parallelStepDefinitions.HomePageDefinition.user_Navigates_to_HRM_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "parallelStepDefinitions.HomePageDefinition.user_login_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with valid credentials to check Menu Options - Feature 2, Scenario -2",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ValidLegendOptions"
    }
  ]
});
formatter.step({
  "name": "User is in Dashboard page",
  "keyword": "When "
});
formatter.match({
  "location": "parallelStepDefinitions.HomePageDefinition.user_is_in_Dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there are valid Legend options \u0027Administration\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "parallelStepDefinitions.HomePageDefinition.there_are_valid_Legend_options(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/login.feature");
formatter.feature({
  "name": "Login to HRM Application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login with valid credentials - Feature 1, Scenario -1",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ValidCredentials"
    }
  ]
});
formatter.step({
  "name": "User is on Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "parallelStepDefinitions.LoginDefinition.user_is_on_Home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username as \"Admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "parallelStepDefinitions.LoginDefinition.user_enters_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password as \"admin123\"",
  "keyword": "And "
});
formatter.match({
  "location": "parallelStepDefinitions.LoginDefinition.user_enters_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "parallelStepDefinitions.LoginDefinition.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/trainBooking.feature");
formatter.feature({
  "name": "Book Train Ticket",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Book train ticket for one way",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@BookOneWayTrain"
    }
  ]
});
formatter.step({
  "name": "I want to book one way train ticket from Dublin to Cork on 10th June for 2 adults and 2 kids",
  "keyword": "Given "
});
formatter.match({
  "location": "parallelStepDefinitions.TrainBookingDefinitions.i_want_to_book_one_way_train_ticket_from_Dublin_to_Cork_on_10th_June_for_adults_and_kids(java.lang.Integer,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "IrishRail should provide me options to book train ticket for the specified date",
  "keyword": "Then "
});
formatter.match({
  "location": "parallelStepDefinitions.TrainBookingDefinitions.irishrail_should_provide_me_options_to_book_train_ticket_for_the_specified_date()"
});
formatter.result({
  "status": "passed"
});
});