import Link from 'next/link';
import React from 'react'
import { IconType } from 'react-icons';

interface SocialProps {
    icon: IconType,
    text: string,
    href: string
}

const Social = ({ data }: { data: SocialProps[] }) => {
    return (
        <div className='flex pb-4 gap-1 w-full sm:justify-center items-center'>
            {data.map((item, index) => (
                <Link href={item.href} key={item.text + index} className='flex gap-1 items-center p-1 border rounded-full sm:border-0 text-neutral-400 border-neutral-700'>
                    {<item.icon />} <span className='hidden font-light sm:block'>{item.text}</span>
                </Link>
            ))}
        </div>
    )
}

export default Social



