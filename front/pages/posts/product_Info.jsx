import Link from 'next/link'
import Image from 'next/image';
import products from '../../products.json'
import Header from '../../components/components/Header/Header'

export default function produitInfo() {
  return (
    <>
      <Header/>
      <div className='productInfo'id='pdI'>
        <div className="productInfoContent">
            <div className="colImg">
            <Image 
                src='/../../../public/images/t.jpg' 
                width={500}
                height={500}
                alt="Picture of the author"
            /> 
            </div>
            <div className="colProdInfo">
                
                {products.map(product => (
                    <><h3 >{product.id}&emsp;{product.name}</h3><p >{product.content}</p><h6 >${product.price}</h6><h6 >{product.createdAt}</h6><p>{product.meta_description}</p></>
                ))}
                <button className="buy-1">Add to Cart</button>
                <button className="buy-1"><Link href="/">Back to home</Link></button>
            </div>
        </div>

    </div>
    </>
  );
}