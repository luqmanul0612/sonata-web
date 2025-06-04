import iso900012015 from "@/assets/images/certificates/iso-9001-2015.webp";
import iso450012018 from "@/assets/images/certificates/iso-45001-2018.webp";
import iso140012015 from "@/assets/images/certificates/iso-14001-2015.webp";
import { StaticImageData } from "next/image";

type CertificatesData = {
  [year: string]: {
    key: number;
    title: string;
    date: string;
    description: string;
    image: StaticImageData;
  }[];
};

export const certificatesData: CertificatesData = {
  "2024": [
    {
      key: 1,
      title:
        "ISO 45001:2018 – Occupational Health and Safety Management System",
      date: "12 Mei 2024",
      description:
        "Diperlukan untuk memastikan perusahaan mematuhi standar internasional dalam hal kesehatan dan keselamatan kerja (K3), khususnya di sektor energi dan pertambangan yang memiliki risiko tinggi.",
      image: iso450012018,
    },
    {
      key: 2,
      title: "ISO 14001:2015 – Environmental Management System",
      date: "12 Mei 2024",
      description:
        "Menunjukkan komitmen perusahaan dalam pengelolaan lingkungan hidup, sangat penting untuk proyek-proyek yang berpotensi berdampak lingkungan seperti tambang dan migas.",
      image: iso140012015,
    },
  ],
  "2025": [
    {
      key: 1,
      title: "ISO 9001:2015 – Quality Management System",
      date: "12 Mei 2025",
      description:
        "Menunjukkan bahwa perusahaan telah menerapkan sistem manajemen mutu yang konsisten dalam penyediaan layanan dan produk. Ini penting untuk menjamin kualitas pekerjaan dan kepuasan klien.",
      image: iso900012015,
    },
  ],
};
