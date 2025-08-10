---
layout: single
title: "Gallery"
permalink: /gallery/
author_profile: true
---

<style>
  :root {
    --gallery-gap: 18px;
    --tile-radius: 10px;
    --caption-size: 0.92rem;
  }

  /* Page container tweak so the grid doesn't hug edges */
  .page .page__content {
    max-width: 1100px;
    margin-inline: auto;
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: var(--gallery-gap);
    margin: 10px 0 36px;
  }

  .gallery-item {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: var(--tile-radius);
    background: #fafafa;
    border: 1px solid #eee;
    box-shadow: 0 1px 2px rgba(0,0,0,.04);
  }

  .gallery-item a {
    display: block;
    line-height: 0; /* remove gaps below images */
  }

  .gallery-item img {
    width: 100%;
    height: 100%;
    aspect-ratio: 4 / 3;             /* keeps tiles aligned */
    object-fit: cover;                /* crops gently to fill */
    display: block;
    transition: transform .25s ease, filter .25s ease;
  }

  .gallery-item:hover img {
    transform: scale(1.015);
    filter: saturate(1.02);
  }

  .gallery-item figcaption {
    padding: 10px 12px 12px;
    text-align: center;
