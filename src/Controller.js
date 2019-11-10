export default class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
        this.onChannelCodeChanged(this.model.channelCodes);

        this.view.bindChangeChannel(async (channelCode)=>
        {
             return await this.model.getNews(channelCode)
        })
    }

     onChannelCodeChanged (codes) {
        this.view.displayChannelCodes(codes)
     }
}