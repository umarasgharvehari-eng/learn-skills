
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/learn-skills/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/learn-skills"
  },
  {
    "renderMode": 2,
    "redirectTo": "/learn-skills",
    "route": "/learn-skills/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 887, hash: 'd7abefe88b921af4f9e11530553e1cb07ce66288555d8ee6cd963d47f9f39343', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 962, hash: '342b0bc5e2083f2f6d4f828a3abb20e31647cf775bccf4d28e0ba53d1a682a5e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 13642, hash: 'f8cff0103dc580aca8b18eecafbdb1c61ea0a04e96cadaf94c154587d60bae68', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-B2QZXQ6Q.css': {size: 5192, hash: 'auuGMJig/cM', text: () => import('./assets-chunks/styles-B2QZXQ6Q_css.mjs').then(m => m.default)}
  },
};
