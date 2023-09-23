import React from 'react'
import '../styles/home.scss'
import '../styles/header.scss'
import logo from '../assets/logo.png'
import cart from '../assets/cart.png'
import { Link } from 'react-router-dom'
import banner from '../assets/img.png'


const Home = () => {
  return (
    <div className='home'>
      <nav>
            <img src={logo} alt="logo" className='logo'/>
            <div className='links-div'>
                <Link to={"/"} className='links'>Home</Link>
                <Link to={"/shop"} className='links'>Shop</Link>
                <Link to={"/cart"} className='links'>Cart</Link>
            </div>
            <div className='cart-div'>
                <img src={cart} alt="cart" className='cart'/>
                <p>{0}</p>
            </div>
        </nav>
        <section>
          <div className='content'>
            <h1>You Should Always <br /> Feel Pretty</h1>
            <p>Clothes that heat up your winter</p>
            <button>Collections</button>
          </div>
          <div className='banner'>
            <img src={banner} alt="banner" />
          </div>
        </section>
    </div>
  )
}

export default Home