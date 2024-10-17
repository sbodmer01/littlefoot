# Littlefoot Review

_Our modified forked version of littlefoot can be found [here](https://github.com/cse210-fa24-group2/cse210-littlefoot-team2)_

## Overview

Similar to Bigfoot.js, Littlefoot.js manages footnotes in web content by adding tooltip-like footnote displays.

Unlike Bigfoot.js, Littlefoot.js is significantly easier to work with and manipulate. Littlefoot.js improved upon the Bigfoot.js package with the following improvements:

- Using TypeScript in favor of jQuery and CoffeeScript
- Adding detailed, easy-to-understand documentation
- Supporting additional styling and theming options
- Improving package architecture

## Package Architecture

### Design Decisions

The source code uses CSS for styling and TypeScript for logic. CSS is a good choice for this project, but opting for TypeScript could be considered over-engineering. Due to the relative simplicity of this package, JavaScript may have been a better choice for future maintainability.

Unlike Bigfoot, Littlefoot does not require jQuery installation. In recent years, jQuery is used less and less, so removing jQuery is a smart design decision.

The button styles for the footnote also differ in the slightest from the Bigfoot version – they have more rounded edges. This was more likely a personal aesthetic preference.

### Code Organization and Quality

The code follows basic modular JavaScript patterns, separating modules by significant events and areas within the DOM.

The repository contains one source folder – called “src” – which has all the core files necessary for the plugin to work (i.e. the main .css file with styling rules for footnote buttons). Within the source folder, there is another folder called “dom” that contains all the .ts files necessary to define key functionality for interacting with HTML elements.

There are also folders for additional components, such as tests, gifs that are added to the README, etc. This is different from Bigfoot, which only contained 2 folders, one called “dist” and one called “src”.

## Feature Implementation: Tracking Footnotes

As part of the task, we successfully got the code running and added a new feature to track the total number of footnotes and unread footnotes. Additionally, we implemented a feature where the footnote button changes its color to green once it is read.

The key aspects of this feature:

- **Default Behavior**: The default state of the footnote button is set to "unread" (tracked as true).
- **Read Footnote Count**: The number of unread footnotes is dynamically updated as users interact with the footnotes.
- **Button Color Change**: Upon reading a footnote, the button changes to green, providing visual feedback to users.

### Demo

To view our changes in action, see a video version of our demo (here)[https://www.youtube.com/embed/bRzFN50hsBE?si=KuiqN4W1Tcjc0Xg9].

To run the demo locally, simply pull the repository, run “npm install && npm run build” and open the index.html folder on your browser.

## Decision

If we were seeking this exact functionality, we would be more likely to use Littlefoot than Bigfoot, as it is simple enough to implement. Currently, it is maintained well and documented rigorously.

In practice, however, we would most likely build footnote functionality into our project manually, as it is not too difficult to achieve using vanilla JS. Additionally, what these packages create are more akin to comments than to actual numbered footnotes (at least in an academic setting), so we probably would not choose either of these packages to create footnotes. To create comments, however, we would choose Littlefoot.
