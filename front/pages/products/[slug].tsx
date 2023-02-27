import Head from 'next/head'
import { fromImageToUrl , API_URL} from '@/utils/urls'
import { twoDecimal } from '@/utils/format'
// import products from '@/products.json'
import Header from '@/components/components/Header/Header'
import Image from 'next/image'
import Counter from '@/components/components/counter/count'


// const product = products.data[0]
const HomePage = ( { product }) => {
  
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
                {/* <Image className='mx-5' src="https://www.ilanga-nature.com/web/image/product.template/1786/image_256/%5B5902189%5D%20Vanille%20Bourbon%203%C2%A0gousses%20%28en%20tube%29?unique=7e7afaa" width={300} height={400}  alt="" /> */}
                <img  src= {fromImageToUrl(product.attributes.image)} id='prod_img' alt="" />
                  
                  </div>
                <button className='btn btn-outline-warning col-3'>Description</button>
                <p>{product.attributes.content}</p>             
              </div>
              </div>
              <div className="col-6 mt-3">
                                       
                <h2>{product.attributes.name}</h2>
                <p>Madagascar</p>
                <h4>{twoDecimal(product.attributes.price)}€</h4>
                <div className="row">
                <form  className="align-items-center col-5 m-2" action="" method="get">
                  <Counter /> 
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
export async function getStaticProps({params : slug}) {
    //fetch the product
      const product_res= await fetch(`${API_URL}/api/products/?populate=*&slug=${slug}`)
      console.log(product_res)
      const found= await product_res.json()
      const result= found.data
      
    //return product as Props
    return{
      props:{ 
        product : result[0],
      }
    }
  
  }
export async function getStaticPaths() {
    //retrieve all possible Paths
    const product_res= await fetch(`${API_URL}/api/products/`)
    const products= await product_res.json()
  //return them to NextJS context
  return{
    paths: products.data.map(product =>({
        params: {slug: String(product.attributes.slug)}
    })),
    fallback: false // tell NextJs to show 404 if the params 
} 
}
export default HomePage;