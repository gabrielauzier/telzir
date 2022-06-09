import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  height: calc(100vh - 5rem);
  align-items: center;

  header {
    background-color: var(--base-color);
    height: 20rem;
    text-align: center;
    padding: 2rem;
    color: var(--text-color-light);

    h1 {
      color: var(--text-color-light);
      font-size: 2.75rem;
      margin-bottom: 1rem;
    }
  }

  main {
    align-items: center;
    margin: auto;
    max-width: 1120px;

    > div {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
      position: relative;
      top: -7.5rem;

      @media (max-width: 1080px) {
        grid-template-columns: 1fr;
        padding: 0 1rem;
        top: -2rem;
      }
    }
  }
`;

interface CardProps {
  delayTime: number;
}

export const Card = styled.div<CardProps>`
  border-bottom: 3px solid var(--base-color-alt);

  opacity: 0;
  @keyframes reveal {
    from {
      opacity: 0;
      transform: translateY(-1rem);
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  animation: reveal 0.3s ease-in-out forwards;
  animation-delay: ${({ delayTime }) => delayTime}s;

  padding: 2rem;
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 2px 8px 0 rgba(200, 200, 200, 0.2),
    0 1px 20px 0 rgba(250, 250, 250, 0.19);

  display: flex;
  flex-direction: column;

  justify-content: space-between;

  h2 {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  span {
    font-size: 2rem;
    font-weight: 600;
    color: var(--title-color);
  }

  ul {
    border-top: 1px solid var(--input-border);
    margin: 2rem 0;

    li {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
  }

  button {
    background-color: transparent;
    color: var(--base-color);
    border: 1px solid var(--base-color);
    font-size: 1rem;
    font-weight: 500;
    border-radius: 0.75rem;
    text-transform: uppercase;

    transition: background 0.3s;

    &:hover {
      background-color: var(--base-color);
      color: var(--text-color-light);
      filter: none;
    }
  }
`;
