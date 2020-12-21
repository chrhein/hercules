import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Header from '../components/Header';
import CV from '../sections/CV';
import Footer from '../components/Footer';
import { useDarkMode } from '../components/useDarkMode';


const IndexPage = () => {
  const [theme, themeToggler] = useDarkMode();

  return (
    <Layout theme={theme}>
      <Header theme={theme} themeToggler={themeToggler} />
      <Landing />
      <About />
      <Projects />
      <CV />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
