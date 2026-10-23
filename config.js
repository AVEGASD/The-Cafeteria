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

  // The date shown in the hero, e.g. "Saturday, November 21"
  date: "Saturday, November 21",

  // Time and location. Write "TBD" (or leave "") for anything not set yet —
  // it shows as a quiet "Time TBD" / "Location TBD" under the date, and
  // switches to the real value the moment you type it in. Each is independent.
  time: "TBD",
  location: "TBD",

  // How many people per table this event — write it as a word to match
  // the sentence ("Six", "Seven", "Eight"), not a numeral.
  tableSize: "Six",

  // The question(s) for this event, one entry per round, shown in order.
  //   label    - the small line above the question, e.g. "Round 1 — Protests"
  //   question - the question itself. You can use <em>...</em> around a part
  //              you want in amber/emphasis.
  // Two entries = two rounds. For a one-question night, keep a single entry:
  // leave label as "" and it reads "This one opens with" (see askEyebrow).
  rounds: [
    { label: "Round 1 — Protests",      question: "What would it take for you to protest?" },
    { label: "Round 2 — Mental health", question: "How are we actually handling our mental health?" }
  ],

  // Only used when there's a single round with no label of its own.
  askEyebrow: "This one opens with",

  // Survey stats shown in "What we've found so far".
  // Add, remove, or edit entries as needed — the layout adjusts automatically.
  // Set highlight: true on at most one or two you want to stand out in amber.
  stats: [
    { value: "4.9", label: "Felt respected, even when their ideas were challenged", highlight: true },
    { value: "4.4", label: "Felt heard", highlight: false },
    { value: "13/15", label: "Left with a view shifted or better understood", highlight: false },
    { value: "15/15", label: "Said they'd come back", highlight: false }
  ]

  // Note: the RSVP form itself is wired to Netlify Forms, not a URL in
  // this file — see README.md if you ever need to change how it's handled.

};
