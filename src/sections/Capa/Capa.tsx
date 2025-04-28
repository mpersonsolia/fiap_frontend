import "./capa.css";
import buttonDown from "../../assets/icons/scroll-down-arrow.svg";

export default function Capa() {
  return (
    <section className="capa-section" id="capa">
      <div className="capa-content">
        <h1 className="capa-content-title1">A Maior Faculdade</h1>
        <h1 className="capa-content-title2">de tecnologia</h1>
        <p className="capa-content-paragraph">
          Referência em tecnologia e inovação no Brasil, a FIAP é uma faculdade
          que prepara profissionais para o futuro, com um ensino prático,
          professores atuantes no mercado e desafios reais que conectam os
          alunos às grandes empresas.
        </p>
      </div>

      <div className="capa-button">
        <p className="capa-button-text">Scroll Down</p>
        <a className="capa-button-icon" href="#educacaoTech">
          <img src={buttonDown} alt="Botão para navegar para a tela inferior" />
        </a>
      </div>
    </section>
  );
}
