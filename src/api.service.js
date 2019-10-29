

export async function get(chanelCode)
{
    var apiKey = '4b8191106ae2451db0a9398adb05c668'
    var url = `https://newsapi.org/v1/articles?source=${chanelCode}&apiKey=${apiKey}`;
    var req = new Request(url);
    return await fetch(req).catch((error) => console.log(error))
}
