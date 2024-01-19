import Giscus from '@giscus/react';

type Props = {
  className: string;
}

export default function Comments({className}: Props): JSX.Element {
  return (
    <div className={className}>
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
  );
}
