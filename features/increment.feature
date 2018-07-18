Feature: Increment

  Increment the number of votes for a particular color

  Scenario: Increment a vote
	  Given the current vote
		When the vote is incremented
		Then it should increase by one

