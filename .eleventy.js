const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const markdownIt = require('markdown-it');
const mila = require('markdown-it-link-attributes');
const mia = require('markdown-it-attrs');
const rssPlugin = require('@11ty/eleventy-plugin-rss');

const markdownItAnchor = require('markdown-it-anchor');
const htmlmin = require('html-minifier');
const eleventyPluginTOC = require('@thedigitalman/eleventy-plugin-toc-a11y');

//import shortcodes
const { getSvgContent, year, imageShortcode } = require('./config/shortcodes');

// import filters
const {
    getDemo,
    randomColor,
    readableDate,
    frontDate,
    yearString,
    htmlDateString,
    getProject,
    tagFilter,
    shuffleArray,
    limit,
    getYears,
} = require('./config/filters');

// import  collections
const {
    tagList,
    demos,
    orderedDemos,
    pages,
    posts,
    projects,
    resources,
} = require('./config/collections');

module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget('./src/sass/');
    eleventyConfig.addWatchTarget('./src/js/');

    // Plugins
    eleventyConfig.addPlugin(rssPlugin);
    eleventyConfig.addPlugin(syntaxHighlight);

    eleventyConfig.addPlugin(eleventyPluginTOC, {
        headingText: 'På den här sidan',
        tags: ['h2', 'h3', 'h4'],
    });

    // Filters
    eleventyConfig.addFilter('getDemo', getDemo);
    eleventyConfig.addFilter('randomColor', randomColor);
    eleventyConfig.addFilter('readableDate', readableDate);
    eleventyConfig.addFilter('frontDate', frontDate);
    eleventyConfig.addFilter('yearString', yearString);
    eleventyConfig.addFilter('htmlDateString', htmlDateString);
    eleventyConfig.addFilter('getProject', getProject);
    eleventyConfig.addFilter('tagFilter', tagFilter);
    eleventyConfig.addFilter('shuffle', shuffleArray);
    eleventyConfig.addFilter('limit', limit);
    eleventyConfig.addFilter('getYears', getYears);

    // Shortcodes
    eleventyConfig.addShortcode('year', year);
    eleventyConfig.addShortcode('svg', getSvgContent);
    eleventyConfig.addNunjucksAsyncShortcode('image', imageShortcode);

    // collections
    eleventyConfig.addCollection('tagList', tagList);
    eleventyConfig.addCollection('demos', demos);
    eleventyConfig.addCollection('orderedDemos', orderedDemos);
    eleventyConfig.addCollection('pages', pages);
    eleventyConfig.addCollection('posts', posts);
    eleventyConfig.addCollection('projects', projects);
    eleventyConfig.addCollection('resources', resources);

    const markdownLibrary = markdownIt({
        html: true,
        breaks: true,
        linkify: true,
        typographer: true,
    })
        .use(markdownItAnchor, {
            permalink: markdownItAnchor.permalink.linkInsideHeader({
                symbol: `<span class="anchor" aria-hidden="true">#</span>`,
                placement: 'before',
            }),
            level: [1, 2, 3, 4],
            slugify: (s) =>
                s
                    .trim()
                    .toLowerCase()
                    .replace(/[\s+~\/]/g, '-')
                    .replace(/[().`,%·'"!?¿:@*]/g, ''),
        })
        .use(mila, {
            pattern: /^https:/,
            attrs: {
                target: '_blank',
                rel: 'noopener',
            },
        })
        .use(mia, {
            allowedAttributes: ['id', 'class'],
        });

    eleventyConfig.setLibrary('md', markdownLibrary);

    // 404
    eleventyConfig.setBrowserSyncConfig({
        callbacks: {
            ready: function (err, bs) {
                bs.addMiddleware('*', (req, res) => {
                    const content_404 = fs.readFileSync('public/404.html');
                    // Add 404 http status code in request header.
                    res.writeHead(404, {
                        'Content-Type': 'text/html; charset=UTF-8',
                    });
                    // Provides the 404 content without redirect.
                    res.write(content_404);
                    res.end();
                });
            },
        },
    });

    // Minify
    eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
        if (outputPath && outputPath.indexOf('.html') > -1) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
                minifyCSS: true,
            });
            return minified;
        }
        return content;
    });

    eleventyConfig.addPassthroughCopy('src/robots.txt');
    eleventyConfig.addPassthroughCopy('./src/js');
    eleventyConfig.addPassthroughCopy('./src/favicon.ico');
    eleventyConfig.addPassthroughCopy('./src/assets/');

    return {
        templateForms: ['njk', 'md'],
        markdownTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: 'public',
        },
        passthroughFileCopy: true,
    };
};
