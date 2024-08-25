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

  type PageKeys =
    | "Obedience"
    | "Behavioral Issues"
    | "Positive Outlets"
    | "Off Leash Training"
    | "Working Dogs"
    | "Relationship Building"
    | "OUR CLASSES"
    | "Private Lessons"
    | "Dog Walking"
    | "Group Training";

  type BannerKeys = "/home" | "/about" | "/classes" | "/faqs" | "/blogs";
  type Banner = BannerKeys extends `/${infer T}` ? T : never;
  type Banners = { [K in Banner]: BannersData };

  type IconKeys = "off_leash_training" | "relationship_building" | "behavioral_issues" | "obedience" | "positive_outlets" | "working_dogs";
  type Icons = { [K in IconKeys]: IconsData };

  type DbnImageData = {
    alt: string;
    name: string;
    source: string | null;
  };

  type BannersData = DbnImageData;
  type IconsData = DbnImageData;
}

export {};
