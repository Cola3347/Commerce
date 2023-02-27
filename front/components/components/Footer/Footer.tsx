import React from 'react'

export default function Footer() {
  return (
    <div className="container">
                <div className="row">
                    <div className="col-4">
                        <h4 className="text-uppercase fw-bold">à propos</h4>
                        <ul className="navbar-nav">
                            <li><a href="#" className="nav-link">Accueil</a></li>
                            <li><a href="#" className="nav-link">Nos valeurs</a></li>
                            <li><a href="#" className="nav-link">Notre équipe</a></li>
                            <li><a href="#" className="nav-link">Parrainage</a></li>
                            <li><a href="#" className="nav-link">Associations</a></li>
                            <li><a href="#" className="nav-link">Blog</a></li>
                            <li><a href="#" className="nav-link">Presse</a></li>
                            <li><a href="#" className="nav-link">Galerie</a></li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <h4 className="text-uppercase fw-bold">information</h4>
                        <ul className="navbar-nav">
                            <li><a href="#" className="nav-link">Mon compte</a></li>
                            <li><a href="#" className="nav-link">Espace Pro</a></li>
                            <li><a href="#" className="nav-link">Politique et confidentialité</a></li>
                            <li><a href="#" className="nav-link">Condition générales de vente</a></li>
                            <li><a href="#" className="nav-link">Nos certifications</a></li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <h4 className="text-uppercase fw-bold">contactez-nous</h4>
                        <ul className="navbar-nav">
                            <li><a href="#" className="nav-link"><i className="fa-regular fa-message"></i> Contact</a></li>
                            <li><a href="#" className="nav-link"><i className="fa-regular fa-envelope"></i> email@test.com</a></li>
                            <li><a href="#" className="nav-link"><i className="fa-solid fa-phone"></i> +34 44 555 66</a></li>
                            <li><a href="#" className="nav-link"><i className="fa-solid fa-location-dot"></i> Nos point de vente</a></li>
                        </ul>
                    </div>
                </div>
                <div className="carte d-flex justify-content-center">
                    <ul className="d-flex">
                        <li><i className="fa-brands fa-cc-mastercard fa-2x"></i></li>
                        <li><i className="fa-brands fa-cc-visa fa-2x"></i></li>
                        <li><i className="fa-brands fa-cc-stripe fa-2x"></i></li>
                        <li><i className="fa-brands fa-cc-paypal fa-2x"></i></li>
                    </ul>
                </div>
        </div>
  )
}

