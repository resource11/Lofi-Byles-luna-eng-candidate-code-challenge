# Luna Engineering Candidate Exercise

## Overview

Thanks for applying to work with the Luna team! We're excited to talk with you :D

This code exercise is meant to be completed before your group interview with our panel. Please be prepared to walk through what you create and talk through your code choices (sounds scarier than it is, promise).

We want to set you up for success! You should have received this with at least 2 days notice prior to the panel—if that's not the case, please reach out to your recruiter and ask to reschedule to allow you adequate time to complete the exercise.

This is meant to be a light-weight exercise, with an estimated 2h worth of effort. Please try to time-box and manage your time accordingly.

When you're finished, run `npm pack` and share the resulting `.tgz` file with the recruiter. Please share this before the panel interview so the group can follow along.

## Instructions

Using [this Figma document](https://www.figma.com/file/2dFHYiLFOeqLUjmKwuHzeP/Engineer-Hiring-Handoff-Example?node-id=2%3A1061) (**you'll need to either log in or create a Figma account to access the Inspect panel**) as your design guide, implement a re-usable `Action Menu` component in the attached application keeping the following in mind:

- The entire design spec is included so you understand how the component will grow over time, but for this exercise **we're only asking you to implement the `Default` and `Large` button sizes for the `ActionMenu20` variant and the `Text only` list for the White container theme**
- Menu items can be actions or links
- The component API should accept an `analyticsId` prop which should be prefixed by the `namespace` provided by the `AnalyticsContext` and passed to a `data-analytics-id` attribute

## Project overview

This is a [React](https://reactjs.org/docs/getting-started.html) application bundled with [Parcel](https://parceljs.org/getting_started.html) and styled with [Sass](https://sass-lang.com/documentation). [Parcel supports modular Sass imports](https://en.parceljs.org/scss.html#usage), so feel free to break up your styles as you see fit!

The application entrypoint is `src/index.js`

The `AnalyticsContext` [Context object](https://reactjs.org/docs/context.html#reactcreatecontext) lives in `src/components/AnalyticsContext.js`.

### Localdev

This project runs in [Node](https://nodejs.org/en/) via [NPM](https://www.npmjs.com/), you'll need to ensure both are installed on your machine before continuing.

Spin up the local dev environment with:

- `$npm install`
- `$npm start` (this includes file watching)
- View the app at http://localhost:1234
