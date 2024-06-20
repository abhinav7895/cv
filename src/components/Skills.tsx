import React from 'react'
import Section from './Section'
import { skillsDetails } from '../../cv.config'

const Skills = () => {
    return (
        <Section heading="Skills">
            <div className='pt-2 flex flex-col gap-2'>
                {
                    skillsDetails.map((item, index) => (
                        <div key={item.category + index} className=' text-[15px] sm:text-base flex flex-col text-neutral-200 font-light'>
                            <h3 className='text-neutral-400 text-sm'>{item.category}</h3>
                            <p className='text-[15px] sm:text-base'>
                                {item.skills.join(", ")}
                            </p>
                        </div>
                    ))
                }

            </div>
        </Section>
    )
}

export default Skills