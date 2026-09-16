import svgPaths from "./svg-gol9aevr63";

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
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <div className="bg-white mr-[-1px] relative rounded-[16px] shrink-0 size-[16px]" data-name="Input">
        <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
      <Margin />
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[2px] relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function Article() {
  return (
    <div className="bg-[rgba(249,250,251,0.5)] relative rounded-[8px] shrink-0 w-full" data-name="Article">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[21px] relative size-full">
        <HorizontalBorder />
      </div>
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

function Paragraph() {
  return (
    <div className="[word-break:break-word] h-[24px] leading-[0] relative shrink-0 w-[358.41px] whitespace-nowrap" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center left-0 text-[#111827] text-[16px] top-[12px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">{`Pay with Credit Card `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center left-[168.52px] text-[#6b7280] text-[12px] top-[13px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">(Immediate electronic authorization)</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0" data-name="Margin">
      <Paragraph />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Input />
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

function Container6() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <div className="bg-[#eb001b] relative rounded-[9999px] shrink-0 size-[10px]" data-name="Background" />
        <Margin3 />
      </div>
    </div>
  );
}

function Container7() {
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
      <Container6 />
      <Container7 />
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

function CardHeaderSelector() {
  return (
    <div className="relative shrink-0 w-full" data-name="Card Header Selector">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between py-px relative size-full">
        <Container5 />
        <AcceptedCardLogosPill />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">Purchase Order / Job Reference # (Optional for Credit Card):</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[12px] w-full">
          <p className="leading-[16px]">PO-98421-B</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-[192px]" data-name="Input">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[11px] py-[5px] relative rounded-[inherit] size-full">
        <Container9 />
      </div>
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Label />
        <Input1 />
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="relative shrink-0 w-[856px]" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start pt-[13px] relative size-full">
        <Container8 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[20px] tracking-[-0.5px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[28px]">Enter your credit card information</p>
      </div>
    </div>
  );
}

function Separator() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Separator">
      <div aria-hidden className="absolute border-[#9ca3af] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#374151] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p>
          <span className="leading-[16px]">{`Please enter a new credit card number. `}</span>
          <span className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[16px] text-[#ea580c]" style={{ fontVariationSettings: '"wdth" 100' }}>
            * required fields
          </span>
        </p>
      </div>
    </div>
  );
}

function Data() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex flex-col items-start px-[13px] py-[7.5px] relative shrink-0 w-[150px]" data-name="Data">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#374151] text-[13.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p>
          <span className="leading-[20px]">{`Amount (USD) `}</span>
          <span className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[20px] text-[#ea580c]" style={{ fontVariationSettings: '"wdth" 100' }}>
            *
          </span>
        </p>
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Data">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start px-[13px] py-[7.5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[20px]">61.54</p>
        </div>
      </div>
    </div>
  );
}

function AmountRow() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Amount Row">
      <Data />
      <Data1 />
    </div>
  );
}

function Data2() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex flex-col items-start px-[13px] py-[14.5px] relative shrink-0 w-[150px]" data-name="Data">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#374151] text-[13.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p>
          <span className="leading-[20px]">{`Card Number `}</span>
          <span className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[20px] text-[#ea580c]" style={{ fontVariationSettings: '"wdth" 100' }}>
            *
          </span>
        </p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1f2937] text-[14px] w-full">
          <p className="leading-[20px]">4000 1234 5678 4242</p>
        </div>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[13px] pr-[37px] py-[7px] relative size-full">
          <Container13 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p3b28e600} id="Vector" stroke="#4B5563" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function HideShowEyeIconFromReference() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center pr-[10px] right-0 top-0" data-name="Hide/Show Eye Icon from reference">
      <Svg />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[288px]" data-name="Container">
      <Input2 />
      <HideShowEyeIconFromReference />
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container12 />
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Data">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start px-[13px] py-[7.5px] relative size-full">
        <Container11 />
      </div>
    </div>
  );
}

function CardNumberRow() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Card Number Row">
      <Data2 />
      <Data3 />
    </div>
  );
}

function Data4() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex flex-col items-start px-[13px] py-[12.5px] relative shrink-0 w-[150px]" data-name="Data">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#374151] text-[13.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p>
          <span className="leading-[20px]">{`Expiration `}</span>
          <span className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[20px] text-[#ea580c]" style={{ fontVariationSettings: '"wdth" 100' }}>
            *
          </span>
        </p>
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="image">
      <svg className="absolute block inset-0 size-full" fill="none" height="21" preserveAspectRatio="none" viewBox="0 0 21 21" width="21">
        <g id="image">
          <path d="M6.3 8.4L10.5 12.6L14.7 8.4" id="Vector" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.575" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[20px]">September</p>
        </div>
        <Image1 />
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center pl-[11px] pr-[6px] py-[5px] relative rounded-[4px] shrink-0" data-name="Options">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">/</p>
      </div>
    </div>
  );
}

