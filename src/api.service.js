
import { apiKey } from '../app-settings/app-settings'

export default async function get(chanelCode) {
    var url = `https://newsapi.org/v1/articles?source=${chanelCode}&apiKey=${apiKey}`;
    var req = new Request(url);
    return await fetch(req).catch((error) => console.log(error))
}
