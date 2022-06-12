import { FormEvent, useEffect, useState } from "react";
import { DDDTypes, PlanTypes } from "../../utils/types";
import { DataProps, ResultModal } from "../ResultModal";
import validateCall from "../../utils/validateCall";

import { Container } from "./styles";

import { TelephoneRegionRadioBox } from "./components/TelephoneRegionRadioBox";
import { PlanTypeRadioBox } from "./components/PlanTypeRadioBox";
import { AlertMessage } from "./components/AlertMessage";

export function Simulation() {
  const [origin, setOrigin] = useState<DDDTypes>("11");
  const [destiny, setDestiny] = useState<DDDTypes>("11");
  const [duration, setDuration] = useState(0);
  const [plan, setPlan] = useState<PlanTypes>("FALE_MAIS_30");

  const [data, setData] = useState({});

  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [isShowingDurationError, setIsShowingDurationError] = useState(false);
  const [isShowingCallTypeError, setIsShowingCallTypeError] = useState(false);

  function handleToggleResultModal() {
    setIsResultModalOpen(!isResultModalOpen);
  }

  function handleSimulatePlan(e: FormEvent) {
    e.preventDefault();

    setData({
      origin,
      destiny,
      duration,
      plan,
    });

    let thereAreInvalidFields = false;

    if (!validateCall(`${origin}-${destiny}`)) {
      setIsShowingCallTypeError(true);
      thereAreInvalidFields = true;
    }

    if (duration <= 0) {
      setIsShowingDurationError(true);
      thereAreInvalidFields = true;
    }

    if (!thereAreInvalidFields) handleToggleResultModal();
  }

  useEffect(() => {
    setIsShowingDurationError(false);
  }, [duration]);

  useEffect(() => {
    setIsShowingCallTypeError(false);
  }, [origin, destiny]);

  return (
    <Container>
      <h1>Descubra qual plano Telzir combina melhor com você</h1>

      <form>
        <label>Selecione o DDD de origem</label>
        <TelephoneRegionRadioBox selected={origin} onSelect={setOrigin} />
        <label>Selecione o DDD de destino</label>
        <TelephoneRegionRadioBox selected={destiny} onSelect={setDestiny} />
        <AlertMessage
          message="Infelizmente não cobrimos esse tipo de ligação. Por favor, selecione outro DDD."
          showError={isShowingCallTypeError}
          setShowError={setIsShowingCallTypeError}
        />

        <label htmlFor="duration">
          Qual será a duração da chamada? (em minutos)
        </label>
        <input
          type="number"
          id="duration"
          min={0}
          onChange={(text) => setDuration(Number(text.target.value))}
          placeholder="Digite o tempo..."
        />
        <AlertMessage
          message="Informe a duração da chamada."
          showError={isShowingDurationError}
          setShowError={setIsShowingDurationError}
        />

        <label>Selecione o plano</label>
        <PlanTypeRadioBox selected={plan} onSelect={setPlan} />

        <button type="button" onClick={handleSimulatePlan}>
          Simular chamada
        </button>
      </form>

      <ResultModal
        isOpen={isResultModalOpen}
        data={data as DataProps}
        onRequestClose={handleToggleResultModal}
      />
    </Container>
  );
}
