<script>
  import site_content from "$lib/Components/Content/content.json";
  const faqs = Object.entries(site_content.FAQ);
</script>

<main
  id="FAQ-Page"
  class="flex flex-col content w-full">
  <section class="w-full flex flex-col lg:px-16 lg:py-8 justify-center items-center gap-y-8">
    {#each faqs as faq}
      {@const [Summary, Question] = faq}
      <details class="w-full">
        <summary class="flex items-center w-full bg-primary-500 text-white px-3 py-1 rounded-[999px] font-ostrich_black text-xl align-middle">{Summary}</summary>
        <p class="px-8 pt-2">{Question}</p>
      </details>
    {/each}
  </section>
</main>
