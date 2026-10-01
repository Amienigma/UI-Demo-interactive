import { useState } from "react";
import type { PhoneId } from "@/data/types";

type Screen =
  | "lock"
  | "home"
  | "library"
  | "quick"
  | "notes"
  | "settings"
  | "camera"
  | "tasks";

const screens: { id: Screen; label: string }[] = [
  { id: "lock", label: "Lock" },
  { id: "home", label: "Home" },
  { id: "library", label: "Library" },
  { id: "quick", label: "Quick" },
  { id: "notes", label: "Alerts" },
  { id: "settings", label: "Settings" },
  { id: "camera", label: "Camera" },
  { id: "tasks", label: "Recents" },
];

const phoneOrder: { id: PhoneId; label: string }[] = [
  { id: "iphone", label: "iOS 27" },
  { id: "galaxy", label: "One UI" },
  { id: "nothing", label: "Nothing OS" },
  { id: "huawei", label: "Huawei" },
];

export function UiLab() {
  const [phone, setPhone] = useState<PhoneId>("iphone");
  const [screen, setScreen] = useState<Screen>("lock");
  const [huaweiOs, setHuaweiOs] = useState<"harmony" | "emui">("harmony");
  const [wifi, setWifi] = useState(true);
  const [bright, setBright] = useState(70);
  const [zoom, setZoom] = useState("1");
  const [aperture, setAperture] = useState(1.6);

  return (
    <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
      <div className="min-w-0">
        <div className="flex flex-wrap gap-2">
          {phoneOrder.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => {
                setPhone(p.id);
                setScreen("lock");
                setZoom("1");
              }}
              className={
                "min-h-11 rounded-full border px-4 py-2 text-sm " +
                (phone === p.id
                  ? "border-brass bg-brass text-ink"
                  : "border-line bg-surface text-fg")
              }
            >
              {p.label}
            </button>
          ))}
        </div>
        <p className="mt-3 max-w-xl text-sm text-muted">
          Original layout simulation of public interface patterns. Not an official
          screenshot, and not a copy of proprietary icons or wallpapers.
        </p>
        {phone === "huawei" && (
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setHuaweiOs("harmony")}
              className={
                "min-h-11 rounded-full border px-4 py-2 text-sm " +
                (huaweiOs === "harmony"
                  ? "border-brass text-brass"
                  : "border-line text-muted")
              }
            >
              China · HarmonyOS
            </button>
            <button
              type="button"
              onClick={() => setHuaweiOs("emui")}
              className={
                "min-h-11 rounded-full border px-4 py-2 text-sm " +
                (huaweiOs === "emui"
                  ? "border-brass text-brass"
                  : "border-line text-muted")
              }
            >
              International · EMUI 15
            </button>
          </div>
        )}
        <div className="mt-4 flex min-w-0 gap-2 overflow-x-auto pb-1">
          {screens.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setScreen(s.id)}
              className={
                "min-h-11 shrink-0 rounded-lg border px-3 py-2 text-xs tracking-wide uppercase " +
                (screen === s.id
                  ? "border-brass text-brass"
                  : "border-line text-muted")
              }
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
      <div className="mx-auto w-full max-w-xs">
        <div className="rounded-[2rem] border border-line bg-ink p-3 shadow-none">
          <div
            className="relative overflow-hidden rounded-[1.4rem] border border-line"
            style={{ background: "var(--color-bg-raised)", minHeight: 560 }}
          >
            <Status phone={phone} wifi={wifi} huaweiOs={huaweiOs} />
            <div className="px-3 pb-4 pt-2">
              <ScreenBody
                phone={phone}
                screen={screen}
                huaweiOs={huaweiOs}
                wifi={wifi}
                setWifi={setWifi}
                bright={bright}
                setBright={setBright}
                zoom={zoom}
                setZoom={setZoom}
                aperture={aperture}
                setAperture={setAperture}
              />
            </div>
            <p className="pointer-events-none absolute bottom-2 left-0 right-0 text-center text-[10px] tracking-widest text-faint uppercase">
              UI simulation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Status({
  phone,
  wifi,
  huaweiOs,
}: {
  phone: PhoneId;
  wifi: boolean;
  huaweiOs: "harmony" | "emui";
}) {
  const label =
    phone === "iphone"
      ? "iOS"
      : phone === "galaxy"
        ? "One UI"
        : phone === "nothing"
          ? "Nothing"
          : huaweiOs === "harmony"
            ? "HarmonyOS"
            : "EMUI";
  return (
    <div className="flex items-center justify-between px-4 pt-3 text-[11px] text-muted">
      <span className="spec-mono">9:41</span>
      {phone === "iphone" && (
        <span className="absolute left-1/2 top-2 h-4 w-24 -translate-x-1/2 rounded-full bg-ink" />
      )}
      <span className="spec-mono">
        {label}
        {wifi ? " · wifi" : " · off"}
      </span>
    </div>
  );
}

