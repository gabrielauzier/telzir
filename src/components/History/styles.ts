import styled from "styled-components";
import { MinusCircle } from "phosphor-react";

export const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  margin-top: 4rem;
  padding: 0 2rem;

  h1 {
    color: var(--base-color);
  }

  p {
    margin-top: 2rem;
  }

  table {
    width: 100%;
    text-align: left;
    border-spacing: 0 0.5rem;
    table-layout: fixed;

    th,
    td {
      width: 8rem;
      padding: 1rem 0;

      &:first-child {
        width: 12rem;
      }
    }

    th {
      font-weight: 400;

      &:first-child {
        padding-left: 2rem;
      }
    }

    td {
      background: white;
      box-shadow: 0 1px 0 rgba(200, 200, 200, 0.2),
        0 1px 20px 0 rgba(250, 250, 250, 0.19);

      svg {
        vertical-align: middle;
        cursor: pointer;

        &:hover {
          filter: brightness(0.3);
        }
      }

      &:first-child {
        color: var(--text-title);
        padding-left: 2rem;
        border-radius: 0.25rem 0 0 0.25rem;
      }

      &:last-child {
        border-radius: 0 0.25rem 0.25rem 0;
        width: 2rem;
      }
    }
  }
`;

export const DeleteIcon = styled(MinusCircle).attrs({
  color: "#e92929",
  size: "1.5rem",
})``;
