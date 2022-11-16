const Images = [
    { image: require("../../../Images/Chat/user1.png") },
    { image: require("../../../Images/Chat/user2.png") },
    { image: require("../../../Images/Chat/user3.png") },
    { image: require("../../../Images/Chat/user4.png") },
    //box
    { image: require("../../../Images/Map/Box2.png") },
    { image: require("../../../Images/Map/Rad.png") },
    { image: require("../../../Images/Map/Eat.png") },
    { image: require("../../../Images/Map/Circle.png") },
    { image: require("../../../Images/Map/Gcircle.png") },
     { image: require("../../../Images/Map/Gcircle.png") },

];

export const markers = [
    {
      coordinate: {
        latitude: 22.6293867,
        longitude: 88.4354486,
      },
      id:1,
      title: "Amazing Food Place",
      description: "This is the best food place",
      image: Images[0].image,
      rating: 4,
      reviews: 99,
    },
];
export const BoxView = [
  {
    coordinate: {
      latitude: 22.6541591,
      longitude: 88.3951396,
    },
    id:1,
    image: Images[4].image,
    rating: 4,
    reviews: 99,
  },
  
  {
    coordinate: {
      latitude: 22.6168719,
      longitude:88.4129125,
    },
    id:2,
    image: Images[4].image,
    rating: 5,
    reviews: 102,
  },
  {
    coordinate: {
      latitude: 22.6281662,
      longitude: 88.4410113,
    },
    id:3,
    image: Images[4].image,
    rating: 3,
    reviews: 220,
  },
  {
    coordinate: {
      latitude: 22.6341137,
      longitude: 88.4497463,
    },
    id:4,
    image: Images[4].image,
    rating: 4,
    reviews: 48,
  },
  {
    coordinate: {
      latitude: 22.6292757,
      longitude: 88.444781,
    },
    id:5,
    image: Images[4].image,
    rating: 4,
    reviews: 178,
  },
];
export const findingCordinate = [
  {
    coordinate: {
      latitude: 22.6541591,
      longitude: 88.3951396,
    },
    id:1,
    image: Images[4].image,
    rating: 4,
    reviews: 99,
  },
  
  {
    coordinate: {
      latitude: 22.6168719,
      longitude:88.4129125,
    },
    id:2,
    image: Images[4].image,
    rating: 5,
    reviews: 102,
  },
  {
    coordinate: {
      latitude: 22.6281662,
      longitude: 88.4410113,
    },
    id:3,
    image: Images[4].image,
    rating: 3,
    reviews: 220,
  },
  {
    coordinate: {
      latitude: 22.6341137,
      longitude: 88.4497463,
    },
    id:4,
    image: Images[4].image,
    rating: 4,
    reviews: 48,
  },
  {
    coordinate: {
      latitude: 22.6292757,
      longitude: 88.444781,
    },
    id:5,
    image: Images[4].image,
    rating: 4,
    reviews: 178,
  },
];
export const locations =
        [

          {
                title: 'Location 1', latitude: 24.86170245,
                longitude: 67.00310938,
                markerImage:Images[6].image ,
                weight:13
        },

        // {
        //         title: 'Location 2', latitude: 24.83170980,
        //         longitude: 67.00210948,
        // markerImage:Images[6].image ,
        //         weight:19
        // },
        {
                title: 'Location 3', latitude: 24.83073537,
                longitude: 67.02129903,
                markerImage:Images[6].image ,
                weight:18
        },
        // {
        //         title: 'Location 4', latitude: 24.83073230,
        //         longitude: 67.10113298,
        //         markerImage:Images[6].image ,
        //         weight:12
        // },
        // {
        //         title: 'Location 5', latitude: 24.83079990,
        //         longitude: 67.02939980,
        //         markerImage: "https://i.ibb.co/2PwKJWc/UA-Studios-2.png",
        //         weight:2
        // },
        {
                title: 'Location 6', latitude: 24.85072329,
                longitude: 67.02129803,
                markerImage:Images[6].image ,
                weight:15
        },
        {
                title: 'Location 7', latitude: 24.84089002,
                longitude: 67.02122203,
                markerImage:Images[5].image,
                weight:5
        },
        // {
        //         title: 'Location 8', latitude: 24.84064338,
        //         longitude: 67.03120900,
        //         markerImage: "https://i.ibb.co/2PwKJWc/UA-Studios-2.png",
        //         weight:50

        // },
        {
                title: 'Location 9', latitude: 24.84058890,
                longitude: 67.04114039,
                markerImage:Images[6].image ,
                weight:54

        },
        // {
        //         title: 'Location 10', latitude: 24.85059990,
        //         longitude: 67.04139399,
        //         markerImage: "https://i.ibb.co/2PwKJWc/UA-Studios-2.png",
        //         weight:34

        // },
        // {
        //         title: 'Location 11', latitude: 24.85034563,
        //         longitude: 67.04111009,
        //         markerImage: "https://i.ibb.co/2PwKJWc/UA-Studios-2.png",
        //         weight:21

        // }
      ]

      export const Box =
        [

          {
                title: 'Location 1',
                 latitude: 24.86170245,
                longitude: 67.00310938,
                markerImage:Images[4].image ,
                weight:13
        },

       
        {
                title: 'Location 3', latitude: 24.83073537,
                longitude: 67.02129903,
                markerImage:Images[7].image ,
                weight:18
        },
       
        {
                title: 'Location 6', latitude: 24.85072329,
                longitude: 67.02129803,
                markerImage:Images[8].image ,
                weight:25
        },
    
      ]
      export const Pickup =
      [

     
      {
              title: 'Location 3', latitude: 24.83073537,
              longitude: 67.02129903,
              markerImage:Images[7].image ,
              weight:18
      },
     
      {
              title: 'Location 6', latitude: 24.85072329,
              longitude: 67.02129803,
              markerImage:Images[8].image ,
              weight:25
      },
  
    ]
    export const PickupDate =
    [
   
    {
            title: 'Location 6', latitude: 24.85072329,
            longitude: 67.02129803,
            markerImage:Images[5].image ,
            weight:25
    },

  ]

    export const filter =
        [

          {
                title: 'Location 1', latitude: 24.86170245,
                longitude: 67.00310938,
                markerImage:Images[4].image ,
                weight:13
        },

        // {
        //         title: 'Location 2', latitude: 24.83170980,
        //         longitude: 67.00210948,
        // markerImage:Images[6].image ,
        //         weight:19
        // },
        {
                title: 'Location 3', latitude: 24.83073537,
                longitude: 67.02129903,
                markerImage:Images[4].image ,
                weight:18
        },
        // {
        //         title: 'Location 4', latitude: 24.83073230,
        //         longitude: 67.10113298,
        //         markerImage:Images[6].image ,
        //         weight:12
        // },
        // {
        //         title: 'Location 5', latitude: 24.83079990,
        //         longitude: 67.02939980,
        //         markerImage: "https://i.ibb.co/2PwKJWc/UA-Studios-2.png",
        //         weight:2
        // },
        {
                title: 'Location 6', latitude: 24.85072329,
                longitude: 67.02129803,
                markerImage:Images[4].image ,
                weight:15
        },
        {
                title: 'Location 7', latitude: 24.84089002,
                longitude: 67.02122203,
                markerImage:Images[4].image,
                weight:5
        },
        // {
        //         title: 'Location 8', latitude: 24.84064338,
        //         longitude: 67.03120900,
        //         markerImage: "https://i.ibb.co/2PwKJWc/UA-Studios-2.png",
        //         weight:50

        // },
        // {
        //         title: 'Location 9', latitude: 24.84058890,
        //         longitude: 67.04114039,
        //         markerImage:Images[6].image ,
        //         weight:54

        // },
        // {
        //         title: 'Location 10', latitude: 24.85059990,
        //         longitude: 67.04139399,
        //         markerImage: "https://i.ibb.co/2PwKJWc/UA-Studios-2.png",
        //         weight:34

        // },
        // {
        //         title: 'Location 11', latitude: 24.85034563,
        //         longitude: 67.04111009,
        //         markerImage: "https://i.ibb.co/2PwKJWc/UA-Studios-2.png",
        //         weight:21

        // }
      ]
    
export const mapDarkStyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#181818"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1b1b1b"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#2c2c2c"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8a8a8a"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#373737"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3c3c3c"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#4e4e4e"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3d3d3d"
        }
      ]
    }
  ];

  export const mapStandardStyle = [
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
  ];