function ScreenBody(props: {
  phone: PhoneId;
  screen: Screen;
  huaweiOs: "harmony" | "emui";
  wifi: boolean;
  setWifi: (v: boolean) => void;
  bright: number;
  setBright: (n: number) => void;
  zoom: string;
  setZoom: (z: string) => void;
  aperture: number;
  setAperture: (n: number) => void;
}) {
  const { phone, screen } = props;
  if (screen === "lock") return <Lock {...props} />;
  if (screen === "home") return <Home {...props} />;
  if (screen === "library") return <Library {...props} />;
  if (screen === "quick") return <Quick {...props} />;
  if (screen === "notes") return <Notes phone={phone} os={props.huaweiOs} />;
  if (screen === "settings") return <Settings phone={phone} os={props.huaweiOs} />;
  if (screen === "camera") return <Camera {...props} />;
  return <Tasks phone={phone} />;
}

function Lock({ phone, huaweiOs }: { phone: PhoneId; huaweiOs: "harmony" | "emui" }) {
  return (
    <div className="pt-10 text-center">
      <p className="text-sm text-muted">Thursday 1 October</p>
      <p className="spec-mono mt-2 text-5xl text-fg">9:41</p>
      {phone === "nothing" && (
        <div className="mx-auto mt-6 grid w-24 grid-cols-5 gap-1">
          {Array.from({ length: 15 }).map((_, i) => (
            <span
              key={i}
              className={i % 3 === 0 ? "h-2 w-2 rounded-full bg-brass" : "h-2 w-2 rounded-full bg-line"}
            />
          ))}
        </div>
      )}
      <p className="mx-auto mt-6 max-w-[220px] text-xs text-muted">
        {phone === "iphone" && "Lock Screen widgets sit under the clock. Always-On is an official iPhone 17 Pro display feature."}
        {phone === "galaxy" && "One UI lock screens use large type. Always-On was not confirmed in the S26 spec rows retrieved."}
        {phone === "nothing" && "Glyph Matrix lives on the back, not on this screen. The dots here only echo that idea."}
        {phone === "huawei" &&
          (huaweiOs === "harmony"
            ? "HarmonyOS lock screen. This is not Android."
            : "EMUI lock screen on the international model. Android-based, no Google account required.")}
      </p>
      <div className="mt-10 flex justify-between px-2">
        <span className="rounded-full border border-line px-3 py-2 text-xs text-muted">Flash</span>
        <span className="rounded-full border border-line px-3 py-2 text-xs text-muted">Camera</span>
      </div>
    </div>
  );
}

const glyphs = ["Aa", "Bx", "Cm", "Dv", "Eq", "Ft", "Gn", "Hw"];

