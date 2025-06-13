"use client";

import classNames from "./footer.module.scss";
import Logo from "@/assets/icons/logo.svg";
import LogoDark from "@/assets/icons/logo-dark.svg";
import useColorScheme from "@/utils/state/colorScheme";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { footerData } from "./data";

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
              {t(footerData.description)}
            </p>
            <table>
              <tbody className={classNames.detail}>
                {footerData.info.map((item) => (
                  <tr key={item.label}>
                    <td>
                      <p className={classNames.label}>{t(item.label)}</p>
                    </td>
                    <td>{t(item.value)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={classNames.options}>
            {footerData.options.map((item) => (
              <div key={item.key} className={classNames.option}>
                <p className={classNames.title}>{t(item.label)}</p>
                <ul>
                  {item.value.map((item) => (
                    <li key={item.key}>
                      <a href="">{t(item.label)}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={classNames.copyright}>
        <div className={classNames.content}>
          <p className={classNames.text}>{footerData.copyright}</p>
          <div className={classNames.sosmed}>
            {footerData.socialMedia.map((item) => (
              <a key={item.key} href="" className={classNames.icon}>
                <item.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
