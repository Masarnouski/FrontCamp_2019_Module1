import HttpRequest from './HttpRequest.js';

export class RequestFactory {
    createRequest(options) {
        switch (options.method) {
            case "GET":
                this.request = new HttpRequest(options);
                break;
            case "POST":
                this.request =  new HttpRequest(options);
                break;
            case "PUT":
                this.request =  new HttpRequest(options);
                break;
        }
        return this.request;
    };
}