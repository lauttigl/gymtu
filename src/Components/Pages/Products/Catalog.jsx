import React from 'react'
import { products } from '../../../DataBase/Database'
import { Link } from 'react-router-dom'

export const Catalog = () => {

  

  return (
    <div className="bg-stone-800">
    <div className="card lg:card-side card-bordered  bg-stone-800 shadow-xl gap-2 ">
      {products.map((product) => (
        <div key={product.id}>
        <figure><img src={product.imageSrc} alt="Album"/></figure>
  <div className="card-body  ">
    <h2 className="card-title justify-center text-zinc-300">{product.name}</h2>
    <p className="text-zinc-300 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat harum aliquam nobis debitis. Voluptatibus, iusto?</p>
    <p className='text-zinc-300'>Precio: ${product.price}</p>
    <div className="card-actions justify-center">
      <Link to={`/products/${product.id}`}>
      <button className="btn bg-red-500 hover:bg-black rounded-full p-4 m-2 font-bold text-zinc-300">Ver Producto</button>
      </Link>
    </div>  
  </div>
  </div>
  ))}
</div>
</div>
  )}
