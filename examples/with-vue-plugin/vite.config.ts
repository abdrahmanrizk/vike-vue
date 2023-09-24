import vue from '@vitejs/plugin-vue'
import ssr from 'vike/plugin'
import { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [
    ssr({ prerender: true }),
    vue({
      include: [/\.vue$/, /\.md$/]
    })
  ]
}

export default config
