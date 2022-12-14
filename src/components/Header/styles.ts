import styled from 'styled-components'

// Quando digitamos “styled.” e apertamos CTRL + SPACE, o VS Code vai nos mostrar todas as opções de elementos HTML que StyledComponents nos permite usar, no caso utilizamos um button, mas poderia ser uma section, um h1, h2, etc.
export const Container = styled.header`
  background: var(--blue);
`
export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  // Button Nova transação
  button {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
