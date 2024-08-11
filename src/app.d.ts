// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }

  type BannerKeys = "/home" | "/about" | "/classes" | "/faqs" | "/blogs";
  type Banner = BannerKeys extends `/${infer T}` ? T : never;

  type Banners = { [K in Banner]: BannersData };

  type BannersData = {
    alt: string;
    name: string;
    source: string | null;
  };
}

export {};
