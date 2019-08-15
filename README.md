# Filter Deals by Niyazi Niyazi

## Prerequisites

- NodeJS (at least latest LTS)
- Modern browser that supports ES6+ (classes, arrow functions etc)

## Scenario

Filter list of deals such as broadband, TV and mobile.


This codebase is written in vanilla JavaScript. Jest is used for testing.

The tests are written in [Jest](https://jestjs.io/) and an initial test suite can be found in `src/scripts/__tests__`.

> ℹ️ NOTE: You will find the JSON data for the deals in `public/db.json`


## Getting set up

To get the site up and running, follow these simple steps:

```bash
# Install dependencies
npm install

# The following steps will need to be run in different processes

# Serve JSON data
npm run db

# Serve site in 'watch' mode, automatically open default browser
npm run serve
```

By default, the JSON server runs at `http://localhost:3000`, and the site is served from `http://localhost:5000`.

To run the test suites, you can use the following commands:

```bash
# Single run of test suites
npm run test

# Run test suites in 'watch' mode
npm run test:watch
```

## Commands

Run commands via NPM e.g. `npm run test:watch` from the project root.

| Command      | Description                                    |
| ------------ | ---------------------------------------------- |
| `test`       | Single run of test suites                      |
| `test:watch` | Run test suites in 'watch' mode                |
| `clean`      | Delete compiled assets                         |
| `db`         | Serve JSON data                                |
| `serve`      | Serve site, automatically open default browser |


