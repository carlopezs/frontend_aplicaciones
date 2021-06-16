export const getProducts = async () => {
  const url = "https://modulo-inventario-app.herokuapp.com/productos";
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const getProductById = async (pro_id) => {
  const url = `https://modulo-inventario-app.herokuapp.com/productos/${pro_id}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const getProductsAjuste = async () => {
  const url = "https://modulo-inventario-app.herokuapp.com/productos";
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
export const updateProductsConStock = async (pro_id,pro_nombre,pro_descripcion,pro_iva,pro_costo,pro_pvp,pro_activo,pro_stock) => {
  const url = `https://proyecto-nosotros.herokuapp.com/productos/?pro_id=${pro_id}&pro_nombre=${encodeURI(pro_nombre)}
                &pro_descripcion=${encodeURI(pro_descripcion)}&pro_iva=${pro_iva}
                &pro_costo=${pro_costo}&pro_pvp=${pro_pvp}&pro_activo=${pro_activo}&pro_stock=${pro_stock}`;
  const response = await fetch(url, { method: "PUT" });
  const data = await response.json();
  console.log(data)
  return data;
};

export const insertProduct = async (pro_nombre, pro_descripcion, pro_iva, pro_costo, pro_pvp, pro_activo, pro_stock) => {
  console.log(encodeURI(pro_nombre))
  const url = `https://proyecto-nosotros.herokuapp.com/productos/?pro_nombre=${encodeURI(pro_nombre)}&pro_descripcion=${encodeURI(pro_descripcion)}&pro_iva=${pro_iva}
                &pro_costo=${pro_costo}&pro_pvp=${pro_pvp}&pro_activo=${pro_activo}
                &pro_stock=${pro_stock}`;
  const response = await fetch(url, { method: "POST" });
  const data = await response.json();
  return data;
};


