const path = require('path')
const { nodeExternalsPlugin } = require('esbuild-node-externals')

module.exports = {
  entryPoints: [path.resolve(__dirname, '../entrypoints/index.ts')],
  outdir: path.resolve(__dirname, '../'),
  platform: 'node',
  target: 'node16',
  bundle: true,
  plugins: [nodeExternalsPlugin()],
  logLevel: 'info'
}
