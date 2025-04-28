import "./index.css";
import BreakImage from "./sections/BreakImage/BreakImage";
import Capa from "./sections/Capa/Capa";
import EducacaoTech from "./sections/EducacaoTech/EducacaoTech";
import Header from "./sections/Header/Header";
import NossaEstrutura from "./sections/NossaEstutura/NossaEstrutura";
import QuerSaberMais from "./sections/QuerSaberMais/QuerSaberMais";

function App() {
  return (
    <>
      <Header />
      <Capa />
      <EducacaoTech />
      <BreakImage />
      <NossaEstrutura />
      <QuerSaberMais />
    </>
  );
}

export default App;
