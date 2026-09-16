import svgPaths from "./svg-20rj1pdfsn";
import imgImageMisumiYourTimeOurPriority from "./691fd0ea5f84d6e1cbc3a6266bfee76437ca784c.png";
import imgRouterLinkNext13Button from "./6cf8e86d8464b71c80282ccc5533b6530f4bcdb1.png";

function Container1() {
  return <div className="border-[#0f218b] border-b-[1.111px] border-solid border-t-[2.222px] h-[3.333px] relative shrink-0 w-full" data-name="Container" />;
}

function ImageMisumiYourTimeOurPriority() {
  return (
    <div className="h-[41.997px] relative shrink-0 w-full" data-name="Image (MISUMI | Your Time, Our Priority)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageMisumiYourTimeOurPriority} />
    </div>
  );
}

function SimpleLogo() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[314.965px]" data-name="SimpleLogo">
      <ImageMisumiYourTimeOurPriority />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[68.997px] items-center justify-between max-w-[2123.330078125px] min-w-[1200px] pb-[15px] pt-[12px] px-[361.667px] relative shrink-0 w-[2123.33px]" data-name="Container">
      <SimpleLogo />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex flex-col items-start min-w-[1200px] relative shrink-0 w-full" data-name="Header">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Breadcrumbs() {
  return (
    <div className="[word-break:break-word] h-[15px] leading-[13px] relative shrink-0 text-[13px] w-[1200px] whitespace-nowrap" data-name="Breadcrumbs">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal left-0 text-[#004bb1] top-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        MISUMI Homepage
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal left-[143.66px] text-[#004bb1] top-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cart
      </p>
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold left-[199.15px] text-[#666] top-[2px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Checkout
      </p>
    </div>
  );
}

function BreadcrumbsMargin() {
  return (
    <div className="content-stretch flex flex-col items-start px-[100px] relative shrink-0" data-name="Breadcrumbs:margin">
      <Breadcrumbs />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-[575_0_0] flex-col items-start min-w-px relative" data-name="Heading 1">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[30px] relative shrink-0 text-[#333] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Checkout
      </p>
    </div>
  );
}

function Container3() {
  return <div className="absolute bg-[#1f69c6] h-[1.997px] left-[410.03px] top-[9.34px] w-[77.986px]" data-name="Container" />;
}

function Container4() {
  return <div className="absolute bg-[#cdcdcd] h-[1.997px] left-[505.02px] top-[9.34px] w-[77.986px]" data-name="Container" />;
}

function Step1Of3Cart() {
  return (
    <div className="absolute bg-[#1f69c6] border-[#1f69c6] border-[1.111px] border-solid left-[393.04px] rounded-[8.498px] size-[16.997px] top-[1.67px]" data-name="Step 1 of 3 Cart">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Roboto:Bold',sans-serif] font-bold leading-[13px] left-[8.51px] text-[#333] text-[12px] text-center top-[17.99px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cart
      </p>
    </div>
  );
}

function Step2Of3Order() {
  return (
    <div className="absolute bg-[#1f69c6] border-[#1f69c6] border-[1.111px] border-solid left-[488.02px] rounded-[8.498px] size-[16.997px] top-[1.67px]" data-name="Step 2 of 3 Order">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Roboto:Bold',sans-serif] font-bold leading-[13px] left-[8.51px] text-[#333] text-[12px] text-center top-[17.99px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Order
      </p>
    </div>
  );
}

function Step3Of3Complete() {
  return (
    <div className="absolute bg-[#949494] border-[#949494] border-[1.111px] border-solid left-[583px] rounded-[8.498px] size-[16.997px] top-[1.67px]" data-name="Step 3 of 3 Complete">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Roboto:Bold',sans-serif] font-bold leading-[13px] left-[8.51px] text-[#767676] text-[12px] text-center top-[17.99px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Complete
      </p>
    </div>
  );
}

function Progress() {
  return (
    <div className="h-[19.184px] relative shrink-0 w-[600px]" data-name="Progress">
      <Container3 />
      <Container4 />
      <Step1Of3Cart />
      <Step2Of3Order />
      <Step3Of3Complete />
    </div>
  );
}

function ProgressMargin() {
  return (
    <div className="content-stretch flex items-start pb-[10px] pr-[25px] relative shrink-0" data-name="Progress:margin">
      <Progress />
    </div>
  );
}

function PageHeadingWithAddons() {
  return (
    <div className="border-[#333] border-b-[1.111px] border-solid content-stretch flex items-center py-[18px] relative shrink-0 w-[1200px]" data-name="PageHeadingWithAddons">
      <Heading />
      <ProgressMargin />
    </div>
  );
}

function Container8() {
  return (
    <div className="[word-break:break-word] content-stretch flex h-[22.378px] items-center justify-between relative shrink-0 text-[#333] w-[915.799px] whitespace-nowrap" data-name="Container">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[22.4px] relative shrink-0 text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Step 1: Shipping Address
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="leading-[22.4px]">{`Customer Code: `}</span>
        <span className="font-['Roboto:Bold',sans-serif] font-bold leading-[22.4px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          WOSMUS
        </span>
      </p>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#e6f2fc] content-stretch flex flex-col items-start px-[16px] py-[12px] relative shrink-0 w-full" data-name="Container">
      <Container8 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[19.2px] relative shrink-0 text-[#333] text-[16px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Selected Address
      </p>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="SVG">
          <path d={svgPaths.p1c2f1080} id="Vector" stroke="#0062BD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Svg />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0062bd] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">Edit address</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center py-[6px] relative rounded-[4px] shrink-0" data-name="Button">
      <Frame5 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[881.556px]">
      <Frame2 />
      <Button />
    </div>
  );
}

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

function Container10() {
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
        <Container10 />
      </div>
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[318px]">
      <p className="[word-break:break-word] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[19.2px] relative shrink-0 text-[#333] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Department:
      </p>
      <Input />
    </div>
  );
}

function Container11() {
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
        <Container11 />
      </div>
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[19.2px] relative shrink-0 text-[#333] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Attention:
      </p>
      <Input1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start pt-[16px] relative shrink-0">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="[word-break:break-word] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[19.2px] relative shrink-0 text-[#333] text-[12px] whitespace-pre" style={{ fontVariationSettings: '"wdth" 100' }}>{`Carrier Account Number:  `}</p>
      <Frame />
      <Frame11 />
    </div>
  );
}

function Spacer1() {
  return <div className="bg-[#f0f0f0] relative self-stretch shrink-0 w-px" data-name="spacer" />;
}

function Svg1() {
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

function Frame6() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Svg1 />
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
        <Frame6 />
      </div>
      <div aria-hidden className="absolute border border-[#0062bd] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px relative self-stretch">
      <AddNewAddressButton />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[48px] items-start relative shrink-0 w-full">
      <CardAddress />
      <Spacer />
      <Frame10 />
      <Spacer1 />
      <Frame12 />
    </div>
  );
}

function TextColAddress() {
  return (
    <div className="content-stretch flex flex-col items-start px-[32px] py-[16px] relative shrink-0 w-full" data-name="TextCol Address">
      <Frame9 />
    </div>
  );
}

function Step1AddressContainer() {
  return (
    <div className="bg-[#f2f8fd] border-[#9cc8ec] border-[1.111px] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="Step1AddressContainer">
      <TextColAddress />
    </div>
  );
}

function ContentAddress() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="ContentAddress">
      <Step1AddressContainer />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <ContentAddress />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Frame1 />
    </div>
  );
}

