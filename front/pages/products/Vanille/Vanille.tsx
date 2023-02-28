import React from 'react'
import Header from '@/components/components/Header/Header'
import Script from 'next/script'
import Counter from '@/components/components/counter/count'
import { useState } from 'react'
import count from '@/components/components/counter/count'
import Link from 'next/link'
import { API_URL, fromImageToUrl } from '@/utils/urls'
import { Fetcher } from '@/lib/api'
import Footer from '@/components/components/Footer/Footer'




export default function Vanille({ products }) {

    return (
        <>
            <Header />
            <section className="remise pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 m-auto">
                                <h2>Notre Vanille</h2>
                                <p>Nos vanilles exceptionnelles proviennent de provenance de Manoro, située dans l'Est de Madagascar. Répandues comme la précieuse épice de Madagascar, elles sont cultivées et récoltées pour vous offrir une saveur unique.</p>
                            </div>
                            <div className=" col-lg-6 col-sm-12 mb-5">
                                <img src="https://www.ilanga-nature.com/web/image/97362-9a5b15a6/Groupement-de-vanille.JPG" alt="" />
                            </div>
                            
                            </div>
                        <div className="col-12 d-flex d-flex-row mb-3">
                            <>
                                <div className='row'>
                                            {products.data.map(product => (
                                                <div className='col-lg-4 col-md-6 col-sm-12 mt-2 '>
                                                    <div key={product.id} className="card">
                                                        <Link href={`/products/${product.attributes.slug}`}>
                                                            <div className="card-body">
                                                                <img src={fromImageToUrl(product.attributes.image)} id='img_prod' alt="" />

                                                                <h5 className="card-title text-center">{product.attributes.name} </h5>
                                                                <h5 className="card-title text-center">{product.attributes.price} €</h5>
                                                                <div className="d-flex justify-content-center">
                                                                    <button type="submit" className="ajout btn-lg">Ajouter au panier<i className="fa-solid fa-cart-shopping"></i></button>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>

                                                </div>
                                            ))}
                                </div>
                            </>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Section remise End --> */}
            <Footer />
        </>
    )
}
export async function getStaticProps() {
    //fetch the product
    const product_res = await Fetcher(`${API_URL}/api/products/?populate=*`)
    //   const res= products.data
    //return product as Props
    return {
        props: {
            products: product_res
        }
    }

}