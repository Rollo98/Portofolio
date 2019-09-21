import work1 from './work1.png'
import work2 from './work2.png'
import work3 from './work3.png'
// import work4 from './work4.png'

const works = [
  {
    id: 1,
    name: 'Lorem Ipsum',
    descriptionSmall:
      '"Lorem Ipsum" is a template for a portofolio website or a description website about someone.',
    descriptionLarge:
      'This project was created with the help of : React, Node and mainly ThreeJS, which is a cross-browser JavaScript library used to create 3D models and graphics in a web browser using WebGL (Web Graphics Library), which I wanted to become familiar with. The project can be found here  (https://github.com/Rollo98/react-threejs) or the live demo here (https://rollo98.github.io/react-threejs/).',
    code: 'https://github.com/Rollo98/react-threejs',
    demo: 'https://rollo98.github.io/react-threejs',
    img: work1,
    tech: ['ThreeJS', 'ReactJS', 'Npm', 'Node', 'CSS']
  },
  {
    id: 2,
    name: 'ReminderJs',
    descriptionSmall:
      'Is a application design for events, meetings and everyday things to remind you of.',
    descriptionLarge:
      'For the development of the application I used: React, Node, Moment Js, Redux and Cookies to remember the user reminders. The purpose of the project was to familiarize myself with the frameworks and best practices. The project can be found at the following link (https://github.com/Rollo98/ReminderJs).',
    code: 'https://github.com/Rollo98/ReminderJs',
    demo: 'https://rollo98.github.io/ReminderJs/',
    img: work2,
    tech: ['ReactJS', 'Redux', 'Npm', 'Node', 'CSS', 'Cookies', 'MomentJS']
  },
  {
    id: 3,
    name: 'Location Tracker',
    descriptionSmall:
      'Is a drawing app for mobiles that follows you through GPS and leaves a drawing like path after you.',
    descriptionLarge:
      'During the development process I used the following technologies: React Native, Expo, Google APIs. The application goal was to create a path tracking app for mobiles while getting familiar with the technologies that I used. The project can be found at the following link (https://github.com/Rollo98/LocationTracker).',
    code: 'https://github.com/Rollo98/LocationTracker',
    demo: '',
    img: work3,
    tech: ['React Native', 'Expo', 'Google APIs']
  }
  // {
  //   id: 4,
  //   name: 'Portofolio',
  //   descriptionSmall:
  //     'This project is this very site where I try to showcase my UI/UX skills',
  //   descriptionLarge: 'asd',
  //   code: 'https://github.com/Rollo98/Portofolio',
  //   demo: 'https://rollo98.github.io/Portofolio/',
  //   img: work4,
  //   tech: ['ReactJS', 'Npm', 'Node', 'CSS']
  // }
]

export default {
  works
}
