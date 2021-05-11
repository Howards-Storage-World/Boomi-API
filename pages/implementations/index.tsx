import { FC } from 'react';
import { useMediaQuery } from "react-responsive";
import Layout from '@components/layout';
import utilStyles from '@styles/utils.module.css';

const meta = {
  title: "HSW Boomi API Documentation",
  description: "A place collection of documentation on HSW's Boomi APIs."
};

const Implementations: FC = () => {
  const shouldBe2Cols = useMediaQuery({ minWidth: '40rem' });
  return (
    <Layout title="Documentation | HSW Boomi API" meta={meta}>
        {shouldBe2Cols ? (
          <div className={utilStyles.flexGrid}>
            <div style={{ maxWidth: "20rem" , padding: '0.5rem' }} />
            <section className={`${utilStyles.headingMd} ${utilStyles.flexColumn} ${utilStyles.sticky}`} style={{ maxWidth: "20rem" , padding: '0.5rem' }}>
              <h2 className={utilStyles.headingLg}>Examples Intro</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eaque quae architecto, praesentium, sapiente ratione quia dolorum labore nobis nostrum porro vero aliquam vitae totam iste excepturi dolorem fugiat doloribus.</p>
            </section>
          </div>
        ) : (
          <div style={{ maxWidth: "20rem", margin: "auto" }}>
            <article>Test</article>
          </div>
        )} 
      </Layout>
    )
}

export default Implementations;