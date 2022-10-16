import { Children, createContext, useEffect, useState, ReactNode } from 'react'
import { api } from './services/api'

interface Transaction {
  id: number
  title: string
  amount: number
  category: string
  type: string
  createdAt: string
}
// Deu error dessa forma
// type TransactionInput = Omit<Transaction, 'id' | 'createAt'>

type TransactionInput = Pick<
  Transaction,
  'title' | 'amount' | 'type' | 'category'
>
interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionsContextData {
  transactions: Transaction[]
  createTransaction: (Transaction: TransactionInput) => Promise<void> //resultado do async
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData //  forçando ao objeto sobre o TransactionsContextData
)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api
      .get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  // toda função async retorna uma promise
  async function createTransaction(transactionInput: TransactionInput) {
    // a resposta da api com o id, para ser listado
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    })
    const { transaction } = response.data

    // Conceito de imutabilidade, sempre são todas as informações mais a informação no final
    setTransactions([...transactions, transaction])
  }

  return (
    // cochetes para javascript e objeto
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}
