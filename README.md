# Accessibility Lab #1: Use of Audio Cues for Deaf/HoH Users
## To-Do
- [x] Database Schema Design (Dec 14)
- [ ] Implementation (Feb 1)
   - [ ] Game (Jan 4)
      - [x] Countdown Timer
         - [x] Start timer if game is started
      - [x] Score
         - [x] Increment by 5 if correct answer
         - [x] Decrement by 1 if incorrect answer
         - [x] Decrement by 1 if hint box is opened
      - [x] Box
         - [x] Randomize correct number
         - [x] Compare user's answer with correct number
      - [x] Hints
         - [x] Randomize hint
            - [x] Every 3 seconds
            - [x] 50% chance of appearing
            - [x] Close hint box if hint is randomized
         - [x] Opening hint box
            - [x] Show "No hint" if hint is not available
            - [x] Show hint if hint is available
            - [x] Collapse itself after 3 seconds of being open
            - [x] Collapse itself after every round
      - [x] Sound
         - [x] Enable/disable functionality
         - [x] Cannot enable/disable after the game is started
         - [x] Play a buzz sound if hint is available
      - [x] Results
         - [x] Display # of rounds played, # of correct picks, # of incorrect picks, and score.
         - [x] Display "Play Again?" button
      - [ ] Code Editor
         - [ ] Figure out which code blocks to "mock"
         - [ ] Check if the code is "correct"
         - [ ] Add "smoke and mirrors" after any code change
         - [ ] Code can only be changed after the end of a game
   - [ ] Integration with database schema (Jan 11)
   - [ ] Google oAuth user login (Jan 11)
   - [ ] Database reporting (Jan 25)
   - [ ] Push to production servers (TBD)

## Setup

### Client
1. Clone the repository.
2. Navigate to the `client` folder in Terminal.
3. `npm init`
4. `npm start`
5. Navigate to `http://localhost:3000` in a web browser.