function CaretLeft() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="CaretLeft">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="CaretLeft">
          <path d={svgPaths.p36abe880} fill="black" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="bg-white border-[#bfbfbf] border-[1.111px] border-solid content-stretch flex gap-[8px] h-full items-center justify-center min-w-[140px] overflow-clip pb-[7px] pl-[8px] pr-[16px] pt-[8px] relative shadow-[0px_2px_0px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
        <CaretLeft />
        <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Back to Cart
        </p>
      </div>
    </div>
  );
}

function CaretRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="CaretRight">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="CaretRight">
          <path d={svgPaths.p51ff900} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center min-w-[140px] overflow-clip pb-[7px] pl-[16px] pr-[8px] pt-[8px] relative shadow-[0px_2px_0px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <div aria-hidden className="absolute bg-[#0169c6] inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Next Step: Shipping Options
      </p>
      <CaretRight />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_0px_0px_#67a5dd]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[915.799px]" data-name="Container">
      <Button1 />
      <Button2 />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[24px] relative shrink-0 w-full" data-name="Container:margin">
      <Container12 />
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[16px] py-[24px] relative shrink-0 w-full" data-name="Container">
      <Frame8 />
      <Frame7 />
      <ContainerMargin />
    </div>
  );
}

function Step1ShippingAddressSection() {
  return (
    <div className="border-[#bfbfbf] border-[1.111px] border-solid content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Step1ShippingAddressSection">
      <Container7 />
      <Container9 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[22.378px] items-center relative shrink-0 w-[915.799px]" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#333] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="leading-[22.4px]">{`Step 2: Shipping Options `}</span>
        <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[22.4px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          (3 items)
        </span>
      </p>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative shrink-0 w-full" data-name="Container">
      <Container15 />
    </div>
  );
}

function Container13() {
  return (
    <div className="border-[#bfbfbf] border-[1.111px] border-solid content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container14 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container:margin">
      <Container13 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex h-[22.378px] items-center relative shrink-0 w-[915.799px]" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[22.4px] relative shrink-0 text-[#333] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Step 3: Payment Method
      </p>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative shrink-0 w-full" data-name="Container">
      <Container18 />
    </div>
  );
}

function Container16() {
  return (
    <div className="border-[#bfbfbf] border-[1.111px] border-solid content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container17 />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container:margin">
      <Container16 />
    </div>
  );
}

function OrderInfoBox() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[950px]" data-name="OrderInfoBox">
      <Step1ShippingAddressSection />
      <ContainerMargin1 />
      <ContainerMargin2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[800px] relative shrink-0 w-[950px]" data-name="Container">
      <OrderInfoBox />
    </div>
  );
}

