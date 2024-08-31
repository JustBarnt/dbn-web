<script>
  import Banner from "$lib/Components/Banner.svelte";
  import site_content from "$lib/Components/Content/content.json";
  import IconBanner from "$lib/assets/our-classes/OurClasses_Icons.png";
  import ClassesCard from "./ClassesCard.svelte";

  const page_content = site_content["Our Classes"];
  const pkgs = page_content.Packages;
  const { Lessons, Walks, Classes } = pkgs;
</script>

<main>
  <Banner />
  <section
    id="PrivateLessons"
    class="flex flex-col lg:px-24 lg:py-16 bg-white gap-y-12">
    <div class="w-3/4 self-center">
      <img
        src={IconBanner}
        alt="Banner of Icons Illustrating Classes Offered" />
    </div>
    <div class="flex flex-col gap-8">
      <div>
        <h1 class="font-ostrich_med text-5xl text-center">
          {Lessons.Title}
        </h1>
        <p class="text-sm">{Lessons.Desc}</p>
      </div>
      <div class="flex lg:flex-row flex-col lg:gap-x-8">
        {#each Lessons.Levels as Level}
          <ClassesCard
            card_points={Level.Details}
            card_title={Level.Title}
            price={Level.Price}
            additional_info={Level.Additional}>
            <div slot="image">
              <img
                class="mx-auto"
                width="75%"
                src={Level.Image}
                alt="" />
            </div>
          </ClassesCard>
        {/each}
      </div>
    </div>
  </section>
  <section
    id="DogWalking"
    class="flex flex-col lg:px-24 lg:py-16 bg-surface-50">
    <div class="flex flex-col gap-8">
      <div class="flex flex-col items-center">
        <h1 class="font-ostrich_med text-5xl text-center">
          {Walks.Title}
        </h1>
        <p class="text-sm">{Walks.Desc}</p>
      </div>
      <div class="flex lg:flex-row flex-col lg:gap-x-8">
        {#each Walks.Levels as Level}
          <ClassesCard
            card_points={Level.Details}
            card_title={Level.Title}
            price={Level.Price}
            additional_info={Level.Additional}>
            <div slot="image">
              <img
                class="mx-auto"
                width="75%"
                src={Level.Image}
                alt="" />
            </div>
          </ClassesCard>
        {/each}
      </div>
    </div>
  </section>
  <section
    id="GroupTraining"
    class="flex flex-col lg:px-24 lg:py-16 bg-white gap-y-12">
    <div class="flex flex-col gap-8">
      <div>
        <h1 class="font-ostrich_med text-5xl text-center">
          {Classes.Title}
        </h1>
        <p class="text-sm">{Classes.Desc}</p>
      </div>
      <div class="grid lg:grid-cols-3 md:grid-cols-1 lg:gap-8">
        {#each Classes.Levels as Level}
          <ClassesCard
            width="w-full"
            additional_info={Level.Additional}
            card_title={Level.Title}
            price={Level.Heading}>
            <div slot="image">
              <img
                class="mx-auto"
                width="75%"
                src={Level.Image}
                alt="" />
            </div>
          </ClassesCard>
        {/each}
      </div>
    </div>
  </section>
</main>
