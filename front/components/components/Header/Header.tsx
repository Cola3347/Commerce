import React from "react";
import Link from "next/link";
import Image from "next/image";


export default function Header(){
    return (
        <>
            <div className="top">
                <header className="fixed-top">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                                <ul className="navbar-nav"/*  style="width: 40%;" */>
                                    <li className="nav-item active">
                                        <a className="nav-link rechercher bg-white rounded-circle" href="#"><i className="fa-solid fa-magnifying-glass fa-2x"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Qui sommes nous?</a>
                                    </li>
                                </ul>
                                <div className="logo">
                                    <Link href="http://localhost:3000/">
                                        <Image src="https://www.ilanga-nature.com/web/image/87604-95d79d5f/logo_ilanga_nature.png" width={100} height={100} alt="logo" />
                                    </Link>
                                </div>
                                <ul className="navbar-nav justify-content-end" /* style="width: 40%;" */>
                                    <li className="nav-item">
                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="fa-solid fa-user"></i>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="pages/connexion.html">Se connecter</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/pages/cart/cart"><i className="fa-solid fa-cart-shopping"></i></Link>
                                    </li>
                                    <li className="nav-item">
                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Contact
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
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Rechercher..." aria-label="Username" aria-describedby="basic-addon1" />
                                    <button className="input-group-text" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <nav className="product d-flex justify-content-center">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <button className="btn btn-lg dropdown-toggle text-uppercase fw-bold" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                   <Link href='product/miel'>Miel</Link> 
                                </button>
                                <ul className="dropdown-menu sub-menu justify-content-center">
                                    <li><a className="dropdown-item" href="#">140g</a></li>
                                    <li><a className="dropdown-item" href="#">250g</a></li>
                                    <li><a className="dropdown-item" href="#">900g</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <button className="btn btn-lg dropdown-toggle text-uppercase fw-bold" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Vanille
                                </button>
                                <ul className="dropdown-menu sub-menu justify-content-center">
                                    <li><a className="dropdown-item" href="#">gousse</a></li>
                                    <li><a className="dropdown-item" href="#">poudre</a></li>
                                    <li><a className="dropdown-item" href="#">extrait</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        </>
    )
}