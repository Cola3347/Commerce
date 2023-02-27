import React from 'react'
import Header from '@/components/components/Header/Header'
import Head from 'next/head'

export default function connexion() {
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
                        <a href="enregistrer.html" className="nav-link">Vous n'avez pas de compte ?</a>
                        <a href="#" className="nav-link">Réinitialiser le mot de passe</a>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}
