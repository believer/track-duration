import commonjs from "@rollup/plugin-commonjs";
import filesize from "rollup-plugin-filesize";
import copier from "rollup-plugin-copier";
import pkg from "./package.json";

export default [
  {
    input: "src/TrackDuration.bs.js",
    output: { file: pkg.main, format: "cjs", exports: "named" },
    plugins: [
      commonjs(),
      filesize(),
      copier({
        items: [
          {
            src: "src/index.d.ts",
            dest: "dist/index.d.ts",
            createPath: true,
          },
        ],
      }),
    ],
  },
];
