/*
  EDIT THIS FILE BEFORE EACH EVENT.

  This is the only file you should need to touch between events.
  Everything below shows up somewhere on the site — change the value,
  save, and (once deployed) commit + push to update the live site.

  Don't remove the quotes or commas. If you're not sure, copy the
  exact punctuation style of the line you're editing.

  Note: the hero's tagline ("An evening of conversation.") and the
  topics line (Money · Politics · Religion · Power · Family) are
  permanent — they don't change between events, so they're not here.
  They live directly in index.html if they ever need to change.
*/

window.CAFETERIA_EVENT = {

  // The date shown in the hero, e.g. "Saturday, September 26"
  date: "Saturday, September 26",

  // Time and location, e.g. "7:00 PM · The Vegas House"
  timeAndLocation: "7:00 PM · The Vegas House",

  // How many people per table this event — write it as a word to match
  // the sentence ("Six", "Seven", "Eight"), not a numeral.
  tableSize: "Six",

  // The small label above the question, e.g. "This one opens with"
  askEyebrow: "This one opens with",

  // The question for this event. You can use <em>...</em> around the
  // part you want in amber/emphasis, same as the current one does.
  question: 'In the context of money, politics, religion, power, and family — <em>what do you actually care about?</em>',

  // Survey stats shown in "What we've found so far".
  // Add, remove, or edit entries as needed — the layout adjusts automatically.
  // Set highlight: true on at most one or two you want to stand out in amber.
  stats: [
    { value: "5.0", label: "Felt respected, even when their ideas were challenged", highlight: true },
    { value: "4.7", label: "Felt heard", highlight: false },
    { value: "9/9", label: "Left with a view shifted or better understood", highlight: false },
    { value: "9/9", label: "Said they'd come back", highlight: false }
  ]

  // Note: the RSVP form itself is wired to Netlify Forms, not a URL in
  // this file — see README.md if you ever need to change how it's handled.

};
