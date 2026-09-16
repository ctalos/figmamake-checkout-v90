import svgPaths from "./svg-otyv9vxe4n";
import imgImageMisumiYourTimeOurPriority from "./691fd0ea5f84d6e1cbc3a6266bfee76437ca784c.png";
import imgImage from "./9256a0774f81cd5ee5caec3ec4bdae0f8c4611a5.png";
import imgImage1 from "./917087086544026387a2cec621e6243595aa7f93.png";
import imgButton from "./7f425b34c074088b97198c54587b350668fa77c1.png";
import imgImage2 from "./5263a62b7a46cd33ccc7a27489fb3db56ec38b19.png";
import imgAlert from "./6753d8fe8e3a211202d284e4a42c0ec1d6d354c5.png";
import imgImage3 from "./5676fb5102c9227e237eb3e6e0d8feb619f1a756.png";
import imgRouterLinkNext13Button from "./6cf8e86d8464b71c80282ccc5533b6530f4bcdb1.png";
type RadioBasicProps = {
  className?: string;
  label?: "False";
  selected?: boolean;
  state?: "Default";
};

function RadioBasic({ className, label = "False", selected = false, state = "Default" }: RadioBasicProps) {
  return (
    <div className={className || "relative"}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center relative size-full">
          <div className="relative shrink-0 size-[16px]" data-name="Radio Button">
            {label === "False" && !selected && state === "Default" && (
              <button className="absolute block cursor-pointer inset-0" data-name="Plate">
                <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
                  <g id="Plate">
                    <circle cx="8" cy="8" fill="white" r="8" />
                    <circle cx="8" cy="8" r="7.5" stroke="black" strokeOpacity="0.15" />
                  </g>
                </svg>
              </button>
            )}
            {label === "False" && selected && state === "Default" && (
              <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
                <g id="Radio Button">
                  <circle cx="8" cy="8" fill="white" id="Plate" r="7.5" stroke="#16BC9C" />
                  <circle cx="8" cy="8" fill="#16BC9C" id="Ellipse" r="4" />
                </g>
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

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

function CheckCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="CheckCircle">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="CheckCircle">
          <path d={svgPaths.p1e46b900} fill="#059669" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <CheckCircle />
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[22.4px] relative shrink-0 text-[#333] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Step 1: Shipping Address
      </p>
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#333] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        |
      </p>
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#475569] text-[12px] whitespace-pre" style={{ fontVariationSettings: '"wdth" 100' }}>{`MISUMI USA WOS+, Schaumburg, IL  60173  `}</p>
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

function Button() {
  return (
    <div className="content-stretch flex gap-[4px] items-center py-[6px] relative rounded-[4px] shrink-0" data-name="Button">
      <Svg />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0062bd] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">{`Edit `}</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[22.378px] items-center justify-between relative shrink-0 w-[915.799px]" data-name="Container">
      <Frame />
      <Button />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex flex-col items-start px-[16px] py-[12px] relative shrink-0 w-full" data-name="Container">
      <Container7 />
    </div>
  );
}

function Step1ShippingAddressSection() {
  return (
    <div className="border-[#bfbfbf] border-[1.111px] border-solid content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Step1ShippingAddressSection">
      <Container6 />
    </div>
  );
}

function Container10() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] h-[22.378px] items-center leading-[22.4px] relative shrink-0 w-[915.799px] whitespace-nowrap" data-name="Container">
      <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0 text-[#333] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Step 2: Shipping Options
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#333] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        |
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#475569] text-[12px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        3 items
      </p>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#ebf1f9] content-stretch flex flex-col items-start px-[16px] py-[12px] relative shrink-0 w-full" data-name="Container">
      <Container10 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#0f0f0f] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">1</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[14px] tracking-[0.35px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">SELECT FULFILLMENT STRATEGY</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Background />
      <Heading1 />
    </div>
  );
}

function Image() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="image">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="image">
          <path d={svgPaths.p1ec8580} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#0062bd] relative rounded-[16px] shrink-0 size-[18px]" data-name="Input">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Image />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-name="Container">
      <Input />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0062bd] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">Split Shipment</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0062bd] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[15px]">SAVE TIME</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[-1px] right-[0.17px] top-0" data-name="Container">
      <Container15 />
      <Background1 />
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[26px] mb-[-0.75px] relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container14 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.75px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#475569] text-[11px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[19.5px]">Items are shipped as soon as they are available, grouped by individual ship date.</p>
        </div>
      </div>
    </div>
  );
}

function LabelOption1SplitShipment() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Label - Option 1: Split Shipment">
      <div aria-hidden className="absolute border-2 border-[#0062bd] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="content-stretch flex flex-col items-start p-[18px] relative size-full">
        <Margin />
        <Container16 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <div className="bg-white relative rounded-[16px] shrink-0 size-[16px]" data-name="Input">
        <div aria-hidden className="absolute border border-[#6b7280] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">Ship Complete</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#d1fae5] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#065f46] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[15px]">SAVE MONEY</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Background2 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="mb-[-0.75px] relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[6px] relative size-full">
        <Container17 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.75px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#475569] text-[11px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[19.5px]">Items are shipped together on the latest available date from multiple warehouses.</p>
        </div>
      </div>
    </div>
  );
}

