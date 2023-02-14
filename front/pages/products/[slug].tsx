import Head from 'next/head'
import { fromImageToUrl , API_URL } from '@/utils/urls'
import { twoDecimal } from '@/utils/format'
import products from '@/products.json'
import Header from '@/components/components/Header/Header'
import Image from 'next/image'

const product = products.data[0]

const HomePage = () => {
    return (
        <>
          <Head>
            {product.attributes.meta_title && 
              <title>{product.attributes.meta_title}</title>
            }
            {product.attributes.meta_description && 
              <meta name='description' content={product.attributes.meta_description}/>
            }
          </Head>
          <Header />
          <div className='container mt-5 p-5'>
            <div className="row">
              <div className="col-6 mt-3">
                <div className="row">
                  <div className="col-12">
                  <label><b>Tous les produits {'>'} </b> {product.attributes.category.data.attributes.name} {'>'} {product.attributes.name} </label>
                <Image className='mx-5' src="https://www.ilanga-nature.com/web/image/product.template/1786/image_256/%5B5902189%5D%20Vanille%20Bourbon%203%C2%A0gousses%20%28en%20tube%29?unique=7e7afaa" width={300} height={400}  alt="" />
                  </div>
                
                <button className='btn btn-outline-warning col-3'>Description</button>
                <p>{product.attributes.content}</p>             
              </div>
              </div>
              <div className="col-6 mt-3">
                    <form action="" method="get">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Rechercher..." aria-label="Username" aria-describedby="basic-addon1" />
                            <button className="input-group-text" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                    </form>
                    console.log({product.attributes.image});
                    
                <h2>{product.attributes.name}</h2>
                <p>Madagascar</p>
                <h4>{twoDecimal(product.attributes.price)}€</h4>
                <div className="row">
                <form  className="align-items-center col-3" action="" method="get">
                        <div className="input-group mb-3">
                            <button className="input-group-text" id="basic-addon1"><i className="fa-sharp fa-solid fa-minus"></i></button>
                              <input type="text" className="form-control" placeholder="1" aria-label="Username" aria-describedby="basic-addon1" />
                            <button className="input-group-text" id="basic-addon1"><i className="fa-sharp fa-solid fa-plus"></i></button>
                        </div>
                </form>
                <button type="submit" className="ajout btn btn-warning col-5 mb-3">Ajouter au panier<i className="fa-solid fa-cart-shopping"></i></button>
                </div>
                    <button type="submit" className="ajout btn btn-outline-warning text-dark btn-lg"><i className="fa-sharp fa-solid fa-bolt"></i> Acheter Maintenant</button><i className="fa-regular fa-heart"></i>
              </div>
              {/* <img src={fromImageToUrl(product.attributes.image)} alt="" /> */}
            </div>
          </div>
          

        </>
    )
}
/* export async function getStaticProps({params : {slug}}) {
    //fetch the product
      const product_res= await fetch(`${API_URL}/api/products/?slug=${slug}`)
      const found= await product_res.json()
    //return product as Props
    return{
      props:{ 
        products : found[0]
      }
    }
  
  } */
/* export async function getStaticPaths() {
    //retrieve all possible Paths
    const product_res= await fetch(`${API_URL}/api/products/`)
    const products= await product_res.json()
  //return them to NextJS context
  return{
    props: products.data.map((product: { attributes: { slug: any } }) =>({
        params: {slug: String(product.attributes.slug)}
    })),
    fallback: false // tell NextJs to show 404 if the params 
} 
} */
export default HomePage;