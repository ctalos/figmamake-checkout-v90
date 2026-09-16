import svgPaths from "./svg-aacepbrbow";

function MainCheckoutContainer() {
  return (
    <div className="bg-white h-[975px] max-w-[1024px] relative shrink-0 w-[1024px]" data-name="Main - CheckoutContainer">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[24px]">Add New Shipping Address</p>
        </div>
      </div>
    </div>
  );
}

function ButtonClose() {
  return (
    <div className="relative shrink-0" data-name="Button - Close">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[20px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[20px]">×</p>
        </div>
      </div>
    </div>
  );
}

function ModalHeader() {
  return (
    <div className="bg-[#edf2f7] relative shrink-0 w-full" data-name="Modal Header">
      <div aria-hidden className="absolute border-[#d1d5db] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[13px] pt-[12px] px-[24px] relative size-full">
          <Heading />
          <ButtonClose />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#374151] text-[14px] tracking-[0.6px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">SAVED ADDRESSES (3)</p>
      </div>
      <div className="absolute flex h-[0.963px] items-center justify-center left-0 top-[25px] w-[157.997px]">
        <div className="flex-none rotate-[-0.35deg]">
          <div className="h-0 relative w-[158px]">
            <div className="absolute inset-[-4px_0_0_0]">
              <svg className="block size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 158 4" width="158">
                <line id="Line 1" stroke="#0169C6" strokeWidth="4" x2="158" y1="2" y2="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#374151] text-[14px] tracking-[0.6px] uppercase w-[158px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">Add New Address</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[48px] items-center pb-[8px] relative shrink-0">
      <div aria-hidden className="absolute border-[#d4d4d4] border-b border-solid inset-0 pointer-events-none" />
      <Container1 />
      <Container2 />
    </div>
  );
}

function SavedAddressesListLabel() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center pt-[4px] relative shrink-0 w-full" data-name="Saved Addresses List Label">
      <Frame />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal]">Search your saved addresses...</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-bl-[4px] rounded-tl-[4px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-[37px] pr-[12px] py-[9px] relative size-full">
          <Container5 />
        </div>
      </div>
      <div aria-hidden className="absolute border-[#d1d5db] border-b border-l border-solid border-t inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px]" />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p2aa1a600} id="Vector" stroke="#9CA3AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center left-0 pl-[12px] top-0" data-name="Container">
      <Svg />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch z-[2]" data-name="Container">
      <Input />
      <Container6 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="SVG">
          <path d={svgPaths.p198e9c0} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#474747] content-stretch flex gap-[4px] items-center px-[17px] py-[9px] relative rounded-br-[4px] rounded-tr-[4px] shrink-0 z-[1]" data-name="Button">
      <div aria-hidden className="absolute border border-[#474747] border-solid inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
      <Svg1 />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">Search</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] isolate items-start min-w-px relative rounded-[4px]" data-name="Container">
      <Container4 />
      <Button />
    </div>
  );
}

function ControlsBarSearchAddAddressButton1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Controls Bar: Search & Add Address Button">
      <Container3 />
    </div>
  );
}

function ControlsBarSearchAddAddressButton() {
  return (
    <div className="relative shrink-0 w-full" data-name="Controls Bar: Search & Add Address Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center relative size-full">
          <ControlsBarSearchAddAddressButton1 />
        </div>
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

function Input1() {
  return (
    <div className="absolute bg-[#0062bd] left-[-1px] rounded-[16px] size-[18px] top-[3px]" data-name="Input">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Image />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function InputMargin() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Input:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Input1 />
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center justify-center px-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0062bd] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">Primary</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">{`MISUMI USA WOS+ `}</p>
      </div>
      <Background />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4b5563] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">1475 E Woodfiled Rd. Ste 1300, Schaumburg, IL 60173</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#004bb1] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">Selected</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container11 />
    </div>
  );
}

function Margin() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[12px] relative size-full">
        <Container7 />
      </div>
    </div>
  );
}

function LabelAddressItem1CurrentlySelected() {
  return (
    <div className="bg-[#f2f8fd] relative rounded-[4px] shrink-0 w-full" data-name="Label - Address Item 1 (Currently Selected)">
      <div aria-hidden className="absolute border-2 border-[#9cc8ec] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex items-start p-[14px] relative size-full">
        <InputMargin />
        <Margin />
      </div>
    </div>
  );
}

