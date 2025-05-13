import certificateImage1 from "@/assets/images/certificates/certificate-award-1.webp";
import certificateImage2 from "@/assets/images/certificates/certificate-award-2.webp";
import certificateImage3 from "@/assets/images/certificates/certificate-award-3.webp";
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
      key: 3,
      title: "Judul Penghargaan",
      date: "12 Mei 2025",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tellus viverra a id pellentesque eget vulputate. Vitae amet justo mi magna morbi montes vel amet. Bibendum pellentesque risus metus sagittis. Nisl sed tincidunt euismod habitasse vulputate quam donec morbi dictumst. Mauris rutrum porttitor et sit eget venenatis leo et. Posuere justo sed tristique viverra a. Quam velit faucibus sed eu leo sed sit.",
      image: certificateImage3,
    },
  ],
  "2025": [
    {
      key: 1,
      title: "Judul Sertifikat",
      date: "12 Mei 2025",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tellus viverra a id pellentesque eget vulputate. Vitae amet justo mi magna morbi montes vel amet. Bibendum pellentesque risus metus sagittis. Nisl sed tincidunt euismod habitasse vulputate quam donec morbi dictumst. Mauris rutrum porttitor et sit eget venenatis leo et. Posuere justo sed tristique viverra a. Quam velit faucibus sed eu leo sed sit.",
      image: certificateImage1,
    },
    {
      key: 2,
      title: "Judul Sertifikat",
      date: "12 Mei 2025",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tellus viverra a id pellentesque eget vulputate. Vitae amet justo mi magna morbi montes vel amet. Bibendum pellentesque risus metus sagittis. Nisl sed tincidunt euismod habitasse vulputate quam donec morbi dictumst. Mauris rutrum porttitor et sit eget venenatis leo et. Posuere justo sed tristique viverra a. Quam velit faucibus sed eu leo sed sit.",
      image: certificateImage2,
    },
    {
      key: 3,
      title: "Judul Penghargaan",
      date: "12 Mei 2025",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tellus viverra a id pellentesque eget vulputate. Vitae amet justo mi magna morbi montes vel amet. Bibendum pellentesque risus metus sagittis. Nisl sed tincidunt euismod habitasse vulputate quam donec morbi dictumst. Mauris rutrum porttitor et sit eget venenatis leo et. Posuere justo sed tristique viverra a. Quam velit faucibus sed eu leo sed sit.",
      image: certificateImage3,
    },
  ],
};
