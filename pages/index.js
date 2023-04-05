import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Cabecalho from "../components/Cabecalho";
import Pagina from '../components/Pagina';

export default function Home() {
  return (
    <>
      <Pagina titulo='pagina Inicial'>
      <Container>
        <h1>Hello word</h1>
        <p>Parágrafo 1</p>
        <p>Parágrafo 2</p>
        <p>Parágrafo 3</p>
      </Container>
      </Pagina>
    </>
    
  )
}
