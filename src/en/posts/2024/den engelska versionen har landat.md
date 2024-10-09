---
title: The English version has landed
date: 2024-10-08
summary: "Carry on coding!"
tags: [ 'i18n', 'translation']
---

It is a half-truth that all content on this page is available, but now I have the opportunity to write in English. 

If everything works as it should, the content for your chosen language will be displayed. The homepage will also be available at `/`, while other pages will be available at `/sv/` or `/en/`. Because of this, there will probably be 404 errors. We'll see how Netlify handles my redirects.

## How does it work?

Eleventy supports creating multilingual sites, and that's what I've used to create an English version of this site. If you're interested, you can read more in the [official documentation](https://www.11ty.dev/docs/i18n/). However, on a site like this one, which has actually grown quite a bit (content-wise) since I started, it wasn't entirely straightforward. For that reason, I looked around for material and found a good guide on Lene Saile's blog, [Internationalization with Eleventy 2.0 and Netlify](https://www.lenesaile.com/en/blog/internationalization-with-eleventy-20-and-netlify/).

This system with eleventy works so for pages and posts that exist in both languages, the navigation, both in the header and in the footer, shows that there is an English/Swedish version available. In the background this means that there is a file with the same name in the other language folder.

```plaintext
src
├── en
│   ├── index.md
│   ├── posts
│   │   ├── 2024
            ├── den engelska versionen har landat.md
└── sv
    ├── index.md
    ├── posts
        ├── 2024
            ├── den engelska versionen har landat.md
```

Once this is set up, collections are created based on the active language. This allows me to display only the posts that are in the active language.

## Content and translation

For the content, it will often be a translation made by a machine, it is not something I will pretend that I have done. But that does not mean that I will not change the text and edit the text to make it more readable. With that in mind, I intend to provide the source of the translation.

When using AI to translate it is important to not loose your voice, and that is something I will try to keep in mind when editing the text.

## Feedback

If you find something that is incorrect or if you have something to say about the translation, please feel free to contact me. I am open to receiving feedback and to improve the content.

{% include "layouts/contact-form.njk" %}

<aside>
This translation is done in Visual Studio Code, with the help of GitHub Copilot and [Code spell checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker).
</aside>