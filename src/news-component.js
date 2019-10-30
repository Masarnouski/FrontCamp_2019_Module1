import { get } from './api.service.js'
import { styles } from './styles/news-component.css'



var chanelCodes = ['usa-today', 'CNN', 'the-verge','cnbc']

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


  function clearLinks()
  {
    var item = document.getElementById('grid');
    item.innerHTML = "";
  }

  function createlist() {
    var item = document.getElementById('dropdown-list');
    appendOptionElement(item, null, 'default', 'select...');

    chanelCodes.forEach((element) => 
    {     
        appendOptionElement(item,element,element, element);
    });
}


 function createLinks(array)
  { 
     array.forEach((element) => 
     {
        var row = document.getElementById('grid');

        row.appendChild(
            appendTextLinkToElement(
                appendImageToElement(createThumbNail(), element.urlToImage), element.url, element.title))
     })
     
  }


 function registerEvents(){
    chanelCodes.forEach(async (element) =>{
        var item = document.getElementById("dropdown-list")

        item.addEventListener("change", async function(){
        if(this.value == 'default')
            clearLinks()
        if(this.value == element){
            clearLinks()
            var news = await getNews(element);
            var links = news.articles
            createLinks(links);
        }
       })
    });
}


function appendTextLinkToElement(element,link,text)
{
    var a = document.createElement('a');
    a.innerText = text;
    a.href = link;
    element.appendChild(a);
    return element
}

function appendOptionElement(dropdownlist, id, value, innerText)
{
    var option = document.createElement('option');
    if(innerText){
        option.innerText = innerText
    }
    if(value){
        option.value = value
    }
    if(id){
        option.id = id
    }
    dropdownlist.appendChild(option);

}
function createThumbNail()
{
   var div = document.createElement('div')
   appendStyleToElement(div,'thumbnail')
   return div;
}

function appendImageToElement(element,link)
{
    var img = document.createElement('img');
    if(link){
    img.src = link;
    }
    element.appendChild(img);
    return element;
}


function appendStyleToElement(element,style)
{
    if(style){
    element.className = style;
    }
}


 createlist();
 registerEvents();

