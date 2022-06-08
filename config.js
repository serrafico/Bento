// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'ssireu',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: 'InsertYourAPIKeyHere123456',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '12.972442',
  defaultLongitude: '77.580643',

  // Autochange
  autoChangeTheme: false,

  // Autochabge by OS
  changeThemeByOS: false, 

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: '18:30',
  hourDarkThemeInactive: '07:00',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.protonmail.com/',
    },
    {
      id: '3',
      name: 'Discord',
      icon: 'message-square',
      link: 'https://discord.com',
    },
    {
      id: '4',
      name: 'Calendar',
      icon: 'calendar',
      link: 'https://calendar.google.com/calendar/r',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'glasses',
      link: 'https://reddit.com',
    },
    {
      id: '6',
      name: 'Youtube',
      icon: 'youtube',
      link: 'https://youtube.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'music',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'ATARASHIIGAKKO!',
        link: 'https://www.youtube.com/watch?v=_0rbYJSdWHU',
      },
      {
        name: 'Frederic',
        link: 'https://www.youtube.com/watch?v=PCp2iXA1uLE&list=RDMM&start_radio=1&rv=_0rbYJSdWHU',
      },
      {
        name: 'Pistol',
        link: 'https://www.youtube.com/watch?v=Iu-t_v5h5Bw&list=RDMM&index=6',
      },
      {
        name: 'Puddles',
        link: 'https://www.youtube.com/watch?v=Iu-t_v5h5Bw&list=RDMM&index=6s',
      },
    ],
    secondList: [
      {
        name: 'Tarzan',
        link: 'https://www.youtube.com/watch?v=Iu-t_v5h5Bw&list=RDMM&index=6s',
      },
      {
        name: 'All In',
        link: 'https://www.youtube.com/watch?v=dlMj-mYTrqA&list=RDMM&index=9',
      },
      {
        name: 'Cutthroat',
        link: 'https://www.youtube.com/watch?v=8cJ8ydSeKLQ&list=RDMM&index=10',
      },
      {
        name: 'Belowground',
        link: 'https://www.youtube.com/watch?v=NxgcYThyyuI&list=RDMM&index=13',
      },
    ],
  },
};
