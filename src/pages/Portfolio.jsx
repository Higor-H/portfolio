
import Header from "../components/Header";
import Home from "../sections/Home";
import Sobre from "../sections/Sobre";
import Servicos from "../sections/Servicos";
import PortfolioSec from "../sections/Portfolio_sec";
import Destaques from "../sections/Destaques";
import Contato from "../sections/Contato";
import Footer from "../components/Footer";
import Timeline from "../sections/Timeline.jsx";


const Portfolio = () => {

    return (
        <>
            <Header/>
            <main>
            <Home/>
            <Sobre/>
            <Timeline />
            {/*<Servicos/>*/}
            <PortfolioSec/>
            <Destaques/>
            <Contato/>
            </main>

            <Footer/>
        </>
    );
};

export default Portfolio;