import { FC } from 'react';
import Link from 'next/link';
import Layout from './layout';
import Date from './date';
import styles from "./documentation.module.css";
import utilStyles from '@styles/utils.module.css';

const Document: FC<{ documentData: { title: string, date: string, contentHtml: string }, isUnreleased?: boolean }> = ({ documentData, isUnreleased = false }) => {
  return (
    <Layout title={documentData.title + " | HSW Boomi API"} meta={{ title: documentData.title, description: "An article about my projects working called '" + documentData.title + "'." }} style={{}} className={styles.body}>
      <article>
        <h1 className={utilStyles.headingXl}>{documentData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={documentData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: documentData.contentHtml }} />
      </article>

      <div>
        <Link href={!isUnreleased ? "/documentation" : "/documentation/unreleased"}><a>← Back to docs</a></Link>
      </div>
    </Layout>
  )
};
export default Document;
