---
title: Hi, I'm Jens
layout: pages/home.njk
lead: |
  I am a teacher who enjoys web development, design, and coding.
  Combining these interests in my work is a privilege.
  On this website, I collect <a href="/arkiv">notes</a>, <a href="/projekt">projects</a>, and <a href="/resurser">resources</a>.
  On <a href="https://github.com/jensadev">GitHub</a>, you can find things I have coded.
---

{% set postListItems = collections.postsEn | reverse | limit(5) %}
{% include "layouts/post-list.njk" %}