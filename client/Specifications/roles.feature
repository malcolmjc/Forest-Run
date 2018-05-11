Scenario Outline: Player Roles
   Given I am a Runner
   When I enter the match
   Then I am able to run and jump my way through the course

   Given I am a Helper
   When I enter the match
   Then I am able to place items
   And destroy obstacles to assist the Runner through the course

   Given I am a Blocker
   When I enter the match
   Then my view is within the other team's game
   And I am able to place obstacles to obstruct the other team's Runner

Scenario Outline: Player Role Changes
   Given I stay on the same team
   When I play 3 games
   Then I will play each role once