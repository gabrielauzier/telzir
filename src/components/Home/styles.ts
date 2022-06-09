import styled from "styled-components";

export const Container = styled.div`
  @keyframes reveal {
    from {
      transform: translateY(-1.25rem);
      opacity: 0%;
    }
    to {
      transform: translateY(0);
      opacity: 100%;
    }
  }

  max-width: 1120px;
  margin: auto;
  height: calc(100vh - 5rem);
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }

  main {
    margin: auto;
    padding: 0 2rem;
    opacity: 0;

    animation: reveal 0.4s 0.1s ease-in-out forwards;

    h1 {
      color: var(--title-color);
    }

    span {
      color: var(--base-color);
      font-weight: 700;
    }

    p {
      margin: 2rem 0;
    }

    button {
      margin-bottom: 2rem;
    }
  }

  aside {
    opacity: 0;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;

    animation: reveal 0.4s ease-in-out forwards;

    @media (max-width: 1080px) {
      padding: 0;
    }

    img {
      width: 100%;
      border-radius: 0.25rem;

      @media (max-width: 1080px) {
        width: 100%;
      }
    }

    span {
      position: relative;

      &::before {
        content: "";

        @media (min-width: 720px) {
          width: 100%;
          height: 20.75rem;
          background: var(--base-color-second);
          border-radius: 0.25rem;
          position: absolute;
          left: 5rem;
          bottom: 3rem;
          z-index: -1;
        }
      }
    }
  }
`;
