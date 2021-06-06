export const getProducts = async () => {
  const url = "https://proyecto-nosotros.herokuapp.com/productos/stock";
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