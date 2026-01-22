import React from 'react'
import Header from '../../components/Header/Header.jsx'
import Footer  from '../../components/Footer/Footer.jsx'
import VideoCard from '../../components/Videos/Videos.jsx';
import './home.css'

function Home() {
    const videos = [
        {
            id: 1,
            title: "Gabriel Medina & Italo ferreira",
            description: "Gabriel Medina e Italo Ferreira surfando juntos em Bali - Indonésia.",
            videoId: "o8PED6Iz-TY"
        },
        {
            id: 2,
            title: "A máquina chamada Gabriel Medina",
            description: "Os melhores momentos de Gabriel Medina no Circuito mundial em 2023.",
            videoId: "66XSi8wIbXc"
        },
        {
            id: 3,
            title: "Os melhores momentos de Italo Ferreira",
            description: "Veja algumas das melhores atuações do campeão mundial Italo Ferreira",
            videoId: "DtgwxY32-Cg"
        }
    ];

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            
            window.scrollTo({
                top: targetPosition - headerHeight,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="home-page">
            <Header />
            
            <section className="hero" id="home">
                <div className="container">
                    <div className="hero-content">
                        <h1>Surfe a onda da <span className="wave">vida</span></h1>
                        <p>O surf é mais que um esporte — é um estilo de vida. Descubra as melhores praias, manobras incríveis e a conexão única com o mar.</p>
                        <a 
                            href="#videos" 
                            className="btn"
                            onClick={(e) => handleSmoothScroll(e, '#videos')}
                        >
                            Explorar Vídeos
                        </a>
                    </div>
                </div>
            </section>

            <main>
                <section id="videos">
                    <div className="container">
                        <div className="section-title">
                            <h2>Vídeos Inspiradores</h2>
                        </div>
                        <p className="text-center" style={{maxWidth: '800px', margin: '0 auto 2rem'}}>
                            Explore vídeos com dicas para iniciantes, performances profissionais e destinos incríveis para surfar.
                        </p>
                        
                        <div className="videos-container">
                            {videos.map(video => (
                                <VideoCard
                                    key={video.id}
                                    title={video.title}
                                    description={video.description}
                                    videoId={video.videoId}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <section className="background-section" id="galeria">
                    <div className="background-content hover-effect">
                        <h2>O Espírito do Surf</h2>
                        <p>O surf representa a liberdade e a profunda conexão com a natureza, unindo o ser humano ao ritmo do mar. Ondas perfeitas, praias paradisíacas e a busca constante pela próxima grande onda fazem parte dessa experiência única e transformadora.</p>
                    </div>
                </section>
            </main>

            <Footer />
            
            <a 
                href="#home" 
                className="floating-btn"
                onClick={(e) => handleSmoothScroll(e, '#home')}
            >
                <i className="fas fa-arrow-up"></i>
            </a>
        </div>
    )
}

export default Home;