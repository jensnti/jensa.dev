---
title: Draft list
draft: true
eleventyExcludeFromCollections: true
permalink: /sv/drafts/
layout: pages/page.njk
---

<ul role="list">
  {% for draft in collections.drafts %}
    <li>
      <a href="{{ draft.url }}">{{ draft.data.title }}</a>
      {{ draft.data.page.date | frontDate }}
    </li>
  {% endfor %}
</ul>