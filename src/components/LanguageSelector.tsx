import { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import ptFlag from "../assets/lang/pt.png";
import enFlag from "../assets/lang/en.png";
import esFlag from "../assets/lang/es.png";

interface Props {
  currentLang: string;
  onChange: (lng: string) => void;
}

export default function LanguageSelector({ currentLang, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const flagMap: Record<string, string> = {
    pt: ptFlag,
    en: enFlag,
    es: esFlag,
  };

  const labelMap: Record<string, string> = {
    pt: "Português",
    en: "English",
    es: "Español",
  };

  const handleChange = (lng: string) => {
    onChange(lng);
    setOpen(false);
  };

  return (
    <Dropdown isOpen={open} toggle={toggle}>
      <DropdownToggle
        color="light"
        className="d-flex align-items-center gap-2 dark:bg-gray-800 dark:text-white border-0"
      >
        <img
          src={flagMap[currentLang] || ptFlag}
          width="20"
          height="20"
          className="rounded-circle"
        />
        <span className="visually-hidden">{labelMap[currentLang]}</span>
      </DropdownToggle>

      <DropdownMenu className="dark:bg-gray-800 dark:text-white shadow">
        <DropdownItem
          onClick={() => handleChange("pt")}
          className="d-flex align-items-center gap-2 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img src={ptFlag} width="20" height="20" className="rounded-circle" />
          <span>Português</span>
        </DropdownItem>
        <DropdownItem
          onClick={() => handleChange("en")}
          className="d-flex align-items-center gap-2 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img src={enFlag} width="20" height="20" className="rounded-circle" />
          <span>English</span>
        </DropdownItem>
        <DropdownItem
          onClick={() => handleChange("es")}
          className="d-flex align-items-center gap-2 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img src={esFlag} width="20" height="20" className="rounded-circle" />
          <span>Español</span>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}