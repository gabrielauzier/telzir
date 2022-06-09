import styled from "styled-components";
import ReactModal from "react-modal";

export const Modal = styled(ReactModal)`
  header {
    position: relative;
    svg {
      position: absolute;
      top: 0;
      right: 0;
      transition: filter 0.2s;

      &:hover {
        cursor: pointer;
        filter: brightness(0.2);
      }
    }
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;

  & + div {
    border-top: 1px solid var(--input-border);
  }

  &:first-child {
    margin-top: 2rem;
  }

  strong {
    color: var(--base-color);
    font-size: 1.5rem;
  }
`;
