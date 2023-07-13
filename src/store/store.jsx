import React, { useState } from 'react';

import { FILTER_DEFAULT_VALUE } from '../constants/filters';

const defaultState = {
  transactions: {},
  setTransactions: () => {},
  customers: {},
  setCustomers: () => {},
  filter: FILTER_DEFAULT_VALUE,
  setFilter: () => {},
};

const Context = React.createContext(defaultState);

const ContextProvider = (props) => {
  const [customers, setCustomers] = useState();
  const [transactions, setTransactions] = useState();
  const [filter, setFilter] = useState(FILTER_DEFAULT_VALUE);

  const contextValue = {
    customers,
    setCustomers,
    transactions,
    setTransactions,
    filter,
    setFilter,
  };

  return <Context.Provider value={contextValue}>{props.children}</Context.Provider>;
};

export { ContextProvider, Context };
