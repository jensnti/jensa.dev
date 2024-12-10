import fs from "fs";
import Image from "@11ty/eleventy-img";

const getSvgContent = async (file, classList) => {
  let relativeFilePath = `./src/_includes/assets/icons/${file}`;
  let data;
  try {
    data = await fs.promises.readFile(relativeFilePath);
  } catch (err) {
    return err;
  }
  if (classList) {
    return (
      data.toString("utf8").slice(0, 4) +
      ` class="${classList}" ` +
      data.toString("utf8").slice(4)
    );
  } else {
    return data.toString("utf8");
  }
};

const year = () => {
  return `${new Date().getFullYear()}`;
};

const imageShortcode = async (src, alt, sizes = "100vw") => {
  const metadata = await Image(src, {
    widths: [300, 600, 900],
    outputDir: "./public/img/",
  });

  const imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
};

const youtube = (id) => {
  return `<div class="feature youtube-embed">
    <iframe 
        src="https://www.youtube-nocookie.com/embed/${id}"
        title="YouTube video player"
        frameborder="0"
        allowfullscreen>
    </iframe>
    </div>`;
};

const codepen = (id, title) => {
  return `<div class="feature region">
    <p class="codepen" 
      data-height="600"
      data-default-tab="html,result"
      data-slug-hash="${id}" 
      data-user="jensadev"
      style="height: 600px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid;
        margin: 1em 0;
        padding: 1em;">
      <span>See the Pen <a href="https://codepen.io/jensadev/pen/${id}">
        ${title}</a> by Jens Andreasson (<a href="https://codepen.io/jensadev">@jensadev</a>)
        on <a href="https://codepen.io">CodePen</a>.</span>
    </p>
    <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
  </div>`
}

export { youtube, getSvgContent, year, imageShortcode, codepen };
