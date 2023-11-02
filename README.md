# Chrono Convert

Effortlessly manipulate and convert time units with Chrono-Convert, the JavaScript library offering a fluent, chainable interface for clear and precise time calculations. Perfect for adding sophisticated time-based logic to your applications with ease and elegance.

## Features

- **Fluent Interface**: Easy-to-read, chainable methods.
- **Versatile**: Convert between seconds, minutes, hours, and more.
- **Lightweight**: Minimally impacts your project's footprint.
- **No Dependencies**: Use it out of the box without worrying about additional packages.

## Installation

Install `chrono-convert` using your preferred package manager.

```bash
# With npm
npm install chrono-convert

# With yarn
yarn add chrono-convert

# With pnpm
pnpm add chrono-convert
```

## Usage

The `chrono-convert` library provides a fluent interface for manipulating and converting time units. This makes it easy to perform sophisticated time-based calculations in your JavaScript projects.

### Getting Started

First, you need to import `chrono-convert` into your project.

For CommonJS:

```javascript
const chrono = require("chrono-convert");
```

For ES6 modules:

```javascript
import chrono from "chrono-convert";
```

### Converting Time

```javascript
const time = chrono.minutes(5).add(50, "minutes").toSeconds();
const time = chrono.from(5, "minutes").add(50, "minutes").to("seconds");
console.log(time); // 3300

const time = chrono.hours(2).add(30, "minutes").toMinutes();
const time = chrono.from(2, "hours").add(30, "minutes").to("minutes");
console.log(time); // 150

const time = chrono.seconds(120).subtract(30, "seconds").toMinutes();
const time = chrono.from(120, "seconds").subtract(30, "seconds").to("minutes");
console.log(time); // 1.5

const time = chrono.seconds(120).subtract(30, "seconds").toHours();
const time = chrono.from(120, "seconds").subtract(30, "seconds").to("hours");
console.log(time); // 0.025
```
