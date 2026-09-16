import svgPaths from "./svg-7rrbej7cem";

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
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#374151] text-[14px] tracking-[0.6px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">SAVED ADDRESSES (3)</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#374151] text-[14px] tracking-[0.6px] uppercase w-[158px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">Add New Address</p>
      </div>
      <div className="absolute flex h-[0.963px] items-center justify-center left-[-12px] top-[25px] w-[157.997px]">
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

function Label() {
  return (
    <div className="bg-[#f3f4f6] relative self-stretch shrink-0 w-[281.33px]" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[10px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[20px]">Company Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal]">Company Name</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-[437.31px]" data-name="Input">
      <div className="content-stretch flex items-start justify-center overflow-clip px-[11px] py-[9px] relative rounded-[inherit] size-full">
        <Container3 />
      </div>
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-white relative self-stretch shrink-0 w-[562.66px]" data-name="Background">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <Input />
      </div>
    </div>
  );
}

function RowCompanyName() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row: Company Name">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Label />
        <Background />
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="bg-[#f3f4f6] relative self-stretch shrink-0 w-[281.33px]" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[16px] py-[10px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[20px]">Country</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Image() {
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

function Container4() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#333] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[20px]">USA</p>
        </div>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[11px] py-[7px] relative rounded-[4px] shrink-0 w-[273.33px]" data-name="Options">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip pl-[243.33px] pr-[9px] py-[6.5px] relative rounded-[inherit] size-full">
        <Image />
      </div>
      <Container4 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-white relative self-stretch shrink-0 w-[562.66px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[8px] relative size-full">
        <Options />
      </div>
    </div>
  );
}

function RowCountry() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row: Country">
      <div aria-hidden className="absolute border-[#d1d5db] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-px relative size-full">
        <Label1 />
        <Background1 />
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="bg-[#f3f4f6] relative self-stretch shrink-0 w-[281.33px]" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[16px] py-[10px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[20px]">Street Address</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal]">Street Address</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-[437.31px]" data-name="Input">
      <div className="content-stretch flex items-start justify-center overflow-clip px-[11px] py-[9px] relative rounded-[inherit] size-full">
        <Container5 />
      </div>
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-white relative self-stretch shrink-0 w-[562.66px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[8px] relative size-full">
        <Input1 />
      </div>
    </div>
  );
}

function RowStreetAddress() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row: Street Address">
      <div aria-hidden className="absolute border-[#d1d5db] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-px relative size-full">
        <Label2 />
        <Background2 />
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="bg-[#f3f4f6] relative self-stretch shrink-0 w-[281.33px]" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[16px] py-[10px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[20px]">Floor / Unit / Suite #</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal]">Optional</p>
        </div>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-[437.31px]" data-name="Input">
      <div className="content-stretch flex items-start justify-center overflow-clip px-[11px] py-[9px] relative rounded-[inherit] size-full">
        <Container6 />
      </div>
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-white relative self-stretch shrink-0 w-[562.66px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[8px] relative size-full">
        <Input2 />
      </div>
    </div>
  );
}

function RowFloorUnitSuite() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row: Floor / Unit / Suite">
      <div aria-hidden className="absolute border-[#d1d5db] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-px relative size-full">
        <Label3 />
        <Background3 />
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="bg-[#f3f4f6] relative self-stretch shrink-0 w-[281.33px]" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[16px] py-[10px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[20px]">City</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal]">City</p>
        </div>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-[437.31px]" data-name="Input">
      <div className="content-stretch flex items-start justify-center overflow-clip px-[11px] py-[9px] relative rounded-[inherit] size-full">
        <Container7 />
      </div>
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-white relative self-stretch shrink-0 w-[562.66px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[8px] relative size-full">
        <Input3 />
      </div>
    </div>
  );
}

function RowCity() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row: City">
      <div aria-hidden className="absolute border-[#d1d5db] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-px relative size-full">
        <Label4 />
        <Background4 />
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div className="bg-[#f3f4f6] relative self-stretch shrink-0 w-[281.33px]" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[16px] py-[10px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[20px]">State/Province</p>
          </div>
        </div>
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

function Container8() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#333] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[20px]">Illinois (IL)</p>
        </div>
      </div>
    </div>
  );
}

