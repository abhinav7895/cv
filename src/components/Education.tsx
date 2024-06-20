import React from 'react'
import Section from './Section'

const Education = () => {
    return (
        <Section heading='Education'>
            <div className='pt-2 flex flex-col gap-2'>
                <div className=' text-[15px] sm:text-base flex flex-col text-neutral-200 font-light'>
                    <h4 >Cloud Computing • AWS</h4>
                    <p className='text-sm text-neutral-400'>Self Learning [2024-current]</p>
                </div>
                <div className=' text-[15px] sm:text-base flex flex-col text-neutral-200 font-light'>
                    <h4 >Web Development</h4>
                    <span className='text-sm text-neutral-400'>Self Learning [2023-current]</span>
                </div>
                <div className=' text-[15px] sm:text-base flex flex-col text-neutral-200 font-light'>
                    <h4 >B-Tech  • Computer Science & Engineering</h4>
                    <p className='text-sm text-neutral-400'>Babu Banarasi Das University [2021-2025]</p>
                </div>
                <div className='text-[15px] sm:text-base flex flex-col text-neutral-200 font-light'>
                    <h4 >Intermediate</h4>
                    <p className='text-sm text-neutral-400'>Little Flower Children School [2019-2021]</p>
                </div>
                <div className='text-[15px] sm:text-base flex flex-col text-neutral-200 font-light'>
                    <h4 >HighSchool</h4>
                    <p className='text-sm text-neutral-400'>Little Flower Children School [2018-2019]</p>
                </div>
            </div>
        </Section>
    )
}

export default Education