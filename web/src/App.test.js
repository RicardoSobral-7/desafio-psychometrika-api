import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Signup from './pages/Signup';

describe('Login screen', () => {
    it('should denied email', async () => {
        render(<Signup />)
        const name = screen.getByPlaceholderText('Nome');
        const email = screen.getByPlaceholderText('E-mail');
        const button = screen.getByText('Entrar');

        fireEvent.change(name, { target: { value: 'Ricardo' } })
        fireEvent.change(email, { target: { value: 'testando' } })
        fireEvent.click(button);

        await waitFor(() => {
            expect(screen.getByRole('alert')).toHaveTextContent('Email invalido');
        });

    });
});
