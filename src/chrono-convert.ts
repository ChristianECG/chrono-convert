import { MINUTE, DAY, HOUR, MONTH, WEEK, YEAR } from "./constants";
import type { Unit } from "./types";

/**
 * Class representing a Time Converter.
 * @example
 * const time = ChronoConvert.minutes(5);
 * console.log(time.toSeconds()); // Outputs the equivalent seconds
 */
class ChronoConvert {
  value: number;

  /**
   * @private
   * @param {number} value - The number of seconds.
   */
  private constructor(value: number) {
    this.value = value;
  }

  /**
   * Creates a ChronoConvert instance from milliseconds.
   * @param {number} value - The number of milliseconds.
   * @returns {ChronoConvert} - New instance of ChronoConvert.
   * @example
   * const time = ChronoConvert.milliseconds(5000);
   * console.log(time.toSeconds()); // Outputs 5
   */
  static milliseconds(value: number): ChronoConvert {
    return new ChronoConvert(value / 1000);
  }

  /**
   * Creates a ChronoConvert instance from milliseconds.
   * @param {number} value - The number of milliseconds.
   * @returns {ChronoConvert} - New instance of ChronoConvert.
   * @example
   * const time = ChronoConvert.ms(5000);
   * console.log(time.toSeconds()); // Outputs 5
   */
  static ms(value: number): ChronoConvert {
    return ChronoConvert.milliseconds(value);
  }

  /**
   * Creates a ChronoConvert instance from seconds.
   * @param {number} value - The number of seconds.
   * @returns {ChronoConvert} - New instance of ChronoConvert.
   * @example
   * const time = ChronoConvert.seconds(5);
   * console.log(time.toSeconds()); // Outputs 5
   */
  static seconds(value: number): ChronoConvert {
    return new ChronoConvert(value);
  }

  /**
   * Creates a ChronoConvert instance from seconds.
   * @param {number} value - The number of seconds.
   * @returns {ChronoConvert} - New instance of ChronoConvert.
   * @example
   * const time = ChronoConvert.s(5);
   * console.log(time.toSeconds()); // Outputs 5
   */
  static s(value: number): ChronoConvert {
    return ChronoConvert.seconds(value);
  }

  /**
   * Creates a ChronoConvert instance from minutes.
   * @param {number} value - The number of minutes.
   * @returns {ChronoConvert} - New instance of ChronoConvert.
   * @example
   * const time = ChronoConvert.minutes(5);
   * console.log(time.toSeconds()); // Outputs 300
   */
  static minutes(value: number): ChronoConvert {
    return new ChronoConvert(value * MINUTE);
  }

  /**
   * Creates a ChronoConvert instance from minutes.
   * @param {number} value - The number of minutes.
   * @returns {ChronoConvert} - New instance of ChronoConvert.
   * @example
   * const time = ChronoConvert.min(5);
   * console.log(time.toSeconds()); // Outputs 300
   */
  static min(value: number): ChronoConvert {
    return ChronoConvert.minutes(value);
  }

  /**
   * Creates a ChronoConvert instance from hours.
   * @param {number} value - The number of hours.
   * @returns {ChronoConvert} - New instance of ChronoConvert.
   * @example
   * const time = ChronoConvert.hours(5);
   * console.log(time.toSeconds()); // Outputs 18000
   */
  static hours(value: number): ChronoConvert {
    return new ChronoConvert(value * HOUR);
  }

  /**
   * Creates a ChronoConvert instance from hours.
   * @param {number} value - The number of hours.
   * @returns {ChronoConvert} - New instance of ChronoConvert.
   * @example
   * const time = ChronoConvert.hr(5);
   * console.log(time.toSeconds()); // Outputs 18000
   */
  static hr(value: number): ChronoConvert {
    return ChronoConvert.hours(value);
  }

  /**
   * Creates a ChronoConvert instance from hours.
   * @param {number} value - The number of hours.
   * @returns {ChronoConvert} - New instance of ChronoConvert.
   * @example
   * const time = ChronoConvert.h(5);
   * console.log(time.toSeconds()); // Outputs 18000
   */
  static h(value: number): ChronoConvert {
    return ChronoConvert.hours(value);
  }

  /**
   * Creates a ChronoConvert instance from days.
   * @param {number} value - The number of days.
   * @returns {ChronoConvert} - New instance of ChronoConvert.
   * @example
   * const time = ChronoConvert.days(5);
   * console.log(time.toSeconds()); // Outputs 432000
   */
  static days(value: number): ChronoConvert {
    return new ChronoConvert(value * DAY);
  }

