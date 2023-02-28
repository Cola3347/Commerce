import React from "react";
import Link from "next/link";
import Image from "next/image";


export default function Header(){
    return (
            <div className="top mb-5">
                <header className="fixed-top">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                                <ul className="navbar-nav"/*  style="width: 40%;" */>
                                    <li className="nav-item active">
                                        <a href="#demo" className="btn" data-bs-toggle="collapse"><i className="fa-solid fa-magnifying-glass fa-2x"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Qui sommes nous?</a>
                                    </li>
                                </ul>
                                <div className="logo">
                                    <Link href="http://localhost:3000/">
                                        <img src="https://www.ilanga-nature.com/web/image/87604-95d79d5f/logo_ilanga_nature.png" width={100} height={100} alt="logo" />
                                    </Link>
                                </div>
                                <ul className="navbar-nav justify-content-end" /* style="width: 40%;" */>
                                    <li className="nav-item">
                                        <div className="dropdown">
                                            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="fa-solid fa-user"></i>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><Link className="dropdown-item" href="/connexion/connexion">Se connecter</Link></li>
                                                <li><Link className="dropdown-item" href="/connexion/inscription">S'inscrire</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/cart/cart"><i className="fa-solid fa-cart-shopping"></i></Link>
                                    </li>
                                    <li className="nav-item">
                                        <div className="dropdown">
                                            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <b>Contact</b>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Mail<i className="fa-regular fa-envelope"></i></a></li>
                                                <li><a className="dropdown-item" href="#">Facebook<i className="fa-brands fa-facebook-f"></i></a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div id="search" className="col-6">
                            <form action="" method="get">
                                <div id='demo' className="input-group mb-3 collapse">
                                    <input type="text" className="form-control" placeholder="Rechercher..." aria-label="Username" aria-describedby="basic-addon1" />
                                    <button className="input-group-text" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <nav className="product d-flex justify-content-center">
                        <div className="dropdown">
                            <button type="button" className="btn btn-warning dropbtn m-2" /* data-bs-toggle="dropdown" */>
                                <b>MIEL</b>
                            </button>
                            <ul className="dropdown-content">
                                <li><a className="dropdown-item" href="#">140g</a></li>
                                <li><a className="dropdown-item" href="#">250g</a></li>
                                <li><a className="dropdown-item" href="#">900g</a></li>
                            </ul>
                        </div>
                        
                        <div className="dropdown">
                        
                            <button type="button" className="btn btn-warning dropbtn m-2" /* data-bs-toggle="dropdown" */>
                            <Link className="dropdown-item" href="/products/Vanille/Vanille"><b>VANILLE</b></Link>
                            </button>
                        
                            
                            <ul className="dropdown-content">
                                <li><a className="dropdown-item" href="#">En Gousse</a></li>
                                <li><a className="dropdown-item" href="#">En Poudre</a></li>
                                <li><a className="dropdown-item" href="#">Extrait</a></li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <button type="button" className="btn btn-warning dropbtn m-2" /* data-bs-toggle="dropdown" */>
                                <b>THE</b>
                            </button>
                            <ul className="dropdown-content">
                                <li><a className="dropdown-item" href="#">En Sachet</a></li>
                                <li><a className="dropdown-item" href="#">En Poudre</a></li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <button type="button" className="btn btn-warning dropbtn m-2" /* data-bs-toggle="dropdown" */>
                                <b>CAFE</b>
                            </button>
                            <ul className="dropdown-content">
                                <li><a className="dropdown-item" href="#">En gousse</a></li>
                                <li><a className="dropdown-item" href="#">En Poudre</a></li>
                                <li><a className="dropdown-item" href="#">Extrait</a></li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        
    )
}