const providers = [
  {
    name: "GR's Auto Care",
    rating: 5,
    location: "location/distance",
    background : [
      {
        check: "yes",
        mark: "✔",
        company: "First Advantage"
      }
    ],
    reviews: [
      {
        "id": 1,
        "name": "John Doe",
        "rating": 4.5,
        "comment": "Lorem ipsum dolor sit amet."
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "rating": 5,
        "comment": "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        "id": 3,
        "name": "Alex Lee",
        "rating": 5,
        "comment": "Ut enim ad minim veniam."
      }
    ],
    
    images: [
      "home_img1.png",
      "gr_auto2.png",
      "gr_auto3.png",
      "gr_auto4.png"
    ], 
    type: "business type", 
    skill: "Skills",
    label: 'Window cleaning (interior)', 
    checked: true
  },
  {
    name: "Engine Guys",
    location: "location/distance",
    rating: 4.5,
    
    images: [
      "engine_guy1.png",
      "engine_guy2.png",
      "engine_guy3.png",
      "engine_guy4.png"
    ], 
    type: "business type", 
    skill: "Skills",
    label: 'Fridge cleaning', 
    checked: true
  },
  {
    name: "Leonardo's Trucks Stop",
    rating: 4.8,
    location: "location/distance",
    "reviews": [
      {
        "id": 1,
        "name": "John Doe",
        "rating": 4.5,
        "comment": "Lorem ipsum dolor sit amet."
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "rating": 3.2,
        "comment": "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        "id": 3,
        "name": "Alex Lee",
        "rating": 5,
        "comment": "Ut enim ad minim veniam."
      }
    ],
    
    images: [
      "trucks_stop1.png",
      "trucks_stop2.png",
      "trucks_stop3.png",
      "trucks_stop4.png"
    ], 
    type: "business type", 
    skill: "Skills",
    label: 'Oven cleaning', 
    checked: false
  },
  {
    name: "CJ's Autobody",
    location: "location/distance",
    rating: 4.5,
    
    images: [
      "auto_body1.png",
      "auto_body2.png",
      "auto_body3.png",
      "auto_body4.png"
    ], 
    type: "business type", 
    skill: "Skills",
    label: 'Laundary', 
    checked: false
  },
  {
    name: "Mustangs & Thangs",
    rating: 4.8,
    location: "location/distance",
    "reviews": [
      {
        "id": 1,
        "name": "John Doe",
        "rating": 4.5,
        "comment": "Lorem ipsum dolor sit amet."
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "rating": 3.2,
        "comment": "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        "id": 3,
        "name": "Alex Lee",
        "rating": 5,
        "comment": "Ut enim ad minim veniam."
      }
    ],
    
    images: [
      "mustang1.png",
      "mustang2.png",
      "mustang3.png",
      "mustang4.png"
    ], 
    type: "business type", 
    skill: "Skills"
  },
  {
    name: "Bumper Savers",
    location: "location/distance",
    rating: 4.8,
    type: "business type", 
    skill: "Skills",
    images: [
      "bumper1.png",
      "bumper2.png",
      "bumper3.png",
      "bumper4.png"
    ], 
    type: "business type", 
    skill: "Skills",
    label: 'Service 1', 
    checked: true
  },
  {
      name: "Tire Bros",
      rating: 5,
      location: "location/distance",
      "reviews": [
        {
          "id": 1,
          "name": "John Doe",
          "rating": 4.5,
          "comment": "Lorem ipsum dolor sit amet."
        },
        {
          "id": 2,
          "name": "Jane Smith",
          "rating": 3.2,
          "comment": "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          "id": 3,
          "name": "Alex Lee",
          "rating": 5,
          "comment": "Ut enim ad minim veniam."
        }
      ],
      
      images: [
        "tirebros1.png",
        "tirebros2.png",
        "tirebros3.png",
        "tirebros4.png"
      ], 
      type: "business type", 
      skill: "Skills"
    },
    {
      name: "Collision House",
      location: "location/distance",
      rating: 4.8,
      type: "business type", 
      skill: "Skills",
      images: [
        "collisionhouse1.png",
        "collisionhouse2.png",
        "collisionhouse3.png",
        "collisionhouse4.png"
      ], 
      type: "business type", 
      skill: "Skills"
    },
    {
      name: "Wille & Axel",
      rating: 4.8,
      location: "location/distance",
      "reviews": [
        {
          "id": 1,
          "name": "John Doe",
          "rating": 4.5,
          "comment": "Lorem ipsum dolor sit amet."
        },
        {
          "id": 2,
          "name": "Jane Smith",
          "rating": 3.2,
          "comment": "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          "id": 3,
          "name": "Alex Lee",
          "rating": 5,
          "comment": "Ut enim ad minim veniam."
        }
      ],
      
      images: [
        "axel1.png",
        "axel2.png",
        "axel3.png",
        "axel4.png"
      ], 
      type: "business type", 
      skill: "Skills"
    },
    {
      name: "Motor Boys",
      rating: 4.8,
      location: "location/distance",
      "reviews": [
        {
          "id": 1,
          "name": "John Doe",
          "rating": 4.5,
          "comment": "Lorem ipsum dolor sit amet."
        },
        {
          "id": 2,
          "name": "Jane Smith",
          "rating": 3.2,
          "comment": "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          "id": 3,
          "name": "Alex Lee",
          "rating": 5,
          "comment": "Ut enim ad minim veniam."
        }
      ],
      type: "business type", 
      skill: "Skills",
      images: [
        "motorboys1.png",
        "motorboys2.png",
        "motorboys3.png",
        "motorboys4.png"
      ], 
      type: "business type", 
      skill: "Skills"
    },
    // {
    //   name: "Business NameI",
    //   rating: 4.8,
    //   location: "location/distance",
    //   "reviews": [
    //     {
    //       "id": 1,
    //       "name": "John Doe",
    //       "rating": 4.5,
    //       "comment": "Lorem ipsum dolor sit amet."
    //     },
    //     {
    //       "id": 2,
    //       "name": "Jane Smith",
    //       "rating": 3.2,
    //       "comment": "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    //     },
    //     {
    //       "id": 3,
    //       "name": "Alex Lee",
    //       "rating": 5,
    //       "comment": "Ut enim ad minim veniam."
    //     }
    //   ],
      
    //   images: [
    //     "https://example.com/image1.jpg",
    //     "https://example.com/image2.jpg",
    //     "https://example.com/image3.jpg",
    //     "https://example.com/image4.jpg",
    //     "https://example.com/image5.jpg"
    //   ], 
    //   type: "business type", 
    //   skill: "Skills"
    // },
    // {
    //   name: "Business NameJ",
    //   rating: 4.8,
    //   location: "location/distance",
    //   "reviews": [
    //     {
    //       "id": 1,
    //       "name": "John Doe",
    //       "rating": 4.5,
    //       "comment": "Lorem ipsum dolor sit amet."
    //     },
    //     {
    //       "id": 2,
    //       "name": "Jane Smith",
    //       "rating": 3.2,
    //       "comment": "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    //     },
    //     {
    //       "id": 3,
    //       "name": "Alex Lee",
    //       "rating": 5,
    //       "comment": "Ut enim ad minim veniam."
    //     }
    //   ],
    //   type: "business type", 
    //   skill: "Skills",
    //   images: [
    //     "https://example.com/image6.jpg",
    //     "https://example.com/image7.jpg",
    //     "https://example.com/image8.jpg",
    //     "https://example.com/image9.jpg",
    //     "https://example.com/image10.jpg"
    //   ], 
    //   type: "business type", 
    //   skill: "Skills"
    // },
    // {
    //   name: "Business NameM",
    //   rating: 4.8,
    //   location: "location/distance",
    //   "reviews": [
    //     {
    //       "id": 1,
    //       "name": "John Doe",
    //       "rating": 4.5,
    //       "comment": "Lorem ipsum dolor sit amet."
    //     },
    //     {
    //       "id": 2,
    //       "name": "Jane Smith",
    //       "rating": 3.2,
    //       "comment": "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    //     },
    //     {
    //       "id": 3,
    //       "name": "Alex Lee",
    //       "rating": 5,
    //       "comment": "Ut enim ad minim veniam."
    //     }
    //   ],
      
    //   images: [
    //     "https://example.com/image1.jpg",
    //     "https://example.com/image2.jpg",
    //     "https://example.com/image3.jpg",
    //     "https://example.com/image4.jpg",
    //     "https://example.com/image5.jpg"
    //   ], 
    //   type: "business type", 
    //   skill: "Skills"
    // },
    // {
    //   name: "Business NameN",
    //   rating: 4.8,
    //   location: "location/distance",
    //   "reviews": [
    //     {
    //       "id": 1,
    //       "name": "John Doe",
    //       "rating": 4.5,
    //       "comment": "Lorem ipsum dolor sit amet."
    //     },
    //     {
    //       "id": 2,
    //       "name": "Jane Smith",
    //       "rating": 3.2,
    //       "comment": "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    //     },
    //     {
    //       "id": 3,
    //       "name": "Alex Lee",
    //       "rating": 5,
    //       "comment": "Ut enim ad minim veniam."
    //     }
    //   ],
    //   type: "business type", 
    //   skill: "Skills",
    //   images: [
    //     "https://example.com/image6.jpg",
    //     "https://example.com/image7.jpg",
    //     "https://example.com/image8.jpg",
    //     "https://example.com/image9.jpg",
    //     "https://example.com/image10.jpg"
    //   ], 
    //   type: "business type", 
    //   skill: "Skills"
    // },
    // {
    //   name: "Business NameO",
    //   rating: 4.8,
    //   location: "location/distance",
    //   "reviews": [
    //     {
    //       "id": 1,
    //       "name": "John Doe",
    //       "rating": 4.5,
    //       "comment": "Lorem ipsum dolor sit amet."
    //     },
    //     {
    //       "id": 2,
    //       "name": "Jane Smith",
    //       "rating": 3.2,
    //       "comment": "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    //     },
    //     {
    //       "id": 3,
    //       "name": "Alex Lee",
    //       "rating": 5,
    //       "comment": "Ut enim ad minim veniam."
    //     }
    //   ],
      
    //   images: [
    //     "https://example.com/image1.jpg",
    //     "https://example.com/image2.jpg",
    //     "https://example.com/image3.jpg",
    //     "https://example.com/image4.jpg",
    //     "https://example.com/image5.jpg"
    //   ], 
    //   type: "business type", 
    //   skill: "Skills"
    // },
    // {
    //   name: "Business NameP",
    //   rating: 4.8,
    //   location: "location/distance",
    //   "reviews": [
    //     {
    //       "id": 1,
    //       "name": "John Doe",
    //       "rating": 4.5,
    //       "comment": "Lorem ipsum dolor sit amet."
    //     },
    //     {
    //       "id": 2,
    //       "name": "Jane Smith",
    //       "rating": 3.2,
    //       "comment": "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    //     },
    //     {
    //       "id": 3,
    //       "name": "Alex Lee",
    //       "rating": 5,
    //       "comment": "Ut enim ad minim veniam."
    //     }
    //   ],
    //   type: "business type", 
    //   skill: "Skills",
    //   images: [
    //     "https://example.com/image6.jpg",
    //     "https://example.com/image7.jpg",
    //     "https://example.com/image8.jpg",
    //     "https://example.com/image9.jpg",
    //     "https://example.com/image10.jpg"
    //   ], 
    //   type: "business type", 
    //   skill: "Skills"
    // },
    // {
    //     name: "Business NameQ",
    //     rating: 4.8,
    //     location: "location/distance",
    //     "reviews": [
    //       {
    //         "id": 1,
    //         "name": "John Doe",
    //         "rating": 4.5,
    //         "comment": "Lorem ipsum dolor sit amet."
    //       },
    //       {
    //         "id": 2,
    //         "name": "Jane Smith",
    //         "rating": 3.2,
    //         "comment": "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    //       },
    //       {
    //         "id": 3,
    //         "name": "Alex Lee",
    //         "rating": 5,
    //         "comment": "Ut enim ad minim veniam."
    //       }
    //     ],
        
    //     images: [
    //       "https://example.com/image1.jpg",
    //       "https://example.com/image2.jpg",
    //       "https://example.com/image3.jpg",
    //       "https://example.com/image4.jpg",
    //       "https://example.com/image5.jpg"
    //     ], 
    //     type: "business type", 
    //     skill: "Skills"
    //   },
    //   {
    //     name: "Business NameR",
    //     rating: 4.8,
    //     location: "location/distance",
    //     "reviews": [
    //       {
    //         "id": 1,
    //         "name": "John Doe",
    //         "rating": 4.5,
    //         "comment": "Lorem ipsum dolor sit amet."
    //       },
    //       {
    //         "id": 2,
    //         "name": "Jane Smith",
    //         "rating": 3.2,
    //         "comment": "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    //       },
    //       {
    //         "id": 3,
    //         "name": "Alex Lee",
    //         "rating": 5,
    //         "comment": "Ut enim ad minim veniam."
    //       }
    //     ],
    //     type: "business type", 
    //     skill: "Skills",
    //     images: [
    //       "https://example.com/image6.jpg",
    //       "https://example.com/image7.jpg",
    //       "https://example.com/image8.jpg",
    //       "https://example.com/image9.jpg",
    //       "https://example.com/image10.jpg"
    //     ], 
    //     type: "business type", 
    //     skill: "Skills"
    //   },
    //   {
    //     name: "Business NameS",
    //     rating: 4.8,
    //     location: "location/distance",
    //     "reviews": [
    //   {
    //     "id": 1,
    //     "name": "John Doe",
    //     "rating": 4.5,
    //     "comment": "Lorem ipsum dolor sit amet."
    //   },
    //   {
    //     "id": 2,
    //     "name": "Jane Smith",
    //     "rating": 3.2,
    //     "comment": "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    //   },
    //   {
    //     "id": 3,
    //     "name": "Alex Lee",
    //     "rating": 5,
    //     "comment": "Ut enim ad minim veniam."
    //   }
    // ],
        
    //     images: [
    //       "https://example.com/image1.jpg",
    //       "https://example.com/image2.jpg",
    //       "https://example.com/image3.jpg",
    //       "https://example.com/image4.jpg",
    //       "https://example.com/image5.jpg"
    //     ], 
    //     type: "business type", 
    //     skill: "Skills"
    //   },
    //   {
    //     name: "Business NameT",
    //     location: "location/distance",
    //     rating: 4.9,
    //     type: "business type", 
    //     skill: "Skills",
    //     images: [
    //       "https://example.com/image6.jpg",
    //       "https://example.com/image7.jpg",
    //       "https://example.com/image8.jpg",
    //       "https://example.com/image9.jpg",
    //       "https://example.com/image10.jpg"
    //     ], 
    //     type: "business type", 
    //     skill: "Skills"
    //   }
      
];

export default providers;