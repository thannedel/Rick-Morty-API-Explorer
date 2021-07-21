import { FC, ReactElement } from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

const WithRouter: FC = ({ children }) => {
  return <Router>{children}</Router>;
};

const renderWithRouter = (ui: ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, 'Testing page', route);
  return render(ui, { wrapper: WithRouter });
};

export * from '@testing-library/react';

export { renderWithRouter as render };
