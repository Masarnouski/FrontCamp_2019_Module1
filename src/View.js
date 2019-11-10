
export default class View {
    constructor() {
        this.chanelCodesDropdown = document.getElementById('channel-codes-dropdown');
        this.newsSection = document.getElementById('news-section');
    }

    displayChannelCodes(chanelCodes) {
        this.createDropdownList(chanelCodes);
    }


    bindChangeChannel(handler) {
        this.chanelCodesDropdown.addEventListener("change", async (event) => {
            if (this.value == 'default')
                this.clearNewsSection();
            else {
                this.clearNewsSection();
                let news = await handler(event.target.value);
                this.formNewsSection(news.articles)
            }
        })
    }

    clearNewsSection() {
        this.newsSection.innerHTML = "";
    }

    createDropdownList(chanelCodes) {
        this.appendOptionElement(this.chanelCodesDropdown, null, 'default', 'select...');

        chanelCodes.forEach((element) => {
            this.appendOptionElement(this.chanelCodesDropdown, element, element, element);
        });
        return this.chanelCodesDropdown;
    }

    formNewsSection(articlesArray) {
        articlesArray.forEach((article) => {
            this.newsSection.appendChild(
                this.appendTextLinkToElement(
                    this.appendImageToElement(this.createDivElement('thumbnail'), article.urlToImage), article.url, article.title))
        })

    }

    appendTextLinkToElement(element, hrefLink, text) {
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

    appendOptionElement(dropdownlist, id, value, innerText) {
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
    createDivElement(id) {
        let divTag = document.createElement('div')
        this.appendStyleToElement(divTag, id)
        return divTag;
    }

    appendImageToElement(element, link) {
        let img = document.createElement('img');
        if (link) {
            img.src = link;
        }
        element.appendChild(img);
        return element;
    }


    appendStyleToElement(element, style) {
        if (style) {
            element.className = style;
        }
    }
}

