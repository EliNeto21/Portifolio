import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { useTranslation } from "react-i18next";
import useDarkMode from "../hooks/useDarkMode";
import LanguageSelector from "../components/LanguageSelector";

export default function Header() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useDarkMode();

  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

  return (
    <Navbar
      expand="md"
      light
      className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition"
    >
      <div className="container d-flex justify-content-between align-items-center">
        <NavbarBrand href="#" className="fw-bold text-blue-600 dark:text-blue-400">
          Eli.dev
        </NavbarBrand>

        <Nav className="d-flex align-items-center gap-3">
          <NavItem><NavLink href="#about">{t("header.about")}</NavLink></NavItem>
          <NavItem><NavLink href="#projects">{t("header.projects")}</NavLink></NavItem>
          <NavItem><NavLink href="#blog">{t("header.blog")}</NavLink></NavItem>
          <NavItem><NavLink href="#contact">{t("header.contact")}</NavLink></NavItem>

          {/* Novo seletor de idioma */}
          <LanguageSelector currentLang={i18n.language} onChange={changeLanguage} />

          {/* Botão de tema */}
          <button
            onClick={toggleTheme}
            className="btn btn-outline-secondary border-0 ms-2"
            title="Alternar tema"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </Nav>
      </div>
    </Navbar>
  );
}