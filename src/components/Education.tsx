import React from 'react'
import Section from './Section'

import { educationDetails } from '../../cv.config'

const Education = () => {
    return (
        <Section heading='Education'>
            <div className='pt-2 flex flex-col gap-2'>
                {
                    educationDetails.map((item, index) => (
                <div key={item.title + index} className='text-[15px] sm:text-base flex flex-col text-neutral-200 font-light'>
                    <h3 >{item.title}</h3>
                    <p className='text-sm text-neutral-400'>{item.institution} {item.period}</p>
                </div>
                ))
                }
            </div>
        </Section>
    )
}

export default Education