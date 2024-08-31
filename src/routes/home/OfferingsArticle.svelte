<script>
  /**
   * @typedef {Object} Offering
   * @property {string} Title - The title of the offering.
   * @property {string[]} Details - An array of details about the offering.
   * @property {string} Icon - The icon associated with the offering.
   * @property {string} Alt - The alternative text for the icon.
   */

  /** @type {Offering} */
  export let Offering;
  /** @type {string} */
  export let order = "order-1";
  /** @type {string} */
  export let flex_dir = "flex-row";
</script>

<article class="w-full flex p-4 gap-2 {flex_dir} {order}">
  <span class="min-w-16 max-w-[106px] lg:place-self-start place-self-center">
    <img
      width="100%"
      height="100%"
      src={Offering.Icon}
      alt={Offering.Alt} />
  </span>
  <div class="flex flex-col home-help">
    <h3 class="font-neonoir text-tertiary-500 text-3xl">
      {Offering.Title}
    </h3>
    {#each Offering.Details as Detail}
      <p class="text-sm font-sans">
        {Detail}
      </p>
    {/each}
    <a
      href="/classes"
      class="font-ostrich_black text-primary-500 hover:text-tertiary-500">LEARN MORE</a>
  </div>
</article>
