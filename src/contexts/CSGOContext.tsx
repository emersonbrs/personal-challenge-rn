import { useState, createContext, ReactNode, SetStateAction, Dispatch } from 'react';
import moment, { months } from 'moment';
import 'moment/locale/pt-br';

import { CsgoDTO, PlayerDTO } from 'src/dtos/CsgoDTO';
import { api } from '@services/api';

export type CSGOContextDataProps = {
    dataList: CsgoDTO[];
    playerListA: PlayerDTO[];
    playerListB: PlayerDTO[];
    isLoading: boolean;
    refreshing: boolean;
    setRefreshing: Dispatch<SetStateAction<boolean>>;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    getList: () => Promise<void>;
    getPlayer: (teamOpponent: { opponent: { id: number } }, player: string) => Promise<void>;
    setPage: Dispatch<SetStateAction<number>>;
    setPlayerListA: Dispatch<SetStateAction<PlayerDTO[]>>;
    setPlayerListB: Dispatch<SetStateAction<PlayerDTO[]>>;
}

type CSGOContextProviderProps = {
  children: ReactNode;
}

export const CSGOContext = createContext<CSGOContextDataProps>({} as CSGOContextDataProps);

export function CSGOContextProvider({ children }: CSGOContextProviderProps) {
  const [dataList, setDataList] = useState<CsgoDTO[]>([]);
  const [playerListA, setPlayerListA] = useState<PlayerDTO[]>([]);
  const [playerListB, setPlayerListB] = useState<PlayerDTO[]>([]);
  const [page, setPage] = useState(1);
  
  const [isLoading, setIsLoading] = useState(false);

  const [refreshing, setRefreshing] = useState(false);

  async function getList(){
    try {
      const params = {
        token: '9P8qPHIAhwNpSko2PU-7jlxuW9yDu2R40F5pTBtSJ1L8k1VVyjA',
      };

      const today = new Date();

      const rangeDate = {
        begin_at: moment(today).utc().locale('pt-br').format('YYYY-MM-DD'),
        end_at: moment(today.setMonth(today.getMonth() + 1)).utc().locale('pt-br').format('YYYY-MM-DD')
      }
      
      await api.get(
        `/csgo/matches?sort=scheduled_at&range[begin_at]=${rangeDate.begin_at},${rangeDate.end_at}&filter[finished]=false`,
        {
          params,
        }
      ).then(res => {
        setDataList(res.data)
        setIsLoading(false)
        setRefreshing(false)
      });

    } catch (error) {
      setIsLoading(false)
      throw error;
    }
  }

  async function getPlayer(teamOpponent: { opponent: { id: number } }, player: string){
    try {
      setIsLoading(true)
      const params = {
        token: '9P8qPHIAhwNpSko2PU-7jlxuW9yDu2R40F5pTBtSJ1L8k1VVyjA',
      };
      
      await api.get(`/csgo/players?filter[team_id]=${teamOpponent.opponent.id}`, {params}).then(res => {
        
        if (player === 'PlayerA') {
          setPlayerListA(res.data);
        } else if (player === 'PlayerB') {
          setPlayerListB(res.data);
        }

        setIsLoading(false)
      });

      
    } catch (error) {
        setIsLoading(false)
        throw error;
    }
  }

  return(
    <CSGOContext.Provider value={{
      dataList,
      getList,
      getPlayer,
      playerListA,
      playerListB,
      isLoading,
      setIsLoading,
      refreshing,
      setRefreshing,
      setPage,
      setPlayerListA,
      setPlayerListB
    }}>
      {children}
    </CSGOContext.Provider>
  )    
}
  