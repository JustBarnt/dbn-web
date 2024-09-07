<script>
  import Banner from "$lib/Components/Banner.svelte";
  import Louie from "$lib/assets/about/About_Louie.png";
  import Ari from "$lib/assets/about/About_Ari.png";
  import { site_content as page_content } from "$lib/content/content";

  const about = page_content.About;
</script>

<main>
  <Banner />
  <div class="w-full flex flex-col content">
    <section
      id="Trainer-Details"
      class="w-full px-16 flex flex-col gap-12 bg-white py-8">
      <h1 class="font-ostrich_black text-xl hero">{about.Hero}</h1>
      <div class="space-y-4 font-sans about">
        {#each about["Your Trainer"] as p}
          <p>{p}</p>
        {/each}
      </div>
      <div class="grid lg:grid-rows-1 lg:grid-cols-2 grid-cols-1 grid-rows-2 gap-x-12 py-8 ari-louie">
        {#each about.Dogs as item, index}
          <div class="flex flex-col gap-y-4">
            <img
              class="shadow {index == 0 ? 'louie' : 'ari'}"
              src={index == 0 ? Louie : Ari}
              alt={item.alt} />
            <h1 class="h1 font-neonoir">{index == 0 ? "Louie" : "Ari"}</h1>
            {#each item.text as text}
              <p>{text}</p>
            {/each}
          </div>
        {/each}
      </div>
    </section>
  </div>
</main>
