import React from 'react';
import DocItem from '@theme-original/DocItem';
import Giscus from '@giscus/react';

export default function DocItemWrapper(props) {
  return (
    <>
      <DocItem {...props} />
      <Giscus
        className="docItemCol"
        repo="jmkim0/blog"
        repoId="R_kgDOK-1fHg"
        category="giscus"
        categoryId="DIC_kwDOK-1fHs4CcgWw"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emit-metadata="0"
        inputPosition="bottom"
        theme="preferred_color_scheme"
        lang="ko"
        loading="lazy"
      />
    </>
  );
}
