import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import Giscus from '@giscus/react';

export default function FooterWrapper(): JSX.Element {
  return (
    <>
      <Footer />
      <div className='margin-top--lg'>
        <Giscus
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
      </div>
    </>
  );
}
