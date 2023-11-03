import { expect, describe, it } from "vitest";
import chrono from "../chrono-convert";

describe("convert", () => {
  describe("milliseconds", () => {
    it("toMilliseconds", () => {
      const time = chrono.milliseconds(1000);
      const time2 = chrono.from(1000, "milliseconds");

      expect(time.toMilliseconds()).toBe(1000);
      expect(time.to("milliseconds")).toBe(1000);
      expect(time2.toMilliseconds()).toBe(1000);
      expect(time2.to("milliseconds")).toBe(1000);
    });

    it("toSeconds", () => {
      const time = chrono.milliseconds(1000);
      const time2 = chrono.from(1000, "milliseconds");

      expect(time.toSeconds()).toBe(1);
      expect(time.to("seconds")).toBe(1);
      expect(time2.toSeconds()).toBe(1);
      expect(time2.to("seconds")).toBe(1);
    });

    it("toMinutes", () => {
      const time = chrono.milliseconds(1000 * 60);
      const time2 = chrono.from(1000 * 60, "milliseconds");

      expect(time.toMinutes()).toBe(1);
      expect(time.to("minutes")).toBe(1);
      expect(time2.toMinutes()).toBe(1);
      expect(time2.to("minutes")).toBe(1);
    });

    it("toHours", () => {
      const time = chrono.milliseconds(1000 * 60 * 60);
      const time2 = chrono.from(1000 * 60 * 60, "milliseconds");

      expect(time.toHours()).toBe(1);
      expect(time.to("hours")).toBe(1);
      expect(time2.toHours()).toBe(1);
      expect(time2.to("hours")).toBe(1);
    });

    it("toDays", () => {
      const time = chrono.milliseconds(1000 * 60 * 60 * 24);
      const time2 = chrono.from(1000 * 60 * 60 * 24, "milliseconds");

      expect(time.toDays()).toBe(1);
      expect(time.to("days")).toBe(1);
      expect(time2.toDays()).toBe(1);
      expect(time2.to("days")).toBe(1);
    });

    it("toWeeks", () => {
      const time = chrono.milliseconds(1000 * 60 * 60 * 24 * 7);
      const time2 = chrono.from(1000 * 60 * 60 * 24 * 7, "milliseconds");

      expect(time.toWeeks()).toBe(1);
      expect(time.to("weeks")).toBe(1);
      expect(time2.toWeeks()).toBe(1);
      expect(time2.to("weeks")).toBe(1);
    });

    it("toMonths", () => {
      const time = chrono.milliseconds((1000 * 60 * 60 * 24 * 365) / 12);
      const time2 = chrono.from(
        (1000 * 60 * 60 * 24 * 365) / 12,
        "milliseconds"
      );

      expect(time.toMonths()).toBe(1);
      expect(time.to("months")).toBe(1);
      expect(time2.toMonths()).toBe(1);
      expect(time2.to("months")).toBe(1);
    });

    it("toYears", () => {
      const time = chrono.milliseconds(1000 * 60 * 60 * 24 * 365);
      const time2 = chrono.from(1000 * 60 * 60 * 24 * 365, "milliseconds");

      expect(time.toYears()).toBe(1);
      expect(time.to("years")).toBe(1);
      expect(time2.toYears()).toBe(1);
      expect(time2.to("years")).toBe(1);
    });
  });

  describe("seconds", () => {
    it("toMilliseconds", () => {
      const time = chrono.seconds(1);
      expect(time.toMilliseconds()).toBe(1000);
    });

    it("toSeconds", () => {
      const time = chrono.seconds(1);
      expect(time.toSeconds()).toBe(1);
    });

    it("toMinutes", () => {
      const time = chrono.seconds(60);
      expect(time.toMinutes()).toBe(1);
    });

    it("toHours", () => {
      const time = chrono.seconds(60 * 60);
      expect(time.toHours()).toBe(1);
    });

    it("toDays", () => {
      const time = chrono.seconds(60 * 60 * 24);
      expect(time.toDays()).toBe(1);
    });

    it("toWeeks", () => {
      const time = chrono.seconds(60 * 60 * 24 * 7);
      expect(time.toWeeks()).toBe(1);
    });

    it("toMonths", () => {
      const time = chrono.seconds((60 * 60 * 24 * 365) / 12);
      expect(time.toMonths()).toBe(1);
    });

    it("toYears", () => {
      const time = chrono.seconds(60 * 60 * 24 * 365);
      expect(time.toYears()).toBe(1);
    });
  });

  describe("minutes", () => {
    it("toMilliseconds", () => {
      const time = chrono.minutes(1);
      expect(time.toMilliseconds()).toBe(60 * 1000);
    });

    it("toSeconds", () => {
      const time = chrono.minutes(1);
      expect(time.toSeconds()).toBe(60);
    });

    it("toMinutes", () => {
      const time = chrono.minutes(1);
      expect(time.toMinutes()).toBe(1);
    });

    it("toHours", () => {
      const time = chrono.minutes(60);
      expect(time.toHours()).toBe(1);
    });

    it("toDays", () => {
      const time = chrono.minutes(60 * 24);
      expect(time.toDays()).toBe(1);
    });

    it("toWeeks", () => {
      const time = chrono.minutes(60 * 24 * 7);
      expect(time.toWeeks()).toBe(1);
    });

    it("toMonths", () => {
      const time = chrono.minutes((60 * 24 * 365) / 12);
      expect(time.toMonths()).toBe(1);
    });

    it("toYears", () => {
      const time = chrono.minutes(60 * 24 * 365);
      expect(time.toYears()).toBe(1);
    });
  });

  describe("hours", () => {
    it("toMilliseconds", () => {
      const time = chrono.hours(1);
      expect(time.toMilliseconds()).toBe(1000 * 60 * 60);
    });

    it("toSeconds", () => {
      const time = chrono.hours(1);
      expect(time.toSeconds()).toBe(60 * 60);
    });

    it("toMinutes", () => {
      const time = chrono.hours(1);
      expect(time.toMinutes()).toBe(60);
    });

    it("toHours", () => {
      const time = chrono.hours(1);
      expect(time.toHours()).toBe(1);
    });

    it("toDays", () => {
      const time = chrono.hours(24);
      expect(time.toDays()).toBe(1);
    });

    it("toWeeks", () => {
      const time = chrono.hours(24 * 7);
      expect(time.toWeeks()).toBe(1);
    });

    it("toMonths", () => {
      const time = chrono.hours((24 * 365) / 12);
      expect(time.toMonths()).toBe(1);
    });

    it("toYears", () => {
      const time = chrono.hours(24 * 365);
      expect(time.toYears()).toBe(1);
    });
  });

  describe("days", () => {
    it("toMilliseconds", () => {
      const time = chrono.days(1);
      expect(time.toMilliseconds()).toBe(1000 * 60 * 60 * 24);
    });

    it("toSeconds", () => {
      const time = chrono.days(1);
      expect(time.toSeconds()).toBe(60 * 60 * 24);
    });

    it("toMinutes", () => {
      const time = chrono.days(1);
      expect(time.toMinutes()).toBe(60 * 24);
    });

    it("toHours", () => {
      const time = chrono.days(1);
      expect(time.toHours()).toBe(24);
    });

    it("toDays", () => {
      const time = chrono.days(1);
      expect(time.toDays()).toBe(1);
    });

    it("toWeeks", () => {
      const time = chrono.days(7);
      expect(time.toWeeks()).toBe(1);
    });

    it("toMonths", () => {
      const time = chrono.days(365 / 12);
      expect(time.toMonths()).toBe(1);
    });

    it("toYears", () => {
      const time = chrono.days(365);
      expect(time.toYears()).toBe(1);
    });
  });

  describe("weeks", () => {
    it("toMilliseconds", () => {
      const time = chrono.weeks(1);
      expect(time.toMilliseconds()).toBe(1000 * 60 * 60 * 24 * 7);
    });

    it("toSeconds", () => {
      const time = chrono.weeks(1);
      expect(time.toSeconds()).toBe(60 * 60 * 24 * 7);
    });

    it("toMinutes", () => {
      const time = chrono.weeks(1);
      expect(time.toMinutes()).toBe(60 * 24 * 7);
    });

    it("toHours", () => {
      const time = chrono.weeks(1);
      expect(time.toHours()).toBe(24 * 7);
    });

    it("toDays", () => {
      const time = chrono.weeks(1);
      expect(time.toDays()).toBe(7);
    });

    it("toWeeks", () => {
      const time = chrono.weeks(1);
      expect(time.toWeeks()).toBe(1);
    });

    it("toMonths", () => {
      const time = chrono.weeks(52);
      expect(time.toMonths()).toBe(11.9671);
    });

    it("toYears", () => {
      const time = chrono.weeks(52);
      expect(time.toYears()).toBe(0.9973);
    });
  });

  describe("months", () => {
    it("toMilliseconds", () => {
      const time = chrono.months(1);
      expect(time.toMilliseconds()).toBe((1000 * 60 * 60 * 24 * 365) / 12);
    });

    it("toSeconds", () => {
      const time = chrono.months(1);
      expect(time.toSeconds()).toBe((60 * 60 * 24 * 365) / 12);
    });

    it("toMinutes", () => {
      const time = chrono.months(1);
      expect(time.toMinutes()).toBe((60 * 24 * 365) / 12);
    });

    it("toHours", () => {
      const time = chrono.months(1);
      expect(time.toHours()).toBe((24 * 365) / 12);
    });

    it("toDays", () => {
      const time = chrono.months(1);
      expect(time.toDays()).toBe(30.4167);
    });

    it("toWeeks", () => {
      const time = chrono.months(1);
      expect(time.toWeeks()).toBe(4.3452);
    });

    it("toMonths", () => {
      const time = chrono.months(1);
      expect(time.toMonths()).toBe(1);
    });

    it("toYears", () => {
      const time = chrono.months(12);
      expect(time.toYears()).toBe(1);
    });
  });

  describe("years", () => {
    it("toMilliseconds", () => {
      const time = chrono.years(1);
      expect(time.toMilliseconds()).toBe(1000 * 60 * 60 * 24 * 365);
    });

    it("toSeconds", () => {
      const time = chrono.years(1);
      expect(time.toSeconds()).toBe(60 * 60 * 24 * 365);
    });

    it("toMinutes", () => {
      const time = chrono.years(1);
      expect(time.toMinutes()).toBe(60 * 24 * 365);
    });

    it("toHours", () => {
      const time = chrono.years(1);
      expect(time.toHours()).toBe(24 * 365);
    });

    it("toDays", () => {
      const time = chrono.years(1);
      expect(time.toDays()).toBe(365);
    });

    it("toWeeks", () => {
      const time = chrono.years(1);
      expect(time.toWeeks()).toBe(52.1429);
    });

    it("toMonths", () => {
      const time = chrono.years(1);
      expect(time.toMonths()).toBe(12);
    });

    it("toYears", () => {
      const time = chrono.years(1);
      expect(time.toYears()).toBe(1);
    });
  });
});

