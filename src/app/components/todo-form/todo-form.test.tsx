import "@testing-library/jest-dom"
import { render, screen } from '@testing-library/react'
import NovaTarefa from './index'

test('NovaTarefa', () => {
    render(<NovaTarefa onAdicionar={jest.fn()} />)

    expect(screen.getByRole('button')).toBeInTheDocument()
})
