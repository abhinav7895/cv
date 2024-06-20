import React from 'react'
import Section from './Section'

const Skills = () => {
    return (
        <Section heading="Skills">
            <div className='pt-2 flex flex-col gap-2'>
                <div className=' text-[15px] sm:text-base flex flex-col text-neutral-200 font-light'>
                    <h4 className='text-neutral-400 text-sm'>Languages</h4>
                    <p className='text-[15px] sm:text-base'>
                        JavaScript TypeScript C Java
                    </p>
                </div>
                <div className=' text-[15px] sm:text-base flex flex-col text-neutral-200 font-light'>
                    <h4 className='text-neutral-400 text-sm'>Frontend</h4>
                    <p className='text-[15px] sm:text-base'>
                        React Next.js Tailwind HTML SCSS REDUX Vite
                    </p>
                </div>
                <div className=' text-[15px] sm:text-base flex flex-col text-neutral-200 font-light'>
                    <h4 className='text-neutral-400 text-sm'>Backend</h4>
                    <p className='text-[15px] sm:text-base'>
                        Node.js Docker MongoDB PostgreSQL Prisma GraphQL
                    </p>
                </div>
                <div className=' text-[15px] sm:text-base flex flex-col text-neutral-200 font-light'>
                    <h4 className='text-neutral-400 text-sm'>Tools & Services</h4>
                    <p className='text-[15px] sm:text-base'>
                        VsCode Figma Git
                    </p>
                </div>
            </div>
        </Section>
    )
}

export default Skills