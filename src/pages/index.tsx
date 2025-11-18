import React from 'react';
import Layout from '@theme/Layout';
import Header from '@site/src/components/header';
import Hero from '@site/src/components/hero';
import MySkills from '@site/src/components/my-skills';
import MyProjectHighlights from '@site/src/components/my-project-highlights';
import Contact from '@site/src/components/contact';
import Footer from '@site/src/components/footer';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Portfolio"
      description="My personal portfolio">
      <Header />
      <main>
        <Hero />
        <MySkills />
        <MyProjectHighlights />
        <Contact />
      </main>
      <Footer />
    </Layout>
  );
}
