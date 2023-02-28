import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Header from '@/components/components/Header/Header'
import Footer from '@/components/components/Footer/Footer'
import { fromImageToUrl, API_URL } from '@/utils/urls'
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, Key, useState } from 'react'
import useSWR from 'swr'
import { Fetcher } from '@/lib/api'

export default function Home({ products }) {
    const [pageIndex, setPageIndex] = useState(1)
    const { data } = useSWR(`${API_URL}/api/products/?populate=*&pagination[page]=${pageIndex}&pagination[pageSize]=3`, Fetcher,
        {
            fallbackData: products
        }
    )
    return (
        <>
            <Head>
                <title>Ilanga</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />

            {/*<!-- Section remise --> */}
            <section className="remise pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className=" col-12 text-center">
                            <h3 className="mb-3 text-uppercase">-10% sur la selection</h3>
                            <h2 className="mb-2 text-warning font-italic">du Chef Eric</h2>
                        </div>
                        <div className="col-12 d-flex d-flex-row mb-3">
                            <>
                                <div className='row'>
                                            {products.data.map(product => (
                                                <div className='col-lg-4 col-md-6 col-sm-12'>
                                                    <div key={product.id} className="card">
                                                        <Link href={`/products/${product.attributes.slug}`}>
                                                            {/* <img className="img-fluid" alt="100%x280"
                                                                            src="https://www.ilanga-nature.com/web/image/product.product/1726/image_1024/%5B5901267%5D%20Miel%20de%20For%C3%AAts%20Humides%20140g?unique=9848b43" /> */}
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
                                    <div className="space-x-2 space-y-2">
                                        <button className={`md:p-2 rounded py-2 p-2 ${
                                            pageIndex===1 ? 'bg-gray-300' : 'bgnd'
                                            }`} 
                                            disabled={pageIndex===1} onClick={() => pageIndex - 1}>
                                               {' '} <i className="fa fa-arrow-left"></i>
                                        </button>
                                        <button className={`md:p-2 rounded py-2 p-2 ${
                                            pageIndex=== (data && data.meta.pagination.pageCount) ?'bg-gray-300' : 'bgnd'
                                            }`} disabled={pageIndex=== (data && data.meta.pagination.pageCount)}
                                            onClick={() => setPageIndex(pageIndex + 1)}>
                                                <i className="fa fa-arrow-right"></i>
                                        </button>
                                    </div>
                                    <span>{`${pageIndex} of ${pageIndex=== (data.meta.pagination.pageCount)}`}</span>
                                </div>
                            </>
                        </div>
                        <div className="col-12 text-center next-prev">
                            <a className="btn mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                                <i className="fa fa-arrow-left"></i>
                            </a>
                            <a className="btn mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                                <i className="fa fa-arrow-right"></i>
                            </a>
                        </div>
                        <div className="d-flex justify-content-center voir">
                            <div className="btncta from-right" /* style="text-align: center;" */>
                                <strong>
                                    <a href="" className="voirplus" /* style="text-decoration: none; color: inherit;" */ data-original-title="" title="">Voir toute la sélection</a>
                                </strong>
                            </div>
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
    const product_res = await Fetcher(`${API_URL}/api/products/?populate=*&pagination[page]=1&pagination[pageSize]=3`)
    //   const res= products.data
    //return product as Props
    return {
        props: {
            products: product_res
        }
    }

}