function LabelOption2ShipComplete() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Label - Option 2: Ship Complete">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="content-stretch flex flex-col items-start pb-[19px] pt-[17px] px-[17px] relative size-full">
        <Margin1 />
        <Container19 />
      </div>
    </div>
  );
}

function RadiogroupFulfillmentStrategy() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Radiogroup - Fulfillment Strategy">
      <LabelOption1SplitShipment />
      <LabelOption2ShipComplete />
    </div>
  );
}

function StepAShippingFulfillmentPreference() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[500px]" data-name="Step A: Shipping Fulfillment Preference">
      <Container13 />
      <RadiogroupFulfillmentStrategy />
    </div>
  );
}

function Background3() {
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
        <p className="leading-[20px]">SELECT SHIPPING METHOD</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Background3 />
      <Label />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">{`Prepaid Shipping `}</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0">
      <RadioBasic className="relative shrink-0" />
      <Frame3 />
    </div>
  );
}

function RadioButton() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Radio Button">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Radio Button">
          <circle cx="8" cy="8" fill="white" id="Plate" r="7.5" stroke="#004BB1" />
          <circle cx="8" cy="8" fill="#004BB1" id="Ellipse" r="4" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">Billed to Carrier Account</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
      <div className="relative shrink-0" data-name="Radio / Basic">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <RadioButton />
          </div>
        </div>
      </div>
      <Frame4 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Container21() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[20px]">UPS Collect</p>
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

function MethodDropdownOptions() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[13px] py-[7px] relative rounded-[4px] shrink-0 w-full" data-name="Method Dropdown → Options">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container21 />
      <Image1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[8px] relative rounded-[3px] shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">{`Account: `}</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#004bb1] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">UPS #000012</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Outlined / Edit">
        <div className="absolute inset-[10.94%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="12.5" preserveAspectRatio="none" viewBox="0 0 12.5 12.5" width="12.5">
            <path d={svgPaths.p6696770} fill="#004BB1" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#f7f9fb] content-stretch flex flex-col gap-[12px] h-[139px] items-start relative rounded-[3px] shrink-0 w-full">
      <Container20 />
      <Frame8 />
      <MethodDropdownOptions />
      <Frame5 />
    </div>
  );
}

function StepBShippingMethodCarrierAccountOption() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative self-stretch" data-name="Step B: Shipping Method & Carrier Account Option">
      <Frame1 />
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[40px] items-start relative size-full">
        <StepAShippingFulfillmentPreference />
        <StepBShippingMethodCarrierAccountOption />
      </div>
    </div>
  );
}

function TopSteppedConfigurationCardStepAStepB() {
  return (
    <div className="bg-[rgba(248,250,252,0.8)] content-stretch flex flex-col items-start p-[21px] relative rounded-[8px] shrink-0 w-full" data-name="Top Stepped Configuration Card: Step A & Step B">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container12 />
    </div>
  );
}

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

function Margin2() {
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

function Container24() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Package />
      <Heading2Margin />
      <Margin2 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#333] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Product Details
      </p>
    </div>
  );
}

function Container27() {
  return (
    <div className="border-[#bfbfbf] border-b-[1.111px] border-r-[1.111px] border-solid col-1 content-stretch flex items-center justify-center justify-self-stretch px-[5px] py-[10px] relative row-1 self-stretch shrink-0" data-name="Container">
      <Container28 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#333] text-[12px] text-center w-[84px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Unit Price (USD)
      </p>
    </div>
  );
}

function Container29() {
  return (
    <div className="border-[#bfbfbf] border-b-[1.111px] border-r-[1.111px] border-solid col-2 content-stretch flex items-center justify-center justify-self-stretch px-[5px] py-[10px] relative row-1 self-stretch shrink-0" data-name="Container">
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#333] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Quantity
      </p>
    </div>
  );
}

function Container31() {
  return (
    <div className="border-[#bfbfbf] border-b-[1.111px] border-r-[1.111px] border-solid col-3 content-stretch flex items-center justify-center justify-self-stretch px-[5px] py-[10px] relative row-1 self-stretch shrink-0" data-name="Container">
      <Container32 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#333] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Subtotal (USD)
      </p>
    </div>
  );
}

function Container33() {
  return (
    <div className="border-[#bfbfbf] border-b-[1.111px] border-r-[1.111px] border-solid col-4 content-stretch flex items-center justify-center justify-self-stretch px-[5px] py-[10px] relative row-1 self-stretch shrink-0" data-name="Container">
      <Container34 />
    </div>
  );
}

function Container35() {
  return (
    <div className="[word-break:break-word] border-[#bfbfbf] border-b-[1.111px] border-solid col-5 content-stretch flex flex-col items-center justify-center justify-self-stretch leading-[18px] px-[5px] py-[10px] relative row-1 self-stretch shrink-0 text-[#333] text-[12px] text-center whitespace-nowrap" data-name="Container">
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        (Shipping Location)
      </p>
      <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        Ships On
      </p>
    </div>
  );
}

