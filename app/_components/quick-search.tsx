import Image from "next/image";

const QuickSearch = () => {
  return (
    <div className="px-5 space-y-5">
      <div className="flex items-center">
        <div className="w-full h-[1px] border border-solid"></div>
        <h3 className="text-muted px-5 whitespace-nowrap">
          Tente pesquisar por
        </h3>
        <div className="w-full h-[1px] border border-solid"></div>
      </div>
      <div className="flex justify-between">
        <div className="text-muted text-sm flex flex-col items-center">
          <Image src="/hotel.svg" width={25} height={25} alt="Hotés" />
          <p>Hotéis</p>
        </div>
        <div className="text-muted text-sm flex flex-col items-center">
          <Image src="/cottage.svg" width={25} height={25} alt="Chalés" />
          <p>Chalés</p>
        </div>
        <div className="text-muted text-sm flex flex-col items-center">
          <Image src="/resort.svg" width={25} height={25} alt="Resort" />
          <p>Resorts</p>
        </div>
        <div className="text-muted text-sm flex flex-col items-center">
          <Image src="/farm.svg" width={25} height={25} alt="Fazenas" />
          <p>Fazendas</p>
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;
