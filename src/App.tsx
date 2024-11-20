import { useEffect } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { RootState } from './store/store'
import { useDispatch, useSelector } from 'react-redux'
import { GlobalStyle } from './styles'
import {
  loadProdutos,
  adicionarProdutoCarrinho,
  adicionarProdutoFavorito
} from './store/produtoSlice'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useDispatch()
  const produtos = useSelector((state: RootState) => state.produto.produtos)
  const favoritos = useSelector((state: RootState) => state.produto.favoritos)
  const carrinho = useSelector((state: RootState) => state.produto.carrinho)

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => dispatch(loadProdutos(res)))
  }, [dispatch])

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          adicionarAoCarrinho={(produto) =>
            dispatch(adicionarProdutoCarrinho(produto))
          }
          favoritar={(produto) => dispatch(adicionarProdutoFavorito(produto))}
        />
      </div>
    </>
  )
}

export default App
