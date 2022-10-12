import React from 'react'
import ReactDOM from 'react-dom/client'
import { createServer, Model } from 'miragejs'
import { App } from './App' // Ao retirar o default no App, tive que colocar chaves

createServer({
  models: {
    // https://miragejs.com/api/classes/model/
    transaction: Model
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions ', () => {
      //
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
