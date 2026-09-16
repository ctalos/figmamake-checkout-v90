import svgPaths from "./svg-0s10b638v5";

function Container2() {
  return (
    <div className="content-stretch flex h-[22.378px] items-center relative shrink-0 w-[915.799px]" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[22.4px] relative shrink-0 text-[#333] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Step 3: Payment Method
      </p>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#ebf1f9] content-stretch flex flex-col items-start px-[16px] py-[12px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
    </div>
  );
}

function Image() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="image">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="image">
          <path d={svgPaths.p3851da00} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#00529b] mr-[-1px] relative rounded-[16px] shrink-0 size-[18px]" data-name="Input">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Image />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">Pay on Terms (Corporate PO Invoicing)</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0" data-name="Margin">
      <Container4 />
    </div>
  );
}

function Container3() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center left-[-1px] top-[calc(50%-6.5px)]" data-name="Container">
      <Input />
      <Margin />
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="h-[53px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#374151] text-[12px] tracking-[0.6px] uppercase w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p>
          <span className="leading-[16px]">{`PURCHASE ORDER # `}</span>
          <span className="leading-[16px] text-[#ef4444]">(REQUIRED)</span>
          <span className="leading-[16px]">{` `}</span>
          <span className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[16px] text-[#ef4444]" style={{ fontVariationSettings: '"wdth" 100' }}>
            *
          </span>
        </p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[14px] w-full">
          <p className="leading-[20px]">PO-98421-B</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white max-w-[300px] relative rounded-[4px] self-stretch shrink-0 w-[300px]" data-name="Input">
      <div className="max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[13px] py-[9px] relative size-full">
          <Container7 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Input1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pt-[4px] relative size-full">
        <Label />
        <Container6 />
      </div>
    </div>
  );
}

function Article() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[8px] shrink-0 w-full" data-name="Article">
      <div aria-hidden className="absolute border-2 border-[#00529b] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[26px] relative size-full">
        <HorizontalBorder />
        <Container5 />
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[0] pl-[12px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#374151] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">{`Pay with Credit Card `}</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center relative shrink-0 text-[#6b7280] text-[11px] w-[576px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">Selecting Credit Card will expand card entry fields upon selection.</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[366px]" data-name="Container">
      <div className="bg-white relative rounded-[16px] shrink-0 size-[16px]" data-name="Input">
        <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
      <Margin1 />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-[#0a2540] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background+Shadow">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold_Italic',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">VISA</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="h-[10px] relative shrink-0 w-[6px]" data-name="Margin">
      <div className="absolute bg-[#f79e1b] left-[-4px] opacity-90 rounded-[9999px] size-[10px] top-0" data-name="Background" />
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <div className="bg-[#eb001b] relative rounded-[9999px] shrink-0 size-[10px]" data-name="Background" />
        <Margin3 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[16px]">Mastercard</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[6px] items-center px-[11px] py-[5px] relative rounded-[4px] shrink-0" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[6px] relative shrink-0" data-name="Margin">
      <BackgroundBorderShadow />
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="bg-[#006fcf] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background+Shadow">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-white tracking-[0.6px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">AMEX</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[6px] relative shrink-0" data-name="Margin">
      <BackgroundShadow1 />
    </div>
  );
}

function AcceptedCardLogosPill() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Accepted Card Logos Pill">
      <BackgroundShadow />
      <Margin2 />
      <Margin4 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container9 />
        <AcceptedCardLogosPill />
      </div>
    </div>
  );
}

function Article1() {
  return (
    <div className="bg-[rgba(249,250,251,0.5)] relative rounded-[8px] shrink-0 w-full" data-name="Article">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[25px] relative size-full">
        <Container8 />
      </div>
    </div>
  );
}

function MainPaymentBodyContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative shrink-0 w-full" data-name="Main Payment Body Container">
      <Article />
      <Article1 />
    </div>
  );
}

function Container() {
  return (
    <div className="border-[#bfbfbf] border-[1.111px] border-solid content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <MainPaymentBodyContainer />
    </div>
  );
}

export default function ContainerMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative size-full" data-name="Container:margin">
      <Container />
    </div>
  );
}