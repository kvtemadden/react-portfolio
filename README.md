# React Portfolio
Building a portfolio of my work using React.

This portfolio uses create-react-app.

## Contents
Section | Description
------------ | -------------
[Screenshot](#screenshot) | Screenshots of the React Portfolio and a link to the repo.
[Functionality](#functionality) | Information on the functionality of the React Portfolio.
[Licence](#licence) | Licence for the source code

## Screenshot
![Screenshot of working React Portfolio](https://github.com/kvtemadden/portfolio/raw/main/Assets/AboutMe_screenshot.PNG)

You can access the React Portfolio [here](https://kvtemadden-portfolio.herokuapp.com/)

You can access the GitHub Repo via [this link](https://github.com/kvtemadden/react-portfolio)

## About Me
The content on this page gives a little bit of information about me.

I customised it by adding a hero section to make the page a little bit more interesting.

This section includes my CV, LinkedIn profile and GitHub links too.

There are also links to my social media accounts, which are accompanied by the logos for the particular sites.

You'll see to the right of the text are two images, which are both formatted with a border and height/width to maintain a square until the page is too small. In the case that it is too small, for visibility, the image reduces in width and gains in height.

## Contact
The contact page has a form that doesn't currently submit correctly, but after some research I found that the information does actually get sent to the page.

The user will input their name, email and the message they want to send before they click on the bootstrap button "Submit message". At some point I plan to come back to this and set it up correctly, but I'm not entirely sure how to access the server at this point.

## Portfolio
This part of the site has been altered since my original portfolio to display as "polaroid" cards.

The cards are mapped from a JSON file which contains the information for all of my individual projects.

All of the cards have the relevant screenshots, title and links in order to see the repo and live site.

The card layout is responsive to the page/device resolution.

## Consistencies
Below are the constant items that are maintained across the site.

### Navigation Bar
The navigation bar is a dark theme, pulled from Bootstrap, and is responsive to device size.

I've added in a logo for my site, which is also shown in the favicon. Clicking the logo will take you back to the index page.

### Sticky footer
As a bonus, I took inspiration from the Bootstrap sticky footer bar but I centred the text instead. This is constantly in display on all devices and there is always a 10px gap between the content on the page and the footer when the user scrolls to the bottom of the page.

### Boostrap grid system
There is a section area which contains all of the main content on the page. This area is created using the Bootstrap grid system in order to allow a simple responsive layout.

This is identified as the content between the `<section>` tags.

All of the content in these areas are displayed on a white background which has a border (the colour of which matches the navigation bar).

## Licence
> This site was created under the standard MIT licence.

![GitHub](https://img.shields.io/github/license/kvtemadden/portfolio?color=%23203333&label=LICENCED%20AS&style=for-the-badge)
