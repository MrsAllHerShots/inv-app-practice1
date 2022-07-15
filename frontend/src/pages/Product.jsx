import React from 'react'

import { useParams } from 'react-router-dom'

function Product() {

    const params = useParams();

    console.log('Params :', params);

  return (
    <div>
        <h1>Single Product Display:</h1>
        <div>{params.id}</div>
    </div>
  )
}

export default Product