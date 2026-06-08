// Nobridge brand mark, bundled in the front overlay (public/images/). Full URL
// because getImageAbsoluteURI prefixes relative paths with /files. Shown as the
// workspace brand whenever a workspace has no uploaded logo (ours is unset).
// Versioned filename to defeat browser/CDN caching of the old logo at the
// previous path (/images/nobridge-logo.png was cached for 24h). Bump the suffix
// whenever the logo art changes so clients always fetch the new file.
export const DEFAULT_WORKSPACE_LOGO =
  'https://heydeal.co/images/nobridge-logo-2.png';
