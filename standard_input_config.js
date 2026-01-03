var config_data = `
{
  "dataFormat": "tsv",
  "title": "F1 2026 Tracker",
  "page_title": "Formula One",
  "checkboxAs": "10",
  "Event": [
   { "name": "Grand Prix Event",
      "code": "gp",
      "type":"radio",
      "choices": {
        "au": "Australia<br>",
        "ch": "China<br>",
        "jp": "Japan<br>",
        "ba": "Bahrain<br>",
        "sa": "Saudi Arabia<br>",
        "ma": "Miani<br>",
        "ca": "Canada<br>",
        "mo": "Monaco<br>",
        "bc": "Barcelona-Catalunya<br>",
        "gb": "Great Britain<br>",
        "be": "Belgium<br>",
        "hu": "Hungary<br>",
        "ne": "Netherlands<br>",
        "it": "Italy<br>",
        "sp": "Spain<br>",
        "az": "Azerbaijan<br>",
        "si": "Singapore<br>",
        "US": "United States<br>",
        "me": "Mexico<br>",
        "br": "Brazil<br>",
        "lv": "Las Vegas<br>",
        "qa": "Qatar<br>",
        "ad": "Abu Dhabi<br>",
      },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "NA",
      "required": "true"
    }
      ],
  "Free Practice": [
    { "name": "Leave Starting Zone",
      "code": "al",
      "type": "bool"
    },
    { "name": "L4 Coral Scores",
      "code": "ac4",
      "type": "counter"
    },
    { "name": "L3 Coral Scores",
      "code": "ac3",
      "type": "counter"
    },
    { "name": "L2 Coral Scores",
      "code": "ac2",
      "type": "counter"
    },
    { "name": "L1 Coral Scores",
      "code": "ac1",
      "type": "counter"
    },
     { "name": "Coral Drops",
      "code": "acd",
      "type": "counter"
    },
    { "name": "Processor Scores",
      "code": "aps",
      "type": "counter"
    },
    { "name": "Net Scores",
      "code": "ans",
      "type": "counter"
    },
    { "name": "Algae Drops",
      "code": "ad",
      "type": "counter"
    }
  ],
  "Qualifying": [
    { "name": "L4 Coral Scores",
      "code": "tc4",
      "type": "counter"
    },
    { "name": "L3 Coral Scores",
      "code": "tc3",
      "type": "counter"
    },
    { "name": "L2 Coral Scores",
      "code": "tc2",
      "type": "counter"
    },
    { "name": "L1 Coral Scores",
      "code": "tc1",
      "type": "counter"
    },
        { "name": "Coral Drops",
      "code": "tcd",
      "type": "counter"
    },
    { "name": "Processor Scores",
      "code": "tps",
      "type": "counter"
    },
    { "name": "Net Scores",
      "code": "tns",
      "type": "counter"
    },
    { "name": "Algae Drops",
      "code": "tad",
      "type": "counter"
    }
  ],
  "Race": [
    { "name": "Barge Timer",
      "code": "eb",
      "type": "timer"
    },
    { "name": "Final Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "bs": "Shallow Hang<br>",
        "bd": "Deep Hang<br>",
        "bp": "Parked<br>",
        "bf": "Failed Climb<br>",
        "bx": "Not attempted"
      },
      "defaultValue": "2"
    }
  ],
  "Misc": [
    { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 150
    }
  ]
}`;
