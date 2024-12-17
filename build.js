const esbuild = require("esbuild");
const watch = process.argv.includes("--watch");
const fs = require("fs");
const entryPoints = ["src/content.ts", "src/background.ts", "src/popup.ts"];

const buildOptions = {
  entryPoints,
  bundle: true,
  outdir: "dist",
  target: "chrome58",
  platform: "browser",
  minify: !watch,
};

esbuild
  .build(buildOptions)
  .catch(() => process.exit(1))
  .finally(() => {
    fs.copyFile("./manifest.json", "./dist/manifest.json", (err) => {
      if (err) throw err;
    });
    fs.copyFile("./popup.html", "./dist/popup.html", (err) => {
      if (err) throw err;
    });
  });