describe("add", () => {
  const ONE_YEAR_IN_MS = 1000 * 60 * 60 * 24 * 365;
  const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;
  const ONE_YEAR_IN_MINUTES = 60 * 24 * 365;
  const ONE_YEAR_IN_HOURS = 24 * 365;
  const ONE_YEAR_IN_DAYS = 365;
  const ONE_YEAR_IN_WEEKS = 52.1429;
  const ONE_YEAR_IN_MONTHS = 12;
  const ONE_YEAR_IN_YEARS = 1;

  describe("milliseconds", () => {
    const TWENTY_FIVE_YEARS_IN_MS = 1000 * 60 * 60 * 24 * 365 * 25;
    const time = chrono.milliseconds(TWENTY_FIVE_YEARS_IN_MS);

    it("adding milliseconds", () => {
      const result = time.add(ONE_YEAR_IN_MS, "milliseconds");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding seconds", () => {
      const result = time.add(ONE_YEAR_IN_SECONDS, "seconds");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding minutes", () => {
      const result = time.add(ONE_YEAR_IN_MINUTES, "minutes");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding hours", () => {
      const result = time.add(ONE_YEAR_IN_HOURS, "hours");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding days", () => {
      const result = time.add(ONE_YEAR_IN_DAYS, "days");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding weeks", () => {
      const result = time.add(ONE_YEAR_IN_WEEKS, "weeks");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding months", () => {
      const result = time.add(ONE_YEAR_IN_MONTHS, "months");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding years", () => {
      const result = time.add(ONE_YEAR_IN_YEARS, "years");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });
  });

  describe("seconds", () => {
    const TWENTY_FIVE_YEARS_IN_SECONDS = 60 * 60 * 24 * 365 * 25;
    const time = chrono.seconds(TWENTY_FIVE_YEARS_IN_SECONDS);

    it("adding milliseconds", () => {
      const result = time.add(ONE_YEAR_IN_MS, "milliseconds");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding seconds", () => {
      const result = time.add(ONE_YEAR_IN_SECONDS, "seconds");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding minutes", () => {
      const result = time.add(ONE_YEAR_IN_MINUTES, "minutes");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding hours", () => {
      const result = time.add(ONE_YEAR_IN_HOURS, "hours");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding days", () => {
      const result = time.add(ONE_YEAR_IN_DAYS, "days");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding weeks", () => {
      const result = time.add(ONE_YEAR_IN_WEEKS, "weeks");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding months", () => {
      const result = time.add(ONE_YEAR_IN_MONTHS, "months");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding years", () => {
      const result = time.add(ONE_YEAR_IN_YEARS, "years");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });
  });

  describe("minutes", () => {
    const TWENTY_FIVE_YEARS_IN_MINUTES = 60 * 24 * 365 * 25;
    const time = chrono.minutes(TWENTY_FIVE_YEARS_IN_MINUTES);

    it("adding milliseconds", () => {
      const result = time.add(ONE_YEAR_IN_MS, "milliseconds");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding seconds", () => {
      const result = time.add(ONE_YEAR_IN_SECONDS, "seconds");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding minutes", () => {
      const result = time.add(ONE_YEAR_IN_MINUTES, "minutes");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding hours", () => {
      const result = time.add(ONE_YEAR_IN_HOURS, "hours");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding days", () => {
      const result = time.add(ONE_YEAR_IN_DAYS, "days");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding weeks", () => {
      const result = time.add(ONE_YEAR_IN_WEEKS, "weeks");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding months", () => {
      const result = time.add(ONE_YEAR_IN_MONTHS, "months");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding years", () => {
      const result = time.add(ONE_YEAR_IN_YEARS, "years");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });
  });

  describe("hours", () => {
    const TWENTY_FIVE_YEARS_IN_HOURS = 24 * 365 * 25;
    const time = chrono.hours(TWENTY_FIVE_YEARS_IN_HOURS);

    it("adding milliseconds", () => {
      const result = time.add(ONE_YEAR_IN_MS, "milliseconds");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding seconds", () => {
      const result = time.add(ONE_YEAR_IN_SECONDS, "seconds");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding minutes", () => {
      const result = time.add(ONE_YEAR_IN_MINUTES, "minutes");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding hours", () => {
      const result = time.add(ONE_YEAR_IN_HOURS, "hours");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding days", () => {
      const result = time.add(ONE_YEAR_IN_DAYS, "days");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding weeks", () => {
      const result = time.add(ONE_YEAR_IN_WEEKS, "weeks");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding months", () => {
      const result = time.add(ONE_YEAR_IN_MONTHS, "months");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding years", () => {
      const result = time.add(ONE_YEAR_IN_YEARS, "years");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });
  });

  describe("days", () => {
    const TWENTY_FIVE_YEARS_IN_DAYS = 365 * 25;
    const time = chrono.days(TWENTY_FIVE_YEARS_IN_DAYS);

    it("adding milliseconds", () => {
      const result = time.add(ONE_YEAR_IN_MS, "milliseconds");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding seconds", () => {
      const result = time.add(ONE_YEAR_IN_SECONDS, "seconds");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding minutes", () => {
      const result = time.add(ONE_YEAR_IN_MINUTES, "minutes");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding hours", () => {
      const result = time.add(ONE_YEAR_IN_HOURS, "hours");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding days", () => {
      const result = time.add(ONE_YEAR_IN_DAYS, "days");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding weeks", () => {
      const result = time.add(ONE_YEAR_IN_WEEKS, "weeks");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding months", () => {
      const result = time.add(ONE_YEAR_IN_MONTHS, "months");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding years", () => {
      const result = time.add(ONE_YEAR_IN_YEARS, "years");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });
  });

  describe("weeks", () => {
    const TWENTY_FIVE_YEARS_IN_WEEKS = 52.1429 * 25;
    const time = chrono.weeks(TWENTY_FIVE_YEARS_IN_WEEKS);

    it("adding milliseconds", () => {
      const result = time.add(ONE_YEAR_IN_MS, "milliseconds");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding seconds", () => {
      const result = time.add(ONE_YEAR_IN_SECONDS, "seconds");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding minutes", () => {
      const result = time.add(ONE_YEAR_IN_MINUTES, "minutes");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding hours", () => {
      const result = time.add(ONE_YEAR_IN_HOURS, "hours");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding days", () => {
      const result = time.add(ONE_YEAR_IN_DAYS, "days");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding weeks", () => {
      const result = time.add(ONE_YEAR_IN_WEEKS, "weeks");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding months", () => {
      const result = time.add(ONE_YEAR_IN_MONTHS, "months");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding years", () => {
      const result = time.add(ONE_YEAR_IN_YEARS, "years");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });
  });

  describe("months", () => {
    const TWENTY_FIVE_YEARS_IN_MONTHS = 12 * 25;
    const time = chrono.months(TWENTY_FIVE_YEARS_IN_MONTHS);

    it("adding milliseconds", () => {
      const result = time.add(ONE_YEAR_IN_MS, "milliseconds");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding seconds", () => {
      const result = time.add(ONE_YEAR_IN_SECONDS, "seconds");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding minutes", () => {
      const result = time.add(ONE_YEAR_IN_MINUTES, "minutes");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding hours", () => {
      const result = time.add(ONE_YEAR_IN_HOURS, "hours");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding days", () => {
      const result = time.add(ONE_YEAR_IN_DAYS, "days");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding weeks", () => {
      const result = time.add(ONE_YEAR_IN_WEEKS, "weeks");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding months", () => {
      const result = time.add(ONE_YEAR_IN_MONTHS, "months");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding years", () => {
      const result = time.add(ONE_YEAR_IN_YEARS, "years");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });
  });

  describe("years", () => {
    const TWENTY_FIVE_YEARS_IN_YEARS = 25;
    const time = chrono.years(TWENTY_FIVE_YEARS_IN_YEARS);

    it("adding milliseconds", () => {
      const result = time.add(ONE_YEAR_IN_MS, "milliseconds");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding seconds", () => {
      const result = time.add(ONE_YEAR_IN_SECONDS, "seconds");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding minutes", () => {
      const result = time.add(ONE_YEAR_IN_MINUTES, "minutes");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding hours", () => {
      const result = time.add(ONE_YEAR_IN_HOURS, "hours");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding days", () => {
      const result = time.add(ONE_YEAR_IN_DAYS, "days");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding weeks", () => {
      const result = time.add(ONE_YEAR_IN_WEEKS, "weeks");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding months", () => {
      const result = time.add(ONE_YEAR_IN_MONTHS, "months");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });

    it("adding years", () => {
      const result = time.add(ONE_YEAR_IN_YEARS, "years");
      expect(result.toYears()).toBe(chrono.years(26).toYears());
    });
  });
});

