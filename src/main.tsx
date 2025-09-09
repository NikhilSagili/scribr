import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App.tsx'
import './index.css'

// Single Page Apps for GitHub Pages
// https://github.com/rafgraph/spa-github-pages
// Check if we were redirected from a 404 page
const isRedirectedFromError = /\/\?\//.test(window.location.search);
if (isRedirectedFromError) {
  // Remove the redirect query parameter and navigate to the intended page
  const { pathname, search, hash } = window.location;
  const route = search.replace(/^\?\//,'').replace(/&/g,'?').replace(/~and~/g,'&');
  window.history.replaceState(null, '', pathname + route + hash);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
