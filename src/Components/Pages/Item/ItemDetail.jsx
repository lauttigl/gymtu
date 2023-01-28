import React from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item'
import { products } from '../../../DataBase/Database'

const ItemDetail = () => {
    const {id} = useParams()
console.log(id)
const product = products.find(product => product.id === Number(id))
console.log(product)

  return (
    <div>
      <Item key={id} product={product} />
    </div>
  )
}

export default ItemDetail

