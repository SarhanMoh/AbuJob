import React from "react";

const options = [
  {
    label: "רכב",

    value: "Cars",

    color: "#69d2e7",

    icon: require("../app/assets/Cars.png"),
  },

  {
    label: "שיפוצים",

    value: "Renovations",

    color: "#a7dbd8",

    icon: require("../app/assets/renovations.png"),
  },

  {
    label: "טיפול",

    value: "Treatment",

    // color: "#c02942",
    color: "#08f26e",

    icon: require("../app/assets/Treatment.png"),
  },

  {
    label: "אמנות ומלאכת יד",

    value: "Arts",

    color: "#fe4365",

    icon: require("../app/assets/arts.png"),
  },
  {
    label: "תיקונים ומלאכות",

    value: "Repairs",

    color: "#efa536",

    icon: require("../app/assets/Repairs.png"),
  },
  {
    label: "חשמלאות",

    value: "Electricians",

    color: "#fe4365",

    icon: require("../app/assets/Electricians.png"),
  },
  {
    label: "הוראה",

    value: "Teaching",

    color: "#fc9d9a",

    icon: require("../app/assets/Teaching.png"),
  },
  {
    label: "קוסמטיקה",

    value: "cosmetics",

    color: "#fe4365",

    icon: require("../app/assets/cosmetics.png"),
  },
  {
    label: "מוסיקה",

    value: "Music",

    color: "#f9cdad",

    icon: require("../app/assets/Music.png"),
  },
  {
    label: "שירותי מכלות",

    value: "Grocery",

    color: "#c8c8a9",

    icon: require("../app/assets/Grocery.png"),
  },
  {
    label: "טכנאים",

    value: "Technicians",

    color: "#83af9b",

    icon: require("../app/assets/Technicians.png"),
  },
  {
    label: "קייטרינג",

    value: "Catering",

    color: "#ecd078",

    icon: require("../app/assets/catring.jpg"),
  },
  {
    label: "כושר ואימון פיזי",

    value: "Fitness",

    color: "#d95b43",

    icon: require("../app/assets/fitness.jpg"),
  },
  {
    label: "שונות",

    value: "Various",

    color: "#c02942",

    icon: require("../app/assets/others.jpg"),
  },
];
const recently = [
  {
    name: "עמותה 1",

    key: 100,

    profilePic: require("../app/assets/profileIcon.png"),

    catagory: "טיפול",

    city: "ירושלים",

    address: "מקום במדינה",

    phone: "050-000-0000",

    rating: 4,
  },
  {
    name: "עמותה 2",

    key: 99,

    profilePic: require("../app/assets/profileIcon.png"),

    catagory: "רכב",

    city: "ירושלים",

    address: "מקום במדינה",

    phone: "050-000-0000",

    rating: 4,
  },
  {
    name: "עמותה 3",

    key: 98,

    profilePic: require("../app/assets/profileIcon.png"),

    catagory: "שיפוצים",

    city: "ירושלים",

    address: "מקום במדינה",

    phone: "050-000-0000",

    rating: 5,
  },
  {
    name: "עמותה 4",

    key: 97,

    profilePic: require("../app/assets/profileIcon.png"),

    catagory: "קןסמטיקה",

    city: "ירושלים",

    address: "מקום במדינה",

    phone: "050-000-0000",

    rating: 2,
  },
  {
    name: "עמותה 4",

    key: 96,

    profilePic: require("../app/assets/profileIcon.png"),

    catagory: "חשמלאות",

    city: "ירושלים",

    address: "מקום במדינה",

    phone: "050-000-0000",

    rating: 1,
  },
  {
    name: "עמותה 5",

    key: 95,

    profilePic: require("../app/assets/profileIcon.png"),

    catagory: "קןסמטיקה",

    city: "ירושלים",

    address: "מקום במדינה",

    phone: "050-000-0000",

    rating: 5,
  },
  {
    name: "עמותה 6",

    key: 94,

    profilePic: require("../app/assets/profileIcon.png"),

    catagory: "טיפול",

    city: "ירושלים",

    address: "מקום במדינה",

    phone: "050-000-0000",

    rating: 4,
  },
  {
    name: "עמותה 7",

    key: 93,

    profilePic: require("../app/assets/profileIcon.png"),

    catagory: "מוסיקה",

    city: "ירושלים",

    address: "מקום במדינה",

    phone: "050-000-0000",

    rating: 2,
  },
  {
    name: "עמותה 8",

    key: 92,

    profilePic: require("../app/assets/profileIcon.png"),

    catagory: "מוסיקה",

    city: "ירושלים",

    address: "מקום במדינה",

    phone: "050-000-0000",

    rating: 4,
  },
  {
    name: "עמותה 9",

    key: 91,

    profilePic: require("../app/assets/profileIcon.png"),

    catagory: "הוראה",

    city: "ירושלים",

    address: "מקום במדינה",

    phone: "050-000-0000",

    rating: 1,
  },
  {
    name: "עמותה 10",

    key: 90,

    profilePic: require("../app/assets/profileIcon.png"),

    catagory: "חשמלאות",

    city: "ירושלים",

    address: "מקום במדינה",

    phone: "050-000-0000",

    rating: 5,
  },
  {
    name: "עמותה 11",

    key: 89,

    profilePic: require("../app/assets/profileIcon.png"),

    catagory: "חשמלאות",

    city: "ירושלים",

    address: "מקום במדינה",

    phone: "050-000-0000",

    rating: 4,
  },
];

exports.options = options;
exports.recently = recently;
