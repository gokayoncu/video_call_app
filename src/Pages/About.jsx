import React from "react";
import Layout from "../Components/Layout/Layout";
import { aboutFeatures, teamMembers } from "../helpers/aboutPage.js";

const About = () => {
  return (
    <Layout>
      <div className="about-container">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Görüntülü Görüşmeyi Yeniden Tanımlıyoruz</h1>
            <p>
              Video Call App, dünya çapında milyonlarca kullanıcıya güvenli,
              hızlı ve kaliteli görüntülü görüşme deneyimi sunuyor.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="about-content">
            <h2>Biz Kimiz?</h2>
            <p>
              2020 yılında kurulan şirketimiz, uzaktan iletişim ihtiyaçlarına
              yenilikçi çözümler sunmak amacıyla yola çıktı. Bugün, 50'den fazla
              ülkede milyonlarca kullanıcıya hizmet veriyoruz.
            </p>
            <p>
              Misyonumuz, insanlar arasındaki bağları güçlendirmek için en iyi
              video iletişim teknolojilerini sunmaktır.
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Video Call Ekibi"
            />
          </div>
        </section>

        <section className="features-section">
          <h2>Neden Biz?</h2>
          <div className="features-grid">
            {aboutFeatures.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="stats-section">
          <div className="stats-container">
            <div className="stat-item">
              <h3>10M+</h3>
              <p>Mutlu Kullanıcı</p>
            </div>
            <div className="stat-item">
              <h3>150+</h3>
              <p>Ülke</p>
            </div>
            <div className="stat-item">
              <h3>99.9%</h3>
              <p>Çalışma Süresi</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Destek</p>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2>Ekibimiz</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
