import renderTree from './renderTree';
import renderPlain from './renderPlain';

const renders = {
  tree: renderTree,
  plain: renderPlain,
};

const getRender = format => renders[format];

export default getRender;