function Image2() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="image">
      <svg className="absolute block inset-0 size-full" fill="none" height="21" preserveAspectRatio="none" viewBox="0 0 21 21" width="21">
        <g id="image">
          <path d="M6.3 8.4L10.5 12.6L14.7 8.4" id="Vector" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.575" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[20px]">2026</p>
        </div>
        <Image2 />
      </div>
    </div>
  );
}

function Options1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center pl-[11px] pr-[6px] py-[5px] relative rounded-[4px] shrink-0" data-name="Options">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container17 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">(mm/yyyy)</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Options />
        <Container16 />
        <Options1 />
        <Margin5 />
      </div>
    </div>
  );
}

function Data5() {
  return (
    <div className="content-stretch flex flex-col items-start px-[13px] py-[7.5px] relative shrink-0 w-[303px]" data-name="Data">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Container14 />
    </div>
  );
}

function Data6() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex flex-col items-start px-[13px] py-[12.5px] relative shrink-0 w-[125px]" data-name="Data">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#374151] text-[13.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p>
          <span className="leading-[20px]">{`Name on Card `}</span>
          <span className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[20px] text-[#ea580c]" style={{ fontVariationSettings: '"wdth" 100' }}>
            *
          </span>
        </p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[20px]">{`Acme Purchasing Dept `}</p>
        </div>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center px-[11px] py-[5px] relative size-full">
          <Container18 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Data7() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Data">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start px-[13px] py-[7.5px] relative size-full">
        <Input3 />
      </div>
    </div>
  );
}

function ExpirationNameOnCardRow() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Expiration & Name on Card Row">
      <Data4 />
      <Data5 />
      <Data6 />
      <Data7 />
    </div>
  );
}

function Data8() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex flex-col items-start px-[13px] py-[12.5px] relative shrink-0 w-[150px]" data-name="Data">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#374151] text-[13.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p>
          <span className="leading-[20px]">{`CVV/CVC `}</span>
          <span className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[20px] text-[#ea580c]" style={{ fontVariationSettings: '"wdth" 100' }}>
            *
          </span>
        </p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1f2937] text-[14px] w-full">
          <p className="leading-[20px]">888</p>
        </div>
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-[80px]" data-name="Input">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[11px] py-[5px] relative rounded-[inherit] size-full">
        <Container20 />
      </div>
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4b5563] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px] whitespace-pre">{`The CVV/CVC  often appears above the last few digits of the credit card number.`}</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Input4 />
        <Container21 />
      </div>
    </div>
  );
}

function Data9() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Data">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start px-[13px] py-[7.5px] relative size-full">
        <Container19 />
      </div>
    </div>
  );
}

function CvvCvcRow() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="CVV/CVC Row">
      <Data8 />
      <Data9 />
    </div>
  );
}

function Data10() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex flex-col items-start px-[13px] py-[12.5px] relative shrink-0 w-[150px]" data-name="Data">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#374151] text-[13.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p>
          <span className="leading-[20px]">{`Country `}</span>
          <span className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[20px] text-[#ea580c]" style={{ fontVariationSettings: '"wdth" 100' }}>
            *
          </span>
        </p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-[302px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[20px]">United States</p>
        </div>
      </div>
    </div>
  );
}

function Image3() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="image">
      <svg className="absolute block inset-0 size-full" fill="none" height="21" preserveAspectRatio="none" viewBox="0 0 21 21" width="21">
        <g id="image">
          <path d="M6.3 8.4L10.5 12.6L14.7 8.4" id="Vector" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.575" />
        </g>
      </svg>
    </div>
  );
}

function Options2() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-[350px]" data-name="Options">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[11px] pr-[5px] py-[5px] relative size-full">
        <Container22 />
        <Image3 />
      </div>
    </div>
  );
}

function Data11() {
  return (
    <div className="content-stretch flex flex-col items-start px-[13px] py-[7.5px] relative shrink-0 w-[375px]" data-name="Data">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Options2 />
    </div>
  );
}

function Data12() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex flex-col items-start px-[13px] py-[12.5px] relative shrink-0 w-[150px]" data-name="Data">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#374151] text-[13.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p>
          <span className="leading-[20px]">{`ZIP/Postal Code `}</span>
          <span className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[20px] text-[#ea580c]" style={{ fontVariationSettings: '"wdth" 100' }}>
            *
          </span>
        </p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[20px]">60173</p>
        </div>
      </div>
    </div>
  );
}

function Input5() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center px-[11px] py-[5px] relative size-full">
          <Container23 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Data13() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Data">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start px-[13px] py-[7.5px] relative size-full">
        <Input5 />
      </div>
    </div>
  );
}

function CountryPostalCodeRow() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Country & Postal Code Row">
      <Data10 />
      <Data11 />
      <Data12 />
      <Data13 />
    </div>
  );
}

function Data14() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex flex-col items-start px-[13px] py-[12.5px] relative shrink-0 w-[150px]" data-name="Data">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#374151] text-[13.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p>
          <span className="leading-[20px]">{`Billing Address 1 `}</span>
          <span className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[20px] text-[#ea580c]" style={{ fontVariationSettings: '"wdth" 100' }}>
            *
          </span>
        </p>
      </div>
    </div>
  );
}

