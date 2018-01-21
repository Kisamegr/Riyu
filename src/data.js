module.exports = {
  title: 'Hi, I\'m Stratos',
  header: "Hi, I'm Stratos Makrigiannakis",
  description: [
    "currently living in Thessaloniki, Greece.",
    "Started coding in middle school with Pascal, continued tempering with open source C++ Warcraft 3 bots in highschool, modifying Pokemon roms to implement my own unique stories  after  I joined the university, only to discover Unity 3D later and start experimenting making my own games.",
    "I am now working full time as a software developer whilst still having game development as a hobby. You will find me out with friends for (coffee || movies || dinner || board games), at the gym or at home playing games, watching videos and lurking on the internet."
  ],
  
  name: 'Stratos Makrigiannakis',
  footerTitle: 'Software Developer',
  email: 'stratos.makrigiannakis@gmail.com',
  cta: {
    label: 'Get my resume',
    url: 'https://drive.google.com/file/d/1THrBl-jWAYacPdxjgA8kVGE1jZzPSmXD/view?usp=sharing',
  },
  socials: [
    //{ icon: 'twitter', url: '//' },
    // { icon: 'github-circled', url: 'https://github.com/Kisamegr' },
    { icon: 'mail-alt' }, // mail alt automatically links to mailto:email
   // { icon: 'dribbble', url: '//' },
    { icon: 'skype', url: 'skype:kisame_gr?chat' },
    { icon: 'linkedin-squared', url: 'https://www.linkedin.com/in/stratos-makrigiannakis' },
  ],
  bsocials: [
    {icon: 'img/linkedin.svg', url: 'https://www.linkedin.com/in/stratos-makrigiannakis'},
    {icon: 'img/skype.svg', url: 'skype:kisame_gr?chat'},
    {icon: 'img/github.svg', url: 'https://github.com/Kisamegr'},
    {icon: 'img/bitbucket.svg', url: 'https://bitbucket.org/kisamegr/'},
    {icon: 'img/reddit.svg', url: 'https://www.reddit.com/user/kisamegr/'},
    {icon: 'img/facebook.svg', url: 'https://www.facebook.com/kisame.stratos'},
    {icon: 'img/instagram.svg', url: 'https://www.instagram.com/stratos_makr/'},
    {icon: 'img/youtube.svg', url: 'https://www.youtube.com/kisamegr'},
    {icon: 'img/blog.svg', url: 'http://kisamegr.blogspot.gr/'}

  ],

  projects: [
    {
      name: 'Swingoff',
      description: [
        'A fast paced, infinite runner mobile game where you have to stay on air using your mechanical hook. Avoid obstacles in the way and pick up power ups to help you survive!',
        'Developed in a 2-man team with a colleague of mine at the university.',
        'Achieved 2nd place in the national Imagine Cup Games competition by Microsoft.'
      ],
      tags: ['Unity', 'C#', 'Android', '2D'],
      alt: 'Swingoff Screenshot', // alt description of image for accessibility. defaults to '{{name}} Screenshot'
      img: 'https://giphy.com/embed/xULW8lPAzZ1enk4kec',
      alt_img: 'img/Swingoff.png',
      buttons: [
        {
          name: 'Google Play',
          url: 'https://play.google.com/store/apps/details?id=com.dynobyte.swingoff'
        }
      ]    
    },
    {
      name: 'Crafty Fox',
      description: [
        'A highly intensive mobile game, where you control a little fox running away from a granny on a scooter. Eat chickens along the way and catch food thrown by the angry granny to gain more points.',
        'Hired by a local company to develop the game in collaboration with their artist/designer.'

      ], 
      tags: ['Unity', 'C#', 'Android', "iOS", "Windows", '2D'],
      img: 'https://giphy.com/embed/xULW8tCe3AqoE3OKru',
      buttons: [
        {
          name: 'Google Play',
          url: 'https://play.google.com/store/apps/details?id=com.zennogames.craftyfox'
        },
        {
          name: 'Windows Store',
          url: 'https://www.microsoft.com/el-gr/store/p/crafty-fox/9wzdncrdnmwh'
        }
      ] 
    },
    {
      name: 'Snake 3D with AI',
      description: [
       'Adding multiplayer and AI enemies to the classic Snake experience, with 3D cartoonish graphics and funny sound effects.',
       'Play defensive going only after the food, or aggressive by trying to block your opponents in tight spaces.',
       'Graduation Thesis implementation with title \"Developing a 3D video game using Artificial Inteligence techniques\"'

      ], 
      tags: ['Unity', 'C#', "AI", '3D', 'Multiplayer'],
      img: 'https://giphy.com/embed/l49JSwY6hvsq7Hq12',
      buttons: [
        {
          name: 'View Project',
          url: 'https://github.com/Kisamegr/Thesis-Project-Snake'
        },
        {
          name: 'Play WebGL Demo',
          url: 'https://kisamegr.github.io/Thesis-Project-Snake/'
        }
      ] 
    },
  ],
  experiences: [
    {
      title: 'Software Engineer at Wings Systems',
      // title: 'Software Engineer at <a href="http://www.wingssystems.com/">Wings Systems</a>',
      timeline: 'Nov 2016 - Present',
      description: '',
      responsibilities: [
        'Working on software and apps for Windows, MacOS, Android and iOS platforms',
        'Developing back-end modules using C++ on the Qt framework.',
        'Implementing interactive UI components for desktop and mobile devices',
        'Handling the localization process by building the tools needed by our external translators',
        'Creating and exporting 3D models in Blender when needed'
      ]
    },
    {
      title: 'Computer Science Student',
      timeline: 'Sep 2011 - Oct 2015',
      description: 'Graduated from Aristotle University',
      responsibilities: [
        'Various programming work on projects directed by my supervisor professor, including 2D Physics simulation educational games and "ZWave Sensors" area monitoring software.',
        'Made games as academic projects, such as Monopoly in C, Poker in Java, and a 3D Snake game with AI in Unity as my graduation thesis.',
        'Playing with lots prototypes and demos in Unity on my free time, releasing 2 games on the mobile platform.'
      ]
    }
  ],
 /* testimonials: [
    {
      quote: 'Incredibly talented and hardworking. A super friendly guy who is a frequent communicator',
      name: 'Person Name',
      title: 'CEO at Company'
    },
    {
      quote: 'Wow, thank you for this, you probably have the most intuitive explanation for this problem!',
      name: 'Person Name'
    }
  ]*/
}
