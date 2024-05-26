'use client';

import { Button, Callout, Text, TextField } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import "easymde/dist/easymde.min.css";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { createTodoSchema } from '@/app/validationSchema';
import { z } from 'zod';

type ToDoForm = z.infer<typeof createTodoSchema>;

const NewTodoPage = () => {
  const router = useRouter();

  const { register, control, handleSubmit, formState: { errors } } = useForm<ToDoForm>({
    resolver: zodResolver(createTodoSchema)
  });
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
        {errors.title && <Text color='red' as="p">{errors.title.message}</Text>}
        <Controller
          name="description"
          control={control}
          render={({ field }) => <SimpleMDE placeholder="Description" {...field} />}
        />
        {errors.description && <Text color='red' as="p">{errors.description.message}</Text>}
        <Button>Submit New Issue</Button>
      </form>
    </div>
  )
}

export default NewTodoPage