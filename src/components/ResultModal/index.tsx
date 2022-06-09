import { Item, Modal } from "./styles";
import { X as CloseIcon } from "phosphor-react";

interface ResultModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement("#root");

export function ResultModal({ isOpen, onRequestClose }: ResultModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <header>
        <h2>Fale Mais 60</h2>
        <CloseIcon size={24} onClick={onRequestClose} />
      </header>
      <main>
        <Item>
          <p>DDD de origem</p>
          <p>11</p>
        </Item>
        <Item>
          <p>DDD de destino</p>
          <p>16</p>
        </Item>
        <Item>
          <p>Duração da chamada</p>
          <p>10 min</p>
        </Item>
        <Item>
          <p>Plano escolhido</p>
          <p>Fale Mais 30</p>
        </Item>
        <Item>
          <p>Valor total sem plano</p>
          <p>R$ 12,00</p>
        </Item>
        <Item>
          <p>Desconto</p>
          <p>- R$ 12,00</p>
        </Item>
        <Item>
          <strong>Valor total com plano</strong>
          <strong>R$ 0,00</strong>
        </Item>
      </main>
    </Modal>
  );
}
