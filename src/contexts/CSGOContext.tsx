import { useState, createContext, ReactNode } from 'react';
import { CsgoDTO, PlayerDTO } from 'src/dtos/CsgoDTO';
import { api } from '@services/api';

export type CSGOContextDataProps = {
    dataList: CsgoDTO[];
    playerListA: PlayerDTO[];
    playerListB: PlayerDTO[];
    getList: () => Promise<void>;
    getPlayer: (teamOpponent: { opponent: { id: number } }, player: string) => Promise<void>;
}

type CSGOContextProviderProps = {
  children: ReactNode;
}

export const CSGOContext = createContext<CSGOContextDataProps>({} as CSGOContextDataProps);

export function CSGOContextProvider({ children }: CSGOContextProviderProps) {
  const [dataList, setDataList] = useState<CsgoDTO[]>([]);
  const [playerListA, setPlayerListA] = useState<PlayerDTO[]>([]);
  const [playerListB, setPlayerListB] = useState<PlayerDTO[]>([]);

  async function getList(){
    try {
      const params = {
        token: '9P8qPHIAhwNpSko2PU-7jlxuW9yDu2R40F5pTBtSJ1L8k1VVyjA',
      };
      
      const response = await api.get('/csgo/matches?sort=&page=1&per_page=50', {params});
      setDataList(response.data);
    } catch (error) {
      throw error;
    }
  }

  async function getPlayer(teamOpponent: { opponent: { id: number } }, player: string){
    try {
      const params = {
        token: '9P8qPHIAhwNpSko2PU-7jlxuW9yDu2R40F5pTBtSJ1L8k1VVyjA',
      };
      
      const response = await api.get(`/csgo/players?filter[team_id]=${teamOpponent.opponent.id}`, {params});

      if (player === 'PlayerA') {
        setPlayerListA(response.data);
      } else if (player === 'PlayerB') {
        setPlayerListB(response.data);
      }
    } catch (error) {
      throw error;
    }
  }

  return(
    <CSGOContext.Provider value={{dataList, getList, getPlayer, playerListA, playerListB}}>
      {children}
    </CSGOContext.Provider>
  )    
}
  