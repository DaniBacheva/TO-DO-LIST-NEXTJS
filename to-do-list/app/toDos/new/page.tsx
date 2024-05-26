'use client';

import { Button, Callout, TextField } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import "easymde/dist/easymde.min.css";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface ToDoForm {
  title: string;
  description: string
}

const NewTodoPage = () => {
  const router = useRouter();

  const { register, control, handleSubmit } = useForm<ToDoForm>();
  // console.log(register('title'))

  const [error, setError] = useState('');

  return (
    <div className='max-w-xl '>
      {error && <Callout.Root color='red' className='mb-5 '>
        <Callout.Text>{error}</Callout.Text>
      </Callout.Root>}
      <form
        className='space-y-4 '
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post('/api/toDos', data);
            router.push('/toDos');
          } catch (error) {
            setError('An unexpected error occured.')
          }
        })}>
        <TextField.Root placeholder='Title' {...register('title')} />

        <Controller
          name="description"
          control={control}
          render={({ field }) => <SimpleMDE placeholder="Description" {...field} />}
        />

        <Button>Submit New Issue</Button>
      </form>
    </div>
  )
}

export default NewTodoPage