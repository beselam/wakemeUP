/* eslint-disable max-len */
import React, {useState} from 'react';
import PropTypes from 'prop-types';

const SuppContext = React.createContext([{}, () => {}]);

const SupplimentArray = [{'medicineName':'amoxa','startingTime':8,'perDay':3,'timeInterval':8 , 'left':2},{'medicineName':'amoxa','startingTime':8,'perDay':3,'timeInterval':8 , 'left':2}];

const SuppProvider = (props) => {
  const [suppliment, setSuppliment] = useState(SupplimentArray);
  return (
    <SuppContext.Provider value={[suppliment, setSuppliment]}>
      {props.children}
    </SuppContext.Provider>
  );
};


export {SuppContext, SuppProvider};
