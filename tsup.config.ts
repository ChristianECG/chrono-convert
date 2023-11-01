import { defineConfig } from "tsup";

const config = defineConfig({
  entry: ["src/index.ts"],
  clean: true,
  outDir: "dist",
  sourcemap: true,
  format: ["cjs", "esm"],
  minify: true,
  treeshake: true,
  dts: true,
});

export default config;
