module.exports = {
  title: 'John Smith',
  header: "Hi, I'm Stratos Makrigiannakis",
  description: "I'm a software engineer by day, working on my own game development related projects as a hobby.",
  name: 'Stratos Makrigiannakis',
  footerTitle: 'Software Engineer / Game Developer',
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
      img: 'swingoff.png',
      url: '//'
    },
    {
      name: 'Merc-01',
      description: 'Merc-01 is a fast paced twin-stick shooter built on top of pyglet.',
      tags: ['Python', 'WebGL', 'Pyglet'],
      img: 'merc-01.png',
      url: '//'
    }
  ],
  experiences: [
    {
      title: 'Senior Software Engineer at Company A',
      timeline: 'Jan 2016 - Present',
      description: 'Implemented Gamification for system',
    },
    {
      title: 'Fullstack Software Engineer at Company B',
      timeline: 'Feb 2015 - Dec 2015',
      responsibilities: [
        'Worked with a global team of developers and artists for the implementation of new features in Existing Codebase of a Free-to-play MMO',
        'Increased rate of tickets/tasks done by the team up to 300% within first few weeks!',
        'Added Abstractions on Server API to Minimize Duplicate Code'
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
