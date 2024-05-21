import Link from 'next/link'
import React from 'react'
import { FcTodoList } from "react-icons/fc";

const NavBar = () => {
    return (
        <nav className='flex space-x-7 border-b-2 mb-5 px-4 h-12 items-center'>
            <Link href="/"><FcTodoList /></Link>
            <ul className='flex space-x-6'>
                <li>
                    <Link className='text-blue-500 hover:text-blue-800 transition-colors' href="/">Dashboard</Link>
                </li>
                <li>
                    <Link className='text-blue-500 hover:text-blue-800 transition-colors' href="/toDos">To-do-list</Link>
                </li>
            </ul>
        </nav>

    )
}

export default NavBar