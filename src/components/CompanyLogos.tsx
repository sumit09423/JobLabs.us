const companies = [
  { name: "Microsoft", file: "microsoft.svg" },
  { name: "Apple", file: "apple.svg" },
  { name: "Google", file: "google.svg" },
  { name: "Amazon", file: "amazon.svg" },
  { name: "Meta", file: "meta.svg" },
  { name: "NVIDIA", file: "nvidia.svg" },
  { name: "IBM", file: "ibm.svg" },
  { name: "Intel", file: "intel.svg" },
  { name: "Oracle", file: "oracle.svg" },
  { name: "Cisco", file: "cisco.svg" },
  { name: "Adobe", file: "adobe.svg" },
  { name: "Salesforce", file: "salesforce.svg" },
  { name: "Netflix", file: "netflix.svg" },
  { name: "Tesla", file: "tesla.svg" },
  { name: "Uber", file: "uber.svg" },
  { name: "Airbnb", file: "airbnb.svg" },
  { name: "PayPal", file: "paypal.svg" },
  { name: "LinkedIn", file: "linkedin.svg" },
  { name: "Dropbox", file: "dropbox.svg" },
  { name: "eBay", file: "ebay.svg" },
  { name: "Dell", file: "dell.svg" },
  { name: "HP", file: "hp.svg" },
  { name: "AMD", file: "amd.svg" },
  { name: "Qualcomm", file: "qualcomm.svg" },
  { name: "Broadcom", file: "broadcom.svg" },
  { name: "Snowflake", file: "snowflake.svg" },
  { name: "Palantir", file: "palantir.svg" },
  { name: "Zoom", file: "zoom.svg" },
  { name: "Snap", file: "snapchat.svg" },
  { name: "Block", file: "square.svg" },
  { name: "Spotify", file: "spotify.svg" },
  { name: "Twitch", file: "twitch.svg" },
  { name: "Slack", file: "slack.svg" },
  { name: "Atlassian", file: "atlassian.svg" },
  { name: "Intuit", file: "intuit.svg" },
  { name: "VMware", file: "vmware.svg" },
  { name: "Accenture", file: "accenture.svg" },
  { name: "DoorDash", file: "doordash.svg" },
];

function LogoTrack({
  items,
  ariaHidden = false,
}: {
  items: typeof companies;
  ariaHidden?: boolean;
}) {
  return (
    <div
      className="flex shrink-0 items-center gap-10 pr-10 sm:gap-14 sm:pr-14"
      aria-hidden={ariaHidden || undefined}
    >
      {items.map((company) => (
        <div
          key={company.name}
          className="flex h-10 shrink-0 items-center gap-2.5 sm:h-11"
          title={company.name}
        >
          <img
            src={`/logos/${company.file}`}
            alt=""
            width={32}
            height={32}
            className="h-7 w-7 brightness-0 opacity-45 sm:h-8 sm:w-8"
          />
          <span className="text-[18px] font-semibold tracking-[-0.02em] text-[#b0b0b0] sm:text-[22px]">
            {company.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function CompanyLogos() {
  return (
    <section className="w-full overflow-hidden bg-white py-10 sm:py-12">
      <div className="company-marquee flex w-max items-center">
        <LogoTrack items={companies} />
        <LogoTrack items={companies} ariaHidden />
      </div>
    </section>
  );
}
