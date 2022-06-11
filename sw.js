import { skipWaiting, clientsClaim } from 'workbox-core';
skipWaiting();
clientsClaim();

// must include following lines when using inject manifest module from workbox
// https://developers.google.com/web/tools/workbox/guides/precache-files/workbox-build#add_an_injection_point
const WB_MANIFEST = self.__WB_MANIFEST;

import * as googleAnalytics from 'workbox-google-analytics';

googleAnalytics.initialize({
  parameterOverrides: {
    cd1: 'offline',
  },
});