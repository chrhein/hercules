import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import AboutMe from '../sections/About';
import Projects from '../sections/Projects';
import Header from '../components/Header';
import CV from '../sections/CV';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <AboutMe />
    <Projects />
    <CV />
    <Footer />
  </Layout>
);

export default IndexPage;
