import { get, post, put } from './api.service.js'

export class RequestFactory {
    createRequest(options) {
        switch (options.method) {
            case "GET":
                this.request = get(options.channelCode);
                break;
            case "POST":
                this.request = post(options.object);
                break;
            case "PUT":
                this.request = put(options.id, options.object);
                break;
        }
        return this.request;
    };
}