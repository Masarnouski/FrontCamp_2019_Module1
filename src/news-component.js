import { modalSingleton } from './error-popup/error-popup.js'
import handleError from './error-handler'
import {RequestFactoryProxy} from './requestFactoryProxy'

const chanelCodes = ['usa-today', 'CNN', 'the-verge', 'cnbc']

var requestFactoryProxy = new RequestFactoryProxy();

let getNews = async (channelCode) => {
    try {
        let options = {
            method: "GET",
            channelCode: channelCode
        };
        return await requestFactoryProxy.createRequest(options);
    }
    catch (error) {
        console.log(error);
        handleError(error.message);
    }
}


function clearNewsSection() {
    let newsSection = document.getElementById('news-section');
    newsSection.innerHTML = "";
}

function createDropdownList() {
    let chanelCodesDropdown = document.getElementById('channel-codes-dropdown');
    appendOptionElement(chanelCodesDropdown, null, 'default', 'select...');

    chanelCodes.forEach((element) => {
        appendOptionElement(chanelCodesDropdown, element, element, element);
    });
}


function formNewsSection(articlesArray) {
    articlesArray.forEach((article) => {
        let newsSection = document.getElementById('news-section');

        newsSection.appendChild(
            appendTextLinkToElement(
                appendImageToElement(createDivElement('thumbnail'), article.urlToImage), article.url, article.title))
    })

}


function registerOnDropDownChangeEvent() {
    chanelCodes.forEach(async (chanelCode) => {
        let chanelCodesDropdown = document.getElementById("channel-codes-dropdown")

        chanelCodesDropdown.addEventListener("change", async function () {
            if (this.value == 'default')
                clearNewsSection()
            if (this.value == chanelCode) {
                clearNewsSection()

                var news = await getNews(chanelCode);
                if (news) {
                    let articles = news.articles;
                    formNewsSection(articles);
                }
            }
        })
    });
}


function appendTextLinkToElement(element, hrefLink, text) {
    let aTag = document.createElement('a');
    if (text) {
        aTag.innerText = text;
    }
    if (hrefLink) {
        aTag.href = hrefLink;
    }
    element.appendChild(aTag);
    return element
}

function appendOptionElement(dropdownlist, id, value, innerText) {
    let option = document.createElement('option');
    if (innerText) {
        option.innerText = innerText
    }
    if (value) {
        option.value = value
    }
    if (id) {
        option.id = id
    }
    dropdownlist.appendChild(option);

}
function createDivElement(id) {
    let divTag = document.createElement('div')
    appendStyleToElement(divTag, id)
    return divTag;
}

function appendImageToElement(element, link) {
    let img = document.createElement('img');
    if (link) {
        img.src = link;
    }
    element.appendChild(img);
    return element;
}


function appendStyleToElement(element, style) {
    if (style) {
        element.className = style;
    }
}


createDropdownList();
registerOnDropDownChangeEvent();

