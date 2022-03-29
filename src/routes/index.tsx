import {
  BrowserRouter,
  Routes as ReactRouterRoutes,
  Route
} from 'react-router-dom';

import Home from 'pages/HomePage';

export default function Routes() {
  return (
    <BrowserRouter>
      <ReactRouterRoutes>
        <Route path="/" element={<Home />} />
      </ReactRouterRoutes>
    </BrowserRouter>
  );
}
