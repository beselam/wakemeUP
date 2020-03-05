/* eslint-disable max-len */
import React, {useState} from 'react';
import PropTypes from 'prop-types';

const MedicContext = React.createContext([{}, () => {}]);

const medicArray = [{'medicineName':'amoxa','startingTime':8,'howmanyTimes':3,'timeGap':8 , 'left':2,'barSection':0.5},{'medicineName':'amoxa','startingTime':8,'perDay':3,'timeInterval':8 , 'left':2,'barSection':0.5},{'medicineName':'amoxa','startingTime':8,'perDay':3,'timeInterval':8 , 'left':2,'barSection':0.25}];

const MedicProvider = (props) => {
  const [medicine, setMedicine] = useState(medicArray);
  return (
    <MedicContext.Provider value={[medicine, setMedicine]}>
      {props.children}
    </MedicContext.Provider>
  );
};


export {MedicContext, MedicProvider};
