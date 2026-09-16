function Container1() {
  return (
    <div className="border-[#bfbfbf] border-b-[1.111px] border-solid content-stretch flex flex-col items-center pb-[10px] relative shrink-0 w-[199.792px]" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#333] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="leading-[19.2px]">{`Standard Shipping `}</span>
        <span className="leading-[19.2px] text-black">2</span>
        <span className="leading-[19.2px]">{` Item(s)`}</span>
      </p>
    </div>
  );
}

function Container3() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Roboto:Bold',sans-serif] font-bold gap-[8px] h-[38.385px] items-start justify-center leading-[38.4px] relative shrink-0 text-[24px] text-black text-center w-full" data-name="Container">
      <p className="h-full relative shrink-0 w-[63px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        $8.17
      </p>
      <p className="relative shrink-0 whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        (USD)
      </p>
    </div>
  );
}

function Container2() {
  return (
    <div className="border-[#bfbfbf] border-b-[1.111px] border-dashed content-stretch flex flex-col items-start pb-[10px] relative shrink-0 w-[199.792px]" data-name="Container">
      <Container3 />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[10px] relative shrink-0" data-name="Container:margin">
      <Container2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="border-[#bfbfbf] border-b-[1.111px] border-dashed font-['Roboto:Bold',sans-serif] font-bold h-[40.295px] relative shrink-0 w-[199.792px]" data-name="Container">
      <p className="absolute left-0 text-[#333] top-[9.22px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Subtotal
      </p>
      <p className="-translate-x-full absolute left-[166.29px] text-black text-right top-[10px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        $7.42
      </p>
      <p className="-translate-x-full absolute left-[200.3px] text-black text-right top-[9.22px]" style={{ fontVariationSettings: '"wdth" 100' }}>{` (USD)`}</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="border-[#bfbfbf] border-b-[1.111px] border-dashed font-['Roboto:Bold',sans-serif] font-bold h-[40.295px] relative shrink-0 w-[199.792px]" data-name="Container">
      <p className="absolute left-0 text-[#333] top-[9.22px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Discount
      </p>
      <p className="-translate-x-full absolute left-[132.76px] text-black text-right top-[10px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`- `}</p>
      <p className="-translate-x-full absolute left-[164.5px] text-black text-right top-[10px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        $0.44
      </p>
      <p className="-translate-x-full absolute left-[200.3px] text-black text-right top-[9.22px]" style={{ fontVariationSettings: '"wdth" 100' }}>{` (USD)`}</p>
    </div>
  );
}

function Container8() {
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

function Container9() {
  return (
    <div className="absolute h-[38.368px] left-[106.65px] text-right top-[10px] w-[93.142px]" data-name="Container">
      <p className="-translate-x-full absolute font-['Roboto:Bold',sans-serif] font-bold left-[59.64px] text-black top-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        $0.00
      </p>
      <p className="-translate-x-full absolute font-['Roboto:Bold',sans-serif] font-bold left-[93.65px] text-black top-[-0.78px]" style={{ fontVariationSettings: '"wdth" 100' }}>{` (USD)`}</p>
      <p className="-translate-x-full absolute font-['Roboto:Regular',sans-serif] font-normal left-[93.14px] text-[#333] top-[19.18px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        (2g)
      </p>
    </div>
  );
}

function Container7() {
  return (
    <div className="border-[#bfbfbf] border-b-[1.111px] border-dashed h-[59.479px] relative shrink-0 w-[199.792px]" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="font-['Roboto:Bold',sans-serif] font-bold h-[39.184px] relative shrink-0 w-[199.792px]" data-name="Container">
      <p className="absolute left-0 text-[#333] top-[9.22px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Tax
      </p>
      <p className="-translate-x-full absolute left-[166.29px] text-black text-right top-[10px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        $0.75
      </p>
      <p className="-translate-x-full absolute left-[200.3px] text-black text-right top-[9.22px]" style={{ fontVariationSettings: '"wdth" 100' }}>{` (USD)`}</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[19.2px] relative shrink-0 text-[12px] whitespace-nowrap" data-name="Container">
      <Container5 />
      <Container6 />
      <Container7 />
      <Container10 />
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

function Button() {
  return (
    <div className="content-stretch drop-shadow-[0px_2px_0px_rgba(0,0,0,0.1)] flex flex-col h-[35px] items-center justify-center pb-[7px] pt-[8px] px-[2px] relative shrink-0 w-[46px]" data-name="Button">
      <div aria-hidden className="absolute bg-[#f2f2f2] inset-0 pointer-events-none" />
      <div aria-hidden className="absolute border-[#bfbfbf] border-[1.111px] border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Apply
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_0px_0px_white]" />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[50px] items-start justify-between relative shrink-0 w-[199.792px]" data-name="Container">
      <TextInput />
      <Button />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#cf4817] content-stretch flex flex-col items-center justify-center px-[13px] py-[11px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">SUBMIT ORDER</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[13px] py-[11px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#333] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">BACK TO CART</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Button1 />
      <Button2 />
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

function Container12() {
  return (
    <div className="bg-white border-[#bfbfbf] border-[1.111px] border-solid content-stretch flex flex-col items-start p-[8px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#333] text-[0px] w-[182px] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22.4px] mb-0 text-[12px]">Warehouse Pickup locations are restricted to Dayton, OH; Elk Grove Village, IL; Torrance, CA.</p>
        <p className="text-[12px]">
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

export default function Container() {
  return (
    <div className="bg-[#f2f2f2] border-[#bfbfbf] border-[1.111px] border-solid content-stretch flex flex-col items-start p-[14px] relative rounded-[2px] size-full" data-name="Container">
      <Container1 />
      <ContainerMargin />
      <Container4 />
      <Container11 />
      <Frame />
      <SeparatorMargin />
      <Container12 />
    </div>
  );
}