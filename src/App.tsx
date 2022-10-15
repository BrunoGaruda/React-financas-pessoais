import { Dashboard } from './components/Dashboard'
import Modal from 'react-modal'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import { useState } from 'react'
import { NewTransactionModal } from './components/NewTransactionModal'
import { TransactionsProvider } from './TransactionsContex'

// Assessibility
Modal.setAppElement('#root')

export function App() {
  // Criando a Modal
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false)
  // movendo o código do transactionTable para aqui.

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }
  return (
    // Colocando o provider por fora de todos os outro componentes, ele se torna o "pai", podendo ser colocado em qualquer um dos componentes, podendo assim ser colocado por volta apenas dos componentes que irão usar as propiedades.
    <TransactionsProvider>
      <Header onOpenNewTransationModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  )
}
