import { MINUTE, DAY, HOUR, MONTH, WEEK, YEAR } from "./constants";
import type { Unit } from "./types";

/**
 * Class representing a Time Converter.
 * @example
 * const time = TimeConverter.minutes(5);
 * console.log(time.toSeconds()); // Outputs the equivalent seconds
 */
class TimeConverter {
  value: number;

  /**
   * @private
   * @param {number} value - The number of seconds.
   */
  private constructor(value: number) {
    this.value = value;
  }

  /**
   * Creates a TimeConverter instance from milliseconds.
   * @param {number} value - The number of milliseconds.
   * @returns {TimeConverter} - New instance of TimeConverter.
   * @example
   * const time = TimeConverter.milliseconds(5000);
   * console.log(time.toSeconds()); // Outputs 5
   */
  static milliseconds(value: number): TimeConverter {
    return new TimeConverter(value / 1000);
  }

  /**
   * Creates a TimeConverter instance from seconds.
   * @param {number} value - The number of seconds.
   * @returns {TimeConverter} - New instance of TimeConverter.
   * @example
   * const time = TimeConverter.seconds(5);
   * console.log(time.toSeconds()); // Outputs 5
   */
  static seconds(value: number): TimeConverter {
    return new TimeConverter(value);
  }

  /**
   * Creates a TimeConverter instance from minutes.
   * @param {number} value - The number of minutes.
   * @returns {TimeConverter} - New instance of TimeConverter.
   * @example
   * const time = TimeConverter.minutes(5);
   * console.log(time.toSeconds()); // Outputs 300
   */
  static minutes(value: number): TimeConverter {
    return new TimeConverter(value * MINUTE);
  }

  /**
   * Creates a TimeConverter instance from hours.
   * @param {number} value - The number of hours.
   * @returns {TimeConverter} - New instance of TimeConverter.
   * @example
   * const time = TimeConverter.hours(5);
   * console.log(time.toSeconds()); // Outputs 18000
   */
  static hours(value: number): TimeConverter {
    return new TimeConverter(value * HOUR);
  }

  /**
   * Creates a TimeConverter instance from days.
   * @param {number} value - The number of days.
   * @returns {TimeConverter} - New instance of TimeConverter.
   * @example
   * const time = TimeConverter.days(5);
   * console.log(time.toSeconds()); // Outputs 432000
   */
  static days(value: number): TimeConverter {
    return new TimeConverter(value * DAY);
  }

  /**
   * Creates a TimeConverter instance from weeks.
   * @param {number} value - The number of weeks.
   * @returns {TimeConverter} - New instance of TimeConverter.
   * @example
   * const time = TimeConverter.weeks(5);
   * console.log(time.toSeconds()); // Outputs 3024000
   */
  static weeks(value: number): TimeConverter {
    return new TimeConverter(value * WEEK);
  }

  /**
   * Creates a TimeConverter instance from months.
   * @param {number} value - The number of months.
   * @returns {TimeConverter} - New instance of TimeConverter.
   * @example
   * const time = TimeConverter.months(5);
   * console.log(time.toSeconds()); // Outputs 13140000
   */
  static months(value: number): TimeConverter {
    return new TimeConverter(value * MONTH);
  }

  /**
   * Creates a TimeConverter instance from years.
   * @param {number} value - The number of years.
   * @returns {TimeConverter} - New instance of TimeConverter.
   * @example
   * const time = TimeConverter.years(5);
   * console.log(time.toSeconds()); // Outputs 157680000
   */
  static years(value: number): TimeConverter {
    return new TimeConverter(value * YEAR);
  }

  /**
   * @example
   * const time = TimeConverter.minutes(5).add(5, 'seconds');
   * console.log(time.toSeconds()); // Outputs 305
   */
  add(value: number, unit: Unit): TimeConverter {
    const valueByUnit: Record<Unit, number> = {
      seconds: value,
      minutes: value * MINUTE,
      hours: value * HOUR,
      days: value * DAY,
      weeks: value * WEEK,
      months: value * MONTH,
      years: value * YEAR,
      milliseconds: value / 1000,
    };

    return new TimeConverter(this.value + valueByUnit[unit]);
  }

  /**
   * @example
   * const time = TimeConverter.minutes(5).subtract(5, 'seconds');
   * console.log(time.toSeconds()); // Outputs 295
   */
  subtract(value: number, unit: Unit): TimeConverter {
    const valueByUnit: Record<Unit, number> = {
      seconds: value,
      minutes: value * MINUTE,
      hours: value * HOUR,
      days: value * DAY,
      weeks: value * WEEK,
      months: value * MONTH,
      years: value * YEAR,
      milliseconds: value / 1000,
    };

    return new TimeConverter(this.value - valueByUnit[unit]);
  }

  /**
   * Converts the time to milliseconds.
   * @returns {number} - The time in milliseconds.
   * @example
   * const time = TimeConverter.seconds(2);
   * console.log(time.toMilliseconds()); // Outputs 2000
   */
  toMilliseconds(): number {
    return this.value * 1000;
  }

  /**
   * Converts the time to seconds.
   * @returns {number} - The time in seconds.
   * @example
   * const time = TimeConverter.minutes(2);
   * console.log(time.toSeconds()); // Outputs 120
   */
  toSeconds(): number {
    return this.value;
  }

  /**
   * Converts the time to minutes.
   * @returns {number} - The time in minutes.
   * @example
   * const time = TimeConverter.seconds(120);
   * console.log(time.toMinutes()); // Outputs 2
   */
  toMinutes(): number {
    return this.value / MINUTE;
  }

  /**
   * Converts the time to hours.
   * @returns {number} - The time in hours.
   * @example
   * const time = TimeConverter.seconds(7200);
   * console.log(time.toHours()); // Outputs 2
   */
  toHours(): number {
    return this.value / HOUR;
  }

  /**
   * Converts the time to days.
   * @returns {number} - The time in days.
   * @example
   * const time = TimeConverter.seconds(172800);
   * console.log(time.toDays()); // Outputs 2
   */
  toDays(): number {
    return this.value / DAY;
  }

  /**
   * Converts the time to weeks.
   * @returns {number} - The time in weeks.
   * @example
   * const time = TimeConverter.seconds(1209600);
   * console.log(time.toWeeks()); // Outputs 2
   */
  toWeeks(): number {
    return this.value / WEEK;
  }

  /**
   * Converts the time to months.
   * @returns {number} - The time in months.
   * @example
   * const time = TimeConverter.seconds(5256000);
   * console.log(time.toMonths()); // Outputs 2
   */
  toMonths(): number {
    return this.value / MONTH;
  }

  /**
   * Converts the time to years.
   * @returns {number} - The time in years.
   * @example
   * const time = TimeConverter.seconds(63072000);
   * console.log(time.toYears()); // Outputs 2
   */
  toYears(): number {
    return this.value / YEAR;
  }
}

export default TimeConverter;