function Options1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[11px] py-[7px] relative rounded-[4px] shrink-0 w-[273.33px]" data-name="Options">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip pl-[243.33px] pr-[9px] py-[6.5px] relative rounded-[inherit] size-full">
        <Image1 />
      </div>
      <Container8 />
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-white relative self-stretch shrink-0 w-[562.66px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[8px] relative size-full">
        <Options1 />
      </div>
    </div>
  );
}

function RowStateProvince() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row: State/Province">
      <div aria-hidden className="absolute border-[#d1d5db] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-px relative size-full">
        <Label5 />
        <Background5 />
      </div>
    </div>
  );
}

function Label6() {
  return (
    <div className="bg-[#f3f4f6] relative self-stretch shrink-0 w-[281.33px]" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[16px] py-[10px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[20px]">Postal/Zip Code</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal]">Example: 60173</p>
        </div>
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-[192px]" data-name="Input">
      <div className="content-stretch flex items-start justify-center overflow-clip px-[11px] py-[9px] relative rounded-[inherit] size-full">
        <Container9 />
      </div>
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-white relative self-stretch shrink-0 w-[562.66px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[8px] relative size-full">
        <Input4 />
      </div>
    </div>
  );
}

function RowPostalZipCode() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row: Postal/Zip Code">
      <div aria-hidden className="absolute border-[#d1d5db] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-px relative size-full">
        <Label6 />
        <Background6 />
      </div>
    </div>
  );
}

function Label7() {
  return (
    <div className="bg-[#f3f4f6] relative self-stretch shrink-0 w-[281.33px]" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[16px] py-[10px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[20px]">Phone</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal]">Example: 800-681-7475</p>
        </div>
      </div>
    </div>
  );
}

function Input5() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-[256px]" data-name="Input">
      <div className="content-stretch flex items-start justify-center overflow-clip px-[11px] py-[9px] relative rounded-[inherit] size-full">
        <Container10 />
      </div>
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-white relative self-stretch shrink-0 w-[562.66px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[8px] relative size-full">
        <Input5 />
      </div>
    </div>
  );
}

function RowPhone() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row: Phone">
      <div aria-hidden className="absolute border-[#d1d5db] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-px relative size-full">
        <Label7 />
        <Background7 />
      </div>
    </div>
  );
}

function Label8() {
  return (
    <div className="bg-[#f3f4f6] relative self-stretch shrink-0 w-[281.33px]" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[16px] py-[10px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[20px]">Default Shipping Method</p>
          </div>
        </div>
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

function Container11() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#333] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[20px]">UPS Third Party Billing</p>
        </div>
      </div>
    </div>
  );
}

function Options2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[11px] py-[7px] relative rounded-[4px] shrink-0 w-[273.33px]" data-name="Options">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip pl-[243.33px] pr-[9px] py-[6.5px] relative rounded-[inherit] size-full">
        <Image2 />
      </div>
      <Container11 />
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-white relative self-stretch shrink-0 w-[562.66px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[8px] relative size-full">
        <Options2 />
      </div>
    </div>
  );
}

function RowDefaultShippingMethod() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row: Default Shipping Method">
      <div aria-hidden className="absolute border-[#d1d5db] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-px relative size-full">
        <Label8 />
        <Background8 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">Are You Taxable?</p>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="content-stretch flex h-[17px] items-center justify-center p-px relative rounded-[9999px] shrink-0 w-[16px]" data-name="Border">
      <div aria-hidden className="absolute border border-[#2563eb] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#2563eb] text-[10px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">?</p>
      </div>
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#f3f4f6] relative self-stretch shrink-0 w-[281.33px]" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[16px] py-[10px] relative size-full">
          <Container12 />
          <Border />
        </div>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">Yes</p>
      </div>
    </div>
  );
}

