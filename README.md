# Crazy Cards demo app

## Link to the Crazy Cards app

The Crazy Cards site is deployed for you to use on the following link: https://crazy-cards.now.sh/

## Steps to get Crazy Cards running locally

### NPM

- To download all of the required dependencies using NPM:
  `npm install`

- To run the application locally:
  `npm run dev`

- To run storybook:
  `npm run storybook`

- To run the tests:
  `npm test`

### Yarn

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
  
- Other notes
The business logic should be implemented server-side and hidden from anyone who might be inspecting the client side code. The API should take in the user details and return the eligible cards, rather than returning all the available cards and filtering on the client.
