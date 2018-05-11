Scenario Outline: Making sure everybody's ready
   Given I am in a non-full lobby
   And my status is not ready
   When I press the ready button
   Then my status should be set to ready

   Given I am in a non-full lobby
   And my status is ready
   When I press the ready button
   Then my status should be set to not ready
   
   Given I am in a full lobby
   And my status is not ready
   When I press the ready button
   Then my status should be set to ready
   
   Given I am in a full lobby
   And my status is ready
   When I press the ready button
   Then my status should be set to not ready
   
   Given I am in a full lobby
   And my status is ready
   When all other statuses are ready
   Then the start game countdown should start