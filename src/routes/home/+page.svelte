<script>
  import Star from "$lib/icons/star.svelte";
  import Banner from "$lib/Components/Banner.svelte";
  import Icon from "./Icon.svelte";
  import site_contents from "$lib/Components/Content/content.json";
  import home_certifications from "$lib/assets/home/Home_Certifications.png";
  import private_lessons from "$lib/assets/home/Home_Class_PrivateLessons.png";
  import dog_walking from "$lib/assets/home/Home_Class_DogWalking.png";
  import group_training from "$lib/assets/home/Home_Class_GroupTraining.png";
  import Testimonial from "$lib/Components/Testimonial.svelte";
  import Testimonials from "$lib/Components/Content/testimonials.json";

  const heros = site_contents["Heros"];
  const page_contents = site_contents["Home"];
  const home_contents = page_contents[0];
  const class_contents = page_contents[1];
  const lesson_contents = page_contents[2];

  /**
   * Maps Key Point names from content to its matching icon
   * @param {string} key_name
   * @returns {IconKeys}
   */
  function icon_map(key_name) {
    let icon_key = key_name.toLowerCase().replaceAll(/\s/g, "_");
    return assertIconKey(icon_key);
  }

  /**
   * returns the tailwindcss key for correct ordering
   * @param {PageKeys} key
   */
  function order_cols(key) {
    if (!assertPageKeys(key)) return;

    switch (key) {
      case "Obedience":
        return "flex-row order-1";
      case "Behavioral Issues":
        return "flex-row order-3";
      case "Positive Outlets":
        return "flex-row order-5";

      case "Off Leash Training":
        return "flex-row-reverse text-right order-2";
      case "Working Dogs":
        return "flex-row-reverse text-right order-4";
      case "Relationship Building":
        return "flex-row-reverse text-right order-6";
    }
  }

  /**
   * Asserts that the provided string is a valid Icon
   * @param {string | IconKeys} key - The string to check
   * @returns {IconKeys}
   * @throws {Error} - Errors if the string was not a valid icon name
   */
  function assertIconKey(key) {
    const valid_icons = Object.keys(home_contents).map((key) => key.toLowerCase().replaceAll(/\s/g, "_"));
    if (!valid_icons.includes(key)) throw new Error(`Invalid Icon Name: ${key}`);

    //@ts-ignore
    return key;
  }

  /**
   * Asserts that the provided string is a valid key in {site_contents}
   * @param {string | PageKeys} key - The string to check
   * @returns {PageKeys}
   * @throws {Error} - Errors if the string was not a valid icon name
   */
  function assertPageKeys(key) {
    const home_keys = Object.keys(home_contents);
    const class_keys = Object.keys(class_contents);
    const lesson_keys = Object.keys(lesson_contents);
    let valid_icons = [...home_keys, ...class_keys, ...lesson_keys];

    if (!valid_icons.includes(key)) throw new Error(`Invalid Page Key: ${key}`);

    //@ts-ignore
    return key;
  }

  /**
   * Returns a formatted string replacing spaces with underscores
   * @param {string} str
   * @returns private_lessons | dog_walking | group_training
   */
  function format_source(str) {
    let str_format = str.toLowerCase().replaceAll(/\s/g, "_");
    switch (str_format) {
      case "private_lessons":
        return private_lessons;
      case "dog_walking":
        return dog_walking;
      case "group_training":
        return group_training;
      default:
        return "";
    }
  }
</script>

