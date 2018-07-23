Feature: Increment
  In order to display votes
  As a voter
  I want to increment a vote

  Scenario: Increment a vote
    Given a vote count of 1
    When I increment the vote by 1
    Then the vote should contain 2

