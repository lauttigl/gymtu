import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import {Link} from 'react-router-dom'


export const Contact = () => {
    const form = useRef()

        const sendEmail = (e) => {
            e.preventDefault()
        
    emailjs.sendForm('service_yd87ctl', 'template_hd2ww4m', form.current, '93Uaa6EQADTpFORoq')
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
<label className='block mt-4 text-lg text-zinc-300'>Dirección:</label>
<input type="text" name="user_adress" className='w-full mt-2 p-2 border border-zinc-400' />
<label className='block mt-4 text-lg text-zinc-300'>Código Postal:</label>
<input type="text" name="user_cp" className='w-full mt-2 p-2 border border-zinc-400' />

<label className='block mt-4 text-lg text-zinc-300'>Custom Field:</label>
<select name="custom_field" className='w-full mt-2 p-2 border border-zinc-400'>
  <option value="Option 1">Option 1</option>
  <option value="Option 2">Option 2</option>
  <option value="Option 3">Option 3</option>
  <option value="Ninguno">Ninguno</option>
</select>
<label className='block mt-4 text-lg text-zinc-300'>Custom Field2:</label>
<select name="custom_field_2" className='w-full mt-2 p-2 border border-zinc-400'>
  <option value="Option 1">Option 1</option>
  <option value="Option 2">Option 2</option>
  <option value="Option 3">Option 3</option>
  <option value="Ninguno">Ninguno</option>
</select>
<input type="submit" value="Enviar pedido" className='w-full mt-4 py-2 px-4 bg-red-500 hover:bg-black rounded-full font-bold text-zinc-300 ' />
    </form>
    <div className='text-center m-4'>
    <div className='text-zinc-300 m-2'>Para pagar con MercadoPago, haz click en el botón.</div>
    <a href='https://mpago.la/1zqL2C1'><button className='btn bg-blue-500'>PAGAR</button></a>
    </div>

  


    </div>
  )
}
