// const markdownIt = require('markdown-it');
// const markdownItPrism = require('markdown-it-prism');
// const markdownItAnchor = require('markdown-it-anchor');
// const markdownItClass = require('@toycode/markdown-it-class');
// const markdownItLinkAttributes = require('markdown-it-link-attributes');
// const markdownItEmoji = require('markdown-it-emoji');
// const markdownItFootnote = require('markdown-it-footnote');
// const markdownitMark = require('markdown-it-mark');
const markdownitAbbr = require("markdown-it-abbr")
// const { slugifyString } = require('../utils');

const markdownIt = require("markdown-it")
const markdownItLinkAttributes = require("markdown-it-link-attributes")
const markdownItAttrs = require("markdown-it-attrs")
const markdownItAnchor = require("markdown-it-anchor")
const slugify = require("slugify")

// https://11ty.rocks/eleventyjs/slugs-anchors/

const linkInsideHeader = markdownItAnchor.permalink.linkInsideHeader({
  class: "anchor",
  symbol: "<span hidden>#</span>",
  style: "aria-labelledby",
  placement: "before",
})
const markdownItAnchorOptions = {
  level: [1, 2, 3],
  slugify: (str) =>
    slugify(str, {
      lower: true,
      strict: true,
      remove: /["]/g,
    }),
  tabIndex: false,
  permalink(slug, opts, state, idx) {
    state.tokens.splice(
      idx,
      0,
      Object.assign(new state.Token("div_open", "div", 1), {
        // Add class "header-wrapper [h1 or h2 or h3]"
        attrs: [["class", `heading-wrapper ${state.tokens[idx].tag}`]],
        block: true,
      })
    )

    state.tokens.splice(
      idx + 4,
      0,
      Object.assign(new state.Token("div_close", "div", -1), {
        block: true,
      })
    )

    linkInsideHeader(slug, opts, state, idx + 1)
  },
}

const markdownLibrary = markdownIt({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true,
})
  .use(markdownItAnchor)
  .use(markdownItLinkAttributes, {
    matcher(href) {
      return href.match(/^https?:\/\//)
    },
    attrs: {
      target: "_blank",
      rel: "noopener",
    },
  })
  .use(markdownItAttrs, {
    allowedAttributes: ["id", "class"],
  })
  .use(markdownitAbbr)

module.exports = markdownLibrary

// const markdownLib = markdownIt({
//     html: true,
//     breaks: true,
//     linkify: true,
//     typographer: true,
// })
//     .disable('code')
//     .use(markdownItPrism, {
//         defaultLanguage: 'plaintext',
//     })
//     .use(markdownItAnchor, {
//         slugify: slugifyString,
//         tabIndex: false,
//         permalink: markdownItAnchor.permalink.headerLink({
//             class: 'heading-anchor',
//         }),
//     })
//     .use(markdownItClass, {
//         ol: 'list',
//         ul: 'list',
//     })
//     .use(markdownItLinkAttributes, [
//         {
//             // match external links
//             matcher(href) {
//                 return href.match(/^https?:\/\//);
//             },
//             attrs: {
//                 target: '_blank',
//                 rel: 'noopener',
//             },
//         },
//     ])
//     .use(markdownItEmoji)
//     .use(markdownItFootnote)
//     .use(markdownitMark)
//     .use(markdownitAbbr);

// module.exports = markdownLib;
