const mockData = require("./mockData");

const index = require("../index.js");
const options = {
  data: mockData,
  filePath: "/Users/yeliang/Documents/imgcook/plugin-tmg-generate/demo",
  workspaceFolders: [
    {
      uri: {
        $mid: 1,
        fsPath: "/Users/yeliang/Documents/imgcook/plugin-tmg-generate",
        external: "file:///Users/yeliang/Documents/imgcook/plugin-tmg-generate",
        path: "/Users/yeliang/Documents/imgcook/plugin-tmg-generate",
        scheme: "file",
      },
      name: "demo",
      index: 0,
    },
  ],
  config: {
    accessId: "xx",
    dslId: 41,
    generator: ["@imgcook/generator-react"],
    plugin: ["@imgcook/plugin-images"],
    uploadUrl: "",
    value: "17679",
  },
};

index(options);
