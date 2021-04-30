import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import {GenreContextProvider} from './contexts/GenreContext';

import './styles/global.scss';

export function App() {

  return (
    <>
      <GenreContextProvider>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <SideBar />
          <Content />
        </div>
      </GenreContextProvider>
    </>
  )
}