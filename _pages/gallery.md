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
    font-size: var(--caption-size);
    color: #555;
  }

  /* Make long captions easier to read without pushing layout */
  .gallery-item figcaption span {
    display: inline-block;
    max-width: 52ch;
  }

  @media (max-width: 520px) {
    .gallery-item img { aspect-ratio: 3 / 2; }
  }
</style>

<div class="gallery-grid">

  <figure class="gallery-item">
    <a href="/images/edc5929a-bc2f-411a-ad07-b76874dfdbe4.jpeg">
      <img loading="lazy" src="/images/edc5929a-bc2f-411a-ad07-b76874dfdbe4.jpeg" alt="At my desk in UCSF">
    </a>
    <figcaption><span>At my desk in UCSF.</span></figcaption>
  </figure>

  <figure class="gallery-item">
    <a href="/images/IMG_9732.jpeg">
      <img loading="lazy" src="/images/IMG_9732.jpeg" alt="ACS Fall 2023 presentation – with Ph.D. supervisor">
    </a>
    <figcaption><span>With my Ph.D. supervisor at the ACS Fall Meeting 2023, San Francisco—celebrating a successful oral presentation on bimane chemistry.</span></figcaption>
  </figure>

  <figure class="gallery-item">
    <a href="/images/IMG_9742.jpeg">
      <img loading="lazy" src="/images/IMG_9742.jpeg" alt="With Prof. Carolyn Bertozzi at ACS Fall 2023">
    </a>
    <figcaption><span>An inspiring moment with 2022 Nobel Laureate Prof. Carolyn Bertozzi at the ACS Fall Meeting 2023.</span></figcaption>
  </figure>

  <figure class="gallery-item">
    <a href="/images/2f39260f-f5b0-4138-a90d-03dcc8744e4d.jpeg">
      <img loading="lazy" src="/images/2f39260f-f5b0-4138-a90d-03dcc8744e4d.jpeg" alt="Delivering ACS talk on Push–Pull Bimanes">
    </a>
    <figcaption><span>Delivering my first ACS talk on the Push–Pull Bimane derivatives at the ACS Fall Meeting 2023.</span></figcaption>
  </figure>

  <figure class="gallery-item">
    <a href="/images/IMG_7187.jpeg">
      <img loading="lazy" src="/images/IMG_7187.jpeg" alt="Cil Lab celebration at UCSF">
    </a>
    <figcaption><span>Celebrating with members of the Cil Lab at UCSF.</span></figcaption>
  </figure>

  <figure class="gallery-item">
    <a href="/images/PhD Momento.jpeg">
      <img loading="lazy" src="/images/PhD Momento.jpeg" alt="PhD commemorative memento">
    </a>
    <figcaption><span>Receiving a commemorative memento upon completion of my doctoral research at Ari'el University, Israel.</span></figcaption>
  </figure>

  <figure class="gallery-item">
    <a href="/images/543879ce-c959-411a-af35-27a36721aacf.jpeg">
      <img loading="lazy" src="/images/543879ce-c959-411a-af35-27a36721aacf.jpeg" alt="After PhD defense with Prof. Flavio Grynszpan">
    </a>
    <figcaption><span>Right after defending my Ph.D. thesis, pictured with my mentor Prof. Flavio Grynszpan at Ari'el University.</span></figcaption>
  </figure>

  <figure class="gallery-item">
    <a href="/images/Doudna.jpeg">
      <img loading="lazy" src="/images/Doudna.jpeg" alt="With Prof. Jennifer Doudna at UCSF">
    </a>
    <figcaption><span>With 2020 Nobel Laureate Prof. Jennifer Doudna at UCSF—an honor to meet one of the pioneers of CRISPR technology.</span></figcaption>
  </figure>

  <figure class="gallery-item">
    <a href="/images/EYCheM Photo.jpg">
      <img loading="lazy" src="/images/EYCheM Photo.jpg" alt="EYCheM Special Sponsor Award 2022">
    </a>
    <figcaption><span>Special Sponsor Award (NCCR Bioinspired) presented by European Young Chemists Meeting and Swiss Academy of Sciences in 2022.</span></figcaption>
  </figure>

  <figure class="gallery-item">
    <a href="/images/Dan.jpeg">
      <img loading="lazy" src="/images/Dan.jpeg" alt="With Prof. Dan Shechtman during Ph.D. studies">
    </a>
    <figcaption><span>With 2011 Nobel Laureate Prof. Dan Shechtman during my first year of Ph.D. studies at Ari'el University.</span></figcaption>
  </figure>

  <figure class="gallery-item">
    <a href="/images/IMG_0859.jpeg">
      <img loading="lazy" src="/images/IMG_0859.jpeg" alt="With Prof. Bartosz Grzybowski at St. Anton">
    </a>
    <figcaption><span>With Prof. Bartosz Grzybowski, after his talk on AI-based computerized organic synthesis at St. Anton, Austria.</span></figcaption>
  </figure>

  <figure class="gallery-item">
    <a href="/images/IMG_5273.jpeg">
      <img loading="lazy" src="/images/IMG_5273.jpeg" alt="International ACS Chapter inaugural meeting in Israel">
    </a>
    <figcaption><span>A memorable interaction with Prof. Dan Shechtman in the inaugural meeting of the International ACS Chapter in Israel at the Open University, Israel.</span></figcaption>
  </figure>

  <figure class="gallery-item">
    <a href="/images/Berkley.jpeg">
      <img loading="lazy" src="/images/Berkley.jpeg" alt="Visit to UC Berkeley College of Chemistry">
    </a>
    <figcaption><span>During my first visit to the College of Chemistry, UC Berkeley.</span></figcaption>
  </figure>

  <figure class="gallery-item">
    <a href="/images/Fraser.jpeg">
      <img loading="lazy" src="/images/Fraser.jpeg" alt="With Prof. Fraser Stoddart">
    </a>
    <figcaption><span>My only interaction with 2016 Nobel Laureate Prof. Fraser Stoddart. He was the kindest person I have ever met.</span></figcaption>
  </figure>

  <figure class="gallery-item">
    <a href="/images/Knesset.jpeg">
      <img loading="lazy" src="/images/Knesset.jpeg" alt="Inside the Knesset, 2018">
    </a>
    <figcaption><span>Inside the Israeli Parliament, Knesset in 2018.</span></figcaption>
  </figure>

</div>
