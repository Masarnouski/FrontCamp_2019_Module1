import { apiKey, newsServiceBaseUrl } from '../../app-settings/app-settings'
import {RequestFactoryProxy} from '../http-core/requestFactoryProxy'

export default class NewsService
{
    constructor(){
        this.requestFactoryProxy = new RequestFactoryProxy();
    }

    async doRequest(request){
        let response = await fetch(request.url, {...request.options})
        if (response.ok) {
            let json = await response.json();
            if (json.articles.length < 10) {
                throw new Error('Too less results');
            }
            return json;
        }
    }

    async get(channelCode)
    {   
        let path = `articles?source=${channelCode}&apiKey=${apiKey}`;

        let options = {
            baseUrl:newsServiceBaseUrl,
            path: path,
            method: 'GET'
        };
        var request = this.requestFactoryProxy.createRequest(options);

        return await this.doRequest(request);
    }
}