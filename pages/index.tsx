import { FC } from 'react';
import { GetStaticProps } from 'next';
import Layout from '@components/layout'
import utilStyles from '@styles/utils.module.css'
import { getSortedDocumentationData, DocumentMetaData } from '@lib/documents'
import { DocumentationList } from '@components/documentation'

export const getStaticProps: GetStaticProps = async () => {
  const allDocumentationData = getSortedDocumentationData()
  const topDocuments = allDocumentationData.slice(0, 5);
  return {
    props: {
      topDocuments
    }
  }
}

const meta = {
  title: "HSW Boomi API Home",
  description: "A place collection of documentation on HSW's Boomi APIs."
};

const Home: FC<{ topDocuments: DocumentMetaData[] }> = ({ topDocuments }) => {
  return (
    <Layout meta={meta} home>
      <section className={utilStyles.headingMd}>
        <p style={{marginBottom: "0"}}>Lorem ispsum...</p>
      </section>
      <DocumentationList documents={topDocuments} style={{}} isRecent={true}/>
    </Layout>
  )
};

export default Home;