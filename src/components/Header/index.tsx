import { useState } from 'react'
import Modal from 'react-modal'

import logoImg from '../../assets/Logo.svg'

import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransationModal: () => void
}

export function Header({ onOpenNewTransationModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="BG money" />
        <button type="button" onClick={onOpenNewTransationModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}
