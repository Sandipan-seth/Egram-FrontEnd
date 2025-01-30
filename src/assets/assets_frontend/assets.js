import profile_pic from "./profile_pic.png";
import dropdown_icon from "./dropdown_icon.svg";
import menu_icon from "./menu_icon.svg";
import cross_icon from "./cross_icon.png";
import chats_icon from "./chats_icon.svg";
import razorpay_logo from "./razorpay_logo.png";
import aadhar_card from "./aadhar.png";
import panCard from "./panCard.png";
import rasonCard from "./rasonCard.png"; 
import voterCard from "./voterCard.png";
import drivingLicense from "./drivingLicense.png";
import upArrow from "./up-arrow.svg";

export const assets = {
  profile_pic,
  aadhar_card,
  dropdown_icon,
  menu_icon,
  cross_icon,
  chats_icon,
  razorpay_logo,
  panCard,
  voterCard,
  rasonCard,
  drivingLicense,
  upArrow,
};

export const services = [
  {
    id: "aadhar_card",
    title: "Aadhar Card Services",
    description:
      "Apply, update, or check the status of your Aadhar card with ease and convenience.",
    image: aadhar_card,
  },

  {
    id: "voter_card",
    title: "Voter Card Services",
    description:
      "Register, update details, or track your voter ID application.",
    image: voterCard,
  },

  {
    id: "pan_card",
    title: "PAN Card Services",
    description: "Get a new PAN card or update your existing PAN details.",
    image: panCard,
  },

  {
    id: "rason_card",
    title: "Rason Card Services",
    description:
      "Apply for a new Rason card, renew an existing one, or update your details.",
    image: rasonCard,
  },

  {
    id:  "driving_license",
    title: "Driving License Services",
    description:
      "Apply for a new driving license, renew an existing one, or update your details.",
    image: drivingLicense,
  },

  {
    id: "passport_services",
    title: "Passport Services",
    description:
      "Apply for a new passport, renew an existing one, or update your details.",
    image: aadhar_card,
  }
];

// export const specialityData = [
//     {
//         speciality: 'General physician',
//         image: General_physician
//     },
//     {
//         speciality: 'Gynecologist',
//         image: Gynecologist
//     },
//     {
//         speciality: 'Dermatologist',
//         image: Dermatologist
//     },
//     {
//         speciality: 'Pediatricians',
//         image: Pediatricians
//     },
//     {
//         speciality: 'Neurologist',
//         image: Neurologist
//     },
//     {
//         speciality: 'Gastroenterologist',
//         image: Gastroenterologist
//     },
// ]

