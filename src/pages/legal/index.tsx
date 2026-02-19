import React from "react";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import Translate, { translate } from "@docusaurus/Translate";

export default function LegalNotice(): JSX.Element {
  return (
    <Layout
      title={translate({ id: "legal.meta.title", message: "Legal Notice" })}
      description={translate({
        id: "legal.meta.description",
        message: "Impressum / Legal Notice",
      })}
    >
      <section className={styles.legalSection}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            <Translate id="legal.h1">Legal Notice</Translate>
          </h1>

          <p className={styles.intro}>
            <Translate id="legal.intro">
              This website is a personal portfolio created to showcase projects,
              skills and experience. It is not a commercial offer or shop.
            </Translate>
          </p>

          <div className={styles.infoBlock}>
            <h2>
              <Translate id="legal.contact.title">Contact Information</Translate>
            </h2>
            <p>
              {/* Static personal details are fine to keep as-is */}
              Jonathan Priebe
              <br />
              Holderweg 75
              <br />
              89075 Ulm
              <br />
              Germany
            </p>
            <p>
              <Translate id="legal.contact.emailLabel">Email:</Translate>{" "}
              <a href="mailto:jonathan.priebe@gmx.de">
                jonathan.priebe@gmx.de
              </a>
            </p>
          </div>

          <div className={styles.infoBlock}>
            <h2>
              <Translate id="legal.disclaimer.title">Disclaimer</Translate>
            </h2>
            <p>
              <Translate id="legal.disclaimer.body">
                The contents of this website have been created with the utmost
                care. However, I cannot guarantee the accuracy, completeness or
                timeliness of the content. As a service provider I am
                responsible for my own content on these pages according to § 7
                paragraph 1 TMG (German Telemedia Act).
              </Translate>
            </p>
          </div>

          <div className={styles.infoBlock}>
            <h2>
              <Translate id="legal.links.title">External Links</Translate>
            </h2>
            <p>
              <Translate id="legal.links.body">
                This website may contain links to external websites of third
                parties. I have no influence on the content of these external
                sites and therefore cannot accept any liability for such
                content. The respective provider or operator of the pages is
                always responsible for the content of the linked pages.
              </Translate>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}