const SEOConfig = {
  Home: {
    title:
      "NSAG Packers and Movers | Reliable Moving Services in Pakistan | 0320 8101750",
    description:
      "NSAG Movers offers professional and reliable moving services across Pakistan for homes, offices, and businesses. Affordable, safe, and efficient solutions for your relocation needs, Cheap, reliable & trusted home shifting services in Pakistan. NSAGG Movers offers safe, fast & affordable moving solutions. Get your free quote today",
    keywords:
      "packers and movers, home relocation, office moving, NSAG Movers, moving services Pakistan, best packers in Karachi, Lahore relocation services",
    url: "https://nsagmovers.pk/",
    image: "https://nsagmovers.pk/assets/img/banner/1.png",
    images: [
      "https://nsagmovers.pk/assets/img/banner/4.png",
      "https://nsagmovers.pk/assets/img/banner/2.png",
      "https://nsagmovers.pk/assets/img/banner/3.png",
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "NSAG Packers And Movers",
      description:
        "NSAG Movers provides top-notch packing and moving services across Pakistan. Whether you're moving your home, office, or business, we guarantee safe and efficient service.",
      url: "https://nsagmovers.pk/",
      sameAs: [
        "https://www.facebook.com/nsaggoods.pk/",
        "https://www.instagram.com/nsaggoodstransport",
        "https://twitter.com/NSAGMovers",
      ],
      logo: "https://nsagmovers.pk/assets/img/logo-2.png",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+92-320-8101750",
          contactType: "Customer Service",
          areaServed: "PK",
        },
      ],
    },
  },
  NotFoundPage: {
    title: "Page Not Found - NSAG Movers",
    description: "This page does not exist or has been removed.",
    url: "https://nsagmovers.pk/404",
    image: "https://nsagmovers.pk/assets/img/banner/1.png",
    robots: "noindex, follow", // ✅ ONLY here
  },
  Contact: {
    title: "Contact NSAG Movers | Get in Touch | 0320 8101750",
    description:
      "Reach out to NSAG Movers for inquiries or bookings. We're here to assist with all your moving needs.",
    keywords:
      "contact NSAG Movers, moving inquiries, NSAG Packers and Movers, moving services support",
    url: "https://nsagmovers.pk/contact",
    image: "https://nsagmovers.pk/assets/img/banner/breadcrumb.png",
    images: ["https://nsagmovers.pk/assets/img/banner/breadcrumb.png"],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "NSAG Movers Contact Page",
      contactType: "Customer Service",
      telephone: "+92-320-8101750",
      areaServed: "PK",
      url: "https://nsagmovers.pk/contact",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+92-320-8101750",
          contactType: "Customer Service",
          areaServed: "PK",
        },
      ],
    },
  },
  About: {
    title: "About NSAG Movers | Professional Moving Services | 0320 8101750",
    description:
      "Learn more about NSAG Movers and our professional packing and moving services across Pakistan.",
    keywords:
      "about NSAG Movers, professional moving services, NSAG Packers and Movers, moving company Pakistan",
    url: "https://nsagmovers.pk/about",
    image: "https://nsagmovers.pk/assets/img/banner/about.png",
    images: [
      "https://nsagmovers.pk/assets/img/about/1.png",
      "https://nsagmovers.pk/assets/img/about/2.png",
      "https://nsagmovers.pk/assets/img/about/9.png",
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About NSAG Packers And Movers",
      description:
        "Learn more about NSAG Movers, our team, and our commitment to providing the best moving services in Pakistan.",
      url: "https://nsagmovers.pk/about",
    },
  },
  Blog: {
    title: "Moving Tips and Resources | NSAG Movers Blog",
    description:
      "Explore expert tips and advice for stress-free relocations. Get valuable insights for moving your home, office, or business in Pakistan.",
    keywords:
      "moving tips, relocation advice, blog by NSAG Movers, stress-free moving",
    url: "https://nsagmovers.pk/blogs",
    image: "https://nsagmovers.pk/assets/img/banner/1.png",
    images: [
      "https://nsagmovers.pk/assets/img/banner/4.png",
      "https://nsagmovers.pk/assets/img/banner/2.png",
      "https://nsagmovers.pk/assets/img/banner/3.png",
    ],
    // url: "https://nsagmovers.pk/blog",
    // image: "https://nsagmovers.pk/assets/img/blog/blog-banner.png",
    // images: [
    //   "https://nsagmovers.pk/assets/img/blog/blog1.png",
    //   "https://nsagmovers.pk/assets/img/blog/blog2.png",
    // ],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Blog",
      headline: "Moving Tips and Resources by NSAG Movers",
      author: {
        "@type": "Person",
        name: "NSAG Movers Team",
      },
      url: "https://nsagmovers.pk/blogs",
    },
  },
  SeasonalCampaigns: {
    title: "Special Moving Deals for Holidays | NSAG Movers",
    description:
      "Enjoy exclusive discounts on moving services during Eid and summer holidays. Contact NSAG Movers for seasonal offers.",
    keywords:
      "holiday moving deals, Eid relocation discounts, summer moving services, NSAG Movers offers",
    // url: "https://nsagmovers.pk/seasonal-offers",
    // image: "https://nsagmovers.pk/assets/img/service/seasonal-offers.png",
    // images: [
    //   "https://nsagmovers.pk/assets/img/service/holiday-offer1.png",
    //   "https://nsagmovers.pk/assets/img/service/holiday-offer2.png",
    // ],
    url: "https://nsagmovers.pk/",
    image: "https://nsagmovers.pk/assets/img/banner/1.png",
    images: [
      "https://nsagmovers.pk/assets/img/banner/4.png",
      "https://nsagmovers.pk/assets/img/banner/2.png",
      "https://nsagmovers.pk/assets/img/banner/3.png",
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "SpecialOffer",
      name: "Seasonal Moving Discounts",
      description:
        "Take advantage of our seasonal offers and discounts for hassle-free moving during holidays.",
      url: "https://nsagmovers.pk/",
    },
  },
  AdvancedLandingPages: [
    {
      title: "Affordable Furniture Moving in Karachi | NSAG Movers",
      description:
        "Safe and reliable furniture relocation services in Karachi. Book now for hassle-free moving!",
      keywords:
        "furniture moving Karachi, affordable furniture movers, NSAG Movers Karachi",
      // url: "https://nsagmovers.pk/furniture-moving-karachi",
      // image: "https://nsagmovers.pk/assets/img/service/furniture-karachi.png",
      url: "https://nsagmovers.pk/",
      image: "https://nsagmovers.pk/assets/img/banner/1.png",
      images: [
        "https://nsagmovers.pk/assets/img/banner/4.png",
        "https://nsagmovers.pk/assets/img/banner/2.png",
        "https://nsagmovers.pk/assets/img/banner/3.png",
      ],
    },
    {
      title: "Professional Office Movers in Lahore | NSAG Movers",
      description:
        "Relocate your office in Lahore with professional movers. Save time and minimize downtime.",
      keywords:
        "office movers Lahore, professional office relocation, NSAG Movers Lahore",
      // url: "https://nsagmovers.pk/office-movers-lahore",
      // image: "https://nsagmovers.pk/assets/img/service/office-lahore.png",
      url: "https://nsagmovers.pk/",
      image: "https://nsagmovers.pk/assets/img/banner/1.png",
      images: [
        "https://nsagmovers.pk/assets/img/banner/4.png",
        "https://nsagmovers.pk/assets/img/banner/2.png",
        "https://nsagmovers.pk/assets/img/banner/3.png",
      ],
    },
  ],
  BacklinkStrategy: {
    title: "NSAG Movers' Featured Backlinks",
    description:
      "Collaborate with NSAG Movers for guest posts and link-building campaigns. Boost your online presence with our trusted services.",
    keywords: "backlink strategy, guest posts, NSAG Movers link building",
    // url: "https://nsagmovers.pk/backlinks",
    url: "https://nsagmovers.pk/",
    image: "https://nsagmovers.pk/assets/img/banner/1.png",
    images: [
      "https://nsagmovers.pk/assets/img/banner/4.png",
      "https://nsagmovers.pk/assets/img/banner/2.png",
      "https://nsagmovers.pk/assets/img/banner/3.png",
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      headline: "NSAG Movers Backlink Strategy",
      description:
        "NSAG Movers partners with blogs and directories to build quality backlinks.",
      url: "https://nsagmovers.pk/",
    },
  },
  BookGetAQuote: {
    title: "Book or Get a Quote | NSAG Movers",
    description:
      "Request a quote or book your moving service with NSAG Movers for a smooth and hassle-free relocation.",
    keywords: "book NSAG Movers, moving quote, get a quote",
    url: "https://nsagmovers.pk/book",
    image: "https://nsagmovers.pk/assets/img/banner/breadcrumb.png",
    images: ["https://nsagmovers.pk/assets/img/banner/breadcrumb.png"],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "NSAG Packers And Movers",
      description: "Get a quote or book your move with NSAG Movers today.",
      url: "https://nsagmovers.pk/book",
    },
  },
  ServiceKarachi: {
    title:
      "Reliable Packers and Movers in Karachi | NSAG Movers | 0320 8101750",
    description:
      "Professional packing and moving services in Karachi for homes, offices, and businesses. Affordable rates and trusted solutions for all your relocation needs.",
    keywords:
      "packers and movers Karachi, moving services Karachi, office movers Karachi, home relocation Karachi, professional movers in Karachi",

    url: "https://nsagmovers.pk/moving-company-karachi",
    image:
      "https://nsagmovers.pk/assets/img/service/nsag-packers-movers-in-karachi.png",
    images: [
      "https://nsagmovers.pk/assets/img/service/office-shifting-service-in-karachi.png",
      "https://nsagmovers.pk/assets/img/service/house-shifting-service-in-karachi.png",
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "MovingCompany",
      name: "NSAG Packers And Movers",
      description: [
        "Reliable packing and moving services in Karachi for homes and offices. Contact us today!",
        "Reliable packing and moving services in Karachi for homes and offices.",
        "We handle fragile items with care.",
        "Affordable and timely service guaranteed.",
        "Affordable house moving services.",
        "Affordable office relocations stvices.",
        "Move your furniture anywhere, anytime.",
        "Lets electronics right to your doorstep.",
        "Simplifying Inter & Intra-City House Moving Experience.",
      ],
      url: "https://nsagmovers.pk/moving-company-karachi",
      logo: "https://nsagmovers.pk/assets/img/logo-2.png",
      review: [
        {
          "@type": "Review",
          author: "Ali Khan",
          reviewBody:
            "Excellent service! My home relocation was smooth and hassle-free.",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
        },
      ],
    },
  },
  ServiceLahore: {
    title: "Affordable Moving Services in Lahore | NSAG Movers",
    description:
      "Safe and efficient packing and moving services in Lahore for homes and offices. Get reliable movers at the best rates today.",
    keywords:
      "moving services Lahore, packers and movers Lahore, affordable movers Lahore, home relocation Lahore, NSAG movers Lahore",
    url: "https://nsagmovers.pk/moving-company-lahore",
    image:
      "https://nsagmovers.pk/assets/img/service/nsag-packers-movers-in-lahore.png",
    images: [
      "https://nsagmovers.pk/assets/img/service/office-shifting-service-in-lahore.png",
      "https://nsagmovers.pk/assets/img/service/house-shifting-service-in-lahore.png",
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "MovingCompany",
      name: "NSAG Packers And Movers",
      description: [
        "Reliable packing and moving services in Lahore for homes and offices.",
        "We handle fragile items with care.",
        "Affordable and timely service guaranteed.",
        "Affordable house moving services.",
        "Affordable office relocations stvices.",
        "Move your furniture anywhere, anytime.",
        "Lets electronics right to your doorstep.",
        "Simplifying Inter & Intra-City House Moving Experience.",
      ],
      url: "https://nsagmovers.pk/moving-company-lahore",
      areaServed: "Lahore, PK",
      serviceType: "Home Relocation, Office Moving",
    },
  },
  ServiceIslamabad: {
    title: "Top Movers in Islamabad | NSAG Packers and Movers",
    description:
      "Reliable moving and packing services in Islamabad for homes, offices, and businesses. Contact NSAG Movers for a stress-free experience.",
    keywords:
      "packers and movers Islamabad, moving company Islamabad, house movers Islamabad, NSAG relocation Islamabad, best movers in Islamabad",
    url: "https://nsagmovers.pk/moving-company-islamabad",
    image:
      "https://nsagmovers.pk/assets/img/service/nsag-packers-movers-in-islamabad.png",
    images: [
      "https://nsagmovers.pk/assets/img/service/office-shifting-service-in-islamabad.png",
      "https://nsagmovers.pk/assets/img/service/house-shifting-service-in-islamabad.png",
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "MovingCompany",
      name: "NSAG Movers",
      description: [
        "Reliable packing and moving services in Islamabad for homes and offices.",
        "We handle fragile items with care.",
        "Affordable and timely service guaranteed.",
        "Affordable house moving services.",
        "Affordable office relocations stvices.",
        "Move your furniture anywhere, anytime.",
        "Lets electronics right to your doorstep.",
        "Simplifying Inter & Intra-City House Moving Experience.",
      ],
      url: "https://nsagmovers.pk/moving-company-islamabad",
    },
  },
  ServiceHouseMoving: {
    title: "Professional House Moving Services in Pakistan | NSAG Movers",
    description:
      "Simplify your house moving experience with NSAG Movers. Affordable, professional, and hassle-free moving services across Pakistan.",
    keywords:
      "house moving services, home relocation Pakistan, professional movers for houses, best home movers in Pakistan",
    url: "https://nsagmovers.pk/house-moving-company",
    image: "https://nsagmovers.pk/assets/img/service/house-moving-service.png",
    images: [
      "https://nsagmovers.pk/assets/img/service/house-moving-service1.png",
      "https://nsagmovers.pk/assets/img/service/house-moving-service2.png",
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "MovingCompany",
      name: "NSAG Packers And Movers",
      description: [
        "Affordable house moving services.",
        "Experienced movers for hassle-free relocation.",
        "Handle fragile items with care.",
      ],
      url: "https://nsagmovers.pk/house-moving-company",
      provider: {
        "@type": "Organization",
        name: "NSAG Packers And Movers",
      },
      serviceType: "Home Relocation",
      areaServed: "Pakistan",
      availableChannel: {
        "@type": "ServiceChannel",
        servicePhone: {
          "@type": "ContactPoint",
          telephone: "+92-320-8101750",
        },
      },
    },
  },
  ServiceApartmentRelocation: {
    title: "Apartment Relocation Services | NSAG Movers",
    description:
      "Relocate your apartment with ease. Contact NSAG Movers for stress-free moving solutions.",
    keywords: "apartment relocation, moving services, NSAG Movers",
    url: "https://nsagmovers.pk/apartment-relocations",
    image:
      "https://nsagmovers.pk/assets/img/service/apartment-relocation-service.png",
    images: [
      "https://nsagmovers.pk/assets/img/service/apartment-relocation1.png",
      "https://nsagmovers.pk/assets/img/service/apartment-relocation2.png",
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "MovingCompany",
      name: "NSAG Packers And Movers",
      description: [
        "Efficient apartment relocation services.",
        "Professional team for smooth moving experience.",
      ],
      url: "https://nsagmovers.pk/apartment-relocations",
    },
  },
  ServiceOfficeRelocation: {
    title: "Efficient Office Relocation Services in Pakistan | NSAG Movers",
    description:
      "Tailored office relocation services to minimize downtime. NSAG Movers offers professional office moving solutions for businesses across Pakistan.",
    keywords:
      "office relocation services, business moving services, corporate movers Pakistan, professional office movers",
    url: "https://nsagmovers.pk/office-relocations",
    image:
      "https://nsagmovers.pk/assets/img/service/office-relocation-service.png",
    images: [
      "https://nsagmovers.pk/assets/img/service/office-relocation1.png",
      "https://nsagmovers.pk/assets/img/service/office-relocation2.png",
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "MovingCompany",
      name: "NSAG Packers And Movers",
      description: [
        "Tailored office relocation services for businesses.",
        "Minimize downtime during your move.",
        "Reliable and professional moving team.",
      ],
      url: "https://nsagmovers.pk/office-relocations",
    },
  },
  ServiceInternationalMoving: {
    title: "Global Relocation Services | International Moving by NSAG Movers",
    description:
      "NSAG Movers offers seamless international moving services for homes and businesses. Trust us for a smooth global relocation experience.",
    keywords:
      "international moving, global relocation services, overseas moving company Pakistan, NSAG global movers",
    url: "https://nsagmovers.pk/international-moves",
    image:
      "https://nsagmovers.pk/assets/img/service/international-moving-service.png",
    images: [
      "https://nsagmovers.pk/assets/img/service/international-moving1.png",
      "https://nsagmovers.pk/assets/img/service/international-moving2.png",
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "MovingCompany",
      name: "NSAG Packers And Movers",
      description: [
        "Seamless international moving experience.",
        "Experienced team handling global relocations.",
      ],
      url: "https://nsagmovers.pk/international-moves",
    },
  },
  ServiceMazdaShehzoreRent: {
    title: "Mazda Shehzore for Rent | NSAG Movers",
    description:
      "Rent Mazda Shehzore for all your moving and transport needs in Karachi and beyond.",
    keywords: "Mazda Shehzore rental, transport rental, NSAG Movers",
    url: "https://nsagmovers.pk/shehzore-mazda-for-rent",
    image:
      "https://nsagmovers.pk/assets/img/service/shehzore-mazda-for-rent.png",
    images: [
      "https://nsagmovers.pk/assets/img/service/shehzore-mazda-for-rent.png",
      "https://nsagmovers.pk/assets/img/service/shehzore-mazda-for-rent.png",
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "MovingCompany",
      name: "NSAG Packers And Movers",
      description: [
        "Rent a Mazda Shehzore for moving or transport needs.",
        "Affordable rates and reliable service.",
      ],
      url: "https://nsagmovers.pk/shehzore-mazda-for-rent",
    },
  },
  ServiceStoreDeliveries: {
    title: "Store Deliveries | NSAG Movers",
    description:
      "Fast and reliable store deliveries with NSAG Movers. We handle your deliveries with care.",
    keywords: "store deliveries, courier services, NSAG Movers",
    url: "https://nsagmovers.pk/store-deliveries",
    image: "https://nsagmovers.pk/assets/img/service/storage-boxes-moves.png",
    images: [
      "https://nsagmovers.pk/assets/img/service/storage-boxes-moves.png",
      "https://nsagmovers.pk/assets/img/service/storage-boxes-moves.png",
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "MovingCompany",
      name: "NSAG Packers And Movers",
      description: [
        "Affordable store delivery services.",
        "On-time and careful delivery of your goods.",
      ],
      url: "https://nsagmovers.pk/store-deliveries",
    },
  },
  ServiceStorageBoxesMoves: {
    title: "Storage Boxes Moves | NSAG Movers",
    description:
      "Efficient storage box moving services by NSAG Movers. We handle your storage with utmost care.",
    keywords: "storage boxes, moving services, NSAG Movers",
    url: "https://nsagmovers.pk/storage-boxes-moves",
    image: "https://nsagmovers.pk/assets/img/service/storage-boxes-moves.png",
    images: [
      "https://nsagmovers.pk/assets/img/service/storage-boxes-moves.png",
      "https://nsagmovers.pk/assets/img/service/storage-boxes-moves.png",
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "MovingCompany",
      name: "NSAG Packers And Movers",
      description: [
        "We handle storage box moves with care.",
        "Efficient and cost-effective solutions for moving boxes.",
      ],
      url: "https://nsagmovers.pk/storage-boxes-moves",
    },
  },
  ServicePetsAndAnimalsMoves: {
    title: "Pets and Animals Moves | NSAG Movers",
    description:
      "Specialized moving services for pets and animals. Safe and caring transportation for your furry friends.",
    keywords: "pets moving, animal relocation, NSAG Movers",
    url: "https://nsagmovers.pk/pets-and-animals-moves",
    image: "https://nsagmovers.pk/assets/img/service/04.png",
    images: [
      "https://nsagmovers.pk/assets/img/service/04.png",
      "https://nsagmovers.pk/assets/img/service/04.png",
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "MovingCompany",
      name: "NSAG Packers And Movers",
      description: [
        "Safe and caring moving services for pets and animals.",
        "We ensure the comfort and safety of your pets during transport.",
      ],
      url: "https://nsagmovers.pk/pets-and-animals-moves",
    },
  },
  ServiceFurnitureMove: {
    title: "Safe and Affordable Furniture Moving Services | NSAG Movers",
    description:
      "Let NSAG Movers handle your furniture relocation with care. Affordable and professional furniture moving services across Pakistan.",
    keywords:
      "furniture moving services, affordable movers for furniture, best furniture relocation Pakistan, NSAG furniture movers",
    url: "https://nsagmovers.pk/furniture-move",
    image: "https://nsagmovers.pk/assets/img/service/furniture-moves.png",
    images: [
      "https://nsagmovers.pk/assets/img/service/furniture-moves.png",
      "https://nsagmovers.pk/assets/img/service/furniture-moves.png",
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "MovingCompany",
      name: "NSAG Packers And Movers",
      description: [
        "Safe and efficient furniture moving services.",
        "Affordable rates with professional handling.",
      ],
      url: "https://nsagmovers.pk/furniture-move",
    },
  },
  ServiceElectronicsMove: {
    title: "Specialized Electronics Moving Services | NSAG Movers",
    description:
      "NSAG Movers specializes in safely relocating electronic devices. We ensure the secure transportation of your valuable electronics.",
    keywords:
      "electronics moving services, electronics relocation, professional electronic movers, NSAG electronics movers",
    url: "https://nsagmovers.pk/electronic-moves",
    image: "https://nsagmovers.pk/assets/img/service/electronic-moves.png",
    images: [
      "https://nsagmovers.pk/assets/img/service/electronic-moves.png",
      "https://nsagmovers.pk/assets/img/service/electronic-moves.png",
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "MovingCompany",
      name: "NSAG Packers And Movers",
      description: [
        "Specialized moving services for electronics.",
        "Ensuring the safe transportation of your electronic devices.",
      ],
      url: "https://nsagmovers.pk/electronic-moves",
    },
  },
};
export default SEOConfig;
