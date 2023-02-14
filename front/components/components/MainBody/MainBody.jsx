import React from 'react'
import products from '../../../products.json'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import myImgPath from '../../../public/images/t.jpg'
import { fromImageToUrl } from '@/utils/urls'
// import productInfo from '../productInfo/productInfo'
import Link from 'next/link'

const myPic = (props) => {
    <image 
        src={myImgPath}
        alt='my basic img'
        
    />
} 
/* function productInfo () {
    <>
    document.getElementById('buy').innerHTML= {products.map(product => (
        <><h3 id='product_title'>{product.name}</h3><p id='product_description'>{product.content}</p><h6 id='product_price'>${product.price}</h6><h6 id='product_created'>${product.createdAt}</h6>
        <button className="buy-1">Add to Cart</button></>
        ))}
    </>
} */



export default function MainBody  ()  {
  return (
    
    <>
           
            
    
    </>
  )
}

