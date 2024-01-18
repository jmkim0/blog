import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import {useBlogPost} from '@docusaurus/theme-common/internal';
import Giscus from '@giscus/react';

export default function BlogPostItemWrapper(props) {
  const {isBlogPostPage} = useBlogPost();

  return (
    <>
      <BlogPostItem {...props} />
      {isBlogPostPage && (
        <Giscus
          id='blog-comments'
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
      )}
    </>
  );
}
