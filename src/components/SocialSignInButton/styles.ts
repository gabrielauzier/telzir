import styled from "styled-components";

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

export const UserInfo = styled.button`
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
`;
