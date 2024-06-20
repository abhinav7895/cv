import React from 'react'
import Section from './Section'
import { FiGithub, FiGlobe } from 'react-icons/fi'
import Link from 'next/link'


{/* <span className='text-xs'>React.js, Tailwind, Redux, Vite, Swiggy API</span> */ }

const Projects = () => {
    return (
        <Section heading='Projects'>
            <div className='pt-2 flex flex-col gap-2'>
                <div className=' text-[15px] sm:text-base flex flex-col text-neutral-200 font-light'>
                    <div className='flex items-center '>
                        <h4 className='text pr-2' >Hunger Hero
                        </h4>
                        <div className='flex gap-1 items-center text-neutral-400'>
                            <Link href={""}>< FiGithub className='hover:text-neutral-300 transition-all' /></Link>
                            <Link href={""}><FiGlobe className='hover:text-neutral-300 transition-all' /></Link>
                        </div>
                    </div>
                    <div className='text-xs text-neutral-400'>
                        <code>React, Tailwind CSS, Redux, Vite, Swiggy API</code>
                    </div>
                    <p className='text-sm pt-1 text-neutral-400'>
                        Developed a Swiggy-like food ordering website using the Swiggy API, implemented with React.js, Redux Toolkit, Tailwind CSS, and React Router DOM for an interactive and seamless user experience.
                    </p>
                </div>
                <div className=' text-[15px] sm:text-base flex flex-col text-neutral-200 font-light'>
                    <div className='flex items-center '>
                        <h4 className='text pr-2' >Focus Frame
                        </h4>
                        <div className='flex gap-1 items-center text-neutral-400'>
                            <Link href={""}>< FiGithub className='hover:text-neutral-300 transition-all' /></Link>
                            <Link href={""}><FiGlobe className='hover:text-neutral-300 transition-all' /></Link>
                        </div>
                    </div>
                    <div className='text-xs text-neutral-400'>
                        <code>React, Tailwind CSS, Redux, Vite</code>
                    </div>
                    <p className='text-sm pt-1 text-neutral-400'>
                        Utilized Tailwind CSS for responsive UI, React Redux Toolkit for state management, and developed features for creating, categorizing, and managing tasks to enhance project management.
                    </p>
                </div>
                <div className=' text-[15px] sm:text-base flex flex-col text-neutral-200 font-light'>
                    <div className='flex items-center '>
                        <h4 className='text pr-2' >Expense Tracker
                        </h4>
                        <div className='flex gap-1 items-center text-neutral-400'>
                            <Link href={""}>< FiGithub className='hover:text-neutral-300 transition-all' /></Link>
                            <Link href={""}><FiGlobe className='hover:text-neutral-300 transition-all' /></Link>
                        </div>
                    </div>
                    <div className='text-xs text-neutral-400'>
                        <code>React, Tailwind CSS, Redux, Vite</code>
                    </div>
                    <p className='text-sm pt-1 text-neutral-400'>
                        Utilized Tailwind CSS for responsive UI, React Redux Toolkit for state management, and developed features for creating, categorizing, and managing tasks to enhance project management.
                    </p>
                </div>
            </div>
        </Section>
    )
}

export default Projects