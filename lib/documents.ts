import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';

const documentsDirectory = path.join(process.cwd(), 'documentation')

export interface DocumentMetaData {
  id: string,
  date: string,
  title: string
}

export interface DocumentData extends DocumentMetaData {
  contentHtml: string
}

function getDocumentFileNames(unreleased = false) {
  return fs.readdirSync(documentsDirectory).filter( (value) => { return (unreleased ? /\.md.unreleased$/ : /\.md$/).test(value) } )
}

function getDocumentDataByFileName(fileName: string, unreleased = false) {
  const id = fileName.replace((unreleased ? /\.md.unreleased$/ : /\.md$/), '');
  const fullPath = path.join(documentsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents); // Use gray-matter to parse the document metadata section

  return <DocumentMetaData> {
    id,
    ...matterResult.data
  }
}

export function getSortedDocumentationData(unreleased = false): DocumentMetaData[] {
  const fileNames = getDocumentFileNames(unreleased);
  const allDocumentation = fileNames.map(fileName => getDocumentDataByFileName(fileName, unreleased));
  
  // Sort documents by date
  return allDocumentation.sort((a: DocumentMetaData, b: DocumentMetaData) => (a.date < b.date) ? 1 : -1);
}

export function getAllDocumentIds(unreleased = false): { params: { id: string } }[] {
  const fileNames = getDocumentFileNames(unreleased);

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace((unreleased ? /\.md.unreleased$/ : /\.md$/), '')
      }
    }
  })
}

export async function getDocumentData(id: string, unreleased = false): Promise<DocumentData> {
  const fullPath = path.join(documentsDirectory, (unreleased ? `${id}.md.unreleased` : `${id}.md`))
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the document metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).use(prism).process(matterResult.content);
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return <DocumentData> {
    id,
    contentHtml,
    ...matterResult.data
  }
}