import { useEffect, useState } from 'react';
import { ProductCard } from '../components/cards/ProductCard';

export function Landing() {
  /* temp */
  const [featuredList, setFeaturedList] = useState<Array<any>>([]);
  const [highlyRatedList, setHighlyRatedList] = useState<Array<any>>([]);

  useEffect(() => {
    setFeaturedList([0, 0, 0, 0, 0, 0, 0, 0]);
    setHighlyRatedList([0, 0, 0, 0]);
  }, []);

  return (
    <div className="w-full flex flex-col">
      <div className="h-screen px-10 flex gap-20 items-center no-scrollbar overflow-x-auto">
        {featuredList.map((_, index) => (
          <img
            key={index}
            src="https://tr.rbxcdn.com/180DAY-18f5ddc9fab18e2ab000abfd89d3e00a/420/420/ShoulderAccessory/Webp/noFilter"
            className="w-[25%] shrink-0 aspect-square"
            alt="Beverage Product"
          />
        ))}
      </div>
      <div className="w-full pt-20 flex flex-col gap-60">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <div className="w-[1560px] max-w-[calc(100%_-_160px)] h-20 flex items-center justify-between">
              <p>highly rated</p>
              <p className="hover:underline cursor-pointer">view all</p>
            </div>
          </div>
          <div className="px-[max(80px_,_calc((100%_-_1560px)_/_2))] flex gap-10 no-scrollbar overflow-x-auto">
            {highlyRatedList.map((_, index) => (
              <ProductCard key={index} />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center">
            <div className="w-[1560px] max-w-[calc(100%_-_160px)] h-20 flex items-center justify-between">
              <p>newly added</p>
              <p className="hover:underline cursor-pointer">view all</p>
            </div>
          </div>
          <div className="px-[max(80px_,_calc((100%_-_1560px)_/_2))] flex gap-10 no-scrollbar overflow-x-auto">
            {highlyRatedList.map((_, index) => (
              <ProductCard key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