<main
  id="Home-Page"
  class="flex flex-col content">
  <Banner />
  <section
    id="Training-Details"
    class="w-full px-16 flex flex-col gap-8 bg-white p-8">
    <h1 class="font-ostrich_med text-5xl text-center">{heros[0]}</h1>
    <section
      id="Training-Details-Grid"
      class="grid grid-cols-2">
      {#each Object.keys(home_contents) as key}
        {@const page_key = assertPageKeys(key)}
        {#if home_contents[page_key]}
          <article class="flex p-4 gap-2 {order_cols(page_key)}">
            <span class="w-1/3">
              <Icon icon={icon_map(key)} />
            </span>
            <div class="flex flex-col home-help">
              <h3 class="font-neonoir text-tertiary-500 text-3xl">
                {key}
              </h3>
              {#each home_contents[page_key] as value}
                <p class="text-sm font-sans">
                  {value}
                </p>
              {/each}
              <a
                href="/classes"
                class="font-ostrich_black text-primary-500 hover:text-tertiary-500">LEARN MORE</a>
            </div>
          </article>
        {/if}
      {/each}
    </section>
  </section>
  <section
    id="Certifications"
    class="flex bg-primary-500 items-center justify-center px-16 py-4">
    <img
      width="80%"
      src={home_certifications}
      alt="Certifications Earned" />
  </section>
  <section
    id="Our-Classes"
    class="flex flex-col px-16 gap-8 py-8">
    <div class="px-40 space-y-2">
      <h1 class="font-ostrich_med text-5xl text-center">Our Classes</h1>
      {#if class_contents["OUR CLASSES"]}
        <p class="text-sm font-sans text-center">{class_contents["OUR CLASSES"][0]}</p>
      {/if}
    </div>
    <div class="grid grid-rows-1 grid-cols-3 gap-x-12">
      {#each Object.keys(lesson_contents) as key}
        {@const lesson_key = assertPageKeys(key)}
        {#if lesson_contents[lesson_key]}
          <article class="card flex flex-col justify-around items-center gap-y-2 p-8 bg-white shadow-lg">
            <img
              width="206px"
              src={format_source(key)}
              alt={key} />
            <h3 class="font-neonoir text-2xl text-center">
              {key}
            </h3>
            {#each lesson_contents[lesson_key] as value}
              <p class="text-sm font-sans text-center py-4">{value}</p>
            {/each}
            <button class="font-ostrich_black text-primary-500 !bg-gray-100 hover:!bg-tertiary-500 hover:!text-white">PRICING</button>
          </article>
        {/if}
      {/each}
    </div>
  </section>
  <nav class="flex bg-tertiary-500 justify-center p-8">
    <h1 class="font-ostrich_black text-on-tertiary-token text-5xl w-full grow">{heros[1]}</h1>
    <a
      href="#contact-us-form"
      class="btn-link shrink text-white font-ostrich_black whitespace-nowrap hover:bg-white hover:text-tertiary-500">SCHEDULE A FREE EVALUATION</a>
  </nav>
  <section
    id="Testimonials"
    class="flex flex-col bg-white p-8">
    <h1 class="font-ostrich_med text-5xl text-center">WHAT OUR CLIENTS HAVE TO SAY</h1>
    <div class="grid grid-cols-3 gap-x-8 gap-y-4 p-12">
      {#each Testimonials as item ((item.rating, item.name, item.review, item.link))}
        <Testimonial
          href={item.link}
          rating={item.rating}
          name={item.name}
          review={item.review} />
      {/each}
    </div>
    <div class="self-center">
      <a
        href="https://www.google.com/search?q=dogs+by+nature+dayton+reviews&sca_esv=4a613a7dfdc85553&sca_upv=1&sxsrf=ADLYWIJmYNWU-S6rLOIUOFAqGnNx_nDc4w%3A1724607188046&source=hp&ei=1GrLZuYL7uTk2g_noZDgDw&iflsig=AL9hbdgAAAAAZst45MiseGkTiwS6dza70KrrnuftbvaN&ved=0ahUKEwjmxcW21pCIAxVuMlkFHecQBPwQ4dUDCBg&uact=5&oq=dogs+by+nature+dayton+reviews&gs_lp=Egdnd3Mtd2l6Ih1kb2dzIGJ5IG5hdHVyZSBkYXl0b24gcmV2aWV3czIFEAAYgAQyCxAAGIAEGIYDGIoFMgsQABiABBiGAxiKBTIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogRIvilQ2AJY6ihwBHgAkAEAmAF_oAHUFaoBBDMwLjK4AQPIAQD4AQGYAiSgApIWqAIKwgIHECMYJxjqAsICChAjGIAEGCcYigXCAhEQLhiABBixAxjRAxiDARjHAcICCxAuGIAEGNEDGMcBwgILEC4YgAQYsQMYgwHCAg4QLhiABBixAxjRAxjHAcICDhAAGIAEGLEDGIMBGIoFwgIEECMYJ8ICCBAuGIAEGLEDwgIIEAAYgAQYsQPCAgsQLhiABBixAxjUAsICCxAAGIAEGJIDGIoFwgILEC4YgAQYxwEYrwHCAggQABiABBjJA8ICDhAuGIAEGLEDGIMBGNQCwgIOEAAYgAQYsQMYgwEYyQPCAgsQABiABBixAxiDAcICDhAuGIAEGMcBGI4FGK8BwgIEEAAYA8ICBRAuGIAEwgIGEAAYFhgewgICECbCAggQABgWGB4YD8ICCBAAGKIEGIkFmAMFkgcEMzMuM6AHo-0B&sclient=gws-wiz#lrd=0x8840850d161a03db:0xd883eb6b49bd58f3,1,,,,"
        class="btn-link !px-8 !py-4 hover:bg-tertiary-500">View More</a>
    </div>
  </section>
</main>
