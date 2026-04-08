import Layout from '../../components/Layout';
import brochure from '../../brochure.json';
import { useState } from 'react';
import Head from 'next/head';

export default function ProductPage() {
  const products = brochure?.products ?? [];

  const productImages = {
    '不锈钢卷材与板材': [
      '/images/product/stainless-steel-coil.jpg',
      '/images/product/stainless-steel-coil-a.jpg',
      '/images/product/stainless-steel-coil-b.jpg',
      '/images/product/stainless-steel-coil-c.jpg',
      '/images/product/stainless-steel-plate-a.jpg',
      '/images/product/stainless-steel-plate-b.jpg',
      '/images/product/stainless-steel-plate-c.jpg',
      '/images/product/stainless-steel-plate-d.jpg',
      '/images/product/stainless-steel-plate-f.jpg',
      '/images/product/stainless-steel-plate-g.jpg',
      '/images/product/stainless-steel-plate-h.jpg',

    ],
    '不锈钢管材（无缝/焊接）': [
      '/images/product/stainless-steel-pipe.jpg',
      '/images/product/stainless-steel-pipe-3.jpg',
      '/images/product/stainless-steel-pipe-a.jpg',
    ],
    '不锈钢型材（角钢/槽钢/工字钢等）': [
      '/images/product/stainless-angle-bar-a.jpg',
      '/images/product/stainless-angle-bar-b.jpg',
      '/images/product/stainless-angle-bar-b.jpg',
      '/images/product/stainless-channel-bar-a.jpg',
      '/images/product/stainless-channel-bar-b.jpg',
      '/images/product/stainless-i-beam.jpg',
      '/images/product/stainless-i-beam-a.jpg',
      '/images/product/stainless-i-beam-b.jpg',
    ],
    '不锈钢加工制品（定制深加工）': [
      '/images/product/stainless-steel-coil-a.jpg',
      '/images/product/stainless-angle-bar-a.jpg',
    ],
  };

  const [openIndex, setOpenIndex] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState({});
  const [lightbox, setLightbox] = useState({ open: false, images: [], index: 0 });

  const productKnowledge = {
    materials: [
      { name: '201', desc: '性价比高，耐腐蚀性中等，适用于对防腐要求不高的一般工业场景、市政杂用管道等' },
      { name: '304', desc: '应用最广泛，具备优良的耐腐蚀性、耐热性，适配食品医药、饮用水、常规工业输送等多数场景' },
      { name: '316L', desc: '耐腐蚀性更强（尤其耐酸碱、海洋环境），低温性能优异，适用于化工、海洋工程、高纯度介质输送等高端场景' },
      { name: '321', desc: '耐高温性突出，抗晶间腐蚀，适用于能源电力、锅炉过热器、高温工况管道等' },
    ],
    specs: {
      diameter: 'Φ6-630mm',
      thickness: '1.5-50mm',
      tolerance: '±0.02mm',
    },
  };

  const getProductImages = (productName) => {
    for (const key of Object.keys(productImages)) {
      if (productName.includes(key.split('（')[0]) || key.includes(productName.split('（')[0])) {
        return productImages[key];
      }
    }
    return ['/images/brochure/slider3.png'];
  };

  const handleImageClick = (images, index) => {
    setLightbox({ open: true, images, index });
  };

  return (
    <Layout>
      <Head>
        <title>产品中心 - 力川金属 | 不锈钢卷材、板材、管材、型材</title>
        <meta name="description" content="力川金属产品中心供应不锈钢卷材、板材、管材、型材（角钢、槽钢、工字钢）及定制深加工服务。规格齐全，材质保证。" />
        <meta name="keywords" content="不锈钢卷材,不锈钢板材,不锈钢管材,不锈钢型材,角钢,槽钢,工字钢,产品中心,不锈钢加工" />
        <meta property="og:title" content="产品中心 - 力川金属" />
        <meta property="og:description" content="供应不锈钢卷材、板材、管材、型材及定制加工服务。" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.lichuanmetal.com/product" />
      </Head>
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <div className="hero-pattern"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-main">产品中心</span>
            <span className="hero-title-sub">— 优质钢材，一站式供应</span>
          </h1>
          <p className="hero-subtitle">
            涵盖不锈钢卷材、板材、管材、型材及定制加工服务
          </p>
        </div>
      </section>


      <div className="about-content">
        {products.map((p, idx) => {
          const images = getProductImages(p.name);
          const currentIndex = selectedImageIndex[idx] || 0;
          const isOpen = openIndex === idx;


          return (
            <div key={idx} className={`product-row ${isOpen ? 'product-row-expanded' : ''}`}>
              <div className="product-row-header">
                <h2 className="product-row-title">{p.name}</h2>
                <button
                  className={`btn ${isOpen ? 'btn-secondary' : 'btn-primary'}`}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  {isOpen ? '收起详情' : '查看详情'}
                </button>
              </div>

              <div className="product-images-row">
                <div
                  className="product-main-image"
                  onClick={() => handleImageClick(images, currentIndex)}
                  style={{ backgroundImage: `url(${images[currentIndex]})` }}
                >
                  <div className="image-zoom-hint">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /><path d="M11 8v6M8 11h6" />
                    </svg>
                  </div>
                </div>
                {images.length > 1 && (
                  <div className="product-thumbnails">
                    {images.map((src, ti) => (
                      <div
                        key={ti}
                        className={`product-thumb ${ti === currentIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${src})` }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImageIndex({ ...selectedImageIndex, [idx]: ti });
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {isOpen && (
                <div className="specs-table">
                  <table>
                    <thead>
                      <tr>
                        <th>规格参数</th>
                        <th>数值</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(p.specs || []).map((spec, si) => (
                        <tr key={si}>
                          <td>{spec.name}</td>
                          <td>{spec.value}{spec.unit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="product-knowledge-section">
        <h3 className="knowledge-title">不锈钢管材知识百科</h3>
        <div className="knowledge-content">
          <div className="knowledge-block">
            <h4>常用材质</h4>
            <div className="material-cards">
              {productKnowledge.materials.map((m, i) => (
                <div key={i} className="material-card">
                  <span className="material-name">{m.name}</span>
                  <span className="material-desc">{m.desc}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="knowledge-block">
            <h4>常用规格</h4>
            <div className="spec-cards">
              <div className="spec-card">
                <span className="spec-label">外径范围</span>
                <span className="spec-value">{productKnowledge.specs.diameter}</span>
              </div>
              <div className="spec-card">
                <span className="spec-label">壁厚范围</span>
                <span className="spec-value">{productKnowledge.specs.thickness}</span>
              </div>
              <div className="spec-card">
                <span className="spec-label">尺寸公差</span>
                <span className="spec-value">{productKnowledge.specs.tolerance}</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      {lightbox.open && (
        <div className="lightbox" onClick={() => setLightbox({ ...lightbox, open: false })}>
          <button className="lightbox-close" onClick={() => setLightbox({ ...lightbox, open: false })}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-nav lightbox-prev"
              onClick={() => setLightbox({ ...lightbox, index: (lightbox.index - 1 + lightbox.images.length) % lightbox.images.length })}
              disabled={lightbox.images.length <= 1}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <img src={lightbox.images[lightbox.index]} alt="" className="lightbox-image" />
            <button
              className="lightbox-nav lightbox-next"
              onClick={() => setLightbox({ ...lightbox, index: (lightbox.index + 1) % lightbox.images.length })}
              disabled={lightbox.images.length <= 1}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
          <div className="lightbox-counter">{lightbox.index + 1} / {lightbox.images.length}</div>
        </div>
      )}
    </Layout>
  );
}
