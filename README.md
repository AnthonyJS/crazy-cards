# Crazy Cards demo app

## Play around with Crazy Cards app

You can have a go using Crazy Cards on the following link: https://crazy-cards.now.sh/

## Steps to get Crazy Cards running locally

### NPM

- To download all of the required dependencies from NPM:
  `npm install`

- To run the application locally:
  `npm run dev`

- To run storybook:
  `npm run storybook`

- To run the tests:
  `npm test`

### Yarn

- To download all of the required dependencies from Yarn:
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

  I used Styled Components because of the flexibility and power it provides for conditionally styling React components. I supplemented it with Styled System because it provides a logical and intuitive means of adding responsive web styling based on viewport widths, as well as stylistic variants.

- Formik

  I chose Formik as the library to manage the input fields because of its helpful API and integration with the `Yup` library for schema validation.

- Atomic design

  I used [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) to organise the components within the `src/components` folder to help provide some structure and organisation to the components.

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

  Add the moment, card selection on the results page can only be done using mouse / touch. I would like to add keyboard controls to this.

- Internationalisation (i18n)

  At the moment, all of the text is hardcoded to English and GBP. It would be good to plug in [React-Intl](https://github.com/formatjs/react-intl) to allow for other languages, currencies and numeric formatting.
