import clientExample from "@/assets/images/client-example.webp";

const data = [
  {
    key: 1,
    name: "Jaxson Vetrovs",
    position: "Direktur",
    company: "PT. Jaya Maju Indonesia",
    message:
      "Lorem ipsum dolor sit amet consectetur. Lacus vitae tellus elementum porttitor massa. Congue faucibus integer quam quis at amet volutpat sit facilisis.",
    image: clientExample,
  },
  {
    key: 2,
    name: "Jaxson Vetrovs",
    position: "-",
    company: "PT. Sentosa Jaya",
    message:
      "Lorem ipsum dolor sit amet consectetur. Lacus vitae tellus elementum porttitor massa. Congue faucibus integer quam quis at amet volutpat sit facilisis.",
    image: clientExample,
  },
  {
    key: 3,
    name: "Jaxson Vetrovs",
    position: "Direktur",
    company: "PT. Mandiri Citra Abadi",
    message:
      "Lorem ipsum dolor sit amet consectetur. Lacus vitae tellus elementum porttitor massa. Congue faucibus integer quam quis at amet volutpat sit facilisis.",
    image: clientExample,
  },
];

export const clientsData = [...data, ...data, ...data, ...data].map(
  (item, idx) => ({
    ...item,
    key: idx,
  })
);
