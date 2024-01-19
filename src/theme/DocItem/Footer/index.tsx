import React from 'react';
import Footer from '@theme-original/DocItem/Footer';

import Comments from '@site/src/components/Comments';

export default function FooterWrapper(): JSX.Element {
  return (
    <>
      <Footer />
      <Comments className="margin-top--lg" />
    </>
  );
}
