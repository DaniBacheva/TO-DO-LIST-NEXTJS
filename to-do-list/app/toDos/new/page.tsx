'use client';

import { Button, TextField } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import "easymde/dist/easymde.min.css";
import { useRouter } from 'next/navigation';

interface ToDoForm {
  title: string;
  description: string
}

const NewTodoPage = () => {
  const router = useRouter();

  const { register, control, handleSubmit } = useForm<ToDoForm>();
  // console.log(register('title'))

  return (
    <form
      className='max-w-xl space-y-4'
      onSubmit={handleSubmit(async(data) => {
        await axios.post('/api/toDos', data);
        router.push('/toDos');
        })}>
      <TextField.Root placeholder='Title' {...register('title')} />

      <Controller
        name="description"
        control={control}
        render={({ field }) => <SimpleMDE placeholder="Description" {...field} />}
      />

      <Button>Submit New Issue</Button>
    </form>
  )
}

export default NewTodoPage