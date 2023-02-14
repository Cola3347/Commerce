import React from 'react'
import products from '../../products.json'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '@/components/components/Header/Header'

export default function firstPost() {
    return (
        <>
         <Header />
            {products.data.map(product => (
                <section key={product.id} className='mt-5 p-5'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 mb-2">
                                <a className="">
                                    <img alt="ecommerce" className="" src='https://www.ilanga-nature.com/web/image/product.template/1786/image_256/%5B5902189%5D%20Vanille%20Bourbon%203%C2%A0gousses%20%28en%20tube%29?unique=7e7afaa' />
                                </a>
                                <div className="mt-4">
                                    <h4 className="">{product.attributes.category.data.attributes.name}</h4>
                                    <h2 className="">{product.attributes.name}</h2>
                                    <p className="">{product.attributes.price} €</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </>
    )
}
