import React, { FC } from 'react';
import Link from 'next/link';
import { useMediaQuery } from "react-responsive";
import Layout from '@components/layout';
import Date from '@components/date';
import utilStyles from '@styles/utils.module.css';

const meta = {
  title: "HSW Boomi API Documentation",
  description: "A place collection of documentation on HSW's Boomi APIs."
};

export interface ImplementationLink {
  name: string
  path: string
  last_updated: string
}

const navigation_links: ImplementationLink[] = [
  { name: 'Stock Lookup', path: "/stock-lookup", last_updated: "2021-05-13" },
  { name: 'Load Order', path: "/load-order", last_updated: "2021-05-18" },
];

import { parseISO } from 'date-fns';
navigation_links.sort((first, second) => {
  return parseISO(second.last_updated).getTime() - parseISO(first.last_updated).getTime();
});

const ImplementationsListEntry: FC<{ link: ImplementationLink }> = ({ link: { name, path, last_updated } }) => {
  return (
    <li className={utilStyles.listItem}>
      <Link href={`/implementations${path}`}>
        <a>{name}</a>
      </Link>
      <br />
      <small className={utilStyles.lightText}>
        <Date dateString={last_updated} />
      </small>
    </li>
  );
};

const ImplementationsList: FC<{ links: ImplementationLink[], style: React.CSSProperties }> = ({ links, style }) => {
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`} style={style}>
      <h2 className={utilStyles.headingLg}>All Implementations</h2>
      <ul className={utilStyles.list}>
        {links.map(link => (
          <ImplementationsListEntry link={link} />
        ))}
      </ul>
    </section>
  )
};

const Implementations: FC = () => {
  const shouldBe2Cols = useMediaQuery({ minWidth: '40rem' });
  return (
    <Layout title="Implementations | HSW Boomi API" meta={meta}>
        {shouldBe2Cols ? (
          <div className={utilStyles.flexGrid}>
            <ImplementationsList links={navigation_links} style={{ maxWidth: "20rem" , padding: '0.5rem' }} />
            <section className={`${utilStyles.headingMd} ${utilStyles.flexColumn} ${utilStyles.sticky}`} style={{ maxWidth: "20rem" , padding: '0.5rem' }}>
              <h2 className={utilStyles.headingLg}>API Implementation Examples</h2>
              <p>These example are intended to provide a sample implementation of the Boomi API feature set. Ideally these will cover all the features (including webhooks) for testing by non-technical users and for reference when developers are consuming or implementing these API interfaces. </p>
            </section>
          </div>
        ) : (
          <ImplementationsList links={navigation_links} style={{ maxWidth: "20rem", margin: "auto" }} />
        )} 
      </Layout>
    )
}

export default Implementations;