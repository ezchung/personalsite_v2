import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);

  // Check if the PersonalSiteApp component is rendered
  expect(screen.getByText('PersonalSiteApp')).toBeInTheDocument();

  // Check if the "read-the-docs" paragraph is rendered
  expect(screen.getByText('Click on the Vite and React logos to learn more')).toBeInTheDocument();

  // Check if the "Hello world!" heading is rendered
  expect(screen.getByText('Hello world!')).toBeInTheDocument();
});



// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders App component without errors', () => {
//   render(<App />);
  
//   // Assert that the logo elements are rendered
//   const viteLogo = screen.getByAltText('Vite logo');
//   const reactLogo = screen.getByAltText('React logo');
//   expect(viteLogo).toBeInTheDocument();
//   expect(reactLogo).toBeInTheDocument();

//   // Assert that the text content is rendered
//   const countButton = screen.getByText(/count is/i);
//   const codeElement = screen.getByText(/Edit <code>src\/App.tsx<\/code> and save to test HMR/i);
//   const docsText = screen.getByText(/Click on the Vite and React logos to learn more/i);
//   expect(countButton).toBeInTheDocument();
//   expect(codeElement).toBeInTheDocument();
//   expect(docsText).toBeInTheDocument();
// });