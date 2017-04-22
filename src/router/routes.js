import mapKeys from 'lodash/mapKeys'
import root from 'window-or-global'
import RestApiRoot from '../apidocs/restApiRoot.js'
import ChannelRoot from '../channel/ChannelRoot'
import ChannelView from '../channel/ChannelView'
import {Home} from '../component'
import DataBrowser from '../component/DataBrowser'
import ThrumeRoot from '../thrume/thrume-root'
import TypesRoot from '../types/TypesRoot'
import TypeView from '../types/TypeView'
import {UserRoot} from '../user'
import Reactions from '../reaction/ReactionRoot.js';


export const sidebarRoutes = [
  {
    key:       'home',
    name:      'home',
    path:      '/',
    label:     'Home',
    component: Home,
    icon:      'home',
  },
  {
    key:       'schema',
    name:      'schema',
    path:      '/schema',
    label:     'Schema',
    component: TypesRoot,
    icon:      'code',
  },
  {
    key:       'thrume',
    name:      'thrume',
    path:      '/thrume',
    label:     'Actions',
    component: ThrumeRoot,
    icon:      'feed',
  },
  {
    key:       'reactions',
    name:      'reactions',
    path:      '/reactions',
    label:     'Reactions',
    component: Reactions,
    icon:      'feed',
  },
  {
    key:       'channel',
    name:      'channel',
    path:      '/channel',
    label:     'Channels',
    component: ChannelRoot,
    icon:      'hashtag',
  },
  {
    key:       'user',
    name:      'user',
    path:      '/user',
    label:     'User',
    component: UserRoot,
    icon:      'user',
  },
  {
    key:       'api',
    name:      'api',
    path:      '/api',
    label:     'REST API',
    component: RestApiRoot,
    icon:      'code',
  },

];

export const innerRoutes = [
  {
    name:      'channel/view',
    path:      '/channel/item/:key',
    component: ChannelView,
  },
  {
    name:      'types/view',
    path:      '/schema/:id',
    component: TypeView,
  },
  {
    name:      'databrowser',
    path:      '/u/*path',
    component: DataBrowser
  }
];

const routes = [...sidebarRoutes, ...innerRoutes];

export const routeMap = mapKeys(routes, 'name');

export default routes;

root.routes = routes;
