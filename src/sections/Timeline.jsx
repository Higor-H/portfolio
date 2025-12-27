import styles from "./Timeline.module.css";
import {data} from "../data";
import SectionHeader from "../components/Sections_Header/index.jsx";

function Timeline() {


    const timelineData = data.timeline


    const startYear = 2016;
    const endYear = new Date().getFullYear() +1 ;
    const years = [];
    for (let year = startYear; year <= endYear; year += 2) {
        years.push(year);
    }

    // Calcular posição e largura de cada evento
    const gridWidth = 200; // pixels por ano
    const totalYears = endYear - startYear;

    const getEventStyle = (item) => {
        const offsetYears = item.startYear - startYear;
        const left = offsetYears * gridWidth;
        const width = item.duration * gridWidth;
        return { left: `${left}px`, width: `${width}px` };
    };

    // Agrupar eventos por row com ID único para evitar key index
    let rows = [];

    if (Array.isArray(timelineData) && timelineData.length > 0) {
        const maxRow = timelineData.reduce((max, item) => Math.max(max, item.row), 0);

        rows = Array.from({ length: maxRow }, (_, i) => ({
            id: `row-${i + 1}`,
            events: []
        }));

        timelineData.forEach(item => {
            if (item.row > 0 && rows[item.row - 1]) {
                rows[item.row - 1].events.push(item);
            }
        });
    }
    // Mapeamento de tipos para classes CSS
    const typeBarClasses = {
        education: styles.eventBarEducation,
        work: styles.eventBarWork,
        course: styles.eventBarCourse,
        certification: styles.eventBarCertification,
        academic: styles.eventBarAcademic
    };

    const typeInstitutionClasses = {
        education: styles.institutionEducation,
        work: styles.institutionWork,
        course: styles.institutionCourse,
        certification: styles.institutionCertification,
        academic: styles.institutionAcademic
    };

    const typeLegendClasses = {
        education: styles.legendEducation,
        work: styles.legendWork,
        course: styles.legendCourse,
        certification: styles.legendCertification,
        academic: styles.legendAcademic
    };
    
    const typeTooltipClasses = {
        education: styles.tooltipEducation,
        work: styles.tooltipWork,
        course: styles.tooltipCourse,
        certification: styles.tooltipCertification,
        academic: styles.tooltipAcademic
    };

    return (
        <section className={styles.timeline} id="timeline">
            <div className={styles.timelineContainer}>
                <SectionHeader title={"Minha "} span={"Jornada!"}/>
                <p className={styles.timelineSubtitle}>Cursos, trabalhos e formação acadêmica</p>
                <p className={styles.timelineSubtitle}>Veja mais em meu Linkedin: <a href="https://www.linkedin.com/in/higor-milani/" target="_blank" rel="noreferrer">Higor Milani</a></p>
                {/* Legenda */}
                <div className={styles.legend}>

                    <div className={styles.legendItem}>
                        <span className={`${styles.legendColor} ${typeLegendClasses.academic}`}></span>
                        <span>Educação</span>
                    </div>
                    <div className={styles.legendItem}>
                        <span className={`${styles.legendColor} ${typeLegendClasses.work}`}></span>
                        <span>Trabalho</span>
                    </div>
                    <div className={styles.legendItem}>
                        <span className={`${styles.legendColor} ${typeLegendClasses.course}`}></span>
                        <span>Cursos</span>
                    </div>
                    <div className={styles.legendItem}>
                        <span className={`${styles.legendColor} ${typeLegendClasses.certification}`}></span>
                        <span>Certificados e reconhecimentos</span>
                    </div>
                </div>

                <div className={styles.timelineWrapper}>
                    {/* Grid de eventos */}
                    <div
                        className={styles.eventsContainer}
                        style={{ width: `${totalYears * gridWidth}px` }}
                    >
                        {/* Linhas de grid verticais */}
                        <div className={styles.gridLines}>
                            {years.map((year) => (
                                <div
                                    key={year}
                                    className={styles.gridLine}
                                    style={{ left: `${(year - startYear) * gridWidth}px` }}
                                ></div>
                            ))}
                        </div>

                        {/* Rows de eventos */}
                        {rows.map((row, rowIndex) => (
                            <div key={row.id} className={styles.eventsRow}>
                                {row.events.map((item) => (
                                    <div
                                        key={item.id}
                                        className={styles.eventItem}
                                        style={getEventStyle(item)}
                                    >
                                        <div className={`${styles.eventBar} ${typeBarClasses[item.type]}`}></div>
                                        <div className={styles.eventContent}>
                                            <span className={styles.eventPeriod}>{item.period}</span>
                                            <h3 className={`${styles.eventInstitution} ${typeInstitutionClasses[item.type]}`}>
                                                {item.institution}
                                            </h3>
                                            <h4 className={styles.eventTitle}>{item.title}</h4>
                                        </div>
                                        {/* Tooltip */}
                                        <div className={`${styles.tooltip} ${typeTooltipClasses[item.type]} ${rowIndex <= 4 ? styles.tooltipBottom : ''}`}> {/*(<= 4 posicionar para baixo se estiver nas primeiras 4 linhas)*/}
                                            <i className={item.icon}></i>
                                            <h3>{item.title}</h3>
                                            <h4 className={typeInstitutionClasses[item.type]}>{item.institution}</h4>
                                            <p>{item.description}</p>
                                            {item.validation && (
                                                <p className={styles.validationText}>Código de validação: {item.validation}</p>)}
                                            {item.url && (
                                            <p><a className={styles.linkOut} href={item.url} target='_blank' rel="noreferrer">  Certificado <i className='bx bx-link-external'></i></a></p>)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Anos */}
                    <ul
                        className={styles.yearsTrack}
                        style={{ width: `${totalYears * gridWidth}px` }}
                    >
                        {years.map((year) => (
                            <li
                                key={year}
                                className={styles.yearItem}
                                style={{ width: `${gridWidth * 2}px` }}
                            >
                                {year}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Timeline
