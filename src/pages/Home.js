import React, { useEffect } from 'react'
import hero from '../images/hero.jpg';
import { backgroundImageDataAttribute, spacerDataAttribute } from '../custom';

function Home() {

  useEffect(() => {
    backgroundImageDataAttribute();
    spacerDataAttribute();
  }, [])


  return (
    <section class="hero background parallax shadow-dark d-flex align-items-center" data-image-src={hero}>
      <span class="hash-anchor" id="home"></span>
      <div class="cta mx-auto mt-2">
        <h1 class="mt-0 mb-4">I’m Bako Doe<span class="dot"></span></h1>
        <p class="mb-4">He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
        <a href="#" class="btn btn-default btn-lg mr-3"><i class="icon-grid"></i>View Portfolio</a>
        <div class="spacer d-md-none d-lg-none d-sm-none" data-height="10"></div>
        <a href="#" class="btn btn-border-light btn-lg"><i class="icon-envelope"></i>Hire me</a>
      </div>
      <div class="overlay"></div>
    </section>
  )
}

export default Home
