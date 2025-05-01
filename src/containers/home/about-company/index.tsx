import Image from "next/image";
import classNames from "./about-company.module.scss";
import employes from "@/assets/images/employes.jpg";
import TickCircle from "@/assets/icons/tick-circle.svg";
import Button from "@/components/atoms/button";

const AboutCompany = () => {
  return (
    <section id="about" className={classNames.main}>
      <div className={classNames.content}>
        <Image
          src={employes}
          width={450}
          height={450}
          alt="images"
          className={classNames.image}
        />
        <div className={classNames.info}>
          <p className={classNames.title}>Tentang Perusahaan</p>
          <div className={classNames["tick-wrapper"]}>
            <div className={classNames.tick}>
              <TickCircle className={classNames.icon} color="#28C840" />
              <p className={classNames.text}>Pengalaman & Keahlian</p>
            </div>
            <div className={classNames.tick}>
              <TickCircle className={classNames.icon} color="#118DE5" />
              <p className={classNames.text}>Teknologi Moderen</p>
            </div>
            <div className={classNames.tick}>
              <TickCircle className={classNames.icon} color="#FF5F57" />
              <p className={classNames.text}>Analisa & Eksekusi</p>
            </div>
          </div>
          <p className={classNames.description}>
            PT. Sonata Indonesia establish resources consultancy or service for
            oil and gas sectors, especially working directly for operating
            companies based on client demands. We provide professional and
            dedicated services to Oil and Gas industry in the Indonesia.
            <br />
            <br />
            Our Mission <br />
            As a resourceful company, PT. Sonata Indonesia desires to become one
            of the leading quality resource suppliers providing effective
            solutions to its valuable customers.
            <br />
            <br />
            Our Team
            <br /> Project management teams to service clients, and focuses on
            the highest standard of quality performance irrespective of project
            size and scope. Working in close co-operation with our clients, we
            develop integrated solutions unique to each project, while
            controlling costs and monitoring deadlines to ensure complete client
            satisfaction.
          </p>
          <Button className={classNames.button}>Selengkapnya</Button>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
