import { createContext } from 'react';
import { CsgoDTO } from 'src/dtos/CsgoDTO';

export type CSGOContextDataProps = {
    csgo: CsgoDTO;
}

export const CSGOContext = createContext<CSGOContextDataProps>({} as CSGOContextDataProps);
