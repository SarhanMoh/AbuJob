import React from "react";

const options = [
  {
    label: "خدمات السيارات",

    value: "CarsAr",

    color: "#69d2e7",

    icon: require("../app/assets/Cars.png"),
  },

  {
    label: "التجديدات المعمارية",

    value: "RenovationsAr",

    color: "#a7dbd8",

    icon: require("../app/assets/renovations.png"),
  },

  {
    label: "علاج",

    value: "TreatmentAr",

    // color: "#c02942",
    color: "#08f26e",

    icon: require("../app/assets/Treatment.png"),
  },

  {
    label: "الفنون والحرف اليدوية",

    value: "ArtsAr",

    color: "#fe4365",

    icon: require("../app/assets/arts.png"),
  },
  {
    label: "التصليحات والحرف اليدوية",

    value: "RepairsAr",

    color: "#efa536",

    icon: require("../app/assets/Repairs.png"),
  },
  {
    label: "اختصاصين بالكهرباء",

    value: "ElectriciansAr",

    color: "#fe4365",

    icon: require("../app/assets/Electricians.png"),
  },
  {
    label: "تعليم",

    value: "TeachingAr",

    color: "#fc9d9a",

    icon: require("../app/assets/Teaching.png"),
  },
  {
    label: "التجميل",

    value: "cosmeticsAr",

    color: "#fe4365",

    icon: require("../app/assets/cosmetics.png"),
  },
  {
    label: "موسيقى",

    value: "MusicAr",

    color: "#f9cdad",

    icon: require("../app/assets/Music.png"),
  },
  {
    label: "خدمات المستهلك",

    value: "GroceryAr",

    color: "#c8c8a9",

    icon: require("../app/assets/Grocery.png"),
  },
  {
    label: "فنيين",

    value: "TechniciansAr",

    color: "#83af9b",

    icon: require("../app/assets/Technicians.png"),
  },
  {
    label: "تقديم الطعام",

    value: "CateringAr",

    color: "#ecd078",

    icon: require("../app/assets/catring.jpg"),
  },
  {
    label: "اللياقة البدنية واليوجا",

    value: "FitnessAr",

    color: "#d95b43",

    icon: require("../app/assets/fitness.jpg"),
  },
  {
    label: "متنوع",

    value: "VariousAr",

    color: "#c02942",

    icon: require("../app/assets/others.jpg"),
  },
];
const recently = [{
    name: "جمعية رقم 1",

    key: 100,

    profilePic: require("../app/assets/profileIcon.png"),

    catagory: "علاج",

    city: "القدس",

    address: "مكان في المدينة",

    phone: "050-000-0000",

    rating: 4,
  },
  {
    name: "جمعية رقم 2",

    key: 99,

    profilePic: require("../app/assets/profileIcon.png"),

    catagory: "سيارات",

    city: "القدس",

    address: "مكان في المدينة",

    phone: "050-000-0000",

    rating: 4,
  },
  {
    name: "جمعية رقم 3",

    key: 98,

    profilePic: require("../app/assets/profileIcon.png"),

    catagory: "التجديدات المعمارية",

    city: "القدس",

    address: "مكان في المدينة",

    phone: "050-000-0000",

    rating: 5,
  },
  {
    name: "جمعية رقم 4",

    key: 97,

    profilePic: require("../app/assets/profileIcon.png"),

    catagory: "التجميل",

    city: "القدس",

    address: "مكان في المدينة",

    phone: "050-000-0000",

    rating: 2,
  },
  {
    name: "جمعية رقم 5",

    key: 96,

    profilePic: require("../app/assets/profileIcon.png"),

    catagory: "اختصاصيون بالكهرباء",

    city: "القدس",

    address: "مكان في المدينة",

    phone: "050-000-0000",

    rating: 1,
  },
  {
    name: "جمعية رقم 5",

    key: 95,

    profilePic: require("../app/assets/profileIcon.png"),

    catagory: "التجميل",

    city: "القدس",

    address: "مكان في المدينة",

    phone: "050-000-0000",

    rating: 5,
  },
  {
    name: "جمعية رقم 6",

    key: 94,

    profilePic: require("../app/assets/profileIcon.png"),

    catagory: "علاج",

    city: "القدس",

    address: "مكان في المدينة",

    phone: "050-000-0000",

    rating: 4,
  },
  {
    name: "جمعية رقم 7",

    key: 93,

    profilePic: require("../app/assets/profileIcon.png"),

    catagory: "موسيقى",

    city: "القدس",

    address: "مكان في المدينة",

    phone: "050-000-0000",

    rating: 2,
  },
  {
    name: "جمعية رقم 8",

    key: 92,

    profilePic: require("../app/assets/profileIcon.png"),

    catagory: "موسيقى",

    city: "القدس",

    address: "مكان في المدينة",

    phone: "050-000-0000",

    rating: 4,
  },
  {
    name: "جمعية رقم 9",

    key: 91,

    profilePic: require("../app/assets/profileIcon.png"),

    catagory: "تعليم",

    city: "القدس",

    address: "مكان في المدينة",

    phone: "050-000-0000",

    rating: 1,
  },
  {
    name: "جمعية رقم 10",

    key: 90,

    profilePic: require("../app/assets/profileIcon.png"),

    catagory: "اختصاصيون بالكهرباء",

    city: "القدس",

    address: "مكان في المدينة",

    phone: "050-000-0000",

    rating: 5,
  },
  {
    name: "جمعية رقم 11",

    key: 89,

    profilePic: require("../app/assets/profileIcon.png"),

    catagory: "اختصاصيون بالكهرباء",

    city: "القدس",

    address: "مكان في المدينة",

    phone: "050-000-0000",

    rating: 4,
  },
  
];

exports.options = options;
exports.recently = recently;
