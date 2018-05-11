Scenario Outline: Chatting with Players
   Given I am in the Pregame Lobby or a Match
   Then I should see a chat log and a textbox to type messages
   When I type a message in the textbox and press Enter
   Then all Players in the Match should see the message in the chat log
   Given I want to message my team only
   When I type a message starting with /team
   Then all my team members should see the message in the chat log
   Given I want to message an individual player
   When I type a message starting with /<Username>
   Then user <Username> should see the message in the chat log