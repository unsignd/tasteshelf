export function ProductCard({ firstRow }: { firstRow: boolean }) {
  return (
    <div
      className={`w-[360px] h-[120px] flex gap-5 items-center overflow-hidden group cursor-pointer shrink-0 ${
        firstRow ? 'border-y' : 'border-b'
      }`}
    >
      <img
        src="https://tr.rbxcdn.com/180DAY-18f5ddc9fab18e2ab000abfd89d3e00a/420/420/ShoulderAccessory/Webp/noFilter"
        className="h-20 shrink-0 aspect-square"
        alt="Beverage Product"
      />
      <div className="overflow-hidden flex flex-col gap-1">
        <small className="block text-ellipsis overflow-hidden whitespace-nowrap">
          Company
        </small>
        <p className="text-ellipsis overflow-hidden whitespace-nowrap group-hover:underline">
          Product
        </p>
      </div>
    </div>
  );
}
