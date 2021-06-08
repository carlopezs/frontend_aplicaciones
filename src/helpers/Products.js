export const getProducts = async () => {
  const url = "https://proyecto-nosotros.herokuapp.com/productos/stock";
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const getProductsAjuste = async () => {
  const url = "https://proyecto-nosotros.herokuapp.com/productos";
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const updateProducts = async (pro_id,pro_nombre,pro_descripcion,pro_iva,pro_costo,pro_pvp,pro_activo) => {
  const url = `https://proyecto-nosotros.herokuapp.com/productos/st?pro_id=${pro_id}&pro_nombre=${encodeURI(pro_nombre)}
                &pro_descripcion=${encodeURI(pro_descripcion)}&pro_iva=${pro_iva}
                &pro_costo=${pro_costo}&pro_pvp=${pro_pvp}&pro_activo=${pro_activo}`;
  const response = await fetch(url, { method: "PUT" });
  const data = await response.json();
  return data;
};

export const insertProduct = async (pro_nombre, pro_descripcion, pro_iva, pro_costo, pro_pvp, pro_activo, pro_stock) => {
  const url = `https://proyecto-nosotros.herokuapp.com/productos/?pro_nombre=${encodeURI(pro_nombre)}
                &pro_descripcion=${encodeURI(pro_descripcion)}&pro_iva=${pro_iva}
                &pro_costo=${pro_costo}&pro_pvp=${pro_pvp}&pro_activo=${pro_activo}
                &pro_stock=${pro_stock}`;
  const response = await fetch(url, { method: "POST" });
  const data = await response.json();
  console.log(data)
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


