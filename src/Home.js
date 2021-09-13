import Header from "./components/Header";
import Nav from "./components/Nav";
import Content from "./components/Content";
import Footer from "./components/Footer";
import './assets/css/main.css'
import './assets/css/media.css'
import './assets/css/header.css'
import './assets/css/element.css'
const Home=()=>{
  return(<>
    <Nav/>
  <Header/>
  <Content/>
  <Footer/>
  </>
  )
}

export default Home;