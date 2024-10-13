<script>
  import PawBP from "/assets/our-classes/OurClasses_PawprintBulletPoint.png";

  /** @type string */
  export let width = "w-full";
  /** @type string */
  export let card_title;
  /** @type string */
  export let price;
  /** @type string[] */
  export let card_points = [];
  /** @type string */
  export let additional_info = "";

  $: card_id = card_title.replaceAll(/\s/g, "");
</script>

<div
  id={card_id}
  class="card shadow-lg {width}">
  <div class="flex flex-col p-4 items-center gap-y-2">
    <slot name="image" />
    <h2 class="font-neonoir text-3xl whitespace-nowrap">
      {card_title}
    </h2>
    <h3 class="font-ostrich_black h3 text-primary-500">{price}</h3>
    <div class="grid grid-cols-[35px_auto] grid-flow-row gap-2 items-center {card_points.length === 0 ? 'hidden' : ''}">
      {#each card_points as point}
        <img
          src={PawBP}
          alt="" />
        <li class="list-none">{point}</li>
      {/each}
    </div>
    <div class="p-4 {additional_info === '' ? 'hidden' : ''}">
      <p>{additional_info}</p>
    </div>
  </div>
</div>
