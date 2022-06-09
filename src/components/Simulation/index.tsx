import { useState } from "react";
import {
  Container,
  PlanTypeContainer,
  PlanTypeRadioBox,
  RegionRadioBox,
} from "./styles";

type PlanTypes = "fale-mais-30" | "fale-mais-60" | "fale-mais-120";
type RegionTypes = "11" | "16" | "17" | "18";

export function Simulation() {
  const [planType, setPlanType] = useState<PlanTypes>("fale-mais-30");
  const [regionOrigin, setRegionOrigin] = useState<RegionTypes>("11");
  const [regionDestiny, setRegionDestiny] = useState<RegionTypes>("11");

  return (
    <Container>
      <h1>Descubra qual plano Telzir combina melhor com você</h1>

      <form>
        <label htmlFor="origin">Selecione o DDD de origem</label>
        <RegionRadioBox
          type="button"
          onClick={() => setRegionOrigin("11")}
          isActive={regionOrigin === "11"}
        >
          11
        </RegionRadioBox>
        <RegionRadioBox
          type="button"
          onClick={() => setRegionOrigin("16")}
          isActive={regionOrigin === "16"}
        >
          16
        </RegionRadioBox>
        <RegionRadioBox
          type="button"
          onClick={() => setRegionOrigin("17")}
          isActive={regionOrigin === "17"}
        >
          17
        </RegionRadioBox>
        <RegionRadioBox
          type="button"
          onClick={() => setRegionOrigin("18")}
          isActive={regionOrigin === "18"}
        >
          18
        </RegionRadioBox>

        <label htmlFor="destiny">Selecione o DDD de destino</label>
        <RegionRadioBox
          type="button"
          onClick={() => setRegionDestiny("11")}
          isActive={regionDestiny === "11"}
        >
          11
        </RegionRadioBox>
        <RegionRadioBox
          type="button"
          onClick={() => setRegionDestiny("16")}
          isActive={regionDestiny === "16"}
        >
          16
        </RegionRadioBox>
        <RegionRadioBox
          type="button"
          onClick={() => setRegionDestiny("17")}
          isActive={regionDestiny === "17"}
        >
          17
        </RegionRadioBox>
        <RegionRadioBox
          type="button"
          onClick={() => setRegionDestiny("18")}
          isActive={regionDestiny === "18"}
        >
          18
        </RegionRadioBox>

        <label htmlFor="duration">
          Qual será a duração da chamada? (em minutos)
        </label>
        <input
          type="number"
          id="duration"
          min={0}
          placeholder="Digite o tempo..."
        />

        <label htmlFor="plan-selection">Selecione o plano</label>
        <PlanTypeContainer id="plan-selection">
          <PlanTypeRadioBox
            type="button"
            onClick={() => setPlanType("fale-mais-30")}
            isActive={planType === "fale-mais-30"}
          >
            <span>Fale Mais 30</span>
          </PlanTypeRadioBox>

          <PlanTypeRadioBox
            type="button"
            onClick={() => setPlanType("fale-mais-60")}
            isActive={planType === "fale-mais-60"}
          >
            <span>Fale Mais 60</span>
          </PlanTypeRadioBox>

          <PlanTypeRadioBox
            type="button"
            onClick={() => setPlanType("fale-mais-120")}
            isActive={planType === "fale-mais-120"}
          >
            <span>Fale Mais 120</span>
          </PlanTypeRadioBox>
        </PlanTypeContainer>

        <button type="button">Simular chamada</button>
      </form>
    </Container>
  );
}
