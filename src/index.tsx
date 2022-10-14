import React from 'react'
import ReactDOM from 'react-dom/client'
import { createServer, Model } from 'miragejs'
import { App } from './App' // Ao retirar o default no App, tive que colocar chaves

createServer({
  models: {
    // https://miragejs.com/api/classes/model/
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createAt: new Date('2022-10-12 19:00:00')
        },
        {
          id: 2,
          title: 'Alugel',
          type: 'withdraw',
          category: 'casa',
          amount: 1100,
          createAt: new Date('2022-10-14 11:00:00')
        }
      ]
    })
  },
  //rota para retornar as transactions

  //api front-end temporaria aguardando o back end
  routes() {
    this.namespace = 'api'

    this.get('/transactions ', () => {
      // retornar todas as transacoes que tenho no banco de dados
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      // necessário usar o parse para converter o objeto de texto para javascript
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
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
