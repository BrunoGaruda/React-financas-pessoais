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
  createTransaction: (Transaction: TransactionInput) => void
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

  function createTransaction(transaction: TransactionInput) {
    api.post('/transactions', transaction)
  }

  return (
    // cochetes para javascript e objeto
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}
