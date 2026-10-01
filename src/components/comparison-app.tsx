import { useEffect, useMemo, useState } from "react";
import { phones } from "@/data/phones";
import type { PhoneRecord } from "@/data/types";
import {
  conclusions,
  ecosystems,
  glossary,
  matrixRows,
  nav,
  softwareColumns,
  uxAxes,
} from "@/data/narrative";
import type { Confidence, Fact, PhoneId } from "@/data/types";
import { UiLab } from "@/components/ui-lab";

const confidenceLabel: Record<Confidence, string> = {
  VERIFIED: "Verified",
  INDEPENDENTLY_VERIFIED: "Independent",
  REGIONAL: "Regional",
  UNCONFIRMED: "Unconfirmed",
};

function badgeClass(c: Confidence) {
  if (c === "VERIFIED") return "text-sage border-sage/40";
  if (c === "INDEPENDENTLY_VERIFIED") return "text-brass border-brass/40";
  if (c === "REGIONAL") return "text-fg border-line";
  return "text-clay border-clay/50";
}

export function ComparisonApp() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<PhoneId>("iphone");
  const [openGroup, setOpenGroup] = useState("display");
  const [only, setOnly] = useState<Confidence | "ALL">("ALL");
  const [term, setTerm] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const phone = phones.find((p) => p.id === active) ?? phones[0];
  const q = query.trim().toLowerCase();

  const filteredGroups = useMemo(() => {
    return phone.groups
      .map((g) => ({
        ...g,
        facts: g.facts.filter((fact) => {
          if (only !== "ALL" && fact.confidence !== only) return false;
          if (!q) return true;
          const blob = `${fact.label} ${fact.value} ${fact.note ?? ""} ${g.title}`.toLowerCase();
          return blob.includes(q);
        }),
      }))
      .filter((g) => g.facts.length > 0);
  }, [phone, q, only]);

  const chartWeights = [
    { name: "iPhone 17 Pro", g: 206, note: "US listing" },
    { name: "Galaxy S26", g: 167, note: "Official" },
    { name: "Phone (3)", g: 218, note: "Official" },
    { name: "Pura 80 Pro", g: 219, note: "About 219 g" },
  ];

  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="border-b border-line bg-bg-raised">
        <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-4 px-4 py-5">
          <div>
            <p className="text-xs tracking-[0.18em] text-brass uppercase">Spec Ledger · 1 Oct 2026</p>
            <h1 className="mt-1 text-2xl font-medium tracking-tight sm:text-3xl">
              Four phones, sourced
            </h1>
          </div>
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="min-h-11 rounded-full border border-line px-4 py-2 text-sm text-fg"
          >
            {theme === "dark" ? "Light paper" : "Dark desk"}
          </button>
        </div>
        <nav className="mx-auto flex max-w-6xl min-w-0 gap-2 overflow-x-auto px-4 pb-3">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="min-h-11 shrink-0 rounded-full border border-line px-3 py-2 text-sm text-muted hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <div className="border-b border-line bg-surface">
        <p className="mx-auto max-w-6xl px-4 py-3 text-sm leading-relaxed text-muted">
          Information verified against available manufacturer documentation and reputable
          independent sources. Specifications and software features may vary by region,
          model variant, and software version. Unverified information is explicitly labeled.
        </p>
      </div>

      <main className="mx-auto min-w-0 max-w-6xl px-4 py-8">
        <section id="overview">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <h2 className="text-xl font-medium">Devices</h2>
            <label className="min-w-[220px] flex-1 text-sm text-muted">
              <span className="sr-only">Search specifications</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search specs, sources, caveats"
                className="min-h-11 w-full rounded-xl border border-line bg-bg px-3 text-fg outline-none"
              />
            </label>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {phones.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActive(item.id);
                  document.getElementById("detail")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={
                  "rounded-card border p-4 text-left " +
                  (active === item.id ? "border-brass bg-surface" : "border-line bg-bg-raised")
                }
              >
                <Silhouette id={item.id} />
                <p className="mt-3 text-xs tracking-wide text-brass uppercase">{item.maker}</p>
                <h3 className="text-lg leading-tight">{item.name}</h3>
                <p className="mt-2 text-sm text-muted">{cardLine(item)}</p>
              </button>
            ))}
          </div>
          <dl className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Snapshot k="US starting price" v="$1,099 launch" s="iPhone 17 Pro · Apple, Sep 2025" />
            <Snapshot k="US starting price" v="$899.99 launch" s="Galaxy S26 · Samsung, Mar 2026" />
            <Snapshot k="Published from" v="$799" s="Nothing Phone (3) · Nothing index" />
            <Snapshot k="US price" v="Not sold" s="Pura 80 Pro · no official US MSRP" />
          </dl>
        </section>

        <section id="detail" className="mt-10">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs tracking-[0.16em] text-brass uppercase">{phone.maker}</p>
              <h2 className="text-2xl font-medium">{phone.name}</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {(["ALL", "VERIFIED", "INDEPENDENTLY_VERIFIED", "REGIONAL", "UNCONFIRMED"] as const).map(
                (key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setOnly(key)}
                    className={
                      "min-h-11 rounded-full border px-3 py-2 text-xs " +
                      (only === key ? "border-brass text-brass" : "border-line text-muted")
                    }
                  >
                    {key === "ALL" ? "All labels" : confidenceLabel[key]}
                  </button>
                ),
              )}
            </div>
          </div>
          <p className="mt-3 max-w-3xl text-sm text-muted">{phone.context}</p>
          <div className="mt-4 flex min-w-0 gap-2 overflow-x-auto">
            {phone.groups.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setOpenGroup(g.id)}
                className={
                  "min-h-11 shrink-0 rounded-full border px-3 py-2 text-sm " +
                  (openGroup === g.id ? "border-brass text-fg" : "border-line text-muted")
                }
              >
                {g.title}
              </button>
            ))}
          </div>
          <div className="mt-4 space-y-3">
            {filteredGroups.length === 0 && (
              <p className="rounded-xl border border-line p-4 text-sm text-muted">
                No specifications match that filter. Clear the search or switch the label.
              </p>
            )}
            {filteredGroups.map((g) => {
              const shown = q.length > 0 || only !== "ALL" || openGroup === g.id;
              if (!shown) return null;
              return (
                <article key={g.id}>
                  {(q.length > 0 || only !== "ALL") && (
                    <h3 className="mb-2 text-sm text-brass">{g.title}</h3>
                  )}
                  {g.intro && <p className="mb-3 max-w-3xl text-sm text-muted">{g.intro}</p>}
                  <div className="divide-y divide-line rounded-card border border-line">
                    {g.facts.map((fact) => (
                      <FactRow key={fact.id} fact={fact} />
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
          <p className="mt-3 text-xs text-faint">
            Other groups stay in the data. Pick a category, or search, to open them.{" "}
            {q ? `Showing matches for “${query.trim()}”.` : "Search is empty, so the open category is complete."}
          </p>
        </section>

        <section id="hardware" className="mt-14">
          <h2 className="text-2xl font-medium">Hardware, side by side</h2>
          <p className="mt-2 max-w-3xl text-sm text-muted">
            Bars use only figures with a stated unit. The iPhone’s battery is missing from the
            capacity chart because Apple does not publish milliamp-hours. A lab estimate is not
            drawn on the same axis as official typical capacities.
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <Meter
              title="Weight"
              unit="g"
              rows={chartWeights.map((r) => ({ label: r.name, value: r.g, note: r.note }))}
              max={240}
            />
            <Meter
              title="Official battery, typical or stated"
              unit="mAh"
              max={6000}
              rows={[
                { label: "iPhone 17 Pro", value: 0, note: "Not disclosed" },
                { label: "Galaxy S26", value: 4300, note: "Typical · rated 4175" },
                { label: "Phone (3) intl.", value: 5150, note: "India reported 5500" },
                { label: "Pura 80 Pro CN", value: 5700, note: "Intl. page 5170" },
              ]}
            />
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <Callout
              title="Display, in practice"
              body="The iPhone and the Nothing Phone (3) are both 460 ppi. The Galaxy S26 is FHD+ — about 411 ppi by GSMArena’s math — on a 1–120Hz panel Samsung does specify. The Pura 80 Pro matches the 460 ppi class and is the only one here with an official 1–120Hz LTPO line plus 1440Hz PWM. Peak-nit marketing is not comparable: Apple’s 3000, Samsung’s 2600, and Nothing’s 4500 are highlights, and only the iPhone and the Phone (3) have independent nit readings in this file."
            />
            <Callout
              title="Performance, without fake scores"
              body="A19 Pro and the US-pattern Snapdragon 8 Elite Gen 5 are the two high chips, and they are not the same chip. Exynos 2600 is a different S26. Snapdragon 8s Gen 4 in the Phone (3) is a tier down by Qualcomm’s own naming. Kirin 9020 has no official clocks. One European review found it unimpressive against older flagships. No Geekbench number is printed, because a shared lab table was not retrieved."
            />
            <Callout
              title="Charging claims versus watts"
              body="Samsung’s 55% in 30 minutes is a lab condition: 25W adapter, screen off, from empty. Apple’s claim is 50% in 20 minutes with at least a 40W adapter, plus 25W MagSafe. Nothing publishes times (about 60 minutes full, under 20 minutes to 50%) and the 65W figure comes from launch coverage. Huawei’s 100W and China’s 80W wireless require Huawei chargers, some sold separately."
            />
            <Callout
              title="How they feel"
              body="The S26 is the light, thin slab: 167 g and 7.2 mm. The iPhone is denser, with a camera bar across the back and a 6-meter IP68 rating. Phone (3) is the thick one, at 8.99 mm and 218 g, and the Glyph Matrix is the thing you notice on a table. The Pura 80 Pro is about the same weight, slightly thinner, and adds IP69. Repair scores were not retrieved for any of the four."
            />
          </div>
        </section>

        <section id="cameras" className="mt-14">
          <h2 className="text-2xl font-medium">Cameras, without a winner’s trophy</h2>
          <p className="mt-2 max-w-3xl text-sm text-muted">
            No lab in the sources checked published a four-phone photo ranking. The notes below
            are hardware differences, not a claim that one JPEG is better.
          </p>
          <div className="mt-4 max-w-full overflow-x-auto rounded-card border border-line">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="text-xs tracking-wide text-faint uppercase">
                <tr>
                  <th className="p-3 font-medium">Scene</th>
                  <th className="p-3 font-medium">What the hardware implies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {cameraNotes.map((row) => (
                  <tr key={row.scene}>
                    <td className="p-3 align-top text-brass">{row.scene}</td>
                    <td className="p-3 text-muted">{row.text}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="software" className="mt-14">
          <h2 className="text-2xl font-medium">Software</h2>
          <p className="mt-2 max-w-3xl text-sm text-muted">
            Features are limited to what was verified for these models and these versions.
            Older phones in the same brand are not treated as proof.
          </p>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {softwareColumns.map((col) => (
              <article key={col.id} className="rounded-card border border-line p-4">
                <h3 className="text-lg">{col.title}</h3>
                <div className="mt-3 space-y-3">
                  {col.points.map((point) => (
                    <div key={point.h}>
                      <p className="text-sm text-brass">{point.h}</p>
                      <p className="text-sm text-muted">{point.body}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="uilab" className="mt-14">
          <h2 className="text-2xl font-medium">UI lab</h2>
          <p className="mt-2 max-w-3xl text-sm text-muted">
            Switch the phone, then the surface. The Huawei control toggles China HarmonyOS and
            international EMUI, because those are not the same operating system.
          </p>
          <div className="mt-4 rounded-card border border-line p-4">
            <UiLab />
          </div>
          <div className="mt-8">
            <h3 className="text-lg">Editorial scores</h3>
            <p className="mt-1 max-w-3xl text-sm text-clay">
              These 1–10 marks are an editorial evaluation for a United States buyer on
              1 October 2026. They are not measurements, not benchmarks, and not manufacturer claims.
            </p>
            <div className="mt-4 space-y-4">
              {uxAxes.map((axis) => (
                <div key={axis.axis} className="rounded-xl border border-line p-3">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="text-sm">{axis.axis}</p>
                  </div>
                  <div className="mt-2 grid gap-2 sm:grid-cols-4">
                    {(Object.keys(axis.scores) as PhoneId[]).map((id) => (
                      <div key={id}>
                        <div className="mb-1 flex justify-between text-xs text-muted">
                          <span>{shortName(id)}</span>
                          <span className="spec-mono">{axis.scores[id]}</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-surface-2">
                          <div
                            className="h-1.5 rounded-full bg-brass"
                            style={{ width: `${axis.scores[id] * 10}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-2 text-xs text-muted">{axis.why}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="ecosystem" className="mt-14">
          <h2 className="text-2xl font-medium">Ecosystems</h2>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {ecosystems.map((eco) => (
              <article key={eco.id} className="rounded-card border border-line p-4">
                <h3 className="text-lg">{eco.name}</h3>
                <dl className="mt-3 space-y-2">
                  {eco.rows.map((row) => (
                    <div key={row.k}>
                      <dt className="text-sm text-brass">{row.k}</dt>
                      <dd className="text-sm text-muted">{row.v}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section id="matrix" className="mt-14">
          <h2 className="text-2xl font-medium">Matrix</h2>
          <div className="mt-4 max-w-full overflow-x-auto rounded-card border border-line">
            <table className="w-full min-w-[880px] text-left text-sm">
              <thead className="text-xs tracking-wide text-faint uppercase">
                <tr>
                  <th className="p-3 font-medium"> </th>
                  <th className="p-3 font-medium">iPhone 17 Pro</th>
                  <th className="p-3 font-medium">Galaxy S26</th>
                  <th className="p-3 font-medium">Phone (3)</th>
                  <th className="p-3 font-medium">Pura 80 Pro</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {matrixRows.map((row) => (
                  <tr key={row.area}>
                    <th className="p-3 align-top font-medium text-brass">{row.area}</th>
                    <td className="p-3 align-top text-muted">{row.cells.iphone}</td>
                    <td className="p-3 align-top text-muted">{row.cells.galaxy}</td>
                    <td className="p-3 align-top text-muted">{row.cells.nothing}</td>
                    <td className="p-3 align-top text-muted">{row.cells.huawei}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 grid gap-4">
            {conclusions.map((item) => (
              <article key={item.title} className="rounded-card border border-line p-4">
                <p className="text-xs tracking-[0.16em] text-faint uppercase">{item.title}</p>
                <h3 className="mt-1 text-lg">{item.pick}</h3>
                <p className="mt-2 text-sm text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="sources" className="mt-14">
          <h2 className="text-2xl font-medium">Sources and verification</h2>
          <p className="mt-2 max-w-3xl text-sm text-muted">
            Every specification row carries a source, a source type, the check date
            (1 October 2026), and a confidence label. Aggregators such as GSMArena are not
            treated as the manufacturer.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {glossary.map((item) => (
              <button
                key={item.term}
                type="button"
                onClick={() => setTerm(term === item.term ? null : item.term)}
                className={
                  "min-h-11 rounded-full border px-3 py-2 text-sm " +
                  (term === item.term ? "border-brass text-brass" : "border-line text-muted")
                }
              >
                {item.term}
              </button>
            ))}
          </div>
          {term && (
            <p className="mt-3 max-w-3xl rounded-xl border border-line p-3 text-sm text-muted">
              {glossary.find((g) => g.term === term)?.text}
            </p>
          )}
          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            {(Object.keys(confidenceLabel) as Confidence[]).map((key) => (
              <span key={key} className={"rounded-full border px-2 py-1 " + badgeClass(key)}>
                {key}
              </span>
            ))}
          </div>
          <div className="mt-4 space-y-6">
            {phones.map((item) => (
              <div key={item.id}>
                <h3 className="text-lg">{item.name}</h3>
                <div className="mt-2 max-w-full overflow-x-auto rounded-xl border border-line">
                  <table className="w-full min-w-[760px] text-left text-xs">
                    <thead className="text-faint uppercase">
                      <tr>
                        <th className="p-2 font-medium">Spec</th>
                        <th className="p-2 font-medium">Label</th>
                        <th className="p-2 font-medium">Source</th>
                        <th className="p-2 font-medium">Type</th>
                        <th className="p-2 font-medium">Checked</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-line">
                      {item.groups.flatMap((g) =>
                        g.facts
                          .filter((fact) => {
                            if (!q) return true;
                            return `${fact.label} ${fact.value} ${g.title}`.toLowerCase().includes(q);
                          })
                          .map((fact) => (
                            <tr key={fact.id}>
                              <td className="p-2 text-fg">{fact.label}</td>
                              <td className={"p-2 " + badgeClass(fact.confidence)}>
                                {fact.confidence}
                              </td>
                              <td className="p-2 text-muted">{fact.source}</td>
                              <td className="p-2 text-muted">{fact.sourceType}</td>
                              <td className="spec-mono p-2 text-muted">{fact.checked}</td>
                            </tr>
                          )),
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function FactRow({ fact }: { fact: Fact }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-3">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <p className="text-sm text-brass">{fact.label}</p>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className={"min-h-8 rounded-full border px-2 py-1 text-[10px] tracking-wide " + badgeClass(fact.confidence)}
        >
          {fact.confidence}
        </button>
      </div>
      <p className="mt-1 text-sm text-fg">{fact.value}</p>
      {open && (
        <p className="mt-2 text-xs text-muted">
          {fact.sourceType} · {fact.source} · checked {fact.checked}
          {fact.note ? ` · ${fact.note}` : ""}
        </p>
      )}
    </div>
  );
}

function Snapshot({ k, v, s }: { k: string; v: string; s: string }) {
  return (
    <div className="rounded-xl border border-line px-3 py-3">
      <dt className="text-xs text-faint">{k}</dt>
      <dd className="spec-mono text-lg text-fg">{v}</dd>
      <dd className="text-xs text-muted">{s}</dd>
    </div>
  );
}

function Meter({
  title,
  unit,
  rows,
  max,
}: {
  title: string;
  unit: string;
  max: number;
  rows: { label: string; value: number; note: string }[];
}) {
  return (
    <div className="rounded-card border border-line p-4">
      <h3 className="text-sm">{title}</h3>
      <div className="mt-3 space-y-3">
        {rows.map((row) => (
          <div key={row.label}>
            <div className="flex justify-between text-xs text-muted">
              <span>{row.label}</span>
              <span className="spec-mono">
                {row.value === 0 ? "—" : `${row.value} ${unit}`}
              </span>
            </div>
            <div className="mt-1 h-2 rounded-full bg-surface-2">
              <div
                className="h-2 rounded-full bg-brass"
                style={{ width: row.value === 0 ? "0%" : `${(row.value / max) * 100}%` }}
              />
            </div>
            <p className="text-[11px] text-faint">{row.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Callout({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-card border border-line p-4">
      <h3 className="text-base">{title}</h3>
      <p className="mt-2 text-sm text-muted">{body}</p>
    </article>
  );
}

function Silhouette({ id }: { id: PhoneId }) {
  return (
    <div className="flex h-16 items-center">
      <div className="relative h-14 w-9 rounded-lg border border-line">
        {id === "iphone" && <span className="absolute right-0.5 top-2 h-6 w-2 rounded-sm bg-brass-dim" />}
        {id === "galaxy" && <span className="absolute left-1/2 top-1 h-4 w-2 -translate-x-1/2 rounded-full bg-brass-dim" />}
        {id === "nothing" && (
          <span className="absolute bottom-1 right-1 grid grid-cols-3 gap-px">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className="h-1 w-1 rounded-full bg-brass" />
            ))}
          </span>
        )}
        {id === "huawei" && <span className="absolute left-1/2 top-2 h-5 w-5 -translate-x-1/2 rounded-full border border-brass" />}
      </div>
    </div>
  );
}

function cardLine(phone: PhoneRecord) {
  if (phone.id === "iphone") return "A19 Pro · 6.3-inch · iOS 27 · eSIM in the US";
  if (phone.id === "galaxy") return "6.3-inch FHD+ · 4300 mAh · chip varies by market";
  if (phone.id === "nothing") return "Current flagship · Snapdragon 8s Gen 4 · Glyph Matrix";
  return "HarmonyOS in China · EMUI 15 abroad · not a US phone";
}

function shortName(id: PhoneId) {
  if (id === "iphone") return "iPhone";
  if (id === "galaxy") return "Galaxy";
  if (id === "nothing") return "Nothing";
  return "Huawei";
}

const cameraNotes: { scene: string; text: string }[] = [
  {
    scene: "Daylight",
    text: "All four have large main sensors on paper. Only Huawei officially says 1-inch, and only Huawei officially offers a variable aperture. That can mean more control over depth of field. It does not, by itself, mean cleaner color.",
  },
  {
    scene: "Night",
    text: "Apple, Samsung, and Nothing all advertise night processing. Huawei lists a super night mode. No matched night test was retrieved, so there is no ranking.",
  },
  {
    scene: "Portraits",
    text: "The iPhone’s 100 mm 4× lens is a classic portrait field of view, and Apple ships Photographic Styles including a Bright style. Huawei’s 4× telephoto also focuses close, which the others do not officially match. Samsung’s portrait lens is 3× at 10MP.",
  },
  {
    scene: "Zoom",
    text: "Reach, officially: iPhone 4× optical and 8× optical-quality, Samsung 3× optical and 2× optical-quality, Nothing 3× optical periscope, Huawei about 4× optical and 100× digital. Digital 100× and digital 40× are not optical.",
  },
  {
    scene: "Ultrawide",
    text: "iPhone and Nothing are 48MP and 50MP. Samsung is 12MP. Huawei is 40MP at ƒ/2.2. Autofocus on Samsung’s and Nothing’s ultrawide cameras was not clearly specified.",
  },
  {
    scene: "Skin tones",
    text: "Not ranked. Apple documents Photographic Styles that deliberately shift skin brightness. Huawei adds a 1.5MP spectral color sensor. Neither fact is a measured skin-tone win.",
  },
  {
    scene: "Dynamic range",
    text: "Not measured across the four phones in one lab for this app. HDR stills and HDR video exist on the iPhone as Dolby Vision. Huawei lists HDR Vivid video. Samsung’s HDR photo standard was not on the spec row.",
  },
  {
    scene: "Video",
    text: "The iPhone is the only one with verified 4K120, ProRes RAW, and Apple Log 2. The Galaxy S26 is the only one with verified 8K30. Huawei discloses that 960 fps is frame insertion. Nothing’s ceiling in secondary specs is 4K60.",
  },
  {
    scene: "Front camera",
    text: "iPhone 18MP Center Stage with a square sensor. Galaxy 12MP with autofocus. Nothing 50MP. Huawei 13MP with autofocus and up to 4K. Resolution is not quality.",
  },
  {
    scene: "Computation",
    text: "Apple’s Photonic Engine, Samsung’s ProVisual Engine, Nothing’s processing, and Huawei’s AI camera modes are all manufacturer pipelines. They are named where the maker named them. They are not scored.",
  },
];
