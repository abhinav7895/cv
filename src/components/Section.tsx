import React, { ReactNode } from 'react'

interface SectionProps {
    heading: string,
    children: ReactNode
}
const Section = ({ heading, children }: SectionProps ) => {
    return (
        <section className='flex py-3 flex-col'>
            <h2 className='text-neutral-300 uppercase font-extralight text-lg sm:text-xl'>{heading}</h2>
            {children}
        </section>
    )
}

export default Section