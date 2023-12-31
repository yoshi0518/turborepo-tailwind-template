const buildSuffix = (url?: {query?: Record<string, string>, hash?: string}) => {
  const query = url?.query;
  const hash = url?.hash;
  if (!query && !hash) return '';
  const search = query ? `?${new URLSearchParams(query)}` : '';
  return `${search}${hash ? `#${hash}` : ''}`;
};

export const pagesPath = {
  "env": {
    $url: (url?: { hash?: string }) => ({ pathname: '/env' as const, hash: url?.hash, path: `/env${buildSuffix(url)}` })
  },
  "i18n": {
    $url: (url?: { hash?: string }) => ({ pathname: '/i18n' as const, hash: url?.hash, path: `/i18n${buildSuffix(url)}` })
  },
  "local_storage": {
    $url: (url?: { hash?: string }) => ({ pathname: '/local-storage' as const, hash: url?.hash, path: `/local-storage${buildSuffix(url)}` })
  },
  "ui": {
    $url: (url?: { hash?: string }) => ({ pathname: '/ui' as const, hash: url?.hash, path: `/ui${buildSuffix(url)}` })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash, path: `/${buildSuffix(url)}` })
};

export type PagesPath = typeof pagesPath;

export const staticPath = {
  icon_192x192_png: '/icon-192x192.png',
  icon_256x256_png: '/icon-256x256.png',
  icon_384x384_png: '/icon-384x384.png',
  icon_512x512_png: '/icon-512x512.png',
  main_js: '/main.js',
  manifest_json: '/manifest.json',
  robots_txt: '/robots.txt',
  sw_js: '/sw.js'
} as const;

export type StaticPath = typeof staticPath;
