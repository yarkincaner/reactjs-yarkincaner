import React, { useState, createContext, ReactNode } from "react";

interface ContextState {
  repos: any[];
  setRepos: (value: React.ReactElement[]) => void;
  filters: Array<string>;
  setFilters: (value: Array<string>) => void;
}

export const Context = createContext<ContextState>({
  repos: [],
  setRepos: () => {},
  filters: [],
  setFilters: () => {},
});

interface IContextProvider {
  children?: ReactNode;
}

export const ContextProvider = ({ children }: IContextProvider) => {
  const [filters, setFilters] = useState<Array<string>>([]);

  const [repos, setRepos] = useState<React.ReactElement[]>([]);

  const values = {
    repos,
    setRepos,
    filters,
    setFilters,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default Context;
