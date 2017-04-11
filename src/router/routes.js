import mapKeys from 'lodash/mapKeys';
import root from 'window-or-global';
import {ActionRoot, ActionView} from '../action';
import RestApiRoot from '../apidocs/restApiRoot.js';
import ChannelRoot from '../channel/ChannelRoot';
import ChannelView from '../channel/ChannelView';
import {Home} from '../component';
import {ReactionRoot, ReactionView} from '../reaction';
import {UserRoot} from '../user';
import Debug from '../component/Debug';
import TypesRoot from '../types/TypesRoot';
import TypeView from '../types/TypeView';

export const sidebarRoutes = [
  {
    key: 'home',
    name: 'home',
    path: '/',
    component: Home,
    icon: 'home',
    label: 'Home',
  },
  {
    key: 'channel',
    name: 'channel',
    path: '/channel',
    component: ChannelRoot,
    icon: 'hashtag',
    label: 'Channels',
  },
  {
    key: 'types',
    name: 'types',
    path: '/types',
    component: TypesRoot,
    icon: 'code',
    label: 'Types',
  },
  {
    key: 'action',
    name: 'action',
    path: '/action',
    component: ActionRoot,
    icon: 'lightning',
    label: 'Actions',
  },
  {
    key: 'reaction',
    name: 'reaction',
    path: '/reaction',
    component: ReactionRoot,
    icon: 'rocket',
    label: 'Reactions',
  },
  {
    key: 'user',
    name: 'user',
    path: '/user',
    component: UserRoot,
    icon: 'user',
    label: 'User',
  },
  {
    key: 'api',
    name: 'api',
    path: '/api',
    component: RestApiRoot,
    icon: 'code',
    label: 'REST API',
  },
];

export const innerRoutes = [
  {
    name: 'action/view',
    path: '/action/view/*id',
    component: ActionView,
  },
  {
    name: 'channel/view',
    path: '/channel/item/:key',
    component: ChannelView,
  },
  {
    name: 'reactionView',
    path: '/reaction/view/*id',
    component: ReactionView,
  },
  {
    name: 'types/view',
    path: '/types/:id',
    component: TypeView,
  },
];

const routes = [...sidebarRoutes, ...innerRoutes];

export const routeMap = mapKeys(routes, 'name');

export default routes;

root.routes = routes;
