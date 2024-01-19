import Giscus from '@giscus/react';
import {useColorMode} from '@docusaurus/theme-common';

type Props = {
  className: string;
}

export default function Comments({className}: Props): JSX.Element {
  const {colorMode, setColorMode} = useColorMode();

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
        theme={colorMode}
        lang="ko"
        loading="lazy"
      />
    </div>
  );
}
