import { Container } from "./Container/Container";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

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
