import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import {useBlogPost} from '@docusaurus/theme-common/internal';
import Giscus from '@giscus/react';
import type {Props} from '@theme/BlogPostItem';

export default function BlogPostItemWrapper(props: Props): JSX.Element {
  const {isBlogPostPage} = useBlogPost();

  return (
    <>
      <BlogPostItem {...props} />
      {isBlogPostPage && (
        <div className="margin-top--lg">
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
      )}
    </>
  );
}
