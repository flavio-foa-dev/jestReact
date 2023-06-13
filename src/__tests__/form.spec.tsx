import {render, screen} from '@testing-library/react'
import Form from '../components/Form'

describe("formularia", () => {
  test("shold input empty", () => {

    render(<Form/>)
    const input = screen.getByPlaceholderText('insira os nomes dos participantes')
    const btn = screen.getByRole('button')

    expect(input).toBeInTheDocument()
    expect(btn).toBeDisabled()

  })
})