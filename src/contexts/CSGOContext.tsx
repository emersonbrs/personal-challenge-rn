import { useState, createContext, ReactNode } from 'react';
import { CsgoDTO } from 'src/dtos/CsgoDTO';
import { api } from '@services/api';

export type CSGOContextDataProps = {
    dataList: CsgoDTO[];
    csgo: CsgoDTO;
    getList: () => void;
}

type CSGOContextProviderProps = {
  children: ReactNode;
}

export const CSGOContext = createContext<CSGOContextDataProps>({} as CSGOContextDataProps);

export function CSGOContextProvider({ children }: CSGOContextProviderProps) {
  const [dataList, setDataList] = useState<CsgoDTO[]>([]);

  async function getList(){
    try {
      const params = {
        token: 'test token',
      };
      
      const response = await api.get('/csgo/matches?sort=&page=1&per_page=50', {params});
      setDataList(response.data);
    } catch (error) {
      throw error;
    }
  }

  return(
    <CSGOContext.Provider value={{dataList, csgo: [], getList}}>
      {children}
    </CSGOContext.Provider>
  )    
}
  