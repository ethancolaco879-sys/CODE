const startingPlaces = [
    "Belfast International",
    "Birmingham",
    "Bristol",
    "Bournemouth",
    "East Midlands",
    "Edinburgh",
    "Glasgow",
    "Leeds Bradford",
    "Liverpool John Lennon",
    "London Gatwick",
    "London Luton",
    "London Stansted",
    "Manchester",
    "Newcastle International"
];

const endingPlaces = [
  // Austria
  "Innsbruck Airport (INN)",
  "Salzburg Airport (SZG)",
  "Vienna International Airport (VIE)",

  // Bulgaria
  "Burgas Airport (BOJ)",

  // Canary Islands
  "Fuerteventura Airport (FUE)",
  "Gran Canaria Airport (LPA)",
  "La Palma Airport (SPC)",
  "Lanzarote Airport (ACE)",
  "Tenerife South Airport (TFS)",

  // Channel Islands
  "Jersey Airport (JER)",

  // Croatia
  "Dubrovnik Airport (DBV)",
  "Pula Airport (PUY)",
  "Split Airport (SPU)",

  // Cyprus
  "Larnaca International Airport (LCA)",
  "Paphos International Airport (PFO)",

  // Czech Republic
  "Prague Airport (PRG)",

  // Denmark
  "Copenhagen Airport (CPH)",

  // Egypt
  "Hurghada International Airport (HRG)",
  "Sharm El Sheikh International Airport (SSH)",

  // Estonia
  "Tallinn Airport (TLL)",

  // France
  "Bergerac Airport (EGC)",
  "La Rochelle Airport (LRH)",
  "Nice Côte d'Azur Airport (NCE)",
  "Paris Charles de Gaulle Airport (CDG)",
  "Perpignan Airport (PGF)",
  "Strasbourg Airport (SXB)",

  // Germany
  "Berlin Brandenburg Airport (BER)",
  "Cologne Bonn Airport (CGN)",

  // Greece
  "Athens International Airport (ATH)",
  "Chania International Airport (CHQ) - Crete",
  "Corfu International Airport (CFU)",
  "Heraklion International Airport (HER) - Crete",
  "Kalamata International Airport (KLX)",
  "Kavala International Airport (KVA) - Thassos",
  "Kefalonia Airport (EFL)",
  "Kos International Airport (KGS)",
  "Lesvos Mytilene Airport (MJT)",
  "Preveza Airport (PVK) - Lefkada",
  "Rhodes International Airport (RHO)",
  "Samos International Airport (SMI)",
  "Santorini Airport (JTR)",
  "Skiathos Airport (JSI)",
  "Thessaloniki Airport (SKG) - Halkidiki",
  "Zakynthos Airport (ZTH) - Zante",

  // Hungary
  "Budapest Airport (BUD)",

  // Iceland
  "Keflavík International Airport (KEF) - Reykjavik",

  // Italy
  "Catania Airport (CTA) - Sicily",
  "Naples International Airport (NAP)",
  "Olbia Costa Smeralda Airport (OLB) - Sardinia",
  "Palermo Airport (PMO) - Sicily",
  "Pisa International Airport (PSA)",
  "Rome Fiumicino Airport (FCO)",
  "Salerno Costa d'Amalfi Airport (QSR)",
  "Venice Marco Polo Airport (VCE)",
  "Verona Airport (VRN)",

  // Malta
  "Malta International Airport (MLA)",

  // Montenegro
  "Tivat Airport (TIV)",

  // Morocco
  "Agadir Al Massira Airport (AGA)",
  "Marrakech Menara Airport (RAK)",

  // Norway
  "Bergen Airport (BGO)",

  // Poland
  "Gdańsk Airport (GDN)",
  "Kraków Airport (KRK)",

    // Portugal
  "Faro Airport (FAO) - Algarve",
  "Lisbon Airport (LIS)",
  "Madeira Airport (FNC)",
  "Porto Airport (OPO)",
  "Porto Airport (OPO)",

  // Balearic Islands
  "Ibiza Airport (IBZ)",
  "Menorca Airport (MAH)",
  "Palma de Mallorca Airport (PMI) - Majorca",

  // Mainland Spain
  "Alicante Airport (ALC)",
  "Almería Airport (LEI)",
  "Barcelona El Prat Airport (BCN)",
  "Girona-Costa Brava Airport (GRO)",
  "Jerez Airport (XRY)",
  "Málaga Airport (AGP)",
  "Reus Airport (REU)",

  // Switzerland
  "Geneva Airport (GVA)",

  // Turkey
  "Antalya Airport (AYT)",
  "Bodrum Milas Airport (BJV)",
  "Dalaman Airport (DLM)",
  "Izmir Adnan Menderes Airport (ADB)"
];

