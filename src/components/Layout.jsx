
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from "./GlobalStyles";
export const Layout = () => {
    return (
      <>
        <Container>
          <SharedLayout />
          <Suspense fallback={null}>
            <main>
              <Outlet />
            </main>
          </Suspense>
        </Container>
      </>
    );
}
