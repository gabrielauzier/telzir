import { Link } from "react-router-dom";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <main>
        <h1>
          Escolha um plano <span>Telzir</span> para você
        </h1>
        <p>
          A Telzir acaba de lançar um novo produto: FaleMais. Com ele você pode
          falar de graça por muitos minutos sem se preocupar com a conta,
          pagando apenas os minutos excedentes*
        </p>
        <p>
          *Os minutos excedentes tem um acréscimo de 10% sobre a tarifa normal
          do minuto
        </p>
        <Link to="/plans">
          <button>Veja nossos planos</button>
        </Link>
      </main>
      <aside>
        <span>
          <img
            src="https://images.pexels.com/photos/11368569/pexels-photo-11368569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </span>
      </aside>
    </Container>
  );
}
