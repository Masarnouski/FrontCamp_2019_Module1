
export default class HttpRequest
{
    constructor(options)
    {  
        this.options = options;
        this.url = `${options.baseUrl}${options.path}`
    }
}