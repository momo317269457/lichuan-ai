import Layout from '../../components/Layout';
import { useState, useEffect } from 'react';
import Head from 'next/head';

const carouselImages = [
  { src: 'images/logistics/logistic-1.jpg', alt: '仓储中心' },
  { src: 'images/logistics/logistic-2.jpg', alt: '物流车队' },
  { src: 'images/logistics/logistic-3.jpg', alt: '配送服务' },
];

const logisticsServices = [
  { title: '自有仓储', desc: '大型仓储中心，现货储备充足' },
  { title: '智能物流', desc: '全流程信息化管理追踪' },
  { title: '极速配送', desc: '全国范围内高效配送' },
  { title: '专业包装', desc: '安全可靠的包装方案' },
];

export default function LogisticsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => setCurrentIndex(index);
  const goToPrev = () => setCurrentIndex((currentIndex - 1 + carouselImages.length) % carouselImages.length);
  const goToNext = () => setCurrentIndex((currentIndex + 1) % carouselImages.length);

  return (
    <Layout>
      <Head>
        <title>物流配送 - 力川金属 | 专业仓储与配送服务</title>
        <meta name="description" content="力川金属提供专业仓储与物流配送服务，自有仓储中心、智慧物流系统、极速配送覆盖全国。安全可靠的包装方案。" />
        <meta name="keywords" content="物流配送,仓储服务,钢材配送,智慧物流,极速配送,专业包装" />
        <meta property="og:title" content="物流配送 - 力川金属" />
        <meta property="og:description" content="专业仓储与物流配送服务，覆盖全国。" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.lichuanmetal.com/logistics" />
      </Head>
      <section className="about-hero" style={{backgroundImage: 'url(/images/logistics/logistic-1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="about-hero-bg"></div>
        <div className="about-hero-content">
          <h1>物流配送</h1>
          <p>— 专业高效的物流配送服务</p>
        </div>
      </section>

      <div className="about-content">
        <section className="about-section">
          <h2 className="about-section-title">物流展示</h2>
          <div className="logistics-carousel">
            <div className="carousel-container">
              {carouselImages.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`carousel-slide ${idx === currentIndex ? 'active' : ''}`}
                >
                  <img src={img.src} alt={img.alt} className="carousel-image" />
                </div>
              ))}
              <button className="carousel-btn carousel-btn-prev" onClick={goToPrev}>❮</button>
              <button className="carousel-btn carousel-btn-next" onClick={goToNext}>❯</button>
            </div>
            <div className="carousel-indicators">
              {carouselImages.map((_, idx) => (
                <button
                  key={idx}
                  className={`carousel-indicator ${idx === currentIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(idx)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2 className="about-section-title">服务优势</h2>
          <div className="about-grid">
            {logisticsServices.map((service, idx) => (
              <div key={idx} className="about-card">
                <h3 className="about-card-title">{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}