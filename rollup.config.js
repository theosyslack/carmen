import typescript from "rollup-plugin-typescript";
import commonjs from "rollup-plugin-commonjs";
import shebang from "rollup-plugin-shebang";
import json from "rollup-plugin-json";

export default {
  input: "./src/index.ts",
  output: {
    format: "cjs",
    dir: "dist/"
  },
  plugins: [
    json(),
    commonjs({
      // non-CommonJS modules will be ignored, but you can also
      // specifically include/exclude files
      include: "node_modules/**" // Default: undefined
    }),
    typescript()
  ]
};
