import React from 'react'
import { Link,Outlet } from 'react-router-dom'

export const Products = () => {
  return (
    <div>
    <div>
        <input type='search' placeholder='search product' />
    </div>
    <nav>
        <Link to='featured' >Featured</Link>
        <Link to='new' >New Products</Link>
    </nav>
    <Outlet></Outlet>
    </div>
  )
}
