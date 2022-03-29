$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/fundtransfer.feature");
formatter.feature({
  "name": "Customer Transfer\u0027s Fund",
  "description": "       As a customer,\n       I want to transfer funds \n       so that I can send money to my friends and family",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Valid Payee",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@JIRA-3322"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on Fund Transfer Page",
  "keyword": "Given "
});
formatter.match({
  "location": "FundTransferStepDef.the_user_is_on_Fund_Transfer_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he enters \"Jim\" as payee name",
  "keyword": "When "
});
formatter.match({
  "location": "FundTransferStepDef.he_enters_as_payee_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he enters \"100\" as amount",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferStepDef.he_enters_as_amount(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he Submits request for Fund Transfer",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferStepDef.he_Submits_request_for_Fund_Transfer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ensure the fund transfer is complete with \"$100 transferred successfully to Jim!!\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferStepDef.ensure_the_fund_transfer_is_complete_with_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "nov test case",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on Fund Transfer Page",
  "keyword": "Given "
});
formatter.match({
  "location": "FundTransferStepDef.the_user_is_on_Fund_Transfer_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he enters \"Tim\" as payee name",
  "keyword": "When "
});
formatter.match({
  "location": "FundTransferStepDef.he_enters_as_payee_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he enters \"10\" as amount",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferStepDef.he_enters_as_amount(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he Submits request for Fund Transfer",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferStepDef.he_Submits_request_for_Fund_Transfer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ensure the fund transfer is complete with \"$10 transferred successfully to Tim!!\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferStepDef.ensure_the_fund_transfer_is_complete_with_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Invalid Payee1",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@JIRA-2342"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on Fund Transfer Page",
  "keyword": "Given "
});
formatter.match({
  "location": "FundTransferStepDef.the_user_is_on_Fund_Transfer_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he enters \"John\" as payee name",
  "keyword": "When "
});
formatter.match({
  "location": "FundTransferStepDef.he_enters_as_payee_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he enters \"100\" as amount",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferStepDef.he_enters_as_amount(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he Submits request for Fund Transfer",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferStepDef.he_Submits_request_for_Fund_Transfer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ensure a transaction failure message \"Transfer failed!! \u0027John\u0027 is not approved. Please contact your branch\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferStepDef.ensure_a_transaction_failure_message_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Account is overdrawn past the overdraft limit",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on Fund Transfer Page",
  "keyword": "Given "
});
formatter.match({
  "location": "FundTransferStepDef.the_user_is_on_Fund_Transfer_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he enters \"Tim\" as payee name",
  "keyword": "When "
});
formatter.match({
  "location": "FundTransferStepDef.he_enters_as_payee_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he enters \"1000000\" as amount",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferStepDef.he_enters_as_amount(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he Submits request for Fund Transfer",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferStepDef.he_Submits_request_for_Fund_Transfer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ensure a transaction failure message \"Transfer failed!! account cannot be overdrawn\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferStepDef.ensure_a_transaction_failure_message_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "datadriven negative",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@fundTransferTest"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "the user is on Fund Transfer Page",
  "keyword": "Given "
});
formatter.step({
  "name": "he enters \"\u003cpayee\u003e\" as payee name",
  "keyword": "When "
});
formatter.step({
  "name": "he enters \"\u003camount\u003e\" as amount",
  "keyword": "And "
});
formatter.step({
  "name": "he Submits request for Fund Transfer",
  "keyword": "And "
});
formatter.step({
  "name": "ensure a transaction failure message \"\u003cexpected_failure_message\u003e\" is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "payee",
        "amount",
        "expected_failure_message"
      ]
    },
    {
      "cells": [
        "John",
        "100000",
        "Transfer failed!! \u0027John\u0027 is not approved. Please contact your branch"
      ]
    },
    {
      "cells": [
        "Jim",
        "10",
        "$10 transferred successfully to Jim!!"
      ]
    }
  ]
});
formatter.scenario({
  "name": "datadriven negative",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@fundTransferTest"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on Fund Transfer Page",
  "keyword": "Given "
});
formatter.match({
  "location": "FundTransferStepDef.the_user_is_on_Fund_Transfer_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he enters \"John\" as payee name",
  "keyword": "When "
});
formatter.match({
  "location": "FundTransferStepDef.he_enters_as_payee_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he enters \"100000\" as amount",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferStepDef.he_enters_as_amount(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he Submits request for Fund Transfer",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferStepDef.he_Submits_request_for_Fund_Transfer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ensure a transaction failure message \"Transfer failed!! \u0027John\u0027 is not approved. Please contact your branch\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferStepDef.ensure_a_transaction_failure_message_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "datadriven negative",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@fundTransferTest"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on Fund Transfer Page",
  "keyword": "Given "
});
formatter.match({
  "location": "FundTransferStepDef.the_user_is_on_Fund_Transfer_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he enters \"Jim\" as payee name",
  "keyword": "When "
});
formatter.match({
  "location": "FundTransferStepDef.he_enters_as_payee_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he enters \"10\" as amount",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferStepDef.he_enters_as_amount(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he Submits request for Fund Transfer",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferStepDef.he_Submits_request_for_Fund_Transfer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ensure a transaction failure message \"$10 transferred successfully to Jim!!\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferStepDef.ensure_a_transaction_failure_message_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});