---
title: Resurser
permalink: /sv/resurser/
lead: |
  Här hittar du alla resurser som jag har skapat och publicerat på den här sidan. Resurser är framförallt material skapat för min undervisning.
  Letar du något specifikt så prova sökfunktionen.
---

{% extends 'pages/page.njk' %}
{% set postListItems = collections.resources %}

{% block content %}
<main id="main-content" tabindex="-1" class="container region">
    {% include "layouts/post-list.njk" %}
</main>
{% endblock %}
