import type {Root} from 'mdast';
import type {Transformer} from 'unified';

import {visit} from 'unist-util-visit';

export default function convertAnchor(): Transformer {
  return async (tree: Root) => {
    visit(tree, 'link', node => {
      node.url = node.url.replace(/#.*/, match => {
        return match.toLowerCase().replaceAll('%20', '-');
      });
    });
  };
}