function Image4() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="image">
      <svg className="absolute block inset-0 size-full" fill="none" height="21" preserveAspectRatio="none" viewBox="0 0 21 21" width="21">
        <g id="image">
          <path d="M6.3 8.4L10.5 12.6L14.7 8.4" id="Vector" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.575" />
        </g>
      </svg>
    </div>
  );
}

function ImageClip() {
  return (
    <div className="absolute inset-[0_0.2px_0_0]" data-name="image clip">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center pl-[375.8px] pr-[9px] py-[4.5px] relative size-full">
          <Image4 />
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-[302px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[20px]">1475 E Woodfiled Rd</p>
        </div>
      </div>
    </div>
  );
}

function Options3() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-[350px]" data-name="Options">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[11px] py-[5px] relative size-full">
        <ImageClip />
        <Container24 />
      </div>
    </div>
  );
}

function Data15() {
  return (
    <div className="content-stretch flex flex-col items-start px-[13px] py-[7.5px] relative shrink-0 w-[375px]" data-name="Data">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Options3 />
    </div>
  );
}

function Data16() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex flex-col items-start px-[13px] py-[12.5px] relative shrink-0 w-[150px]" data-name="Data">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#374151] text-[13.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">Billing Address 2</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[20px]">Ste 1300</p>
        </div>
      </div>
    </div>
  );
}

function Input6() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center px-[11px] py-[5px] relative size-full">
          <Container25 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Data17() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Data">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start px-[13px] py-[7.5px] relative size-full">
        <Input6 />
      </div>
    </div>
  );
}

function ExactBillingAddress12Row() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Exact Billing Address 1 & 2 Row">
      <Data14 />
      <Data15 />
      <Data16 />
      <Data17 />
    </div>
  );
}

function Data18() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex flex-col items-start px-[13px] py-[12.5px] relative shrink-0 w-[150px]" data-name="Data">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#374151] text-[13.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p>
          <span className="leading-[20px]">{`City `}</span>
          <span className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[20px] text-[#ea580c]" style={{ fontVariationSettings: '"wdth" 100' }}>
            *
          </span>
        </p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[20px]">Schaumburg</p>
        </div>
      </div>
    </div>
  );
}

function Input7() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center px-[11px] py-[5px] relative size-full">
          <Container26 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Data19() {
  return (
    <div className="content-stretch flex flex-col items-start px-[13px] py-[7.5px] relative shrink-0 w-[376px]" data-name="Data">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Input7 />
    </div>
  );
}

function Data20() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex flex-col items-start px-[13px] py-[12.5px] relative shrink-0 w-[150px]" data-name="Data">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#374151] text-[13.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p>
          <span className="leading-[20px]">{`State/Province `}</span>
          <span className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[20px] text-[#ea580c]" style={{ fontVariationSettings: '"wdth" 100' }}>
            *
          </span>
        </p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[20px]">Illinois</p>
        </div>
      </div>
    </div>
  );
}

function Image5() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="image">
      <svg className="absolute block inset-0 size-full" fill="none" height="21" preserveAspectRatio="none" viewBox="0 0 21 21" width="21">
        <g id="image">
          <path d="M6.3 8.4L10.5 12.6L14.7 8.4" id="Vector" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.575" />
        </g>
      </svg>
    </div>
  );
}

function Options4() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Options">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[11px] pr-[5px] py-[5px] relative size-full">
          <Container27 />
          <Image5 />
        </div>
      </div>
    </div>
  );
}

function Data21() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Data">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start px-[13px] py-[7.5px] relative size-full">
        <Options4 />
      </div>
    </div>
  );
}

function CityStateRow() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="City & State Row">
      <Data18 />
      <Data19 />
      <Data20 />
      <Data21 />
    </div>
  );
}

function Body() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <AmountRow />
        <CardNumberRow />
        <ExpirationNameOnCardRow />
        <CvvCvcRow />
        <CountryPostalCodeRow />
        <ExactBillingAddress12Row />
        <CityStateRow />
      </div>
    </div>
  );
}

function MainTableFieldGridReplicatedExactlyFromAttachment() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8.5px] pt-[4.5px] px-px relative shrink-0 w-full" data-name="Main Table Field Grid replicated exactly from attachment">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none" />
      <Body />
    </div>
  );
}

function TableHeaderMatchingStep4CreditCardInfo() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table Header matching Step 4 Credit Card Info">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start py-[20px] relative size-full">
        <Heading />
        <Separator />
        <Container10 />
        <MainTableFieldGridReplicatedExactlyFromAttachment />
      </div>
    </div>
  );
}

function ExactCreditCardFormLayoutMatchingImage() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="EXACT CREDIT CARD FORM LAYOUT MATCHING IMAGE_1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <TableHeaderMatchingStep4CreditCardInfo />
      </div>
    </div>
  );
}

function Article1() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[8px] shrink-0 w-full" data-name="Article">
      <div aria-hidden className="absolute border-2 border-[#00529b] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[22px] relative size-full">
        <CardHeaderSelector />
        <HorizontalBorder1 />
        <ExactCreditCardFormLayoutMatchingImage />
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