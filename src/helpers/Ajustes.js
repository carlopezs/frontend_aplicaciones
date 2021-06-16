export const getCabecerasWithOutImp = async () => {
  const url = "https://proyecto-nosotros.herokuapp.com/ajustes/woimp";
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
export const getCabecerasNumeroID = async () => {
  const url = "https://proyecto-nosotros.herokuapp.com/ajustes/id";
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const getCabeceraById = async (cab_id) => {
  const url = `https://proyecto-nosotros.herokuapp.com/ajustes/cab/${cab_id}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};


export const insertCabecera = async (cab_descripcion) => {
  const url = `https://proyecto-nosotros.herokuapp.com/ajustes/cab?cab_descripcion=${encodeURI(cab_descripcion)}
              `;
  const response = await fetch(url, { method: "POST" });
  const data = await response.json();
  console.log(data)
  return data;
};

export const updateCabecera = async (cab_id, cab_descripcion) => {
  const url = `https://proyecto-nosotros.herokuapp.com/ajustes/cab?cab_id=${cab_id}&cab_descripcion=${encodeURI(cab_descripcion)}`;
  const response = await fetch(url, { method: "PUT" });
  const data = await response.json();
  return data;
};

export const updateCabeceraImp= async (cab_id) => {
  const url = `https://proyecto-nosotros.herokuapp.com/ajustes/cab/imp/?cab_id=${cab_id}`;
  const response = await fetch(url,{
    method:'PUT',
  });
  const data = await response.json();
  return data;
};

export const getDetallesByCab = async (cab_id) => {
  const url = `https://proyecto-nosotros.herokuapp.com/ajustes/det/${cab_id}`;
  const response = await fetch(url,{
    method:'GET',
  });
  const data = await response.json();
  return data;
};




export const insertDetalle = async (det_cantidad,pro_id,det_stock_registro) => {

  const url = `https://proyecto-nosotros.herokuapp.com/ajustes/det?det_cantidad=${encodeURI(det_cantidad)}
               &pro_id=${encodeURI(pro_id)}
               &det_stock_registro=${encodeURI(det_stock_registro)}`;

  const response = await fetch(url, { method: "POST" });
  const data = await response.json();
  console.log(data)
  return data;
};

export const updateDetalle = async (det_id, det_cantidad, det_stock_registro) => {
  const url = `https://proyecto-nosotros.herokuapp.com/ajustes/det?det_id=${det_id}&det_cantidad=${det_cantidad}
                &det_stock_registro=${det_stock_registro}`;
  const response = await fetch(url, { method: "PUT" });
  const data = await response.json();
  return data;
};

export const deleteDetalle = async (det_id) => {
  const url = `https://proyecto-nosotros.herokuapp.com/pajustes/det?det_id=${det_id}`;
  const response = await fetch(url, { method: "DELETE" });
  const data = await response.json();
  return data;
};

export const getKardex = async (pro_id) => {
  const url = `https://proyecto-nosotros.herokuapp.com/kardex/${pro_id}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};


