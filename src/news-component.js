import { get } from './api.service.js'
import { styles } from './styles/news-component.css'



var chanelCodes = ['usa-today', 'CNN', 'the-verge']

async function getNews(chanelCode)
{
    var response = await get(chanelCode)

    if (response.ok) {
        let json = await response.json();
            return json;
        } else {
            alert("HTTP error: " + response.status);
    }
}


 function createLinks(array)
  { 
     array.forEach((element) => 
     {
        var item = document.getElementById('col2');
        var li = document.createElement('li');
        var img = document.createElement('img');
        var a = document.createElement('a');
        img.src = element.urlToImage;
        a.innerText = element.title;
        a.href = element.url;
        li.appendChild(img);
        li.appendChild(a);
        item.appendChild(li);
     })
     
  }

  function clearLinks()
  {
    var item = document.getElementById('col2');
    item.innerHTML = "";

  }
function createlist() {
    chanelCodes.forEach((element) => 
    {
        var item = document.getElementById('col1');
        var li = document.createElement('li'),
        txt = document.createTextNode(element);
        li.id = element
        li.appendChild(txt);
        item.appendChild(li);
    });
}



 function registerEvents(){
    chanelCodes.forEach(async (element) =>{
        var item = document.getElementById(element)
        item.addEventListener("click", async function(){
        clearLinks()
        var news = await getNews(element);
        var links = news.articles.slice(0,10)
        createLinks(links);
       })
    });
}


 createlist();
 registerEvents();

