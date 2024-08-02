// @ts-check

/** @type {import("syncpack").RcFile} */
module.exports = {
  dependencyTypes: ['dev', 'prod', 'peer'],
  semverRange: '^',
  source: ['package.json', 'apps/*/package.json', 'packages/*/package.json'],
  versionGroups: [
    // {
    //   label:
    //     'Internal config packages should be pinned to "*" (meaning any version is acceptable)',
    //   packages: ['**'],
    //   dependencies: [
    //     'config-eslint',
    //     'config-tailwind',
    //     'confing-ts',
    //     'ui-shadcn',
    //   ],
    //   dependencyTypes: ['dev', 'prod', 'peer'],
    //   pinVersion: '*',
    // },
    // {
    //   semverRange: '^',
    //   label: 'use react 19 in apps/web and apps/docs',
    //   packages: ['@app/web', '@app/docs'],
    //   dependencies: ['react', 'react-dom', 'next'],
    //   isIgnored: true,
    // },
    // {
    //   // Banned
    //   label: 'Please use lodash instead of underscore',
    //   packages: ['**'],
    //   dependencies: ['underscore'],
    //   isBanned: true,
    // },
    // {
    //   // Pinned
    //   label: "Use '*' under 'peerDependencies' everywhere",
    //   packages: ['**'],
    //   dependencies: ['**'],
    //   dependencyTypes: ['peer'],
    //   pinVersion: '*',
    // },
  ],
  // semverGroups: [
  //   {
  //     semverRange: '^',
  //     label: 'use react 19 in apps/web and apps/docs',
  //     packages: ['@app/web', '@app/docs'],
  //     dependencies: ['react', 'react-dom', 'next'],
  //     isIgnored: true,
  //   },
  //   {
  //     semverRange: '^',
  //     label: 'use react 18 in apps/storybook and other packages/**',
  //     packages: ['@repo/**', '@app/storybook'],
  //     dependencies: ['react', 'react-dom'],
  //   },
  // ],
}
