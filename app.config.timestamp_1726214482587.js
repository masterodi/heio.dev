// app.config.js
import { macaronVitePlugin } from "@macaron-css/vite";
import { defineConfig } from "@solidjs/start/config";
var app_config_default = defineConfig({
  vite: {
    plugins: [macaronVitePlugin()]
  }
});
export {
  app_config_default as default
};
