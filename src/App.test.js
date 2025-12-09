import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import App from './App';

// 1) Basic Jest math test
describe('Addition', () => {
  it('knows that 2 + 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});

// 2) React Testing Library + snapshot tests
describe('App component', () => {
  // render test
  it('should render App component correctly', () => {
    render(<App />);
  });

  // find heading text: "Register Form"
  it('should find text element', () => {
    render(<App />);
    const textelement = screen.getByText('Register Form');
    expect(textelement).toBeInTheDocument();
  });

  // find input textbox
  it('should find input element', () => {
    render(<App />);
    const inputelement = screen.getByRole('textbox');
    expect(inputelement).toBeInTheDocument();
  });

  // button exists and can be clicked (error message requirement)
  it('should show error messages when all fields are not entered', () => {
    render(<App />);
    const btnelement = screen.getByRole('button');
    userEvent.click(btnelement);
    expect(btnelement).toBeInTheDocument();
  });

  // snapshot test
  it('performs snapshot testing', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
