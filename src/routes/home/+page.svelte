<script>
  import Banner from "$lib/Components/Banner.svelte";
  import { site_content } from "$lib/content/content";
  import { testimonials as Testimonials } from "$lib/content/testimonials";
  import home_certifications from "/assets/home/Home_Certifications.png";
  import Testimonial from "$lib/Components/Testimonial.svelte";
  import OfferingsArticle from "./OfferingsArticle.svelte";
  import ClassesArticle from "./ClassesArticle.svelte";

  const heros = site_content["Heros"];
  const page_content = site_content["Home"];
  const { Offers, Classes } = page_content;
</script>

<main
  id="Home-Page"
  class="flex flex-col content w-full">
  <Banner />
  <section
    id="Training-Details"
    class="w-full lg:px-16 lg:py-8 p-8 flex flex-col gap-8 bg-white">
    <h1 class="font-ostrich_med text-5xl text-center">{Offers.Title}</h1>
    <section
      id="Training-Details-Grid"
      class="grid lg:grid-cols-2 md:grid-rows-2 md:grid-cols-1">
      {#each Offers.Offerings as Offering, index}
        <OfferingsArticle
          {Offering}
          order="order-{index + 1}"
          flex_dir={index % 2 ? "flex-row-reverse" : "flex-row"} />
      {/each}
    </section>
  </section>
  <section
    id="Certifications"
    class="flex bg-primary-500 items-center justify-center lg:px-16 py-4">
    <img
      width="80%"
      src={home_certifications}
      alt="Certifications Earned" />
  </section>
  <section
    id="Our-Classes"
    class="flex flex-col lg:px-16 lg:py-8 p-8 gap-8">
    <div class="lg:px-40 space-y-2">
      <h1 class="font-ostrich_med text-5xl text-center">{Classes.Title}</h1>
      <p class="text-sm font-sans text-center">{Classes.Desc}</p>
    </div>
    <div class="grid lg:grid-rows-1 lg:grid-cols-3 lg:gap-x-12 gap-y-4">
      {#each Classes.Classes as Class}
        <ClassesArticle {Class} />
      {/each}
    </div>
  </section>
  <nav class="flex lg:flex-row flex-col bg-tertiary-500 justify-center items-center lg:p-8 p-4 gap-y-2">
    <h1 class="font-ostrich_black text-on-tertiary-token lg:text-5xl text-center text-2xl w-full lg:grow">{heros[1]}</h1>
    <a
      href="#contact-us-form"
      class="lg:px-16 lg:py-4 px-8 py-2 bg-primary-500 rounded-[999px] lg:shrink text-white font-ostrich_black lg:whitespace-nowrap hover:bg-white hover:text-tertiary-500"
      >SCHEDULE A FREE EVALUATION</a>
  </nav>
  <section
    id="Testimonials"
    class="flex flex-col bg-white p-8 gap-y-4 lg:[&>a]:self-center">
    <h1 class="font-ostrich_med text-5xl text-center">WHAT OUR CLIENTS HAVE TO SAY</h1>
    <div class="grid lg:grid-cols-3 grid-flow-row gap-x-8 gap-y-4 lg:p-12">
      {#each Testimonials as item ((item.rating, item.name, item.review, item.link))}
        <Testimonial
          href={item.link}
          rating={item.rating}
          name={item.name}
          review={item.review} />
      {/each}
    </div>
    <a
      href="https://www.google.com/search?q=dogs+by+nature+dayton+reviews&sca_esv=4a613a7dfdc85553&sca_upv=1&sxsrf=ADLYWIJmYNWU-S6rLOIUOFAqGnNx_nDc4w%3A1724607188046&source=hp&ei=1GrLZuYL7uTk2g_noZDgDw&iflsig=AL9hbdgAAAAAZst45MiseGkTiwS6dza70KrrnuftbvaN&ved=0ahUKEwjmxcW21pCIAxVuMlkFHecQBPwQ4dUDCBg&uact=5&oq=dogs+by+nature+dayton+reviews&gs_lp=Egdnd3Mtd2l6Ih1kb2dzIGJ5IG5hdHVyZSBkYXl0b24gcmV2aWV3czIFEAAYgAQyCxAAGIAEGIYDGIoFMgsQABiABBiGAxiKBTIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogRIvilQ2AJY6ihwBHgAkAEAmAF_oAHUFaoBBDMwLjK4AQPIAQD4AQGYAiSgApIWqAIKwgIHECMYJxjqAsICChAjGIAEGCcYigXCAhEQLhiABBixAxjRAxiDARjHAcICCxAuGIAEGNEDGMcBwgILEC4YgAQYsQMYgwHCAg4QLhiABBixAxjRAxjHAcICDhAAGIAEGLEDGIMBGIoFwgIEECMYJ8ICCBAuGIAEGLEDwgIIEAAYgAQYsQPCAgsQLhiABBixAxjUAsICCxAAGIAEGJIDGIoFwgILEC4YgAQYxwEYrwHCAggQABiABBjJA8ICDhAuGIAEGLEDGIMBGNQCwgIOEAAYgAQYsQMYgwEYyQPCAgsQABiABBixAxiDAcICDhAuGIAEGMcBGI4FGK8BwgIEEAAYA8ICBRAuGIAEwgIGEAAYFhgewgICECbCAggQABgWGB4YD8ICCBAAGKIEGIkFmAMFkgcEMzMuM6AHo-0B&sclient=gws-wiz#lrd=0x8840850d161a03db:0xd883eb6b49bd58f3,1,,,,"
      class="px-8 py-4 bg-primary-500 rounded-[999px] text-on-primary-token font-ostrich_black hover:bg-tertiary-500 text-center">View More</a>
  </section>
</main>
