// @packages
import Box from '@mui/material/Box';
import { FC, ReactNode } from 'react';

// @scripts
import Header from '../components/header';

// @Interface
interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <Box component="main">
    <Header />
    {children}
  </Box>
);

export default Layout;
