import Layout from '../components/Layout';
import brochure from '../brochure.json';
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const { name, description } = brochure;

  const [currentSlide, setCurrentSlide] = useState(0);
  const heroSlides = [
    { src: 'https://picsum.photos/1920/1080?random=1', alt: 'Steel warehouse' },
    { src: 'https://picsum.photos/1920/1080?random=2', alt: 'Metal processing' },
    { src: 'https://picsum.photos/1920/1080?random=3', alt: 'Global trade' }
  ];

  const productShows = [
    { name: '不锈钢卷材', desc: '304/316 材质，厚度 0.3-3.0mm', imageUrl: '/images/show/stainless-steel-coil.jpg' },
    { name: '不锈钢板材', desc: '冷轧热轧板，宽度 1000-1500mm', imageUrl: '/images/show/stainless-steel-plate.jpg' },
    { name: '不锈钢管材', desc: '无缝管/焊接管，外径 6-60mm', imageUrl: '/images/show/stainless-steel-pipe.jpg' },
    { name: '角钢', desc: '等边/不等边，边厚 2-10mm', imageUrl: '/images/show/stainless-angle-bar.jpg' },
    { name: '槽钢', desc: '热轧槽钢，规格齐全', imageUrl: '/images/show/stainless-channel-steel.jpg' },
    { name: '工字钢', desc: 'H型钢/I型钢，大型工程专用', imageUrl: '/images/show/stainless-i-beam.jpg' },
  ]


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <Layout>
      <Head>
        <title>力川金属 - 专业不锈钢供应商 | 不锈钢卷材、板材、管材、型材</title>
        <meta name="description" content="力川金属材料科技有限公司是中国最大的私营库存商、分销商和出口商之一，专注不锈钢卷材、板材、管材、型材及定制加工服务。现货储备，极速配送。" />
        <meta name="keywords" content="不锈钢卷材,不锈钢板材,不锈钢管材,不锈钢型材,角钢,槽钢,工字钢,304不锈钢,316不锈钢,金属材料供应商" />
        <meta property="og:title" content="力川金属 - 专业不锈钢供应商" />
        <meta property="og:description" content="中国最大的私营库存商、分销商和出口商之一，专注不锈钢卷材、板材、管材、型材及定制加工服务。" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="baidu-site-verification" content="codeva-XXXXXXXXXX" />
        <link rel="canonical" href="https://www.lichuanmetal.com/" />
      </Head>
      <section className="hero-section">
        <div className="hero-slideshow">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.src})` }}
            />
          ))}
          <div className="hero-slide-indicator">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`indicator-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <div className="hero-pattern"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-main">力川金属</span>
            <span className="hero-title-sub">——筑就工业之脊，通达全球贸易</span>
          </h1>
          <p className="hero-subtitle">
            专业碳钢、不锈钢、型材供应链服务商，现货储备，极速配送
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">了解现货</button>
            <button className="btn btn-secondary">立即询价</button>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 20h20M4 16l6-8 6 8M8 8v8M16 8v8" />
              </svg>
            </div>
            <h3 className="feature-title">力之保障</h3>
            <p className="feature-desc">严选一线钢企货源，材质报告（MTC）齐全</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <h3 className="feature-title">川流不息</h3>
            <p className="feature-desc">自有仓储与智慧物流体系</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 7.65l.78.77L12 20.65l7.65-7.65.78-.77a5.4 5.4 0 0 0 0-7.65z" />
              </svg>
            </div>
            <h3 className="feature-title">金石服务</h3>
            <p className="feature-desc">7×24小时专家咨询，提供深加工及个性化供应链解决方案</p>
          </div>
        </div>
      </section>



      <section className="products-section">
        <h2 className="section-title">产品展示</h2>

        <div className="products-grid">
          {productShows.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image" style={{ backgroundImage: `url(${product.imageUrl})` }}></div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-desc">{product.desc}</p>
              </div>
            </div>
          ))}

        </div>
      </section>

    </Layout>
  );
}
