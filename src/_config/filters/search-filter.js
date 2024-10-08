import elasticlunr from "elasticlunr"

const searchFilter = async (collection) => {
  // what fields we'd like our index to consist of
  let index = elasticlunr(function () {
    this.setRef("id")
    this.addField("summary")
    this.addField("tags")
    this.addField("title")
    this.addField("category")
  })

  // loop through each page and add it to the index
  // collection.forEach((page) => {
  //   const summary = page.template.frontMatter.data.summary
  //     ? page.template.frontMatter.data.summary
  //     : ""
  //   let tags = page.template.frontMatter.data.tags
  //     ? page.template.frontMatter.data.tags.toString()
  //     : ""
  //   index.addDoc({
  //     id: page.url,
  //     tags: tags,
  //     summary: summary,
  //     title: page.template.frontMatter.data.title,
  //     category: page.template.frontMatter.data.category,
  //   })
  // })
  for (const page of collection) {
    const data = await page.template.frontMatter.data.read()
    const summary = data.summary ? data.summary : ""
    let tags = data.tags ? data.tags.toString() : ""
    index.addDoc({
      id: page.url,
      tags: tags,
      summary: summary,
      title: data.title,
      category: data.category,
    })
  }

  return index.toJSON()
}

export { searchFilter }
