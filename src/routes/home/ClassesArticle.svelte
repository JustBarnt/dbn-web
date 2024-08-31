<script>
  /**
   * @typedef {Object} ClassObj
   * @property {string} Title - The title of the offering.
   * @property {string[]} Details - An array of details about the offering.
   * @property {string} Image - The image associated with the offering.
   * @property {string} Alt - The alternative text for the icon.
   * @property {string} Anchor - The anchor link to jump to
   */

  /** @type {ClassObj} */
  export let Class;
</script>

<article class="card flex flex-col justify-around items-center gap-y-2 p-8 bg-white shadow-lg">
  <img
    width="206px"
    src={Class.Image}
    alt={Class.Alt} />
  <h3 class="font-neonoir text-2xl text-center">
    {Class.Title}
  </h3>
  {#each Class.Details as Detail}
    <p class="text-sm font-sans text-center py-4">{Detail}</p>
  {/each}
  <a
    href="/classes#{Class.Anchor}"
    class="font-ostrich_black px-12 py-2 rounded-[999px] text-primary-500 !bg-gray-100 hover:!bg-tertiary-500 hover:!text-white"
    >{Class.Title === "Group Training" ? "Learn More" : "Pricing"}</a>
</article>
