# Adventure Quest Plan

## Home Page
* HTML Elements
- [ ] Text input for user name
- [ ] Radio buttons for user race
* Events 
- [ ] On Form Submit
    - [ ] Generate a user object using form data (generateUser)
    - [ ] Store user data in localStorage (setUser)
    - [ ] Redirect to the map page

## Map Page
* HTML Elements
- [ ] List of links for each quest (generated from the quest-data)
    - [ ] Link should not be clickable if the user has already completed the quest
    - [ ] Link should contain a URL search parameter containging the quest ID

* Events
- [ ] on page load --TBD GAME LOGIC

## Quest Detail Page
*HTML Elements
- [ ] Title
- [ ] Description 
- [ ] Quest Image
- [ ] quest Choices

* Events 
- [ ] on page load, get the quest ID from the URL Search Parameters and
load the quest data onto the page
- [ ] on form submit
    - [ ] update the user data
    - [ ] redirect to the map page

    //testing to make sure my new github token is working