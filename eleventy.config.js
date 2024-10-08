import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight"
import { minify as htmlmin } from "html-minifier-terser"
import { JSDOM } from "jsdom"
import { EleventyI18nPlugin } from "@11ty/eleventy"

// Import shortcodes
import {
  youtube,
  getSvgContent,
  year,
  imageShortcode,
} from "./src/_config/shortcodes.js"

// Import filters
import {
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
} from "./src/_config/filters/index.js"

// Import collections
import {
  tagList,
  pages,
  posts,
  projects,
  resources,
  drafts,
} from "./src/_config/collections.js"

// Plugins
import markdownLibrary from "./src/_config/plugins/markdown.js"

import eleventyPluginTOC from "@thedigitalman/eleventy-plugin-toc-a11y"
import rssPlugin from "@11ty/eleventy-plugin-rss"
import emojiReadTime from "@11tyrocks/eleventy-plugin-emoji-readtime"
import lightningCSS from "@11tyrocks/eleventy-plugin-lightningcss"

export default function (eleventyConfig) {
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
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: "sv",
    errorMode: "allow-fallback",
  })

  // Filters
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

  // Shortcodes
  eleventyConfig.addShortcode("year", year)
  eleventyConfig.addShortcode("svg", getSvgContent)
  eleventyConfig.addShortcode("youtube", youtube)
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode)

  // Collections
  eleventyConfig.addCollection("tagList", tagList)
  eleventyConfig.addCollection("pages", pages)
  eleventyConfig.addCollection("posts", posts)
  eleventyConfig.addCollection("projects", projects)
  eleventyConfig.addCollection("resources", resources)
  eleventyConfig.addCollection("drafts", drafts)

  eleventyConfig.setLibrary("md", markdownLibrary)

  // 404
  // eleventyConfig.setBrowserSyncConfig({
  //   callbacks: {
  //     ready: function (err, bs) {
  //       bs.addMiddleware("*", (req, res) => {
  //         const content_404 = fs.readFileSync("public/404.html")
  //         // Add 404 http status code in request header.
  //         res.writeHead(404, {
  //           "Content-Type": "text/html; charset=UTF-8",
  //         })
  //         // Provides the 404 content without redirect.
  //         res.write(content_404)
  //         res.end()
  //       })
  //     },
  //   },
  // })

  // When `permalink` is false, the file is not written to disk
  eleventyConfig.addGlobalData("eleventyComputed.permalink", function () {
    return (data) => {
      // Always skip during non-watch/serve builds
      if (data.draft && !process.env.BUILD_DRAFTS) {
        return false
      }

      return data.permalink
    }
  })

  // When `eleventyExcludeFromCollections` is true, the file is not included in any collections
  eleventyConfig.addGlobalData(
    "eleventyComputed.eleventyExcludeFromCollections",
    function () {
      return (data) => {
        // Always exclude from non-watch/serve builds
        if (data.draft && !process.env.BUILD_DRAFTS) {
          return true
        }

        return data.eleventyExcludeFromCollections
      }
    },
  )

  eleventyConfig.on("eleventy.before", ({ runMode }) => {
    // Set the environment variable
    if (runMode === "serve" || runMode === "watch") {
      process.env.BUILD_DRAFTS = true
    }
  })

  // Minify
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath && outputPath.indexOf(".html") > -1) {
      let minified = htmlmin(content, {
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

  eleventyConfig.addPassthroughCopy("./src/robots.txt")
  eleventyConfig.addPassthroughCopy("./src/favicon.ico")
  eleventyConfig.addPassthroughCopy("./src/assets/")

  return {
    templateFormats: ["njk", "md"],
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "public",
    },
    passthroughFileCopy: true,
  }
}
