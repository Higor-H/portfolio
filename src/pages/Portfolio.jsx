
import Header from "../components/Header";
import Home from "../sections/Home";
import Sobre from "../sections/Sobre";
import Servicos from "../sections/Servicos";
import PortfolioSec from "../sections/Portfolio_sec";
import Destaques from "../sections/Destaques";
import Contato from "../sections/Contato";
import Footer from "../components/Footer";


const Portfolio = () => {

    return (
        <>
            <Header/>

            <Home/>
            <Sobre/>
            <Servicos/>
            <PortfolioSec/>
            <Destaques/>
            <Contato/>

            <Footer/>
        </>
    );
};

export default Portfolio;