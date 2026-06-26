import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { RsdoctorRspackPlugin } from "@rsdoctor/rspack-plugin";

const analyze = process.env.ANALYZE;
const analyzerMode = analyze ? "static" : "json";

export default defineConfig({
  plugins: [pluginReact()],
  output: {
    cleanDistPath: true,
    sourceMap: true,
  },
  tools: {
    rspack: {
      plugins: [
        new BundleAnalyzerPlugin({
          analyzerMode,
          generateStatsFile: analyzerMode === "json",
          openAnalyzer: analyzerMode === "static",
          reportFilename:
            analyzerMode === "json" ? "report.json" : "report.html",
        }),
        process.env.RSDOCTOR === "true" &&
          new RsdoctorRspackPlugin({
            // plugin options
          }),
      ],
    },
  },
});