function Container26() {
  return (
    <div className="grid grid-cols-[_____283.58px_95px_120px_125px_290px] grid-rows-[_57.08px] min-h-[40px] relative shrink-0 w-[913.576px]" data-name="Container">
      <Container27 />
      <Container29 />
      <Container31 />
      <Container33 />
      <Container35 />
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[#ebf1f9] border-[#bfbfbf] border-l-[1.111px] border-r-[1.111px] border-solid border-t-[1.111px] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container26 />
    </div>
  );
}

function ProductDetailsTableHeadContainer() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="ProductDetailsTableHeadContainer">
      <Container25 />
    </div>
  );
}

function PlaceholderForContainer() {
  return <div className="col-1 h-[206.719px] justify-self-start relative row-1 self-start shrink-0 w-[283.576px]" data-name="Placeholder for Container" />;
}

function Container39() {
  return (
    <div className="border-[#bfbfbf] border-r-[1.111px] border-solid col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <p className="-translate-x-full [word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[25.6px] left-[84.7px] text-[#333] text-[16px] text-right top-[9.22px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        $6.84
      </p>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[25.6px] relative shrink-0 text-[#333] text-[16px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        1
      </p>
    </div>
  );
}

function Container40() {
  return (
    <div className="border-[#bfbfbf] border-r-[1.111px] border-solid col-3 content-stretch flex flex-col items-start justify-self-stretch p-[10px] relative row-1 self-stretch shrink-0" data-name="Container">
      <Container41 />
    </div>
  );
}

function Container42() {
  return (
    <div className="border-[#bfbfbf] border-r-[1.111px] border-solid col-4 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <p className="-translate-x-full [word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[25.6px] left-[114.7px] text-[#333] text-[16px] text-right top-[9.22px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        $6.84
      </p>
    </div>
  );
}

function PlaceholderForContainer1() {
  return <div className="col-5 h-[206.719px] justify-self-start relative row-1 self-start shrink-0 w-[240px]" data-name="Placeholder for Container" />;
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#004bb1] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Delete
      </p>
    </div>
  );
}

function Container43() {
  return (
    <div className="col-6 content-stretch flex items-start justify-center justify-self-stretch p-[10px] relative row-1 self-stretch shrink-0" data-name="Container">
      <Button1 />
    </div>
  );
}

function Image2() {
  return (
    <div className="absolute left-0 size-[75px] top-[52.93px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[186.719px] relative shrink-0 w-[75px]" data-name="Container">
      <Image2 />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute h-[28.438px] left-[10px] top-0 w-[177.465px]" data-name="TextInput">
      <div aria-hidden className="absolute bg-white inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip px-[6.667px] py-[5.333px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#757575] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          Part Number Alias (optional)
        </p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_0px_0px_rgba(0,0,0,0.1)]" />
      <div aria-hidden className="absolute border-[#bfbfbf] border-[1.111px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[19.2px] relative shrink-0 text-[#333] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        B6000ZZ
      </p>
    </div>
  );
}

function Image3() {
  return (
    <div className="absolute left-[89.08px] size-[8.993px] top-[23.52px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[38.368px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[19.2px] left-0 text-[#004bb1] text-[12px] top-[-0.78px] w-[178px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Deep Groove Ball Bearing - Double Shielded
      </p>
      <Image3 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[19.2px] relative shrink-0 text-[#333] text-[12px] w-[178px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Deep Groove Ball Bearings (19g) (CHINA)
      </p>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[19.2px] relative shrink-0 text-[#333] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        MISUMI
      </p>
    </div>
  );
}

function IconLabel() {
  return (
    <div className="absolute bg-[#fff2bf] border-[#666] border-[1.111px] border-solid h-[18.194px] left-0 rounded-[2px] top-[0.35px] w-[38.993px]" data-name="IconLabel">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[10px] left-[19.32px] text-[#333] text-[10px] text-center top-[2.88px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Stock
      </p>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[19.177px] relative shrink-0 w-full" data-name="Container">
      <IconLabel />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[10px] pb-[14px] top-[38.44px] w-[177.465px]" data-name="Container">
      <Container49 />
      <Container50 />
      <Container51 />
      <Container52 />
      <Container53 />
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[186.719px] relative shrink-0 w-[187.465px]" data-name="Container">
      <TextInput />
      <Container48 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Container46 />
      <Container47 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute border-[#bfbfbf] border-r-[1.111px] border-solid content-stretch flex flex-col items-start left-0 p-[10px] top-0 w-[283.576px]" data-name="Container">
      <Container45 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[19.2px] relative shrink-0 text-[#333] text-[12px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        (USA Elk Grove, IL)
      </p>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[74.653px]" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[22.4px] relative shrink-0 text-[#333] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        08/31/2026
      </p>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex items-start justify-between relative rounded-[2px] shrink-0 w-full" data-name="Container">
      <Container57 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[5px] relative shrink-0 w-full" data-name="Container:margin">
      <Container56 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col h-[23px] items-start pr-[10px] pt-[5px] relative shrink-0 w-[105px]" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Change Ship Date
      </p>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[30.99px] pointer-events-none relative rounded-[2px] shrink-0 w-[31.997px]" data-name="Button">
      <div aria-hidden className="absolute inset-0 rounded-[2px]">
        <div className="absolute bg-[#f2f2f2] inset-0 rounded-[2px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[2px]">
          <img alt="" className="absolute h-[58.08%] left-[23.43%] max-w-none top-[20.96%] w-[53.13%]" src={imgButton} />
        </div>
      </div>
      <div aria-hidden className="absolute border-[#bfbfbf] border-[1.111px] border-solid inset-0 rounded-[2px] shadow-[0px_2px_0px_0px_rgba(0,0,0,0.1)]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_0px_0px_white]" />
    </div>
  );
}

function RequestDeliveryDateBox() {
  return (
    <div className="content-stretch flex items-center justify-end relative rounded-[2px] shrink-0 w-full" data-name="RequestDeliveryDateBox">
      <Container58 />
      <Button2 />
    </div>
  );
}

function RequestDeliveryDateBoxMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[10px] relative shrink-0 w-full" data-name="RequestDeliveryDateBox:margin">
      <RequestDeliveryDateBox />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute border-[#bfbfbf] border-r-[1.111px] border-solid content-stretch flex flex-col h-[206.719px] items-start left-[623.58px] p-[10px] top-0 w-[240px]" data-name="Container">
      <Container55 />
      <ContainerMargin1 />
      <RequestDeliveryDateBoxMargin />
    </div>
  );
}

function Container38() {
  return (
    <div className="grid grid-cols-[______283.58px_95px_120px_125px_240px_50px] grid-rows-[_206.72px] h-[206.719px] relative shrink-0 w-[913.576px]" data-name="Container">
      <PlaceholderForContainer />
      <Container39 />
      <Container40 />
      <Container42 />
      <PlaceholderForContainer1 />
      <Container43 />
      <Container44 />
      <Container54 />
    </div>
  );
}

function Container37() {
  return (
    <div className="border-[#bfbfbf] border-l-[1.111px] border-r-[1.111px] border-solid content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Container38 />
    </div>
  );
}

function PlaceholderForContainer2() {
  return <div className="col-1 h-[207.535px] justify-self-start relative row-1 self-start shrink-0 w-[283.576px]" data-name="Placeholder for Container" />;
}

function Container61() {
  return (
    <div className="border-[#bfbfbf] border-r-[1.111px] border-solid col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <p className="-translate-x-full [word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[25.6px] left-[84.7px] text-[#333] text-[16px] text-right top-[9.22px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        $40.39
      </p>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[25.6px] relative shrink-0 text-[#333] text-[16px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        1
      </p>
    </div>
  );
}

function Container62() {
  return (
    <div className="border-[#bfbfbf] border-r-[1.111px] border-solid col-3 content-stretch flex flex-col items-start justify-self-stretch p-[10px] relative row-1 self-stretch shrink-0" data-name="Container">
      <Container63 />
    </div>
  );
}

function Container64() {
  return (
    <div className="border-[#bfbfbf] border-r-[1.111px] border-solid col-4 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <p className="-translate-x-full [word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[25.6px] left-[114.7px] text-[#333] text-[16px] text-right top-[9.22px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        $40.39
      </p>
    </div>
  );
}

function PlaceholderForContainer3() {
  return <div className="col-5 h-[207.535px] justify-self-start relative row-1 self-start shrink-0 w-[240px]" data-name="Placeholder for Container" />;
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#004bb1] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Delete
      </p>
    </div>
  );
}

function Container65() {
  return (
    <div className="col-6 content-stretch flex items-start justify-center justify-self-stretch p-[10px] relative row-1 self-stretch shrink-0" data-name="Container">
      <Button3 />
    </div>
  );
}

function Image4() {
  return (
    <div className="absolute left-0 size-[75px] top-[33.75px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[148.351px] relative shrink-0 w-[75px]" data-name="Container">
      <Image4 />
    </div>
  );
}

function TextInput1() {
  return (
    <div className="absolute h-[28.438px] left-[10px] top-0 w-[177.465px]" data-name="TextInput">
      <div aria-hidden className="absolute bg-white inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip px-[6.667px] py-[5.333px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#757575] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          Part Number Alias (optional)
        </p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_0px_0px_rgba(0,0,0,0.1)]" />
      <div aria-hidden className="absolute border-[#bfbfbf] border-[1.111px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[19.2px] relative shrink-0 text-[#333] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        BCAS32
      </p>
    </div>
  );
}

function Image5() {
  return (
    <div className="absolute left-[69.46px] size-[8.993px] top-[4.34px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[19.184px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[19.2px] left-0 text-[#004bb1] text-[12px] top-[-0.78px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Ball Catches
      </p>
      <Image5 />
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[19.2px] relative shrink-0 text-[#333] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        BALL CATCH (11g) (CHINA)
      </p>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[19.2px] relative shrink-0 text-[#333] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        MISUMI
      </p>
    </div>
  );
}

function IconLabel1() {
  return (
    <div className="absolute bg-[#fff2bf] border-[#666] border-[1.111px] border-solid h-[18.194px] left-0 rounded-[2px] top-[0.35px] w-[38.993px]" data-name="IconLabel">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[10px] left-[19.32px] text-[#333] text-[10px] text-center top-[2.88px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Stock
      </p>
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[19.177px] relative shrink-0 w-full" data-name="Container">
      <IconLabel1 />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[10px] pb-[14px] top-[38.44px] w-[177.465px]" data-name="Container">
      <Container71 />
      <Container72 />
      <Container73 />
      <Container74 />
      <Container75 />
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[148.351px] relative shrink-0 w-[187.465px]" data-name="Container">
      <TextInput1 />
      <Container70 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Container68 />
      <Container69 />
    </div>
  );
}

function Alert() {
  return (
    <div className="absolute content-stretch flex h-[19.184px] items-start left-[10px] pl-[20px] top-[10px]" data-name="Alert">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[83.4%] left-0 max-w-none top-[8.3%] w-[68.62%]" src={imgAlert} />
      </div>
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[19.2px] relative shrink-0 text-[#333] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        -
      </p>
    </div>
  );
}

function Container76() {
  return (
    <div className="h-[39.184px] relative shrink-0 w-[262.465px]" data-name="Container">
      <Alert />
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute border-[#bfbfbf] border-r-[1.111px] border-solid content-stretch flex flex-col items-start left-0 p-[10px] top-0 w-[283.576px]" data-name="Container">
      <Container67 />
      <Container76 />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[19.2px] relative shrink-0 text-[#333] text-[12px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        (USA Elk Grove, IL)
      </p>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[74.653px]" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[22.4px] relative shrink-0 text-[#333] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        08/31/2026
      </p>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex items-start justify-between relative rounded-[2px] shrink-0 w-full" data-name="Container">
      <Container80 />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[5px] relative shrink-0 w-full" data-name="Container:margin">
      <Container79 />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col h-[23px] items-start pr-[10px] pt-[5px] relative shrink-0 w-[105px]" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Change Ship Date
      </p>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[30.99px] pointer-events-none relative rounded-[2px] shrink-0 w-[31.997px]" data-name="Button">
      <div aria-hidden className="absolute inset-0 rounded-[2px]">
        <div className="absolute bg-[#f2f2f2] inset-0 rounded-[2px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[2px]">
          <img alt="" className="absolute h-[58.08%] left-[23.43%] max-w-none top-[20.96%] w-[53.13%]" src={imgButton} />
        </div>
      </div>
      <div aria-hidden className="absolute border-[#bfbfbf] border-[1.111px] border-solid inset-0 rounded-[2px] shadow-[0px_2px_0px_0px_rgba(0,0,0,0.1)]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_0px_0px_white]" />
    </div>
  );
}

function RequestDeliveryDateBox1() {
  return (
    <div className="content-stretch flex items-center justify-end relative rounded-[2px] shrink-0 w-full" data-name="RequestDeliveryDateBox">
      <Container81 />
      <Button4 />
    </div>
  );
}

function RequestDeliveryDateBoxMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[10px] relative shrink-0 w-full" data-name="RequestDeliveryDateBox:margin">
      <RequestDeliveryDateBox1 />
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute border-[#bfbfbf] border-r-[1.111px] border-solid content-stretch flex flex-col h-[207.535px] items-start left-[623.58px] p-[10px] top-0 w-[240px]" data-name="Container">
      <Container78 />
      <ContainerMargin2 />
      <RequestDeliveryDateBoxMargin1 />
    </div>
  );
}

function Container60() {
  return (
    <div className="grid grid-cols-[______283.58px_95px_120px_125px_240px_50px] grid-rows-[_207.54px] h-[207.535px] relative shrink-0 w-[913.576px]" data-name="Container">
      <PlaceholderForContainer2 />
      <Container61 />
      <Container62 />
      <Container64 />
      <PlaceholderForContainer3 />
      <Container65 />
      <Container66 />
      <Container77 />
    </div>
  );
}

function Container59() {
  return (
    <div className="border-[#bfbfbf] border-b-[1.11px] border-l-[1.111px] border-r-[1.111px] border-solid border-t-[1.111px] content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Container60 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Container59 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <ProductDetailsTableHeadContainer />
      <Container36 />
    </div>
  );
}

function Package1() {
  return (
    <div className="bg-[#0062bd] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Package">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">Package 2 of 2</p>
      </div>
    </div>
  );
}

function Heading2Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0" data-name="Heading 2:margin">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p>
          <span className="leading-[16px]">{`Ships from: `}</span>
          <span className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[16px] text-[#1e293b]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Cincinnati, OH (USA)
          </span>
        </p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p>
          <span className="leading-[16px]">{`| Ships on: `}</span>
          <span className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[16px] text-[#1e293b]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Monday, September 2nd, 2026
          </span>
        </p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Package1 />
      <Heading2Margin1 />
      <Margin3 />
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#333] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Product Details
      </p>
    </div>
  );
}

function Container86() {
  return (
    <div className="border-[#bfbfbf] border-b-[1.111px] border-r-[1.111px] border-solid col-1 content-stretch flex items-center justify-center justify-self-stretch px-[5px] py-[10px] relative row-1 self-stretch shrink-0" data-name="Container">
      <Container87 />
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#333] text-[12px] text-center w-[84px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Unit Price (USD)
      </p>
    </div>
  );
}

function Container88() {
  return (
    <div className="border-[#bfbfbf] border-b-[1.111px] border-r-[1.111px] border-solid col-2 content-stretch flex items-center justify-center justify-self-stretch px-[5px] py-[10px] relative row-1 self-stretch shrink-0" data-name="Container">
      <Container89 />
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#333] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Quantity
      </p>
    </div>
  );
}

function Container90() {
  return (
    <div className="border-[#bfbfbf] border-b-[1.111px] border-r-[1.111px] border-solid col-3 content-stretch flex items-center justify-center justify-self-stretch px-[5px] py-[10px] relative row-1 self-stretch shrink-0" data-name="Container">
      <Container91 />
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#333] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Subtotal (USD)
      </p>
    </div>
  );
}

function Container92() {
  return (
    <div className="border-[#bfbfbf] border-b-[1.111px] border-r-[1.111px] border-solid col-4 content-stretch flex items-center justify-center justify-self-stretch px-[5px] py-[10px] relative row-1 self-stretch shrink-0" data-name="Container">
      <Container93 />
    </div>
  );
}

function Container94() {
  return (
    <div className="[word-break:break-word] border-[#bfbfbf] border-b-[1.111px] border-solid col-5 content-stretch flex flex-col items-center justify-center justify-self-stretch leading-[18px] px-[5px] py-[10px] relative row-1 self-stretch shrink-0 text-[#333] text-[12px] text-center whitespace-nowrap" data-name="Container">
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        (Shipping Location)
      </p>
      <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        Ships On
      </p>
    </div>
  );
}

function Container85() {
  return (
    <div className="grid grid-cols-[_____283.58px_95px_120px_125px_290px] grid-rows-[_57.08px] min-h-[40px] relative shrink-0 w-[913.576px]" data-name="Container">
      <Container86 />
      <Container88 />
      <Container90 />
      <Container92 />
      <Container94 />
    </div>
  );
}

function Container84() {
  return (
    <div className="bg-[#ebf1f9] border-[#bfbfbf] border-l-[1.111px] border-r-[1.111px] border-solid border-t-[1.111px] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container85 />
    </div>
  );
}

function ProductDetailsTableHeadContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="ProductDetailsTableHeadContainer">
      <Container84 />
    </div>
  );
}

function PlaceholderForContainer4() {
  return <div className="col-1 h-[225.903px] justify-self-start relative row-1 self-start shrink-0 w-[283.576px]" data-name="Placeholder for Container" />;
}

function Container98() {
  return (
    <div className="border-[#bfbfbf] border-r-[1.111px] border-solid col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <p className="-translate-x-full [word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[25.6px] left-[84.7px] text-[#333] text-[16px] text-right top-[9.22px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        $14.31
      </p>
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[25.6px] relative shrink-0 text-[#333] text-[16px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        1
      </p>
    </div>
  );
}

function Container99() {
  return (
    <div className="border-[#bfbfbf] border-r-[1.111px] border-solid col-3 content-stretch flex flex-col items-start justify-self-stretch p-[10px] relative row-1 self-stretch shrink-0" data-name="Container">
      <Container100 />
    </div>
  );
}

function Container101() {
  return (
    <div className="border-[#bfbfbf] border-r-[1.111px] border-solid col-4 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <p className="-translate-x-full [word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[25.6px] left-[114.7px] text-[#333] text-[16px] text-right top-[9.22px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        $14.31
      </p>
    </div>
  );
}

function PlaceholderForContainer5() {
  return <div className="col-5 h-[225.903px] justify-self-start relative row-1 self-start shrink-0 w-[240px]" data-name="Placeholder for Container" />;
}

function Button5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#004bb1] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Delete
      </p>
    </div>
  );
}

function Container102() {
  return (
    <div className="col-6 content-stretch flex items-start justify-center justify-self-stretch p-[10px] relative row-1 self-stretch shrink-0" data-name="Container">
      <Button5 />
    </div>
  );
}

function Image6() {
  return (
    <div className="absolute left-0 size-[75px] top-[62.52px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
    </div>
  );
}

function Container105() {
  return (
    <div className="h-[205.903px] relative shrink-0 w-[75px]" data-name="Container">
      <Image6 />
    </div>
  );
}

function TextInput2() {
  return (
    <div className="absolute h-[28.438px] left-[10px] top-0 w-[177.465px]" data-name="TextInput">
      <div aria-hidden className="absolute bg-white inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip px-[6.667px] py-[5.333px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#757575] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          Part Number Alias (optional)
        </p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_0px_0px_rgba(0,0,0,0.1)]" />
      <div aria-hidden className="absolute border-[#bfbfbf] border-[1.111px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[19.2px] relative shrink-0 text-[#333] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        MPBZ5-10
      </p>
    </div>
  );
}

function Image7() {
  return (
    <div className="absolute left-[37px] size-[8.993px] top-[61.89px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Container109() {
  return (
    <div className="h-[76.736px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[19.2px] left-0 text-[#004bb1] text-[12px] top-[-0.78px] w-[178px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Straight Linear Plain Bearings - Metallic, Graphite Impregnated Brass, I.D. F7, Standard Wall, Metric
      </p>
      <Image7 />
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[19.2px] relative shrink-0 text-[#333] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Oil Free Bushings (3g) (CHINA)
      </p>
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[19.2px] relative shrink-0 text-[#333] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        MISUMI
      </p>
    </div>
  );
}

function IconLabel2() {
  return (
    <div className="absolute bg-[#fff2bf] border-[#666] border-[1.111px] border-solid h-[18.194px] left-0 rounded-[2px] top-[0.35px] w-[38.993px]" data-name="IconLabel">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[10px] left-[19.32px] text-[#333] text-[10px] text-center top-[2.88px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Stock
      </p>
    </div>
  );
}

function Container112() {
  return (
    <div className="h-[19.177px] relative shrink-0 w-full" data-name="Container">
      <IconLabel2 />
    </div>
  );
}

function Container107() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[10px] pb-[14px] top-[38.44px] w-[177.465px]" data-name="Container">
      <Container108 />
      <Container109 />
      <Container110 />
      <Container111 />
      <Container112 />
    </div>
  );
}

function Container106() {
  return (
    <div className="h-[205.903px] relative shrink-0 w-[187.465px]" data-name="Container">
      <TextInput2 />
      <Container107 />
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Container105 />
      <Container106 />
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute border-[#bfbfbf] border-r-[1.111px] border-solid content-stretch flex flex-col items-start left-0 p-[10px] top-0 w-[283.576px]" data-name="Container">
      <Container104 />
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[19.2px] relative shrink-0 text-[#333] text-[12px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        (USA West Carrollton, OH)
      </p>
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[74.653px]" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[22.4px] relative shrink-0 text-[#333] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        08/31/2026
      </p>
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex items-start justify-between relative rounded-[2px] shrink-0 w-full" data-name="Container">
      <Container116 />
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[5px] relative shrink-0 w-full" data-name="Container:margin">
      <Container115 />
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex flex-col h-[23px] items-start pr-[10px] pt-[5px] relative shrink-0 w-[105px]" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Change Ship Date
      </p>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[30.99px] pointer-events-none relative rounded-[2px] shrink-0 w-[31.997px]" data-name="Button">
      <div aria-hidden className="absolute inset-0 rounded-[2px]">
        <div className="absolute bg-[#f2f2f2] inset-0 rounded-[2px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[2px]">
          <img alt="" className="absolute h-[58.08%] left-[23.43%] max-w-none top-[20.96%] w-[53.13%]" src={imgButton} />
        </div>
      </div>
      <div aria-hidden className="absolute border-[#bfbfbf] border-[1.111px] border-solid inset-0 rounded-[2px] shadow-[0px_2px_0px_0px_rgba(0,0,0,0.1)]" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_0px_0px_white]" />
    </div>
  );
}

function RequestDeliveryDateBox2() {
  return (
    <div className="content-stretch flex items-center justify-end relative rounded-[2px] shrink-0 w-full" data-name="RequestDeliveryDateBox">
      <Container117 />
      <Button6 />
    </div>
  );
}

function RequestDeliveryDateBoxMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[10px] relative shrink-0 w-full" data-name="RequestDeliveryDateBox:margin">
      <RequestDeliveryDateBox2 />
    </div>
  );
}

function Container113() {
  return (
    <div className="absolute border-[#bfbfbf] border-r-[1.111px] border-solid content-stretch flex flex-col h-[225.903px] items-start left-[623.58px] p-[10px] top-0 w-[240px]" data-name="Container">
      <Container114 />
      <ContainerMargin3 />
      <RequestDeliveryDateBoxMargin2 />
    </div>
  );
}

function Container97() {
  return (
    <div className="grid grid-cols-[______283.58px_95px_120px_125px_240px_50px] grid-rows-[_225.90px] h-[225.903px] relative shrink-0 w-[913.576px]" data-name="Container">
      <PlaceholderForContainer4 />
      <Container98 />
      <Container99 />
      <Container101 />
      <PlaceholderForContainer5 />
      <Container102 />
      <Container103 />
      <Container113 />
    </div>
  );
}

function Container96() {
  return (
    <div className="border-[#bfbfbf] border-[1.111px] border-solid content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Container97 />
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container96 />
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container83 />
      <ProductDetailsTableHeadContainer1 />
      <Container95 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start pt-[32px] relative shrink-0 w-[915.799px]" data-name="Container">
      <Container23 />
      <Container82 />
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

function Button7() {
  return (
    <div className="bg-white border-[#bfbfbf] border-[1.111px] border-solid content-stretch flex gap-[8px] h-full items-center justify-center min-w-[140px] overflow-clip pb-[7px] pl-[8px] pr-[16px] pt-[8px] relative shadow-[0px_2px_0px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <CaretLeft />
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Previous Step
      </p>
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

function Button8() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center min-w-[140px] overflow-clip pb-[7px] pl-[16px] pr-[8px] pt-[8px] relative shadow-[0px_2px_0px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <div aria-hidden className="absolute bg-[#0169c6] inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Next Step: Payment Method
      </p>
      <CaretRight />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_0px_0px_#67a5dd]" />
    </div>
  );
}

function Wrapper() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center justify-between pt-[24px] relative shrink-0 w-[915.799px]" data-name="Wrapper">
        <Button7 />
        <Button8 />
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[915.799px]" data-name="Container">
      <Wrapper />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[16px] relative shrink-0 w-full" data-name="Container">
      <TopSteppedConfigurationCardStepAStepB />
      <Container22 />
      <Container118 />
    </div>
  );
}

function Container8() {
  return (
    <div className="border-[#bfbfbf] border-[1.111px] border-solid content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container11 />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Container:margin">
      <Container8 />
    </div>
  );
}

function Container121() {
  return (
    <div className="content-stretch flex h-[22.378px] items-center relative shrink-0 w-[915.799px]" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[22.4px] relative shrink-0 text-[#333] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Step 3: Payment Method
      </p>
    </div>
  );
}

function Container120() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex flex-col items-start px-[16px] py-[12px] relative shrink-0 w-full" data-name="Container">
      <Container121 />
    </div>
  );
}

function Container119() {
  return (
    <div className="border-[#bfbfbf] border-[1.111px] border-solid content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container120 />
    </div>
  );
}

function ContainerMargin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Container:margin">
      <Container119 />
    </div>
  );
}

function OrderInfoBox() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[800px] pb-[4px] relative shrink-0 w-[950px]" data-name="OrderInfoBox">
      <Step1ShippingAddressSection />
      <ContainerMargin />
      <ContainerMargin4 />
    </div>
  );
}

function Container123() {
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

function Container125() {
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

function Container124() {
  return (
    <div className="border-[#bfbfbf] border-b-[1.111px] border-dashed content-stretch flex flex-col items-start pb-[10px] relative shrink-0 w-[199.792px]" data-name="Container">
      <Container125 />
    </div>
  );
}

function ContainerMargin5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[10px] relative shrink-0" data-name="Container:margin">
      <Container124 />
    </div>
  );
}

function Container127() {
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

function Container128() {
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

function Container130() {
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

function Container131() {
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

function Container129() {
  return (
    <div className="border-[#bfbfbf] border-b-[1.111px] border-dashed h-[59.479px] relative shrink-0 w-[199.792px]" data-name="Container">
      <Container130 />
      <Container131 />
    </div>
  );
}

function Container132() {
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

function Container126() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[19.2px] relative shrink-0 text-[12px] whitespace-nowrap" data-name="Container">
      <Container127 />
      <Container128 />
      <Container129 />
      <Container132 />
    </div>
  );
}

function TextInput3() {
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

function Button9() {
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

function Container133() {
  return (
    <div className="content-stretch flex h-[50px] items-start justify-between pt-[15px] relative shrink-0 w-[199.792px]" data-name="Container">
      <TextInput3 />
      <Button9 />
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

function Container134() {
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

function Container135() {
  return (
    <div className="h-[42.378px] relative shrink-0 w-[171.806px]" data-name="Container">
      <RouterLinkNext13Button />
    </div>
  );
}

function ContainerMargin6() {
  return (
    <div className="content-stretch flex flex-col items-start px-[14px] relative shrink-0" data-name="Container:margin">
      <Container135 />
    </div>
  );
}

function FloatPriceBoxContainer() {
  return (
    <div className="bg-[#f2f2f2] border-[#bfbfbf] border-[1.111px] border-solid content-stretch flex flex-col items-start p-[14px] relative rounded-[2px] shrink-0 w-[230px]" data-name="FloatPriceBoxContainer">
      <Container123 />
      <ContainerMargin5 />
      <Container126 />
      <Container133 />
      <SeparatorMargin />
      <Container134 />
      <SeparatorMargin1 />
      <ContainerMargin6 />
    </div>
  );
}

function Container122() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[230px]" data-name="Container">
      <FloatPriceBoxContainer />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[20px] items-start pt-[20px] relative shrink-0 w-[1200px]" data-name="Container">
      <OrderInfoBox />
      <Container122 />
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
    <div className="content-stretch flex flex-col gap-[15px] items-start max-w-[1420px] min-w-[1200px] px-[10px] py-[15px] relative shrink-0 w-[1420px]" data-name="Main Content">
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

function Container136() {
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
      <Container136 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[1050px] relative shrink-0 w-[2123.333px]" data-name="Container">
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

export default function Step2ConfirmOrder() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="STEP2 Confirm Order">
      <Body />
    </div>
  );
}