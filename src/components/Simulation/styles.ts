import styled from "styled-components";

export const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  margin-top: 4rem;
  padding: 0 2rem;

  h1 {
    color: var(--base-color);
  }

  form {
    margin-top: 2rem;

    label {
      display: block;
      font-weight: 500;
      margin: 2rem 0 0.25rem;
    }

    input {
      width: 100%;
      padding: 1rem 2rem;
      border-radius: 0.25rem;
      border: 1px solid var(--input-border);

      &:focus {
        outline: 2px solid var(--base-color);
      }
    }
  }
`;

export const PlanTypeContainer = styled.div`
  margin: 0.25rem 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
}

export const PlanTypeRadioBox = styled.button<RadioBoxProps>`
  border-width: 2px;
  border-style: solid;
  border-color: ${({ isActive }) =>
    isActive ? "transparent" : "var(--input-background)"};
  background: ${({ isActive }) => (isActive ? "var(--base-color)" : "white")};
  color: ${({ isActive }) =>
    isActive ? `var(--text-color-light)` : `var(--text-body)`};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s;

  &:hover {
    border-color: var(--base-color);
    filter: none;
  }

  &:focus {
    outline: 2px solid var(--base-color);
  }
`;

export const RegionRadioBox = styled.button<RadioBoxProps>`
  width: auto;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ isActive }) =>
    isActive ? "transparent" : "var(--input-background)"};
  background: ${({ isActive }) => (isActive ? "var(--base-color)" : "white")};
  color: ${({ isActive }) =>
    isActive ? `var(--text-color-light)` : `var(--text-body)`};

  align-items: center;
  justify-content: center;

  & + button {
    margin-left: 0.5rem;
  }

  transition: border-color 0.2s;
  &:hover {
    border-color: var(--base-color);
    filter: none;
  }

  &:focus {
    outline: 2px solid var(--base-color);
  }
`;
