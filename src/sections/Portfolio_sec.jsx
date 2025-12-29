import CardPortfolio from '../components/Card_Portfolio';
import SectionHeader from '../components/Sections_Header';
import {useTranslation} from "react-i18next";

import styles from "./Portfolio_sec.module.css";

const Portfolio_sec = () => {
    const { t } = useTranslation();
    const portfolioItems = t('portfolio.items', { returnObjects: true });

    const baseUrlImg = "/img/Portfolio/";
    return(
        <section id="portfolio" className={styles.portfolio} >
            <div className='scroll_conteiner'>
                <SectionHeader title={t('portfolio.title') + " "} span={t('portfolio.span')}/>
                <div className={styles.portfolio_conteiner}>
                    {portfolioItems.map((item) => (
                        <CardPortfolio
                            key={item.url ?? item.title}
                            img={baseUrlImg + item.img}
                            title={item.title}
                            description={item.description}
                            url={item.url}
                            download={item.download}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Portfolio_sec;