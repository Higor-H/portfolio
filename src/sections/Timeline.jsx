import styles from "./Timeline.module.css";
import SectionHeader from "../components/Sections_Header/index.jsx";

function Timeline() {


    const timelineData = [{
        id: 1,
        type: 'course',
        row: 6,
        icon: 'bx bxs-check-shield',
        title: 'Programa Hackers do Bem - Básico',
        institution: 'Hackers do Bem | RNP | GovBR',
        period: '2024',
        startYear: 2024,
        duration: 1,
        description: 'Conhecimentos em computação em nuvem, fundamentos de desenvolvimento, ameaças e vulnerabilidades cibernéticas, criptografia e governança, risco e compliance (GRC)',
        url: 'https://ava.hackersdobem.org.br/badges/badge.php?hash=79b3c45db4ec904650b34c364c25195112d4aea9',
        validation: null
    },
        {
            id: 2,
            type: 'course',
            row: 3,
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
            row: 7,
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
            row: 4,
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
            row: 11,
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
            description: 'Curso de testes de APIs REST em Java com REST Assured, abordando requisições, validações, autenticação, JSON/XML, arquivos e testes em API real',
            url: 'https://www.udemy.com/certificate/UC-156fcd7b-f643-4385-b833-781d5a46ef3d/',
            validation: null
        },
        {
            id: 7,
            type: 'course',
            row: 8,
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
            row: 8,
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
            row: 9,
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
            row: 9,
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
            row: 10,
            icon: 'bx bxs-book',
            title: 'Bacharelado, Ciência da Computação',
            institution: 'Atitus Educação',
            period: '2023',
            startYear: 2023,
            duration: 4,
            description: 'Formação sólida em Ciência da Computação, abrangendo pensamento computacional, algoritmos, programação e engenharia de software. Desenvolvimento de aplicações front-end, foco em UX, organização e abstração de código. Conhecimentos em engenharia de dados, bancos de dados e otimização, além de paradigmas de linguagens de programação. Atuação em machine learning, inteligência artificial e big data. Fundamentos e prática em cloud computing, arquitetura de soluções, cibersegurança e computação distribuída. Base consistente em sistemas operacionais, arquitetura de hardware, além de computação gráfica, linguagens formais, compiladores, tecnologias emergentes, gestão de projetos, inovação e empreendedorismo',
            url: null,
            validation: null
        },
        {
            id: 12,
            type: 'work',
            row: 11,
            icon: 'bx bxs-bug',
            title: 'Automatizador de Testes',
            institution: 'Spread Tecnologia',
            period: '2024 - Atual',
            startYear: 2024,
            duration: 2,
            description: 'Atuação em automação de testes em Java para Big Data, com validação de ETL/ELT no Databricks, testes funcionais e de performance, uso de boas práticas (DDT, BDD, Shift-Left) e integração com Azure, Spark e bancos de dados',
            url: null,
            validation: null
        },
        {
            id: 13,
            type: 'course',
            row: 8,
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
            row: 11,
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
        {
            id: 15,
            type: 'course',
            row: 7,
            icon: 'bx bxs-microchip',
            title: 'Curso de eletrônica, manutenção e configuração de computadores',
            institution: 'Método MW 4.0',
            period: '2025',
            startYear: 2025,
            duration: 1,
            description: 'Limpeza, manutenção, montagem, configuração de hardware e software, redes de computadores e segurança da informação',
            url: 'https://hotmart.com/pt-br/club/metodo-mw-40/product/2206949/certificate/57514c09-fc38-4e9d-bb81-7bc6d33ea515--635568224/validate',
            validation: null
        },
        {
            id: 16,
            type: 'course',
            row: 2,
            icon: 'bx bxl-java',
            title: 'Boas práticas de programação: melhore o código de uma API Java',
            institution: 'Alura',
            period: '2024',
            startYear: 2024,
            duration: 1,
            description: 'Boas práticas de arquitetura e persistência, incluindo separação de responsabilidades, uso de DTO, validações flexíveis e otimizações de desempenho',
            url: 'https://cursos.alura.com.br/certificate/higor-milani/boas-praticas-programacao-melhore-codigo-api-java',
            validation: null
        },
        {
            id: 17,
            type: 'course',
            row: 4,
            icon: 'bx bxl-java',
            title: 'Java e refatoração: melhorando códigos com boas práticas',
            institution: 'Alura',
            period: '2024',
            startYear: 2024,
            duration: 1,
            description: 'Práticas de engenharia de software, com foco em refatoração, princípios SOLID, modelagem de domínios, testes automatizados e padrões de projeto',
            url: 'https://cursos.alura.com.br/certificate/higor-milani/java-refatoracao-melhorando-codigos-boas-praticas',
            validation: null
        },
        {
            id: 18,
            type: 'certification',
            row: 8,
            icon: 'bx bx-shield-quarter',
            title: 'Qualificação em Arquitetura de Soluções em Cloud',
            institution: 'Atitus Educação',
            period: '2024',
            startYear: 2024,
            duration: 1,
            description: 'Estudos em comportamento e fatores humanos no desenvolvimento de software, fundamentos de cibersegurança e computação em nuvem (SaaS, PaaS, IaaS), com foco em arquitetura, gestão e segurança de sistemas escaláveis, pentesting, kali Linux e redes',
            url: 'https://atitusvalidador.web.app/',
            validation: 'cc47d4a3db41'
        },
        {
            id: 19,
            type: 'course',
            row: 5,
            icon: 'bx bx-shield-quarter',
            title: 'Programa Hackers do Bem - Fundamental',
            institution: 'Hackers do Bem | RNP | GovBR',
            period: '2024',
            startYear: 2024,
            duration: 1,
            description: 'Fundamentos de segurança da informação, cobrindo ameaças e malwares, controles de acesso, IAM, criptografia, redes e hosts seguros, proteção web, backups, PKI/Blockchain e resposta a incidentes',
            url: 'https://ava.hackersdobem.org.br/badges/badge.php?hash=5eaaeb9219184eee57ab0601dee87abdb7cd27cc',
            validation: null
        },
        {
            id: 20,
            type: 'course',
            row: 7,
            icon: 'bx bx-shield-quarter',
            title: 'Programa Hackers do Bem - Nivelamento',
            institution: 'Hackers do Bem | RNP | GovBR',
            period: '2024',
            startYear: 2024,
            duration: 1,
            description: 'Fundamentos de cibersegurança, redes de computadores (TCP/IP, IPv6), hardware, Windows e Linux, além de lógica de programação e desenvolvimento de scripts',
            url: 'https://ava.hackersdobem.org.br/badges/badge.php?hash=3feb070ed8e6f9cef27543405d9faf48adaacecc',
            validation: null
        },
        {
            id: 21,
            type: 'course',
            row: 1,
            icon: 'bx bxl-aws',
            title: 'AWS Academy Graduate - Introduction to Cloud Semester 1 - Training Badge',
            institution: 'AWS Academy',
            period: '2024',
            startYear: 2024,
            duration: 1,
            description: 'Curso introdutório de AWS Cloud, abordando fundamentos de cloud computing, arquitetura, segurança, custos, suporte e uso do AWS Management Console em cenários práticos',
            url: 'https://www.credly.com/badges/133ede12-4023-423b-9dab-e206664835d1/print',
            validation: null
        },
        {
            id: 22,
            type: 'certification',
            row: 9,
            icon: 'bx bxl-aws',
            title: 'Oratória nas Escolas',
            institution: 'JCI (Junior Chamber International)',
            period: '2021',
            startYear: 2021,
            duration: 1,
            description: 'Programa de Ortória nas Escolas, focado em habilidades de comunicação e apresentação em público',
            url: null,
            validation: null
        },
        {
            id: 23,
            type: 'certification',
            row: 9,
            icon: 'bx bx-code-block',
            title: 'Qualificação em Desenvolvimento de Soluções Full Stack',
            institution: 'Atitus Educação',
            period: '2023',
            startYear: 2023,
            duration: 1,
            description: 'Estudos em organização e abstração de código, desenvolvimento de APIs com Spring Boot, design centrado no usuário (UX) e desenvolvimento de interfaces web com React, focando usabilidade e responsividade',
            url: 'https://atitusvalidador.web.app/',
            validation: 'cc1353dc2730'
        },
        {
            id: 24,
            type: 'certification',
            row: 9,
            icon: 'bx bxs-devices',
            title: 'Qualificação em Engenharia de Software',
            institution: 'Atitus Educação',
            period: '2024',
            startYear: 2024,
            duration: 1,
            description: 'Desenvolvimento de comunicação técnica, design e engenharia de processos, otimização de bancos de dados e estudo de paradigmas de programação, React Native e desenvolvimento mobile, Arquitetura, documentação e metodologias ágeis',
            url: 'https://atitusvalidador.web.app/',
            validation: 'cc9fbf2b7bfe'
        },
        {
            id: 25,
            type: 'certification',
            row: 9,
            icon: 'bx bx-bot',
            title: 'Qualificação em Inteligência Artificial, Machine Learning e Big Data',
            institution: 'Atitus Educação',
            period: '2025',
            startYear: 2025,
            duration: 1,
            description: 'Conhecimentos em inteligência artificial e machine learning (redes neurais, CNNs, regressão, análise de dados com Python), gestão de projetos baseada no PMBOK e métodos ágeis, e Big Data com Hadoop, Spark, Databricks e NoSQL',
            url: 'https://atitusvalidador.web.app/',
            validation: 'cc7f06a17681'
        }
    ]

    // Configuração da timeline
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
                                        <div className={`${styles.tooltip} ${typeTooltipClasses[item.type]} ${rowIndex <= 4 ? styles.tooltipBottom : ''}`}>
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