function Container20() {
  return (
    <div className="border-[#bfbfbf] border-b-[1.111px] border-solid content-stretch flex flex-col items-center pb-[10px] relative shrink-0 w-[199.792px]" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#333] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="leading-[19.2px]">{`Standard Shipping `}</span>
        <span className="leading-[19.2px] text-black">11</span>
        <span className="leading-[19.2px]">{` Item(s)`}</span>
      </p>
    </div>
  );
}

function Container22() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Roboto:Bold',sans-serif] font-bold gap-[8px] h-[38.385px] items-start justify-center leading-[38.4px] relative shrink-0 text-[24px] text-black text-center w-full" data-name="Container">
      <p className="h-full relative shrink-0 w-[90px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        $379.37
      </p>
      <p className="relative shrink-0 whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        (USD)
      </p>
    </div>
  );
}

function Container21() {
  return (
    <div className="border-[#bfbfbf] border-b-[1.111px] border-dashed content-stretch flex flex-col items-start pb-[10px] relative shrink-0 w-[199.792px]" data-name="Container">
      <Container22 />
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[10px] relative shrink-0" data-name="Container:margin">
      <Container21 />
    </div>
  );
}

function Container24() {
  return (
    <div className="border-[#bfbfbf] border-b-[1.111px] border-dashed font-['Roboto:Bold',sans-serif] font-bold h-[40.295px] relative shrink-0 w-[199.792px]" data-name="Container">
      <p className="absolute left-0 text-[#333] top-[9.22px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Subtotal
      </p>
      <p className="-translate-x-full absolute left-[165.52px] text-black text-right top-[10px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        $344.86
      </p>
      <p className="-translate-x-full absolute left-[200.3px] text-black text-right top-[9.22px]" style={{ fontVariationSettings: '"wdth" 100' }}>{` (USD)`}</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="border-[#bfbfbf] border-b-[1.111px] border-dashed font-['Roboto:Bold',sans-serif] font-bold h-[40.295px] relative shrink-0 w-[199.792px]" data-name="Container">
      <p className="absolute left-0 text-[#333] top-[9.22px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Discount
      </p>
      <p className="-translate-x-full absolute left-[132.76px] text-black text-right top-[10px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`- `}</p>
      <p className="-translate-x-full absolute left-[164.5px] text-black text-right top-[10px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        $0.00
      </p>
      <p className="-translate-x-full absolute left-[200.3px] text-black text-right top-[9.22px]" style={{ fontVariationSettings: '"wdth" 100' }}>{` (USD)`}</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[38.368px] left-0 text-[#333] top-[10px] w-[106.649px]" data-name="Container">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold left-0 top-[-0.78px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Shipping
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal left-0 top-[19.18px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        (Total Weight)
      </p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[38.368px] left-[106.65px] text-right top-[10px] w-[93.142px]" data-name="Container">
      <p className="-translate-x-full absolute font-['Roboto:Bold',sans-serif] font-bold left-[59.64px] text-black top-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        $0.00
      </p>
      <p className="-translate-x-full absolute font-['Roboto:Bold',sans-serif] font-bold left-[93.65px] text-black top-[-0.78px]" style={{ fontVariationSettings: '"wdth" 100' }}>{` (USD)`}</p>
      <p className="-translate-x-full absolute font-['Roboto:Regular',sans-serif] font-normal left-[93.14px] text-[#333] top-[19.18px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        (461g)
      </p>
    </div>
  );
}

function Container26() {
  return (
    <div className="border-[#bfbfbf] border-b-[1.111px] border-dashed h-[59.479px] relative shrink-0 w-[199.792px]" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container29() {
  return (
    <div className="font-['Roboto:Bold',sans-serif] font-bold h-[39.184px] relative shrink-0 w-[199.792px]" data-name="Container">
      <p className="absolute left-0 text-[#333] top-[9.22px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Tax
      </p>
      <p className="-translate-x-full absolute left-[165.4px] text-black text-right top-[10px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        $34.51
      </p>
      <p className="-translate-x-full absolute left-[200.3px] text-black text-right top-[9.22px]" style={{ fontVariationSettings: '"wdth" 100' }}>{` (USD)`}</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[19.2px] relative shrink-0 text-[12px] whitespace-nowrap" data-name="Container">
      <Container24 />
      <Container25 />
      <Container26 />
      <Container29 />
    </div>
  );
}

function TextInput() {
  return (
    <div className="h-[35px] relative shrink-0 w-[145.99px]" data-name="TextInput">
      <div aria-hidden className="absolute bg-white inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[5.333px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#757575] text-[13.333px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          Enter Promo Code
        </p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_0px_0px_rgba(0,0,0,0.1)]" />
      <div aria-hidden className="absolute border-[#bfbfbf] border-[1.111px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch drop-shadow-[0px_2px_0px_rgba(0,0,0,0.1)] flex flex-col h-full items-center justify-center pb-[7px] pt-[8px] px-[2px] relative shrink-0 w-[45.99px]" data-name="Button">
      <div aria-hidden className="absolute bg-[#f2f2f2] inset-0 pointer-events-none" />
      <div aria-hidden className="absolute border-[#bfbfbf] border-[1.111px] border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Apply
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_0px_0px_white]" />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex h-[50px] items-start justify-between pt-[15px] relative shrink-0 w-[199.792px]" data-name="Container">
      <TextInput />
      <Button3 />
    </div>
  );
}

function Separator() {
  return <div className="border-[#bfbfbf] border-dashed border-t-[1.111px] h-[11.111px] relative shrink-0 w-[199.792px]" data-name="Separator" />;
}

function SeparatorMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[10px] relative shrink-0" data-name="Separator:margin">
      <Separator />
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-white border-[#bfbfbf] border-[1.111px] border-solid content-stretch flex flex-col items-start p-[8px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#333] text-[14px] w-[182px] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22.4px] mb-0">Warehouse Pickup locations are restricted to Dayton, OH; Elk Grove Village, IL; Torrance, CA.</p>
        <p>
          <span className="leading-[22.4px]">{`By clicking on the "Order" button, we deem that we have agreed to our `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[22.4px] text-[#004bb1] underline">{` Terms of Use`}</span>
          <span className="leading-[22.4px]">{`, `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[22.4px] text-[#004bb1] underline">{` Personal Information Protection Policy`}</span>
          <span className="leading-[22.4px]">{`, Other `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[22.4px] text-[#004bb1] underline">{` Terms`}</span>
          <span className="leading-[22.4px]">.</span>
        </p>
      </div>
    </div>
  );
}

function Separator1() {
  return <div className="border-[#bfbfbf] border-dashed border-t-[1.111px] h-[11.111px] relative shrink-0 w-[199.792px]" data-name="Separator" />;
}

function SeparatorMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[10px] relative shrink-0" data-name="Separator:margin">
      <Separator1 />
    </div>
  );
}

function RouterLinkNext13Button() {
  return (
    <div className="absolute drop-shadow-[0px_2px_0px_rgba(0,0,0,0.1)] h-[36.389px] left-0 top-0 w-[171.806px]" data-name="RouterLinkNext13Button">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[32.98%] left-[5.82%] max-w-none top-[33.51%] w-[5.82%]" src={imgRouterLinkNext13Button} />
        </div>
      </div>
      <div aria-hidden className="absolute border-[#bfbfbf] border-[1.111px] border-solid inset-0 pointer-events-none" />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Roboto:Bold',sans-serif] font-bold leading-[19.2px] left-[86.23px] text-[#333] text-[12px] text-center top-[8.32px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Back to Cart
      </p>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[42.378px] relative shrink-0 w-[171.806px]" data-name="Container">
      <RouterLinkNext13Button />
    </div>
  );
}

function ContainerMargin4() {
  return (
    <div className="content-stretch flex flex-col items-start px-[14px] relative shrink-0" data-name="Container:margin">
      <Container32 />
    </div>
  );
}

function FloatPriceBoxContainer() {
  return (
    <div className="bg-[#f2f2f2] border-[#bfbfbf] border-[1.111px] border-solid content-stretch flex flex-col items-start p-[14px] relative rounded-[2px] shrink-0 w-[230px]" data-name="FloatPriceBoxContainer">
      <Container20 />
      <ContainerMargin3 />
      <Container23 />
      <Container30 />
      <SeparatorMargin />
      <Container31 />
      <SeparatorMargin1 />
      <ContainerMargin4 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col h-[800px] items-start relative shrink-0 w-[230px]" data-name="Container">
      <FloatPriceBoxContainer />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[20px] items-start overflow-clip pt-[20px] relative shrink-0 w-[1200px]" data-name="Container">
      <Container6 />
      <Container19 />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col items-start px-[100px] relative shrink-0 w-[1400px]" data-name="Form">
      <PageHeadingWithAddons />
      <Container5 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[15px] items-start max-w-[1420px] min-h-px min-w-[1200px] px-[10px] py-[15px] relative w-full" data-name="Main Content">
      <BreadcrumbsMargin />
      <Form />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[20.8px] relative shrink-0 text-[#333] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Copyright© MISUMI USA. All rights reserved.
      </p>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col h-[20.799px] items-start pl-[48px] relative shrink-0 w-[175px]" data-name="Link">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[20.8px] relative shrink-0 text-[#004bb1] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Terms and Conditions
      </p>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col h-[20.799px] items-start pl-[48px] relative shrink-0 w-[159px]" data-name="Link">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[20.8px] relative shrink-0 text-[#004bb1] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Company Overview
      </p>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex h-[20.799px] items-start max-w-[2123.330078125px] min-w-[1200px] px-[361.667px] relative shrink-0 w-[2123.33px]" data-name="Container">
      <Paragraph />
      <Link />
      <Link1 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_0px_2.5px_rgba(0,0,0,0.4)] flex flex-col items-start min-w-[1200px] py-[20px] relative shrink-0 w-full" data-name="Footer">
      <Container33 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col h-[1080.191px] items-center min-h-[1050px] relative shrink-0 w-[2123.333px]" data-name="Container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[2123.333px]" data-name="Body">
      <Container />
    </div>
  );
}

export default function Step1New() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="STEP1 NEW">
      <Body />
    </div>
  );
}