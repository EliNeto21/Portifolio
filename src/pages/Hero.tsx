import { Container, Button } from "reactstrap";
import { useTranslation } from "react-i18next";
import avatar from "../assets/avatar.svg";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="text-center bg-white dark:bg-gray-900 transition">
      <Container>
        <img
          src={avatar}
          alt="Avatar"
          className="w-32 h-32 rounded-circle border border-4 border-blue-600 dark:border-blue-400 mb-4 mx-auto"
        />
        <h2 className="fw-bold text-dark dark:text-white">{t("hero.title")}</h2>
        <p className="text-secondary dark:text-gray-300 mt-2">{t("hero.subtitle")}</p>
        <Button color="primary" size="lg" href="#projects" className="mt-4">
          {t("hero.button")}
        </Button>
      </Container>
    </section>
  );
}