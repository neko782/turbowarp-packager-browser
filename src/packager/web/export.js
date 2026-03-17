import {setAdapter} from '../adapter';
import Packager from '../packager';
import loadProject from '../load-project';
import {downloadProject} from '../download-project';
import largeAssets from '../large-assets';
import WebAdapter from './adapter';

setAdapter(new WebAdapter());

export {
  Packager,
  loadProject,
  downloadProject,
  largeAssets
};

export default Packager;
