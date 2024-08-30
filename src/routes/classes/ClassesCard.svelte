<script>
  import PawBP from "$lib/assets/our-classes/OurClasses_PawprintBulletPoint.png";

  /** @type string */
  export let card_title;
  /** @type string */
  export let price;
  /** @type string[] */
  export let card_points;
  /** @type string */
  export let additional_info = "";
</script>

<div class="card shadow-lg w-1/3">
  <div class="flex flex-col p-4 items-center gap-y-2">
    <slot name="image" />
    <h2 class="font-neonoir h2">{card_title}</h2>
    <h3 class="font-ostrich_black h3 text-primary-500">{price}</h3>
    <div class="grid grid-cols-[15%_85%] grid-flow-row gap-2 items-center">
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
