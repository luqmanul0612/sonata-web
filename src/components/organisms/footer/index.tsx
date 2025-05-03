"use client";

import classNames from "./footer.module.scss";
import Logo from "@/assets/icons/logo.svg";
import LogoDark from "@/assets/icons/logo-dark.svg";
import useColorScheme from "@/utils/state/colorScheme";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import YoutubeFill from "@/assets/icons/youtube-fill.svg";
import InstagramFill from "@/assets/icons/instagram-fill.svg";
import TwitterFill from "@/assets/icons/twitter-fill.svg";
import FacebookFill from "@/assets/icons/facebook-circle-fill.svg";
import TiktokFill from "@/assets/icons/tiktok-fill.svg";

const Footer = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const { colorScheme } = useColorScheme((state) => state);

  return (
    <div className={classNames.main}>
      <div className={classNames.footer}>
        <div className={classNames.content}>
          <div className={classNames.info}>
            <div className={classNames.logo} onClick={() => router.push("/")}>
              {colorScheme === "light" ? <Logo /> : <LogoDark />}
            </div>
            <p className={classNames.description}>
              Lorem ipsum dolor sit amet consectetur. Tellus viverra a id
              pellentesque eget vulputate. Vitae amet justo mi magna morbi
              montes vel amet. Bibendum pellentesque risus metus sagittis.
            </p>
            <table>
              <tbody className={classNames.detail}>
                <tr>
                  <td>
                    <p className={classNames.label}>{t("Head Office")}</p>
                  </td>
                  <td>
                    : Jl. Tebet Barat Dalam Raya No.6, RT.11/RW.2, Tebet Bar.,
                    Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota
                    Jakarta 12810
                  </td>
                </tr>
                <tr>
                  <td className={classNames.label}>{t("Telephone")}</td>
                  <td>: 0812323423</td>
                </tr>
                <tr>
                  <td className={classNames.label}>{t("Email")}</td>
                  <td>: sonta-group@gmail.com</td>
                </tr>
                <tr>
                  <td className={classNames.label}>{t("Jam Buka")}</td>
                  <td>: Senin - Jumat | 08.00 - 17.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className={classNames.copyright}>
        <div className={classNames.content}>
          <p className={classNames.text}>
            Copyright &copy; 2023 | PT Sonata Resources Indonesia
          </p>
          <div className={classNames.sosmed}>
            <a href="" className={classNames.icon}>
              <YoutubeFill />
            </a>
            <a href="" className={classNames.icon}>
              <InstagramFill />
            </a>
            <a href="" className={classNames.icon}>
              <TwitterFill />
            </a>
            <a href="" className={classNames.icon}>
              <FacebookFill />
            </a>
            <a href="" className={classNames.icon}>
              <TiktokFill />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
