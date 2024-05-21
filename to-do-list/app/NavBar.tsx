import Link from 'next/link'
import React from 'react'
import { FcTodoList } from "react-icons/fc";

const NavBar = () => {
    return (
        <nav className='flex space-x-7 border-b-2 mb-5 px-4 h-12 items-center'>
            <Link href="/"><FcTodoList /></Link>
            <ul className='flex space-x-6'>
                <li>
                    <Link href="/">Dashboard</Link>
                </li>
                <li>
                    <Link href="/toDos">To-do-list</Link>
                </li>
            </ul>
        </nav>

    )
}

export default NavBar