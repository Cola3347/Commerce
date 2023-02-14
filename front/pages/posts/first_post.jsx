import Link from 'next/link';
import products from '../../products.json'

export default function FirstPost() {
  return (
    <>
      <div className='productInfo'>
        <div className="productInfoContent">
            <div className="colImg">
               <img src="#" alt="" /> 
            </div>
            <div className="colProdInfo">
                
                {products.map(product => (
                    <><h3 id='product_title'>{product.name}</h3><p id='product_description'>{product.content}</p><h6 id='product_price'>${product.price}</h6><h6 id='product_created'>${product.createdAt}</h6></>
                ))}
                <button className="buy-1">Add to Cart</button>
                <button className="buy-1"><Link href="/">Back to home</Link></button>
            </div>
        </div>

    </div>
    </>
  );
}