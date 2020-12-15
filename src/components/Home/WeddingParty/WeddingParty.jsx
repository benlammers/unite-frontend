import React from 'react'

import BenImage from './media/ben.jpg'
import MadisonImage from './media/madison.jpg'

import EricImage from './media/eric.jpg'
import AmberImage from './media/amber.jpg'
import JoleneImage from './media/jolene.jpg'
import JoshImage from './media/josh.jpg'
import MattImage from './media/matt.jpg'

import MarinaImage from './media/marina.jpg'
import AlanaImage from './media/alana.jpg'
import AnnaImage from './media/anna.jpg'
import JuliannaImage from './media/julianna.jpg'
import BreanneImage from './media/breanne.jpg'

import './WeddingParty.scss'

const BRIDESMAID = 'Bridesmaid'
const GROOMSMAN = 'Groomsman'
const GROOMSMAID = 'Groomsmaid'

const MAID_OF_HONOR = 'Maid of Honour'
const BEST_MAN = 'Best Man'

const Couple = [
   {
      image: BenImage,
      name: 'Ben Lammers',
      role: 'Groom',
      relation: '',
   },
   {
      image: MadisonImage,
      name: 'Madison Scheerhoorn',
      role: 'Bride',
      relation: '',
   },
]

const Party = [
   {
      image: BreanneImage,
      name: 'Breanne Scheerhoorn',
      role: MAID_OF_HONOR,
      relation: 'Sister',
   },
   {
      image: AnnaImage,
      name: 'Anna Bootsma',
      role: BRIDESMAID,
      relation: 'Friend',
   },
   {
      image: JuliannaImage,
      name: 'Julianna Mcgregor',
      role: BRIDESMAID,
      relation: 'Friend',
   },
   {
      image: MarinaImage,
      name: 'Marina Wolters',
      role: BRIDESMAID,
      relation: 'Cousin',
   },
   {
      image: AlanaImage,
      name: 'Alana Vreugdenhil',
      role: BRIDESMAID,
      relation: 'Cousin',
   },
   {
      image: EricImage,
      name: 'Eric Lammers',
      role: BEST_MAN,
      relation: 'Brother',
   },
   {
      image: JoshImage,
      name: 'Josh Lammers',
      role: GROOMSMAN,
      relation: 'Cousin',
   },
   {
      image: MattImage,
      name: 'Matt Lammers',
      role: GROOMSMAN,
      relation: 'Cousin',
   },
   {
      image: JoleneImage,
      name: 'Jolene Lammers',
      role: GROOMSMAID,
      relation: 'Sister',
   },
   {
      image: AmberImage,
      name: 'Amber Lammers',
      role: GROOMSMAID,
      relation: 'Sister',
   },
]

const WeddingMember = ({ person }) => (
   <div className='wedding-party-item'>
      <img src={person.image} alt={person.name} />
      <span className='wedding-party-item__name'>{person.name}</span>
      <span className='wedding-party-item__desc'>
         {person.role}
         {person.relation ? <span>|</span> : null}
         {person.relation}
      </span>
      <span className='wedding-party-item__desc--mobile'>{person.role}</span>
      <span className='wedding-party-item__desc--mobile'>{person.relation}</span>
   </div>
)

const WeddingParty = () => {
   return (
      <div className='wedding-party'>
         <div className='wedding-party__couple'>
            {Couple.map((person, index) => (
               <WeddingMember key={index} person={person} />
            ))}
         </div>
         <h1 className='wedding-party__heading'>Our Wedding Party</h1>
         <div className='wedding-party__group'>
            {Party.map((person, index) => (
               <WeddingMember key={index} person={person} />
            ))}
         </div>

         <div className='wedding-party__mobile'>
            {[
               ...Couple,
               ...Party.sort(member => {
                  if (member.role === MAID_OF_HONOR || member.role === BEST_MAN) return -1
                  else return 1
               }),
            ].map((person, index) => (
               <WeddingMember key={index} person={person} />
            ))}
         </div>
      </div>
   )
}

export default WeddingParty
