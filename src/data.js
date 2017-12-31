module.exports = {
  title: 'Hi, I\'m Stratos',
  header: "Hi, I'm Stratos Makrigiannakis",
  description: "I'm a software engineer by day, working on my own game development related projects as a hobby.",
  name: 'Stratos Makrigiannakis',
  footerTitle: 'Software Developer',
  email: 'stratos.makrigiannakis@gmail.com',
  cta: {
    label: 'Get my resume',
    url: 'resume.pdf',
  },
  socials: [
    //{ icon: 'twitter', url: '//' },
    { icon: 'github-circled', url: 'https://github.com/Kisamegr' },
    { icon: 'mail-alt' }, // mail alt automatically links to mailto:email
   // { icon: 'dribbble', url: '//' },
    { icon: 'skype', url: 'skype:kisame_gr?chat' },
    { icon: 'linkedin-squared', url: 'https://www.linkedin.com/in/stratos-makrigiannakis' },
  ],
  projects: [
    {
      name: 'Swingoff',
      description: 'A fast paced, infinite runner mobile game where you have to stay on air using your mechanical hook. Avoid obstacles in the way and pick up power ups to help you survive!',
      tags: ['Unity', 'C#', 'Android', '2D'],
      alt: 'Swingoff Screenshot', // alt description of image for accessibility. defaults to '{{name}} Screenshot'
      img: 'https://giphy.com/embed/xULW8lPAzZ1enk4kec',
      buttons: [
        {
          name: 'Google Play',
          url: 'https://play.google.com/store/apps/details?id=com.dynobyte.swingoff'
        }
      ]    
    },
    {
      name: 'Crafty Fox',
      description: 'A highly intensive mobile game, where you control a little fox running away from a granny on a scooter. Eat chickens along the way and catch food thrown by the angry granny to gain more points.',
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
    }
  ],
  experiences: [
    {
      title: 'Software Engineer at Wings Systems',
      timeline: 'Nov 2016 - Present',
      description: '',
      responsibilities: [
        'Working on software and apps for Windows, MacOS, Android and iOS platforms',
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
