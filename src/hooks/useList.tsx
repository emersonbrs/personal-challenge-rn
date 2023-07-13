import { useContext } from 'react';

import { CSGOContext } from '@contexts/CSGOContext';

export function useList(){
    const context = useContext(CSGOContext);

    return context;
}