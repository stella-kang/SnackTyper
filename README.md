# SnackTyper

## <a href="https://stella-kang.github.io/SnackTyper/">Game Page</a>

## Background
**SnackTyper** is an snack-themed typing game where the player must feed the Shiba Inu within the alloted time by typing words that match the snacks that are shown on the screen. As the player progresses through the game, the amount of snacks requested will increase. The game will end when a user is unsuccessful in feeding the Shiba Inu (by running out of time) three times.

## Functionality and MVPs
In **SnackTyper**, users will be able to:
- Start and reset the game
- Use the keyboard to input words
- Track their score based on the amount of levels passed
- Track the amount of strikes they have left before losing the game

In addition, the project will include:
- An instructions view that describes the rules of the game
- A production README

## Wireframes
<p align="center">
    <img height="350px" src="dist/assets/wireframe.png"></img>
</p>

- Nav Links will include a link to the project's Github repo, as well as a link to my LinkedIn profile
- Level tracker will display a live tracker indicating the current level of the game
- Strikes tracker will display a live tracker indicating how many times the player has failed a level
- The Main Game Display will render the Shiba Inu, along with images of the snacks that must be matched for each level
- The Game Key will render all of the unique sacks for the level and their corresponding words
- Text Input will be where the player will type the input for the main game functionality

## Technologies, Libraries, and APIs
This project will be implemeneted with the following technologies:
- Webpack to bundle and transpile the source Javascript code
- npm to manage project dependencies

## Implementation Timeline
- **Friday Afternoon & Weekend**: Build the skeleton of the project and render a functioning text input box that will correctly confirm if a word is included in a provided array. Create general HTML skeleton for CSS formatting, and create a Game, Snack, Input and Level class.
- **Monday**: Focus on perfecting the logic of the game -- ensuring that words are correctly rendered with their corresponding snack and inputs are matched accordingly. Also, create accurate tracking of strikes and levels, as well as an underlying timer. Increase the difficulty of the game after each level, as well.
- **Tuesday**: Reformat the game to implement desired styling, and ensure that all images for the animal and snacks are rendering properly.
- **Wednesday**: Finalize underlying logic, controls. and styling.
- **Thursday Morning**: Make any final touchups and update the README if necessary.

## Bonus Features
Some anticipated updates include:
- Increase the timer for higher-level rounds for allow for elongated playability
- Include optional background music, with the ability to adjust volume
- Add animation to indicate when a strike was incurred or an incorrect word has been submitted

## Music
bedtime after a coffee by Barradeen | https://soundcloud.com/barradeen/ <br />
Creative Commons Attribution-ShareAlike 3.0 Unported <br />
https://creativecommons.org/licenses/by-sa/3.0/deed.en_US <br />
Music promoted by https://www.chosic.com/free-music/all/ <br />