// export const doctors = [
//   {
//     _id: "doc1",
//     name: "Dr. Richard James",
//     image: doc1,
//     speciality: "General physician",
//     degree: "MBBS",
//     experience: "4 Years",
//     about:
//       "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
//     fees: 500,
//     address: {
//       line1: "17th Cross, Richmond",
//       line2: "Circle, Ring Road, London",
//     },
//   },
//   {
//     _id: "doc2",
//     name: "Dr. Emily Larson",
//     image: doc2,
//     speciality: "Gynecologist",
//     degree: "MBBS",
//     experience: "3 Years",
//     about:
//       "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
//     fees: 600,
//     address: {
//       line1: "27th Cross, Richmond",
//       line2: "Circle, Ring Road, London",
//     },
//   },
//   {
//     _id: "doc3",
//     name: "Dr. Sarah Patel",
//     image: doc3,
//     speciality: "Dermatologist",
//     degree: "MBBS",
//     experience: "1 Years",
//     about:
//       "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
//     fees: 300,
//     address: {
//       line1: "37th Cross, Richmond",
//       line2: "Circle, Ring Road, London",
//     },
//   },
//   {
//     _id: "doc4",
//     name: "Dr. Christopher Lee",
//     image: doc4,
//     speciality: "Pediatricians",
//     degree: "MBBS",
//     experience: "2 Years",
//     about:
//       "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
//     fees: 400,
//     address: {
//       line1: "47th Cross, Richmond",
//       line2: "Circle, Ring Road, London",
//     },
//   },
//   {
//     _id: "doc5",
//     name: "Dr. Jennifer Garcia",
//     image: doc5,
//     speciality: "Neurologist",
//     degree: "MBBS",
//     experience: "4 Years",
//     about:
//       "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
//     fees: 500,
//     address: {
//       line1: "57th Cross, Richmond",
//       line2: "Circle, Ring Road, London",
//     },
//   },
//   {
//     _id: "doc6",
//     name: "Dr. Andrew Williams",
//     image: doc6,
//     speciality: "Neurologist",
//     degree: "MBBS",
//     experience: "4 Years",
//     about:
//       "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
//     fees: 500,
//     address: {
//       line1: "57th Cross, Richmond",
//       line2: "Circle, Ring Road, London",
//     },
//   },
//   {
//     _id: "doc7",
//     name: "Dr. Christopher Davis",
//     image: doc7,
//     speciality: "General physician",
//     degree: "MBBS",
//     experience: "4 Years",
//     about:
//       "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
//     fees: 500,
//     address: {
//       line1: "17th Cross, Richmond",
//       line2: "Circle, Ring Road, London",
//     },
//   },
//   {
//     _id: "doc8",
//     name: "Dr. Timothy White",
//     image: doc8,
//     speciality: "Gynecologist",
//     degree: "MBBS",
//     experience: "3 Years",
//     about:
//       "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
//     fees: 600,
//     address: {
//       line1: "27th Cross, Richmond",
//       line2: "Circle, Ring Road, London",
//     },
//   },
//   {
//     _id: "doc9",
//     name: "Dr. Ava Mitchell",
//     image: doc9,
//     speciality: "Dermatologist",
//     degree: "MBBS",
//     experience: "1 Years",
//     about:
//       "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
//     fees: 300,
//     address: {
//       line1: "37th Cross, Richmond",
//       line2: "Circle, Ring Road, London",
//     },
//   },
//   {
//     _id: "doc10",
//     name: "Dr. Jeffrey King",
//     image: doc10,
//     speciality: "Pediatricians",
//     degree: "MBBS",
//     experience: "2 Years",
//     about:
//       "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
//     fees: 400,
//     address: {
//       line1: "47th Cross, Richmond",
//       line2: "Circle, Ring Road, London",
//     },
//   },
//   {
//     _id: "doc11",
//     name: "Dr. Zoe Kelly",
//     image: doc11,
//     speciality: "Gastroenterologist",
//     degree: "MBBS",
//     experience: "4 Years",
//     about:
//       "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
//     fees: 500,
//     address: {
//       line1: "57th Cross, Richmond",
//       line2: "Circle, Ring Road, London",
//     },
//   },
//   {
//     _id: "doc12",
//     name: "Dr. Patrick Harris",
//     image: doc12,
//     speciality: "Neurologist",
//     degree: "MBBS",
//     experience: "4 Years",
//     about:
//       "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
//     fees: 500,
//     address: {
//       line1: "57th Cross, Richmond",
//       line2: "Circle, Ring Road, London",
//     },
//   },
//   {
//     _id: "doc13",
//     name: "Dr. Chloe Evans",
//     image: doc13,
//     speciality: "General physician",
//     degree: "MBBS",
//     experience: "4 Years",
//     about:
//       "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
//     fees: 500,
//     address: {
//       line1: "17th Cross, Richmond",
//       line2: "Circle, Ring Road, London",
//     },
//   },
//   {
//     _id: "doc14",
//     name: "Dr. Ryan Martinez",
//     image: doc14,
//     speciality: "Gynecologist",
//     degree: "MBBS",
//     experience: "3 Years",
//     about:
//       "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
//     fees: 600,
//     address: {
//       line1: "27th Cross, Richmond",
//       line2: "Circle, Ring Road, London",
//     },
//   },
//   {
//     _id: "doc15",
//     name: "Dr. Amelia Hill",
//     image: doc15,
//     speciality: "Dermatologist",
//     degree: "MBBS",
//     experience: "1 Years",
//     about:
//       "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
//     fees: 300,
//     address: {
//       line1: "37th Cross, Richmond",
//       line2: "Circle, Ring Road, London",
//     },
//   },
// ];
