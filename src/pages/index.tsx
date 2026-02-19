import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Hero from '@site/src/components/hero';
import MySkills from '@site/src/components/my-skills';
import MyProjectHighlights from '@site/src/components/my-project-highlights';
import Contact from '@site/src/components/contact';
import Footer from '@site/src/components/footer';
import Header from '@site/src/components/header';

export default function Home(): JSX.Element {
  return (
    <div className="portfolio-homepage">
      <Layout
        title="Portfolio"
        description="My personal portfolio"
        noFooter>
        <Header />
        <main>
          <Hero />
          <MySkills />
          <MyProjectHighlights />
          <Contact />
        </main>
        <Footer name="Jonathan Priebe" legalHref={useBaseUrl('/legal')} />
      </Layout>
    </div>
  );
}
