import Layout from '../../components/Layout';
import brochure from '../../brochure.json';
import { useState } from 'react';
import Head from 'next/head';

export default function AboutPage() {
  const { name, description, services, certifications, contact } = brochure;
  
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = '请输入您的姓名';
    if (!formData.phone.trim()) newErrors.phone = '请输入您的电话';
    if (!formData.message.trim()) newErrors.message = '请输入留言内容';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setSubmitted(true);
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <Layout>
      <Head>
        <title>关于我们 - 力川金属 | 专业不锈钢供应商</title>
        <meta name="description" content="力川金属材料科技有限公司是中国最大的私营库存商、分销商和出口商之一，专注不锈钢卷材、板材、管材、型材及定制加工服务。了解我们的企业实力、认证资质和联系方式。" />
        <meta name="keywords" content="关于力川,不锈钢供应商,金属材料公司,企业介绍,联系方式,认证资质" />
        <meta property="og:title" content="关于我们 - 力川金属" />
        <meta property="og:description" content="中国最大的私营库存商、分销商和出口商之一，专注不锈钢产品。" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.lichuanmetal.com/about" />
      </Head>
      <section className="about-hero">
        <div className="about-hero-bg"></div>
        <div className="about-hero-content">
          <h1>关于我们</h1>
          <p>— 值得信赖的金属材料供应商</p>
        </div>
      </section>

      <div className="about-content">
        <section className="about-section">
          <h2 className="about-section-title">
            <span className="about-section-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/>
              </svg>
            </span>
            公司简介
          </h2>
          <div className="about-card about-card-highlight">
            <div className="about-company-header">
              <div className="about-company-logo">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <h3 className="about-card-title">{name}</h3>
                <p className="about-company-alias">LICHUAN GROUP LIMITED</p>
              </div>
            </div>
            <p className="about-company-desc">{description}</p>
          </div>
        </section>

        <section className="about-section">
          <h2 className="about-section-title">
            <span className="about-section-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </span>
            企业实力
          </h2>
          <div className="about-grid">
            <div className="about-card about-card-hover">
              <div className="about-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="about-card-title">认证资质</h3>
              <ul className="about-list">
                {certifications.map((cert, idx) => (
                  <li key={idx}><span>✓</span>{cert}</li>
                ))}
              </ul>
            </div>
            <div className="about-card about-card-hover">
              <div className="about-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="about-card-title">服务能力</h3>
              <ul className="about-list">
                {services.map((service, idx) => (
                  <li key={idx}><span>✓</span>{service}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2 className="about-section-title">
            <span className="about-section-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </span>
            联系方式
          </h2>
          <div className="about-contact-cards">
            <div className="about-contact-card">
              <div className="about-contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="about-contact-info">
                <p className="about-contact-label">电话</p>
                <p className="about-contact-value">{contact.phone}</p>
              </div>
            </div>
            <div className="about-contact-card">
              <div className="about-contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="m22 6-10 7L2 6"/>
                </svg>
              </div>
              <div className="about-contact-info">
                <p className="about-contact-label">邮箱</p>
                <p className="about-contact-value">{contact.email}</p>
              </div>
            </div>
            <div className="about-contact-card">
              <div className="about-contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="about-contact-info">
                <p className="about-contact-label">地址</p>
                <p className="about-contact-value">{contact.address}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2 className="about-section-title">
            <span className="about-section-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </span>
            联系我们
          </h2>
          <div className="about-card">
            {submitted ? (
              <div className="about-success">
                <div className="about-success-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/>
                  </svg>
                </div>
                <p className="about-success-title">提交成功！</p>
                <p className="about-success-text">我们会尽快与您联系</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="about-success-btn"
                >
                  再次提交
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="about-form">
                <div className="about-form-row">
                  <div className="about-form-group">
                    <label className="about-form-label">姓名 *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="about-form-input"
                      placeholder="请输入您的姓名"
                    />
                    {errors.name && <p className="about-form-error">{errors.name}</p>}
                  </div>
                  <div className="about-form-group">
                    <label className="about-form-label">电话 *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="about-form-input"
                      placeholder="请输入您的电话号码"
                    />
                    {errors.phone && <p className="about-form-error">{errors.phone}</p>}
                  </div>
                </div>
                <div className="about-form-group">
                  <label className="about-form-label">留言 *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="about-form-textarea"
                    placeholder="请输入您的留言或建议"
                  />
                  {errors.message && <p className="about-form-error">{errors.message}</p>}
                </div>
                <button type="submit" className="about-submit-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                  </svg>
                  提交留言
                </button>
              </form>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
}