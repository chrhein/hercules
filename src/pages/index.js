import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useDarkMode } from '../components/useDarkMode';
import Resume from '../sections/Resume';

const IndexPage = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  return (
    <Layout theme={theme} mountedComponent={mountedComponent}>
      <Header theme={theme} themeToggler={themeToggler} />
      <Landing theme={theme} />
      <About />
      <Projects theme={theme} />
      <Resume theme={theme} />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
