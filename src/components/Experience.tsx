import React from 'react'
import Section from './Section'
import { experienceDetails } from '../../cv.config'

const Experience = () => {
    return (
        <Section heading='Experience'>
            <div className='pt-2 flex flex-col gap-2'>
                {experienceDetails.map((item, index) => (
                    <div key={item.title + index}  className=' text-[15px] sm:text-base flex flex-col text-neutral-200 font-light'>
                        <h4 >{item.title}</h4>
                        <p className='text-sm text-neutral-400'>{item.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    )
}

export default Experience