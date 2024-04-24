const jsdom = require("jsdom")
const { JSDOM } = jsdom

module.exports = {
  random() {
    const segment = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }
    return `${segment()}-${segment()}-${segment()}`
  },
  getReadingTime(text) {
    const wordsPerMinute = 200
    const numberOfWords = text.split(/\s/g).length
    const readingTime = Math.ceil(numberOfWords / wordsPerMinute)
    if (readingTime > 1) {
      return `${readingTime} minuters läsning`
    } else {
      return `${readingTime} minuts läsning`
    }
  },
  getPageLinks(page) {
    const DOM = new JSDOM(page, {
      resources: "usable",
    })
    const document = DOM.window.document

    const articleLinks = [...document.querySelectorAll("a")]
    if (articleLinks.length) {
      return articleLinks
        .filter((link) => link.href.startsWith("http"))
        .map((link) => {
          return {
            url: link.href,
            title: link.textContent,
          }
        })
        .filter(
          (link, index, self) =>
            index === self.findIndex((t) => t.title === link.title)
        )
    }
  },
}
