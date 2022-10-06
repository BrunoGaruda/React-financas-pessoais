import React from 'react'
import ReactDOM from 'react-dom/client'
import { createServer } from 'miragejs'
import { App } from './App' // Ao retirar o default no App, tive que colocar chaves

createServer({
  routes() {
    this.namespace = 'api'

    this.get('/transactions ', () => {
      return [
        {
          namespace: 'api',
          id: 1,
          title: 'transactions',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        }
      ]
    })
  }
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
// control + . em cima do <App /> para adicionar a importação do App caso ainda não tenha.