const flights = [
    {
        id: 1,
        from: "London Stansted",
        to: "Lisbon Airport (LIS)",
        departureDate: "2026-09-10",
        returnDate: "2026-09-17",
        departureTime: "06:30",
        arrivalTime: "09:15",
        price: 89
    },
    {
        id: 2,
        from: "London Stansted",
        to: "Lisbon Airport (LIS)",
        departureDate: "2026-09-10",
        returnDate: "2026-09-17",
        departureTime: "13:20",
        arrivalTime: "16:05",
        price: 105
    },
    {
        id: 3,
        from: "London Stansted",
        to: "Lisbon Airport (LIS)",
        departureDate: "2026-09-10",
        returnDate: "2026-09-17",
        departureTime: "18:45",
        arrivalTime: "21:30",
        price: 79
    },

    {
        id: 4,
        from: "London Gatwick",
        to: "Lisbon Airport (LIS)",
        departureDate: "2026-09-10",
        returnDate: "2026-09-17",
        departureTime: "07:15",
        arrivalTime: "10:00",
        price: 92
    },
    {
        id: 5,
        from: "London Gatwick",
        to: "Lisbon Airport (LIS)",
        departureDate: "2026-09-10",
        returnDate: "2026-09-17",
        departureTime: "15:40",
        arrivalTime: "18:25",
        price: 118
    },

    {
        id: 6,
        from: "Manchester",
        to: "Tenerife South Airport (TFS)",
        departureDate: "2026-09-12",
        returnDate: "2026-09-19",
        departureTime: "06:00",
        arrivalTime: "10:35",
        price: 165
    },
    {
        id: 7,
        from: "Manchester",
        to: "Tenerife South Airport (TFS)",
        departureDate: "2026-09-12",
        returnDate: "2026-09-19",
        departureTime: "09:30",
        arrivalTime: "14:05",
        price: 189
    },
    {
        id: 8,
        from: "Manchester",
        to: "Tenerife South Airport (TFS)",
        departureDate: "2026-09-12",
        returnDate: "2026-09-19",
        departureTime: "15:10",
        arrivalTime: "19:45",
        price: 154
    },

    {
        id: 9,
        from: "Birmingham",
        to: "Tenerife South Airport (TFS)",
        departureDate: "2026-09-12",
        returnDate: "2026-09-19",
        departureTime: "07:40",
        arrivalTime: "12:10",
        price: 159
    },
    {
        id: 10,
        from: "Birmingham",
        to: "Tenerife South Airport (TFS)",
        departureDate: "2026-09-12",
        returnDate: "2026-09-19",
        departureTime: "14:25",
        arrivalTime: "18:55",
        price: 177
    },

    {
        id: 11,
        from: "London Gatwick",
        to: "Alicante Airport (ALC)",
        departureDate: "2026-09-15",
        returnDate: "2026-09-22",
        departureTime: "05:50",
        arrivalTime: "09:20",
        price: 72
    },
    {
        id: 12,
        from: "London Gatwick",
        to: "Alicante Airport (ALC)",
        departureDate: "2026-09-15",
        returnDate: "2026-09-22",
        departureTime: "11:40",
        arrivalTime: "15:10",
        price: 95
    },
    {
        id: 13,
        from: "London Gatwick",
        to: "Alicante Airport (ALC)",
        departureDate: "2026-09-15",
        returnDate: "2026-09-22",
        departureTime: "17:20",
        arrivalTime: "20:50",
        price: 83
    },

    {
        id: 14,
        from: "Bristol",
        to: "Alicante Airport (ALC)",
        departureDate: "2026-09-15",
        returnDate: "2026-09-22",
        departureTime: "06:15",
        arrivalTime: "09:45",
        price: 76
    },
    {
        id: 15,
        from: "Bristol",
        to: "Alicante Airport (ALC)",
        departureDate: "2026-09-15",
        returnDate: "2026-09-22",
        departureTime: "16:00",
        arrivalTime: "19:30",
        price: 91
    },

    {
        id: 16,
        from: "London Luton",
        to: "Málaga Airport (AGP)",
        departureDate: "2026-09-18",
        returnDate: "2026-09-25",
        departureTime: "06:45",
        arrivalTime: "10:35",
        price: 84
    },
    {
        id: 17,
        from: "London Luton",
        to: "Málaga Airport (AGP)",
        departureDate: "2026-09-18",
        returnDate: "2026-09-25",
        departureTime: "12:25",
        arrivalTime: "16:15",
        price: 103
    },
    {
        id: 18,
        from: "London Luton",
        to: "Málaga Airport (AGP)",
        departureDate: "2026-09-18",
        returnDate: "2026-09-25",
        departureTime: "18:10",
        arrivalTime: "22:00",
        price: 93
    },

    {
        id: 19,
        from: "Manchester",
        to: "Málaga Airport (AGP)",
        departureDate: "2026-09-18",
        returnDate: "2026-09-25",
        departureTime: "07:10",
        arrivalTime: "11:10",
        price: 99
    },
    {
        id: 20,
        from: "Manchester",
        to: "Málaga Airport (AGP)",
        departureDate: "2026-09-18",
        returnDate: "2026-09-25",
        departureTime: "15:30",
        arrivalTime: "19:30",
        price: 115
    },

    {
        id: 21,
        from: "London Stansted",
        to: "Palma de Mallorca Airport (PMI) - Majorca",
        departureDate: "2026-09-20",
        returnDate: "2026-09-27",
        departureTime: "05:55",
        arrivalTime: "09:20",
        price: 69
    },
    {
        id: 22,
        from: "London Stansted",
        to: "Palma de Mallorca Airport (PMI) - Majorca",
        departureDate: "2026-09-20",
        returnDate: "2026-09-27",
        departureTime: "10:45",
        arrivalTime: "14:10",
        price: 87
    },
    {
        id: 23,
        from: "London Stansted",
        to: "Palma de Mallorca Airport (PMI) - Majorca",
        departureDate: "2026-09-20",
        returnDate: "2026-09-27",
        departureTime: "17:35",
        arrivalTime: "21:00",
        price: 75
    },

    {
        id: 24,
        from: "Birmingham",
        to: "Palma de Mallorca Airport (PMI) - Majorca",
        departureDate: "2026-09-20",
        returnDate: "2026-09-27",
        departureTime: "06:30",
        arrivalTime: "09:55",
        price: 78
    },
    {
        id: 25,
        from: "Birmingham",
        to: "Palma de Mallorca Airport (PMI) - Majorca",
        departureDate: "2026-09-20",
        returnDate: "2026-09-27",
        departureTime: "14:15",
        arrivalTime: "17:40",
        price: 94
    },

    {
        id: 26,
        from: "Newcastle International",
        to: "Paphos International Airport (PFO)",
        departureDate: "2026-09-22",
        returnDate: "2026-09-29",
        departureTime: "06:10",
        arrivalTime: "12:50",
        price: 174
    },
    {
        id: 27,
        from: "Newcastle International",
        to: "Paphos International Airport (PFO)",
        departureDate: "2026-09-22",
        returnDate: "2026-09-29",
        departureTime: "13:40",
        arrivalTime: "20:20",
        price: 192
    },

    {
        id: 28,
        from: "Manchester",
        to: "Paphos International Airport (PFO)",
        departureDate: "2026-09-22",
        returnDate: "2026-09-29",
        departureTime: "07:00",
        arrivalTime: "13:35",
        price: 168
    },
    {
        id: 29,
        from: "Manchester",
        to: "Paphos International Airport (PFO)",
        departureDate: "2026-09-22",
        returnDate: "2026-09-29",
        departureTime: "15:20",
        arrivalTime: "21:55",
        price: 185
    },

    {
        id: 30,
        from: "London Gatwick",
        to: "Faro Airport (FAO) - Algarve",
        departureDate: "2026-09-25",
        returnDate: "2026-10-02",
        departureTime: "06:25",
        arrivalTime: "09:20",
        price: 71
    },
    {
        id: 31,
        from: "London Gatwick",
        to: "Faro Airport (FAO) - Algarve",
        departureDate: "2026-09-25",
        returnDate: "2026-10-02",
        departureTime: "12:50",
        arrivalTime: "15:45",
        price: 89
    },
    {
        id: 32,
        from: "London Gatwick",
        to: "Faro Airport (FAO) - Algarve",
        departureDate: "2026-09-25",
        returnDate: "2026-10-02",
        departureTime: "18:30",
        arrivalTime: "21:25",
        price: 81
    },

    {
        id: 33,
        from: "Bristol",
        to: "Faro Airport (FAO) - Algarve",
        departureDate: "2026-09-25",
        returnDate: "2026-10-02",
        departureTime: "07:20",
        arrivalTime: "10:10",
        price: 74
    },
    {
        id: 34,
        from: "Bristol",
        to: "Faro Airport (FAO) - Algarve",
        departureDate: "2026-09-25",
        returnDate: "2026-10-02",
        departureTime: "16:45",
        arrivalTime: "19:35",
        price: 88
    },

    {
        id: 35,
        from: "Leeds Bradford",
        to: "Ibiza Airport (IBZ)",
        departureDate: "2026-09-28",
        returnDate: "2026-10-05",
        departureTime: "06:35",
        arrivalTime: "10:15",
        price: 96
    },
    {
        id: 36,
        from: "Leeds Bradford",
        to: "Ibiza Airport (IBZ)",
        departureDate: "2026-09-28",
        returnDate: "2026-10-05",
        departureTime: "14:55",
        arrivalTime: "18:35",
        price: 119
    },

    {
        id: 37,
        from: "London Stansted",
        to: "Ibiza Airport (IBZ)",
        departureDate: "2026-09-28",
        returnDate: "2026-10-05",
        departureTime: "05:45",
        arrivalTime: "09:20",
        price: 79
    },
    {
        id: 38,
        from: "London Stansted",
        to: "Ibiza Airport (IBZ)",
        departureDate: "2026-09-28",
        returnDate: "2026-10-05",
        departureTime: "11:30",
        arrivalTime: "15:05",
        price: 101
    },
    {
        id: 39,
        from: "London Stansted",
        to: "Ibiza Airport (IBZ)",
        departureDate: "2026-09-28",
        returnDate: "2026-10-05",
        departureTime: "18:15",
        arrivalTime: "21:50",
        price: 90
    },

    {
        id: 40,
        from: "Edinburgh",
        to: "Antalya Airport (AYT)",
        departureDate: "2026-10-02",
        returnDate: "2026-10-09",
        departureTime: "06:05",
        arrivalTime: "12:40",
        price: 179
    },
    {
        id: 41,
        from: "Edinburgh",
        to: "Antalya Airport (AYT)",
        departureDate: "2026-10-02",
        returnDate: "2026-10-09",
        departureTime: "13:15",
        arrivalTime: "19:50",
        price: 198
    },

    {
        id: 42,
        from: "Manchester",
        to: "Antalya Airport (AYT)",
        departureDate: "2026-10-02",
        returnDate: "2026-10-09",
        departureTime: "05:50",
        arrivalTime: "12:10",
        price: 169
    },
    {
        id: 43,
        from: "Manchester",
        to: "Antalya Airport (AYT)",
        departureDate: "2026-10-02",
        returnDate: "2026-10-09",
        departureTime: "14:35",
        arrivalTime: "20:55",
        price: 188
    },

    {
        id: 44,
        from: "London Gatwick",
        to: "Malta International Airport (MLA)",
        departureDate: "2026-10-05",
        returnDate: "2026-10-12",
        departureTime: "06:20",
        arrivalTime: "10:35",
        price: 98
    },
    {
        id: 45,
        from: "London Gatwick",
        to: "Malta International Airport (MLA)",
        departureDate: "2026-10-05",
        returnDate: "2026-10-12",
        departureTime: "13:10",
        arrivalTime: "17:25",
        price: 116
    },
    {
        id: 46,
        from: "London Gatwick",
        to: "Malta International Airport (MLA)",
        departureDate: "2026-10-05",
        returnDate: "2026-10-12",
        departureTime: "18:40",
        arrivalTime: "22:55",
        price: 105
    },

    {
        id: 47,
        from: "Birmingham",
        to: "Malta International Airport (MLA)",
        departureDate: "2026-10-05",
        returnDate: "2026-10-12",
        departureTime: "07:35",
        arrivalTime: "11:50",
        price: 109
    },

    {
        id: 48,
        from: "London Luton",
        to: "Barcelona El Prat Airport (BCN)",
        departureDate: "2026-10-08",
        returnDate: "2026-10-15",
        departureTime: "06:40",
        arrivalTime: "09:55",
        price: 64
    },
    {
        id: 49,
        from: "London Luton",
        to: "Barcelona El Prat Airport (BCN)",
        departureDate: "2026-10-08",
        returnDate: "2026-10-15",
        departureTime: "12:15",
        arrivalTime: "15:30",
        price: 82
    },
    {
        id: 50,
        from: "London Luton",
        to: "Barcelona El Prat Airport (BCN)",
        departureDate: "2026-10-08",
        returnDate: "2026-10-15",
        departureTime: "19:05",
        arrivalTime: "22:20",
        price: 73
    },

        {
        id: 51,
        from: "London Stansted",
        to: "Lisbon Airport (LIS)",
        departureDate: "2026-09-12",
        returnDate: "2026-09-19",
        departureTime: "07:00",
        arrivalTime: "09:45",
        price: 82
    },
    {
        id: 52,
        from: "Manchester",
        to: "Lisbon Airport (LIS)",
        departureDate: "2026-09-10",
        returnDate: "2026-09-17",
        departureTime: "08:15",
        arrivalTime: "11:00",
        price: 97
    },
    {
        id: 53,
        from: "Manchester",
        to: "Tenerife South Airport (TFS)",
        departureDate: "2026-09-10",
        returnDate: "2026-09-17",
        departureTime: "06:45",
        arrivalTime: "11:20",
        price: 149
    },
    {
        id: 54,
        from: "Edinburgh",
        to: "Tenerife South Airport (TFS)",
        departureDate: "2026-09-12",
        returnDate: "2026-09-19",
        departureTime: "07:20",
        arrivalTime: "12:00",
        price: 172
    },
    {
        id: 55,
        from: "Bristol",
        to: "Málaga Airport (AGP)",
        departureDate: "2026-09-12",
        returnDate: "2026-09-19",
        departureTime: "06:30",
        arrivalTime: "10:20",
        price: 88
    },
    {
        id: 56,
        from: "London Luton",
        to: "Alicante Airport (ALC)",
        departureDate: "2026-09-15",
        returnDate: "2026-09-22",
        departureTime: "09:10",
        arrivalTime: "12:40",
        price: 79
    },
    {
        id: 57,
        from: "Birmingham",
        to: "Alicante Airport (ALC)",
        departureDate: "2026-09-15",
        returnDate: "2026-09-22",
        departureTime: "13:05",
        arrivalTime: "16:35",
        price: 85
    },
    {
        id: 58,
        from: "London Stansted",
        to: "Málaga Airport (AGP)",
        departureDate: "2026-09-18",
        returnDate: "2026-09-25",
        departureTime: "05:55",
        arrivalTime: "09:45",
        price: 76
    },
    {
        id: 59,
        from: "Newcastle International",
        to: "Málaga Airport (AGP)",
        departureDate: "2026-09-18",
        returnDate: "2026-09-25",
        departureTime: "07:50",
        arrivalTime: "11:45",
        price: 112
    },
    {
        id: 60,
        from: "Glasgow",
        to: "Palma de Mallorca Airport (PMI) - Majorca",
        departureDate: "2026-09-20",
        returnDate: "2026-09-27",
        departureTime: "06:40",
        arrivalTime: "10:10",
        price: 98
    },
    {
        id: 61,
        from: "Liverpool John Lennon",
        to: "Palma de Mallorca Airport (PMI) - Majorca",
        departureDate: "2026-09-20",
        returnDate: "2026-09-27",
        departureTime: "11:20",
        arrivalTime: "14:50",
        price: 91
    },
    {
        id: 62,
        from: "London Gatwick",
        to: "Paphos International Airport (PFO)",
        departureDate: "2026-09-22",
        returnDate: "2026-09-29",
        departureTime: "06:35",
        arrivalTime: "13:10",
        price: 181
    },
    {
        id: 63,
        from: "Bristol",
        to: "Paphos International Airport (PFO)",
        departureDate: "2026-09-22",
        returnDate: "2026-09-29",
        departureTime: "07:45",
        arrivalTime: "14:20",
        price: 176
    },
    {
        id: 64,
        from: "Leeds Bradford",
        to: "Faro Airport (FAO) - Algarve",
        departureDate: "2026-09-25",
        returnDate: "2026-10-02",
        departureTime: "06:50",
        arrivalTime: "09:40",
        price: 83
    },
    {
        id: 65,
        from: "East Midlands",
        to: "Faro Airport (FAO) - Algarve",
        departureDate: "2026-09-25",
        returnDate: "2026-10-02",
        departureTime: "13:30",
        arrivalTime: "16:20",
        price: 79
    },
    {
        id: 66,
        from: "Manchester",
        to: "Ibiza Airport (IBZ)",
        departureDate: "2026-09-28",
        returnDate: "2026-10-05",
        departureTime: "06:20",
        arrivalTime: "10:00",
        price: 104
    },
    {
        id: 67,
        from: "Birmingham",
        to: "Ibiza Airport (IBZ)",
        departureDate: "2026-09-28",
        returnDate: "2026-10-05",
        departureTime: "12:45",
        arrivalTime: "16:25",
        price: 99
    },
    {
        id: 68,
        from: "London Gatwick",
        to: "Antalya Airport (AYT)",
        departureDate: "2026-10-02",
        returnDate: "2026-10-09",
        departureTime: "06:15",
        arrivalTime: "12:50",
        price: 174
    },
    {
        id: 69,
        from: "Bournemouth",
        to: "Antalya Airport (AYT)",
        departureDate: "2026-10-02",
        returnDate: "2026-10-09",
        departureTime: "07:05",
        arrivalTime: "13:40",
        price: 183
    },
    {
        id: 70,
        from: "Belfast International",
        to: "Malta International Airport (MLA)",
        departureDate: "2026-10-05",
        returnDate: "2026-10-12",
        departureTime: "06:10",
        arrivalTime: "10:30",
        price: 121
    },
    {
        id: 71,
        from: "Manchester",
        to: "Malta International Airport (MLA)",
        departureDate: "2026-10-05",
        returnDate: "2026-10-12",
        departureTime: "14:00",
        arrivalTime: "18:15",
        price: 107
    },
    {
        id: 72,
        from: "Edinburgh",
        to: "Barcelona El Prat Airport (BCN)",
        departureDate: "2026-10-08",
        returnDate: "2026-10-15",
        departureTime: "06:25",
        arrivalTime: "09:40",
        price: 89
    },
    {
        id: 73,
        from: "Bristol",
        to: "Barcelona El Prat Airport (BCN)",
        departureDate: "2026-10-08",
        returnDate: "2026-10-15",
        departureTime: "12:50",
        arrivalTime: "16:05",
        price: 77
    },
    {
        id: 74,
        from: "London Stansted",
        to: "Rome Fiumicino Airport (FCO)",
        departureDate: "2026-09-14",
        returnDate: "2026-09-21",
        departureTime: "06:30",
        arrivalTime: "09:35",
        price: 94
    },
    {
        id: 75,
        from: "Manchester",
        to: "Rome Fiumicino Airport (FCO)",
        departureDate: "2026-09-14",
        returnDate: "2026-09-21",
        departureTime: "13:15",
        arrivalTime: "16:20",
        price: 10
    },
    {
        id: 76,
        from: "London Gatwick",
        to: "Venice Marco Polo Airport (VCE)",
        departureDate: "2026-09-16",
        returnDate: "2026-09-23",
        departureTime: "07:05",
        arrivalTime: "10:00",
        price: 92
    },
    {
        id: 77,
        from: "Birmingham",
        to: "Venice Marco Polo Airport (VCE)",
        departureDate: "2026-09-16",
        returnDate: "2026-09-23",
        departureTime: "14:40",
        arrivalTime: "17:35",
        price: 87
    },
    {
        id: 78,
        from: "London Luton",
        to: "Athens International Airport (ATH)",
        departureDate: "2026-09-19",
        returnDate: "2026-09-26",
        departureTime: "06:00",
        arrivalTime: "11:15",
        price: 131
    },
    {
        id: 79,
        from: "Manchester",
        to: "Athens International Airport (ATH)",
        departureDate: "2026-09-19",
        returnDate: "2026-09-26",
        departureTime: "12:30",
        arrivalTime: "17:45",
        price: 142
    },
    {
        id: 80,
        from: "London Stansted",
        to: "Santorini Airport (JTR)",
        departureDate: "2026-09-21",
        returnDate: "2026-09-28",
        departureTime: "06:45",
        arrivalTime: "12:30",
        price: 156
    },
    {
        id: 81,
        from: "Bristol",
        to: "Santorini Airport (JTR)",
        departureDate: "2026-09-21",
        returnDate: "2026-09-28",
        departureTime: "13:20",
        arrivalTime: "19:05",
        price: 163
    },
    {
        id: 82,
        from: "Edinburgh",
        to: "Corfu International Airport (CFU)",
        departureDate: "2026-09-24",
        returnDate: "2026-10-01",
        departureTime: "06:15",
        arrivalTime: "11:00",
        price: 138
    },
    {
        id: 83,
        from: "Newcastle International",
        to: "Corfu International Airport (CFU)",
        departureDate: "2026-09-24",
        returnDate: "2026-10-01",
        departureTime: "07:30",
        arrivalTime: "12:15",
        price: 145
    },
    {
        id: 84,
        from: "London Gatwick",
        to: "Dubrovnik Airport (DBV)",
        departureDate: "2026-09-26",
        returnDate: "2026-10-03",
        departureTime: "06:50",
        arrivalTime: "10:05",
        price: 119
    },
    {
        id: 85,
        from: "Manchester",
        to: "Dubrovnik Airport (DBV)",
        departureDate: "2026-09-26",
        returnDate: "2026-10-03",
        departureTime: "13:35",
        arrivalTime: "16:50",
        price: 124
    },
    {
        id: 86,
        from: "Birmingham",
        to: "Prague Airport (PRG)",
        departureDate: "2026-09-13",
        returnDate: "2026-09-20",
        departureTime: "06:20",
        arrivalTime: "08:55",
        price: 68
    },
    {
        id: 87,
        from: "London Luton",
        to: "Prague Airport (PRG)",
        departureDate: "2026-09-13",
        returnDate: "2026-09-20",
        departureTime: "12:40",
        arrivalTime: "15:15",
        price: 71
    },
    {
        id: 88,
        from: "Leeds Bradford",
        to: "Budapest Airport (BUD)",
        departureDate: "2026-09-17",
        returnDate: "2026-09-24",
        departureTime: "06:35",
        arrivalTime: "09:20",
        price: 74
    },
    {
        id: 89,
        from: "London Stansted",
        to: "Budapest Airport (BUD)",
        departureDate: "2026-09-17",
        returnDate: "2026-09-24",
        departureTime: "13:50",
        arrivalTime: "16:35",
        price: 69
    },
    {
        id: 90,
        from: "Manchester",
        to: "Copenhagen Airport (CPH)",
        departureDate: "2026-09-27",
        returnDate: "2026-10-04",
        departureTime: "07:10",
        arrivalTime: "09:40",
        price: 96
    }
];