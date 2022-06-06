import { ListSubheader } from '@mui/material';
import type { NextPage } from 'next'
import { loadDefaultErrorComponents } from 'next/dist/server/load-components';
import Lista from '../ui/components/Lista/Lista';
import Titulo from '../ui/components/Titulo/Titul';


const Home: NextPage = () => {
  return (
    <div>

      <Titulo
        titulo=""
        subtitulo={
          <span>
            Com um pequeno valor mensal, você <br />
            <strong> pode adotar um pet virtualmente. </strong>

          </span>
        } />

      <Lista
        pets={[
          {
            id: 1,
            nome: 'Paçoca',
            historia: 'Adotar é um gesto de amor! É dar a chance de um animalzinho ter uma família e a oportunidade de ser recompensado diariamente com muito amor! Comprar animais alimenta um mercado muito nocivo à vida dos animais. Adotar é salvar vidas!',
            foto: '../image/pacoca.jpeg',
          },
          {
            id: 2,
            nome: 'Negresco',
            historia: 'Adotar é um gesto de amor! É dar a chance de um animalzinho ter uma família e a oportunidade de ser recompensado diariamente com muito amor! Comprar animais alimenta um mercado muito nocivo à vida dos animais. Adotar é salvar vidas!',
            foto: '../image/negresco.jpeg',
          },

        ]}
      />
    </div>
  )
}

export default Home
