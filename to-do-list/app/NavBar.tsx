'use client'

import Link from 'next/link'
import React from 'react'
import { FcTodoList } from "react-icons/fc";

const NavBar = () => {

    const links = [
        { name: 'Dashboard', href: '/' },
        { name: 'To-do-list', href: '/toDos' }
    ]
    return (
        <nav className='flex space-x-7 border-b-2 mb-5 px-4 h-12 items-center'>
            <Link href="/"><FcTodoList /></Link>
            <ul className='flex space-x-6'>
                {links.map(link =>
                    <Link
                        key={link.href}
                        className='text-blue-500 hover:text-blue-800 transition-colors'
                        href={link.href}>{link.name}</Link>)}

            </ul>
        </nav>

    )
}

export default NavBar