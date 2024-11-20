import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../App'

//Lista dos estados a serem controlados
type ProdutoState = {
  produtos: Produto[] //Lista de produtos
  carrinho: Produto[] //Lista de produtos no carrinho
  favoritos: Produto[] //Lista de produtos favoritos
}

// Estado inicial dos estados
const initialState: ProdutoState = {
  produtos: [],
  carrinho: [],
  favoritos: []
}

// Função que adiciona um produto ao estado
const produtoSlice = createSlice({
  name: 'produto', //Nome do slice
  initialState,
  reducers: {
    //Funções que alteram o estado
    loadProdutos(state, action: PayloadAction<Produto[]>) {
      state.produtos = action.payload
    },
    adicionarProduto(state, action: PayloadAction<Produto>) {
      state.produtos.push(action.payload)
    },
    adicionarProdutoCarrinho(state, action: PayloadAction<Produto>) {
      state.carrinho.push(action.payload)
    },
    adicionarProdutoFavorito(state, action: PayloadAction<Produto>) {
      state.favoritos.push(action.payload)
    },
    removerProdutoCarrinho(state, action: PayloadAction<Produto>) {
      state.carrinho = state.carrinho.filter(
        (produto) => produto.id !== action.payload.id
      )
    },
    removerProdutoFavorito(state, action: PayloadAction<Produto>) {
      state.favoritos = state.favoritos.filter(
        (produto) => produto.id !== action.payload.id
      )
    }
  }
})

export default produtoSlice.reducer
export const {
  loadProdutos,
  adicionarProduto,
  adicionarProdutoCarrinho,
  adicionarProdutoFavorito,
  removerProdutoCarrinho,
  removerProdutoFavorito
} = produtoSlice.actions
