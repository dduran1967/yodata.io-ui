import mapKeys from 'lodash/mapKeys'
import root from 'window-or-global'
import {ActionRoot, ActionView} from '../action'
import ChannelRoot from '../channel/ChannelRoot'
import ChannelView from '../channel/ChannelView'
import {Home} from '../component'
import {ReactionRoot, ReactionView} from '../reaction'
import {UserRoot} from '../user'

export const sidebarRoutes = [
  {
    name:      'home',
    path:      '/',
    component: Home,
    icon:      'home',
    label:     'Home'
  },
  {
    name:      'channel',
    path:      '/channel',
    component: ChannelRoot,
    icon:      'hashtag',
    label:     'Channels'
  },
  {
    name:      'action',
    path:      '/action',
    component: ActionRoot,
    icon:      'lightning',
    label:     'Actions',
  },
  {
    name:      'reaction',
    path:      '/reaction',
    component: ReactionRoot,
    icon:      'rocket',
    label:     'Reactions'
  },
  {
    name:      'user',
    path:      '/user',
    component: UserRoot,
    icon:      'user',
    label:     'User'
  }
]

export const innerRoutes = [
  {
    name:      'action/view',
    path:      '/action/view/*id',
    component: ActionView
  },
  {
    name:      'channel/view',
    path:      '/channel/item/:key',
    component: ChannelView
  },
  {
    name:      'reactionView',
    path:      '/reaction/view/*id',
    component: ReactionView
  },
];

const routes = [...sidebarRoutes, ...innerRoutes];

export const routeMap = mapKeys(routes, 'name');

export default routes;

root.routes = routes;