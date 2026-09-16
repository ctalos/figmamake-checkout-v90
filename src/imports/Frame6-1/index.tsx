function Background() {
  return (
    <div className="bg-[#0f0f0f] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">2</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[14px] tracking-[0.35px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">SELECT SHIPPING OPTIONS</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Background />
      <Label />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-w-px px-[8px] py-[6px] relative rounded-[4px]">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[14px] text-center w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">Prepaid Shipping</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center justify-center min-w-px relative rounded-[6px]">
      <Frame2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px px-[8px] py-[6px] relative rounded-[4px]">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[14px] text-center w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">Carrier Account</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex gap-[8px] h-[42px] items-center justify-center p-[6px] relative rounded-[4px] shrink-0 w-full">
      <Frame3 />
      <Frame1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[20px]">Ground (2-4 business days)</p>
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

function MethodDropdownOptions() {
  return (
    <div className="bg-white content-stretch flex h-[42px] items-center justify-center p-[13px] relative rounded-[4px] shrink-0 w-full" data-name="Method Dropdown → Options">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container1 />
      <Image />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <MethodDropdownOptions />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#1e293b] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">Add carrier account</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Frame9 />
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

function MethodDropdownOptions1() {
  return (
    <div className="bg-white content-stretch flex h-[42px] items-center justify-center p-[13px] relative rounded-[4px] shrink-0 w-full" data-name="Method Dropdown → Options">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container2 />
      <Image1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <MethodDropdownOptions1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame5 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">Enter account number</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Container5 />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Container4 />
      </div>
    </div>
  );
}

function InlineAccountPillDirection2LinkedCarrierAccountDetails() {
  return (
    <div className="bg-white content-stretch flex h-[42px] items-center justify-between p-[13px] relative rounded-[4px] shrink-0 w-full" data-name="Inline Account Pill (Direction 2: Linked Carrier Account Details)">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container3 />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#004bb1] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[16px]">Cancel</p>
        </div>
      </div>
    </div>
  );
}

function CtaCancel() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[42px] items-center justify-center min-w-px p-[12px] relative rounded-[4px]" data-name="CTA-cancel">
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[16px]">Save Account</p>
        </div>
      </div>
    </div>
  );
}

function CtaSave() {
  return (
    <div className="bg-[#0169c6] content-stretch flex flex-[1_0_26px] h-[42px] items-center justify-center min-w-px p-[13px] relative rounded-[4px]" data-name="CTA-Save">
      <div aria-hidden className="absolute border border-[#004bb1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container7 />
    </div>
  );
}

function CtaRow() {
  return (
    <div className="content-stretch flex gap-[8px] items-start pt-[12px] relative shrink-0 w-full" data-name="CTARow">
      <CtaCancel />
      <CtaSave />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#f7f9fb] content-stretch flex flex-col gap-[8px] items-start relative rounded-[3px] size-full">
      <Container />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <InlineAccountPillDirection2LinkedCarrierAccountDetails />
      <CtaRow />
    </div>
  );
}