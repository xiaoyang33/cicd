import { ConfigEnv, defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

const resolve = (dir: string) => path.resolve(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig((config: ConfigEnv) => {
  const { command } = config;
  console.log(config, command);
  return {
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    server: {
      port: 8001
    },
    resolve: {
      alias: {
        '@': resolve('src'),
        '@t': resolve('typings')
      }
    },
    esbuild: {
      drop: ['debugger']
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/mixin.scss";'
        }
      }
    }
  };
});
