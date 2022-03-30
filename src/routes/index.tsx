import {
  BrowserRouter,
  Routes as ReactRouterRoutes,
  Route
} from 'react-router-dom';

import Home from 'pages/Home/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <ReactRouterRoutes>
        <Route path="/" element={<Home />} />
      </ReactRouterRoutes>
    </BrowserRouter>
  );
}
