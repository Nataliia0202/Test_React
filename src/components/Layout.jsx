
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Main } from "./GlobalStyles";
export const Layout = () => {
    return (
      <>
        
          <SharedLayout />
          <Suspense fallback={null}>
            <Main>
              <Outlet />
            </Main>
          </Suspense>
        
      </>
    );
}
