import Button from "@/components/atoms/button";
import classNames from "./get-quote.module.scss";
import { useTranslation } from "react-i18next";

const GetQuote = () => {
  const { t } = useTranslation();
  return (
    <div className={classNames.main}>
      <p className={classNames.message}>{t("get_a_quote_text")}</p>
      <Button variant="neutral">{t("Get a Quote")}</Button>
    </div>
  );
};

export default GetQuote;
