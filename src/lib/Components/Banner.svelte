<script>
  import home from "$lib/assets/banners/Home_Header.png";
  import about from "$lib/assets/banners/About_Header.png";
  import classes from "$lib/assets/banners/OurClasses_Header.png";
  import blog from "$lib/assets/banners/Blog_Header.png";
  import { page } from "$app/stores";

  /** @type {Banners} */
  const banners = {
    home: {
      alt: "Image of a black and white pitpull in the grass.",
      name: "banner-home",
      source: home
    },
    classes: {
      alt: "An image of a dog being walked.",
      name: "banner-classes",
      source: classes
    },
    blogs: {
      alt: "A photo of three dogs laying in the grass.",
      name: "banner-blogs",
      source: blog
    },
    about: {
      alt: "Sami Clark with her dog Ari.",
      name: "banner-about",
      source: about
    },
    faqs: {
      alt: "",
      name: "banner-about",
      source: null
    }
  };

  /** @type {Banner} */
  // @ts-ignore
  $: live_key = $page.url.pathname.substring(1);
  $: active_banner = banners[live_key];
</script>

<img
  class="self-center"
  width="100%"
  src={active_banner.source}
  alt={active_banner.alt}
  data-name={active_banner.name} />
