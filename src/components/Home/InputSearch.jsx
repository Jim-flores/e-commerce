import React from 'react'
import { useForm } from 'react-hook-form'
import './style/homeScreen.css'
const InputSearch = () => {

  const {handleSubmit, register, reset} = useForm()

  const submit = data => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(submit)} className='form-home'>
      <input placeholder='Find a product...' type="text" {...register('searchText')} />
      <button><i class="fa-solid fa-magnifying-glass lupa"></i></button>
    </form>
  )
}

export default InputSearch