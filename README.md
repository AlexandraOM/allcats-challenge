This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />

# 🐈 allplants coding challenge!

Requirements: <br />
- [X] Make a web application that can be displaye on desktop and mobile
- [X] Match it to the photos of the wireframes
- [X] Use brand guidelines (font and primary colours)
- [X] Add suitable animations, on hover/click to the elements

### Frameworks and libraries used
React (create-react-app with Netlify)<br />
Styled Components<br />
!(react-burger-menu)[http://negomi.github.io/react-burger-menu/]

### Method
I began by creating issues of all the smaller tasks that had to be done. 
I wanted to use TDD to create this app, which I mostly did although there is little functionality in this application and therefore I've only implemented Unit Tests.< br/>
I wanted the Card.js file to be dry and therefore I mapped over the incoming response from the API to create a new article for each item (i.e. cat). I checked to see if there was a value equivalent to 'best' in the 'tag' key and if so the best tag would display.< br/>


I have added some additional on hover features - including a spin on the best tag which is more for fun than good user experience for the moment! < br/>
Accessiblity has also been a concern throughout and therefore I have used semantic html where possible and abided by the colours given, in order to achieve a high contrast. < br/>
 < br/>
### Things I learned
- using the react-burger-menu. I spent some time looking at what libraries to use, or whether to create a menu myself. In the end I chose this library and it was quite easy to use. It was a nice and neat alternative, and will definitely use it on future projects.
- I read up on pagination as I would have liked to have a something that could deal with lots of cats coming through. There are a number of libraries that can deal with this, that seem quite useful. I decided however, implementing the functions for load more scrolls was not a best use of my time for this MVP


### With more time I would ...
- [ ] refactor the tag screening inside card.js to a switch/case that could manage multiple tags and svgs.< br/>
- [ ] add more useful information for error handling for example when the api is not working.
- [ ] refactor the styling in of the burger-menu
- [ ] question the product and UX team for what the buttons are meant to be doing! (and add some funcitonality
- [ ] there could always be more tests - perhaps when there is more functionality and user flows using Cypress.

![](https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif)
