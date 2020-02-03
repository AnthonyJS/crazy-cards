# Crazy Cards demo app

## Link to the Crazy Cards app

The Crazy Cards site is deployed for you to use on the following link: https://crazy-cards.now.sh/

## Steps to get Crazy Cards running locally

### NPM

- Clone this repository

- To download all of the required dependencies using NPM:
  `npm install`

- To run the application locally:
  `npm run dev`

- To run storybook:
  `npm run storybook`

- To run the tests:
  `npm test`

### Yarn

- Clone this repository

- To download all of the required dependencies using Yarn:
  `yarn`

- To run the application locally:
  `yarn dev`

- To run storybook:
  `yarn storybook`

- To run the tests:
  `yarn test`

## Technologies and practices

- React with NextJS

  I chose to use NextJS because of how well it takes care of the server side and client side rendering.

- Styled Components with Styled System

  I used Styled Components because of the flexibility and power it provides for conditionally styling React components. I supplemented it with [Styled System](https://styled-system.com/) because it provides a logical and intuitive means of adding responsive web styling based on viewport widths, as well as stylistic variants.

- Formik

  I chose Formik as the library to manage the input fields because of its helpful API and integration with the `Yup` library for schema validation.

- Atomic design

  I used [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) to organise the components within the `src/components` folder to help provide structure and organisation to the components.

  - atoms
  - molecules
  - organisms
  - templates
  - pages

## Considerations for further development

There are many aspects of the project that I would like to develop further but was unable to due to time constraints. These include

- Acceptance testing

  I would like to add end-to-end browser Acceptance tests using [Playwright](https://github.com/microsoft/playwright). This would simulate a user entering their details, click the submit button, being taken to the results page and selecting their desired cards.

- Accessibility

  At the moment, card selection on the results page can only be done using mouse / touch. I would like to add keyboard controls to this to make the UI accessible to more users.

- Internationalisation (i18n)

  All of the text is hardcoded to English and GBP. It would be good to plug in [React-Intl](https://github.com/formatjs/react-intl) to allow for other languages, currencies and numeric formatting.
  
- CI/CD 

  I would set up Github Actions so that it does a build and runs all the tests on each commit to the `develop` branch, and does a build, test and publish to now.sh whenever a pull request is confirmed from the `develop` into the `master` branch.  
  
- Other notes

  - The business logic should be implemented server-side and hidden from anyone who might be inspecting the client side code. The API should take in the user details and return the eligible cards, rather than returning all the available cards and filtering on the client.
   
  - Not all of the user details are collected on the initial form, e.g. address and postcode.
  
  - Using React Context to store the user details in the `UserContext` is unnecessary complexity for an app with just two pages like this. However, it was a nice way of encapsulating the user state and will make passing the user details around simpler as the scope of the app increases.

