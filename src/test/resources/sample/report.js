$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Adan.feature");
formatter.feature({
  "name": "Adanic page testing",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "verfiy the all the process in flowing correctly",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter the page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter the data\"\u003cuser\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user click on the login",
  "keyword": "And "
});
formatter.step({
  "name": "user select the location",
  "keyword": "And "
});
formatter.step({
  "name": "User select the Hotels",
  "keyword": "And "
});
formatter.step({
  "name": "User select the Room Type",
  "keyword": "And "
});
formatter.step({
  "name": "user select the No.of Rooms",
  "keyword": "And "
});
formatter.step({
  "name": "check in date",
  "keyword": "And "
});
formatter.step({
  "name": "Check out date",
  "keyword": "And "
});
formatter.step({
  "name": "Adults per room",
  "keyword": "And "
});
formatter.step({
  "name": "Children per room",
  "keyword": "And "
});
formatter.step({
  "name": "search the hotel",
  "keyword": "And "
});
formatter.step({
  "name": "button to continue",
  "keyword": "And "
});
formatter.step({
  "name": "click continue",
  "keyword": "And "
});
formatter.step({
  "name": "user enter the FirstName\"\u003cFirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enter the LastName\"\u003cLastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enter the address\"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enter the CC\"\u003cccno\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user select the CC type",
  "keyword": "And "
});
formatter.step({
  "name": "user select the Expiry date",
  "keyword": "And "
});
formatter.step({
  "name": "user select the Expiry year",
  "keyword": "And "
});
formatter.step({
  "name": "user enter the CVV number\"\u003ccvvnumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click the book process",
  "keyword": "And "
});
formatter.step({
  "name": "cancellation step",
  "keyword": "And "
});
formatter.step({
  "name": "first step of cancellation",
  "keyword": "And "
});
formatter.step({
  "name": "second step of cancellation",
  "keyword": "And "
});
formatter.step({
  "name": "page to be displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "logout the account",
  "keyword": "And "
});
formatter.step({
  "name": "quit the browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user",
        "",
        "password",
        "",
        "Firstname",
        "Lastname",
        "address",
        "ccno",
        "cvvnumber"
      ]
    },
    {
      "cells": [
        "dineshaltier",
        "",
        "6GRW48",
        "",
        "dinesh",
        "G",
        "N0.12/23 XYZ address chennai",
        "4111111111111110",
        "123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "verfiy the all the process in flowing correctly",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter the page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_enter_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the data\"dineshaltier\" and \"6GRW48\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enter_the_data_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_click_on_the_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select the location",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_select_the_location()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select the Hotels",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_select_the_Hotels()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select the Room Type",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_select_the_Room_Type()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select the No.of Rooms",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_select_the_No_of_Rooms()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check in date",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.check_in_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check out date",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.check_out_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Adults per room",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.adults_per_room()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Children per room",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.children_per_room()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "search the hotel",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.search_the_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "button to continue",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.button_to_continue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click continue",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.click_continue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the FirstName\"dinesh\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_enter_the_FirstName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the LastName\"G\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_enter_the_LastName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the address\"N0.12/23 XYZ address chennai\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_enter_the_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the CC\"4111111111111110\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.enter_the_CC(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select the CC type",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_select_the_CC_type()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select the Expiry date",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_select_the_Expiry_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select the Expiry year",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_select_the_Expiry_year()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the CVV number\"123\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_enter_the_CVV_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the book process",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.click_the_book_process()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "cancellation step",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.cancellation_step()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "first step of cancellation",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.first_step_of_cancellation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "second step of cancellation",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.second_step_of_cancellation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page to be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.page_to_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "logout the account",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.logout_the_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.quit_the_browser()"
});
formatter.result({
  "status": "passed"
});
});