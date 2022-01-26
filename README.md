# CRA Opinionated Starter

An opinionated React starter project


## Tech Stack

- [React App](https://reactjs.org/docs/getting-started.html) project - bootstrapped with [`create-react-app v5`](https://create-react-app.dev/docs/getting-started).
- React & React DOM v17
- Type Checker - TypeScript v4.5.2
- Page Routing - React Router v6
- CSS Framework - TailwindCSS v3
- Component level Styling - Styled Components
- Component Level CSS Integration - [Twin.Macro](https://github.com/ben-rogerson/twin.examples/tree/master/next-styled-components)
- Component UI Development - Storybook v6.4.7
- Lint - ESlint v8, AirBnB & Eslint-config-next
- Format - Prettier
- Unit Testing - Jest + react-testing-library
- Mocking - Mock Service Worker



## Usage

Inside the project directory run using `npm` or `yarn`:

- `start` - Runs the built app in development mode.
- `build` - builds the app for production to the `build` folder.
- `test` - unit testing with Jest & react-testing-library.
- `eject` -
- `check-lint` - ESlint configured for Next. Use `.eslintrc.json` to setup & `.eslintignore` to ignore files.
- `check-types` - runs TypeScript's [`tsc` CLI command](https://www.typescriptlang.org/docs/handbook/compiler-options.html) and pretty prints any warnings/errors.
- `check-format` - asks Prettier to check all of our files (excluding the ones in .prettierignore) for formatting issues.
- `format` - will format your code prettier using opinionated settings inside `.prettierrc` file. Use `.prettierignore` to ignore files.
- `storybook` - To run your Storybook. Open [http://localhost:6006/](http://localhost:6006/) to view it in the browser.
- `build-storybook` - build Storybook - create static Storybook project.


### Run

```bash
yarn start
# or
npm run start
```

Entry point `src/index.tsx`.

## Styling configurations

This starter has been configure to accommodate both Tailwind and Styled Components styles syntax, or even Styled Components containing Tailwind classes syntax.

You can refer to the [docs](https://github.com/ben-rogerson/twin.macro/tree/master/docs) in the twin.macro  repository for guidance.
## Eslint configurations

Lint set according to Airbnb's style guides.
## Format configurations

[Prettier](https://prettier.io/) is set using my opinionated [rules](https://prettier.io/docs/en/configuration.html) inside config file `.prettierrc`
