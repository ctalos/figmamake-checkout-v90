import svgPaths from "./svg-g4g8wfr41x";

function Frame1() {
  return (
    <div className="border border-[#004bb1] border-dashed content-stretch flex gap-[8px] items-center px-[8px] py-[2px] relative rounded-[3px] shrink-0">
      <div className="h-[10px] relative shrink-0 w-[9.555px]" data-name="Union">
        <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 9.55566 10" width="9.55566">
          <path d={svgPaths.p1601a00} fill="#004BB1" id="Union" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#004bb1] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">Add carrier account</p>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[8px] relative rounded-[3px] size-full">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">{`Account: `}</p>
      </div>
      <Frame1 />
    </div>
  );
}