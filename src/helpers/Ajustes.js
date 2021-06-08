export const getCabecerasWithOutImp = async () => {
  const url = "https://proyecto-nosotros.herokuapp.com/ajustes/woimp";
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

export const insertDetalle = async (det_cantidad,cab_id,pro_id,det_stock_registro) => {
  const url = `https://proyecto-nosotros.herokuapp.com/ajustes/det?det_cantidad=${encodeURI(det_cantidad)}
               &cab_id=${encodeURI(cab_id)}&pro_id=${encodeURI(pro_id)}
               &det_stock_registro=${encodeURI(det_stock_registro)}`;

  const response = await fetch(url, { method: "POST" });
  const data = await response.json();
  console.log(data)
  return data;
};