function Label9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Label">
      <div className="bg-white relative rounded-[16px] shrink-0 size-[16px]" data-name="Input">
        <div aria-hidden className="absolute border border-[#6b7280] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
      <Margin />
    </div>
  );
}

function Image3() {
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

function Input6() {
  return (
    <div className="bg-[#2563eb] mr-[-1px] relative rounded-[16px] shrink-0 size-[18px]" data-name="Input">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Image3 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#374151] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">No</p>
      </div>
    </div>
  );
}

function Label10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Label">
      <Input6 />
      <Margin1 />
    </div>
  );
}

function LabelMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[23px] relative shrink-0" data-name="Label:margin">
      <Label10 />
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-white relative self-stretch shrink-0 w-[562.66px]" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center p-[8px] relative size-full">
          <Label9 />
          <LabelMargin />
        </div>
      </div>
    </div>
  );
}

function RowAreYouTaxable() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row: Are You Taxable">
      <div aria-hidden className="absolute border-[#d1d5db] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-px relative size-full">
        <Background9 />
        <Background10 />
      </div>
    </div>
  );
}

function Label11() {
  return (
    <div className="bg-[#f3f4f6] relative self-stretch shrink-0 w-[281.33px]" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[16px] py-[10px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[20px]">Department</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal]">(optional)</p>
        </div>
      </div>
    </div>
  );
}

function Input7() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-[437.31px]" data-name="Input">
      <div className="content-stretch flex items-start justify-center overflow-clip px-[11px] py-[9px] relative rounded-[inherit] size-full">
        <Container13 />
      </div>
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-white relative self-stretch shrink-0 w-[562.66px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[8px] relative size-full">
        <Input7 />
      </div>
    </div>
  );
}

function RowDepartment() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row: Department">
      <div aria-hidden className="absolute border-[#d1d5db] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-px relative size-full">
        <Label11 />
        <Background11 />
      </div>
    </div>
  );
}

function Label12() {
  return (
    <div className="bg-[#f3f4f6] relative self-stretch shrink-0 w-[281.33px]" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[16px] py-[10px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[20px]">Attention</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal]">Example: John Smith</p>
        </div>
      </div>
    </div>
  );
}

function Input8() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-[437.31px]" data-name="Input">
      <div className="content-stretch flex items-start justify-center overflow-clip px-[11px] py-[9px] relative rounded-[inherit] size-full">
        <Container14 />
      </div>
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Background12() {
  return (
    <div className="bg-white relative self-stretch shrink-0 w-[562.66px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[8px] relative size-full">
        <Input8 />
      </div>
    </div>
  );
}

function RowAttention() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row: Attention">
      <div aria-hidden className="absolute border-[#d1d5db] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-px relative size-full">
        <Label12 />
        <Background12 />
      </div>
    </div>
  );
}

function ModalBodyFormTableStyledAfterImage1() {
  return (
    <div className="content-stretch flex flex-col items-start p-px relative shrink-0 w-[846px]" data-name="Modal Body (Form Table styled after Image 2)">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none" />
      <RowCompanyName />
      <RowCountry />
      <RowStreetAddress />
      <RowFloorUnitSuite />
      <RowCity />
      <RowStateProvince />
      <RowPostalZipCode />
      <RowPhone />
      <RowDefaultShippingMethod />
      <RowAreYouTaxable />
      <RowDepartment />
      <RowAttention />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <SavedAddressesListLabel />
      <ModalBodyFormTableStyledAfterImage1 />
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

function Button() {
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

function Button1() {
  return (
    <div className="bg-[#0066c0] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center px-[20px] py-[6px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">Save New Address</p>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="relative shrink-0" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[12px] relative size-full">
        <Button1 />
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
          <Button />
          <ButtonMargin />
        </div>
      </div>
    </div>
  );
}

export default function BackgroundBorder() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center p-px relative rounded-[2px] size-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_-0.5px_0] rounded-[2px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" data-name="Overlay+Shadow" />
      <ModalHeader />
      <ModalBodyFormTableStyledAfterImage />
      <ModalFooter />
    </div>
  );
}