function Home({ phone, huaweiOs }: { phone: PhoneId; huaweiOs: "harmony" | "emui" }) {
  const drawer = phone !== "iphone" && !(phone === "huawei" && huaweiOs === "harmony");
  return (
    <div>
      <p className="mb-3 text-xs text-muted">
        {phone === "iphone" && "Home Screen. No app drawer. Swipe to the library screen."}
        {phone === "galaxy" && "Home Screen. App drawer is separate. Icons can be hidden from this grid."}
        {phone === "nothing" && "Home Screen. Monochrome grid. Essential Space is the first-party widget."}
        {phone === "huawei" &&
          (huaweiOs === "harmony"
            ? "HarmonyOS home. Service cards, not a Play Store dock."
            : "EMUI home. Android-style pages, AppGallery in the dock.")}
      </p>
      {phone === "nothing" && (
        <div className="mb-3 rounded-xl border border-line p-3">
          <p className="text-xs text-brass">Essential Space</p>
          <p className="text-sm text-fg">Capture stays on device until you file it.</p>
        </div>
      )}
      <div className="grid grid-cols-4 gap-3">
        {glyphs.map((g) => (
          <div key={g} className="text-center">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface-2 text-xs text-fg">
              {g}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-around rounded-2xl border border-line py-3 text-[11px] text-muted">
        <span>Phone</span>
        <span>Notes</span>
        <span>{phone === "huawei" ? "AppGallery" : phone === "iphone" ? "Store" : "Play"}</span>
        <span>{drawer ? "Drawer" : "Search"}</span>
      </div>
    </div>
  );
}

function Library({ phone, huaweiOs }: { phone: PhoneId; huaweiOs: "harmony" | "emui" }) {
  const title =
    phone === "iphone"
      ? "App Library"
      : phone === "huawei" && huaweiOs === "harmony"
        ? "HarmonyOS apps"
        : "App drawer";
  return (
    <div>
      <p className="text-sm text-fg">{title}</p>
      <div className="mt-3 rounded-xl border border-line px-3 py-2 text-xs text-muted">Search</div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {(phone === "huawei"
          ? ["AppGallery", "Petal Search", "Celendar", "Files"]
          : phone === "iphone"
            ? ["Social", "Utilities", "Creativity", "Recently added"]
            : ["Google", "Samsung", "Nothing", "Tools"]
        ).map((name) => (
          <div key={name} className="rounded-xl border border-line p-3 text-xs text-fg">
            {name}
          </div>
        ))}
      </div>
      {phone === "huawei" && (
        <p className="mt-3 text-xs text-clay">
          {huaweiOs === "harmony"
            ? "Native packages are HarmonyOS apps. This simulation does not show Android APK icons as if they were first-class."
            : "EMUI can sideload many APKs. Google Play is not part of this drawer."}
        </p>
      )}
    </div>
  );
}

function Quick({
  wifi,
  setWifi,
  bright,
  setBright,
  phone,
}: {
  wifi: boolean;
  setWifi: (v: boolean) => void;
  bright: number;
  setBright: (n: number) => void;
  phone: PhoneId;
}) {
  return (
    <div>
      <p className="text-xs text-muted">
        {phone === "iphone"
          ? "Control Center is separate from notifications."
          : phone === "galaxy"
            ? "One UI combines tiles and alerts in one shade, split by gesture."
            : "Quick settings. Tiles below are interactive stand-ins."}
      </p>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => setWifi(!wifi)}
          className={
            "min-h-16 rounded-2xl border p-3 text-left text-sm " +
            (wifi ? "border-brass text-brass" : "border-line text-muted")
          }
        >
          Wi-Fi
          <span className="block text-xs">{wifi ? "On" : "Off"}</span>
        </button>
        <div className="min-h-16 rounded-2xl border border-line p-3 text-sm text-fg">
          Bluetooth
          <span className="block text-xs text-muted">Simulated</span>
        </div>
      </div>
      <label className="mt-4 block text-xs text-muted">
        Brightness {bright}%
        <input
          className="mt-2 w-full accent-brass"
          type="range"
          min={10}
          max={100}
          value={bright}
          onChange={(e) => setBright(Number(e.target.value))}
        />
      </label>
    </div>
  );
}

function Notes({ phone, os }: { phone: PhoneId; os: "harmony" | "emui" }) {
  const items =
    phone === "huawei" && os === "harmony"
      ? ["HarmonyOS notification", "AppGallery update", "No Google push services"]
      : phone === "huawei"
        ? ["EMUI notification", "Petal Search suggestion", "GMS-dependent apps may not notify"]
        : ["Message", "Calendar", "Battery"];
  return (
    <div className="space-y-2 pt-2">
      {items.map((item) => (
        <div key={item} className="rounded-xl border border-line bg-surface px-3 py-3 text-sm text-fg">
          {item}
        </div>
      ))}
    </div>
  );
}

function Settings({ phone, os }: { phone: PhoneId; os: "harmony" | "emui" }) {
  const rows =
    phone === "iphone"
      ? ["General", "Software Update · iOS 27", "Apple Intelligence", "Privacy & Security"]
      : phone === "galaxy"
        ? ["Connections", "Software update · One UI 9 rollout", "Galaxy AI", "Security and privacy"]
        : phone === "nothing"
          ? ["Display", "Glyph", "Software · Nothing OS 4.1 stable", "Essential"]
          : os === "harmony"
            ? ["HarmonyOS 5.1 / 6", "Huawei ID", "AppGallery", "Control panel"]
            : ["EMUI 15.0", "Huawei ID", "AppGallery", "No Google account"];
  return (
    <div className="divide-y divide-line rounded-xl border border-line">
      {rows.map((row) => (
        <div key={row} className="px-3 py-3 text-sm text-fg">
          {row}
        </div>
      ))}
    </div>
  );
}

function Camera({
  phone,
  zoom,
  setZoom,
  aperture,
  setAperture,
}: {
  phone: PhoneId;
  zoom: string;
  setZoom: (z: string) => void;
  aperture: number;
  setAperture: (n: number) => void;
}) {
  const stops =
    phone === "iphone"
      ? ["0.5", "1", "2", "4", "8"]
      : phone === "galaxy"
        ? ["0.5", "1", "2", "3"]
        : phone === "nothing"
          ? ["0.5", "1", "3"]
          : ["0.5", "1", "4"];
  return (
    <div>
      <div className="flex h-48 items-end justify-center rounded-xl border border-line bg-surface-2 p-3">
        <p className="text-center text-xs text-muted">
          Viewfinder stand-in
          <span className="mt-1 block spec-mono text-fg">{zoom}×</span>
        </p>
      </div>
      <div className="mt-3 flex justify-center gap-2">
        {stops.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setZoom(s)}
            className={
              "min-h-11 min-w-11 rounded-full border text-xs " +
              (zoom === s ? "border-brass text-brass" : "border-line text-muted")
            }
          >
            {s}
          </button>
        ))}
      </div>
      <p className="mt-3 text-xs text-muted">
        {phone === "iphone" && "Stops match the 17 Pro system: 0.5× ultrawide, 1×, 2× crop, 4× optical, 8× optical-quality."}
        {phone === "galaxy" && "0.5× ultrawide, 1×, 2× optical-quality crop, 3× optical. 2× is not a separate lens."}
        {phone === "nothing" && "0.5×, 1×, and 3× periscope. Ultrawide autofocus was not confirmed."}
        {phone === "huawei" && "0.5×, 1×, and about 4× optical. The aperture control below reflects the official ƒ/1.6–ƒ/4.0 main camera."}
      </p>
      {phone === "huawei" && (
        <label className="mt-3 block text-xs text-muted">
          Simulated aperture ƒ/{aperture.toFixed(1)}
          <input
            className="mt-2 w-full"
            type="range"
            min={16}
            max={40}
            value={Math.round(aperture * 10)}
            onChange={(e) => setAperture(Number(e.target.value) / 10)}
          />
        </label>
      )}
    </div>
  );
}

function Tasks({ phone }: { phone: PhoneId }) {
  return (
    <div className="flex gap-3 overflow-hidden pt-8">
      {["Maps", "Notes", "Camera"].map((name, i) => (
        <div
          key={name}
          className="h-64 w-36 shrink-0 rounded-2xl border border-line bg-surface p-3"
          style={{ transform: `translateY(${i * 8}px)` }}
        >
          <p className="text-sm text-fg">{name}</p>
          <p className="mt-2 text-xs text-muted">
            {phone === "iphone"
              ? "Card switcher. No split screen on this phone size."
              : "Recents. Android skins in this set also offer split screen; exact Huawei limits were not re-verified."}
          </p>
        </div>
      ))}
    </div>
  );
}
