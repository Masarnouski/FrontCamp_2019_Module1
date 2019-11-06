export default class ModuleLoader{
    async load(moduleName){
        switch (moduleName) {
            case "ErrorHandler": {
                const { default: errorHandler } = await import(/* webpackChunkName: "error-handler" */ './error-handler')
                return errorHandler; break;
            }
        }
    }
}