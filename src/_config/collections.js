import elasticlunr from "elasticlunr";

/* eslint-disable no-undef */
const filterTagList = (tags) => {
  return (tags || []).filter(
    (tag) => ["all", "nav", "post", "posts"].indexOf(tag) === -1,
  )
}

const tagList = (collection) => {
  const tagSet = new Set()
  collection.getAll().forEach((item) => {
    if (!item.data.draft) {
      // Skip draft items
      ;(item.data.tags || []).forEach((tag) => tagSet.add(tag))
    }
  })
  return filterTagList([...tagSet])
}

const pages = (collectionApi) => {
  return collectionApi
    .getFilteredByGlob(["src/pages/*.md", "src/projects/index.*"])
    .sort((a, b) => b.data.order - a.data.order)
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

const drafts = (collectionApi) => {
  return collectionApi.getAll().filter(function (item) {
    return item.data.draft === true
  })
}

const postsSv = (collectionApi) => {
  return collectionApi.getFilteredByGlob("src/sv/posts/**/*.md")
}

const postsEn = (collectionApi) => {
  return collectionApi.getFilteredByGlob("src/en/posts/**/*.md")
}

const postsAllLang = (collectionApi) => {
  return collectionApi.getFilteredByGlob("src/*/posts/**/*.md")
}

export { drafts, pages, postsAllLang, postsEn, postsSv, projects, resources, tagList }
