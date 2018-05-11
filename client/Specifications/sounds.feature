Scenario Outline: In-game music
  Given I have not disabled music
  When I am not yet in game
  I will hear songs from the film Forrest Gump

  Given I am in the Settings page
  When I de-select songs
  I will no longer hear those songs

  Given I am in game
  When I am in a specific map
  I will hear background music that goes with the theme of the map

  Given I am in the Settings page
  When I adjust the Music slider
  Then the volume of music will be adjusted
  And the volume of in-game sound will be unaffected

Scenario Outline: In-game sound
   Given I have not disabled sound
   When I click on buttons
   Then I will hear a sound to indicate the click

   Given I am in a Live Game
   When I complete an interaction within the game
   Then I will hear a sound relating to that action

