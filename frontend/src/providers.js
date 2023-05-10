const providers = [
    {
      name: "Business NameA",
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
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
        "https://example.com/image3.jpg",
        "https://example.com/image4.jpg",
        "https://example.com/image5.jpg"
      ], 
      type: "business type", 
      skill: "Skills",
      label: 'Window cleaning (interior)', 
      checked: true
    },
    {
      name: "Business NameB",
      location: "location/distance",
      rating: 4.5,
      
      images: [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
        "https://example.com/image3.jpg",
        "https://example.com/image4.jpg",
        "https://example.com/image5.jpg"
      ], 
      type: "business type", 
      skill: "Skills",
      label: 'Fridge cleaning', 
      checked: true
    },
    {
      name: "Business NameA",
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
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
        "https://example.com/image3.jpg",
        "https://example.com/image4.jpg",
        "https://example.com/image5.jpg"
      ], 
      type: "business type", 
      skill: "Skills",
      label: 'Oven cleaning', 
      checked: false
    },
    {
      name: "Business NameC",
      location: "location/distance",
      rating: 4.5,
      
      images: [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
        "https://example.com/image3.jpg",
        "https://example.com/image4.jpg",
        "https://example.com/image5.jpg"
      ], 
      type: "business type", 
      skill: "Skills",
      label: 'Laundary', 
      checked: false
    },
    {
      name: "Business Name",
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
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
        "https://example.com/image3.jpg",
        "https://example.com/image4.jpg",
        "https://example.com/image5.jpg"
      ], 
      type: "business type", 
      skill: "Skills"
    },
    {
      name: "Business NameD",
      location: "location/distance",
      rating: 4.8,
      type: "business type", 
      skill: "Skills",
      images: [
        "https://example.com/image6.jpg",
        "https://example.com/image7.jpg",
        "https://example.com/image8.jpg",
        "https://example.com/image9.jpg",
        "https://example.com/image10.jpg"
      ], 
      type: "business type", 
      skill: "Skills",
      label: 'Service 1', 
      checked: true
    },
    {
        name: "Business NameE",
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
          "https://example.com/image1.jpg",
          "https://example.com/image2.jpg",
          "https://example.com/image3.jpg",
          "https://example.com/image4.jpg",
          "https://example.com/image5.jpg"
        ], 
        type: "business type", 
        skill: "Skills"
      },
      {
        name: "Business NameF",
        location: "location/distance",
        rating: 4.8,
        type: "business type", 
        skill: "Skills",
        images: [
          "https://example.com/image6.jpg",
          "https://example.com/image7.jpg",
          "https://example.com/image8.jpg",
          "https://example.com/image9.jpg",
          "https://example.com/image10.jpg"
        ], 
        type: "business type", 
        skill: "Skills"
      },
      {
        name: "Business NameG",
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
          "https://example.com/image1.jpg",
          "https://example.com/image2.jpg",
          "https://example.com/image3.jpg",
          "https://example.com/image4.jpg",
          "https://example.com/image5.jpg"
        ], 
        type: "business type", 
        skill: "Skills"
      },
      {
        name: "Business NameH",
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
          "https://example.com/image6.jpg",
          "https://example.com/image7.jpg",
          "https://example.com/image8.jpg",
          "https://example.com/image9.jpg",
          "https://example.com/image10.jpg"
        ], 
        type: "business type", 
        skill: "Skills"
      },
      {
        name: "Business NameI",
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
          "https://example.com/image1.jpg",
          "https://example.com/image2.jpg",
          "https://example.com/image3.jpg",
          "https://example.com/image4.jpg",
          "https://example.com/image5.jpg"
        ], 
        type: "business type", 
        skill: "Skills"
      },
      {
        name: "Business NameJ",
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
          "https://example.com/image6.jpg",
          "https://example.com/image7.jpg",
          "https://example.com/image8.jpg",
          "https://example.com/image9.jpg",
          "https://example.com/image10.jpg"
        ], 
        type: "business type", 
        skill: "Skills"
      },
      {
        name: "Business NameM",
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
          "https://example.com/image1.jpg",
          "https://example.com/image2.jpg",
          "https://example.com/image3.jpg",
          "https://example.com/image4.jpg",
          "https://example.com/image5.jpg"
        ], 
        type: "business type", 
        skill: "Skills"
      },
      {
        name: "Business NameN",
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
          "https://example.com/image6.jpg",
          "https://example.com/image7.jpg",
          "https://example.com/image8.jpg",
          "https://example.com/image9.jpg",
          "https://example.com/image10.jpg"
        ], 
        type: "business type", 
        skill: "Skills"
      },
      {
        name: "Business NameO",
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
          "https://example.com/image1.jpg",
          "https://example.com/image2.jpg",
          "https://example.com/image3.jpg",
          "https://example.com/image4.jpg",
          "https://example.com/image5.jpg"
        ], 
        type: "business type", 
        skill: "Skills"
      },
      {
        name: "Business NameP",
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
          "https://example.com/image6.jpg",
          "https://example.com/image7.jpg",
          "https://example.com/image8.jpg",
          "https://example.com/image9.jpg",
          "https://example.com/image10.jpg"
        ], 
        type: "business type", 
        skill: "Skills"
      },
      {
          name: "Business NameQ",
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
            "https://example.com/image1.jpg",
            "https://example.com/image2.jpg",
            "https://example.com/image3.jpg",
            "https://example.com/image4.jpg",
            "https://example.com/image5.jpg"
          ], 
          type: "business type", 
          skill: "Skills"
        },
        {
          name: "Business NameR",
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
            "https://example.com/image6.jpg",
            "https://example.com/image7.jpg",
            "https://example.com/image8.jpg",
            "https://example.com/image9.jpg",
            "https://example.com/image10.jpg"
          ], 
          type: "business type", 
          skill: "Skills"
        },
        {
          name: "Business NameS",
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
            "https://example.com/image1.jpg",
            "https://example.com/image2.jpg",
            "https://example.com/image3.jpg",
            "https://example.com/image4.jpg",
            "https://example.com/image5.jpg"
          ], 
          type: "business type", 
          skill: "Skills"
        },
        {
          name: "Business NameT",
          location: "location/distance",
          rating: 4.8,
          type: "business type", 
          skill: "Skills",
          images: [
            "https://example.com/image6.jpg",
            "https://example.com/image7.jpg",
            "https://example.com/image8.jpg",
            "https://example.com/image9.jpg",
            "https://example.com/image10.jpg"
          ], 
          type: "business type", 
          skill: "Skills"
        }
        
  ];

  export default providers;