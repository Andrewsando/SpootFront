import React, { useEffect, useState } from 'react';
import { paymentAnual, paymentMensual } from '../../Redux/Actions/Mercadopago';
import { useDispatch, useSelector } from 'react-redux';

const ComprarPlanes = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.generalUsers);
  const id = user.id;
  const [mensual, setMensual] = useState(false);
  const [anual, setAnual] = useState(false);

  useEffect(() => {
    if (mensual) {
      dispatch(paymentMensual(id));
    }
  }, [mensual, id]);

  useEffect(() => {
    if (anual) {
      dispatch(paymentAnual(id));
    }
  }, [anual, id]);

  const handleButtonClick = (name) => {
    if (name === 'Mensual') {
      setMensual(!mensual);
      setAnual(false); 
    } else {
      setAnual(!anual);
      setMensual(false); 
    }
  };

  return (
    <div>
      <div>
        <p>Mensual</p>
        <button onClick={() => handleButtonClick('Mensual')} name="Mensual">
          Seleccionar Mensual
        </button>
      </div>
      <div>
        <p>Anual</p>
        <button onClick={() => handleButtonClick('Anual')} name="Anual">
          Seleccionar Anual
        </button>
      </div>
    </div>
  );
};

export default ComprarPlanes;
