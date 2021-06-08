export const getCabecerasWithOutImp = async () => {
  const url = "https://proyecto-nosotros.herokuapp.com/ajustes/woimp";
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

