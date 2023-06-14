const providers = [
  {
    name: "GR's Home Improvement",
    rating: 5,
    location: "location/distance",
    background: [
      {
        check: "yes",
        mark: "✔",
        company: "First Advantage",
      },
    ],
    reviews: [
      {
        id: 1,
        name: "John Doe",
        rating: 4.5,
        comment: "Lorem ipsum dolor sit amet.",
      },
      {
        id: 2,
        name: "Jane Smith",
        rating: 5,
        comment:
          "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 3,
        name: "Alex Lee",
        rating: 5,
        comment: "Ut enim ad minim veniam.",
      },
    ],

    images: ["home_img1.png", "gr_auto2.png", "gr_auto3.png", "gr_auto4.png"],
    type: "home improvement",
    skill: "Skills",
    label: "Window cleaning (interior)",
    checked: true,
  },
  {
    name: "Landscape Guys",
    location: "location/distance",
    rating: 4.5,

    images: [
      "engine_guy1.png",
      "engine_guy2.png",
      "engine_guy3.png",
      "engine_guy4.png",
    ],
    type: "landscaping",
    skill: "Skills",
    label: "Fridge cleaning",
    checked: true,
  },
  {
    name: "Leonardo's Personal Care",
    rating: 4.8,
    location: "location/distance",
    reviews: [
      {
        id: 1,
        name: "John Doe",
        rating: 4.5,
        comment: "Lorem ipsum dolor sit amet.",
      },
      {
        id: 2,
        name: "Jane Smith",
        rating: 3.2,
        comment:
          "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 3,
        name: "Alex Lee",
        rating: 5,
        comment: "Ut enim ad minim veniam.",
      },
    ],

    images: [
      "trucks_stop1.png",
      "trucks_stop2.png",
      "trucks_stop3.png",
      "trucks_stop4.png",
    ],
    type: "personal care",
    skill: "Skills",
    label: "Oven cleaning",
    checked: false,
  },
  {
    name: "CJ's Autobody",
    location: "location/distance",
    rating: 4.5,

    images: [
      "auto_body1.png",
      "auto_body2.png",
      "auto_body3.png",
      "auto_body4.png",
    ],
    type: "automotive",
    skill: "Skills",
    label: "Laundary",
    checked: false,
  },
  {
    name: "Mustangs & Thangs",
    rating: 4.8,
    location: "location/distance",
    reviews: [
      {
        id: 1,
        name: "John Doe",
        rating: 4.5,
        comment: "Lorem ipsum dolor sit amet.",
      },
      {
        id: 2,
        name: "Jane Smith",
        rating: 3.2,
        comment:
          "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 3,
        name: "Alex Lee",
        rating: 5,
        comment: "Ut enim ad minim veniam.",
      },
    ],

    images: ["mustang1.png", "mustang2.png", "mustang3.png", "mustang4.png"],
    type: "automotive",
    skill: "Skills",
  },
  {
    name: "Bumper Savers",
    location: "location/distance",
    rating: 4.8,
    type: "business type",
    skill: "Skills",
    images: ["bumper1.png", "bumper2.png", "bumper3.png", "bumper4.png"],
    type: "business type",
    skill: "Skills",
    label: "Service 1",
    checked: true,
  },
  {
    name: "Pet Bros",
    rating: 5,
    location: "location/distance",
    reviews: [
      {
        id: 1,
        name: "John Doe",
        rating: 4.5,
        comment: "Lorem ipsum dolor sit amet.",
      },
      {
        id: 2,
        name: "Jane Smith",
        rating: 3.2,
        comment:
          "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 3,
        name: "Alex Lee",
        rating: 5,
        comment: "Ut enim ad minim veniam.",
      },
    ],

    images: [
      "tirebros1.png",
      "tirebros2.png",
      "tirebros3.png",
      "tirebros4.png",
    ],
    type: "pet care",
    skill: "Skills",
  },
  {
    name: "Collision House Design",
    location: "location/distance",
    rating: 4.8,
    type: "business type",
    skill: "Skills",
    images: [
      "collisionhouse1.png",
      "collisionhouse2.png",
      "collisionhouse3.png",
      "collisionhouse4.png",
    ],
    type: "designer & artist",
    skill: "Skills",
  },
  {
    name: "Wille & Axel Tech Hub",
    rating: 4.8,
    location: "location/distance",
    reviews: [
      {
        id: 1,
        name: "John Doe",
        rating: 4.5,
        comment: "Lorem ipsum dolor sit amet.",
      },
      {
        id: 2,
        name: "Jane Smith",
        rating: 3.2,
        comment:
          "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 3,
        name: "Alex Lee",
        rating: 5,
        comment: "Ut enim ad minim veniam.",
      },
    ],

    images: ["axel1.png", "axel2.png", "axel3.png", "axel4.png"],
    type: "technology",
    skill: "Skills",
  },
  {
    name: "Event Boys",
    rating: 4.8,
    location: "location/distance",
    reviews: [
      {
        id: 1,
        name: "John Doe",
        rating: 4.5,
        comment: "Lorem ipsum dolor sit amet.",
      },
      {
        id: 2,
        name: "Jane Smith",
        rating: 3.2,
        comment:
          "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 3,
        name: "Alex Lee",
        rating: 5,
        comment: "Ut enim ad minim veniam.",
      },
    ],
    type: "events",
    skill: "Skills",
    images: [
      "motorboys1.png",
      "motorboys2.png",
      "motorboys3.png",
      "motorboys4.png",
    ],
    type: "events",
    skill: "Skills",
  },
];

export default providers;
