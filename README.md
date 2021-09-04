# Repository Name

**Table of Contents**
- [Purpose](#purpose)
- [Description](#description)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Challenges](#challenges)
- [Possible Improvements](#possible-improvements)

## Purpose
This website display information about my past wedding that was intended for guests to browse as well as RSVP through.

## Description
The website contains multiple informative sections such as details of the location, accomadations, registry link and iamges of the wedding party. It also contains a page to search a guests name and submit their RSVP. This works in coordiation with the [Unite API](https://github.com/benlammers/unite-api).

## Tech Stack
- [React](https://reactjs.org/docs/getting-started.html)
- [Redux](https://redux.js.org/introduction/getting-started)
- [SASS](https://sass-lang.com/documentation)
- [Spotify Web API](https://developer.spotify.com/documentation/web-api/)

## Getting Started
[View the hosted site](https://eager-leavitt-ce2070.netlify.app/)

To test RSVPs you can search any of these fictional characters: Clarke Kent, Lois Lane, Han Solo, Leia Skywalker, Ron Weasley or Hermione Granger

### Run Locally
Clone the repository locally and navigate into the folder then install dependencies by running `npm install` then run the app by calling `npm start`

Must run alongside [Unite API](https://github.com/benlammers/unite-api) for RSVPs to work

## Challenges
Being a fairly straightforward website the main challenge was creating a design that fit our wedding and was aesthetically pleasing.

## Possible Improvements

### Improve Performance
In its current state the application has some performance issues when it comes to image loading. The images on the site are high resolution and it is noticeable in the banner image which loads consistently after the rest of the page. Work could be done to lower resolution when possible. Other possible improvements would be to move the app from the Create React App configuration to a framework such as Next JS which has better options for image loading.

### Modern Libraries
This application currently uses Redux to store global state and the API calls are contained in Redux actions. If I redid this application I would simplify it by using React Query for API requests and maybe use context or zustand for global state.
