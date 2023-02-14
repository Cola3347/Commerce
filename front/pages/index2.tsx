import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

import products from '../products.json'
import {fromImageToUrl, API_URL} from '../utils/urls'
import {twoDecimal} from '../utils/format'
import Header from '../components/components/Header/Header'



const inter = Inter({ subsets: ['latin'] })

export default function Home(/* {products:any} */) {
  return (
    <>
      <Header  />
      <h1 className="title">
        Read <Link href="/posts/first_post">this page!</Link>
      </h1>
      
      {/* {products.map(product => (
                <div id='disp_prod' key={product.id} className={styles.product}>
                  <Link href={'/products/${product.slug}'}>
                    {product.name} {product.price} {product.content}
                  </Link>
                </div>
      ))} */}
      {products.data.map(product => (
                <div id='disp_prod' key={product.id} className={styles.product}>
                    <Link href={'../../../products/${product.slug}'}>
                    <div className="gallery">
                        <div className="content">
                            <img src={fromImageToUrl(product.image)} alt="" />
                            <h3 id='product_title'>{product.attributes.name}</h3>
                            <p id='product_description'>{product.attributes.content}</p>
                            <h6 id='product_price'>${twoDecimal(product.attributes.price)}</h6>
                            {/* <ul id='disp_prod'>
                                <li><i className="fa-solid fa-star checked"></i></li>
                                <li><i className="fa-solid fa-star checked"></i></li>
                                <li><i className="fa-solid fa-star checked"></i></li>
                                <li><i className="fa-solid fa-star"></i></li>
                                <li><i className="fa-solid fa-star"></i></li>
                            </ul> 
                             */}
                            <button className="buy-1" id='buy' >Buy Now</button>
                        </div>
                      </div>
                      </Link>
                </div>
            ))} 
    </>
  )
}
/* export async function getStaticProps() {
  //fetch the product
    const product_res= await fetch(`${API_URL}/api/products/`)
    const products= await product_res.json()
  //return product as Props
  return{
    props:{ 
      products
    }
  }

}  */