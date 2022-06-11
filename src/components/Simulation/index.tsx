import { FormEvent, useEffect, useState } from "react";
import { DDDTypes, PlanTypes } from "../../utils/types";
import validateCall from "../../utils/validateCall";
import { DataProps, ResultModal } from "../ResultModal";

import {
  Container,
  PlanTypeContainer,
  PlanTypeRadioBox,
  RegionRadioBox,
  Alert,
} from "./styles";

import { X as CloseIcon } from "phosphor-react";
import { Collapse, IconButton } from "@mui/material";

export function Simulation() {
  const [regionOrigin, setRegionOrigin] = useState<DDDTypes>("11");
  const [regionDestiny, setRegionDestiny] = useState<DDDTypes>("11");
  const [duration, setDuration] = useState(0);
  const [planType, setPlanType] = useState<PlanTypes>("FALE_MAIS_30");

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
      destiny: regionDestiny,
      origin: regionOrigin,
      plan: planType,
      duration,
    });

    let isInvalidFields = false;

    if (!validateCall(`${regionOrigin}-${regionDestiny}`)) {
      setIsShowingCallTypeError(true);
      isInvalidFields = true;
    }

    if (duration === 0) {
      setIsShowingDurationError(true);
      isInvalidFields = true;
    }

    if (!isInvalidFields) handleToggleResultModal();
  }

  useEffect(() => {
    setIsShowingDurationError(false);
  }, [duration]);

  useEffect(() => {
    setIsShowingCallTypeError(false);
  }, [regionOrigin, regionDestiny]);

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

        <Collapse in={isShowingCallTypeError}>
          <Alert
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setIsShowingCallTypeError(false);
                }}
              >
                <CloseIcon size={16} color="gray" />
              </IconButton>
            }
          >
            Não cobrimos esse tipo de ligação. Por favor, informe outros DDDs.
          </Alert>
        </Collapse>

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
        <Collapse in={isShowingDurationError}>
          <Alert
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setIsShowingDurationError(false);
                }}
              >
                <CloseIcon size={16} color="gray" />
              </IconButton>
            }
          >
            Informe a duração da chamada
          </Alert>
        </Collapse>

        <label htmlFor="plan-selection">Selecione o plano</label>
        <PlanTypeContainer id="plan-selection">
          <PlanTypeRadioBox
            type="button"
            onClick={() => setPlanType("FALE_MAIS_30")}
            isActive={planType === "FALE_MAIS_30"}
          >
            <span>Fale Mais 30</span>
          </PlanTypeRadioBox>

          <PlanTypeRadioBox
            type="button"
            onClick={() => setPlanType("FALE_MAIS_60")}
            isActive={planType === "FALE_MAIS_60"}
          >
            <span>Fale Mais 60</span>
          </PlanTypeRadioBox>

          <PlanTypeRadioBox
            type="button"
            onClick={() => setPlanType("FALE_MAIS_120")}
            isActive={planType === "FALE_MAIS_120"}
          >
            <span>Fale Mais 120</span>
          </PlanTypeRadioBox>
        </PlanTypeContainer>

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
