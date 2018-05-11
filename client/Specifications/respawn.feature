Scenario Outline: Respawning
   Given that I am a Runner in a match
   When I fall below height 0
   Then I should reappear at a Checkpoint
   Given I have made it to <CheckpointNumber>
   When I fall below height 0
   Then I should reappear at <CheckpointNumber>