function Package() {
  return (
    <div className="bg-[#0062bd] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Package">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">Package 1 of 2</p>
      </div>
    </div>
  );
}

function Heading2Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0" data-name="Heading 2:margin">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p>
          <span className="leading-[16px]">{`Ships from: `}</span>
          <span className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[16px] text-[#1e293b]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Elk Grove, IL (USA)
          </span>
        </p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p>
          <span className="leading-[16px]">{`| Ships on: `}</span>
          <span className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[16px] text-[#1e293b]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Monday, August 31st, 2026
          </span>
        </p>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex items-center relative size-full" data-name="Container">
      <Package />
      <Heading2Margin />
      <Margin />
    </div>
  );
}