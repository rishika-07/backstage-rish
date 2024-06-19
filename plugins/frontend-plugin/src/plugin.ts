import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const frontendPluginPlugin = createPlugin({
  id: 'frontend-plugin',
  routes: {
    root: rootRouteRef,
  },
});

export const FrontendPluginPage = frontendPluginPlugin.provide(
  createRoutableExtension({
    name: 'FrontendPluginPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
