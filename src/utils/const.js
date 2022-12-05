export const theme = {
  primary: "#091929",
  textPrimary: "#b2bac2",
  textSecond: "#000000",
  textTitle: "#f3f6f9",
  textHighlight: "#66b3ff",
  borderLine: "#81cff5",
  backgroundForm: "#1f2938",
  backgroundInput: "#384152",
  bluef1: "#1878f3",
  backgroundInput: "#384152",
  colorGoogleBlue: "#4188f6",
  bgPrimary: "#091929",
  inputActive: "#a2f7c8",
};

//Header component
export const dataCategory = [
  {
    title: "Movies",
    // menu: ["Popular", "Now Playing", "Upcoming", "Top Rated"],
    menu: [
      {
        title: "Popular",
        to: "/movie/popular",
      },
      {
        title: "Now Playing",
        to: "/movie/now-playing",
      },
      {
        title: "Upcoming",
        to: "/movie/upcoming",
      },
      {
        title: "Top Rated",
        to: "/movie/top-rated",
      },
    ],
  },
  {
    title: "TV Shows",
    // menu: ["Popular", "Airing Today", "On TV", "Top Rated"],
    menu: [
      {
        title: "Popular",
        to: "/tv/popular",
      },
      {
        title: "Airing Today",
        to: "/tv/airing-today",
      },
      {
        title: "On TV",
        to: "/tv/on-tv",
      },
      {
        title: "Top Rated",
        to: "/tv/top-rated",
      },
    ],
  },
  {
    title: "People",
    menu: [
      {
        title: "Popular People",
        to: "/people",
      },
    ],
  },
];
//Header component
export const dataItem = [
  {
    title: "EN",
    type: "English",
    children: {
      title: "Language Preferences",
      data: [
        {
          type: "language",
          code: "EN",
          title: "English",
        },
        {
          type: "language",
          code: "VN",
          title: "VietNam",
        },
      ],
    },
  },
];

// movie folder

export const filmOn = [
  {
    title: "On TV",
    active: "active",
  },
];
