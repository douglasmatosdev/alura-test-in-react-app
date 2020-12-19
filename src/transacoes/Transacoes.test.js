import React from 'react'
import { render } from '@testing-library/react'
import Transacoes from './Transacoes'

describe('Componente de transações', () => {
    it('Deve renderizar uma lista de transações', () => {
        const transacoes = [
            { data: '16/12/2020', tipo: 'saque', valor: '50,00' },
            { data: '26/11/2020', tipo: 'deposito', valor: '150,00' },
            { data: '10/10/2020', tipo: 'saque', valor: '100,00' }
        ]
        const { container } = render(
            <Transacoes
                transacoes={transacoes}
            />)

        expect(container.firstChild).toMatchSnapshot()
    })
})