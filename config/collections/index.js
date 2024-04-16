const filterTagList = (tags) => {
  return (tags || []).filter(
    (tag) => ["all", "nav", "post", "posts"].indexOf(tag) === -1
  )
}

const tagList = (collection) => {
  const tagSet = new Set()
  collection.getAll().forEach((item) => {
    ;(item.data.tags || []).forEach((tag) => tagSet.add(tag))
  })
  return filterTagList([...tagSet])
}

const demos = (collectionApi) => {
  return collectionApi.getFilteredByTag("demos")
}

const orderedDemos = (collectionApi) => {
  return collectionApi.getFilteredByTag("demos").sort((a, b) => {
    return a.data.order - b.data.order
  })
}

const pages = (collectionApi) => {
  return collectionApi
    .getFilteredByGlob(["src/pages/*.md", "src/projects/index.*"])
    .sort((a, b) => b.data.order - a.data.order)
}

const posts = (collectionApi) => {
  return collectionApi.getFilteredByGlob("src/posts/*.md")
}

const projects = (collectionApi) => {
  return collectionApi.getFilteredByGlob("src/projects/*.md")
}

const resources = (collectionApi) => {
  return [
    ...collectionApi
      .getAll()
      .filter((item) => item.data.category === "resurser")
      .sort((a, b) => b.date - a.date),
  ]
}

module.exports = {
  tagList,
  demos,
  orderedDemos,
  pages,
  posts,
  projects,
  resources,
}
