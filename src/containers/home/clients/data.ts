import clientExample1 from "@/assets/images/home/client-example-1.webp";
import clientExample2 from "@/assets/images/home/client-example-2.webp";
import clientExample3 from "@/assets/images/home/client-example-3.webp";

const data = [
  {
    key: 1,
    name: "Jaxson Vetrovs",
    position: "Direktur",
    company: "PT. Jaya Maju Indonesia",
    message:
      "“PT Sonata Resources Indonesia menunjukkan profesionalisme tinggi dalam setiap aspek pekerjaan. Tim mereka responsif dan selalu memberikan solusi tepat sesuai kebutuhan proyek kami.”",
    image: clientExample1,
  },
  {
    key: 2,
    name: "Anie Liona Lee",
    position: "-",
    company: "PT. Sentosa Jaya",
    message:
      "“Dengan dukungan tenaga ahli dariPT Sonata Resources Indonesia, proses pelaksanaan proyek kami berjalan lancar dan efisien. Layanan mereka sangat bisa diandalkan.”",
    image: clientExample2,
  },
  {
    key: 3,
    name: "Diana Victoria",
    position: "Direktur",
    company: "PT. Mandiri Citra Abadi",
    message:
      "“Kami sangat puas dengan kinerja dan komitmenPT Sonata Resources Indonesia. Mereka mampu memberikan hasil kerja yang sesuai dengan standar industri dan waktu yang ditargetkan.”",
    image: clientExample3,
  },
];

export const clientsData = [...data, ...data, ...data, ...data].map(
  (item, idx) => ({
    ...item,
    key: idx,
  })
);
