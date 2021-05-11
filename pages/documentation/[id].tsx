import { FC } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next'
import { getAllDocumentIds, getDocumentData, DocumentData } from '@lib/documents';
import Document from '@components/document';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const documentData = await getDocumentData(params?.id as string)
  return {
    props: {
      documentData
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllDocumentIds()
  return {
    paths,
    fallback: false
  }
}

const Render: FC<{ documentData: DocumentData }> = ({ documentData }) => {
  return <Document documentData={documentData} />
}
export default Render;