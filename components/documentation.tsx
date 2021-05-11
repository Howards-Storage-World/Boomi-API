import { FC } from 'react';
import Link from 'next/link';
import Date from './date';
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

export default DocumentationList;