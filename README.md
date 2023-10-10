# Calculator app - Frontend Mentor Challenge

Developer: Robin Bosch  
Designed by Frontend Mentor

[View live Site](https://calculator-frontend-mentor-qc1nx2e09-robin-boschs-projects.vercel.app/)  

![Mockup image](docs/mockup-preview.png)

## Table of contents

- [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Designs](#designs)
- [My process](#my-process)
    - [Challenges](#challenges)
    - [What I learned](#what-i-learned)
- [Technologies used](#technologies-used)
    - [Languages](#languages)
    - [Framework](#framework)
- [Validation and Testing](#validation-and-testing)
- [Author](#author)
- [Credits](#author)
- [Acknowledgments](#acknowledgments)
- [License](#license)


## Overview

### The challenge

- The user should be able to view the page correctly on the most common devices and on every screen size.  
- Hover states should be reflected accurately.
- Calculations need to be correct.

### Designs

The following designs were given to build the project:  

<details>
<summary>The Desktop design theme 1 with a shown width of 1440px</summary>

![](docs/desktop-design-theme-1.jpg)
</details>

<details>
<summary>The Desktop design theme 2 with a shown width of 1440px</summary>

![](docs/desktop-design-theme-2.jpg)
</details>

<details>
<summary>The Desktop design theme 3 with a shown width of 1440px</summary>

![](docs/desktop-design-theme-3.jpg)
</details>

<details>

<summary>Hover states for theme 1</summary>

![](docs/active-states-theme-1.jpg)
</details>

<details>
<summary>The Mobile design with a shown width of 375px with theme 1</summary>

![](docs/mobile-design-theme-1.jpg)
</details>

## My process

### Challenges

- Getting the calculator to work correctly
- Have switching between themes and selecting the theme based on user preference
- Making sure the text sizes are correct according to the design


### What I learned

- The important difference between CSS variables and SCSS variables.
- Theming apps and how to get the user theme preference from the API.
- First time deploying on vercel (very easy and intuitive)

## Technologies used

### Languages

- HTML
- CSS
- TypeScript

### Frameworks

- React (Vite)
- SASS

## Validation and Testing

### HTML Validation

HTML validation was done with the [W3 HTML validator](https://validator.w3.org/nu/) and came back with no warnings.

### CSS Validation

CSS validation was done with the [W3 CSS validator](https://jigsaw.w3.org/css-validator/) and came back with warnings regarding the variables which are currently not checked and the missing quotes around the font name which get lost during the build.

### Accessibility Testing

Accessibility was checked with the browser extension of the [WAVE validator](https://wave.webaim.org/) and came back with no warnings.

### Device Testing

The website was tested on the following devices:

- Windows 11 PC (Screen resolution: 2560x1440)
- Xiaomi MI 9 with Android 11 (Screen resolution: 1080x2280)
- Xiaomi Pad 6 with Android 12 (Screen resolution: 1800x2880)

Other screen resolutions were tested in the browser with dev tools from 2560x1440 down to 320x568.

### Useful resources

Two helpful reference guides I use: 
- [Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## Credits

- [Frontend mentor](https://www.frontendmentor.io) - For providing me with [this challenge and the designs.](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN) 
- [Reset CSS](https://andy-bell.co.uk/a-modern-css-reset/) from Andy Bell

## License

This project is published under the MIT license.  
The challenge itself is excluded from this license.  
[License](/LICENSE.txt)
