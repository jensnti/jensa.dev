const elasticlunr = require("elasticlunr")

const search = (collection) => {
  // what fields we'd like our index to consist of
  let index = elasticlunr(function () {
    this.setRef("id")
    this.addField("summary")
    this.addField("tags")
    this.addField("title")
    this.addField("category")
  })

  // loop through each page and add it to the index
  collection.forEach((page) => {
    const summary = page.data.summary ? page.data.summary : ""
    let tags = page.data.tags ? page.data.tags.toString() : ""
    index.addDoc({
      id: page.url,
      tags: tags,
      summary: summary,
      title: page.data.title,
      category: page.data.category,
    })
  })

  return index.toJSON()
}

module.exports = { searchFilter: search }
