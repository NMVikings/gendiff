import renderTree from './renderTree';

const renders = {
  tree: renderTree,
};

const getRender = format => renders[format];

export default getRender;
