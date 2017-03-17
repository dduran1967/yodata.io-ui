import {mapKeys} from 'lodash'
import {ActionRoot, ActionView} from '../action'
import {ReactionRoot} from '../reaction'
import {StreamList, StreamView} from '../stream'
import {User, UserProfile} from '../user'
import {Home} from '../component'

export const sidebarRoutes = [
  {
    name:      'home',
    path:      '/',
    component: Home,
    icon:      'home',
    label:     'Home'
  },
  {
    name:      'stream',
    path:      '/stream',
    component: StreamList,
    icon:      'stream',
    label:     'Streams'
  },
  {
    name:      'action',
    path:      '/action',
    component: ActionRoot,
    icon:      'action',
    label:     'Actions',
  },
  {
    name:      'reaction',
    path:      '/reaction',
    component: ReactionRoot,
    icon:      'reaction',
    label:     'Reactions'
  },
  {
    name:      'user',
    path:      '/user',
    component: User,
    icon:      'user',
    label:     'User'
  },
]

export const innerRoutes = [
  {
    name:      'action/view',
    path:      '/action/view/*id',
    component: ActionView
  },
  {
    name:      'stream/view',
    path:      '/stream/view/:name',
    component: StreamView
  },
  {
    name:      'user/profile',
    path:      '/user/profile',
    component: UserProfile
  },
];

const routes = [...sidebarRoutes, ...innerRoutes];

export const routeMap = mapKeys(routes, 'name');

export default routes;