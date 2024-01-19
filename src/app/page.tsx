import Image from 'next/image';
import Hero from './component/hero'

import About from './component/About'
import Skill from'./component/skill'
import Project from './component/project';

import Contact from './component/contact'

export default function Home() {
  return (
    <>
    
    <div>
     
<Hero/>
<About/>
<Project/>
<Skill/>
<Contact/>

    </div>
    
    
    
    
    </>
  )
}
