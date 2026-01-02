import { useEffect, useState } from 'react';
import { ProductCard } from '../components/cards/ProductCard';

export function Product() {
  /* temp */
  const [featuredList, setFeaturedList] = useState<Array<any>>([]);
  const [retailList, setRetailList] = useState<Array<any>>([]);

  useEffect(() => {
    setFeaturedList([0, 0, 0, 0]);
    setRetailList([0, 0, 0, 0]);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full h-screen px-10">
        <div className="w-[calc(100%_-_80px)] h-full absolute flex items-center justify-between">
          <div className="w-[360px] flex flex-col gap-5">
            <div className="overflow-hidden flex flex-col gap-[4px]">
              <small className="block text-ellipsis overflow-hidden whitespace-nowrap">
                Company
              </small>
              <p className="text-ellipsis overflow-hidden whitespace-nowrap group-hover:underline">
                Product
              </p>
            </div>
            <p>
              This is a sample description text used only for layout and
              development purposes. It does not describe a specific product and
              may be replaced with actual content later. The goal of this text
              is to test spacing, alignment, and readability within the
              interface.
            </p>
          </div>
          <div className="w-[360px] max-h-[280px] px-5 flex flex-col bg-white border border-black no-scrollbar overflow-y-auto">
            <div className="sticky top-0 py-5">
              <p>get it now</p>
            </div>
            <div className="w-full pb-5 flex flex-col">
              {retailList.map((_, index) => (
                <div
                  className="w-full py-5 flex items-center justify-between gap-5 shrink-0 group cursor-pointer"
                  key={index}
                >
                  <div className="min-w-0 flex flex-col gap-2 flex-1">
                    <div className="flex items-center gap-[6px]">
                      {/* temp */}
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4qAKcxM410O8K7y5UZy8VQ7JQaBZsm8uZRA&s"
                        className="w-[16px] h-[16px] rounded-full"
                        alt="Retail Store Logo"
                      />
                      <small className="text-ellipsis overflow-hidden whitespace-nowrap">
                        Company
                      </small>
                    </div>
                    <p className="text-ellipsis overflow-hidden whitespace-nowrap group-hover:underline">
                      Retail Product
                    </p>
                  </div>
                  <p className="shrink-0">CA$3.99</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-full flex items-center justify-center">
          <img
            src="https://tr.rbxcdn.com/180DAY-18f5ddc9fab18e2ab000abfd89d3e00a/420/420/ShoulderAccessory/Webp/noFilter"
            className="h-[calc(100%_-_160px)] shrink-0 aspect-square"
            alt="Beverage Product"
          />
        </div>
      </div>
      <div className="w-full pt-20 flex flex-col gap-60">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <div className="w-[1560px] max-w-[calc(100%_-_160px)] h-20 flex items-center justify-between">
              <p>similar to</p>
              <p className="hover:underline cursor-pointer">view all</p>
            </div>
          </div>
          <div className="px-[max(80px_,_calc((100%_-_1560px)_/_2))] flex gap-10 no-scrollbar overflow-x-auto">
            {featuredList.map((_, index) => (
              <ProductCard key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
