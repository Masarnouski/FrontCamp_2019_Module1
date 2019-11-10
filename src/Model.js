import NewsService from './news-component/news-service'
import  ModuleLoader  from './module-loader'


const channelCodes = ['usa-today', 'CNN', 'the-verge', 'cnbc']

export default class Model {
    constructor() {
        this.newsService = new NewsService(); 
        this.loader = new ModuleLoader();
        this.news = this.getNews();
        this.channelCodes = channelCodes || [];
    }
    
    async getNews(channelCode){
        try {
           return await this.newsService.get(channelCode)
        }
        catch (error) {
            var errorHandler = await this.loader.load("ErrorHandler");
            errorHandler(error.message);
        }
    }

  }


  