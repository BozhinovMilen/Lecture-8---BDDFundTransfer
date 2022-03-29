Feature: Customer Transfer's Fund
       As a customer,
       I want to transfer funds 
       so that I can send money to my friends and family
       
 @JIRA-3322 @regression
Scenario: Valid Payee
       Given the user is on Fund Transfer Page
       When he enters "Jim" as payee name
       And he enters "100" as amount
       And he Submits request for Fund Transfer
       Then ensure the fund transfer is complete with "$100 transferred successfully to Jim!!" message
@regression
Scenario: nov test case
     Given the user is on Fund Transfer Page
     When he enters "Tim" as payee name
     And he enters "10" as amount
     And he Submits request for Fund Transfer
     Then ensure the fund transfer is complete with "$10 transferred successfully to Tim!!" message

@sanity @regression  @JIRA-2342
Scenario: Invalid Payee1
      Given the user is on Fund Transfer Page
      When he enters "John" as payee name
      And he enters "100" as amount
      And he Submits request for Fund Transfer
      Then ensure a transaction failure message "Transfer failed!! 'John' is not approved. Please contact your branch" is displayed

 @regression
Scenario: Account is overdrawn past the overdraft limit
      Given the user is on Fund Transfer Page
      When he enters "Tim" as payee name
      And he enters "1000000" as amount
      And he Submits request for Fund Transfer
      Then ensure a transaction failure message "Transfer failed!! account cannot be overdrawn" is displayed

  @regression
  Scenario: Account is overdrawn past the overdraft limit
    Given the user is on Fund Transfer Page
    When he enters "Tim" as payee name
    And he enters "1000000" as amount
    And he Submits request for Fund Transfer
    Then ensure a transaction failure message "Transfer failed!! account cannot be overdrawn" is displayed


@fundTransferTest @regression
Scenario Outline: datadriven negative
	  Given the user is on Fund Transfer Page
      When he enters "<payee>" as payee name
      And he enters "<amount>" as amount
      And he Submits request for Fund Transfer
      Then ensure a transaction failure message "<expected_failure_message>" is displayed
	Examples:
	 	|  payee         | amount | expected_failure_message |
	 	| John           | 100000 | Transfer failed!! 'John' is not approved. Please contact your branch |
        | Jim            | 10     | $10 transferred successfully to Jim!! |