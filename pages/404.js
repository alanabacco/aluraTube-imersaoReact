import styled from "styled-components";

const ErrorPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 32px;

  width: 60vw;
  height: 40vh;
  margin: auto;
  border-radius: 8px;
  padding: 32px;
  background-color: ${({ theme }) => theme.backgroundLevel2};

  a {
    color: red;
  }
`;

export default function Custom404() {
  return (
    <ErrorPageWrapper>
      <h1>404 - Página não encontrada</h1>
      <a href="http://localhost:3000/">Voltar para a página inicial</a>
    </ErrorPageWrapper>
  );
}
