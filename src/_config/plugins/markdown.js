import markdownIt from "markdown-it";
import markdownitAbbr from "markdown-it-abbr";
import markdownItAnchor from "markdown-it-anchor";
import markdownItAttrs from "markdown-it-attrs";
import markdownItLinkAttributes from "markdown-it-link-attributes";
import slugify from "slugify";

// https://11ty.rocks/eleventyjs/slugs-anchors/

const linkInsideHeader = markdownItAnchor.permalink.linkInsideHeader({
  class: "anchor",
  symbol: "<span hidden>#</span>",
  style: "aria-labelledby",
});

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
    );

    state.tokens.splice(
      idx + 4,
      0,
      Object.assign(new state.Token("div_close", "div", -1), {
        block: true,
      })
    );

    linkInsideHeader(slug, opts, state, idx + 1);
  },
};

const markdownLibrary = markdownIt({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true,
})
  .use(markdownItAnchor, markdownItAnchorOptions)
  .use(markdownItLinkAttributes, {
    matcher(href) {
      return href.match(/^https?:\/\//);
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
  

export { markdownLibrary };
export default markdownLibrary;