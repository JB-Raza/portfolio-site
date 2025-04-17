import React from 'react'
import { SkillCard } from './Cards.jsx'
import { MainHeading, Tagline } from './elementComp.js'

export default function Skills() {
  return (
    <div className="container mx-auto py-2">
      <div className=" my-5 mx-auto p-0">

        <MainHeading value={"My Skills"} className={"text-center"} />
        <Tagline className={"text-center"} />


        <div className="d-flex gap-3 gap-md-4 justify-content-center flex-wrap">
          {/* skill card 1 */}
          {(skillsData || []).map((skill, index) => (
            <SkillCard key={index} skillData={skill} />
          ))}
        </div>

      </div>
    </div>
  )
}


const skillsData = [
  { image: "./skills/figma.webp", percent: 92, title: "Figma" },
  { image: "./skills/sketch.webp", percent: 92, title: "Sketch" },
  { image: "./skills/xd.webp", percent: 92, title: "XD" },
  { image: "./skills/wp.webp", percent: 92, title: "WordPress" },
  { image: "./skills/react.webp", percent: 92, title: "React" },
  { image: "./skills/js.webp", percent: 92, title: "Javascript" },
]