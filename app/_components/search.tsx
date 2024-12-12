import DatePicker from "./date-picker";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Search = () => {
  return (
    <div className="p-5 bg-[url('/world-map.png')] bg-cover bg-center   space-y-3">
      <h2 className="text-xl font-semibold text-center">
        Encontre sua próxima <span className="text-primary">viagem!</span>
      </h2>
      <Input placeholder="Onde você quer ir?" />
      <div className="flex justify-between gap-4">
        <DatePicker />
        <Input placeholder="Orçamento" />
      </div>
      <Button className="w-full">Pesquisar</Button>
    </div>
  );
};

export default Search;
