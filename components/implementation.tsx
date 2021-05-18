import { FC } from 'react';
import Layout from '@components/layout';
import utilStyles from '@styles/utils.module.css';

const Implementation: FC<{ name: string }> = ({ name, children }) => {
  const meta = { title: name, description: `An implmentation of the HSW's Boomi API ${name} Functionality` };

  return (
    <Layout title={`Implementation: ${name} | HSW Boomi API`} meta={meta} style={{}}>
        <h2 className={utilStyles.headingLg} style={{margin: "auto", maxWidth: "36rem"}}>{name} Implementations</h2>
        {children}
    </Layout>
  )
}

export default Implementation;