const fs = require('fs');
const Image = require('@11ty/eleventy-img');

const getSvgContent = (file, classList) => {
    let relativeFilePath = `./src/_includes/assets/icons/${file}`;
    let data = fs.readFileSync(relativeFilePath, (err, contents) => {
        if (err) return err;
        return contents;
    });
    if (classList) {
        return (
            data.toString('utf8').slice(0, 4) +
            ` class="${classList}" ` +
            data.toString('utf8').slice(4)
        );
    } else {
        return data.toString('utf8');
    }
};

const year = () => {
    return `${new Date().getFullYear()}`;
};

const imageShortcode = async (src, alt, sizes = '100vw') => {
    const metadata = await Image(src, {
        widths: [300, 600, 900],
        outputDir: './public/img/',
    });

    const imageAttributes = {
        alt,
        sizes,
        loading: 'lazy',
        decoding: 'async',
    };

    // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
    return Image.generateHTML(metadata, imageAttributes, {
        whitespaceMode: 'inline',
    });
};

module.exports = {
    getSvgContent,
    year,
    imageShortcode,
};
