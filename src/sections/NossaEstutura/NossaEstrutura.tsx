import { useState } from "react";
import "./nossaEstrutura.css";

export default function NossaEstrutura() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Conexão Com o Mercado de Trabalho",
      content:
        "A FIAP se destaca não apenas pelo seu ensino inovador, mas também pela forma como conecta seus alunos ao mercado de trabalho. A instituição tem parcerias com algumas das maiores empresas de tecnologia do mundo, permitindo que seus estudantes participem de desafios reais, hackathons e programas de mentoria. Dessa forma, além de adquirirem conhecimento teórico e prático, os alunos têm a chance de desenvolver networking e garantir oportunidades de estágio e emprego ainda durante o curso. A FIAP compreende que o aprendizado vai além da sala de aula, por isso incentiva projetos interdisciplinares que desafiam a criatividade e a capacidade de resolução de problemas dos futuros profissionais.",
    },
    {
      title: "Aprendizado Imersivo",
      content:
        "Outro diferencial da FIAP é a sua estrutura moderna, pensada para proporcionar uma experiência de aprendizado imersiva e dinâmica.  Os laboratórios contam com equipamentos de ponta e softwares atualizados, permitindo que os alunos experimentem na prática as tecnologias que usarão no mercado de trabalho. Além disso, os espaços colaborativos  são projetados para estimular o trabalho em equipe, um fator essencial para profissionais da área de tecnologia. O ambiente acadêmico da FIAP reflete a realidade das grandes empresas do setor, preparando os alunos para os desafios que enfrentarão ao longo da carreira.",
    },
    {
      title: "Ensino Personalizado",
      content:
        "A instituição também aposta na personalização do ensino, oferecendo cursos e trilhas de aprendizado que se adaptam aos diferentes perfis de profissionais. Seja para quem deseja seguir carreira no desenvolvimento de software, na ciência de dados, na segurança cibernética ou até mesmo no empreendedorismo digital, a FIAP possui um programa que atende às necessidades do mercado e às aspirações dos estudantes. Além disso, os cursos são atualizados constantemente para acompanhar as inovações tecnológicas, garantindo que os alunos sempre tenham acesso ao que há de mais recente no setor.",
    },
    {
      title: "Inovação e Transformação",
      content:
        "A instituição também aposta na personalização do ensino, oferecendo cursos e trilhas de aprendizado que se adaptam aos diferentes perfis de profissionais. Seja para quem deseja seguir carreira no desenvolvimento de software, na ciência de dados, na segurança cibernética ou até mesmo no empreendedorismo digital, a FIAP possui um programa que atende às necessidades do mercado e às aspirações dos estudantes. Além disso, os cursos são atualizados constantemente para acompanhar as inovações tecnológicas, garantindo que os alunos sempre tenham acesso ao que há de mais recente no setor.",
    },
  ];

  return (
    <section className="nossaEstrutura-section" id="nossaEstrutura">
      <div className="nossaEstrutura-header">
        <h1>Nossa Estrutura</h1>
      </div>
      <div className="nossaEstrutura-accordion">
        <hr className="nossaEstrutura-accordion-divider" />

        {accordionData.map((item, index: number) => (
          <div key={index} className="nossaEstrutura-accordion-aba">
            <div
              className="nossaEstrutura-accordion-header"
              onClick={() => toggleAccordion(index)}
            >
              <h2>{item.title}</h2>
              <a className="nossaEstrutura-accordion-button">
                {openIndex === index ? "-" : "+"}
              </a>
            </div>
            {openIndex === index && (
              <div className="nossaEstrutura-accordion-content">
                <p>{item.content}</p>
              </div>
            )}
            {index < accordionData.length - 1 && (
              <hr className="nossaEstrutura-accordion-divider" />
            )}
          </div>
        ))}
        <hr className="nossaEstrutura-accordion-divider" />
      </div>
    </section>
  );
}
