import { useRef, useState } from "react";
import svgPaths from "../imports/svg-otyv9vxe4n";
import svgPathsAac from "../imports/svg-aacepbrbow";
import svgPathsGol from "../imports/svg-gol9aevr63";
import s from "./styles/checkout.module.scss";

type ModalType = "change" | null;

const CARRIER_METHODS = [
  "ups-collect",
  "ups-third-party",
  "fedex-bill-recipient",
  "fedex-third-party",
];

type ChangeAddrView = "select" | "edit" | "add";

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
    zip?: string;
    phone?: string;
    shippingMethod?: string;
    carrierAccountNum?: string;
  };
  submitLabel: string;
  onSubmit: (data: { shippingMethod: string; carrierAccountNum: string }) => void;
  onCancel: () => void;
}) {
  const [shippingMethod, setShippingMethod] = useState(
    initialValues?.shippingMethod ?? "",
  );
  const [carrierAccountNum, setCarrierAccountNum] = useState(
    initialValues?.carrierAccountNum ?? "",
  );
  const [carrierAccountError, setCarrierAccountError] = useState(false);
  const carrierAccountFieldRef = useRef<HTMLDivElement>(null);
  const [country, setCountry] = useState("us");
  const [taxable, setTaxable] = useState<"yes" | "no">("no");
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
      shippingMethod,
      carrierAccountNum: showCarrierAccount ? carrierAccountNum.trim() : "",
    });
  }
  return (
    <div className={s.caForm}>
      <div className={s.caField}>
        <label className={s.caLabel}>Company Name</label>
        <input
          className={s.caInput}
          placeholder="Company Name"
          defaultValue={initialValues?.company ?? ""}
        />
      </div>
      <div className={s.caField}>
        <label className={s.caLabel}>Country</label>
        <select
          className={s.caSelect}
          value={country}
          onChange={(e) => setCountry(e.target.value)}
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
          defaultValue={initialValues?.street ?? ""}
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
          defaultValue={initialValues?.city ?? ""}
        />
      </div>
      <div className={s.caFieldRow}>
        <div className={s.caFieldHalf}>
          <label className={s.caLabel}>State/Province</label>
          <select className={s.caSelect}>
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
            defaultValue={initialValues?.zip ?? ""}
          />
        </div>
      </div>
      <div className={s.caField}>
        <label className={s.caLabel}>Phone</label>
        <input
          className={s.caInput}
          placeholder="Example: 800-681-7475"
          defaultValue={initialValues?.phone ?? ""}
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
        <input type="checkbox" className={s.caCheckbox} />
        <span className={s.caCheckboxLabel}>Set as my preferred address</span>
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
  currentAddr,
  carrierMethod,
  carrierAccountNum,
  onSaveCarrierAccount,
}: {
  onClose: () => void;
  onSelect: (name: string, addr: string) => void;
  currentAddr: { name: string; addr: string };
  carrierMethod: string;
  carrierAccountNum: string;
  onSaveCarrierAccount: (method: string, account: string) => void;
}) {
  const [view, setView] = useState<ChangeAddrView>("select");
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const addresses = [
    {
      name: "MISUMI USA WOS+",
      addr: "1475 E Woodfield Rd. Ste 1300, Schaumburg, IL 60173",
      primary: true,
    },
    {
      name: "MISUMI Warehouse B",
      addr: "2500 Enterprise Pkwy, Chicago, IL 60666",
      primary: false,
    },
    {
      name: "MISUMI Assembly Plant",
      addr: "1020 Meacham Rd, Schaumburg, IL 60173",
      primary: false,
    },
  ];

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
              <p className={s.caSectionTitle}>Current address</p>
              <div className={s.caCurrentCard}>
                <div className={s.caCurrentCardRadio}>
                  <div className={s.caRadioFilled}>
                    <div className={s.caRadioFilledDot} />
                  </div>
                </div>
                <div className={s.caCurrentCardInfo}>
                  <div className={s.caCurrentName}>{currentAddr.name}</div>
                  <div className={s.caCurrentAddr}>{currentAddr.addr}</div>
                  <div className={s.caCurrentBadges}>
                    <span className={s.caCurrentBadge}>
                      <svg
                        fill="none"
                        viewBox="0 0 12 12"
                        style={{ width: 11, height: 11 }}
                      >
                        <path
                          d="M2 6l3 3 5-5"
                          stroke="#16a34a"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Shipping
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setView("edit")}
                  className={s.caEditLink}
                >
                  <svg
                    fill="none"
                    viewBox="0 0 14 14"
                    style={{ width: 13, height: 13 }}
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
            </div>

            <div className={s.caSection}>
              <div className={s.caSavedHeader}>
                <p className={s.caSectionTitle}>
                  Saved addresses ({addresses.length})
                </p>
                <button onClick={() => setView("add")} className={s.caAddLink}>
                  + Add new address
                </button>
              </div>
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
                  />
                </div>
                <button className={s.caSearchBtn}>Search</button>
              </div>
              <div className={s.caSavedList}>
                {addresses.map((a, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedIdx(i)}
                    className={[
                      s.caSavedItem,
                      selectedIdx === i ? s.caSavedItemSelected : "",
                    ].join(" ")}
                  >
                    <div
                      className={[
                        s.caSavedRadio,
                        selectedIdx === i ? s.caSavedRadioActive : "",
                      ].join(" ")}
                    >
                      {selectedIdx === i && (
                        <div className={s.caSavedRadioDot} />
                      )}
                    </div>
                    <div className={s.caSavedInfo}>
                      <div className={s.caSavedNameRow}>
                        <span className={s.caSavedName}>{a.name}</span>
                        {a.primary && (
                          <span className={s.caSavedPrimary}>Primary</span>
                        )}
                      </div>
                      <div className={s.caSavedAddr}>{a.addr}</div>
                    </div>
                    <button
                      className={s.caUseAddrBtn}
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelect(a.name, a.addr);
                        onClose();
                      }}
                    >
                      Use this address
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <label className={s.caPreferredRow}>
              <input type="checkbox" className={s.caCheckbox} />
              <span className={s.caCheckboxLabel}>
                Set as my preferred address
              </span>
            </label>
            <div className={s.caFormFooter}>
              <button onClick={onClose} className={s.modalCancelBtn}>
                Cancel
              </button>
              <button
                onClick={() => {
                  if (selectedIdx !== null) {
                    onSelect(
                      addresses[selectedIdx].name,
                      addresses[selectedIdx].addr,
                    );
                    onClose();
                  }
                }}
                className={s.modalSaveBtn}
                disabled={selectedIdx === null}
              >
                Save &amp; Use Address
              </button>
            </div>
          </div>
        )}

        {/* View: Edit current */}
        {view === "edit" && (
          <div className={s.caBody}>
            <div className={s.caSection}>
              <p className={s.caSectionTitle}>Current address</p>
              <div className={s.caCurrentCard}>
                <div className={s.caCurrentCardRadio}>
                  <div className={s.caRadioFilled}>
                    <div className={s.caRadioFilledDot} />
                  </div>
                </div>
                <div className={s.caCurrentCardInfo}>
                  <div className={s.caCurrentName}>{currentAddr.name}</div>
                  <div className={s.caCurrentAddr}>{currentAddr.addr}</div>
                  <div className={s.caCurrentBadges}>
                    <span className={s.caCurrentBadge}>
                      <svg
                        fill="none"
                        viewBox="0 0 12 12"
                        style={{ width: 11, height: 11 }}
                      >
                        <path
                          d="M2 6l3 3 5-5"
                          stroke="#16a34a"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Shipping
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setView("select")}
                  className={s.caCancelLink}
                >
                  Cancel
                </button>
              </div>
            </div>
            <AddrForm
              initialValues={{
                company: currentAddr.name,
                street: "7339 Davis Street",
                city: "Morton Grove",
                zip: "60053",
                phone: "(847) 555-1234",
                shippingMethod: carrierMethod,
                carrierAccountNum: carrierAccountNum,
              }}
              submitLabel="Save & Use Address"
              onSubmit={(data) => {
                onSaveCarrierAccount(data.shippingMethod, data.carrierAccountNum);
                onClose();
              }}
              onCancel={() => setView("select")}
            />
          </div>
        )}

        {/* View: Add new */}
        {view === "add" && (
          <div className={s.caBody}>
            <button onClick={() => setView("select")} className={s.caBackLink}>
              ← Back to saved addresses
            </button>
            <h3 className={s.caAddTitle}>Add new address</h3>
            <AddrForm
              submitLabel="Add Address"
              onSubmit={() => {
                onClose();
              }}
              onCancel={() => setView("select")}
            />
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
  selectedAddr,
  carrierMethod,
  carrierAccountNum,
}: {
  onNext: () => void;
  onChangeAddress: () => void;
  selectedAddr: { name: string; addr: string; phone: string };
  carrierMethod: string;
  carrierAccountNum: string;
}) {
  return (
    <div className={s.panel1Content}>
      <div className={s.selectedAddrSection}>
        <div className={s.selectedAddrHeader}>
          <span className={s.selectedAddrLabel}>Selected Address</span>
          <button onClick={onChangeAddress} className={s.selectNewAddrBtn}>
            <span style={{ fontSize: "16px", lineHeight: "1" }}>+</span> Select
            New Address
          </button>
        </div>
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
                <input className={s.addrCardInput} defaultValue="John Smith" />
              </div>
            </div>
            <div className={s.addrCardActions}>
              <button onClick={onChangeAddress} className={s.selectNewAddrBtn}>
                <svg className={s.editBtnIcon} fill="none" viewBox="0 0 14 14">
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
      </div>
      <div className={s.panel1Footer}>
        <button className={s.backBtn}>← Back to Cart</button>
        <button onClick={onNext} className={s.nextBtn}>
          Next Step: Shipping Options →
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
    if (shippingType === "billed" && !savedAccount) {
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
      const saved = { method: formCarrier, account: formAccountNum.trim() };
      setSavedAccount(saved);
      onAccountChange(saved.method, saved.account);
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
                onChange={(e) => setSpeedMethod(e.target.value)}
                className={s.shippingSelect}
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
                        Shipping to continue.
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

      <div className={`${s.panel2Footer} ${s.panel2FooterTop}`}>
        <button className={s.backBtn}>← Previous Step</button>
        <button onClick={handleNext} className={s.nextBtn}>
          Next Step: Payment Method →
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
                img: "",
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
                img: "",
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
                img: "",
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
              img: "",
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
              img: "",
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
              img: "",
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
      <div className={s.panel2Footer}>
        <button className={s.backBtn}>← Previous Step</button>
        <button onClick={handleNext} className={s.nextBtn}>
          Next Step: Payment Method →
        </button>
      </div>
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
      <div className={s.packageTableNote}>
        <span className={s.noteIcon}>i</span>
        <span className={s.noteText}>
          Warehouse Pickup locations are restricted to specific zones.
        </span>
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
                <label className={s.poLabel}>
                  PURCHASE ORDER #{" "}
                  <span className={s.poRequired}>(REQUIRED)</span>{" "}
                  <span className={s.poRequired}>*</span>
                </label>
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
        <button className={s.backBtn}>← Previous Step</button>
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
  const [selectedAddr, setSelectedAddr] = useState({
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
          currentAddr={{ name: selectedAddr.name, addr: selectedAddr.addr }}
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
                completedPanels.has(1) ? (
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
                onChangeAddress={() => setModal("change")}
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
