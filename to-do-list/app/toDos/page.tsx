import React from 'react'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'

const ToDoPage = () => {
  return (
    <div>
      <Button><Link href='/toDos/new'>New Issue</Link></Button>
    </div>
  )
}

export default ToDoPage