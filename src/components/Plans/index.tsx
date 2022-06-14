import { Card, Container } from "./styles";
import checkImg from "../../assets/check.svg";
import { Link } from "react-router-dom";

export function Plans() {
  return (
    <Container>
      <header>
        <h1>Conheça nossos planos</h1>
        <p>Conheça nossas soluções e escolha o plano ideal para o seu bolso</p>
      </header>
      <main>
        <div>
          <Card delayTime={0}>
            <h2>Fale Mais 30</h2>
            <p>
              <span>30min</span> /mês
            </p>
            <ul>
              <li>
                <img src={checkImg} alt="perk" />
                30 minutos gratuitos
              </li>
              <li>
                <img src={checkImg} alt="perk" />
                Ligações intermunicipais
              </li>
              <li>
                <img src={checkImg} alt="perk" />
                Suporte 24h
              </li>
            </ul>
            <Link to="/simulation">
              <button>Faça uma simulação</button>
            </Link>
          </Card>
          <Card delayTime={0.2}>
            <h2>Fale Mais 60</h2>
            <p>
              <span>60min</span> /mês
            </p>
            <ul>
              <li>
                <img src={checkImg} alt="perk" /> 1 hora gratuita
              </li>
              <li>
                <img src={checkImg} alt="perk" />
                Ligações intermunicipais
              </li>
              <li>
                <img src={checkImg} alt="perk" />
                Suporte 24h
              </li>
            </ul>
            <Link to="/simulation">
              <button>Faça uma simulação</button>
            </Link>
          </Card>
          <Card delayTime={0.4}>
            <h2>Fale Mais 120</h2>
            <p>
              <span>120min</span> /mês
            </p>
            <ul>
              <li>
                <img src={checkImg} alt="perk" />2 horas gratuitas
              </li>
              <li>
                <img src={checkImg} alt="perk" />
                Ligações intermunicipais
              </li>
              <li>
                <img src={checkImg} alt="perk" />
                Suporte 24h
              </li>
            </ul>
            <Link to="/simulation">
              <button>Faça uma simulação</button>
            </Link>
          </Card>
        </div>
      </main>
    </Container>
  );
}
