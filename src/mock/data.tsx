import { IList, ILink } from './type' 

export const values:IList[] = [
    {
      icon: '/svgs/values/values1.svg',
      text: 'Research and Discovery'
    },
    {
      icon: '/svgs/values/values2.svg',
      text: 'Validating and Shaping Idea'
    },
    {
      icon: '/svgs/values/values3.svg',
      text: 'Design and Prototyping'
    },
    {
      icon: '/svgs/values/values4.svg',
      text: 'Development'
    },
    {
      icon: '/svgs/values/values5.svg',
      text: 'Testing and Quality Assurance'
    },
    {
      icon: '/svgs/values/values6.svg',
      text: 'Maintenance and Support'
    }
]


export const service = [
    {
        icon: '/images/services/services1.png',
        text: 'Software Development'
      },
      {
        icon: '/images/services/services3.png',
        text: 'Web Development'
      },
      {
        icon: '/images/services/services4.png',
        text: 'Web Design'
      },
      {
        icon: '/images/services/services5.png',
        text: 'User Experience Design'
      }
]


export const Links:ILink[] = [
    {
        text: 'Home',
        to: '/'
      },
      {
        text: 'Services',
        to: '/services'
      },
      {
        text: 'About',
        to: '/about'
      },
      {
        text: 'Case Studies',
        to: '/case-studies'
      },
      {
        text: 'Careers',
        to: '/careers'
      },
      {
        text: 'Contact',
        to: '/contact'
      }
]