import { Item, Modal } from "./styles";
import { X as CloseIcon } from "phosphor-react";
import { DDDTypes, planTypes, PlanTypes } from "../../utils/types";
import calculateTotalWithoutPlan from "../../utils/calculateTotalWithoutPlan";
import calculateTotalWithPlan from "../../utils/calculateTotalWithPlan";

export interface DataProps {
  origin: DDDTypes;
  destiny: DDDTypes;
  duration: number;
  plan: PlanTypes;
}

interface ResultModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  data: DataProps;
}

Modal.setAppElement("#root");

export function ResultModal({
  isOpen,
  onRequestClose,
  data,
}: ResultModalProps) {
  const totalValueWithPlan = Number(calculateTotalWithPlan(data).toFixed(2));
  const totalValueWithoutPlan = Number(
    calculateTotalWithoutPlan(data).toFixed(2)
  );

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <header>
        <h2>{planTypes[data.plan]?.label}</h2>
        <CloseIcon size={24} onClick={onRequestClose} />
      </header>
      <main>
        <Item>
          <p>DDD de origem</p>
          <p>{data.origin}</p>
        </Item>
        <Item>
          <p>DDD de destino</p>
          <p>{data.destiny}</p>
        </Item>
        <Item>
          <p>Duração da chamada</p>
          <p>{data.duration} min</p>
        </Item>
        <Item>
          <p>Plano escolhido</p>
          <p>{planTypes[data.plan]?.label} </p>
        </Item>
        <Item>
          <p>Valor total sem plano</p>
          <p>
            {totalValueWithoutPlan?.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </Item>
        <Item>
          <strong>Valor total com plano</strong>
          <strong>
            {totalValueWithPlan?.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>
        </Item>
      </main>
    </Modal>
  );
}
