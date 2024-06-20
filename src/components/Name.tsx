import clsx from 'clsx'
import React, { HTMLProps } from 'react'
import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

const Name = ({ ...props }: HTMLProps<HTMLHeadingElement>) => {
    return (
        <h1 className={clsx(raleway.className, "text-2xl sm:text-3xl font-medium text-left sm:text-center text-neutral-200")} {...props}>
            {props.children}
        </h1>
    )
}

export default Name