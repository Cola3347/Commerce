import React from 'react'
import Header from '@/components/components/Header/Header'
import Head from 'next/head'
import Footer from '@/components/components/Footer/Footer'

export default function inscription() {
  return (
    <>
        <Head>
            <title>Inscription</title>
        </Head>
        <Header />
        <div className="container mt-5 mb-5 pt-5 pb-5">
            <h1>INSCRIPTION</h1>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 mt-2">
                    <input className="form-control" type="text" placeholder='Username' id="username" required />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 mt-2">
                    <input className="form-control" type="email" placeholder='Email' id="email" required />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 mt-2">
                    <input className="form-control" type="tel" placeholder='Telephone' id="telephone" required />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 mt-2">
                    <input className="form-control" type="password" placeholder='Password' id="password" required />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 mt-2">
                    <input className="form-control" type="text" placeholder='Adrress' id="adrress" required />
                </div>
                <div className="col-12">
                <div className="col-lg-6 col-md-6 col-sm-12 mt-2">
                    <button type="submit">Retour</button>
                    <button type="submit">Suivant</button>
                </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}
