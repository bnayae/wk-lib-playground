import styled from 'styled-components';
import { LayoutRaw } from './LayoutRaw';

export const Layout = styled(LayoutRaw)`
  display: grid;
  grid-auto-flow: row;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`;
