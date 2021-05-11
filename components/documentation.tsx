import { FC } from 'react';
import Link from 'next/link';
import { useMediaQuery } from "react-responsive";
import Date from './date';
import Layout from './layout';
import utilStyles from '@styles/utils.module.css';
import { DocumentMetaData } from "@lib/documents"

export const DocumentationListEntry: FC<{ document: DocumentMetaData, isUnreleased?: boolean }> = ({ document: { id, date, title }, isUnreleased = false }) => {
  return (
    <li className={utilStyles.listItem} key={id}>
      <Link href={!isUnreleased ? "/documentation/[id]" : "/documentation/unreleased/[id]"} as={!isUnreleased ? `/documentation/${id}` : `/documentation/unreleased/${id}`}>
        <a>{title}</a>
      </Link>
      <br />
      <small className={utilStyles.lightText}>
        <Date dateString={date} />
      </small>
    </li>
  )
};

export const DocumentationList: FC<{ documents: DocumentMetaData[], style: React.CSSProperties, isUnreleased?: boolean, isRecent?: boolean }> = ({ documents, style, isUnreleased = false, isRecent = false }) => {
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`} style={style}>
      <h2 className={utilStyles.headingLg}>{isRecent ? "Recent Documentation" : "All Documentation"}</h2>
      <ul className={utilStyles.list}>
        {documents.map((document) => (
          <DocumentationListEntry document={document} isUnreleased={isUnreleased}/>
        ))}
      </ul>
      {isRecent && (
        <Link href="/documentation"><a><small>See all docs</small></a></Link>
      )}
    </section>
  )
};


const meta = {
  title: "HSW Boomi API Documentation",
  description: "A place collection of documentation on HSW's Boomi APIs."
};

const Documentation: FC<{ documents: DocumentMetaData[], isUnreleased?: boolean }> = ({ documents, isUnreleased = false }) => {
  const shouldBe2Cols = useMediaQuery({ minWidth: '40rem' });
  return (
    <Layout title="Documentation | HSW Boomi API" meta={meta}>
        {shouldBe2Cols ? (
          <div className={utilStyles.flexGrid}>
            <DocumentationList documents={documents} isUnreleased={isUnreleased} style={{ maxWidth: "20rem" , padding: '0.5rem' }} />
            <section className={`${utilStyles.headingMd} ${utilStyles.flexColumn} ${utilStyles.sticky}`} style={{ maxWidth: "20rem" , padding: '0.5rem' }}>
              <h2 className={utilStyles.headingLg}>DOcumentation Intro</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eaque quae architecto, praesentium, sapiente ratione quia dolorum labore nobis nostrum porro vero aliquam vitae totam iste excepturi dolorem fugiat doloribus.</p>
            </section>
          </div>
        ) : (
          <DocumentationList documents={documents} isUnreleased={isUnreleased} style={{ maxWidth: "20rem", margin: "auto" }} />
        )} 
      </Layout>
    )
}
export default Documentation;