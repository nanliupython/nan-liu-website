---
layout: page
permalink: /publications/
title: Publications
description: Author names matching <strong>Liu, N.</strong> are highlighted in bold.
nav: true
nav_order: 1
---

<!-- Bibsearch Feature -->
{% include bib_search.liquid %}

<div class="publications">

<h1 style="text-align: center; font-weight: 700; font-size: 2.5rem; margin-top: 1em; margin-bottom: 1em;">Publications</h1>

{% bibliography -f papers %}

<h1 style="text-align: center; font-weight: 700; font-size: 2.5rem; margin-top: 3em; margin-bottom: 1em;">Conference Abstracts</h1>

{% bibliography -f abstracts %}

</div>