describe("subtract", () => {
  const ONE_YEAR_IN_MS = 1000 * 60 * 60 * 24 * 365;
  const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;
  const ONE_YEAR_IN_MINUTES = 60 * 24 * 365;
  const ONE_YEAR_IN_HOURS = 24 * 365;
  const ONE_YEAR_IN_DAYS = 365;
  const ONE_YEAR_IN_WEEKS = 52.1429;
  const ONE_YEAR_IN_MONTHS = 12;
  const ONE_YEAR_IN_YEARS = 1;

  describe("milliseconds", () => {
    const TWENTY_FIVE_YEARS_IN_MS = 1000 * 60 * 60 * 24 * 365 * 25;
    const time = chrono.milliseconds(TWENTY_FIVE_YEARS_IN_MS);

    it("subtracting milliseconds", () => {
      const result = time.subtract(ONE_YEAR_IN_MS, "milliseconds");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting seconds", () => {
      const result = time.subtract(ONE_YEAR_IN_SECONDS, "seconds");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting minutes", () => {
      const result = time.subtract(ONE_YEAR_IN_MINUTES, "minutes");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting hours", () => {
      const result = time.subtract(ONE_YEAR_IN_HOURS, "hours");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting days", () => {
      const result = time.subtract(ONE_YEAR_IN_DAYS, "days");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting weeks", () => {
      const result = time.subtract(ONE_YEAR_IN_WEEKS, "weeks");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting months", () => {
      const result = time.subtract(ONE_YEAR_IN_MONTHS, "months");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting years", () => {
      const result = time.subtract(ONE_YEAR_IN_YEARS, "years");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });
  });

  describe("seconds", () => {
    const TWENTY_FIVE_YEARS_IN_SECONDS = 60 * 60 * 24 * 365 * 25;
    const time = chrono.seconds(TWENTY_FIVE_YEARS_IN_SECONDS);

    it("subtracting milliseconds", () => {
      const result = time.subtract(ONE_YEAR_IN_MS, "milliseconds");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting seconds", () => {
      const result = time.subtract(ONE_YEAR_IN_SECONDS, "seconds");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting minutes", () => {
      const result = time.subtract(ONE_YEAR_IN_MINUTES, "minutes");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting hours", () => {
      const result = time.subtract(ONE_YEAR_IN_HOURS, "hours");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting days", () => {
      const result = time.subtract(ONE_YEAR_IN_DAYS, "days");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting weeks", () => {
      const result = time.subtract(ONE_YEAR_IN_WEEKS, "weeks");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting months", () => {
      const result = time.subtract(ONE_YEAR_IN_MONTHS, "months");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting years", () => {
      const result = time.subtract(ONE_YEAR_IN_YEARS, "years");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });
  });

  describe("minutes", () => {
    const TWENTY_FIVE_YEARS_IN_MINUTES = 60 * 24 * 365 * 25;
    const time = chrono.minutes(TWENTY_FIVE_YEARS_IN_MINUTES);

    it("subtracting milliseconds", () => {
      const result = time.subtract(ONE_YEAR_IN_MS, "milliseconds");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting seconds", () => {
      const result = time.subtract(ONE_YEAR_IN_SECONDS, "seconds");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting minutes", () => {
      const result = time.subtract(ONE_YEAR_IN_MINUTES, "minutes");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting hours", () => {
      const result = time.subtract(ONE_YEAR_IN_HOURS, "hours");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting days", () => {
      const result = time.subtract(ONE_YEAR_IN_DAYS, "days");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting weeks", () => {
      const result = time.subtract(ONE_YEAR_IN_WEEKS, "weeks");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting months", () => {
      const result = time.subtract(ONE_YEAR_IN_MONTHS, "months");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting years", () => {
      const result = time.subtract(ONE_YEAR_IN_YEARS, "years");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });
  });

  describe("hours", () => {
    const TWENTY_FIVE_YEARS_IN_HOURS = 24 * 365 * 25;
    const time = chrono.hours(TWENTY_FIVE_YEARS_IN_HOURS);

    it("subtracting milliseconds", () => {
      const result = time.subtract(ONE_YEAR_IN_MS, "milliseconds");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting seconds", () => {
      const result = time.subtract(ONE_YEAR_IN_SECONDS, "seconds");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting minutes", () => {
      const result = time.subtract(ONE_YEAR_IN_MINUTES, "minutes");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting hours", () => {
      const result = time.subtract(ONE_YEAR_IN_HOURS, "hours");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting days", () => {
      const result = time.subtract(ONE_YEAR_IN_DAYS, "days");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting weeks", () => {
      const result = time.subtract(ONE_YEAR_IN_WEEKS, "weeks");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting months", () => {
      const result = time.subtract(ONE_YEAR_IN_MONTHS, "months");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting years", () => {
      const result = time.subtract(ONE_YEAR_IN_YEARS, "years");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });
  });

  describe("days", () => {
    const TWENTY_FIVE_YEARS_IN_DAYS = 365 * 25;
    const time = chrono.days(TWENTY_FIVE_YEARS_IN_DAYS);

    it("subtracting milliseconds", () => {
      const result = time.subtract(ONE_YEAR_IN_MS, "milliseconds");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting seconds", () => {
      const result = time.subtract(ONE_YEAR_IN_SECONDS, "seconds");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting minutes", () => {
      const result = time.subtract(ONE_YEAR_IN_MINUTES, "minutes");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting hours", () => {
      const result = time.subtract(ONE_YEAR_IN_HOURS, "hours");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting days", () => {
      const result = time.subtract(ONE_YEAR_IN_DAYS, "days");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting weeks", () => {
      const result = time.subtract(ONE_YEAR_IN_WEEKS, "weeks");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting months", () => {
      const result = time.subtract(ONE_YEAR_IN_MONTHS, "months");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting years", () => {
      const result = time.subtract(ONE_YEAR_IN_YEARS, "years");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });
  });

  describe("weeks", () => {
    const TWENTY_FIVE_YEARS_IN_WEEKS = 52.1429 * 25;
    const time = chrono.weeks(TWENTY_FIVE_YEARS_IN_WEEKS);

    it("subtracting milliseconds", () => {
      const result = time.subtract(ONE_YEAR_IN_MS, "milliseconds");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting seconds", () => {
      const result = time.subtract(ONE_YEAR_IN_SECONDS, "seconds");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting minutes", () => {
      const result = time.subtract(ONE_YEAR_IN_MINUTES, "minutes");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting hours", () => {
      const result = time.subtract(ONE_YEAR_IN_HOURS, "hours");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting days", () => {
      const result = time.subtract(ONE_YEAR_IN_DAYS, "days");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting weeks", () => {
      const result = time.subtract(ONE_YEAR_IN_WEEKS, "weeks");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting months", () => {
      const result = time.subtract(ONE_YEAR_IN_MONTHS, "months");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting years", () => {
      const result = time.subtract(ONE_YEAR_IN_YEARS, "years");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });
  });

  describe("months", () => {
    const TWENTY_FIVE_YEARS_IN_MONTHS = 12 * 25;
    const time = chrono.months(TWENTY_FIVE_YEARS_IN_MONTHS);

    it("subtracting milliseconds", () => {
      const result = time.subtract(ONE_YEAR_IN_MS, "milliseconds");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting seconds", () => {
      const result = time.subtract(ONE_YEAR_IN_SECONDS, "seconds");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting minutes", () => {
      const result = time.subtract(ONE_YEAR_IN_MINUTES, "minutes");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting hours", () => {
      const result = time.subtract(ONE_YEAR_IN_HOURS, "hours");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting days", () => {
      const result = time.subtract(ONE_YEAR_IN_DAYS, "days");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting weeks", () => {
      const result = time.subtract(ONE_YEAR_IN_WEEKS, "weeks");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting months", () => {
      const result = time.subtract(ONE_YEAR_IN_MONTHS, "months");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting years", () => {
      const result = time.subtract(ONE_YEAR_IN_YEARS, "years");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });
  });

  describe("years", () => {
    const TWENTY_FIVE_YEARS_IN_YEARS = 25;
    const time = chrono.years(TWENTY_FIVE_YEARS_IN_YEARS);

    it("subtracting milliseconds", () => {
      const result = time.subtract(ONE_YEAR_IN_MS, "milliseconds");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting seconds", () => {
      const result = time.subtract(ONE_YEAR_IN_SECONDS, "seconds");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting minutes", () => {
      const result = time.subtract(ONE_YEAR_IN_MINUTES, "minutes");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting hours", () => {
      const result = time.subtract(ONE_YEAR_IN_HOURS, "hours");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting days", () => {
      const result = time.subtract(ONE_YEAR_IN_DAYS, "days");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting weeks", () => {
      const result = time.subtract(ONE_YEAR_IN_WEEKS, "weeks");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting months", () => {
      const result = time.subtract(ONE_YEAR_IN_MONTHS, "months");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });

    it("subtracting years", () => {
      const result = time.subtract(ONE_YEAR_IN_YEARS, "years");
      expect(result.toYears()).toBe(chrono.years(24).toYears());
    });
  });
});

