import * as strings from "CalendarWebPartStrings";
import { IDatePickerStrings } from "office-ui-fabric-react";

export const Constants = {
  CategoryColumn: "Category",
  MetaDataFieldType: "SP.Taxonomy.TaxonomyFieldValue",
  EventResult_LocalStorage: "eventResult",
  CalendarEventsWithLocalTime_LocalStorage: "calendarEventsWithLocalTime",
  AndConditionStart: "<And>",
  AndConditionEnd: "</And>",
  OrConditionStart: "<Or>",
  OrConditionEnd: "</Or>",
  latitude: 58.485601,
  longitude: 19.807854,
  eventLayoutOverviewPageURL: `{0}/_layouts/15/Event.aspx?ListGuid={1}&ItemId={2}`
};

export const DayPickerStrings: IDatePickerStrings = {
  months: [
    strings.January,
    strings.February,
    strings.March,
    strings.April,
    strings.May,
    strings.June,
    strings.July,
    strings.August,
    strings.September,
    strings.October,
    strings.November,
    strings.December,
  ],
  shortMonths: [
    strings.Jan,
    strings.Feb,
    strings.Mar,
    strings.Apr,
    strings.May,
    strings.Jun,
    strings.Jul,
    strings.Aug,
    strings.Sep,
    strings.Oct,
    strings.Nov,
    strings.Dez,
  ],
  days: [
    strings.Sunday,
    strings.Monday,
    strings.Tuesday,
    strings.Wednesday,
    strings.Thursday,
    strings.Friday,
    strings.Saturday,
  ],
  shortDays: [
    strings.ShortDay_S,
    strings.ShortDay_M,
    strings.ShortDay_T,
    strings.ShortDay_W,
    strings.ShortDay_Thursday,
    strings.ShortDay_Friday,
    strings.ShortDay_Sunday,
  ],
  goToToday: strings.GoToDay,
  prevMonthAriaLabel: strings.PrevMonth,
  nextMonthAriaLabel: strings.NextMonth,
  prevYearAriaLabel: strings.PrevYear,
  nextYearAriaLabel: strings.NextYear,
  closeButtonAriaLabel: strings.CloseDate,
  isRequiredErrorMessage: strings.IsRequired,
  invalidInputErrorMessage: strings.InvalidDateFormat,
};