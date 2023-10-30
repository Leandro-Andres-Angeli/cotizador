import React, { useEffect, useState } from 'react';
import CotizacionResult from './CotizacionResult';
import HandleStorage from './HandleStorage';
const MT2 = 35.86;
const getData = async () => {
  const res = await fetch('/data/datos.json');
  const json = await res.json();
  return json;
};
const HomePage = () => {
  const [data, setData] = useState({});
  const [cotizacion, setCotizacion] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    // console.log('metros', e.target.metros);
    // console.log('tipo', e.target.tipo);
    // console.log('ubicacion', e.target.ubicacion);
    const formValues = {
      metros: Number(e.target.metros.value),
      tipo: Number(e.target.tipo.value),
      metros: Number(e.target.metros.value),
    };

    setCotizacion(
      formValues.metros * formValues.tipo * formValues.metros * MT2
    );
    // setCotizacionForm({})
  };
  useEffect(() => {
    const formatData = async () => {
      const data = await getData();
      const formattedData = data.reduce(
        (acc, curr) => {
          if (curr.categoria === 'propiedad') {
            acc.propiedades.push(curr);
          }
          if (curr.categoria === 'ubicacion') {
            acc.ubicaciones.push(curr);
          }
          return acc;
        },
        { propiedades: [], ubicaciones: [] }
      );
      setData(formattedData);
    };
    formatData();
  }, []);
  return (
    <>
      <div>
        <h1>Cotizador</h1>
        {/* {data && JSON.stringify(data)} */}
        <form
          style={{ backgroundColor: 'white', padding: '10px' }}
          onSubmit={handleSubmit}
        >
          <select name='tipo'>
            {data?.propiedades?.map((e) => {
              return (
                <option value={e.factor} key={e.tipo}>
                  {e.tipo}
                </option>
              );
            })}
          </select>
          <select name='ubicacion'>
            {data?.ubicaciones?.map((e) => {
              return (
                <option value={e.factor} key={e.tipo}>
                  {e.tipo}
                </option>
              );
            })}
          </select>
          <label style={{ display: 'block' }}>
            Mts cuadrados
            <input type='number' name='metros' min='0' required />
          </label>
          <button type='submit'>calcular</button>
        </form>
      </div>
      <HandleStorage cotizacion={cotizacion}></HandleStorage>
      {cotizacion !== 0 ? (
        <CotizacionResult resultado={cotizacion}></CotizacionResult>
      ) : (
        <div>Ingrese datos para cotizar</div>
      )}
    </>
  );
};

export default HomePage;
