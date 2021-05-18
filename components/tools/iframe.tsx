
import React, { FC } from 'react'
// const parseHtml = (html: string) => new DOMParser().parseFromString(html, 'text/html').body.innerText;

export const IFrame: FC<{ content: string, style?: React.CSSProperties }> = ({ content, style = {} }) => {
  return <iframe style={style} srcDoc={content} />;
}

export default IFrame;