  /**
   * Creates a ChronoConvert instance from days.
   * @param {number} value - The number of days.
   * @returns {ChronoConvert} - New instance of ChronoConvert.
   * @example
   * const time = ChronoConvert.d(5);
   * console.log(time.toSeconds()); // Outputs 432000
   */
  static d(value: number): ChronoConvert {
    return ChronoConvert.days(value);
  }

  /**
   * Creates a ChronoConvert instance from weeks.
   * @param {number} value - The number of weeks.
   * @returns {ChronoConvert} - New instance of ChronoConvert.
   * @example
   * const time = ChronoConvert.weeks(5);
   * console.log(time.toSeconds()); // Outputs 3024000
   */
  static weeks(value: number): ChronoConvert {
    return new ChronoConvert(value * WEEK);
  }

  /**
   * Creates a ChronoConvert instance from weeks.
   * @param {number} value - The number of weeks.
   * @returns {ChronoConvert} - New instance of ChronoConvert.
   * @example
   * const time = ChronoConvert.wk(5);
   * console.log(time.toSeconds()); // Outputs 3024000
   */
  static wk(value: number): ChronoConvert {
    return ChronoConvert.weeks(value);
  }

  /**
   * Creates a ChronoConvert instance from weeks.
   * @param {number} value - The number of weeks.
   * @returns {ChronoConvert} - New instance of ChronoConvert.
   * @example
   * const time = ChronoConvert.w(5);
   * console.log(time.toSeconds()); // Outputs 3024000
   */
  static w(value: number): ChronoConvert {
    return ChronoConvert.weeks(value);
  }

  /**
   * Creates a ChronoConvert instance from months.
   * @param {number} value - The number of months.
   * @returns {ChronoConvert} - New instance of ChronoConvert.
   * @example
   * const time = ChronoConvert.months(5);
   * console.log(time.toSeconds()); // Outputs 13140000
   */
  static months(value: number): ChronoConvert {
    return new ChronoConvert(value * MONTH);
  }

  /**
   * Creates a ChronoConvert instance from months.
   * @param {number} value - The number of months.
   * @returns {ChronoConvert} - New instance of ChronoConvert.
   * @example
   * const time = ChronoConvert.mo(5);
   * console.log(time.toSeconds()); // Outputs 13140000
   */
  static mo(value: number): ChronoConvert {
    return ChronoConvert.months(value);
  }

  /**
   * Creates a ChronoConvert instance from years.
   * @param {number} value - The number of years.
   * @returns {ChronoConvert} - New instance of ChronoConvert.
   * @example
   * const time = ChronoConvert.years(5);
   * console.log(time.toSeconds()); // Outputs 157680000
   */
  static years(value: number): ChronoConvert {
    return new ChronoConvert(value * YEAR);
  }

  /**
   * Creates a ChronoConvert instance from years.
   * @param {number} value - The number of years.
   * @returns {ChronoConvert} - New instance of ChronoConvert.
   * @example
   * const time = ChronoConvert.yr(5);
   * console.log(time.toSeconds()); // Outputs 157680000
   */
  static yr(value: number): ChronoConvert {
    return ChronoConvert.years(value);
  }

  private fixValue(value: number): number {
    return Math.round(value * 10000) / 10000;
  }

  /**
   * @example
   * const time = ChronoConvert.minutes(5).add(5, 'seconds');
   * console.log(time.toSeconds()); // Outputs 305
   */
  add(value: number, unit: Unit): ChronoConvert {
    const valueByUnit: Record<Unit, number> = {
      milliseconds: value / 1000,
      seconds: value,
      minutes: value * MINUTE,
      hours: value * HOUR,
      days: value * DAY,
      weeks: value * WEEK,
      months: value * MONTH,
      years: value * YEAR,
    };

    return new ChronoConvert(this.value + valueByUnit[unit]);
  }

  /**
   * @example
   * const time = ChronoConvert.minutes(5).subtract(5, 'seconds');
   * console.log(time.toSeconds()); // Outputs 295
   */
  subtract(value: number, unit: Unit): ChronoConvert {
    const valueByUnit: Record<Unit, number> = {
      milliseconds: value / 1000,
      seconds: value,
      minutes: value * MINUTE,
      hours: value * HOUR,
      days: value * DAY,
      weeks: value * WEEK,
      months: value * MONTH,
      years: value * YEAR,
    };

    return new ChronoConvert(this.value - valueByUnit[unit]);
  }

  /**
   * Converts the time to milliseconds.
   * @returns {number} - The time in milliseconds.
   * @example
   * const time = ChronoConvert.seconds(2);
   * console.log(time.toMilliseconds()); // Outputs 2000
   */
  toMilliseconds(): number {
    return this.fixValue(this.value * 1000);
  }

