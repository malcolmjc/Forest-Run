Scenario Outline: Tiered Multiplayer
   Given I just started the game
   When I queue for my first 10 games
   Then I am placed in a rank based on my winrate

   Given I have a winrate over 55%
   When I win a game
   Then I am moved up a rank

   Given I have a winrate under 45%
   When I loose a game
   Then I am moved down a rank

   Given I am queued for a game
   When there is a game within my rank range
   Then I will join that game
   
   Given I am queued for a game
   When there is no game within my rank range
   Then I will expand my rank range by 1
   
   Given there is no game within my rank range
   When the rank range hits the limit
   Then create a game for my current rank