describe("from", () => {
  it("milliseconds", () => {
    const time = chrono.from(1000, "milliseconds");
    expect(time.toSeconds()).toBe(1);
  });

  it("seconds", () => {
    const time = chrono.from(60, "seconds");
    expect(time.toMinutes()).toBe(1);
  });

  it("minutes", () => {
    const time = chrono.from(60, "minutes");
    expect(time.toHours()).toBe(1);
  });

  it("hours", () => {
    const time = chrono.from(24, "hours");
    expect(time.toDays()).toBe(1);
  });

  it("days", () => {
    const time = chrono.from(7, "days");
    expect(time.toWeeks()).toBe(1);
  });

  it("weeks", () => {
    const time = chrono.from(4.3451, "weeks");
    expect(time.toMonths()).toBe(1);
  });

  it("months", () => {
    const time = chrono.from(12, "months");
    expect(time.toYears()).toBe(1);
  });

  it("years", () => {
    const time = chrono.from(1, "years");
    expect(time.toYears()).toBe(1);
  });
});

describe("to", () => {
  it("milliseconds", () => {
    const time = chrono.milliseconds(1000);
    const time2 = chrono.from(1000, "milliseconds");
    expect(time.to("milliseconds")).toBe(1000);
    expect(time2.to("milliseconds")).toBe(1000);
  });

  it("seconds", () => {
    const time = chrono.seconds(1);
    const time2 = chrono.from(1000, "seconds");
    expect(time.to("seconds")).toBe(1);
    expect(time2.to("seconds")).toBe(1000);
  });

  it("minutes", () => {
    const time = chrono.minutes(1);
    const time2 = chrono.from(60, "minutes");
    expect(time.to("minutes")).toBe(1);
    expect(time2.to("minutes")).toBe(60);
  });

  it("hours", () => {
    const time = chrono.hours(1);
    const time2 = chrono.from(60, "hours");
    expect(time.to("hours")).toBe(1);
    expect(time2.to("hours")).toBe(60);
  });

  it("days", () => {
    const time = chrono.days(1);
    const time2 = chrono.from(24, "days");
    expect(time.to("days")).toBe(1);
    expect(time2.to("days")).toBe(24);
  });

  it("weeks", () => {
    const time = chrono.weeks(1);
    const time2 = chrono.from(7, "weeks");
    expect(time.to("weeks")).toBe(1);
    expect(time2.to("weeks")).toBe(7);
  });

  it("months", () => {
    const time = chrono.months(1);
    const time2 = chrono.from(4.3451, "months");
    expect(time.to("months")).toBe(1);
    expect(time2.to("months")).toBe(4.3451);
  });

  it("years", () => {
    const time = chrono.years(1);
    const time2 = chrono.from(12, "years");
    expect(time.to("years")).toBe(1);
    expect(time2.to("years")).toBe(12);
  });
});
