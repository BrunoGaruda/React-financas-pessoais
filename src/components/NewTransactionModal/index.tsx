// import { useState } from 'react'
import Modal from 'react-modal'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'
import { Container, TransactionTypeContainer, RadioBox } from './styles'
import { useState } from 'react'

interface newTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({
  isOpen,
  onRequestClose
}: newTransactionModalProps) {
  // Armazenando o estado do botão
  const [type, setType] = useState('deposit')

  return (
    <Modal
      isOpen={isOpen}
      // Clicando esc ou fora da modal ela fecha
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      {/* Fechando o botão no "x" */}
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar botão" />
      </button>
      <Container>
        <h2>Cadastrar Transação</h2>
        <input type="text" placeholder="Título" />

        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            // forma de identificar se foi clicado com a classe
            // className={type === 'deposit' ? 'active' : ' '}
            onClick={() => {
              setType('deposit')
            }}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => {
              setType('withdraw')
            }}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
