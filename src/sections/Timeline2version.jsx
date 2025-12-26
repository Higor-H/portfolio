import styles from "./Timeline2version.module.css";
import SectionHeader from "../components/Sections_Header/index.jsx";

function Timeline() {


    const timelineData = [{
        id: 1,
        type: 'course',
        row: 2,
        icon: 'bx bxs-check-shield',
        title: 'Programa Hackers do Bem - Básico',
        institution: 'Hackers do Bem',
        period: '2024',
        startYear: 2024,
        duration: 1,
        description: 'Curso na área de Cybersegurança',
        url: 'https://ava.hackersdobem.org.br/badges/badge.php?hash=3feb070ed8e6f9cef27543405d9faf48adaacecc',
        validation: null
    },
        {
            id: 2,
            type: 'course',
            row: 1,
            icon: 'bx bxs-palette',
            title: 'Programa de cursos integrados Google UX Design',
            institution: 'Google',
            period: '2023 - 2024',
            startYear: 2023,
            duration: 2,
            description: 'Fundamentos de UX/UI, cobrindo pesquisa, prototipação, design no Figma, criação de interfaces e preparação para o mercado',
            url: 'https://www.coursera.org/account/accomplishments/specialization/4A9M46K2UT48',
            validation: null
        },
        {
            id: 3,
            type: 'course',
            row: 2,
            icon: 'bx bxl-postgresql',
            title: 'SQL para Análise de Dados: Do básico ao avançado',
            institution: 'Udemy',
            period: '2023',
            startYear: 2023,
            duration: 1,
            description: 'Curso dos fundamentos de SQL para análise de dados, incluindo consultas, joins, agregações, subqueries e tratamento de dados.',
            url: 'https://www.udemy.com/certificate/UC-fdfea483-be20-4b09-b3b6-4273c1a56ba9/',
            validation: null
        },
        {
            id: 4,
            type: 'course',
            row: 3,
            icon: 'bx bx-support',
            title: 'Programa de cursos integrados Suporte em TI do Google',
            institution: 'Google',
            period: '2023',
            startYear: 2023,
            duration: 1,
            description: 'Fundamentos de suporte técnico e infraestrutura de TI, abordando redes, sistemas operacionais, administração e segurança da informação.',
            url: 'https://www.coursera.org/account/accomplishments/specialization/J4QZX4DWSBPB',
            validation: null
        },
        {
            id: 5,
            type: 'work',
            row: 4,
            icon: 'bx bxs-bug',
            title: 'Automação de Testes em Java Back-end',
            institution: 'Compass UOL',
            period: '2023',
            startYear: 2023,
            duration: 1,
            description: 'Estágio: Participação na trilha de Automação de Testes Back-end em Java pelo Scholarship Program – Compass UOL (237h)',
            url: null,
            validation: null
        },
        {
            id: 6,
            type: 'course',
            row: 6,
            icon: 'bx bx-code-curly',
            title: 'Testando API Rest com REST-assured',
            institution: 'Udemy',
            period: '2023',
            startYear: 2023,
            duration: 1,
            description: 'Testes automatizados de APIs REST',
            url: 'https://www.udemy.com/certificate/UC-156fcd7b-f643-4385-b833-781d5a46ef3d/',
            validation: null
        },
        {
            id: 7,
            type: 'course',
            row: 9,
            icon: 'bx bxs-book',
            title: 'Inglês Módulo 1 E-Tec Idiomas sem Fronteiras',
            institution: 'IFSUL',
            period: '2023',
            startYear: 2023,
            duration: 1,
            description: 'Curso de inglês 180 horas',
            url: 'https://moodle.ifsul.edu.br/novohamburgo/mod/simplecertificate/verify.php',
            validation: '64b87895-22bc-4a7e-b962-e78d0a00c840'
        },
        {
            id: 8,
            type: 'course',
            row: 5,
            icon: 'bx bxl-google-cloud',
            title: 'Google Cloud Computing',
            institution: 'Google Cloud',
            period: '2023',
            startYear: 2023,
            duration: 1,
            description: 'Certificações em fundamentos de Google Cloud, abrangendo cloud computing, infraestrutura, redes, segurança, balanceamento de carga e ambiente de desenvolvimento',
            url: 'https://www.cloudskillsboost.google/public_profiles/2523e458-4b1e-41b7-abf3-0e50a57c690f',
            validation: null
        },
        {
            id: 9,
            type: 'course',
            row: 1,
            icon: 'bx bxl-java',
            title: 'Dev The Devs',
            institution: 'PUCRS',
            period: '2021 - 2022',
            startYear: 2021,
            duration: 2,
            description: 'Fundamentos de computação e programação, com Java, HTML/CSS, Web e Spring Web Services',
            url: 'https://webappcl.pucrs.br/inscricoes/verificacao',
            validation: '202291-195-1'
        },
        {
            id: 10,
            type: 'certification',
            row: 1,
            icon: 'bx bx-math',
            title: 'Menção de honra OBMEP 2017',
            institution: 'OBMEP',
            period: '2017',
            startYear: 2017,
            duration: 1,
            description: 'Menção honrosa na Olimpíada Brasileira de Matemática',
            url: null,
            validation: null
        },
        {
            id: 11,
            type: 'certification',
            row: 2,
            icon: 'bx bx-math',
            title: 'Menção de honra OBMEP 2022',
            institution: 'OBMEP',
            period: '2022',
            startYear: 2022,
            duration: 1,
            description: 'Menção honrosa na Olimpíada Brasileira de Matemática',
            url: null,
            validation: null
        },
        {
            id: 11,
            type: 'academic',
            row: 8,
            icon: 'bx bxs-book',
            title: 'Bacharelado, Ciência da Computação',
            institution: 'Atitus Educação',
            period: '2023',
            startYear: 2023,
            duration: 4,
            description: 'Menção honrosa na Olimpíada Brasileira de Matemática',
            url: null,
            validation: null
        },
        {
            id: 12,
            type: 'work',
            row: 9,
            icon: 'bx bxs-book',
            title: 'Automatizador de Testes',
            institution: 'Spread Tecnologia',
            period: '2024 - Atual',
            startYear: 2024,
            duration: 2,
            description: 'Menção honrosa na Olimpíada Brasileira de Matemática',
            url: null,
            validation: null
        },
        {
            id: 13,
            type: 'course',
            row: 6,
            icon: 'bx bxs-data',
            title: 'Get Started with SQL Analytics and BI on Databricks - Portuguese BR',
            institution: 'Databricks',
            period: '2025',
            startYear: 2025,
            duration: 1,
            description: 'Curso introdutório e prático sobre análise de dados no Databricks, focado em Data Intelligence, SQL, Delta Lake e dashboards com IA para tomada de decisões mais rápidas',
            url: null,
            validation: null
        },
        {
            id: 14,
            type: 'work',
            row: 4,
            icon: 'bx bxs-briefcase',
            title: 'Auxiliar de Escritório',
            institution: 'Mirasul',
            period: '2022 - 2023',
            startYear: 2022,
            duration: 1,
            description: 'Jovem Aprendiz - SENAI - Operador de processo logísticos e industriais, atividades administrativas e suporte de TI',
            url: null,
            validation: null
        },
    ]

    // Configuração da timeline
    const startYear = 2016;
    const endYear = new Date().getFullYear() ;
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

    // Agrupar eventos por row
    const rows = timelineData.reduce((acc, item) => {
        acc[item.row - 1] ??= [];
        acc[item.row - 1].push(item);
        return acc;
    }, []);

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
                        {rows.map((rowEvents, rowIndex) => (
                            <div key={rowIndex} className={styles.eventsRow}>
                                {rowEvents.map((item) => (
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
                                        <div className={`${styles.tooltip} ${rowIndex <= 1 ? styles.tooltipBottom : ''}`}>
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
