import { fromImageToUrl , API_URL } from '@/utils/urls'
import { twoDecimal } from '@/utils/format'
import Header from '../../components/components/Header/Header'
import product from '../../products.json'



const HomePage = () =>{
    return (
        <>
            <Header />


            <h2>{product.name}</h2>
            <img src={fromImageToUrl(product.image)} alt="" />
            <h4>{twoDecimal(product.price)}</h4>
            <p>{product.content}</p>
            
            

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
  
  }
export async function getStaticPaths() {
    //retrieve all possible Paths
    console.log(API_URL)
    const product_res= await fetch(`${API_URL}/api/products/`)
    const products= await product_res.json()


  //return them to NextJS context
  return{
    paths: products.map((product: { slug: any }) =>({
        params: {slug: String(product.slug)}
    })),
    fallback: false // tell NextJs to show 404 if the params 
}
} */
//export default HomePage;