import React from 'react'
import { useParams } from 'react-router-dom'

const EditPromotionalImage = () => {

    const id = useParams();

    console.log(id)
  return (
    <div>EditPromotionalImage</div>
  )
}

export default EditPromotionalImage