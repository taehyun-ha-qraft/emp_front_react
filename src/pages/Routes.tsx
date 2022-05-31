import { Route, Routes as ReactRouterRoutes, Navigate } from 'react-router-dom';
import ExamplePage from '@pages/ExamplePage';
import MainPage from '@pages/MainPage';
import ParentsPage from '@pages/ParentsPage';
import ChildrenPage from '@pages/ChildrenPage';
import LoginPage from '@pages/LoginPage';
import ListPage from '@pages/ListPage';

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/login" element={<LoginPage />} />
      {/* <Route path="/list" element={<ListPage />} /> */}
      <Route path="/list" element={<ListPage />}>
        {/* <Route path=":portfolioId" element={<DetailPage />} /> */}

        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
      <Route path="*" element={<Navigate replace to="/login" />} />
      {/* <Route path="/example" element={<ExamplePage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/parents" element={<ParentsPage />}>
        <Route path=":id" element={<ChildrenPage />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
      <Route path="*" element={<Navigate replace to="/example" />} /> */}
    </ReactRouterRoutes>
  );
};