function InputMargin1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Input:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <div className="bg-white relative rounded-[16px] shrink-0 size-[16px]" data-name="Input">
          <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[16px]" />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">MISUMI Warehouse B</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4b5563] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">2500 Enterprise Pkwy, Chicago, IL 60666</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">Use Address</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container16 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[12px] relative size-full">
        <Container12 />
      </div>
    </div>
  );
}

function LabelAddressItem() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Label - Address Item 2">
      <div aria-hidden className="absolute border border-[#cfd7df] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex items-start p-[13px] relative size-full">
        <InputMargin1 />
        <Margin1 />
      </div>
    </div>
  );
}

function InputMargin2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Input:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <div className="bg-white relative rounded-[16px] shrink-0 size-[16px]" data-name="Input">
          <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[16px]" />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">MISUMI Assembly Plant</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4b5563] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">1020 Meacham Rd, Schaumburg, IL 60173</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">Use Address</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container21 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[12px] relative size-full">
        <Container17 />
      </div>
    </div>
  );
}

function LabelAddressItem1() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Label - Address Item 3">
      <div aria-hidden className="absolute border border-[#cfd7df] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex items-start p-[13px] relative size-full">
        <InputMargin2 />
        <Margin2 />
      </div>
    </div>
  );
}

function RadiogroupAddressOptionsRadioList() {
  return (
    <div className="max-h-[360px] relative shrink-0 w-full" data-name="Radiogroup - Address Options Radio List">
      <div className="max-h-[inherit] overflow-auto rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start max-h-[inherit] pr-[4px] relative size-full">
          <LabelAddressItem1CurrentlySelected />
          <LabelAddressItem />
          <LabelAddressItem1 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <SavedAddressesListLabel />
      <ControlsBarSearchAddAddressButton />
      <RadiogroupAddressOptionsRadioList />
    </div>
  );
}

function AddressesList() {
  return (
    <div className="relative shrink-0 w-full" data-name="AddressesList">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[31.5px] relative size-full">
        <Container />
      </div>
    </div>
  );
}

function ModalBodyFormTableStyledAfterImage() {
  return (
    <div className="relative shrink-0 w-[846px]" data-name="Modal Body (Form Table styled after Image 2)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <AddressesList />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17px] py-[7px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#374151] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[20px]">Cancel</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#0066c0] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center px-[20px] py-[6px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">{`Save & Use Address`}</p>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="relative shrink-0" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[12px] relative size-full">
        <Button2 />
      </div>
    </div>
  );
}

function ModalFooter() {
  return (
    <div className="bg-[#f9fafb] relative shrink-0 w-full" data-name="Modal Footer">
      <div aria-hidden className="absolute border-[#d1d5db] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-end pb-[12px] pt-[13px] px-[24px] relative size-full">
          <Button1 />
          <ButtonMargin />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="-translate-y-1/2 absolute bg-white content-stretch flex flex-col gap-[24px] items-center left-[309px] max-w-[896px] p-px right-[309px] rounded-[2px] top-[calc(50%-30px)]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_-0.5px_0] rounded-[2px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" data-name="Overlay+Shadow" />
      <ModalHeader />
      <ModalBodyFormTableStyledAfterImage />
      <ModalFooter />
    </div>
  );
}

function DialogCompleteModalReproductionUsingExactFormRowSpecsFromImage() {
  return (
    <div className="absolute backdrop-blur-[2px] bg-[rgba(0,0,0,0.4)] content-stretch flex inset-0 items-center justify-center overflow-auto p-[16px]" data-name="Dialog - Complete Modal reproduction using exact form row specs from Image 2">
      <BackgroundBorder />
    </div>
  );
}

export default function S2PopupSearchAddress() {
  return (
    <div className="content-stretch flex items-start justify-center pb-[623px] pt-[24px] px-[32px] relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 250, 252) 0%, rgb(248, 250, 252) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="S2--POPUP-SearchAddress">
      <MainCheckoutContainer />
      <DialogCompleteModalReproductionUsingExactFormRowSpecsFromImage />
    </div>
  );
}