module.exports = require("./src/index");

let a = {
  data: {
    moduleData: {
      id: 17679,
      name: "my-comp",
      cover:
        "https://img.alicdn.com/tfs/TB1mkjeqlr0gK0jSZFnXXbRRXXa-1404-1292.png",
    },
    code: {
      panelDisplay: [
        {
          panelName: "Index.jsx",
          panelValue:
            "'use strict';\nimport { createElement, useState, useEffect, memo } from 'rax';\nimport View from 'rax-view';\nimport Picture from 'rax-picture';\n\nimport styles from './index.css';\n\nexport default memo(props => {\n  return (\n    <View style={styles.mod}>\n      <View style={styles.itemWrap}>\n        <Picture\n          style={styles.item}\n          source={{ uri: './images/img_17679_0_1.png' }}\n          autoScaling={false}\n        />\n        <Picture\n          style={styles.logo}\n          source={{ uri: './images/img_17679_0_0.png' }}\n          autoScaling={false}\n        />\n      </View>\n    </View>\n  );\n});\n",
          panelType: "js",
          panelImports: [
            {
              import: "import View from 'rax-view'",
              package: "rax-view",
              version: "^1.1.0",
            },
            {
              import: "import Picture from 'rax-picture'",
              package: "rax-picture",
              version: "*",
            },
          ],
          panelPath:
            "/Users/yeliang/Documents/imgcook/plugin-tmg-generate/demo/my-comp/components/Index/index.jsx",
        },
        {
          panelName: "Index.css",
          panelValue:
            ".mod {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  justify-content: center;\n  width: 176rpx;\n  height: 154rpx;\n}\n.itemWrap {\n  display: flex;\n  position: relative;\n  align-items: center;\n  flex-direction: row;\n  justify-content: center;\n  width: 176rpx;\n  height: 154rpx;\n}\n.item {\n  position: absolute;\n  top: 0rpx;\n  left: 0rpx;\n  opacity: 0.5;\n  width: 176rpx;\n  height: 154rpx;\n}\n.logo {\n  position: relative;\n  opacity: 0.5;\n  margin-top: 5rpx;\n  width: 139rpx;\n  height: 109rpx;\n}\n",
          panelType: "css",
          panelPath:
            "/Users/yeliang/Documents/imgcook/plugin-tmg-generate/demo/my-comp/components/Index/index.css",
        },
      ],
      noTemplate: true,
      codeDiff: true,
    },
  },
  filePath: "/Users/yeliang/Documents/imgcook/plugin-tmg-generate/demo",
  config: {
    accessId: "xx",
    dslId: 41,
    generator: ["@imgcook/generator-react"],
    plugin: ["@imgcook/plugin-images"],
    uploadUrl: "",
    value: "17679",
  },
  result: {},
  workspaceFolders: [
    {
      uri: {
        $mid: 1,
        fsPath: "/Users/yeliang/Documents/imgcook/plugin-tmg-generate/demo",
        external:
          "file:///Users/yeliang/Documents/imgcook/plugin-tmg-generate/demo",
        path: "/Users/yeliang/Documents/imgcook/plugin-tmg-generate/demo",
        scheme: "file",
      },
      name: "demo",
      index: 0,
    },
  ],
  workspaceFolder: "/Users/yeliang/Documents/imgcook/plugin-tmg-generate/demo",
};
