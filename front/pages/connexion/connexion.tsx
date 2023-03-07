import React from 'react'
import Header from '@/components/components/Header/Header'
import Head from 'next/head'
import Footer from '@/components/components/Footer/Footer'
import Link from 'next/link'
import { API_URL } from '@/utils/urls'

export default function connexion( {authData}) {
    console.log(authData)
  return (
    <>
        <Head>
            <title>Connexion</title>
        </Head>
        <Header />
        <div className="d-flex justify-content-center">
            <div className="login">
                <form className="needs-validation">
                    <div className="form-group was-validated">
                        <label className="form-label" htmlFor="email">Adresse email</label>
                        <input className="form-control" type="email" placeholder='Email' id="email" required />
                        {/* <div className="invalid-feedback">
                            Entrez votre adresse email
                        </div> */}
                    </div>
                    <div className="form-group was-validated">
                        <label className="form-label" htmlFor="password">Mot de passe</label>
                        <input className="form-control" type="password" placeholder='Mot De Passe' id="password" required />
                        {/* <div className="invalid-feedback">
                            Entrez votre mot de passe
                        </div> */}
                    </div>
                    <input className="btn w-100" type="submit" value="Connexion" />
                    <div className="justify-content-between mt-2 d-flex small text-center">
                        <Link href="inscription" className="nav-link">Vous n'avez pas de compte ?</Link>
                        <a href="#" className="nav-link">Réinitialiser le mot de passe</a>
                    </div>
                </form>
            </div>
        </div>
        <Footer />
    </>
  )
}
export async function getServerSideProps() {
    //login Information
    const loginInfo = {
        identifier: 'test@test.com',
        password: 'test123'
    }

    const login = await fetch(`${API_URL}/api/auth/local`, {
        method :"POST",
        headers : {
            'Accept': 'application/json',
            'content-Type': 'application/json',
        },
        body : JSON.stringify(loginInfo)
    })
    const loginResponse = await login.json()

    

    const res = await fetch(`${API_URL}/api/payed-articles/`,  {
        headers: {
            Authorization: `Bearer ${loginResponse.jwt}`
        }
    })
    const articles = await res.json()
    return {
        props : {
            articles : articles,
            authData: loginResponse,
        },
    }
}