  /**
   * Converts the time to milliseconds.
   * @returns {number} - The time in milliseconds.
   * @example
   * const time = ChronoConvert.seconds(2);
   * console.log(time.toMs()); // Outputs 2000
   */
  toMs(): number {
    return this.toMilliseconds();
  }

  /**
   * Converts the time to seconds.
   * @returns {number} - The time in seconds.
   * @example
   * const time = ChronoConvert.minutes(2);
   * console.log(time.toSeconds()); // Outputs 120
   */
  toSeconds(): number {
    return this.fixValue(this.value);
  }

  /**
   * Converts the time to seconds.
   * @returns {number} - The time in seconds.
   * @example
   * const time = ChronoConvert.minutes(2);
   * console.log(time.toS()); // Outputs 120
   */
  toS(): number {
    return this.toSeconds();
  }

  /**
   * Converts the time to minutes.
   * @returns {number} - The time in minutes.
   * @example
   * const time = ChronoConvert.seconds(120);
   * console.log(time.toMinutes()); // Outputs 2
   */
  toMinutes(): number {
    return this.fixValue(this.value / MINUTE);
  }

  /**
   * Converts the time to minutes.
   * @returns {number} - The time in minutes.
   * @example
   * const time = ChronoConvert.seconds(120);
   * console.log(time.toMin()); // Outputs 2
   */
  toMin(): number {
    return this.toMinutes();
  }

  /**
   * Converts the time to hours.
   * @returns {number} - The time in hours.
   * @example
   * const time = ChronoConvert.seconds(7200);
   * console.log(time.toHours()); // Outputs 2
   */
  toHours(): number {
    return this.fixValue(this.value / HOUR);
  }

  /**
   * Converts the time to hours.
   * @returns {number} - The time in hours.
   * @example
   * const time = ChronoConvert.seconds(7200);
   * console.log(time.toHr()); // Outputs 2
   */
  toHr(): number {
    return this.toHours();
  }

  /**
   * Converts the time to hours.
   * @returns {number} - The time in hours.
   * @example
   * const time = ChronoConvert.seconds(7200);
   * console.log(time.toH()); // Outputs 2
   */
  toH(): number {
    return this.toHours();
  }

  /**
   * Converts the time to days.
   * @returns {number} - The time in days.
   * @example
   * const time = ChronoConvert.seconds(172800);
   * console.log(time.toDays()); // Outputs 2
   */
  toDays(): number {
    return this.fixValue(this.value / DAY);
  }

  /**
   * Converts the time to days.
   * @returns {number} - The time in days.
   * @example
   * const time = ChronoConvert.seconds(172800);
   * console.log(time.toD()); // Outputs 2
   */
  toD(): number {
    return this.toDays();
  }

  /**
   * Converts the time to weeks.
   * @returns {number} - The time in weeks.
   * @example
   * const time = ChronoConvert.seconds(1209600);
   * console.log(time.toWeeks()); // Outputs 2
   */
  toWeeks(): number {
    return this.fixValue(this.value / WEEK);
  }

  /**
   * Converts the time to weeks.
   * @returns {number} - The time in weeks.
   * @example
   * const time = ChronoConvert.seconds(1209600);
   * console.log(time.toWk()); // Outputs 2
   */
  toWk(): number {
    return this.toWeeks();
  }

  /**
   * Converts the time to weeks.
   * @returns {number} - The time in weeks.
   * @example
   * const time = ChronoConvert.seconds(1209600);
   * console.log(time.toW()); // Outputs 2
   */
  toW(): number {
    return this.toWeeks();
  }

  /**
   * Converts the time to months.
   * @returns {number} - The time in months.
   * @example
   * const time = ChronoConvert.seconds(5256000);
   * console.log(time.toMonths()); // Outputs 2
   */
  toMonths(): number {
    return this.fixValue(this.value / MONTH);
  }

  /**
   * Converts the time to months.
   * @returns {number} - The time in months.
   * @example
   * const time = ChronoConvert.seconds(5256000);
   * console.log(time.toMo()); // Outputs 2
   */
  toMo(): number {
    return this.toMonths();
  }

  /**
   * Converts the time to years.
   * @returns {number} - The time in years.
   * @example
   * const time = ChronoConvert.seconds(63072000);
   * console.log(time.toYears()); // Outputs 2
   */
  toYears(): number {
    return this.fixValue(this.value / YEAR);
  }

  /**
   * Converts the time to years.
   * @returns {number} - The time in years.
   * @example
   * const time = ChronoConvert.seconds(63072000);
   * console.log(time.toYr()); // Outputs 2
   */
  toYr(): number {
    return this.toYears();
  }

  toString(): string {
    return `${this.value}`;
  }
}

export default ChronoConvert;
