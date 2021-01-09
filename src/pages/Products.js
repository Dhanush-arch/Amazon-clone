import React, {useEffect} from 'react'
import AddCard from '../components/AddCard'
import MainCarousel from '../components/MainCarousel'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import {useSelector, useDispatch} from 'react-redux'
import getProducts from '../actions/getProducts';
import getCategoryProducts from '../actions/getCategoryProducts';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import {getSearchProducts, toggleOffSearch} from '../actions/getSearchProducts';
import {Link, useHistory} from 'react-router-dom';
import './Products.css'

function Products({match}) {
    console.log(match)
    const get_search_products = useDispatch();
    let product = useSelector(state => state.category_products.products);
    const history = useHistory();
    let productArr = [];
    let productArrFinal = [];
    let word = match.params.category
    word = word.toUpperCase();
    let word_list = word.replaceAll("-", " ").replaceAll("_", ", ")
    useEffect(() => {
        get_search_products(getCategoryProducts(match.params.category))
    }, [])

    for(let i=0;i<product.length;i++) {
        productArr.push(<ProductCard id={product[i].productID} title={product[i].productName} desc={product[i].productDescription} price={product[i].productPrice} image={product[i].productImage}/>)
    }

    for(let i=0;i<productArr.length;i=i+4) {
        let temp = [];
        for(let j=i;j<i+4;j++){
            temp.push(productArr[j])
        }
        productArrFinal.push(<div className="category__home__row">{temp}</div>)
    }

    console.log(productArrFinal)
    return (
        <div className="product__home">
        <div className="category__home__row__text">{word_list}</div>
            {productArrFinal}
            <div className="footer" id="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Products
