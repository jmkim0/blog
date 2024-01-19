import React from 'react';
import clsx from 'clsx';
import DocItem from '@theme-original/DocItem';
import Giscus from '@giscus/react';
import type {Props} from '@theme/DocItem';

import styles from '@docusaurus/theme-classic/src/theme/DocItem/Layout/styles.module.css';

export default function DocItemWrapper(props: Props): JSX.Element {
  return (
    <>
      <DocItem {...props} />
      <div className={clsx('margin-top--lg', styles.docItemCol)}>
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
