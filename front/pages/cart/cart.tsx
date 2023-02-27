import React from 'react'
import Header from '@/components/components/Header/Header'
import products from '@/products.json'
import Script from 'next/script'
import Counter from '@/components/components/counter/count'
import { useState } from 'react'
import count from '@/components/components/counter/count'




export default function ShopCart() {
  
  return (
    <>
        <Header/>
        <div className="container m-5 pt-5">
        <ul className="d-flex justify-content-evenly pagination mt-5 ">
          <li className="page-item active"><a className="page-link" href="#">Vérifier La Commande</a></li>
          <li className="page-item"><a className="page-link" href="#">Adresse</a></li>
          <li className="page-item"><a className="page-link" href="#">Confirmer La Commande</a></li>
        </ul>
        
            <div className="row">
            <div className="col-lg-8 col-md-6 col-sm-12 mt-5 d-flex justify-content-between ">          
              <table className="table">
                <thead>
                  <tr>
                    <th>Article</th>
                    <th>Quantité</th>
                    <th>Prix Unitaire</th>
                    <th>Prix Total</th>
                  </tr>
                </thead>
                {products.data.map(product =>{
                return(
                <tbody>
                  <tr>
                    <td>{product.attributes.name}</td>
                    <td>
                      <Counter />
                    </td>
                    <td>{product.attributes.price} €</td>
                    <td>{product.attributes.price} €</td>
                  </tr>
                </tbody>
                )})}
              </table>
            </div>
            <div className="col-4">
            <div className="card mt-5 pt-2">
              <div className="card-header"><h1>Total</h1></div>
              <div className="card-body d-flex justify-content-end">
              <ul className="list-group">
                <li className="list-group-item">
                  <table>
                    <tr>
                      <td>Sous-Total :</td>
                      <td className='px-5'>9.25 €</td>
                    </tr>
                  </table>
                </li>
                <li className="list-group-item">
                <table>
                    <tr>
                      <td>Taxes :</td>
                      <td className='px-5'>0.25 €</td>
                    </tr>
                  </table>
                </li>
              </ul>
              </div> 
              <div className="card-footer d-flex justify-content-end">
                <h5>Total :</h5><p className='px-5'>9.50€</p>
              </div>
            </div>
            </div>
          </div>      
        </div>

    </>
  )
}
