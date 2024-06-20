import React from 'react'
import Section from './Section'

const Experience = () => {
    return (
        <Section heading='Experience'>
            <div className='pt-2 flex flex-col gap-2'>
                <div className=' text-[15px] sm:text-base flex flex-col text-neutral-200 font-light'>
                    <h4 >Frontend Developer</h4>
                    <p className='text-sm text-neutral-400'>I have been working as a self-learning developer for many months. I have worked on numerous projects.
                    </p>
                </div>
            </div>
        </Section>
    )
}

export default Experience