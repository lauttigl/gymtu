import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

export const Contact = () => {
    const form = useRef()

        const sendEmail = (e) => {
            e.preventDefault()
        
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};

  return (
    <div>
    <form ref={form} onSubmit={sendEmail} className=' sm:w-72:align-middle md:w-96:align-middle mt-10 p-10  rounded-lg shadow-lg'>
    <h2 className='text-lg text-center text-zinc-300'>Para continuar, por favor completa el formulario</h2>
    <label className='block mt-4 text-lg text-zinc-300'>Nombre:</label>
<input type="text" name="user_name" className='w-full mt-2 p-2 border border-zinc-400' />

<label className='block mt-4 text-lg text-zinc-300'>Email:</label>
<input type="email" name="user_email" className='w-full mt-2 p-2 border border-zinc-400' />

<label className='block mt-4 text-lg text-zinc-300'>Teléfono:</label>
<input type="text" name="user_phone" className='w-full mt-2 p-2 border border-zinc-400' />
<label className='block mt-4 text-lg text-zinc-300'>País:</label>
<input type="text" name="user_country" className='w-full mt-2 p-2 border border-zinc-400' />

<label className='block mt-4 text-lg text-zinc-300'>Custom Field:</label>
<select name="custom_field" className='w-full mt-2 p-2 border border-zinc-400'>
  <option value="Option 1">Option 1</option>
  <option value="Option 2">Option 2</option>
  <option value="Option 3">Option 3</option>
</select>
<label className='block mt-4 text-lg text-zinc-300'>Custom Field2:</label>
<select name="custom_field_2" className='w-full mt-2 p-2 border border-zinc-400'>
  <option value="Option 1">Option 1</option>
  <option value="Option 2">Option 2</option>
  <option value="Option 3">Option 3</option>
</select>
<input type="submit" value="Enviar pedido" className='w-full mt-4 py-2 px-4 bg-red-500 hover:bg-black rounded-full font-bold text-zinc-300 ' />

    </form>
    </div>
  )
}
