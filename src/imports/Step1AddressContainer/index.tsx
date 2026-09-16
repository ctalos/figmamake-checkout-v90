import svgPaths from "./svg-g4wr8xnz15";

function Company() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Company">
      <p className="[word-break:break-word] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[19.2px] relative shrink-0 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        MISUMI USA WOS+
      </p>
    </div>
  );
}

function CardAddress() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Card-Address">
      <Company />
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[19.2px] relative shrink-0 text-[#333] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        1475 E Woodfiled Rd. Ste 1300
      </p>
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[19.2px] relative shrink-0 text-[#333] text-[12px] whitespace-pre" style={{ fontVariationSettings: '"wdth" 100' }}>{`Schaumburg, IL  60173-5482`}</p>
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#333] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[19.2px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          Phone:
        </span>
        <span className="leading-[19.2px]">{` 1-800-681-7475`}</span>
      </p>
    </div>
  );
}

function Spacer() {
  return <div className="bg-[#f0f0f0] relative self-stretch shrink-0 w-px" data-name="spacer" />;
}

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[10px] items-start leading-[19.2px] relative shrink-0 text-[#333] text-[12px] whitespace-nowrap">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        Default Shipping Method:
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        UPS Third Party Billing
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-[200px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[19.2px] relative shrink-0 text-[#333] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          UPS Third Party Billing
        </p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-[240px]" data-name="Input">
      <div className="content-stretch flex items-start justify-center overflow-clip px-[11px] py-[3px] relative rounded-[inherit] size-full">
        <Container />
      </div>
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[318px]">
      <p className="[word-break:break-word] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[19.2px] relative shrink-0 text-[#333] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Department:
      </p>
      <Input />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-[200px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[19.2px] relative shrink-0 text-[#333] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          John Smith
        </p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-[240px]" data-name="Input">
      <div className="content-stretch flex items-start justify-center overflow-clip px-[11px] py-[3px] relative rounded-[inherit] size-full">
        <Container1 />
      </div>
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[19.2px] relative shrink-0 text-[#333] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Attention:
      </p>
      <Input1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start pt-[16px] relative shrink-0">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="[word-break:break-word] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[19.2px] relative shrink-0 text-[#333] text-[12px] whitespace-pre" style={{ fontVariationSettings: '"wdth" 100' }}>{`Carrier Account Number:  `}</p>
      <Frame />
      <Frame6 />
    </div>
  );
}

function Spacer1() {
  return <div className="bg-[#f0f0f0] relative self-stretch shrink-0 w-px" data-name="spacer" />;
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="SVG">
          <path d={svgPaths.p2bc55680} id="Vector" stroke="#004BB1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Svg />
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#004bb1] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[16px]">Select New Address</p>
        </div>
      </div>
    </div>
  );
}

function AddNewAddressButton() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0" data-name="Add New Address Button">
      <div className="content-stretch flex items-center overflow-clip pl-[9px] pr-[17px] py-[11px] relative rounded-[inherit] size-full">
        <Frame3 />
      </div>
      <div aria-hidden className="absolute border border-[#0062bd] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px relative self-stretch">
      <AddNewAddressButton />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[48px] items-start relative shrink-0 w-full">
      <CardAddress />
      <Spacer />
      <Frame5 />
      <Spacer1 />
      <Frame7 />
    </div>
  );
}

function TextColAddress() {
  return (
    <div className="content-stretch flex flex-col items-start px-[32px] py-[16px] relative shrink-0 w-full" data-name="TextCol Address">
      <Frame4 />
    </div>
  );
}

export default function Step1AddressContainer() {
  return (
    <div className="bg-[#f2f8fd] border-[#9cc8ec] border-[1.111px] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[6px] size-full" data-name="Step1AddressContainer">
      <TextColAddress />
    </div>
  );
}