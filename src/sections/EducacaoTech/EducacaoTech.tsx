import React, { useEffect, useState } from "react";
import "./educacaoTech.css";
import FiapNext from "../../assets/images/fiap-next.jpg";
import buttonUp from "../../assets/icons/scroll-up-arrow.svg";

export default function EducacaoTech() {
  const [isButtonVisible, setIsButtonVisible] = useState(true); //botão
  const [isModalOpen, setIsModalOpen] = useState(false); //modal

  // visibilidade do botão
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "capa" || entry.target.id === "header") {
            setIsButtonVisible(!entry.isIntersecting);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const capaSection = document.getElementById("capa");
    const headerSection = document.getElementById("header");

    if (capaSection) observer.observe(capaSection);
    if (headerSection) observer.observe(headerSection);

    return () => {
      if (capaSection) observer.unobserve(capaSection);
      if (headerSection) observer.unobserve(headerSection);
    };
  }, []);

  return (
    <section className="educacaoTech-section" id="educacaoTech">
      <div className="educacaoTech-content">
        <header className="educacaoTech-content-title">
          <h1>Educação e Tech</h1>
        </header>
        <div className="educacaoTech-content-text">
          <div className="educacaoTech-content-text-left">
            <p className="educacaoTech-content-text-left-paragraph">
              A FIAP é muito mais do que uma faculdade de tecnologia, é um
              verdadeiro ecossistema de inovação e aprendizado. Conhecida por
              sua abordagem moderna e focada no mercado, a instituição é
              referência quando se trata de formar profissionais capacitados
              para os desafios do futuro. Seja na graduação, pós-graduação ou
              cursos livres, a FIAP entrega um ensino que mistura teoria e
              prática, preparando os alunos para atuar em empresas de ponta ou
              até mesmo empreender.
            </p>
            <figure
              className="educacaoTech-content-text-left-image"
              onClick={() => setIsModalOpen(true)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={FiapNext}
                alt="Logotipo da FIAP NEXT em vermelho e amarelho sobre o fundo preto"
              />
              <figcaption>Figura 1 – Logotipo da FIAP NEXT</figcaption>
            </figure>
          </div>
          <div className="educacaoTech-content-text-right">
            <p className="educacaoTech-content-text-right-paragraph">
              Com um corpo docente formado por profissionais atuantes no
              mercado, a FIAP não ensina apenas tecnologia, mas também negócios,
              inovação e liderança. Seus cursos abrangem diversas áreas,
              incluindo:
            </p>
            <div className="educacaoTech-content-text-right-list">
              <section className="educacaoTech-content-text-right-list-item">
                <p className="educacaoTech-content-text-right-list-item-slash">
                  /
                </p>
                <p>Tecnologia e Desenvolvimento</p>
              </section>
              <ul>
                <li>- Desenvolvimento de Software</li>
                <li>- Inteligência Artificial</li>
                <li>- Data Science</li>
                <li>- Cibersegurança</li>
              </ul>
              <section className="educacaoTech-content-text-right-list-item">
                <p className="educacaoTech-content-text-right-list-item-slash">
                  /
                </p>
                <p>UX/UI, Marketing Digital</p>
              </section>
              <section className="educacaoTech-content-text-right-list-item">
                <p className="educacaoTech-content-text-right-list-item-slash">
                  /
                </p>
                <p>Metodologias e Gestão</p>
              </section>
              <p className="educacaoTech-content-text-right-paragraph">
                Além disso, a instituição incentiva fortemente o uso dessas
                metodologias e outras abordagens inovadoras que fazem parte do
                dia a dia de grandes empresas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className={`modal-overlay ${isModalOpen ? "show" : ""}`}
          onClick={() => setIsModalOpen(false)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={FiapNext}
              alt="Imagem ampliada da FIAP NEXT"
              className="modal-image"
            />
          </div>
        </div>
      )}

      {isButtonVisible && (
        <div className="educacaoTech-button">
          <a className="educacaoTech-button-icon" href="#capa">
            <img src={buttonUp} alt="Botão para navegar para a primeira tela" />
          </a>
        </div>
      )}
    </section>
  );
}
