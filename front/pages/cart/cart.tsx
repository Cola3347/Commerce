import React from 'react'
import Header from '@/components/components/Header/Header'

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
            <div className="col-8 mt-5 d-flex justify-content-between ">          
              <table className="table">
                <thead>
                  <tr>
                    <th>Article</th>
                    <th>Quantité</th>
                    <th>Prix</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                  </tr>
                  <tr>
                    <td>Mary</td>
                    <td>Moe</td>
                    <td>mary@example.com</td>
                  </tr>
                  <tr>
                    <td>July</td>
                    <td>Dooley</td>
                    <td>july@example.com</td>
                  </tr>
                </tbody>
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
                      <td className='px-5'>9.25€</td>
                    </tr>
                  </table>
                </li>
                <li className="list-group-item">
                <table>
                    <tr>
                      <td>Taxes :</td>
                      <td className='px-5'>0.25€</td>
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
