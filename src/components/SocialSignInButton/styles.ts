import styled from "styled-components";
import { ClockCounterClockwise } from "phosphor-react";

export const GoogleButton = styled.button`
  width: auto;
  background-color: white;
  color: var(--text-color);

  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  gap: 1rem;

  box-shadow: 0 2px 8px 0 rgba(200, 200, 200, 0.2),
    0 1px 20px 0 rgba(250, 250, 250, 0.19);
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const HistoryIcon = styled(ClockCounterClockwise)`
  cursor: pointer;
  color: var(--text-color);

  &:hover {
    filter: brightness(0.5);
  }
`;

export const UserInfoButton = styled.button`
  width: auto;
  background-color: white;
  color: var(--text-color);

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  gap: 1rem;

  box-shadow: 0 2px 8px 0 rgba(200, 200, 200, 0.2),
    0 1px 20px 0 rgba(250, 250, 250, 0.19);

  img {
    width: 2rem;
    border-radius: 100px;
  }

  svg {
    &:hover {
      color: #e92929;
    }
  }

  &:hover {
    filter: brightness(0.96);
  }

  &:focus {
    outline: none;
  }
`;
