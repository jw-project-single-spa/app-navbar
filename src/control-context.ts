import { createContext } from 'react';

import { ControlContextType } from './types';

export const ControlContext = createContext<ControlContextType>(
  {} as ControlContextType,
);