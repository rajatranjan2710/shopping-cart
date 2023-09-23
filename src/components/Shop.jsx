import React from 'react'
import '../styles/home.scss'
import '../styles/header.scss'
import logo from '../assets/logo.png'
import cart from '../assets/cart.png'
import '../styles/shop.scss'
import { Link } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import jacket from '../assets/jacket.jpg'

const Shop = () => {
    const img1 = "https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/b/q/3/11-12-years-no-ox-women-wool-self-design-jacket-96-oriex-the-original-imagmwdmv3hzv6sw.jpeg?q=70"

    const addToCartHandler = (options) => {
        console.log(options);
    }
    const productList = [
        {
            imgSrc: img1,
            name: "jacket",
            price: 6000,
            id: 1,
        },
        {
            imgSrc: img1,
            name: "jeans",
            price: 6000,
            id: 2,
        },
        {
            imgSrc: img1,
            name: "jacket",
            price: 6000,
            id: 3,
        },
        {
            imgSrc: img1,
            name: "jacket",
            price: 6000,
            id: 4,
        },
        {
            imgSrc: img1,
            name: "jacket",
            price: 6000,
            id: 5,
        },
        {
            imgSrc: img1,
            name: "jacket",
            price: 6000,
            id: 6,
        },
        {
            imgSrc: img1,
            name: "jacket",
            price: 6000,
            id: 7,
        },
        {
            imgSrc: img1,
            name: "jacket",
            price: 6000,
            id: 8,
        },
    ]

const NewProduct = [
    {
        id:1,
        name: "shoe",
        price: 4000,
        imgSrc :jacket
    }
]
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='home'>
            <nav>
                <img src={logo} alt="logo" className='logo' />
                <div className='links-div'>
                    <Link to={"/"} className='links'>Home</Link>
                    <Link to={"/shop"} className='links'>Shop</Link>
                    <Link to={"/cart"} className='links'>Cart</Link>
                </div>
                <div className='cart-div'>
                    <img src={cart} alt="cart" className='cart' />
                    <p>{0}</p>
                </div>
            </nav>

            <section className='section-shop'>

                <h1>Trending Deals</h1>

            
            <Carousel responsive={responsive} className='carousel-shop'>
                {
                    productList.map(i => (
                        <ShopCard
                            imgSrc={i.imgSrc}
                            name={i.name}
                            price={i.price}
                            id={i.id}
                            key={i.id}
                            handler={addToCartHandler}
                        />
                    ))
                }
            
            </Carousel>
            <h1>People Choices</h1>
            <Carousel responsive={responsive} className='carousel-shop'>
                {
                    NewProduct.map(i => (
                        <ShopCard
                            imgSrc={i.imgSrc}
                            name={i.name}
                            price={i.price}
                            id={i.id}
                            key={i.id}
                            handler={addToCartHandler}
                        />
                    ))
                }
            
            </Carousel>
            </section>

        </div>
    )
}

const ShopCard = ({ imgSrc, name, price, id, handler }) => {
    return <div className='shopCard'>
        <img src={imgSrc} alt={name} />
        <h3>{name}</h3>
        <h5>Rs.{price}</h5>
        <button onClick={() => handler({ imgSrc, name, price, id })}>Add to cart</button>
    </div>
}

export default Shop