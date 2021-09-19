import Header from "./components/Header";
import Nav from "./components/Nav";
import Product from "./components/productView";
import Footer from "./components/Footer";
import './assets/css/main.css'
import './assets/css/media.css'
import './assets/css/header.css'
import './assets/css/element.css'

const Products = () => {
    return (
        <>
             <Nav/>
             <Header/>
            <Product/>
            <Footer/>
            
        </>
    )
}

export default Products

