import { InterestPhoto } from "@/types/interests";
import { assetPath } from "@/utils/assetPath";

export const interestPhotos: InterestPhoto[] = [
  {
    title: "Autumn Above the City",
    location: "Toronto, Canada",
    note: "A skyline held between changing leaves and a textured evening sky.",
    imageSrc: assetPath("/images/travel/toronto-autumn.avif"),
    imageAlt: "Toronto skyline beyond a forest of orange autumn trees",
    objectPosition: "center",
    emphasis: "wide",
  },
  {
    title: "A City Through the Trees",
    location: "Hong Kong",
    note: "The familiar density of home, softened by distance, haze, and a natural frame.",
    imageSrc: assetPath("/images/travel/hong-kong-overlook.avif"),
    imageAlt: "Hong Kong city and harbour seen through trees from a hillside",
    objectPosition: "center 62%",
    emphasis: "standard",
  },
  {
    title: "Sky on the Ground",
    location: "Uyuni, Bolivia",
    note: "On the salt flats, the horizon becomes a thin line between two enormous skies.",
    imageSrc: assetPath("/images/travel/uyuni-reflection.avif"),
    imageAlt: "Sun and clouds reflected across the Uyuni salt flats",
    objectPosition: "center",
    emphasis: "tall",
  },
  {
    title: "Mist and Light",
    location: "Iguazú Falls",
    note: "A brief rainbow catches the scale and force of the water below.",
    imageSrc: assetPath("/images/travel/iguazu-rainbow.avif"),
    imageAlt: "Iguazu Falls in sunlight with mist and a rainbow",
    objectPosition: "center 64%",
    emphasis: "standard",
  },
  {
    title: "Keep Asking Why",
    location: "Physics Notes",
    note: "The equation page stays in the collection—a reminder that curiosity connects the places I visit with the systems I build.",
    imageSrc: assetPath("/images/intro/physics-notebook.png"),
    imageAlt: "A notebook filled with handwritten physics equations",
    objectPosition: "center",
    emphasis: "wide",
  },
];
