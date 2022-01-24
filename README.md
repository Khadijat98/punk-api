# Punk API
**Made by Khadijat Oyeleye**

This is an app which draws, searches and filters through information from BrewDog's Punk API using React. It is styled with SCSS.

This project was created in week 6 of the _nology course. The aim was to gain experience with using React and REST APIs. 

The main task was to present the infomation from the API on the page, with the extension tasks being the addition of search and filter functionality.

### Project Description
The components I used were:
- Card: this denoted what the individual beer cards would look like
- Card List: this mapped through the array of beers and rendered the card component for each beer
- Main: this rendered the card list
- Searchbox: this created the search input
- Filter item: this denoted each filter input (High ABV, Classic Range, and High Acidity)
- Filters list: this rendered the filter items with an onchange function, to signify the checkboxes being checked on/off
- Nav bar: this rendered the filters list and the searchbox 

The main logic for this application occurred in the App.jsx, as this was the container which was able to encompass all the components on the page, as changes to the search box and filters list in the nav bar would affect the beer card array on the main page. The logic involved functions which determined what the url parameters would be when the filters were checked or unchecked, and therefore which beers would be rendered on the page.

### Known Bugs
1. When selected first, the filter for the pH does not update the page properly when one or both of the other filters are also selected. This is probably because the ABV and date filters use url params, which change the information brought onto the page from the API, while the pH filter only changes the array that is already on the page.

2. The search box only searches for the beers that are already on the page, not the ones that are brought in from the API when the ABV or date filters are selected.

### Summary
Overall, I am satisfied with the progress I made with this project, as I managed to tackle the extension tasks of adding search and filter functionality. I am also very happy with the design, as I was inspired by the word "punk" so chose a colour scheme, font and overall style that I felt embodied this. The future improvements I plan to make for this project are to fix the bugs.
