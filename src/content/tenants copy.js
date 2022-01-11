import { CDN_URL } from "../config";

const tenants = [
  {
    key: "1",
    name: "Harbor Pharmacy",
    location: "Suite A",
    links: {},
    bio: ["Pharmacy, market, and gift shop"],
  },
  {
    key: "2",
    name: "Sam Davis and Associates Realty",
    location: "Suite B1",
    links: {},
    bio: [
      "Bio on tenant and what they sell, who they are, etc. This should be kept to a short paragraph. Bio on tenant and what they sell, who they are, etc. This should be kept to a short paragraph.",
    ],
  },
  {
    key: "3",
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
  {
    key: "4",
    name: "Nicole J and Co.",
    location: "Suite B3",
    links: {},
    bio: [
      "Bio on tenant and what they sell, who they are, etc. This should be kept to a short paragraph.",
    ],
  },
  {
    key: "5",
    name: "Eye Candy Digital",
    location: "Suite B3",
    links: {},
    bio: [
      "Bio on tenant and what they sell, who they are, etc. This should be kept to a short paragraph.",
    ],
  },
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
    key: "7",
    name: "Latitude 36 Boutique",
    location: "Suite B5",
    phoneNumber: "(602) 759-0452",
    links: {},
    bio: [
      "Bio on tenant and what they sell, who they are, etc. This should be kept to a short paragraph.",
    ],
  },
  {
    key: "8",
    name: "The Bridge (Flex Office)",
    location: "Suite B6",
    links: {},
    bio: [
      "Bio on tenant and what they sell, who they are, etc. This should be kept to a short paragraph.",
    ],
  },
  {
    key: "9",
    name: "Coming Soon",
    location: "Suite C",
    links: {},
  },
];

export default tenants;
