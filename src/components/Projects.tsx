import React from 'react'
import Section from './Section'
import { FiGithub, FiGlobe } from 'react-icons/fi'
import Link from 'next/link'
import { projectDetails } from '../../cv.config'


const Projects = () => {
    return (
        <Section heading='Projects'>
            <div className='pt-2 flex flex-col gap-2'>
                {
                    projectDetails.map((item, index) => (
                        <div key={item.title + index} className=' text-[15px] sm:text-base flex flex-col text-neutral-200 font-light'>
                            <div className='flex items-center '>
                                <h3 className='text pr-2' >{item.title}
                                </h3>
                                <div className='flex gap-1 items-center text-neutral-400'>
                                    <Link href={item.githubLink}>< FiGithub className='hover:text-neutral-300 transition-all' /></Link>
                                    <Link href={item.liveLink}><FiGlobe className='hover:text-neutral-300 transition-all' /></Link>
                                </div>
                            </div>
                            <div className='text-xs text-neutral-400'>
                                <code>{item.technologies}</code>
                            </div>
                            <p className='text-sm pt-1 text-neutral-400'>
                                {item.description}
                            </p>
                        </div>
                    ))
                }
            </div>
        </Section>
    )
}

export default Projects