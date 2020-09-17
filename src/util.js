const fs = require("fs-extra");
const path = require("path");
const { PROJECT_TYPE } = require("./constant");

/**
 * 计算项目类型
 * @param {*} projectPath
 */
function calcuProjectType(projectPath) {
  const projectBuildPath = path.join(projectPath, "build.json");
  const projectABCPath = path.join(projectPath, "abc.json");
  if (fs.existsSync(projectBuildPath)) {
    try {
      const jsonString = fs.readFileSync(projectBuildPath).toString();
      if (jsonString.indexOf("@ali/build-plugin-pegasus-base") > -1) {
        return PROJECT_TYPE.Rax1TBEMod;
      }
    } catch (e) {
      console.error("解析 build.json 出错");
    }
  } else if (fs.existsSync(projectABCPath)) {
    try {
      const json = JSON.parse(fs.readFileSync(projectABCPath).toString());
      if (json.builder && typeof json.builder === "string") {
        if (json.type === "tbe-mod") {
          return PROJECT_TYPE.Rax1TBEMod;
        }
      }
    } catch (e) {
      console.error("解析 abc.json 出错");
    }
  }
  return PROJECT_TYPE.Other;
}

/**
 * 计算要导出的 code、package.json、app.json 文件路径
 * @param {*} workspaceFolder
 * @param {*} filePath
 * @param {*} pageName
 * @param {*} projectType
 */
function calcuExportDirectory(
  workspaceFolder,
  filePath,
  pageName,
  projectType
) {
  let exportDirs = {
    code: path.resolve(filePath, pageName),
    packagejson: path.resolve(workspaceFolder, "package.json"),
    appjson: "",
  };

  switch (projectType.type) {
    case PROJECT_TYPE.Rax1TBEMod.type: {
      // pageDir 获取默认的模块生成路径，模块为src/mobile/components, 组件为src/
      // 先判断mobile文件夹是否存在，存在就是天马模块。不然就是天马组件
      // 天马模块目录
      let pageDir = path.resolve(workspaceFolder, "src/mobile");
      if (!fs.pathExistsSync(pageDir)) {
        // 天马组件目录
        pageDir = path.resolve(workspaceFolder, "src");
      } else {
        pageDir = path.resolve(pageDir, "components", pageName);
      }
      // 当打开imgcook编辑的workspace文件夹为项目文件根目录或正好是生成的默认路径时，生成的代码路径直接使用。
      if (workspaceFolder === filePath || pageDir === filePath) {
        exportDirs.code = pageDir;
      } else {
        // 否则直接在路径下创建
        exportDirs.code = path.resolve(filePath);
      }
      break;
    }
    default: {
      // 默认当成模块导出
      exportDirs.code = path.resolve(filePath, pageName);
      break;
    }
  }
  return exportDirs;
}

/**
 * 根据项目类型来优化导出文件格式
 * @param {*} fileType
 * @param {*} isTS
 * @param {*} projectType
 */
function optiFileType(workspaceFolder, fileType, projectType) {
  const isTSProject = fs.pathExistsSync(
    path.join(workspaceFolder, "tsconfig.json")
  );
  if (isTSProject) {
    if (fileType === "js") {
      return "ts";
    }
    if (fileType === "jsx") {
      return "tsx";
    }
  } else if (
    ["js", "jsx"].indexOf(fileType) > -1 &&
    projectType.type !== "other"
  ) {
    return projectType.jsType;
  }
  return fileType;
}

/**
 * 计算工程目录信息
 * @param {*} workspaceFolders
 * @param {*} filePath
 */
function calcuWorkspaceInfo(workspaceFolders, filePath) {
  let result = null;
  if (Array.isArray(workspaceFolders)) {
    try {
      for (let workspace of workspaceFolders) {
        const { uri = {}, name } = workspace;
        const { fsPath } = uri;
        if (filePath.indexOf(fsPath) > -1) {
          result = {};
          result.workspaceFolder = path.resolve(fsPath);
          result.workspaceName = name;
          result.filePath = filePath;
          break;
        }
      }
    } catch (e) {}
  }
  if (!result) {
    result = {};
    result.workspaceFolder = filePath;
    result.workspaceName = filePath.substr(filePath.lastIndexOf("/") + 1);
    result.filePath = filePath;
  }
  return result;
}

module.exports = {
  PROJECT_TYPE,
  calcuProjectType,
  calcuWorkspaceInfo,
  calcuExportDirectory,
  optiFileType,
};
