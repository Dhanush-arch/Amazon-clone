import React from 'react'
import AddCard from '../components/AddCard'
import MainCarousel from '../components/MainCarousel'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import Sidebar from '../components/Sidebar'
import './Home.css'
function Home() {
    return (
        <div className="home">
        	<Sidebar/>
            <Navbar/>
            <MainCarousel/>
            <div className="home__row">
                <ProductCard/>
                <AddCard/>
                <AddCard/>
                
            </div>
        </div>
    )
}

export default Home
