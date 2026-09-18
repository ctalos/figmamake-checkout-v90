import { useEffect, useRef, useState } from "react";
import svgPaths from "../imports/svg-otyv9vxe4n";
import svgPathsAac from "../imports/svg-aacepbrbow";
import svgPathsGol from "../imports/svg-gol9aevr63";
import imgB6000ZZ from "./imports/Step2/B6000ZZ.jpg";
import imgBCAS32 from "./imports/Step2/BCAS32.jpg";
import imgMFB2510 from "./imports/Step2/MFB25-10.jpg";
import s from "./styles/checkout.module.scss";

type ModalType = "change" | null;

const CARRIER_METHODS = [
  "ups-collect",
  "ups-third-party",
  "fedex-bill-recipient",
  "fedex-third-party",
];

type ChangeAddrView = "select" | "edit" | "add" | "remove";

const METHOD_LABELS: Record<string, string> = {
  prepaid: "Prepaid",
  "ups-collect": "UPS Collect",
  "ups-third-party": "UPS Third Party Billing",
  "fedex-bill-recipient": "FedEx Bill Recipient",
  "fedex-third-party": "FedEx Third Party Billing",
};

function maskAccount(acct: string) {
  if (acct.length <= 4) return acct;
  return "*".repeat(acct.length - 4) + acct.slice(-4);
}

type SavedAddress = {
  id: number;
  name: string;
  addr: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  country: "us" | "ca";
  recentValue: number;
  isPreferred: boolean;
};

type AddrFormData = {
  company: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  country: "us" | "ca";
  shippingMethod: string;
  carrierAccountNum: string;
  isPreferred: boolean;
};

function formatAddr(f: {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: "us" | "ca";
}) {
  const stateLabels: Record<string, string> = { il: "IL", ca: "CA", ny: "NY" };
  const stateLabel = f.state
    ? stateLabels[f.state] ?? f.state.toUpperCase()
    : "";
  const line2 = [f.city, [stateLabel, f.zip].filter(Boolean).join(" ")]
    .filter(Boolean)
    .join(", ");
  const line3 = f.country === "ca" ? "Canada" : "USA";
  return [f.street, line2, line3].filter(Boolean).join("\n");
}

function buildSeedAddresses(
  currentAddr: { name: string; addr: string } | null,
): SavedAddress[] {
  if (!currentAddr) return [];
  const day = 24 * 60 * 60 * 1000;
  const now = Date.now();
  const recentFor = (maxDays: number) =>
    now - Math.floor(Math.random() * maxDays) * day;
  return [
    {
      id: 1,
      name: currentAddr.name,
      addr: currentAddr.addr,
      street: "1475 E Woodfield Rd. Ste 1300",
      city: "Schaumburg",
      state: "il",
      zip: "60173-5482",
      phone: "1-800-681-7475",
      country: "us",
      recentValue: recentFor(3),
      isPreferred: true,
    },
    {
      id: 2,
      name: "MISUMI Warehouse B",
      addr: "2500 Enterprise Pkwy\nChicago, IL 60666\nUSA",
      street: "2500 Enterprise Pkwy",
      city: "Chicago",
      state: "il",
      zip: "60666",
      phone: "1-800-681-7475",
      country: "us",
      recentValue: recentFor(60),
      isPreferred: false,
    },
    {
      id: 3,
      name: "MISUMI Assembly Plant",
      addr: "1020 Meacham Rd\nSchaumburg, IL 60173\nUSA",
      street: "1020 Meacham Rd",
      city: "Schaumburg",
      state: "il",
      zip: "60173",
      phone: "1-800-681-7475",
      country: "us",
      recentValue: recentFor(60),
      isPreferred: false,
    },
    {
      id: 4,
      name: "Torrance Distribution Center",
      addr: "2515 Columbia St\nTorrance, CA 90503\nUSA",
      street: "2515 Columbia St",
      city: "Torrance",
      state: "ca",
      zip: "90503",
      phone: "1-800-681-7475",
      country: "us",
      recentValue: recentFor(60),
      isPreferred: false,
    },
    {
      id: 5,
      name: "Home",
      addr: "482 Maple Grove Ln\nSan Jose, CA 95123\nUSA",
      street: "482 Maple Grove Ln",
      city: "San Jose",
      state: "ca",
      zip: "95123",
      phone: "(408) 555-9821",
      country: "us",
      recentValue: recentFor(60),
      isPreferred: false,
    },
    {
      id: 6,
      name: "MISUMI NY Office",
      addr: "111 W 33rd St\nNew York, NY 10120\nUSA",
      street: "111 W 33rd St",
      city: "New York",
      state: "ny",
      zip: "10120",
      phone: "1-800-681-7475",
      country: "us",
      recentValue: recentFor(60),
      isPreferred: false,
    },
    {
      id: 7,
      name: "MISUMI Canada Ltd",
      addr: "6395 Kestrel Rd\nMississauga, ON L5T 1Z5\nCanada",
      street: "6395 Kestrel Rd",
      city: "Mississauga",
      state: "",
      zip: "L5T 1Z5",
      phone: "1-800-681-7475",
      country: "ca",
      recentValue: recentFor(60),
      isPreferred: false,
    },
  ];
}

