import React, { ReactNode } from 'react'
import Section from './Section'

const Summary = ({children} : {children : ReactNode}) => {
  return (
    <Section heading='Summary'>
        <p className='pt-2 text-200 text-[15px] sm:text-base'>
            {children}
        </p>
    </Section>
  )
}

export default Summary