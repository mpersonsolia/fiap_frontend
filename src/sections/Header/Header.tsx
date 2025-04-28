import { useEffect, useState } from "react";
import "./header.css";
import logo from "../../assets/icons/logo.svg";

export default function Header() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const pageHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollPosition = window.scrollY;

    const scrollPercent = (scrollPosition / pageHeight) * 100;
    setScrollPercentage(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header-section">
      <div className="header-logo">
        <img src={logo} alt="Logo da FIAP, instituição de ensino" />
      </div>
      <div className="header-progressbar">
        <div
          className="header-progressbar-container"
          style={{ width: `${scrollPercentage}%` }}
        />
      </div>
    </header>
  );
}
