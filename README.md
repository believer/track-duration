## Track duration

[![npm version](https://badge.fury.io/js/track-duration.svg)](https://badge.fury.io/js/track-duration)
[![Build Status](https://travis-ci.org/believer/track-duration.svg?branch=master)](https://travis-ci.org/believer/track-duration)
[![Maintainability](https://api.codeclimate.com/v1/badges/01272ffb94f581702d0f/maintainability)](https://codeclimate.com/github/believer/track-duration/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/01272ffb94f581702d0f/test_coverage)](https://codeclimate.com/github/believer/track-duration/test_coverage)

Converts milliseconds to a format like Spotify's track durations.

### Installation

```
npm install track-duration --save
```

### Parse

```js
parse(milliseconds: number): string
```

Takes milliseconds and returns a formatted duration.

#### Example

```js
import { parse } from 'track-duration'

parse(5000000) // 1:23:19
parse(223452) // 3:43
```

### Tests

```
npm test
```
