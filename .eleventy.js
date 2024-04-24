const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")
const htmlmin = require("html-minifier")
const { JSDOM } = require("jsdom")

//import shortcodes
const {
  youtube,
  getSvgContent,
  year,
  imageShortcode,
} = require("./config/shortcodes")

// import filters
const {
  getDemo,
  readableDate,
  frontDate,
  yearString,
  htmlDateString,
  getProject,
  tagFilter,
  shuffleArray,
  slug,
  limit,
  getYears,
} = require("./config/filters")

const { searchFilter } = require('./config/filters/search-filter.js');

// import  collections
const {
  tagList,
  demos,
  orderedDemos,
  pages,
  posts,
  projects,
  resources,
} = require("./config/collections")

// plugins
const eleventyPluginTOC = require("@thedigitalman/eleventy-plugin-toc-a11y")
const markdownLibrary = require("./config/plugins/markdown")
const rssPlugin = require("@11ty/eleventy-plugin-rss")
const emojiReadTime = require("@11tyrocks/eleventy-plugin-emoji-readtime")
const lightningCSS = require("@11tyrocks/eleventy-plugin-lightningcss")

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/assets/js/")
  eleventyConfig.addWatchTarget("./src/assets/css/")

  // Plugins
  eleventyConfig.addPlugin(rssPlugin)
  eleventyConfig.addPlugin(syntaxHighlight)
  eleventyConfig.addPlugin(eleventyPluginTOC, {
    headingText: "Innehållsförteckning",
  })
  eleventyConfig.addPlugin(emojiReadTime, {
    emoji: "📕",
    showEmoji: false,
    label: "minuters läsning",
    wpm: 200,
    bucketSize: 3,
  })
  eleventyConfig.addPlugin(lightningCSS)

  // Filters
  eleventyConfig.addFilter("getDemo", getDemo)
  eleventyConfig.addFilter("readableDate", readableDate)
  eleventyConfig.addFilter("frontDate", frontDate)
  eleventyConfig.addFilter("yearString", yearString)
  eleventyConfig.addFilter("htmlDateString", htmlDateString)
  eleventyConfig.addFilter("getProject", getProject)
  eleventyConfig.addFilter("tagFilter", tagFilter)
  eleventyConfig.addFilter("shuffle", shuffleArray)
  eleventyConfig.addFilter("limit", limit)
  eleventyConfig.addFilter("getYears", getYears)
  eleventyConfig.addFilter("slug", slug)
  eleventyConfig.addFilter("searchFilter", searchFilter)

  // Shortcodes
  eleventyConfig.addShortcode("year", year)
  eleventyConfig.addShortcode("svg", getSvgContent)
  eleventyConfig.addShortcode("youtube", youtube)
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode)

  // collections
  eleventyConfig.addCollection("tagList", tagList)
  eleventyConfig.addCollection("demos", demos)
  eleventyConfig.addCollection("orderedDemos", orderedDemos)
  eleventyConfig.addCollection("pages", pages)
  eleventyConfig.addCollection("posts", posts)
  eleventyConfig.addCollection("projects", projects)
  eleventyConfig.addCollection("resources", resources)

  eleventyConfig.setLibrary("md", markdownLibrary)

  // 404
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, bs) {
        bs.addMiddleware("*", (req, res) => {
          const content_404 = fs.readFileSync("public/404.html")
          // Add 404 http status code in request header.
          res.writeHead(404, {
            "Content-Type": "text/html; charset=UTF-8",
          })
          // Provides the 404 content without redirect.
          res.write(content_404)
          res.end()
        })
      },
    },
  })

  // Minify
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath && outputPath.indexOf(".html") > -1) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
      })
      return minified
    }
    return content
  })

  // markdown-it-attrs add class to code element rather than pre
  // this adds the popout class to the pre element
  eleventyConfig.addTransform("addPreClass", function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      const dom = new JSDOM(content)
      const document = dom.window.document
      const preElements = document.querySelectorAll("pre")
      preElements.forEach((pre) => {
        pre.classList.add("popout")
      })
      content = dom.serialize()
    }
    return content
  })

  eleventyConfig.addPassthroughCopy("src/robots.txt")
  // eleventyConfig.addPassthroughCopy('./src/js');
  eleventyConfig.addPassthroughCopy("./src/favicon.ico")
  eleventyConfig.addPassthroughCopy("./src/assets/")

  return {
    templateForms: ["njk", "md"],
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "public",
    },
    passthroughFileCopy: true,
  }
}
