# clockify-js-client

> A wrapper for [Clockify](https://clockify.me) REST APIs.
> For API docs Please refer [developers-api](https://clockify.me/developers-api).

> clockify-js-client is a fork of [clockify-npm](https://github.com/sinumohan/clockify-npm)

> NPM Package not yet available.

## Installation

`npm install clockify-npm`

## Examples

You can find the different methods under `lib/Workspace.js`.

```
import Clockify from 'clockify-js-client';

Clockify.SetKey('YOUR_API_KEY');

// Get all Workspaces of the current User
Clockify.Workspaces.get()
    .then((data) => {
        console.log(data)
    }).catch((err) => {
        console.error(err);
    })

// Create a new Workspace
Clockify.Workspaces.add('My Work Space')
    .then((data) => {
        console.log(data)
    }).catch((err) => {
        console.error(err);
    })
```

[![CircleCI](https://circleci.com/gh/sinumohan/clockify-npm/tree/master.svg?style=svg)](https://circleci.com/gh/sinumohan/clockify-npm/tree/master)
