import React from 'react'

export const TopBar = () => {
  return (
    <div>
      <img src="logo.svg" alt="" className="logo" />
        <nav>
            <ul className="nav_links">
                <li> <a href="#">Services</a></li>
                <li><a href="#">Produits</a></li>
                <li><a href="#">A propos</a></li>
                <a href="#" className=""><i className="fa-solid fa-cart-shopping"></i></a>
            </ul>
        </nav>
    </div>
  )
}

