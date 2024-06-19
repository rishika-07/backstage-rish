import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { frontendPluginPlugin, FrontendPluginPage } from '../src/plugin';

createDevApp()
  .registerPlugin(frontendPluginPlugin)
  .addPage({
    element: <FrontendPluginPage />,
    title: 'Root Page',
    path: '/frontend-plugin',
  })
  .render();
