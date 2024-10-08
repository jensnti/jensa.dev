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

export { youtube, getSvgContent, year, imageShortcode };
