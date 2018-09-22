import renderTree from './renderTree';
import renderPlain from './renderPlain';
import renderJson from './renderJson';

const renders = {
  tree: renderTree,
  plain: renderPlain,
  json: renderJson,
};

const getRender = format => renders[format];

export default getRender;
