
import { apiKey } from '../app-settings/app-settings'

export async function get(chanelCode) {
    var url = `https://newsapi.org/v1/articles?source=${chanelCode}&apiKey=${apiKey}`;
    var req = new Request(url);
    let response = await fetch(req);
    if (response.ok) {
        let json = await response.json();
        if(json.articles.length < 10)
        {
            throw new Error('Too less results');
        }
        return json;
    }
}

export async function post(object) {
    console.log(object);
 }

export async function put(id, object) {
    console.log(id);
    console.log(object);
}