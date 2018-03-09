## Track duration

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

parse(5000000) // 1:23:20
parse(223452) // 3:43
```

### Tests

```
npm test
```
