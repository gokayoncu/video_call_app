import React from "react";
import Layout from "../Components/Layout/Layout";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <section className="hero">
        <div className="hero-overly">
          <div className="container">
            <h2>Connect with anyone, anywhere in high quality video calls</h2>
            <p style={{marginBottom:'25px'}}>Stay connected with friends,family or business partners effortlessly</p>
            <Link to="/room" className="ctaButton" >Get Started</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
