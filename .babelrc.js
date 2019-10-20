module.exports = {
  presets: ['next/babel', '@zeit/next-typescript/babel'],
  plugins: [
    ['styled-components', { ssr: true }],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@components': './components',
          '@hooks': './hooks',
          '@modules': './modules',
          '@test': './test',
          '@theme': './theme',
          '@utils': './utils',
        },
      },
    ],
  ],
}
