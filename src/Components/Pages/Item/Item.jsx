import React from 'react'
import { products } from '../../../DataBase/Database'
import { Contact } from '../Form/Form'

const Item = ({product}) => {


  return (
    <div key={product.id} className="bg-stone-800 ">
      <div className='card-bordered'>
        <div>
      <h2 className='text-3xl  m-4 font-bold text-center text-red-500'>Vas a comprar</h2> 
      </div>
      <figure><img src={product.imageSrc} alt="Album" className='mx-auto'/></figure>
      
  <div className="card-body ">
    <h2 className="card-title justify-center text-red-500">{product.name}</h2>
    <p className="text-zinc-300 text-center text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat harum aliquam nobis debitis. Voluptatibus, iusto?</p>
    <p className='text-zinc-300 text-center text-lg'>Precio: ${product.price}</p></div>
    <Contact/>
      </div>
     
    
    </div>
  )
}

export default Item



