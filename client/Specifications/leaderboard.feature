
Feature: Leaderboard ranking by win percentage, fastest run time, and total score.

    Background:
        Given: A list of players with the following stats:
            | Player name   | Win percentage | Run time | Total score |
			| playerA       | 23             | 12.3     | 123         |
            | playerB       | 99             | 1.2      | 456         |
            | playerC       | 13             | 15.0     | 98          |
            | playerD       | 67             | 5.6      | 234         |
            | playerE       | 41             | 0.1      | 175         |

    Scenario Outline: Player wants to see rank by a specific stat.
        Given Only ranking by <stat> ignoring other stats.
        When Player selects rank by <stat> setting.
        Then The leaderbord should rank by <stat>.
   
        Example:
            | stat           |
            | win percentage |
            | run time       |
            | total score    |


	Scenario: Player opens a default leaderboard.
        Given The leaderboard ranks by default settings.
        When Player opens leaderboard.
        Then Leaderboard opens using default settings.

Feature: Leaderboard is updated after every game.

    Background:
        Given: A team of six players with zero stats:
            | Player name   | Win percentage | Run time | Total score |
			| playerA       | 0              | 0        | 0           |
            | playerB       | 0              | 0        | 0           |
            | playerC       | 0              | 0        | 0           |
            | playerD       | 0              | 0        | 0           |
            | playerE       | 0              | 0        | 0           |
            | playerF       | 0              | 0        | 0           | 

    Scenario: PlayerA is the only player who scores any points.
        Given PlayerA actually does something to earn points.
        When The game ends.
        Then PlayerA should be the only player with non-zero score.
        And The win percentage is updated.

    Scenario: A general game ends and all players' stats are updated.
        Given All players participate.
        When The game ends.
        Then All player stats are non-zero.



