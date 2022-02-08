
import { render, screen } from '@testing-library/react'
import { IAppData } from '../../../types/IAppData';
import Result from '.'

describe('result', () => {
    let data: IAppData;
    beforeEach(() => {
        data = {
            id: 'id',
            name: 'name',
            spend: 12,
            cat1: 'cat1',
            cat2: 'cat2',
            cat3: 'cat3',
        }
    })
    it('renders a result', () => {
        render(<Result result={data} />)
        expect(screen.getByRole('heading')).toHaveTextContent(data.name)
    })
})