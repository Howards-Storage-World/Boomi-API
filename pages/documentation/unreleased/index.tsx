import { FC } from 'react';
import { GetStaticProps } from 'next'
import Documentation from '@components/documentation';
import { getSortedDocumentationData, DocumentMetaData } from '@lib/documents';

export const getStaticProps: GetStaticProps = async () => {
  const allDocumentation = await getSortedDocumentationData(true)
  return {
    props: {
      allDocumentation
    }
  }
}

const Document: FC<{ allDocumentation: DocumentMetaData[] }> = ({ allDocumentation }) => {
  return (<Documentation documents={allDocumentation} isUnreleased={true} />)
}
export default Document;