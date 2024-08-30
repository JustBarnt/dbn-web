<script>
  import Banner from "$lib/Components/Banner.svelte";
  import site_content from "$lib/Components/Content/content.json";
  import IconBanner from "$lib/assets/our-classes/OurClasses_Icons.png";
  import ClassesCard from "./ClassesCard.svelte";
  import BronzeImg from "$lib/assets/our-classes/OurClasses_Private_Bronze.png";
  import SilverImg from "$lib/assets/our-classes/OurClasses_Private_Silver.png";
  import GoldImg from "$lib/assets/our-classes/OurClasses_Private_Gold.png";
  import { onMount } from "svelte";

  const page_content = site_content["Our Classes"];
  const packages = page_content.Packages;

  /** @param pkgs {typeof page_content.Packages} */
  const CardGenerator = (pkgs) => {
    const ret = pkgs.map((pkg) => {
      return {
        Title: pkg.Title,
        Image: pkg.Image,
        Price: pkg.Price,
        Details: pkg.Details,
        Additional: pkg.Additional
      };
    });

    return ret;
  };
</script>

<main>
  <Banner />
  <section
    id="Private-Lessons"
    class="flex flex-col lg:px-24 lg:py-16 bg-white gap-y-12">
    <div class="w-3/4 self-center">
      <img
        src={IconBanner}
        alt="Banner of Icons Illustrating Classes Offered" />
    </div>
    <div class="flex flex-col gap-8">
      <div>
        <h1 class="font-ostrich_med text-5xl text-center">{Object.keys(page_content)[0]}</h1>
        <p class="text-sm w-[95%]">{page_content["Private Lessons"]}</p>
      </div>
      <div class="flex lg:flex-row flex-col lg:gap-x-8">
        {#each packages as item}
          <ClassesCard
            card_points={item.Details}
            card_title={item.Title}
            price={item.Price}
            additional_info={item.Additional}>
            <div slot="image">
              <img
                class="mx-auto"
                width="75%"
                src={item.Image}
                alt="" />
            </div>
          </ClassesCard>
        {/each}
      </div>
    </div>
  </section>
  <section
    id="Dog-Walks"
    class="flex flex-col lg:px-24 lg:py-16 bg-surface-50">
    <div class="flex flex-col gap-8">
      <div class="flex flex-col items-center">
        <h1 class="font-ostrich_med text-5xl text-center">{Object.keys(page_content)[2]}</h1>
        <p class="text-sm w-[95%]">{page_content["Dog Walks"]}</p>
      </div>
      <div class="flex lg:flex-row flex-col lg:gap-x-8">
        {#each packages as item}
          <ClassesCard
            card_points={item.Details}
            card_title={item.Title}
            price={item.Price}
            additional_info={item.Additional}>
            <div slot="image">
              <img
                class="mx-auto"
                width="75%"
                src={item.Image}
                alt="" />
            </div>
          </ClassesCard>
        {/each}
      </div>
    </div>
  </section>
</main>
