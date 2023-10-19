import CountryCapital from "./components/CountryCapital";


export const Games = () => {
/**
 * object representing a collection of country,capital pairs.
 */
  const data = {
    India: "New Delhi",
    Australia: "Canberra",
    Afghanistan:"Kabul",
    Albania:"Tirana",
    Austria:"Vienna",
    Angola:"Luanda",
    Argentina:"Buenos Aires"
  };
  return (
    <div className="p-4">
      <h1 className="mb-[100px] text-2xl font-bold">Match Country With Capital</h1>
      <CountryCapital data={data} />
    </div>
  );
};
