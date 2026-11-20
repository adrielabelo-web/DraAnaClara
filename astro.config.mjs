import { defineConfig } from "astro/config";

// Saída estática. Sem framework de interface, sem Tailwind.
export default defineConfig({
  site: "https://exemplo.com.br", // PREENCHER quando houver domínio
  trailingSlash: "always",
  build: { inlineStylesheets: "always" },
  devToolbar: { enabled: false },
});
