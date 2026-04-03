import Layout from '../../components/Layout';
import { useState, useEffect } from 'react';
import Head from 'next/head';

const carouselImages = [
  { src: 'images/inventory/inventory-1.jpg', alt: '现货仓储' },
  { src: 'images/inventory/inventory-2.jpg', alt: '现货仓储' },
  { src: 'images/inventory/inventory-3.jpg', alt: '现货仓储' },
  { src: 'images/inventory/inventory-4.jpg', alt: '现货仓储' },
  { src: 'images/inventory/inventory-5.jpg', alt: '现货仓储' },
  { src: 'images/inventory/inventory-6.jpg', alt: '现货仓储' },

];

const inventoryProducts = [
  { name: '不锈钢卷材', specs: '厚度 0.3-3.0mm，宽度 1000-1500mm' },
  { name: '不锈钢板材', specs: '常规尺寸，可定制切割' },
  { name: '不锈钢管材', specs: '外径 6-60mm，多种壁厚' },
  { name: '不锈钢型材', specs: '角钢/槽钢/工字钢，规格齐全' },
];

export default function InventoryPage() {
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
        <title>现货仓储 - 力川金属 | 大型仓储中心</title>
        <meta name="description" content="力川金属拥有大型仓储中心，现货储备充足，材质报告（MTC）齐全。常用规格：304/316不锈钢卷材、板材、管材、型材等。" />
        <meta name="keywords" content="现货仓储,钢材库存,不锈钢现货,304不锈钢,316不锈钢,材质报告,MTC" />
        <meta property="og:title" content="现货仓储 - 力川金属" />
        <meta property="og:description" content="大型仓储中心，现货储备充足。" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.lichuanmetal.com/inventory" />
      </Head>
      <section className="about-hero" style={{backgroundImage: 'url(/images/inventory/bg.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="about-hero-bg"></div>
        <div className="about-hero-content">
          <h1>现货库存</h1>
          <p>— 充足库存，快速配送</p>
        </div>
      </section>

      <div className="about-content">
        <section className="about-section">
          <h2 className="about-section-title">库存展示</h2>
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
          <h2 className="about-section-title">主要库存产品</h2>
          <div className="about-grid">
            {inventoryProducts.map((product, idx) => (
              <div key={idx} className="about-card">
                <h3 className="about-card-title">{product.name}</h3>
                <p>{product.specs}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about-section">
          <h2 className="about-section-title">库存优势</h2>
          <div className="about-grid">
            <div className="about-card">
              <h3 className="about-card-title">海量库存</h3>
              <p>万吨级现货储备，满足大批量订单需求</p>
            </div>
            <div className="about-card">
              <h3 className="about-card-title">规格齐全</h3>
              <p>多种规格可选，支持定制切割加工</p>
            </div>
            <div className="about-card">
              <h3 className="about-card-title">即需即发</h3>
              <p>库存充足，下单后快速发货</p>
            </div>
            <div className="about-card">
              <h3 className="about-card-title">品质保障</h3>
              <p>严格质量检测，提供材质报告（MTC）</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}