function PreferredAddressInfoIcon() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen(true);
        }}
        className={s.caInfoIcon}
        aria-label="About preferred address"
      >
        i
      </button>
      {open && (
        <div
          className={[s.modalOverlay, s.caInfoOverlay].join(" ")}
          onClick={() => setOpen(false)}
        >
          <div className={s.caInfoModal} onClick={(e) => e.stopPropagation()}>
            <div className={s.caInfoModalHeader}>
              <span className={s.modalTitle}>About preferred address</span>
              <button
                onClick={() => setOpen(false)}
                className={s.modalCloseBtn}
              >
                ×
              </button>
            </div>
            <div className={s.caInfoModalBody}>
              <p>
                Your preferred address is saved to your account and will be
                preselected for future orders.
              </p>
              <p>
                You can still choose a different address for this order
                without changing your preferred address.
              </p>
            </div>
            <div className={s.caInfoModalFooter}>
              <button onClick={() => setOpen(false)} className={s.caInfoGotIt}>
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function IconEditButton({
  onClick,
}: {
  onClick: (e: React.MouseEvent) => void;
}) {
  return (
    <button
      onClick={onClick}
      className={s.caIconBtn}
      aria-label="Edit address"
      type="button"
    >
      <svg fill="none" viewBox="0 0 14 14" style={{ width: 14, height: 14 }}>
        <path
          d={svgPaths.p1c2f1080}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.16667"
        />
      </svg>
    </button>
  );
}

function IconDeleteButton({
  onClick,
}: {
  onClick: (e: React.MouseEvent) => void;
}) {
  return (
    <button
      onClick={onClick}
      className={[s.caIconBtn, s.caIconBtnDelete].join(" ")}
      aria-label="Delete address"
      type="button"
    >
      <svg fill="none" viewBox="0 0 24 24" style={{ width: 14, height: 14 }}>
        <path
          d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14ZM10 11v6M14 11v6"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </button>
  );
}

function ArrowIcon({
  direction,
  color = "currentColor",
}: {
  direction: "left" | "right";
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      style={{ width: 14, height: 14, flexShrink: 0 }}
    >
      {direction === "right" ? (
        <path
          d="M3 8h10M9 4l4 4-4 4"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M13 8H3M7 4L3 8l4 4"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

function AddrForm({
  initialValues,
  submitLabel,
  onSubmit,
  onCancel,
}: {
  initialValues?: {
    company?: string;
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
    phone?: string;
    country?: "us" | "ca";
    shippingMethod?: string;
    carrierAccountNum?: string;
    isPreferred?: boolean;
  };
  submitLabel: string;
  onSubmit: (data: AddrFormData) => void;
  onCancel: () => void;
}) {
  const [company, setCompany] = useState(initialValues?.company ?? "");
  const [country, setCountry] = useState<"us" | "ca">(
    initialValues?.country ?? "us",
  );
  const [street, setStreet] = useState(initialValues?.street ?? "");
  const [city, setCity] = useState(initialValues?.city ?? "");
  const [stateField, setStateField] = useState(initialValues?.state ?? "");
  const [zip, setZip] = useState(initialValues?.zip ?? "");
  const [phone, setPhone] = useState(initialValues?.phone ?? "");
  const [shippingMethod, setShippingMethod] = useState(
    initialValues?.shippingMethod ?? "",
  );
  const [carrierAccountNum, setCarrierAccountNum] = useState(
    initialValues?.carrierAccountNum ?? "",
  );
  const [carrierAccountError, setCarrierAccountError] = useState(false);
  const carrierAccountFieldRef = useRef<HTMLDivElement>(null);
  const [taxable, setTaxable] = useState<"yes" | "no">("no");
  const [isPreferred, setIsPreferred] = useState(
    initialValues?.isPreferred ?? false,
  );
  const showCarrierAccount = CARRIER_METHODS.includes(shippingMethod);
  const isCanada = country === "ca";

  function handleSubmit() {
    if (showCarrierAccount && !carrierAccountNum.trim()) {
      setCarrierAccountError(true);
      carrierAccountFieldRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return;
    }
    setCarrierAccountError(false);
    onSubmit({
      company: company.trim(),
      street: street.trim(),
      city: city.trim(),
      state: stateField,
      zip: zip.trim(),
      phone: phone.trim(),
      country,
      shippingMethod,
      carrierAccountNum: showCarrierAccount ? carrierAccountNum.trim() : "",
      isPreferred,
    });
  }
  return (
    <div className={s.caForm}>
      <div className={s.caField}>
        <label className={s.caLabel}>Company Name</label>
        <input
          className={s.caInput}
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>
      <div className={s.caField}>
        <label className={s.caLabel}>Country</label>
        <select
          className={s.caSelect}
          value={country}
          onChange={(e) => setCountry(e.target.value as "us" | "ca")}
        >
          <option value="us">United States</option>
          <option value="ca">Canada</option>
        </select>
      </div>
      <div className={s.caField}>
        <label className={s.caLabel}>Street Address</label>
        <input
          className={s.caInput}
          placeholder="Street Address"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
      </div>
      <div className={s.caField}>
        <label className={s.caLabel}>Floor / Unit / Suite #</label>
        <input className={s.caInput} placeholder="Optional" />
      </div>
      <div className={s.caField}>
        <label className={s.caLabel}>City</label>
        <input
          className={s.caInput}
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className={s.caFieldRow}>
        <div className={s.caFieldHalf}>
          <label className={s.caLabel}>State/Province</label>
          <select
            className={s.caSelect}
            value={stateField}
            onChange={(e) => setStateField(e.target.value)}
          >
            <option value="">Select state</option>
            <option value="il">Illinois (IL)</option>
            <option value="ca">California (CA)</option>
            <option value="ny">New York (NY)</option>
          </select>
        </div>
        <div className={s.caFieldHalf}>
          <label className={s.caLabel}>Postal/Zip Code</label>
          <input
            className={s.caInput}
            placeholder="Example: 60173"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
        </div>
      </div>
      <div className={s.caField}>
        <label className={s.caLabel}>Phone</label>
        <input
          className={s.caInput}
          placeholder="Example: 800-681-7475"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className={s.caField}>
        <label className={s.caLabel}>Default Shipping Method</label>
        <select
          className={s.caSelect}
          value={shippingMethod}
          onChange={(e) => setShippingMethod(e.target.value)}
        >
          <option value="">--Please select--</option>
          <option value="prepaid">Prepaid</option>
          <option value="ups-collect">UPS Collect</option>
          <option value="ups-third-party">UPS Third Party Billing</option>
          <option value="fedex-bill-recipient">FedEx Bill Recipient</option>
          <option value="fedex-third-party">FedEx Third Party Billing</option>
        </select>
      </div>
      {showCarrierAccount && (
        <div className={s.caField} ref={carrierAccountFieldRef}>
          <label className={s.caLabel}>Carrier Account Number</label>
          <input
            className={[
              s.caInput,
              carrierAccountError ? s.caInputError : "",
            ].join(" ")}
            placeholder="e.g. 000012"
            value={carrierAccountNum}
            onChange={(e) => {
              setCarrierAccountNum(e.target.value);
              if (carrierAccountError) setCarrierAccountError(false);
            }}
          />
          {carrierAccountError && (
            <div className={s.caErrorRow}>
              <span className={s.caErrorIcon}>!</span>
              Carrier Account Number is required
            </div>
          )}
        </div>
      )}
      {isCanada && (
        <>
          <div className={s.caField}>
            <label className={s.caLabel}>Broker Name</label>
            <input className={s.caInput} placeholder="Optional" />
          </div>
          <div className={s.caField}>
            <label className={s.caLabel}>Broker Phone</label>
            <input className={s.caInput} placeholder="Optional" />
          </div>
          <div className={s.caField}>
            <label className={s.caLabel}>Incoterms</label>
            <select className={s.caSelect}>
              <option value="">--Please select--</option>
              <option value="exw">EXW</option>
              <option value="fob">FOB</option>
              <option value="fca">FCA</option>
              <option value="other">Other</option>
            </select>
          </div>
        </>
      )}
      <div className={s.caFieldInline}>
        <label className={s.caLabel}>Are You Taxable?</label>
        <div className={s.caTaxableRow}>
          <label className={s.caTaxableOption}>
            <div
              className={[
                s.caTaxableRadio,
                taxable === "yes" ? s.caTaxableRadioActive : "",
              ].join(" ")}
              onClick={() => setTaxable("yes")}
            >
              {taxable === "yes" && <div className={s.caTaxableRadioDot} />}
            </div>
            Yes
          </label>
          <label className={s.caTaxableOption}>
            <div
              className={[
                s.caTaxableRadio,
                taxable === "no" ? s.caTaxableRadioActive : "",
              ].join(" ")}
              onClick={() => setTaxable("no")}
            >
              {taxable === "no" && <div className={s.caTaxableRadioDot} />}
            </div>
            No
          </label>
        </div>
      </div>
      <div className={s.caField}>
        <label className={s.caLabel}>Department</label>
        <input className={s.caInputInline} placeholder="(optional)" />
      </div>
      <div className={s.caField}>
        <label className={s.caLabel}>Attention</label>
        <input className={s.caInputInline} placeholder="Example: John Smith" />
      </div>
      <label className={s.caPreferredRow}>
        <input
          type="checkbox"
          className={s.caCheckbox}
          checked={isPreferred}
          onChange={(e) => setIsPreferred(e.target.checked)}
        />
        <span className={s.caCheckboxLabel}>
          Make this my preferred address
        </span>
        <PreferredAddressInfoIcon />
      </label>
      <div className={s.caFormFooter}>
        <button onClick={onCancel} className={s.modalCancelBtn}>
          Cancel
        </button>
        <button onClick={handleSubmit} className={s.modalSaveBtn}>
          {submitLabel}
        </button>
      </div>
    </div>
  );
}

function ChangeAddressModal({
  onClose,
  onSelect,
  onClearAddress,
  currentAddr,
  initialView = "select",
  carrierMethod,
  carrierAccountNum,
  onSaveCarrierAccount,
}: {
  onClose: () => void;
  onSelect: (name: string, addr: string) => void;
  onClearAddress: () => void;
  currentAddr: { name: string; addr: string } | null;
  initialView?: "select" | "edit";
  carrierMethod: string;
  carrierAccountNum: string;
  onSaveCarrierAccount: (method: string, account: string) => void;
}) {
  const [view, setView] = useState<ChangeAddrView>(
    !currentAddr ? "add" : initialView,
  );
  const [addresses, setAddresses] = useState<SavedAddress[]>(() =>
    buildSeedAddresses(currentAddr),
  );
  const [selectedId, setSelectedId] = useState(1);
  const [pendingId, setPendingId] = useState<number | null>(null);
  const [editingId, setEditingId] = useState<number | null>(
    currentAddr && initialView === "edit" ? 1 : null,
  );
  const [removingId, setRemovingId] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState<"recent" | "oldest">("recent");
  const [sortMenuOpen, setSortMenuOpen] = useState(false);
  const sortMenuRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!sortMenuOpen) return;
    function handleOutsideClick(e: MouseEvent) {
      if (
        sortMenuRef.current &&
        !sortMenuRef.current.contains(e.target as Node)
      ) {
        setSortMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [sortMenuOpen]);

  const selectedAddress = addresses.find((a) => a.id === selectedId) ?? null;
  const editingAddress = addresses.find((a) => a.id === editingId) ?? null;
  const removingAddress = addresses.find((a) => a.id === removingId) ?? null;
  const showSearch = addresses.length >= 5;

  const savedList = addresses
    .filter((a) => a.id !== selectedId)
    .filter((a) =>
      searchQuery.trim()
        ? (a.name + " " + a.addr)
            .toLowerCase()
            .includes(searchQuery.trim().toLowerCase())
        : true,
    )
    .sort((a, b) =>
      sortOrder === "recent"
        ? b.recentValue - a.recentValue
        : a.recentValue - b.recentValue,
    );

  function togglePreferred(id: number) {
    setAddresses((prev) =>
      prev.map((a) => ({ ...a, isPreferred: a.id === id })),
    );
  }

  function selectAddress(addr: SavedAddress) {
    setSelectedId(addr.id);
    setPendingId(null);
    onSelect(addr.name, addr.addr);
    onSaveCarrierAccount("", "");
  }

  function confirmUseAddress() {
    if (pendingId === null) return;
    const addr = addresses.find((a) => a.id === pendingId);
    if (addr) selectAddress(addr);
    onClose();
  }

  function openEditFor(id: number) {
    setEditingId(id);
    setView("edit");
  }

  function openRemoveFor(id: number) {
    setRemovingId(id);
    setView("remove");
  }

  function handleRemoveConfirm() {
    if (removingId === null) return;
    const remaining = addresses.filter((a) => a.id !== removingId);
    if (remaining.length === 0) {
      setAddresses([]);
      setRemovingId(null);
      onClearAddress();
      setView("add");
      return;
    }
    if (removingId === selectedId) {
      const next = remaining.find((a) => a.isPreferred) ?? remaining[0];
      setSelectedId(next.id);
      onSelect(next.name, next.addr);
      onSaveCarrierAccount("", "");
    }
    setAddresses(remaining);
    setRemovingId(null);
    setView("select");
  }

  return (
    <div className={s.modalOverlay}>
      <div className={[s.modalBox, s.caModalBox].join(" ")}>
        {/* Header */}
        <div className={s.caModalHeader}>
          <span className={s.modalTitle}>Shipping Address</span>
          <button onClick={onClose} className={s.modalCloseBtn}>
            ×
          </button>
        </div>

        {/* View: Select */}
        {view === "select" && (
          <div className={s.caBody}>
            <div className={s.caSection}>
              <div className={s.caSelectedHeaderRow}>
                <p className={s.caSectionTitle}>
                  Selected address (for this order)
                </p>
                <button
                  onClick={() => setView("add")}
                  className={s.caAddLink}
                >
                  <svg
                    className={s.caAddLinkIcon}
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      d="M7 2.33333V11.6667M11.6667 7H2.33333"
                      stroke="#0062BD"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.45833"
                    />
                  </svg>
                  Add new address
                </button>
              </div>
              {selectedAddress && (
                <div className={s.caCurrentCard}>
                  <div className={s.caCurrentCardTopRow}>
                    <div className={s.caCurrentCardRadio}>
                      <div className={s.caRadioFilled}>
                        <div className={s.caRadioFilledDot} />
                      </div>
                    </div>
                    <div className={s.caCurrentNameRow}>
                      <span className={s.caCurrentName}>
                        {selectedAddress.name}
                      </span>
                      {selectedAddress.isPreferred && (
                        <span className={s.caSavedPrimary}>Preferred</span>
                      )}
                    </div>
                    <div className={s.caCardTopActions}>
                      <IconEditButton
                        onClick={(e) => {
                          e.stopPropagation();
                          openEditFor(selectedAddress.id);
                        }}
                      />
                      <IconDeleteButton
                        onClick={(e) => {
                          e.stopPropagation();
                          openRemoveFor(selectedAddress.id);
                        }}
                      />
                    </div>
                  </div>
                  <div className={s.caCurrentCardBody}>
                    <div className={s.caCurrentAddr}>
                      {selectedAddress.addr}
                    </div>
                    {!selectedAddress.isPreferred && (
                      <label className={s.caPreferredRow}>
                        <input
                          type="checkbox"
                          className={s.caCheckbox}
                          checked={false}
                          onChange={() => togglePreferred(selectedAddress.id)}
                        />
                        <span className={s.caCheckboxLabel}>
                          Make this my preferred address
                        </span>
                        <PreferredAddressInfoIcon />
                      </label>
                    )}
                  </div>
                </div>
              )}
            </div>

            {addresses.length > 1 && (
              <div className={s.caSection}>
                <div className={s.caSavedHeader}>
                  <p className={s.caSectionTitle}>
                    Saved addresses ({savedList.length})
                  </p>
                  <span className={s.caSavedHeaderDivider}>|</span>
                  <div className={s.caSortRow}>
                    <span className={s.caSortLabel}>Sort by</span>
                    <div className={s.caSortDropdown} ref={sortMenuRef}>
                      <button
                        type="button"
                        className={s.caSortTrigger}
                        onClick={() => setSortMenuOpen((open) => !open)}
                      >
                        {sortOrder === "recent" ? "Most recent" : "Least recent"}
                        <svg
                          className={s.caSortTriggerIcon}
                          viewBox="0 0 10 6"
                          fill="none"
                        >
                          <path
                            d="M1 1l4 4 4-4"
                            stroke="#0062bd"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      {sortMenuOpen && (
                        <div className={s.caSortMenu}>
                          <button
                            type="button"
                            className={[
                              s.caSortMenuItem,
                              sortOrder === "recent"
                                ? s.caSortMenuItemActive
                                : "",
                            ].join(" ")}
                            onClick={() => {
                              setSortOrder("recent");
                              setSortMenuOpen(false);
                            }}
                          >
                            Most recent
                          </button>
                          <button
                            type="button"
                            className={[
                              s.caSortMenuItem,
                              sortOrder === "oldest"
                                ? s.caSortMenuItemActive
                                : "",
                            ].join(" ")}
                            onClick={() => {
                              setSortOrder("oldest");
                              setSortMenuOpen(false);
                            }}
                          >
                            Least recent
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {showSearch && (
                  <div className={s.caSearchRow}>
                    <div className={s.caSearchWrap}>
                      <svg
                        className={s.caSearchIcon}
                        fill="none"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d={svgPathsAac.p2aa1a600}
                          stroke="#9CA3AF"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.33333"
                        />
                      </svg>
                      <input
                        className={s.caSearchInput}
                        placeholder="Search your saved addresses..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <button className={s.caSearchBtn}>Search</button>
                  </div>
                )}
                <div
                  className={[
                    s.caSavedList,
                    showSearch ? s.caSavedListScroll : "",
                  ].join(" ")}
                >
                  {savedList.map((a) => (
                    <div
                      key={a.id}
                      onClick={() => setPendingId(a.id)}
                      className={[
                        s.caSavedItem,
                        pendingId === a.id ? s.caSavedItemSelected : "",
                      ].join(" ")}
                    >
                      <div
                        className={[
                          s.caSavedRadio,
                          pendingId === a.id ? s.caSavedRadioActive : "",
                        ].join(" ")}
                      >
                        {pendingId === a.id && (
                          <div className={s.caSavedRadioDot} />
                        )}
                      </div>
                      <div className={s.caSavedInfo}>
                        <div className={s.caSavedNameRow}>
                          <span className={s.caSavedName}>{a.name}</span>
                          {a.isPreferred && (
                            <span className={s.caSavedPrimary}>
                              Preferred
                            </span>
                          )}
                        </div>
                        <div className={s.caSavedAddr}>{a.addr}</div>
                      </div>
                      <div className={s.caCardTopActions}>
                        <IconEditButton
                          onClick={(e) => {
                            e.stopPropagation();
                            openEditFor(a.id);
                          }}
                        />
                        <IconDeleteButton
                          onClick={(e) => {
                            e.stopPropagation();
                            openRemoveFor(a.id);
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className={s.caFormFooter}>
              <button onClick={onClose} className={s.modalCancelBtn}>
                {addresses.length === 1 ? "Close" : "Cancel"}
              </button>
              {addresses.length > 1 && (
                <button
                  onClick={confirmUseAddress}
                  className={s.modalSaveBtn}
                  disabled={pendingId === null}
                >
                  Use This Address
                </button>
              )}
            </div>
          </div>
        )}

        {/* View: Edit existing */}
        {view === "edit" && editingAddress && (
          <div className={s.caBody}>
            <button
              onClick={() => {
                setEditingId(null);
                setView("select");
              }}
              className={s.caBackLink}
            >
              <ArrowIcon direction="left" color="#0062bd" />
              Back to addresses
            </button>
            <h3 className={s.caAddTitle}>Edit address</h3>
            <AddrForm
              initialValues={{
                company: editingAddress.name,
                street: editingAddress.street,
                city: editingAddress.city,
                state: editingAddress.state,
                zip: editingAddress.zip,
                phone: editingAddress.phone,
                country: editingAddress.country,
                shippingMethod:
                  editingAddress.id === selectedId ? carrierMethod : "",
                carrierAccountNum:
                  editingAddress.id === selectedId ? carrierAccountNum : "",
                isPreferred: editingAddress.isPreferred,
              }}
              submitLabel={
                editingAddress.id === selectedId
                  ? "Save & Use Address"
                  : "Save Address"
              }
              onSubmit={(data) => {
                const updated: SavedAddress = {
                  ...editingAddress,
                  name: data.company || editingAddress.name,
                  addr: formatAddr(data),
                  street: data.street,
                  city: data.city,
                  state: data.state,
                  zip: data.zip,
                  phone: data.phone,
                  country: data.country,
                  isPreferred: data.isPreferred,
                };
                setAddresses((prev) =>
                  prev.map((a) => {
                    if (a.id === updated.id) return updated;
                    return data.isPreferred
                      ? { ...a, isPreferred: false }
                      : a;
                  }),
                );
                if (editingAddress.id === selectedId) {
                  onSelect(updated.name, updated.addr);
                  onSaveCarrierAccount(
                    data.shippingMethod,
                    data.carrierAccountNum,
                  );
                  setEditingId(null);
                  onClose();
                } else {
                  setEditingId(null);
                  setView("select");
                }
              }}
              onCancel={() => {
                setEditingId(null);
                setView("select");
              }}
            />
          </div>
        )}

        {/* View: Add new */}
        {view === "add" && (
          <div className={s.caBody}>
            <button
              onClick={() => setView("select")}
              className={s.caBackLink}
            >
              <ArrowIcon direction="left" color="#0062bd" />
              Back to saved addresses
            </button>
            <h3 className={s.caAddTitle}>Add new address</h3>
            {addresses.length === 0 && (
              <div className={s.caErrorRow} style={{ marginBottom: 12 }}>
                <span className={s.caErrorIcon}>!</span>
                An address is required to continue.
              </div>
            )}
            <AddrForm
              submitLabel="Add Address"
              onSubmit={(data) => {
                const wasEmpty = addresses.length === 0;
                const newId =
                  addresses.reduce((max, a) => Math.max(max, a.id), 0) + 1;
                const newAddr: SavedAddress = {
                  id: newId,
                  name: data.company || "New Address",
                  addr: formatAddr(data),
                  street: data.street,
                  city: data.city,
                  state: data.state,
                  zip: data.zip,
                  phone: data.phone,
                  country: data.country,
                  recentValue: Date.now(),
                  isPreferred: data.isPreferred || wasEmpty,
                };
                setAddresses((prev) => {
                  const next = newAddr.isPreferred
                    ? prev.map((a) => ({ ...a, isPreferred: false }))
                    : prev;
                  return [...next, newAddr];
                });
                if (wasEmpty) {
                  setSelectedId(newAddr.id);
                  onSelect(newAddr.name, newAddr.addr);
                  onSaveCarrierAccount(
                    data.shippingMethod,
                    data.carrierAccountNum,
                  );
                  onClose();
                } else {
                  setView("select");
                }
              }}
              onCancel={() => setView("select")}
            />
          </div>
        )}

        {/* View: Remove confirmation */}
        {view === "remove" && removingAddress && (
          <div className={s.caBody}>
            <div className={s.caRemoveWrap}>
              <div className={s.caRemoveIconWrap}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ width: 26, height: 26 }}
                >
                  <path
                    d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14ZM10 11v6M14 11v6"
                    stroke="#dd0000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <p className={s.caRemoveTitle}>Remove this address?</p>
              <div className={s.caCurrentName}>{removingAddress.name}</div>
              <div className={s.caRemoveAddr}>{removingAddress.addr}</div>
              <p className={s.caRemoveText}>
                This address will be removed from your saved addresses. You
                can always add it again later if needed.
              </p>
            </div>
            <div className={s.caFormFooter}>
              <button
                onClick={() => {
                  setRemovingId(null);
                  setView("select");
                }}
                className={s.modalCancelBtn}
              >
                Cancel
              </button>
              <button
                onClick={handleRemoveConfirm}
                className={s.caRemoveConfirmBtn}
              >
                Remove Address
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function PanelHeader({
  isOpen,
  isCompleted,
  stepNum,
  title,
  summary,
  onEdit,
  onClick,
}: {
  isOpen: boolean;
  isCompleted: boolean;
  stepNum: number;
  title: string;
  summary?: React.ReactNode;
  onEdit?: () => void;
  onClick?: () => void;
}) {
  const headerClass = isCompleted
    ? s.panelHeaderCompleted
    : isOpen
      ? s.panelHeaderOpen
      : s.panelHeaderPending;
  return (
    <div
      onClick={!isOpen && !isCompleted ? onClick : undefined}
      className={[s.panelHeader, headerClass].join(" ")}
    >
      <div className={s.panelHeaderLeft}>
        {isCompleted ? (
          <svg className={s.checkIcon} fill="none" viewBox="0 0 24 24">
            <path d={svgPaths.p1e46b900} fill="#059669" />
          </svg>
        ) : (
          <span className={s.panelStepLabel}>Step {stepNum}:</span>
        )}
        <span className={s.panelTitle}>{title}</span>
        {summary && (
          <>
            <span className={s.panelSummarySep}>|</span>
            {summary}
          </>
        )}
      </div>
      {isCompleted && !isOpen && onEdit && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEdit();
          }}
          className={s.editBtn}
        >
          <svg className={s.editBtnIcon} fill="none" viewBox="0 0 14 14">
            <path
              d={svgPaths.p1c2f1080}
              stroke="#0062BD"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.16667"
            />
          </svg>
          Edit
        </button>
      )}
    </div>
  );
}

function Panel1Content({
  onNext,
  onChangeAddress,
  onEditAddress,
  selectedAddr,
  carrierMethod,
  carrierAccountNum,
}: {
  onNext: () => void;
  onChangeAddress: () => void;
  onEditAddress: () => void;
  selectedAddr: { name: string; addr: string; phone: string } | null;
  carrierMethod: string;
  carrierAccountNum: string;
}) {
  return (
    <div className={s.panel1Content}>
      <div className={s.selectedAddrSection}>
        <div className={s.selectedAddrHeader}>
          <span className={s.selectedAddrLabel}>Selected Address</span>
          <button onClick={onChangeAddress} className={s.selectNewAddrBtn}>
            <svg className={s.selectNewAddrIcon} fill="none" viewBox="0 0 14 14">
              <path
                d="M7 2.33333V11.6667M11.6667 7H2.33333"
                stroke="#0062BD"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.45833"
              />
            </svg>
            Select New Address
          </button>
        </div>
        {selectedAddr ? (
          <div className={s.addrCard}>
            <div className={s.addrCardRow}>
              <div className={s.addrCardColLeft}>
                <div className={s.addrCardName}>{selectedAddr.name}</div>
                {selectedAddr.addr.split("\n").map((line, i) => (
                  <div key={i} className={s.addrCardLine}>
                    {line}
                  </div>
                ))}
                <div className={s.addrCardPhone}>
                  <span className={s.addrCardPhoneLabel}>Phone</span>{" "}
                  {selectedAddr.phone}
                </div>
              </div>
              <div className={s.addrCardColRight}>
                <div className={s.addrCardMeta}>
                  <span className={s.addrCardMetaBold}>
                    Carrier Account Number:
                  </span>{" "}
                  {carrierAccountNum ? maskAccount(carrierAccountNum) : "—"}
                </div>
                <div className={s.addrCardMetaDivider}>
                  <span className={s.addrCardMetaBold}>
                    Default Shipping Method:
                  </span>{" "}
                  {METHOD_LABELS[carrierMethod] ?? "—"}
                </div>
                <div className={s.addrCardFieldRow}>
                  <label className={s.addrCardFieldLabel}>Department:</label>
                  <input
                    className={s.addrCardInput}
                    defaultValue="UPS Third Party Billing"
                  />
                </div>
                <div className={s.addrCardFieldRowMargin}>
                  <label className={s.addrCardFieldLabel}>Attention:</label>
                  <input
                    className={s.addrCardInput}
                    defaultValue="John Smith"
                  />
                </div>
              </div>
              <div className={s.addrCardActions}>
                <button
                  onClick={onEditAddress}
                  className={s.selectNewAddrBtn}
                >
                  <svg
                    className={s.editBtnIcon}
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      d={svgPaths.p1c2f1080}
                      stroke="#0062BD"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.16667"
                    />
                  </svg>{" "}
                  Edit
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className={s.addrEmptyCard}>
            <div className={s.addrEmptyIconWrap}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                style={{ width: 26, height: 26 }}
              >
                <path
                  d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z"
                  stroke="#5b7a99"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="10" r="3" stroke="#5b7a99" strokeWidth="1.6" />
              </svg>
            </div>
            <p className={s.addrEmptyTitle}>No shipping address selected</p>
            <p className={s.addrEmptyText}>
              You don't have any saved addresses. Please add a shipping
              address to continue.
            </p>
            <button onClick={onChangeAddress} className={s.addrEmptyAddBtn}>
              <svg viewBox="0 0 14 14" fill="none" style={{ width: 14, height: 14 }}>
                <path
                  d="M7 2.33333V11.6667M11.6667 7H2.33333"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.45833"
                />
              </svg>
              Add Shipping Address
            </button>
          </div>
        )}
      </div>
      <div className={s.panel1Footer}>
        <button className={s.backBtn}>
          <ArrowIcon direction="left" color="#333" />
          Back to Cart
        </button>
        <button
          onClick={selectedAddr ? onNext : undefined}
          disabled={!selectedAddr}
          className={[
            s.nextBtn,
            !selectedAddr ? s.nextBtnDisabled : "",
          ].join(" ")}
        >
          Next Step: Shipping Options
          <ArrowIcon direction="right" color="#fff" />
        </button>
      </div>
    </div>
  );
}

function Panel2Content({
  onNext,
  defaultCarrierMethod,
  defaultAccountNumber,
  onAccountChange,
}: {
  onNext: () => void;
  defaultCarrierMethod: string;
  defaultAccountNumber: string;
  onAccountChange: (method: string, account: string) => void;
}) {
  const [fulfillment, setFulfillment] = useState<"split" | "complete">(
    "complete",
  );
  const [shippingType, setShippingType] = useState<"billed" | "prepaid">(
    defaultCarrierMethod === "prepaid" ? "prepaid" : "billed",
  );
  const [speedMethod, setSpeedMethod] = useState("ground");
  const [speedSelectError, setSpeedSelectError] = useState(false);
  const [savedAccount, setSavedAccount] = useState<{
    method: string;
    account: string;
  } | null>(
    defaultAccountNumber
      ? { method: defaultCarrierMethod, account: defaultAccountNumber }
      : null,
  );
  // accountForm: null = showing saved pill (or add form if no saved account yet), "edit" = editing existing
  const [accountForm, setAccountForm] = useState<"edit" | null>(null);
  const [formCarrier, setFormCarrier] = useState("");
  const [formAccountNum, setFormAccountNum] = useState("");
  const [carrierSelectError, setCarrierSelectError] = useState(false);
  const [accountNumError, setAccountNumError] = useState(false);

  function carrierBadgeFor(method: string) {
    if (method.startsWith("fedex")) return "fedex";
    if (method.startsWith("ups")) return "ups";
    return null;
  }

  function openEdit() {
    if (savedAccount) {
      setFormCarrier(savedAccount.method);
      setFormAccountNum(savedAccount.account);
      setAccountForm("edit");
    }
  }

  function clearAccountErrors() {
    setCarrierSelectError(false);
    setAccountNumError(false);
  }

  function cancelForm() {
    if (savedAccount) {
      setAccountForm(null);
      setFormCarrier("");
      setFormAccountNum("");
      clearAccountErrors();
      return;
    }
    if (!formCarrier) {
      setCarrierSelectError(true);
      setAccountNumError(false);
      return;
    }
    if (!formAccountNum.trim()) {
      setAccountNumError(true);
      setCarrierSelectError(false);
      return;
    }
    clearAccountErrors();
  }

  function saveForm() {
    if (formCarrier && formAccountNum.trim()) {
      const saved = { method: formCarrier, account: formAccountNum.trim() };
      setSavedAccount(saved);
      onAccountChange(saved.method, saved.account);
      setAccountForm(null);
      setFormCarrier("");
      setFormAccountNum("");
      clearAccountErrors();
    }
  }

  function handleNext() {
    let hasError = false;

    if (!speedMethod) {
      setSpeedSelectError(true);
      hasError = true;
    } else {
      setSpeedSelectError(false);
    }

    const editingAccount =
      shippingType === "billed" && (!savedAccount || accountForm === "edit");

    if (editingAccount) {
      if (!formCarrier) {
        setCarrierSelectError(true);
        hasError = true;
      } else {
        setCarrierSelectError(false);
      }
      if (!formAccountNum.trim()) {
        setAccountNumError(true);
        hasError = true;
      } else {
        setAccountNumError(false);
      }
    }

    if (hasError) return;

    if (editingAccount) {
      const saved = { method: formCarrier, account: formAccountNum.trim() };
      setSavedAccount(saved);
      onAccountChange(saved.method, saved.account);
      setAccountForm(null);
      setFormCarrier("");
      setFormAccountNum("");
    }
    clearAccountErrors();
    onNext();
  }
  return (
    <div className={s.panel2Content}>
      <div className={s.shippingOptionsBox}>
        <div className={s.shippingOptionsInner}>
          <div className={s.fulfillmentCol}>
            <div className={s.sectionNumberRow}>
              <span className={s.sectionNumber}>1</span>
              <span className={s.sectionTitle}>
                SELECT FULFILLMENT STRATEGY
              </span>
            </div>
            <div className={s.fulfillmentCards}>
              <div
                onClick={() => setFulfillment("complete")}
                className={[
                  s.fulfillmentCard,
                  fulfillment === "complete"
                    ? s.fulfillmentCardActive
                    : s.fulfillmentCardInactive,
                ].join(" ")}
              >
                <div className={s.fulfillmentCardHeader}>
                  <div className={s.fulfillmentCardLeft}>
                    <div
                      className={[
                        s.radioCircle,
                        fulfillment === "complete" ? s.radioCircleActive : "",
                      ].join(" ")}
                    >
                      {fulfillment === "complete" && (
                        <div className={s.radioDot} />
                      )}
                    </div>
                    <span className={s.fulfillmentCardLabel}>
                      Ship Complete
                    </span>
                  </div>
                  <span className={s.badgeSaveMoney}>SAVE MONEY</span>
                </div>
                <p className={s.fulfillmentCardDesc}>
                  Items are shipped together on the latest available date from
                  multiple warehouses.
                </p>
              </div>
              <div
                onClick={() => setFulfillment("split")}
                className={[
                  s.fulfillmentCard,
                  fulfillment === "split"
                    ? s.fulfillmentCardActive
                    : s.fulfillmentCardInactive,
                ].join(" ")}
              >
                <div className={s.fulfillmentCardHeader}>
                  <div className={s.fulfillmentCardLeft}>
                    <div
                      className={[
                        s.radioCircle,
                        fulfillment === "split" ? s.radioCircleActive : "",
                      ].join(" ")}
                    >
                      {fulfillment === "split" && (
                        <div className={s.radioDot} />
                      )}
                    </div>
                    <span
                      className={[
                        s.fulfillmentCardLabel,
                        fulfillment === "split"
                          ? s.fulfillmentCardLabelActive
                          : "",
                      ].join(" ")}
                    >
                      Split Shipment
                    </span>
                  </div>
                  <span className={s.badgeSaveTime}>SAVE TIME</span>
                </div>
                <p className={s.fulfillmentCardDesc}>
                  Items are shipped as soon as they are available, grouped by
                  individual ship date.
                </p>
              </div>
            </div>
          </div>
          <div className={s.shippingMethodCol}>
            <div className={s.sectionNumberRow}>
              <span className={s.sectionNumber}>2</span>
              <span className={s.sectionTitle}>SELECT SHIPPING OPTIONS</span>
            </div>
            <div className={s.shippingMethodBox}>
              {/* Toggle */}
              <div className={s.shippingToggle}>
                <button
                  onClick={() => {
                    setShippingType("prepaid");
                    setAccountForm(null);
                    clearAccountErrors();
                  }}
                  className={[
                    s.shippingToggleBtn,
                    shippingType === "prepaid" ? s.shippingToggleBtnActive : "",
                  ].join(" ")}
                >
                  Prepaid Shipping
                </button>
                <button
                  onClick={() => {
                    setShippingType("billed");
                    setAccountForm(null);
                    clearAccountErrors();
                  }}
                  className={[
                    s.shippingToggleBtn,
                    shippingType === "billed" ? s.shippingToggleBtnActive : "",
                  ].join(" ")}
                >
                  Carrier Account
                </button>
              </div>

              {/* Speed dropdown — same for both tabs */}
              <select
                value={speedMethod}
                onChange={(e) => {
                  setSpeedMethod(e.target.value);
                  if (speedSelectError) setSpeedSelectError(false);
                }}
                className={[
                  s.shippingSelect,
                  speedSelectError ? s.caInputError : "",
                ].join(" ")}
              >
                <option value="">--Please select--</option>
                <option value="ground">Ground (2-4 business days)</option>
                <option value="second-day">Second Day</option>
                <option value="next-day">Next Day</option>
                <option value="warehouse">Warehouse Pickup</option>
              </select>

              {/* Carrier account area — only on Carrier Account tab */}
              {shippingType === "billed" &&
                (accountForm === "edit" || !savedAccount ? (
                  /* Add / Edit form */
                  <>
                    <p className={s.carrierFormTitle}>
                      {accountForm === "edit"
                        ? "Edit carrier account"
                        : "Add carrier account"}
                      {!savedAccount && (
                        <span className={s.carrierFormRequired}>
                          {" "}
                          (required)
                        </span>
                      )}
                    </p>
                    <select
                      value={formCarrier}
                      onChange={(e) => {
                        setFormCarrier(e.target.value);
                        if (carrierSelectError) setCarrierSelectError(false);
                      }}
                      className={[
                        s.shippingSelect,
                        carrierSelectError ? s.caInputError : "",
                      ].join(" ")}
                    >
                      <option value="">--Select carrier--</option>
                      <option value="ups-collect">UPS Collect</option>
                      <option value="ups-third-party">
                        UPS Third Party Billing
                      </option>
                      <option value="fedex-bill-recipient">
                        FedEx Bill Recipient
                      </option>
                      <option value="fedex-third-party">
                        FedEx Third Party Billing
                      </option>
                    </select>
                    {carrierSelectError && (
                      <div className={s.caErrorRow}>
                        <span className={s.caErrorIcon}>!</span>
                        Please add a carrier account or switch to Prepaid
                        Shipping.
                      </div>
                    )}
                    {formCarrier && (
                      <>
                        <input
                          value={formAccountNum}
                          onChange={(e) => {
                            setFormAccountNum(e.target.value);
                            if (accountNumError) setAccountNumError(false);
                          }}
                          className={[
                            s.carrierAccountInput,
                            accountNumError ? s.caInputError : "",
                          ].join(" ")}
                          placeholder="Enter account number"
                        />
                        {accountNumError && (
                          <div className={s.caErrorRow}>
                            <span className={s.caErrorIcon}>!</span>
                            Please enter an account number
                          </div>
                        )}
                      </>
                    )}
                    <div className={s.carrierCtaRow}>
                      <button
                        onClick={cancelForm}
                        className={s.carrierCtaCancel}
                      >
                        Cancel
                      </button>
                      <button
                        onClick={saveForm}
                        className={s.carrierCtaSave}
                        disabled={!formCarrier || !formAccountNum.trim()}
                      >
                        Save Account
                      </button>
                    </div>
                  </>
                ) : (
                  /* Saved account pill */
                  <div className={s.carrierPill}>
                    {carrierBadgeFor(savedAccount.method) === "fedex" ? (
                      <span className={s.carrierBadgeFedEx}>
                        <span style={{ color: "#fff" }}>Fed</span>
                        <span style={{ color: "#f60" }}>Ex</span>
                      </span>
                    ) : (
                      <span className={s.carrierBadgeUps}>UPS</span>
                    )}
                    <div className={s.carrierPillAcct}>
                      <span className={s.carrierPillLabel}>Acct:</span>
                      <span className={s.carrierPillNumber}>
                        {maskAccount(savedAccount.account)}
                      </span>
                    </div>
                    <button onClick={openEdit} className={s.carrierEditBtn}>
                      <svg
                        className={s.editBtnIcon}
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          d={svgPaths.p1c2f1080}
                          stroke="#0062BD"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.16667"
                        />
                      </svg>
                      Edit
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className={s.panel2FooterTop}>
        <button className={s.backBtn}>
          <ArrowIcon direction="left" color="#333" />
          Previous Step
        </button>
        <button onClick={handleNext} className={s.nextBtn}>
          Next Step: Payment Method
          <ArrowIcon direction="right" color="#fff" />
        </button>
      </div>

      {fulfillment === "split" ? (
        <>
          <PackageTable
            packageLabel="Package 1 of 2"
            shipsFrom="Elk Grove, IL (USA)"
            shipsOn="Monday, August 31st, 2026"
            items={[
              {
                img: imgB6000ZZ,
                alias: "",
                partNum: "B6000ZZ",
                name: "Deep Groove Ball Bearing - Double Shielded",
                desc: "Deep Groove Ball Bearings (19g) (CHINA)",
                brand: "MISUMI",
                unitPrice: "$6.84",
                qty: 1,
                subtotal: "$6.84",
                location: "USA Elk Grove, IL",
                shipsOn: "08/31/2026",
              },
              {
                img: imgBCAS32,
                alias: "",
                partNum: "BCAS32",
                name: "Ball Catches",
                desc: "BALL, CATCH (11g) (CHINA)",
                brand: "MISUMI",
                unitPrice: "$40.39",
                qty: 1,
                subtotal: "$40.39",
                location: "USA Elk Grove, IL",
                shipsOn: "08/31/2026",
              },
            ]}
          />
          <PackageTable
            packageLabel="Package 2 of 2"
            shipsFrom="Cincinnati, OH (USA)"
            shipsOn="Monday, September 2nd, 2026"
            items={[
              {
                img: imgMFB2510,
                alias: "",
                partNum: "MFB25-10",
                name: "Straight Linear Plain Bearings - Metallic, Graphite Impregnated",
                desc: "Brass, LD F7, Standard Wall, Metric",
                brand: "MISUMI",
                unitPrice: "$14.31",
                qty: 1,
                subtotal: "$14.31",
                location: "USA West Carrollton, OH",
                shipsOn: "09/02/2026",
              },
            ]}
          />
        </>
      ) : (
        <PackageTable
          packageLabel="All Items"
          shipsFrom=""
          shipsOn="Monday, September 2nd, 2026"
          items={[
            {
              img: imgB6000ZZ,
              alias: "",
              partNum: "B6000ZZ",
              name: "Deep Groove Ball Bearing - Double Shielded",
              desc: "Deep Groove Ball Bearings (19g) (CHINA)",
              brand: "MISUMI",
              unitPrice: "$6.84",
              qty: 1,
              subtotal: "$6.84",
              location: "USA Elk Grove, IL",
              shipsOn: "08/31/2026",
            },
            {
              img: imgBCAS32,
              alias: "",
              partNum: "BCAS32",
              name: "Ball Catches",
              desc: "BALL, CATCH (11g) (CHINA)",
              brand: "MISUMI",
              unitPrice: "$40.39",
              qty: 1,
              subtotal: "$40.39",
              location: "USA Elk Grove, IL",
              shipsOn: "08/31/2026",
            },
            {
              img: imgMFB2510,
              alias: "",
              partNum: "MFB25-10",
              name: "Straight Linear Plain Bearings - Metallic, Graphite Impregnated",
              desc: "Brass, LD F7, Standard Wall, Metric",
              brand: "MISUMI",
              unitPrice: "$14.31",
              qty: 1,
              subtotal: "$14.31",
              location: "USA West Carrollton, OH",
              shipsOn: "09/02/2026",
            },
          ]}
        />
      )}
    </div>
  );
}

function PackageTable({
  packageLabel,
  shipsFrom,
  shipsOn,
  items,
}: {
  packageLabel: string;
  shipsFrom: string;
  shipsOn: string;
  items: {
    img: string;
    alias: string;
    partNum: string;
    name: string;
    desc: string;
    brand: string;
    unitPrice: string;
    qty: number;
    subtotal: string;
    location: string;
    shipsOn: string;
  }[];
}) {
  return (
    <div className={s.packageTableWrap}>
      <div className={s.packageTableHeader}>
        <span className={s.packageLabel}>{packageLabel}</span>
        {shipsFrom && (
          <>
            <span className={s.packageMetaText}>
              Ships from:{" "}
              <strong
                style={{
                  fontFamily: '"Roboto:Bold", sans-serif',
                  fontWeight: 700,
                }}
              >
                {shipsFrom}
              </strong>
            </span>
            <span className={s.packageMetaSep}>|</span>
          </>
        )}
        <span className={s.packageMetaText}>
          Ships on:{" "}
          <strong
            style={{ fontFamily: '"Roboto:Bold", sans-serif', fontWeight: 700 }}
          >
            {shipsOn}
          </strong>
        </span>
      </div>
      <div className={s.packageTable}>
        <div className={s.packageTableHeadRow}>
          {[
            "Product Details",
            "Unit Price (USD)",
            "Quantity",
            "Subtotal (USD)",
            "(Shipping Location)\nShips On",
            "",
          ].map((h, i) => (
            <div
              key={i}
              className={
                i < 5 ? s.packageTableHeadCell : s.packageTableHeadCellLast
              }
              style={{ whiteSpace: "pre-line" }}
            >
              {h}
            </div>
          ))}
        </div>
        {items.map((item, i) => (
          <div key={i} className={s.packageTableRow}>
            <div className={s.packageTableCellProduct}>
              {item.img ? (
                <img src={item.img} alt="" className={s.productThumb} />
              ) : (
                <div className={s.productThumbPlaceholder} />
              )}
              <div className={s.productDetails}>
                <input
                  className={s.productAliasInput}
                  placeholder="Part Number Alias (optional)"
                />
                <span className={s.productPartNum}>{item.partNum}</span>
                <span className={s.productName}>{item.name}</span>
                <span className={s.productDesc}>{item.desc}</span>
                <span className={s.productBrand}>{item.brand}</span>
                <span className={s.stockBadge}>Stock</span>
              </div>
            </div>
            <div className={s.packageTableCellPrice}>{item.unitPrice}</div>
            <div className={s.packageTableCellQty}>{item.qty}</div>
            <div className={s.packageTableCellSubtotal}>{item.subtotal}</div>
            <div className={s.packageTableCellShipping}>
              <span className={s.shippingLocation}>({item.location})</span>
              <span className={s.shippingDate}>{item.shipsOn}</span>
              <div className={s.changeDateRow}>
                <span className={s.changeDateText}>Change Ship Date</span>
                <div className={s.calendarBtn}>
                  <span style={{ color: "#9ca3af", fontSize: "16px" }}>📅</span>
                </div>
              </div>
            </div>
            <div className={s.packageTableCellDelete}>
              <button className={s.deleteBtn}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CardBadges() {
  return (
    <div className={s.cardBadges}>
      <div className={s.badgeVisa}>VISA</div>
      <div className={s.badgeMastercard}>
        <div className={s.mastercardCircles}>
          <div className={s.mastercardRed} />
          <div className={s.mastercardYellow} />
        </div>
        <span className={s.mastercardText}>Mastercard</span>
      </div>
      <div className={s.badgeAmex}>AMEX</div>
    </div>
  );
}

function Panel3Content({
  onComplete,
  onDisable,
}: {
  onComplete: () => void;
  onDisable: () => void;
}) {
  const [method, setMethod] = useState<"po" | "card">("po");
  const [poNumber, setPoNumber] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const poFilled = poNumber.trim().length > 0;
  const cardFilled = cardNumber.trim().length > 0;
  function switchMethod(m: "po" | "card") {
    setMethod(m);
    setPoNumber("");
    setCardNumber("");
    onDisable();
  }
  function handlePoChange(val: string) {
    setPoNumber(val);
    if (val.trim().length > 0) onComplete();
    else onDisable();
  }
  function handleCardChange(val: string) {
    setCardNumber(val);
    if (val.trim().length > 0) onComplete();
    else onDisable();
  }
  return (
    <div className={s.panel3Content}>
      <div className={s.panel3Body}>
        <div
          className={[
            s.paymentCard,
            method === "po" ? s.paymentCardActive : s.paymentCardInactive,
          ].join(" ")}
          onClick={method !== "po" ? () => switchMethod("po") : undefined}
        >
          <div className={s.paymentCardInner}>
            <div
              className={
                method === "po" ? s.paymentRadioRowBordered : s.paymentRadioRow
              }
            >
              <button
                onClick={() => switchMethod("po")}
                className={s.paymentRadioBtn}
              >
                <div
                  className={[
                    s.radioCircle,
                    method === "po" ? s.radioCircleActive : "",
                  ].join(" ")}
                >
                  {method === "po" && <div className={s.radioDot} />}
                </div>
                <span className={s.paymentOptionTitle}>
                  Pay on Terms (Corporate PO Invoicing)
                </span>
              </button>
            </div>
            {method === "po" && (
              <div className={s.poSection}>
                <div className={s.poLabelGroup}>
                  <label className={s.poLabel}>PURCHASE ORDER #</label>
                  <span className={s.poRequiredText}>
                    * Required for Pay on Terms
                  </span>
                </div>
                <div className={s.poInputWrap}>
                  <input
                    value={poNumber}
                    onChange={(e) => handlePoChange(e.target.value)}
                    placeholder="e.g. PO-98421-B"
                    className={s.poInput}
                  />
                  {poFilled && (
                    <svg
                      className={s.inputCheckIcon}
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="7" fill="#0062bd" />
                      <path
                        d="M5 8.5l2 2 4-4"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className={[
            s.paymentCard,
            method === "card" ? s.paymentCardActive : s.paymentCardInactive,
          ].join(" ")}
          onClick={method !== "card" ? () => switchMethod("card") : undefined}
        >
          <div className={s.paymentCardInnerCard}>
            <div className={s.paymentCardTopRow}>
              <button
                onClick={() => switchMethod("card")}
                className={s.paymentRadioBtn}
              >
                <div
                  className={[
                    s.radioCircle,
                    method === "card" ? s.radioCircleActive : "",
                  ].join(" ")}
                >
                  {method === "card" && <div className={s.radioDot} />}
                </div>
                <div className={s.paymentCardTitleCol}>
                  <span className={s.paymentCardTitle}>
                    Pay with Credit Card
                  </span>
                  <span className={s.paymentCardSubtitle}>
                    {method === "card"
                      ? "(Immediate electronic authorization)"
                      : "Selecting Credit Card will expand card entry fields upon selection."}
                  </span>
                </div>
              </button>
              <CardBadges />
            </div>
            {method === "card" && (
              <>
                <div className={s.cardFormWrap}>
                  <div className={s.cardFormHeader}>
                    <div className={s.cardFormDivider} />
                    <h3 className={s.cardFormTitle}>
                      Enter your credit card information
                    </h3>
                    <p className={s.cardFormSubtitle}>
                      Please enter a new credit card number.{" "}
                      <span className={s.cardFormRequired}>
                        * required fields
                      </span>
                    </p>
                  </div>
                  <div className={s.cardFormTable}>
                    <div className={s.cardFormRow}>
                      <div className={s.cardFormLabel}>
                        <span className={s.cardFormLabelText}>
                          Amount (USD){" "}
                          <span className={s.cardFormLabelRequired}>*</span>
                        </span>
                      </div>
                      <div className={s.cardFormValue}>
                        <span className={s.cardFormValueText}>61.54</span>
                      </div>
                    </div>
                    <div className={s.cardFormRow}>
                      <div className={s.cardFormLabel}>
                        <span className={s.cardFormLabelText}>
                          Card Number{" "}
                          <span className={s.cardFormLabelRequired}>*</span>
                        </span>
                      </div>
                      <div className={s.cardFormValue}>
                        <div className={s.cardInputRelative}>
                          <input
                            value={cardNumber}
                            onChange={(e) => handleCardChange(e.target.value)}
                            className={s.cardInput}
                          />
                          {cardFilled ? (
                            <svg
                              className={s.cardInputIcon}
                              fill="none"
                              viewBox="0 0 16 16"
                            >
                              <circle cx="8" cy="8" r="7" fill="#0062bd" />
                              <path
                                d="M5 8.5l2 2 4-4"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          ) : (
                            <svg
                              fill="none"
                              viewBox="0 0 16 16"
                              className={s.cardInputIcon}
                            >
                              <path
                                d={svgPathsGol.p3b28e600}
                                stroke="#4B5563"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.2"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className={s.cardFormRow}>
                      <div className={s.cardFormLabel}>
                        <span className={s.cardFormLabelText}>
                          Expiration{" "}
                          <span className={s.cardFormLabelRequired}>*</span>
                        </span>
                      </div>
                      <div className={s.cardFormValueBordered}>
                        <div className={s.expiryDropdown}>
                          <span className={s.expiryDropdownText}>
                            September
                          </span>
                          <svg
                            fill="none"
                            viewBox="0 0 21 21"
                            className={s.cardChevron}
                          >
                            <path
                              d="M6.3 8.4L10.5 12.6L14.7 8.4"
                              stroke="#6B7280"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.575"
                            />
                          </svg>
                        </div>
                        <span className={s.expirySlash}>/</span>
                        <div className={s.expiryDropdown}>
                          <span className={s.expiryDropdownText}>2026</span>
                          <svg
                            fill="none"
                            viewBox="0 0 21 21"
                            className={s.cardChevron}
                          >
                            <path
                              d="M6.3 8.4L10.5 12.6L14.7 8.4"
                              stroke="#6B7280"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.575"
                            />
                          </svg>
                        </div>
                        <span className={s.expiryHint}>(mm/yyyy)</span>
                      </div>
                      <div
                        className={s.cardFormLabel}
                        style={{ width: "125px" }}
                      >
                        <span className={s.cardFormLabelText}>
                          Name on Card{" "}
                          <span className={s.cardFormLabelRequired}>*</span>
                        </span>
                      </div>
                      <div className={s.cardFormValue}>
                        <div className={s.nameOnCardDisplay}>
                          <p className={s.nameOnCardText}>
                            Acme Purchasing Dept
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={s.cardFormRow}>
                      <div className={s.cardFormLabel}>
                        <span className={s.cardFormLabelText}>
                          CVV/CVC{" "}
                          <span className={s.cardFormLabelRequired}>*</span>
                        </span>
                      </div>
                      <div
                        className={s.cardFormValue}
                        style={{ gap: "0.75rem" }}
                      >
                        <div className={s.cvvDisplay}>
                          <p className={s.cvvText}>888</p>
                        </div>
                        <span className={s.cvvHint}>
                          The CVV/CVC often appears above the last few digits of
                          the credit card number.
                        </span>
                      </div>
                    </div>
                    <div className={s.cardFormRow}>
                      <div className={s.cardFormLabel}>
                        <span className={s.cardFormLabelText}>
                          Country{" "}
                          <span className={s.cardFormLabelRequired}>*</span>
                        </span>
                      </div>
                      <div className={s.cardFormValueWide}>
                        <div className={s.countryDropdown}>
                          <span className={s.countryText}>United States</span>
                          <svg
                            fill="none"
                            viewBox="0 0 21 21"
                            className={s.cardChevron}
                          >
                            <path
                              d="M6.3 8.4L10.5 12.6L14.7 8.4"
                              stroke="#6B7280"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.575"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className={s.cardFormLabel}>
                        <span className={s.cardFormLabelText}>
                          ZIP/Postal Code{" "}
                          <span className={s.cardFormLabelRequired}>*</span>
                        </span>
                      </div>
                      <div className={s.cardFormValue}>
                        <div className={s.zipDisplay}>
                          <p className={s.fieldText}>60173</p>
                        </div>
                      </div>
                    </div>
                    <div className={s.cardFormRow}>
                      <div className={s.cardFormLabel}>
                        <span className={s.cardFormLabelText}>
                          Billing Address 1{" "}
                          <span className={s.cardFormLabelRequired}>*</span>
                        </span>
                      </div>
                      <div className={s.cardFormValueWide}>
                        <div className={s.addressDisplay}>
                          <p className={s.fieldText}>1475 E Woodfiled Rd</p>
                        </div>
                      </div>
                      <div className={s.cardFormLabel}>
                        <span className={s.cardFormLabelText}>
                          Billing Address 2
                        </span>
                      </div>
                      <div className={s.cardFormValue}>
                        <div className={s.addressDisplay}>
                          <p className={s.fieldText}>Ste 1300</p>
                        </div>
                      </div>
                    </div>
                    <div className={s.cardFormRow}>
                      <div className={s.cardFormLabel}>
                        <span className={s.cardFormLabelText}>
                          City{" "}
                          <span className={s.cardFormLabelRequired}>*</span>
                        </span>
                      </div>
                      <div className={s.cardFormValueWide376}>
                        <div className={s.addressDisplay}>
                          <p className={s.fieldText}>Schaumburg</p>
                        </div>
                      </div>
                      <div className={s.cardFormLabel}>
                        <span className={s.cardFormLabelText}>
                          State/Province{" "}
                          <span className={s.cardFormLabelRequired}>*</span>
                        </span>
                      </div>
                      <div className={s.cardFormValue}>
                        <div className={s.stateDropdown}>
                          <span className={s.fieldText}>Illinois</span>
                          <svg
                            fill="none"
                            viewBox="0 0 21 21"
                            className={s.cardChevron}
                          >
                            <path
                              d="M6.3 8.4L10.5 12.6L14.7 8.4"
                              stroke="#6B7280"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.575"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={s.cardPoRefRow}>
                  <span className={s.cardPoRefLabel}>
                    Purchase Order / Job Reference # (Optional for Credit Card):
                  </span>
                  <div className={s.cardPoRefValue}>
                    <p className={s.cardPoRefText}>PO-98421-B</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className={s.panel3Footer}>
        <button className={s.backBtn}>
          <ArrowIcon direction="left" color="#333" />
          Previous Step
        </button>
      </div>
    </div>
  );
}

function OrderSidebar({ orderEnabled }: { orderEnabled: boolean }) {
  return (
    <div className={s.sidebar}>
      <div className={s.sidebarBox}>
        <div className={s.sidebarShippingRow}>
          <span className={s.sidebarShippingText}>
            Standard Shipping <span style={{ color: "#000000" }}>2</span>{" "}
            Item(s)
          </span>
        </div>
        <div className={s.sidebarTotalRow}>
          <span className={s.sidebarTotal}>
            $8.17 <span style={{ fontSize: "24px" }}>(USD)</span>
          </span>
        </div>
        <div className={s.sidebarLineItems}>
          <div className={s.sidebarLineItem}>
            <span className={s.sidebarLineLabel}>Subtotal</span>
            <span className={s.sidebarLineValue}>$7.42 (USD)</span>
          </div>
          <div className={s.sidebarLineItem}>
            <span className={s.sidebarLineLabel}>Discount</span>
            <span className={s.sidebarLineValue}>- $0.44 (USD)</span>
          </div>
          <div className={s.sidebarLineShipping}>
            <div className={s.sidebarShippingLabel}>
              <div>Shipping</div>
              <div
                style={{
                  fontFamily: '"Roboto:Regular", sans-serif',
                  fontWeight: 400,
                }}
              >
                (Total Weight)
              </div>
            </div>
            <div className={s.sidebarShippingValue}>
              <div>$0.00 (USD)</div>
              <div
                style={{
                  fontFamily: '"Roboto:Regular", sans-serif',
                  fontWeight: 400,
                }}
              >
                (2g)
              </div>
            </div>
          </div>
          <div className={s.sidebarLineItemLast}>
            <span className={s.sidebarLineLabel}>Tax</span>
            <span className={s.sidebarLineValue}>$0.75 (USD)</span>
          </div>
        </div>
        <div className={s.promoRow}>
          <div className={s.promoInput}>
            <span className={s.promoInputText}>Enter Promo Code</span>
          </div>
          <div className={s.promoApplyBtn}>
            <span className={s.promoApplyText}>Apply</span>
          </div>
        </div>
        <div className={s.sidebarButtons}>
          <button
            disabled={!orderEnabled}
            className={[
              s.submitBtn,
              orderEnabled ? s.submitBtnEnabled : s.submitBtnDisabled,
            ].join(" ")}
          >
            SUBMIT ORDER
          </button>
          <button className={s.backToCartBtn}>BACK TO CART</button>
        </div>
        <div className={s.sidebarDivider} />
        <div className={s.sidebarNote}>
          <p style={{ marginBottom: 0 }}>
            Warehouse Pickup locations are restricted to Dayton, OH; Elk Grove
            Village, IL; Torrance, CA.
          </p>
          <p>
            By clicking on the &ldquo;Order&rdquo; button, we deem that we have
            agreed to our{" "}
            <a href="#" className={s.sidebarNoteLink}>
              {" "}
              Terms of Use
            </a>
            ,{" "}
            <a href="#" className={s.sidebarNoteLink}>
              {" "}
              Personal Information Protection Policy
            </a>
            , Other{" "}
            <a href="#" className={s.sidebarNoteLink}>
              {" "}
              Terms
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  const [openPanel, setOpenPanel] = useState<1 | 2 | 3>(1);
  const [completedPanels, setCompletedPanels] = useState<Set<number>>(
    new Set(),
  );
  const [modal, setModal] = useState<ModalType>(null);
  const [addressModalView, setAddressModalView] = useState<"select" | "edit">(
    "select",
  );
  const [selectedAddr, setSelectedAddr] = useState<{
    name: string;
    addr: string;
    phone: string;
  } | null>({
    name: "MISUMI USA WOS+",
    addr: "1475 E Woodfield Rd.\nSte 1300\nSchaumburg, IL 60173-5482 USA",
    phone: "1-800-681-7475",
  });
  const [addressCarrierMethod, setAddressCarrierMethod] =
    useState("ups-collect");
  const [addressAccountNumber, setAddressAccountNumber] = useState("000012");
  const advanceTo = (next: 1 | 2 | 3, completed: number) => {
    setCompletedPanels((prev) => new Set([...prev, completed]));
    setOpenPanel(next);
  };
  return (
    <div className={s.page}>
      {modal === "change" && (
        <ChangeAddressModal
          onClose={() => setModal(null)}
          onSelect={(name, addr) =>
            setSelectedAddr({ name, addr, phone: "1-800-681-7475" })
          }
          onClearAddress={() => {
            setSelectedAddr(null);
            setAddressCarrierMethod("");
            setAddressAccountNumber("");
          }}
          currentAddr={
            selectedAddr
              ? { name: selectedAddr.name, addr: selectedAddr.addr }
              : null
          }
          initialView={addressModalView}
          carrierMethod={addressCarrierMethod}
          carrierAccountNum={addressAccountNumber}
          onSaveCarrierAccount={(method, account) => {
            setAddressCarrierMethod(method);
            setAddressAccountNumber(account);
          }}
        />
      )}
      <div className={s.header}>
        <div className={s.headerAccent} />
        <div className={s.headerInner}>
          <span className={s.headerLogo}>MISUMI</span>
        </div>
      </div>
      <div className={s.breadcrumb}>
        <a href="#" className={s.breadcrumbLink}>
          MISUMI Homepage
        </a>
        <span className={s.breadcrumbSep}>|</span>
        <a href="#" className={s.breadcrumbLink}>
          Cart
        </a>
        <span className={s.breadcrumbSep}>|</span>
        <span className={s.breadcrumbCurrent}>Checkout</span>
      </div>
      <div className={s.checkoutTitleRow}>
        <div className={s.checkoutTitleInner}>
          <h1 className={s.checkoutTitle}>Checkout</h1>
          <div className={s.stepper}>
            <div className={s.stepperStep}>
              <div className={[s.stepperDot, s.stepperDotActive].join(" ")} />
              <span className={s.stepperLabel}>Cart</span>
            </div>
            <div className={[s.stepperLine, s.stepperLineActive].join(" ")} />
            <div className={s.stepperStep}>
              <div className={[s.stepperDot, s.stepperDotActive].join(" ")} />
              <span className={s.stepperLabel}>Order</span>
            </div>
            <div className={[s.stepperLine, s.stepperLineInactive].join(" ")} />
            <div className={s.stepperStep}>
              <div className={[s.stepperDot, s.stepperDotInactive].join(" ")} />
              <span
                className={[s.stepperLabel, s.stepperLabelInactive].join(" ")}
              >
                Complete
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={s.mainContent}>
        <div className={s.panels}>
          <div className={s.panel}>
            <PanelHeader
              isOpen={openPanel === 1}
              isCompleted={completedPanels.has(1)}
              stepNum={1}
              title="Shipping Address"
              summary={
                completedPanels.has(1) && selectedAddr ? (
                  <span className={s.panelSummaryTextPre}>
                    {selectedAddr.name}, {selectedAddr.addr.split("\n")[1]}
                  </span>
                ) : undefined
              }
              onEdit={() => setOpenPanel(1)}
              onClick={() => setOpenPanel(1)}
            />
            {openPanel === 1 && (
              <Panel1Content
                onNext={() => advanceTo(2, 1)}
                onChangeAddress={() => {
                  setAddressModalView("select");
                  setModal("change");
                }}
                onEditAddress={() => {
                  setAddressModalView("edit");
                  setModal("change");
                }}
                selectedAddr={selectedAddr}
                carrierMethod={addressCarrierMethod}
                carrierAccountNum={addressAccountNumber}
              />
            )}
          </div>
          <div className={s.panel}>
            <PanelHeader
              isOpen={openPanel === 2}
              isCompleted={completedPanels.has(2)}
              stepNum={2}
              title="Shipping Options"
              summary={
                completedPanels.has(2) ? (
                  <span className={s.panelSummaryText}>
                    3 items • UPS Ground • Est. ship: Sep 2
                  </span>
                ) : !completedPanels.has(2) && openPanel !== 2 ? (
                  <span className={s.panelSummaryText}>3 items</span>
                ) : undefined
              }
              onEdit={() => setOpenPanel(2)}
              onClick={() =>
                completedPanels.has(1) ? setOpenPanel(2) : undefined
              }
            />
            {openPanel === 2 && (
              <Panel2Content
                onNext={() => advanceTo(3, 2)}
                defaultCarrierMethod={addressCarrierMethod}
                defaultAccountNumber={addressAccountNumber}
                onAccountChange={(m, n) => {
                  setAddressCarrierMethod(m);
                  setAddressAccountNumber(n);
                }}
              />
            )}
          </div>
          <div className={s.panel}>
            <PanelHeader
              isOpen={openPanel === 3}
              isCompleted={completedPanels.has(3)}
              stepNum={3}
              title="Payment Method"
              onEdit={() => setOpenPanel(3)}
              onClick={() =>
                completedPanels.has(2) ? setOpenPanel(3) : undefined
              }
            />
            {openPanel === 3 && (
              <Panel3Content
                onComplete={() =>
                  setCompletedPanels((prev) => new Set([...prev, 3]))
                }
                onDisable={() =>
                  setCompletedPanels((prev) => {
                    const sNew = new Set(prev);
                    sNew.delete(3);
                    return sNew;
                  })
                }
              />
            )}
          </div>
        </div>
        <OrderSidebar orderEnabled={completedPanels.has(3)} />
      </div>
      <div className={s.footer}>
        <div className={s.footerInner}>
          <span className={s.footerCopy}>
            Copyright© MISUMI USA. All rights reserved.
          </span>
          <div className={s.footerLinks}>
            <a href="#" className={s.footerLink}>
              Terms and Conditions
            </a>
            <a href="#" className={s.footerLink}>
              Company Overview
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
