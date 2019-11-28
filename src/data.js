module.exports = {
  title: 'Hi, I\'m Stratos',
  header: "Hi, I'm Stratos Makrigiannakis",
  description: [
    "and I am currently living in Thessaloniki, Greece, working full-time as a Software Engineer.",
    ""
  ],
  
  name: 'Stratos Makrigiannakis',
  footerTitle: 'Software Developer',
  email: 'stratos.makrigiannakis@gmail.com',
  cta: {
    label: 'Get my resume',
    url: 'https://drive.google.com/file/d/1XiLsSiYcNVuBvHnzo4qG-J1RCx1VW3EL/view?usp=sharing',
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

  use_project_foot: true,
  projects_title: 'My Projects',

  projects: [
    {
      name: 'Zone Out 42',
      description: [
        'A top-down 2D bullet hell game, made for the 42th Ludum Dare competition.',
        'Theme was "Running out of space, developed in a 2-man team in less than 72 hours!',
        'Ranked 131st over 3k+ submissions.'
      ],
      tags: ['Unity', 'C#', 'Ludum Dare', '2D'],
      video: 'vid/42.webm',
      buttons: [
        {
          name: 'WebGL Demo',
          url: 'https://kisamegr.github.io/ludum_dare_42/'
        }
      ]    
    },
    {
      name: 'Swingoff',
      description: [
        'A fast paced, infinite runner mobile game where you have to stay on air using your mechanical hook. Avoid obstacles in the way and pick up power ups to help you survive!',
        'Developed in a 2-man team with a colleague of mine at the university.',
        'Achieved 2nd place in the national Imagine Cup Games competition by Microsoft.'
      ],
      tags: ['Unity', 'C#', 'Android', '2D'],
      video: 'vid/swing.webm',
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
      video: 'vid/fox.webm',
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
      video: 'vid/snakes.webm',
      buttons: [
        {
          name: 'View Project',
          url: 'https://github.com/Kisamegr/Thesis-Project-Snake'
        },
        {
          name: 'WebGL Demo',
          url: 'https://kisamegr.github.io/Thesis-Project-Snake/'
        }
      ] 
    }
  ],
  experiences: [
    {
      title: 'Software Engineer',
      // title: 'Software Engineer at <a href="http://www.wingssystems.com/">Wings Systems</a>',
      timeline: 'Nov 2016 - Present',
      description: '',
      responsibilities: [
        'Working on software and apps for Windows, MacOS, Android and iOS platforms.',
        'Developing features using C++ on the Qt framework.',
        'Implementing interactive UI components for desktop and mobile devices.',
        'Handling software localization by building tools and extracting data for external translators.',
        'QA on various platforms.',
        'Creating 3D models in Blender.'
      ]
    },
    {
      title: 'Computer Science Student',
      timeline: 'Sep 2011 - Oct 2015',
      description: 'Graduated from Aristotle University',
      responsibilities: [
        'Various programming work on projects directed by my supervisor professor, including 2D Physics simulation educational games and "ZWave Sensors" area monitoring software.',
        'Made games as academic projects, such as Monopoly in C, Poker in Java, and a 3D Snake game with AI in Unity as my graduation thesis.',
        'Playing with lots of prototypes and demos in Unity on my free time, releasing 2 games on the mobile platform.'
      ]
    }
  ],



  more_projects: [
    {
      name: 'Rom Hacking / Youtube Channel',
      description: [
        'Started as a hobby, but got popular on Youtube with over 9 million total views and 24k subscribers.',
        'Modifying Game Boy Advance roms with modding tools and scripting editors, realizing my own stories and ideas.',
        'Creating maps with original or custom tilesets, adding story-driven events, changing in-game sprites/animations, and implementing custom mechanics via scripts.'
      ],
      tags: ['Youtube', 'Scripting', 'Tiling'],
      more_thumb: 'https://i.imgur.com/KKpITJn.png',
      buttons: [
        {
          name: 'Youtube Channel',
          url: 'https://www.youtube.com/kisamegr'
        },
        {
          name: 'Youtube blog',
          url: 'http://kisamegr.blogspot.gr/'
        },

        {
          name: 'View Ruby Project',
          url: 'https://github.com/Kisamegr/Pokemon-Ruby-The-Prequel'
        },
        {
          name: 'View Emerald Project',
          url: 'https://github.com/Kisamegr/Emerald'
        }
      ]    
    },
    {
      name: 'NeuroEvolution Demo',
      description: [
        'Personal project started out of interest for the neuroevolution algorithms, making \"creatures\" learn simple actions such as standing, walking and even running/jumping.',
        '3-layer perceptron neural networks are used for each creature\'s brain, and are updated via genetic evolution.',
        'The creatures are 2-legged with 2 moving joints controlled by the neural network. For more detailed information check the project\'s page.'
      ],
      tags: ['Unity', 'C#', 'Neural Networks', 'Genetic Evolution'],
      alt: 'Swingoff Screenshot', // alt description of image for accessibility. defaults to '{{name}} Screenshot'
      more_thumb: 'https://imgur.com/9YaEkck.png',
      buttons: [
        {
          name: 'View Project',
          url: 'https://github.com/Kisamegr/NeuroThingy'
        },
        {
          name: 'WebGL Demo',
          url: 'https://kisamegr.github.io/NeuroThingy/'
        }
      ]    
    },
    {
      name: 'Spaceball Demo',
      description: [
        'Had an idea in which spaceships are hitting a ball trying to score a goal. Rocket League came out sort after, aaand the idea was abandoned.',
        'Experimented with terrain building and texture drawing in Unity, baked lighting and post processing effects.',
        'Had fun creating a 4-point hover system for the spaceships.'
       
      ],
      tags: ['Unity', 'C#', 'Terrain', 'Lighting', 'Post Processing'],
      alt: 'Spaceball Screenshot', // alt description of image for accessibility. defaults to '{{name}} Screenshot'
      more_thumb: 'https://imgur.com/WyapjRC.png',
      buttons: [
        {
          name: 'View Project',
          url: 'https://github.com/Kisamegr/SpaceBall'
        },
        {
          name: 'WebGL Demo',
          url: 'https://kisamegr.github.io/SpaceBall/'
        }
      ]    
    },

    {
      name: 'Monopoly Game',
      description: [
        'University assignment to create a text-based monopoly game on the windows command prompt.',
        'Implemented a unique graphical interface based on colored ascii characters.',
        'Supports up to 8 players, with name, pawn and color customization, rolling dices, buying properties, building houses and hotels, decision cards and saving the game state.'

       
      ],
      tags: ['C', 'Ascii', 'Cmd Prompt'],
      alt: 'Monopoly Screenshot', // alt description of image for accessibility. defaults to '{{name}} Screenshot'
      more_thumb: 'https://i.imgur.com/uKF1sJg.png',
      buttons: [
        {
          name: 'View Project',
          url: 'https://github.com/Kisamegr/Monopoly-CMD'
        }
      ]    
    },

    {
      name: 'Qt Fractal Explorer',
      description: [
        'Personal project to learn the Qt/Qml framework integration with OpenGL',
        'Features 3 fractals: Barnsley\'s, Snowflake and Malndelbrot',
        'Supports panning the view, zooming in/out and changing properties such as iterations, color and size'

       
      ],
      tags: ['C++', 'Qt/Qml', 'OpenGL', 'Fractal'],
      alt: 'Qt Screenshot', // alt description of image for accessibility. defaults to '{{name}} Screenshot'
      more_thumb: 'https://i.imgur.com/OTqosy6.png',
      buttons: [
        {
          name: 'View Project',
          url: 'https://github.com/Kisamegr/QtFractalExplorer/tree/master'
        }
      ]    
    }

  ]
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
