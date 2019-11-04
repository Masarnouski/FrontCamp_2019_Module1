import { RequestFactory } from './requestFactory'

export class RequestFactoryProxy {
    createRequest(options) {
        console.log(options);

        if (!this.requestFactory) {
            this.requestFactory = new RequestFactory();
        }
        return this.requestFactory.createRequest(options);
    }
}