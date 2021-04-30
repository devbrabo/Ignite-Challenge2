import {useState, createContext, useContext, ReactNode} from 'react';

type IGenreContextData = {
  selectedGenreId: number;
  handleChangeSelectedGenreId: (id: number) => void;
}

type IGenreContextProvider = {
  children: ReactNode;
}

const GenreContext = createContext<IGenreContextData>({} as IGenreContextData);

export function GenreContextProvider({children}: IGenreContextProvider) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleChangeSelectedGenreId (id: number) {
    setSelectedGenreId(id);
  }

  return(
    <GenreContext.Provider value={{selectedGenreId, handleChangeSelectedGenreId}}>
      {children}
    </GenreContext.Provider>
  );
}

export function useGenreContext (): IGenreContextData{
  const context = useContext(GenreContext);

  if (!context) {
    throw new Error('useGenreContext must be used with GenreContextProvider');
  }

  return context;
} 