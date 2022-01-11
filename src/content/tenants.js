import { CDN_URL } from "../config";

const tenants = [
  {
    key: "6",
    name: "Adaeze Opara Photography",
    location: "Suite B4",
    images: {
      cardProfile: {
        // src: `${CDN_URL}/tenants/tenant-b4/card-profile.jpg`,
        src: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Neil_Armstrong.jpg",
        alt: "Card profile",
      },
    },
    links: {
      website: "http://adaezeopara.com/",
      facebook: "http://facebook.com/AdaezeOparaPhotography",
      instagram: "http://instagram.com/adaeze.opara",
    },
    bio: [
      "Adaeze is a portrait photographer who focuses on creating the very best experience for her clients. Her super-power is giving regular everyday people a confidence boost by helping them look and feel their absolute best in front of the camera.",
      "Adaeze specializes in modern glamour for women of all ages, headshots and personal branding for service based business owners to help them stand out and become the face of their brand, and creating legacy portraits for families.",
      "By taking the time to plan and custom design each portrait session, get to know each person, each family, each kid, and understand what is most important to them, she can bring her unique perspective as an artist to tell their story, and embody their personalities completely.",
    ],
  },
  {
    key: "3",
    images: {
      cardProfile: {
        // src: `${CDN_URL}/tenants/tenant-b4/card-profile.jpg`,
        src: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Neil_Armstrong.jpg",
        alt: "Card profile",
      },
    },
    name: "Sultry Scents",
    location: "Suite B2",
    links: {
      website: "http://www.sultryscentco.com/",
    },
    bio: [
      "My name is Annie and I am the owner of Sultry Scent Company! I offer hand-poured candles, wax melts, handmade soaps, sugar scrubs, lip balms, bath bombs and more.",
      "Everything is made by me right here in Elizabeth City and can be purchased in store at Harbor Centre or on my website.",
    ],
  },
];

export default tenants;
