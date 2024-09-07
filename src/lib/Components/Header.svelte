<script>
  import { page } from "$app/stores";
  import { beforeUpdate, onMount, afterUpdate } from "svelte";
  import logo from "/assets/logo.png";

  onMount(setActive);
  afterUpdate(setActive);
  beforeUpdate(setActive);

  function setActive() {
    /** @type {HTMLElement | null} */
    const nav = document.querySelector("nav[data-name='nav-el']") ?? null;
    /** @type {NodeListOf<HTMLLIElement> | null} */
    let el = nav?.querySelectorAll("li") ?? null;
    /** @type {String} */
    const pathName = $page.url.pathname;

    if (!nav || !el) return;

    el = nav.querySelectorAll("li");

    el.forEach((e) => {
      e.classList.remove("active");
    });

    switch (pathName) {
      case "/home":
        el.item(0).classList.add("active");
        break;

      case "/classes":
        el.item(1).classList.add("active");
        break;

      case "/faqs":
        el.item(2).classList.add("active");

        break;
      case "/blogs":
        el.item(3).classList.add("active");
        break;

      case "/about":
        el.item(4).classList.add("active");
        break;
    }
  }
</script>

<header class="flex header-lg-styles flex-col gap-y-8 sticky top-0 z-[1000] bg-surface-50/80 backdrop-blur-sm p-4 border-b-primary-500 border-b-8">
  <img
    class="self-center"
    width="280px"
    src={logo}
    alt="Dogs By Nature Logo"
    data-name="logo-el" />
  <nav
    class="lg:w-1/3 lg:min-w-[400px]"
    data-name="nav-el">
    <ul class="font-ostrich_med dbn-ul-list lg:justify-between justify-evenly md:text-3xl text-2xl">
      <li data-name="nav-home"><a href="/home">HOME</a></li>
      <li data-name="nav-classes"><a href="/classes">OUR CLASSES</a></li>
      <li data-name="nav-faqs"><a href="/faqs">FAQS</a></li>
      <li data-name="nav-blog"><a href="/blogs">BLOG</a></li>
      <li data-name="nav-about"><a href="/about">YOUR TRAINER</a></li>
    </ul>
  </nav>
  <div
    class="flex lg:flex-row lg:justify-end justify-between items-center"
    data-name="contact-el">
    <a
      class="lg:mr-4 btn-lg min-w-fit rounded-[999px] bg-primary-500 hover:bg-tertiary-500 text-on-primary-token font-neonoir"
      href="#contact-us-form">Contact Us</a>
    <p class="font-ostrich_black text-secondary-500 text-2xl whitespace-nowrap">937-272-7697</p>
  </div>
</header>
