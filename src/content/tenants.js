import { CDN_URL } from "../config";

const cardProfileImageName = "tenant-image__card-profile.jpg";

const tenants = [
  {
    tenantId: "suite-a-1",
    location: "Suite A1",
    name: "Harbor Pharmacy",
    links: {
      website: "",
      facebook: "",
      instagram: "",
    },
    images: {
      cardProfile: {
        src: `${CDN_URL}/tenants/tenant-suite-a-1/${cardProfileImageName}`,
        alt: "Pharmacy staff",
      },
      gallery: [
        {
          src: `${CDN_URL}/tenants/tenant-suite-a-1/${cardProfileImageName}`,
          alt: "Pharmacy staff",
        },
        {
          src: `${CDN_URL}/tenants/tenant-suite-a-1/${cardProfileImageName}`,
          alt: "Pharmacy staff",
        },
      ],
    },
    bio: [
      "Harbor Pharmacy is a local, family-owned pharmacy in the heart of Downtown Elizabeth City. We offer prescription and over-the-counter medications, immunizations and a select assortment of medical equipment.",
      "Here not only for your medication needs, Harbor Pharmacy also has a market and gift shop. Stocked with “gourmet to go” meals provided by Ladyfingers of Raleigh, fresh cut meats from our local butcher, an assortment of craft beer and wine as well as an ever-changing wall of gourmet goodies. We also offer a vast selection of gifts and unique souvenirs highlighting Elizabeth City and our local community.",
      "Stop by Harbor Pharmacy today to transfer your prescriptions or to simply say hello to a friendly face and check out some of our unique offerings.",
    ],
  },
  {
    tenantId: "suite-b-1",
    location: "Suite B1",
    name: "Sam Davis and Associates Realty",
    links: {
      website: "https://www.samdavisrealty.com/",
      facebook: "",
      instagram: "",
    },
    images: {
      cardProfile: {
        src: `${CDN_URL}/tenants/tenant-suite-b-1/${cardProfileImageName}`,
        alt: "Card profile",
      },
    },
    bio: [
      "Sam Davis is the Owner/Broker of Sam Davis and Associates Realty, LLC. His experience owning Davis Hardware and involvement in Pasquotank County Commissions, Rotary, and N.C. Jaycees has kept him connected in and around Elizabeth City, NC.",
      "He looks forward to helping you find the perfect Commercial or Residential property.",
      "Please setup your appointment today by e-mailing samdavisforcongress@yahoo.com or calling: 252-267-5865.",
    ],
  },
  {
    tenantId: "suite-b-2",
    location: "Suite B2",
    name: "Sultry Scents",
    links: {
      website: "http://www.sultryscentco.com/",
    },
    images: {
      cardProfile: {
        src: `${CDN_URL}/tenants/tenant-suite-b-2/${cardProfileImageName}`,
        alt: "Card profile",
      },
    },
    bio: [
      "My name is Annie and I am the owner of Sultry Scent Company! I offer hand-poured candles, wax melts, handmade soaps, sugar scrubs, lip balms, bath bombs and more.",
      "Everything is made by me right here in Elizabeth City and can be purchased in store at Harbor Centre or on my website.",
    ],
  },
  {
    tenantId: "suite-b-3-a",
    location: "Suite B3",
    name: "Nicole J and Co. Social Media Management",
    links: {
      website: "",
      facebook: "https://www.facebook.com/helpingyousociallyshine/",
      instagram: "",
    },
    images: {
      cardProfile: {
        src: `${CDN_URL}/tenants/tenant-suite-b-3-a/${cardProfileImageName}`,
        alt: "Card profile",
      },
    },
    bio: [
      "Marketing, branding & social media group based out of Elizabeth City, NC.",
    ],
  },
  {
    tenantId: "suite-b-3-b",
    location: "Suite B3",
    name: "Eye Candy Digital",
    links: {
      website: "https://eyecandydv.com/",
      facebook: "https://www.facebook.com/eyecandydigitalvideo/",
      instagram: "",
    },
    images: {
      cardProfile: {
        src: `${CDN_URL}/tenants/tenant-suite-b-3-b/${cardProfileImageName}`,
        alt: "Card profile",
      },
    },
    bio: [
      "Eye Candy Digital Video is a full-service video production company.",
      "We provide award-winning video and audio production services as well as digital media solutions to a variety of corporate, government, and private-industry clients.",
    ],
  },
  {
    tenantId: "suite-b-4",
    location: "Suite B4",
    name: "Adaeze Opara Photography",
    links: {
      website: "http://adaezeopara.com/",
      facebook: "http://facebook.com/AdaezeOparaPhotography",
      instagram: "http://instagram.com/adaeze.opara",
    },
    images: {
      cardProfile: {
        src: `${CDN_URL}/tenants/tenant-suite-b-4/${cardProfileImageName}`,
        alt: "Card profile",
      },
    },
    bio: [
      "Adaeze is a portrait photographer who focuses on creating the very best experience for her clients. Her super-power is giving regular everyday people a confidence boost by helping them look and feel their absolute best in front of the camera.",
      "Adaeze specializes in modern glamour for women of all ages, headshots and personal branding for service based business owners to help them stand out and become the face of their brand, and creating legacy portraits for families.",
      "By taking the time to plan and custom design each portrait session, get to know each person, each family, each kid, and understand what is most important to them, she can bring her unique perspective as an artist to tell their story, and embody their personalities completely.",
    ],
  },
  {
    tenantId: "suite-b-5",
    location: "Suite B5",
    name: "Latitude 36 Boutique",
    links: {
      website: "",
      facebook: "https://www.facebook.com/Latitude36/",
      instagram: "",
    },
    images: {
      cardProfile: {
        src: `${CDN_URL}/tenants/tenant-suite-b-5/${cardProfileImageName}`,
        alt: "Card profile",
      },
    },
    bio: [
      "Latitude 36, where there's a style for every latitude. We are an on-trend women's clothing boutique. We offer merchandise that is fun and comfortable, yet versatile in a full range of sizes.",
      "Come reach outside of your everyday wardrobe today!",
    ],
  },
];

export default tenants;
