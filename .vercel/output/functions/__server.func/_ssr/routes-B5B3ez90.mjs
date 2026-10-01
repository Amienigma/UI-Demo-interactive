import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B5B3ez90.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CHECKED = "2026-10-01";
function f(partial) {
	return {
		checked: CHECKED,
		...partial
	};
}
var phones = [
	{
		id: "iphone",
		name: "iPhone 17 Pro",
		maker: "Apple",
		context: "Announced 9 September 2025, released 19 September 2025. This is the 2025 Pro, not the iPhone 18 Pro announced 9 September 2026. Compared here because it was requested. US model A3256 is eSIM-only.",
		groups: [
			{
				id: "identity",
				title: "Identity and price",
				facts: [
					f({
						id: "ip-name",
						label: "Official name",
						value: "iPhone 17 Pro",
						confidence: "VERIFIED",
						source: "Apple Newsroom, 9 Sep 2025; Apple specs page",
						sourceType: "Manufacturer"
					}),
					f({
						id: "ip-launch",
						label: "Launch",
						value: "Announced 9 September 2025. Released 19 September 2025.",
						confidence: "VERIFIED",
						source: "Apple Newsroom (announce); GSMArena (release date)",
						sourceType: "Manufacturer",
						note: "Release calendar date is from GSMArena’s specification record, which matches Apple’s on-sale window after the 9 September announcement."
					}),
					f({
						id: "ip-price",
						label: "US launch price",
						value: "Starts at $1,099 for 256GB. 512GB and 1TB were offered. Exact US prices for those higher tiers were not on the newsroom excerpt retrieved.",
						confidence: "VERIFIED",
						source: "Apple Newsroom, 9 Sep 2025",
						sourceType: "Manufacturer",
						note: "GSMArena later listed street-style prices around $849. Those are not Apple’s launch MSRP and are not used as the official price."
					}),
					f({
						id: "ip-sold-us",
						label: "Sold in the United States",
						value: "Yes. Apple’s US checkout path lists AT&T, Boost Mobile, T-Mobile, and Verizon.",
						confidence: "VERIFIED",
						source: "Apple Newsroom financing footnote, 9 Sep 2025",
						sourceType: "Manufacturer"
					}),
					f({
						id: "ip-colors",
						label: "Finishes",
						value: "Silver, Cosmic Orange, Deep Blue. Aluminum unibody, Ceramic Shield 2 front, Ceramic Shield back.",
						confidence: "VERIFIED",
						source: "Apple technical specifications",
						sourceType: "Manufacturer"
					})
				]
			},
			{
				id: "display",
				title: "Display",
				intro: "Apple publishes a 6.3-inch class size and a much higher outdoor peak than the Galaxy S26’s FHD+ panel. Independent lab numbers are lower than the marketing peak, which is normal for small-window HDR peaks.",
				facts: [
					f({
						id: "ip-disp-tech",
						label: "Technology",
						value: "Super Retina XDR OLED. ProMotion up to 120Hz. Always-On. HDR10 and Dolby Vision are listed by GSMArena; Apple’s newsroom confirms Dolby Vision video and a Super Retina XDR panel.",
						confidence: "VERIFIED",
						source: "Apple Newsroom, 9 Sep 2025",
						sourceType: "Manufacturer",
						note: "Minimum refresh (1Hz LTPO) is not spelled out as “1Hz” in the newsroom excerpt. GSMArena classifies the panel as LTPO."
					}),
					f({
						id: "ip-disp-size",
						label: "Size",
						value: "6.3-inch class. Measured as a rectangle, 6.27 inches. Actual viewable area is smaller because of rounded corners.",
						confidence: "VERIFIED",
						source: "Apple Newsroom footnote 2",
						sourceType: "Manufacturer"
					}),
					f({
						id: "ip-disp-res",
						label: "Resolution and density",
						value: "2622 × 1206 pixels at 460 ppi.",
						confidence: "VERIFIED",
						source: "Apple technical specifications",
						sourceType: "Manufacturer"
					}),
					f({
						id: "ip-disp-bright",
						label: "Brightness",
						value: "Apple: up to 3000 nits peak outdoor, and the company advertises about 1000 nits manual maximum and 1600 nits for HDR playback. GSMArena lab (30 Sep 2025): 818 nits manual, 1012 nits in bright ambient light, 2755 nits on a 15% white window.",
						confidence: "INDEPENDENTLY_VERIFIED",
						source: "Apple Newsroom; GSMArena review lab, 30 Sep 2025",
						sourceType: "Independent lab",
						note: "The 3000-nit figure is a manufacturer peak. The lab did not reproduce 3000 nits full-screen. Do not treat 3000 nits as a full-screen measurement."
					}),
					f({
						id: "ip-disp-protect",
						label: "Protection and shape",
						value: "Ceramic Shield 2 front with an anti-reflective coating. Apple says 3× better scratch resistance versus prior glass. Ceramic Shield also covers the back. Corners are rounded inside a rectangular display. Not marketed as a curved-edge waterfall panel.",
						confidence: "VERIFIED",
						source: "Apple Newsroom, 9 Sep 2025",
						sourceType: "Manufacturer"
					}),
					f({
						id: "ip-disp-stb",
						label: "Screen-to-body",
						value: "About 89.4% as calculated by GSMArena. Apple does not publish this ratio.",
						confidence: "INDEPENDENTLY_VERIFIED",
						source: "GSMArena specification record",
						sourceType: "Aggregator"
					})
				]
			},
			{
				id: "performance",
				title: "Performance",
				intro: "Apple does not publish RAM, clock speeds, or Geekbench scores. Those figures below are third-party. No cross-lab benchmark set covering all four phones was verified for this app, so no score is charted.",
				facts: [
					f({
						id: "ip-soc",
						label: "Chipset",
						value: "Apple A19 Pro. 6-core CPU with 2 performance and 4 efficiency cores. 6-core GPU with Neural Accelerators. 16-core Neural Engine. Hardware-accelerated ray tracing.",
						confidence: "VERIFIED",
						source: "Apple technical specifications and Newsroom",
						sourceType: "Manufacturer"
					}),
					f({
						id: "ip-process",
						label: "Process and clocks",
						value: "Not stated on Apple’s spec page. GSMArena lists 3 nm and a hexa-core layout around 2×4.26 GHz + 4×2.60 GHz. Clocks differ slightly across secondary write-ups.",
						confidence: "UNCONFIRMED",
						source: "GSMArena; not on Apple’s spec page",
						sourceType: "Aggregator",
						note: "Shown only as a third-party listing. Not an Apple specification."
					}),
					f({
						id: "ip-ram",
						label: "RAM",
						value: "Not published by Apple. GSMArena lists 12GB on every storage tier. MacRumors (9 Sep 2026) says the full on-device Siri AI model in iOS 27 needs 12GB, and that iPhone 17 Pro is in the tier that runs it.",
						confidence: "UNCONFIRMED",
						source: "GSMArena; MacRumors, 9 Sep 2026",
						sourceType: "Specialist press",
						note: "Strongly indicated, not an Apple datasheet line. Do not treat 12GB as an official Apple spec."
					}),
					f({
						id: "ip-storage",
						label: "Storage",
						value: "256GB, 512GB, or 1TB. No card slot. Apple does not name the storage technology. GSMArena lists NVMe.",
						confidence: "VERIFIED",
						source: "Apple Newsroom (capacities); GSMArena (NVMe label)",
						sourceType: "Manufacturer",
						note: "Capacities are official. The NVMe label is an aggregator description."
					}),
					f({
						id: "ip-sustain",
						label: "Sustained performance",
						value: "Apple-designed vapor chamber inside the aluminum unibody. Apple claims up to 40% better sustained performance than the previous Pro generation. No independent sustained-throttle percentage for this phone was retrieved.",
						confidence: "VERIFIED",
						source: "Apple Newsroom, 9 Sep 2025",
						sourceType: "Manufacturer",
						note: "40% is a manufacturer comparison against iPhone 16 Pro, not against the other phones in this app."
					}),
					f({
						id: "ip-bench",
						label: "Benchmarks",
						value: "Not published here. A single sourced Geekbench or 3DMark set for the iPhone 17 Pro, measured beside these three other phones, was not retrieved. Invented scores are omitted.",
						confidence: "UNCONFIRMED",
						source: "This research pass, 1 Oct 2026",
						sourceType: "Independent lab"
					})
				]
			},
			{
				id: "battery",
				title: "Battery and charging",
				facts: [
					f({
						id: "ip-batt-official",
						label: "Capacity",
						value: "Not officially disclosed. Apple only says built-in rechargeable lithium-ion. GSMArena’s lab notes about 3998 mAh on a physical-SIM unit and about 4252 mAh on an eSIM-only unit.",
						confidence: "INDEPENDENTLY_VERIFIED",
						source: "Apple specs (no mAh); GSMArena review, 30 Sep 2025",
						sourceType: "Independent lab",
						note: "US phones are eSIM-only, so the larger of those two measured packs is the relevant US figure — if the teardown split is right. Apple has not confirmed either milliamp-hour number."
					}),
					f({
						id: "ip-batt-life",
						label: "Official endurance claim",
						value: "Up to 33 hours video playback and up to 30 hours streamed video playback.",
						confidence: "VERIFIED",
						source: "Apple product page and technical specifications",
						sourceType: "Manufacturer",
						note: "These are Apple video-playback tests, not mixed-use days. Methodology details beyond the hour claims were not fully quoted in this pass."
					}),
					f({
						id: "ip-charge",
						label: "Wired charging",
						value: "Up to 50% in 20 minutes with a 40W-or-higher USB-C adapter and USB-C cable, sold separately. Apple cites a 40W Dynamic Power Adapter with 60W max.",
						confidence: "VERIFIED",
						source: "Apple technical specifications",
						sourceType: "Manufacturer",
						note: "Apple does not publish a single “phone charges at X watts” peak. The claim is a time-to-50% with a stated adapter class."
					}),
					f({
						id: "ip-wireless",
						label: "Wireless",
						value: "MagSafe up to 25W. Qi2 up to 25W. Up to 50% in 30 minutes with a 30W-or-higher adapter and MagSafe Charger, both sold separately. GSMArena notes 15W wireless on the China model.",
						confidence: "REGIONAL",
						source: "Apple technical specifications; GSMArena (China 15W note)",
						sourceType: "Manufacturer"
					}),
					f({
						id: "ip-reverse",
						label: "Reverse charging",
						value: "Not stated on the Apple spec lines retrieved. GSMArena lists 4.5W reverse wired. That wattage is not treated as official.",
						confidence: "UNCONFIRMED",
						source: "GSMArena",
						sourceType: "Aggregator"
					})
				]
			},
			{
				id: "camera",
				title: "Cameras",
				facts: [
					f({
						id: "ip-main",
						label: "Main",
						value: "48MP Fusion Main, 24 mm, ƒ/1.78, second-generation sensor-shift OIS, 100% Focus Pixels. Default output can be 24MP or 48MP. Also a 12MP optical-quality 2× at 48 mm, ƒ/1.78. Quad-pixel size stated as 2.44 µm (1.22 µm individual).",
						confidence: "VERIFIED",
						source: "Apple technical specifications and product page",
						sourceType: "Manufacturer"
					}),
					f({
						id: "ip-main-sensor",
						label: "Main sensor size",
						value: "Not on the Apple lines retrieved. GSMArena lists 1/1.28 inch. Treat that as an aggregator figure.",
						confidence: "UNCONFIRMED",
						source: "GSMArena",
						sourceType: "Aggregator"
					}),
					f({
						id: "ip-uw",
						label: "Ultrawide",
						value: "48MP Fusion Ultra Wide, 13 mm, ƒ/2.2, quad-pixel 1.4 µm (0.7 µm individual). Macro is part of the 0.5× camera. Autofocus is indicated by Apple’s “100% Focus Pixels” language on the Fusion system; GSMArena lists PDAF.",
						confidence: "VERIFIED",
						source: "Apple product page; GSMArena (PDAF wording)",
						sourceType: "Manufacturer"
					}),
					f({
						id: "ip-tele",
						label: "Telephoto",
						value: "48MP Fusion Telephoto, tetraprism. 4× optical at 100 mm. 8× optical-quality at 200 mm. Sensor described as 56% larger than the previous generation. Digital zoom up to 40× for photos. Aperture was not in the Apple excerpts retrieved; GSMArena lists ƒ/2.8.",
						confidence: "VERIFIED",
						source: "Apple Newsroom, 9 Sep 2025",
						sourceType: "Manufacturer",
						note: "ƒ/2.8 is GSMArena, not a quoted Apple aperture. 8× is optical-quality from the 48MP tetraprism, not a separate 8× lens."
					}),
					f({
						id: "ip-front",
						label: "Front",
						value: "18MP Center Stage. Square sensor, wider field of view, photos up to 18MP, portrait or landscape while the phone stays vertical. 4K HDR ultra-stabilized video. Dual Capture (front and rear together). GSMArena lists ƒ/1.9; that aperture was not in the Apple excerpt.",
						confidence: "VERIFIED",
						source: "Apple Newsroom, 9 Sep 2025",
						sourceType: "Manufacturer"
					}),
					f({
						id: "ip-video",
						label: "Video",
						value: "4K at up to 120 fps. Dolby Vision HDR. ProRes, ProRes RAW, Apple Log 2, ACES support. Genlock via supported accessories. Action mode / sensor-shift stabilization depending on lens. Front camera 4K HDR.",
						confidence: "VERIFIED",
						source: "Apple Newsroom, 9 Sep 2025; GSMArena video row",
						sourceType: "Manufacturer"
					}),
					f({
						id: "ip-lidar",
						label: "Depth",
						value: "LiDAR Scanner on the camera plateau, plus LED True Tone flash.",
						confidence: "VERIFIED",
						source: "Apple Support, model identification, updated 28 Sep 2026",
						sourceType: "Manufacturer"
					})
				]
			},
			{
				id: "build",
				title: "Build",
				facts: [
					f({
						id: "ip-dim",
						label: "Dimensions and weight",
						value: "Weight 206 g (7.27 oz) on Apple’s US spec listing. Some regional Apple spec pages list 204 g. GSMArena dimensions: 150 × 71.9 × 8.8 mm. Apple’s own height/width/depth line was not captured in this pass.",
						confidence: "REGIONAL",
						source: "Apple US specs (206 g); regional Apple pages (204 g); GSMArena (mm)",
						sourceType: "Manufacturer",
						note: "Do not collapse 204 g and 206 g into one number. The millimeter figure is an aggregator measurement, not a quoted Apple dimension."
					}),
					f({
						id: "ip-ip",
						label: "Ingress",
						value: "IP68, maximum depth of 6 meters for up to 30 minutes, IEC 60529.",
						confidence: "VERIFIED",
						source: "Apple technical specifications",
						sourceType: "Manufacturer"
					}),
					f({
						id: "ip-controls",
						label: "Controls and port",
						value: "Action button, side button, Camera Control. USB-C with USB 3 up to 10 Gb/s and DisplayPort. Face ID. No 3.5 mm jack.",
						confidence: "VERIFIED",
						source: "Apple Support model page; Apple technical specifications",
						sourceType: "Manufacturer"
					}),
					f({
						id: "ip-sim",
						label: "SIM",
						value: "United States (A3256): eSIM only, no SIM tray. Other regions can have a nano-SIM tray. China uses physical SIM configurations that differ again.",
						confidence: "REGIONAL",
						source: "Apple Support, updated 28 Sep 2026",
						sourceType: "Manufacturer"
					}),
					f({
						id: "ip-repair",
						label: "Repairability",
						value: "Not independently verified in this pass. No iFixit score was retrieved for the iPhone 17 Pro.",
						confidence: "UNCONFIRMED",
						source: "This research pass, 1 Oct 2026",
						sourceType: "Independent lab"
					})
				]
			},
			{
				id: "software",
				title: "Software",
				facts: [
					f({
						id: "ip-os-launch",
						label: "Launch OS",
						value: "iOS 26.",
						confidence: "VERIFIED",
						source: "Apple, iOS 26 release coverage and device record",
						sourceType: "Manufacturer"
					}),
					f({
						id: "ip-os-now",
						label: "Current OS as of 1 Oct 2026",
						value: "iOS 27, released 14 September 2026, and listed by Apple as compatible with iPhone 17 Pro. A newer 27.x build number than the initial release was not retrieved on this date. iOS 26.7.1 (28 Sep 2026) remained the latest iOS 26 security branch for people who had not moved to 27.",
						confidence: "VERIFIED",
						source: "Apple iOS 27 compatibility page; Apple Support “About iOS 26 Updates”; MacRumors 14 Sep 2026",
						sourceType: "Manufacturer"
					}),
					f({
						id: "ip-support",
						label: "Update policy",
						value: "Apple has not published a fixed “N years” end date for iPhone 17 Pro. iOS 27 kept the same device list as iOS 26, back to iPhone 11.",
						confidence: "VERIFIED",
						source: "Apple iOS 27 compatibility list, Sep 2026",
						sourceType: "Manufacturer",
						note: "Historical iPhone support has often landed around six or seven years. That history is not a commitment for this model."
					}),
					f({
						id: "ip-ai",
						label: "Apple Intelligence / Siri AI",
						value: "iOS 27’s Siri AI runs on iPhone 17 Pro, including the higher on-device tier that other current iPhones do not all get. Siri AI rolled out in English first, with more languages scheduled for October 2026, and was not initially available in the EU. iOS 26 already included Live Translation, visual intelligence, and an on-device foundation model for developers.",
						confidence: "REGIONAL",
						source: "Apple iOS 27 page; MacRumors, 9 Sep 2026; Apple Newsroom 2025 footnotes",
						sourceType: "Manufacturer"
					})
				]
			},
			{
				id: "network",
				title: "Network and radios",
				facts: [
					f({
						id: "ip-wifi",
						label: "Wi-Fi, Bluetooth, Thread",
						value: "Apple N1 wireless chip: Wi-Fi 7, Bluetooth 6, and Thread.",
						confidence: "VERIFIED",
						source: "Apple Newsroom, 9 Sep 2025",
						sourceType: "Manufacturer"
					}),
					f({
						id: "ip-5g",
						label: "Cellular",
						value: "5G iPhone sold for major US carriers. The full US band table was not copied from Apple’s spec page in this pass. GSMArena lists a broad Sub-6 set including bands used by AT&T, T-Mobile, and Verizon. mmWave support was not confirmed from an Apple sentence retrieved here.",
						confidence: "UNCONFIRMED",
						source: "Apple carrier checkout list; GSMArena band table",
						sourceType: "Aggregator",
						note: "Carrier sale is verified. Exact band-by-band US support should be checked on Apple’s tech specs for model A3256 before assuming mmWave."
					}),
					f({
						id: "ip-sat",
						label: "Satellite",
						value: "GSMArena lists Emergency SOS, Messages, and Find My via satellite. That feature line was not in the Apple excerpts captured for this pass, so it is not marked verified from Apple text here.",
						confidence: "UNCONFIRMED",
						source: "GSMArena",
						sourceType: "Aggregator"
					}),
					f({
						id: "ip-nfc",
						label: "NFC",
						value: "Yes. Apple Pay is supported in the US.",
						confidence: "VERIFIED",
						source: "Apple product capabilities; GSMArena comms row",
						sourceType: "Manufacturer"
					})
				]
			}
		]
	},
	{
		id: "galaxy",
		name: "Galaxy S26",
		maker: "Samsung",
		context: "Base Galaxy S26, not S26+ or S26 Ultra. Announced 25 February 2026. US retail from 10 March 2026. US and international units do not share one chip.",
		groups: [
			{
				id: "identity",
				title: "Identity and price",
				facts: [
					f({
						id: "ss-name",
						label: "Official name",
						value: "Samsung Galaxy S26",
						confidence: "VERIFIED",
						source: "Samsung Newsroom, 25 Feb 2026 and 10 Mar 2026",
						sourceType: "Manufacturer"
					}),
					f({
						id: "ss-launch",
						label: "Launch",
						value: "Unpacked / preorder from 25 February 2026. GSMArena lists a 6 March 2026 release. Samsung Electronics America says US availability starting 10 March 2026.",
						confidence: "VERIFIED",
						source: "Samsung Global Newsroom; Samsung Newsroom US, 10 Mar 2026; GSMArena",
						sourceType: "Manufacturer"
					}),
					f({
						id: "ss-price",
						label: "US launch price",
						value: "Starts at $899.99. Storage options stated as 256GB and 512GB. The US newsroom release did not print a separate 512GB MSRP. A 128GB/12GB configuration exists as an Enterprise Edition in GSMArena’s record and is not the consumer US starting model.",
						confidence: "VERIFIED",
						source: "Samsung Newsroom US, 10 Mar 2026",
						sourceType: "Manufacturer",
						note: "Later GSMArena marketplace prices (about $624–$750) are not official MSRP."
					}),
					f({
						id: "ss-sold",
						label: "Sold in the United States",
						value: "Yes. Samsung.com, carriers, Amazon, Best Buy, and Samsung Experience Stores.",
						confidence: "VERIFIED",
						source: "Samsung Newsroom US, 10 Mar 2026",
						sourceType: "Manufacturer"
					}),
					f({
						id: "ss-colors",
						label: "Colors",
						value: "Cobalt Violet, Sky Blue, Black, White. Samsung.com exclusives: Silver Shadow and Pink Gold. Availability varies by country.",
						confidence: "VERIFIED",
						source: "Samsung Newsroom US, 10 Mar 2026; Samsung regional spec pages",
						sourceType: "Manufacturer"
					})
				]
			},
			{
				id: "display",
				title: "Display",
				intro: "Same 6.3-inch class as iPhone 17 Pro, but FHD+ rather than Apple’s taller resolution. Adaptive refresh is officially 1–120Hz. Samsung’s global spec table did not print a nit rating; a US product-page summary did.",
				facts: [
					f({
						id: "ss-disp",
						label: "Technology",
						value: "6.3-inch FHD+ Dynamic AMOLED 2X. Adaptive 1–120Hz. Vision Booster. 16 million colors on regional spec sheets.",
						confidence: "VERIFIED",
						source: "Samsung Global Newsroom spec table, Feb 2026",
						sourceType: "Manufacturer"
					}),
					f({
						id: "ss-size-note",
						label: "How size is measured",
						value: "6.3 inches on the full rectangle, 6.1 inches accounting for rounded corners. Viewable area is smaller still because of the camera hole.",
						confidence: "VERIFIED",
						source: "Samsung Global Newsroom footnote",
						sourceType: "Manufacturer"
					}),
					f({
						id: "ss-res",
						label: "Resolution and density",
						value: "2340 × 1080. Samsung does not print ppi on the spec table retrieved. GSMArena calculates about 411 ppi. A 6.3-inch diagonal at 2340×1080 is roughly 409 ppi if you use the full-rectangle diagonal.",
						confidence: "INDEPENDENTLY_VERIFIED",
						source: "Samsung spec pages (resolution); GSMArena (ppi)",
						sourceType: "Aggregator"
					}),
					f({
						id: "ss-nits",
						label: "Peak brightness",
						value: "2600 nits peak appears on the Samsung US product page summary and on GSMArena. The global newsroom comparison table left brightness blank. No independent nit measurement for the S26 was retrieved.",
						confidence: "UNCONFIRMED",
						source: "Samsung US product page summary; GSMArena",
						sourceType: "Manufacturer",
						note: "Treated as a marketing peak, not a lab full-screen figure, and not present in the global spec table excerpt."
					}),
					f({
						id: "ss-hdr",
						label: "HDR",
						value: "GSMArena lists HDR10+. Samsung’s retrieved spec table does not name the HDR standard.",
						confidence: "UNCONFIRMED",
						source: "GSMArena",
						sourceType: "Aggregator"
					}),
					f({
						id: "ss-aod",
						label: "Always-On Display",
						value: "Not named in the Samsung specification rows retrieved for this pass. Not marked as present just because older Galaxy phones had it.",
						confidence: "UNCONFIRMED",
						source: "Samsung spec table excerpt, checked 1 Oct 2026",
						sourceType: "Manufacturer"
					}),
					f({
						id: "ss-glass",
						label: "Protection and shape",
						value: "Corning Gorilla Glass Victus 2 front and back. Armor aluminum frame. IP68. Form factor listed as a touch bar, not a curved-edge display, in regional spec sheets. Screen-to-body about 90% per GSMArena’s calculation, not a Samsung figure.",
						confidence: "VERIFIED",
						source: "Samsung US product page; GSMArena build row",
						sourceType: "Manufacturer",
						note: "IP68 depth of 1.5 m for 30 minutes is the GSMArena / product-page wording. Confirm the exact lab depth on the warranty card if it matters."
					})
				]
			},
			{
				id: "performance",
				title: "Performance",
				intro: "The base S26 is a split-chip phone. Comparing a US Snapdragon unit to a European Exynos unit as if they were the same device will mislead.",
				facts: [
					f({
						id: "ss-soc",
						label: "Chipset",
						value: "Samsung lists both Snapdragon 8 Elite Gen 5 for Galaxy and Exynos 2600, and says the AP varies by device and market. GSMArena assigns Snapdragon 8 Elite Gen 5 (SM8850) to US, Canada, and China, and Exynos 2600 to the rest of the world. Korea and Gulf official pages list a deca-core at 3.8 / 3.26 / 2.76 GHz. Japan and Hong Kong official pages list an octa-core at 4.74 / 3.6 GHz. The Ultra is Snapdragon in Samsung’s own copy; the base US model is not named as clearly.",
						confidence: "REGIONAL",
						source: "Samsung Global Newsroom spec table; Samsung Korea, Gulf, Japan, Hong Kong spec pages; GSMArena",
						sourceType: "Manufacturer"
					}),
					f({
						id: "ss-cpu",
						label: "CPU",
						value: "Snapdragon-pattern pages: octa-core, clocks published as 4.74 GHz and 3.6 GHz. GSMArena expands that to 2×4.74 GHz Oryon V3 + 6×3.62 GHz. Exynos 2600, per Samsung’s chip announcement as reported by GSMArena: 10 cores, 1×3.8 GHz C1-Ultra, 3×3.25 GHz, 6×2.75 GHz, on a 2 nm process. GPU names Adreno 840 and Xclipse 960 are GSMArena labels, not printed on the phone spec pages retrieved.",
						confidence: "REGIONAL",
						source: "Samsung regional spec pages; GSMArena citing Samsung’s Exynos 2600 announcement",
						sourceType: "Manufacturer"
					}),
					f({
						id: "ss-process",
						label: "Manufacturing process",
						value: "Exynos 2600: Samsung has described it as a 2 nm chip. Snapdragon 8 Elite Gen 5: GSMArena lists 3 nm. Samsung’s phone newsroom excerpt does not state a process node for the Snapdragon variant.",
						confidence: "REGIONAL",
						source: "GSMArena report of Samsung’s Exynos 2600 announcement, Dec 2025; GSMArena phone record",
						sourceType: "Specialist press"
					}),
					f({
						id: "ss-ram",
						label: "RAM and storage",
						value: "12GB RAM. Consumer storage 256GB or 512GB. No microSD. Regional pages list roughly 222–226GB usable on the 256GB model, which varies by software build. UFS generation is not on the official rows retrieved; GSMArena says UFS 4.x.",
						confidence: "VERIFIED",
						source: "Samsung regional spec pages; Samsung Newsroom US",
						sourceType: "Manufacturer",
						note: "Usable-capacity differences are real and regional. The UFS label is an aggregator figure."
					}),
					f({
						id: "ss-therm",
						label: "Thermals",
						value: "A vapor chamber is explicitly part of Samsung’s S26 Ultra story. A US product-page summary also described a vapor chamber on the base S26. That base-model claim was not repeated as a measured result in an independent test retrieved here.",
						confidence: "UNCONFIRMED",
						source: "Samsung US marketing pages, 2026",
						sourceType: "Manufacturer"
					}),
					f({
						id: "ss-bench",
						label: "Benchmarks",
						value: "Not charted. Snapdragon and Exynos results cannot be pooled. No single lab table comparing this S26 with the iPhone 17 Pro, Nothing Phone (3), and Pura 80 Pro was retrieved.",
						confidence: "UNCONFIRMED",
						source: "This research pass, 1 Oct 2026",
						sourceType: "Independent lab"
					})
				]
			},
			{
				id: "battery",
				title: "Battery and charging",
				facts: [
					f({
						id: "ss-mah",
						label: "Capacity",
						value: "4300 mAh typical. Rated minimum 4175 mAh under IEC 61960, per Samsung’s footnote.",
						confidence: "VERIFIED",
						source: "Samsung Global Newsroom spec footnote, Feb 2026",
						sourceType: "Manufacturer"
					}),
					f({
						id: "ss-video",
						label: "Video playback claim",
						value: "Samsung’s own pages disagree slightly: up to 30 hours on US and Gulf listings, up to 31 hours on the Japan spec page. Both are manufacturer video-loop claims, not mixed daily use.",
						confidence: "REGIONAL",
						source: "Samsung US, Gulf, and Japan spec/product pages",
						sourceType: "Manufacturer"
					}),
					f({
						id: "ss-wired",
						label: "Wired charging",
						value: "25W adapter class. Up to 55% in about 30 minutes from empty, screen and services off, using Samsung’s 25W adapter and a 3A cable. Adapter sold separately. Compatible with QC2.0 and Samsung’s PD implementation as footnoted. The S26+ is the model Samsung rates with a 45W adapter; do not copy that speed onto the base S26.",
						confidence: "VERIFIED",
						source: "Samsung Global Newsroom charging footnote",
						sourceType: "Manufacturer"
					}),
					f({
						id: "ss-wireless",
						label: "Wireless and PowerShare",
						value: "Fast Wireless Charging 2.0 and Wireless PowerShare are official. Samsung’s footnote does not state a watt number. GSMArena lists 15W Qi2 Ready and 4.5W reverse wireless. Those watts are aggregator figures.",
						confidence: "UNCONFIRMED",
						source: "Samsung Newsroom (feature names); GSMArena (watts)",
						sourceType: "Aggregator"
					})
				]
			},
			{
				id: "camera",
				title: "Cameras",
				facts: [
					f({
						id: "ss-rear",
						label: "Rear system",
						value: "50MP wide, ƒ/1.8, autofocus, OIS, 2× optical-quality zoom from the adaptive-pixel sensor. 10MP telephoto, ƒ/2.4, 3× optical zoom, OIS. 12MP ultrawide, ƒ/2.2. Digital zoom up to 30×. LED flash.",
						confidence: "VERIFIED",
						source: "Samsung Global Newsroom spec table and regional spec pages",
						sourceType: "Manufacturer"
					}),
					f({
						id: "ss-sensor-size",
						label: "Sensor sizes",
						value: "Not on Samsung’s spec table. GSMArena lists main 1/1.56\", 1.0 µm; telephoto 1/3.94\", 1.0 µm; ultrawide 1/2.55\", 1.4 µm. A February 2026 GSMArena leak used the same sizes before launch; treat them as aggregator data, not a Samsung datasheet.",
						confidence: "UNCONFIRMED",
						source: "GSMArena",
						sourceType: "Aggregator"
					}),
					f({
						id: "ss-uw-af",
						label: "Ultrawide autofocus and macro",
						value: "Samsung’s spec row says the rear cameras have autofocus, but it does not say the ultrawide is the macro camera. Macro capability is not officially specified in the rows retrieved.",
						confidence: "UNCONFIRMED",
						source: "Samsung regional spec pages",
						sourceType: "Manufacturer"
					}),
					f({
						id: "ss-front",
						label: "Front",
						value: "12MP, ƒ/2.2, autofocus. GSMArena adds 23 mm, 1/3.2\", 1.12 µm, dual-pixel PDAF, and 4K at 30/60 fps. The extra geometry is not on the Samsung row retrieved.",
						confidence: "VERIFIED",
						source: "Samsung spec pages (12MP ƒ/2.2 AF); GSMArena (geometry and video)",
						sourceType: "Manufacturer"
					}),
					f({
						id: "ss-video-rec",
						label: "Video",
						value: "8K (7680×4320) at 30 fps. Slow motion: 240 fps FHD, 120 fps FHD, 120 fps UHD. HDR video format, Log, and a dedicated pro cinema mode were not specified on the official rows retrieved.",
						confidence: "VERIFIED",
						source: "Samsung regional spec pages",
						sourceType: "Manufacturer",
						note: "8K30 is official. ProRes-style or Log capture is not confirmed for the S26 in this pass. Do not assume Galaxy Expert RAW behavior from older Ultras."
					})
				]
			},
			{
				id: "build",
				title: "Build",
				facts: [
					f({
						id: "ss-dim",
						label: "Dimensions and weight",
						value: "149.6 × 71.7 × 7.2 mm. 167 g for the Sub-6 configuration cited by Samsung.",
						confidence: "VERIFIED",
						source: "Samsung spec pages and newsroom dimension line",
						sourceType: "Manufacturer"
					}),
					f({
						id: "ss-sim",
						label: "SIM",
						value: "Regional. Gulf and Caribbean pages: nano-SIM + eSIM, including dual physical SIM or dual eSIM depending on slot population. GSMArena’s US unlocked row: one nano-SIM plus eSIM, not two physical SIMs. China: dual nano-SIM.",
						confidence: "REGIONAL",
						source: "Samsung Gulf spec page; GSMArena US vs international SIM row",
						sourceType: "Manufacturer"
					}),
					f({
						id: "ss-usb",
						label: "USB-C",
						value: "USB-C is official. GSMArena lists USB 3.2 with DisplayPort 1.2. Samsung’s retrieved spec rows did not print the USB generation.",
						confidence: "UNCONFIRMED",
						source: "GSMArena",
						sourceType: "Aggregator"
					}),
					f({
						id: "ss-spen",
						label: "S Pen",
						value: "Not supported on the Galaxy S26. Samsung Korea’s spec page says S Pen unsupported.",
						confidence: "VERIFIED",
						source: "Samsung Korea spec page",
						sourceType: "Manufacturer"
					}),
					f({
						id: "ss-repair",
						label: "Repairability",
						value: "Not independently verified in this pass.",
						confidence: "UNCONFIRMED",
						source: "This research pass, 1 Oct 2026",
						sourceType: "Independent lab"
					}),
					f({
						id: "ss-fp",
						label: "Biometrics",
						value: "Fingerprint sensor is official. GSMArena specifies an under-display ultrasonic reader. The ultrasonic detail is the aggregator’s wording.",
						confidence: "VERIFIED",
						source: "Samsung sensor list; GSMArena (ultrasonic)",
						sourceType: "Manufacturer"
					})
				]
			},
			{
				id: "software",
				title: "Software",
				facts: [
					f({
						id: "ss-launch-os",
						label: "Launch OS",
						value: "One UI 8.5 based on Android 16. Samsung’s spec pages often only say “Android.”",
						confidence: "VERIFIED",
						source: "SamMobile, 25 Feb 2026, citing the launch software; GSMArena",
						sourceType: "Specialist press"
					}),
					f({
						id: "ss-now",
						label: "Current software as of 1 Oct 2026",
						value: "One UI 9 based on Android 17 began rolling out in late September 2026. GSMArena reported the US T-Mobile build on 23 September. 9to5Google reported a wider US rollout around 28–29 September. It should not be described as installed on every S26 on 1 October.",
						confidence: "VERIFIED",
						source: "GSMArena, 23 Sep 2026; 9to5Google, 28–29 Sep 2026",
						sourceType: "Specialist press"
					}),
					f({
						id: "ss-policy",
						label: "Update policy",
						value: "Seven generations of Android OS upgrades and seven years of security updates, the same policy Samsung has applied to flagships since the S24. SamMobile describes support into 2033.",
						confidence: "VERIFIED",
						source: "SamMobile, 25 Feb 2026",
						sourceType: "Specialist press",
						note: "This is specialist press describing Samsung’s stated policy at launch, not a warranty PDF opened in this pass."
					}),
					f({
						id: "ss-dex",
						label: "DeX",
						value: "DeX for PC is discontinued on One UI 7 and later. Samsung’s July 2026 support note points Galaxy S26 owners to Link to Windows instead, and says Link to Windows does not put an Android desktop on the PC. On-phone DeX to an external monitor is listed by GSMArena but was not confirmed in that Samsung support article.",
						confidence: "REGIONAL",
						source: "Samsung Gulf support, updated 6 Jul 2026; GSMArena feature row",
						sourceType: "Manufacturer"
					}),
					f({
						id: "ss-ai",
						label: "Galaxy AI",
						value: "Launch marketing includes Photo Assist, Creative Studio, Now Nudge, Now Brief, and Bixby. Language coverage is limited: Photo Assist and Creative Studio were described with 41 languages, Now Nudge and Now Brief with fewer. Good Lock on One UI 9 was not re-verified in sources retrieved on 1 Oct 2026.",
						confidence: "VERIFIED",
						source: "Samsung US Galaxy S26 product page",
						sourceType: "Manufacturer"
					})
				]
			},
			{
				id: "network",
				title: "Network and radios",
				facts: [
					f({
						id: "ss-bands",
						label: "US bands",
						value: "GSMArena’s USA unlocked 5G list is Sub-6: n1, n2, n3, n5, n7, n8, n12, n20, n25, n28, n38, n41, n66, n71, n77, n78. It does not list mmWave n260 or n261. LTE includes band 71 and other US bands. This is an aggregator band table, not a carrier certification statement.",
						confidence: "REGIONAL",
						source: "GSMArena Galaxy S26 specification record",
						sourceType: "Aggregator"
					}),
					f({
						id: "ss-radio",
						label: "Wi-Fi, Bluetooth, NFC",
						value: "GSMArena lists Wi-Fi 7, Bluetooth 5.4, and NFC. Samsung’s newsroom spec excerpt retrieved here did not print those versions. NFC and 5G are part of the normal US retail configuration, but the version numbers stay at aggregator confidence.",
						confidence: "UNCONFIRMED",
						source: "GSMArena",
						sourceType: "Aggregator"
					}),
					f({
						id: "ss-sat",
						label: "Satellite features",
						value: "Not officially specified. No satellite-messaging feature was found for the Galaxy S26 in the sources checked. GNSS (GPS and other constellations) is not the same thing as satellite messaging.",
						confidence: "UNCONFIRMED",
						source: "This research pass, 1 Oct 2026",
						sourceType: "Manufacturer"
					})
				]
			}
		]
	},
	{
		id: "nothing",
		name: "Nothing Phone (3)",
		maker: "Nothing",
		context: "Current Nothing flagship as of 1 October 2026. Nothing did not ship a Phone (4) in 2026; CEO Carl Pei said the Phone (3) remains the flagship while the company focused on the Phone (4a) series. The Phone (4b), released July 2026, is a Snapdragon 6-series mid-ranger and is not this comparison.",
		groups: [
			{
				id: "identity",
				title: "Identity and price",
				facts: [
					f({
						id: "nt-which",
						label: "Which model",
						value: "Nothing Phone (3). Announced 1 July 2025 (launch coverage) / 2 July 2025 (GSMArena). Released 15 July 2025. First Nothing phone sold officially in the United States.",
						confidence: "VERIFIED",
						source: "Nothing product index; Gadgets360 launch report, 1 Jul 2025; GSMArena; 91mobiles, 30 Sep 2026",
						sourceType: "Manufacturer"
					}),
					f({
						id: "nt-price",
						label: "Price",
						value: "Nothing’s US product index lists the Phone (3) from $799 / £799. A later UK product page showed £699 for 12GB+256GB. A live US checkout price on 1 Oct 2026 was not captured, so $799 is the published starting figure, not a confirmed same-day store price.",
						confidence: "VERIFIED",
						source: "nothing.tech US product index (llms listing); UK product page",
						sourceType: "Manufacturer"
					}),
					f({
						id: "nt-sold",
						label: "Sold in the United States",
						value: "Yes, by Nothing. Specific AT&T, Verizon, or T-Mobile certification was not verified in the sources retrieved.",
						confidence: "VERIFIED",
						source: "Nothing US product index",
						sourceType: "Manufacturer"
					}),
					f({
						id: "nt-colors",
						label: "Colors",
						value: "Black and White.",
						confidence: "VERIFIED",
						source: "Nothing product pages; PhoneArena",
						sourceType: "Manufacturer"
					})
				]
			},
			{
				id: "display",
				title: "Display",
				facts: [
					f({
						id: "nt-disp",
						label: "Panel",
						value: "6.67-inch flexible AMOLED. 1260 × 2800. 460 ppi. 120Hz. 1 billion colors. HDR10+ per GSMArena. Gorilla Glass 7i front.",
						confidence: "VERIFIED",
						source: "Nothing product page; Nothing does not dispute GSMArena’s resolution figure, which matches the product page’s 1260×2800 / 460 ppi line",
						sourceType: "Manufacturer"
					}),
					f({
						id: "nt-nits",
						label: "Brightness",
						value: "Nothing claims 4500 nits peak. A long-term review on 91mobiles describes the panel as 1600 nits in ordinary discussion and says it is not LTPO, with refresh falling to 30Hz rather than 1Hz. PhoneArena’s display test lists 1501 nits at 20% APL.",
						confidence: "INDEPENDENTLY_VERIFIED",
						source: "Nothing product page; PhoneArena display test; 91mobiles long-term review, 2026",
						sourceType: "Independent lab",
						note: "4500 nits is a manufacturer peak, typically a tiny window. It is not the measured full-screen or 20% APL figure."
					}),
					f({
						id: "nt-pwm",
						label: "PWM",
						value: "Not officially specified in the Nothing lines retrieved. GSMArena says 960Hz. Wikipedia says 2160Hz. Those conflict, so neither is adopted.",
						confidence: "UNCONFIRMED",
						source: "GSMArena vs Wikipedia",
						sourceType: "Aggregator"
					}),
					f({
						id: "nt-aod",
						label: "Always-On Display",
						value: "Not officially specified in the sources checked.",
						confidence: "UNCONFIRMED",
						source: "This research pass, 1 Oct 2026",
						sourceType: "Manufacturer"
					}),
					f({
						id: "nt-stb",
						label: "Screen-to-body and shape",
						value: "GSMArena calculates about 88.5%. The chassis is described by reviewers as flat and angular, not a curved-edge display. Nothing’s own page does not print a screen-to-body ratio.",
						confidence: "INDEPENDENTLY_VERIFIED",
						source: "GSMArena; Nothing Phone (3) reviews",
						sourceType: "Aggregator"
					})
				]
			},
			{
				id: "performance",
				title: "Performance",
				facts: [
					f({
						id: "nt-soc",
						label: "Chipset",
						value: "Qualcomm Snapdragon 8s Gen 4. Nothing says 4 nm, eight cores up to 3.2 GHz, LPDDR5X RAM, UFS 4.0. This is the “8s” part, not Snapdragon 8 Elite.",
						confidence: "VERIFIED",
						source: "Nothing Phone (3) product page",
						sourceType: "Manufacturer"
					}),
					f({
						id: "nt-cpu",
						label: "CPU and GPU detail",
						value: "GSMArena lists SM8735 and a 1×3.21 GHz Cortex-X4 + A720 cluster, GPU Adreno 825. Nothing itself only publishes “up to 3.2 GHz” and the platform name. PhoneArena has used an inconsistent chip code on one page; the SM8735 listing is the one that matches the 8s Gen 4 name.",
						confidence: "UNCONFIRMED",
						source: "GSMArena",
						sourceType: "Aggregator"
					}),
					f({
						id: "nt-ram",
						label: "RAM and storage",
						value: "12GB RAM with 256GB, or 16GB RAM with 512GB. Nothing also advertises up to 24GB “RAM Boost,” which is virtual memory taken from storage on the 16GB model, not 24GB of physical RAM. No card slot.",
						confidence: "VERIFIED",
						source: "Nothing product page footnote; GSMArena memory row",
						sourceType: "Manufacturer"
					}),
					f({
						id: "nt-bench",
						label: "Benchmarks",
						value: "No Geekbench or 3DMark number is printed here. Reviewers describe everyday use as smooth and the chip as below the full 2025/2026 flagship Snapdragon parts. A partial AnTuTu mention in one 2026 roundup was incomplete in the source excerpt and is omitted.",
						confidence: "UNCONFIRMED",
						source: "This research pass, 1 Oct 2026",
						sourceType: "Independent lab"
					})
				]
			},
			{
				id: "battery",
				title: "Battery and charging",
				facts: [
					f({
						id: "nt-mah",
						label: "Capacity",
						value: "5150 mAh on the international model, which is the figure on Nothing’s support article. Indian units are widely reported at 5500 mAh (Wikipedia, GSMArena, Gadgets360). Nothing’s global support article retrieved here does not mention the Indian cell.",
						confidence: "REGIONAL",
						source: "Nothing Support, 1 Jul 2025 (5150 mAh); GSMArena and Wikipedia (India 5500 mAh)",
						sourceType: "Manufacturer"
					}),
					f({
						id: "nt-chem",
						label: "Chemistry",
						value: "GSMArena calls the pack silicon-carbon. Nothing’s support article does not name the chemistry. Not officially specified in the primary support text.",
						confidence: "UNCONFIRMED",
						source: "GSMArena",
						sourceType: "Aggregator"
					}),
					f({
						id: "nt-wired",
						label: "Wired charging",
						value: "Nothing Support: a full charge in about 60 minutes on the official charger, best with PPS, at room temperature, screen off. The product page says 1% to 50% in under 20 minutes. 65W, PD 3.0, PPS, and QC4 are the rates reported at launch by Gadgets360, GSMArena, and Wikipedia. The support article itself does not print “65W.”",
						confidence: "VERIFIED",
						source: "Nothing Support and product page (times); Gadgets360, 1 Jul 2025 (65W)",
						sourceType: "Manufacturer",
						note: "Charge time is official. The watt number is launch-coverage consensus, not the sentence on the support article."
					}),
					f({
						id: "nt-wireless",
						label: "Wireless",
						value: "15W wireless and 5W reverse wireless, stated on Nothing’s product page (the reverse mode is described as enough to top up Nothing Ear). Gadgets360 also lists 7.5W reverse wired. That wired-reverse figure is launch coverage, not the product-page sentence.",
						confidence: "VERIFIED",
						source: "Nothing product page; Gadgets360, 1 Jul 2025",
						sourceType: "Manufacturer"
					})
				]
			},
			{
				id: "camera",
				title: "Cameras",
				facts: [
					f({
						id: "nt-main",
						label: "Main",
						value: "50MP, about 24 mm, ƒ/1.7, PDAF, OIS. Wikipedia identifies an OmniVision OV50H and a 1/1.3-inch class size, matching GSMArena’s size listing. Nothing’s marketing page says “four 50MP cameras” without printing sensor part numbers.",
						confidence: "VERIFIED",
						source: "Nothing (“four 50MP”); GSMArena and Wikipedia for aperture, size, and part number",
						sourceType: "Manufacturer",
						note: "Resolution count is official. OV50H and ƒ/1.7 are secondary-source specifications widely repeated after launch."
					}),
					f({
						id: "nt-tele",
						label: "Telephoto",
						value: "50MP periscope, 3× optical, ƒ/2.7, PDAF, OIS. Wikipedia identifies a Samsung ISOCELL JN5, about 1/2.75 inch. Focal length in millimeters was not on the Nothing lines retrieved.",
						confidence: "VERIFIED",
						source: "Gadgets360 launch report; GSMArena; Wikipedia",
						sourceType: "Specialist press"
					}),
					f({
						id: "nt-uw",
						label: "Ultrawide",
						value: "50MP, ƒ/2.2, about 114°, Samsung ISOCELL JN1 per Wikipedia, about 1/2.76 inch. Autofocus is not listed on GSMArena’s ultrawide line. Macro is not officially specified.",
						confidence: "UNCONFIRMED",
						source: "GSMArena; Wikipedia",
						sourceType: "Aggregator"
					}),
					f({
						id: "nt-front",
						label: "Front",
						value: "50MP, ƒ/2.2, about 1/2.76 inch. Video up to 4K60 per GSMArena. Autofocus on the front camera was not clearly specified.",
						confidence: "VERIFIED",
						source: "GSMArena selfie row; Nothing “four 50MP” count",
						sourceType: "Aggregator"
					}),
					f({
						id: "nt-video",
						label: "Video",
						value: "Rear 4K at 30/60 fps and 1080p at 30/60 fps, gyro-EIS plus OIS, per GSMArena. Log, RAW video, and 8K were not found as official Phone (3) features in this pass.",
						confidence: "UNCONFIRMED",
						source: "GSMArena",
						sourceType: "Aggregator",
						note: "4K60 is consistently reported. It was not re-read from a Nothing spec PDF in this pass."
					}),
					f({
						id: "nt-glyph",
						label: "Glyph Matrix",
						value: "Circular rear LED matrix replacing the older strip Glyph. Gadgets360 describes 489 individually controllable micro-LEDs. A red recording indicator is part of the Phone (3) design and was carried onto later Nothing phones.",
						confidence: "VERIFIED",
						source: "Nothing product page; Gadgets360, 1 Jul 2025",
						sourceType: "Manufacturer"
					})
				]
			},
			{
				id: "build",
				title: "Build",
				facts: [
					f({
						id: "nt-dim",
						label: "Dimensions and weight",
						value: "160.6 × 75.59 × 8.99 mm. 218 g. Nothing’s lab note: actual size and weight can vary.",
						confidence: "VERIFIED",
						source: "Nothing Support, 1 Jul 2025",
						sourceType: "Manufacturer"
					}),
					f({
						id: "nt-materials",
						label: "Materials",
						value: "Aluminum frame, Gorilla Glass Victus back, Gorilla Glass 7i front, per GSMArena and launch reviews. IP68.",
						confidence: "VERIFIED",
						source: "Nothing IP68 disclaimer on the product page; GSMArena materials",
						sourceType: "Manufacturer"
					}),
					f({
						id: "nt-sim",
						label: "SIM",
						value: "GSMArena: nano-SIM + nano-SIM + eSIM, maximum two active. A US-only SIM exception was not found.",
						confidence: "REGIONAL",
						source: "GSMArena",
						sourceType: "Aggregator"
					}),
					f({
						id: "nt-usb",
						label: "USB and biometrics",
						value: "USB-C generation was not officially specified in the sources checked. Fingerprint reader is optical, under the display, per PhoneArena and GSMArena.",
						confidence: "UNCONFIRMED",
						source: "PhoneArena; GSMArena",
						sourceType: "Aggregator"
					}),
					f({
						id: "nt-repair",
						label: "Repairability",
						value: "Not independently verified in this pass.",
						confidence: "UNCONFIRMED",
						source: "This research pass, 1 Oct 2026",
						sourceType: "Independent lab"
					})
				]
			},
			{
				id: "software",
				title: "Software",
				facts: [
					f({
						id: "nt-launch-os",
						label: "Launch OS",
						value: "Nothing OS 3.5 on Android 15.",
						confidence: "VERIFIED",
						source: "Nothing; GSMArena; Wikipedia",
						sourceType: "Manufacturer"
					}),
					f({
						id: "nt-now",
						label: "Current software as of 1 Oct 2026",
						value: "Stable channel: Nothing OS 4.1 on Android 16. Nothing OS 5.0, based on Android 17, has been in open beta on the Phone (3) since 26 August 2026. Nothing’s schedule puts the stable release in mid-October 2026, so it is not the general-release OS on 1 October.",
						confidence: "VERIFIED",
						source: "91mobiles, TechRepublic, and Gizmochina, Sep 2026, citing Nothing’s OS 5 schedule",
						sourceType: "Specialist press"
					}),
					f({
						id: "nt-policy",
						label: "Update policy",
						value: "Reported as five major Android upgrades and seven years of security patches. That is the longest policy Nothing has offered. The sentence was not re-opened on a Nothing legal page in this pass.",
						confidence: "UNCONFIRMED",
						source: "Wikipedia, citing Nothing; BGR, 19 Jul 2026",
						sourceType: "Specialist press"
					}),
					f({
						id: "nt-features",
						label: "Nothing-specific software",
						value: "Glyph Matrix, Essential Space, Essential Search, Essential Notifications, and a Glyph developer API are documented Nothing features. Essential Voice was listed on Nothing’s site index.",
						confidence: "VERIFIED",
						source: "Nothing product and site index",
						sourceType: "Manufacturer"
					})
				]
			},
			{
				id: "network",
				title: "Network and radios",
				facts: [
					f({
						id: "nt-wifi",
						label: "Wi-Fi",
						value: "Nothing’s product page references Wi-Fi 7. The rest of the radio paragraph was truncated in the page extract. Bluetooth version was not captured.",
						confidence: "VERIFIED",
						source: "Nothing product page",
						sourceType: "Manufacturer",
						note: "Wi-Fi 7 is official enough to name. Bluetooth version: not officially specified in this pass."
					}),
					f({
						id: "nt-bands",
						label: "Bands",
						value: "GSMArena lists LTE bands that include 2, 4, 5, 12, 17, 25, 26, 41, 66, 71 and 5G bands that include n2, n5, n25, n41, n48, n66, n71, n77. No mmWave. That set can work on US Sub-6 networks, but it is not a carrier-certification claim.",
						confidence: "REGIONAL",
						source: "GSMArena",
						sourceType: "Aggregator"
					}),
					f({
						id: "nt-sat",
						label: "Satellite",
						value: "Not officially specified.",
						confidence: "UNCONFIRMED",
						source: "This research pass, 1 Oct 2026",
						sourceType: "Manufacturer"
					}),
					f({
						id: "nt-nfc",
						label: "NFC",
						value: "Not re-confirmed from a Nothing spec sentence in this pass. Not marked present by assumption.",
						confidence: "UNCONFIRMED",
						source: "This research pass, 1 Oct 2026",
						sourceType: "Manufacturer"
					})
				]
			}
		]
	},
	{
		id: "huawei",
		name: "Huawei Pura 80 Pro",
		maker: "Huawei",
		context: "Two different products in software and battery. China: HarmonyOS 5.1 (some units HarmonyOS 6), 5700 mAh typical. International markets such as Hong Kong and Europe: EMUI 15.0, not HarmonyOS, and a 5170 mAh cell. Not an official US phone.",
		groups: [
			{
				id: "identity",
				title: "Identity and price",
				facts: [
					f({
						id: "hw-name",
						label: "Official name",
						value: "HUAWEI Pura 80 Pro. Not the Pura 80, Pura 80 Pro+, or Pura 80 Ultra.",
						confidence: "VERIFIED",
						source: "Huawei consumer spec pages, China and international",
						sourceType: "Manufacturer"
					}),
					f({
						id: "hw-launch",
						label: "Launch",
						value: "GSMArena: announced 11 June 2025, released 12 June 2025. Wikipedia: first released 11 June 2025, with Europe arriving later, around October 2025.",
						confidence: "VERIFIED",
						source: "GSMArena; Wikipedia",
						sourceType: "Aggregator"
					}),
					f({
						id: "hw-price",
						label: "US price",
						value: "No official US MSRP. Huawei does not sell this phone through a US store. Marketplace discounts in Hong Kong or elsewhere are not an official price and are not listed here. An official China or EU shelf price was not captured from a Huawei buy page in this pass.",
						confidence: "VERIFIED",
						source: "Huawei regional availability; Wikipedia availability list",
						sourceType: "Manufacturer"
					}),
					f({
						id: "hw-sold",
						label: "Sold in the United States",
						value: "No. Wikipedia’s availability list is China, Southeast Asia, and Europe. No US carrier compatibility is claimed.",
						confidence: "VERIFIED",
						source: "Wikipedia availability; absence from Huawei US retail",
						sourceType: "Specialist press"
					}),
					f({
						id: "hw-colors",
						label: "Colors",
						value: "China official page: Glazed Gold, Glazed White, Glazed Black. Hong Kong, Malaysia, Spain, and Germany official pages: Glazed Red, Glazed White, Glazed Black. Gold versus red is a real regional split.",
						confidence: "REGIONAL",
						source: "Huawei China, Hong Kong, Malaysia, Spain, and Germany spec pages",
						sourceType: "Manufacturer"
					})
				]
			},
			{
				id: "display",
				title: "Display",
				facts: [
					f({
						id: "hw-disp",
						label: "Panel",
						value: "LTPO OLED. 1–120Hz adaptive. 1440Hz PWM. Up to 300Hz touch sampling. 1.07 billion colors, P3. Kunlun Glass 2. Second-generation Kunlun Glass on the China page.",
						confidence: "VERIFIED",
						source: "Huawei China and international spec pages",
						sourceType: "Manufacturer"
					}),
					f({
						id: "hw-size",
						label: "Size and resolution",
						value: "6.8-inch class. Diagonal 6.78 inches as a standard rectangle; visible area slightly smaller. 2848 × 1276, 460 ppi. Huawei notes effective pixels are slightly fewer because of rounded corners.",
						confidence: "VERIFIED",
						source: "Huawei spec pages",
						sourceType: "Manufacturer"
					}),
					f({
						id: "hw-nits",
						label: "Brightness",
						value: "Not printed on the official spec pages retrieved. GSMArena lists 3000 nits peak and HDR Vivid. That nit number is an aggregator figure, not a Huawei sentence captured here.",
						confidence: "UNCONFIRMED",
						source: "GSMArena",
						sourceType: "Aggregator"
					}),
					f({
						id: "hw-aod",
						label: "Always-On Display",
						value: "Not on the official spec lines retrieved. A German-language review describes an attention-aware always-on display on the international unit. That is one reviewer’s observation, not a spec-sheet line.",
						confidence: "UNCONFIRMED",
						source: "tech-zentrum review, Nov 2025",
						sourceType: "Independent lab"
					}),
					f({
						id: "hw-curve",
						label: "Flat versus curved",
						value: "Not officially specified. Do not infer curvature from the millimeter thickness.",
						confidence: "UNCONFIRMED",
						source: "Huawei spec pages",
						sourceType: "Manufacturer"
					}),
					f({
						id: "hw-stb",
						label: "Screen-to-body",
						value: "About 89.7% as calculated by GSMArena. Not a Huawei figure.",
						confidence: "INDEPENDENTLY_VERIFIED",
						source: "GSMArena",
						sourceType: "Aggregator"
					})
				]
			},
			{
				id: "performance",
				title: "Performance",
				facts: [
					f({
						id: "hw-soc",
						label: "Chipset",
						value: "Kirin 9020, octa-core, on international official pages (Hong Kong, Malaysia, Spain, Germany). The China spec excerpt retrieved did not print a chip name. Wikipedia says the Pura 80 Pro uses Kirin 9020, while the plain Pura 80 uses Kirin 9010S. Clocks, GPU, and process node are not on Huawei’s spec pages.",
						confidence: "VERIFIED",
						source: "Huawei international spec pages; Wikipedia for the China-model chip assignment",
						sourceType: "Manufacturer",
						note: "A 7 nm / Maleoon 920 listing on a secondary Indonesian spec page is not used. Huawei did not publish those details on the pages checked."
					}),
					f({
						id: "hw-ram",
						label: "RAM and storage",
						value: "China: 12GB RAM with 256GB, 512GB, or 1TB. Several international spec pages print only 12GB + 512GB. No memory card. Usable space is smaller than the nominal ROM.",
						confidence: "REGIONAL",
						source: "Huawei China spec page; Huawei Hong Kong, Malaysia, Spain, Germany spec pages",
						sourceType: "Manufacturer"
					}),
					f({
						id: "hw-bench",
						label: "Benchmarks",
						value: "No score is printed. A Hungarian lab review (Mobilarena, Feb 2026) describes Kirin 9020 as adequate for daily use but below the price class, and in some CPU tests close to or behind Huawei’s own 2023 P60 Pro. That is a qualitative independent report, not a number you can rank against A19 Pro or Snapdragon 8 Elite Gen 5.",
						confidence: "INDEPENDENTLY_VERIFIED",
						source: "Mobilarena, 17 Feb 2026",
						sourceType: "Independent lab"
					})
				]
			},
			{
				id: "battery",
				title: "Battery and charging",
				facts: [
					f({
						id: "hw-mah",
						label: "Capacity",
						value: "China: 5700 mAh typical, 5580 mAh rated. International pages: 5170 mAh. Hong Kong’s page calls 5170 mAh a typical value; Malaysia, Spain, and Germany call 5170 mAh a rated value. Do not merge these into one battery.",
						confidence: "REGIONAL",
						source: "Huawei China, Hong Kong, Malaysia, Spain, and Germany spec pages",
						sourceType: "Manufacturer"
					}),
					f({
						id: "hw-wired",
						label: "Wired charging",
						value: "Up to 100W (20V/5A) with a Huawei SuperCharge charger and cable. Also compatible with several lower Huawei profiles and 9V/2A. China page: 18W wired reverse charging to devices Huawei has tested.",
						confidence: "VERIFIED",
						source: "Huawei spec pages",
						sourceType: "Manufacturer",
						note: "100W is the maximum with Huawei’s own 100W kit, not a guarantee with a generic laptop charger."
					}),
					f({
						id: "hw-wireless",
						label: "Wireless",
						value: "China official page: 80W Huawei wireless SuperCharge with a separately sold 80W stand or car charger, plus wireless reverse charging. Wattage of wireless reverse is not stated. International official excerpts retrieved emphasize 100W wired and do not clearly restate 80W. A Hong Kong retail write-up (ezone) reports 80W wireless with the charger sold separately.",
						confidence: "REGIONAL",
						source: "Huawei China spec page; ezone.hk retail spec summary, Sep 2026",
						sourceType: "Manufacturer"
					})
				]
			},
			{
				id: "camera",
				title: "Cameras",
				facts: [
					f({
						id: "hw-main",
						label: "Main",
						value: "50MP 1-inch Ultra Lighting camera. Variable aperture ƒ/1.6–ƒ/4.0. OIS. Autofocus. This is the clearest officially stated 1-inch sensor in this comparison.",
						confidence: "VERIFIED",
						source: "Huawei China and international spec pages",
						sourceType: "Manufacturer"
					}),
					f({
						id: "hw-tele",
						label: "Telephoto",
						value: "48MP Ultra Lighting macro telephoto, ƒ/2.1, OIS. About 4× optical. Huawei lists focal lengths of 13 mm, 22.5 mm, and 92.5 mm for the set, and says 4× optical is approximate. Macro from the telephoto is an official mode, including macro video.",
						confidence: "VERIFIED",
						source: "Huawei China spec page",
						sourceType: "Manufacturer"
					}),
					f({
						id: "hw-uw",
						label: "Ultrawide",
						value: "40MP, ƒ/2.2. Autofocus is supported on the rear system. A dedicated ultrawide macro mode is not how Huawei describes macro; macro is tied to the telephoto.",
						confidence: "VERIFIED",
						source: "Huawei spec pages",
						sourceType: "Manufacturer"
					}),
					f({
						id: "hw-color",
						label: "Spectral camera",
						value: "1.5MP multispectral “Red Maple” / Ultra Chroma color sensor. It is not a fourth pictorial lens.",
						confidence: "VERIFIED",
						source: "Huawei spec pages",
						sourceType: "Manufacturer"
					}),
					f({
						id: "hw-zoom",
						label: "Zoom range",
						value: "About 4× optical and up to 100× digital. 100× is digital, not optical.",
						confidence: "VERIFIED",
						source: "Huawei China spec page",
						sourceType: "Manufacturer"
					}),
					f({
						id: "hw-front",
						label: "Front",
						value: "13MP ultrawide, ƒ/2.0, autofocus. Photos up to 4160×3120 depending on mode. Video up to 3840×2160. 1080p at 240 fps slow motion on the front is listed, with a note that mode changes pixel counts.",
						confidence: "VERIFIED",
						source: "Huawei China spec page",
						sourceType: "Manufacturer"
					}),
					f({
						id: "hw-video",
						label: "Video",
						value: "Up to 4K (3840×2160). AIS stabilization. HDR Vivid. Log. RAW stills. 1080p at 960 fps super slow motion is produced with AI frame insertion, not a native 960 fps sensor readout. Huawei says so in the footnote.",
						confidence: "VERIFIED",
						source: "Huawei China spec page",
						sourceType: "Manufacturer"
					})
				]
			},
			{
				id: "build",
				title: "Build",
				facts: [
					f({
						id: "hw-dim",
						label: "Dimensions and weight",
						value: "163 × 76.1 × 8.3 mm. About 219 g including the battery. Huawei says real units vary with process and measurement.",
						confidence: "VERIFIED",
						source: "Huawei spec pages",
						sourceType: "Manufacturer"
					}),
					f({
						id: "hw-materials",
						label: "Materials",
						value: "Front protection is Kunlun Glass 2. GSMArena describes an aluminum frame and glass back. Huawei’s spec page does not use the words “aluminum” or “glass back” in the excerpt retrieved, so the frame and back materials stay at aggregator confidence.",
						confidence: "UNCONFIRMED",
						source: "GSMArena build row; Huawei (front glass only)",
						sourceType: "Aggregator"
					}),
					f({
						id: "hw-ip",
						label: "Ingress",
						value: "IP68 and IP69. IP68 test Huawei cites: 2 meters, 30 minutes, still water, temperature difference within 5°C. IP69 is a hot high-pressure spray test, not a swimming rating. Resistance is not permanent.",
						confidence: "VERIFIED",
						source: "Huawei China spec page",
						sourceType: "Manufacturer"
					}),
					f({
						id: "hw-usb",
						label: "USB-C",
						value: "USB Type-C, USB 3.1 Gen 1, but the cable in the box is USB 2.0. A separate cable is required for the faster mode.",
						confidence: "VERIFIED",
						source: "Huawei China spec page",
						sourceType: "Manufacturer"
					}),
					f({
						id: "hw-fp",
						label: "Fingerprint",
						value: "Side-mounted fingerprint sensor, plus infrared, laser autofocus, multispectral, barometer, and the usual motion sensors.",
						confidence: "VERIFIED",
						source: "Huawei China sensor list",
						sourceType: "Manufacturer"
					}),
					f({
						id: "hw-sim",
						label: "SIM",
						value: "China’s NFC note assumes a SIM 1 slot. GSMArena lists either dual nano-SIM, or nano-SIM + nano-SIM + eSIM with two active, depending on unit. Treat SIM layout as regional and not fully specified on the pages quoted here.",
						confidence: "REGIONAL",
						source: "Huawei China NFC footnote; GSMArena",
						sourceType: "Aggregator"
					}),
					f({
						id: "hw-repair",
						label: "Repairability",
						value: "Not independently verified in this pass.",
						confidence: "UNCONFIRMED",
						source: "This research pass, 1 Oct 2026",
						sourceType: "Independent lab"
					})
				]
			},
			{
				id: "software",
				title: "Software",
				intro: "HarmonyOS on the China phone is not Android and not iOS. EMUI on the international phone is an Android-based (AOSP) skin without Google Mobile Services.",
				facts: [
					f({
						id: "hw-os-cn",
						label: "China operating system",
						value: "HarmonyOS 5.1. Official note: HOTA upgrade to HarmonyOS 6 or later, and some units ship with HarmonyOS 6 already. Huawei’s software name line refers to “Huawei Terminal Harmony Intelligent Device Operating System Software V5.0,” with some units on V6.0. This is Huawei’s own OS using HarmonyOS app packages. It is not Android and it is not iOS.",
						confidence: "VERIFIED",
						source: "Huawei China spec page; Huawei Central, Jul 2025",
						sourceType: "Manufacturer"
					}),
					f({
						id: "hw-os-intl",
						label: "International operating system",
						value: "EMUI 15.0. Official Hong Kong, Malaysia, Spain, and Germany pages still said EMUI 15.0 when checked. EMUI is Huawei’s interface on an Android open-source base. It is not HarmonyOS, even when some features look similar. A Hungarian review identifies the base as Android 12 AOSP. Huawei’s spec page does not print the AOSP version, so “Android 12” stays a reviewer finding.",
						confidence: "VERIFIED",
						source: "Huawei international spec pages; Mobilarena, Feb 2026 (AOSP version)",
						sourceType: "Manufacturer"
					}),
					f({
						id: "hw-gms",
						label: "Google Mobile Services",
						value: "Not preinstalled and not officially supported on either variant. International EMUI can install many Android APKs. Banking apps, Google Pay, and Android Auto often fail. Reviewers describe microG plus Aurora Store as an unofficial workaround, not as a Huawei feature. China HarmonyOS 5 uses native HarmonyOS packages through AppGallery. Do not describe that as “it runs Android apps.”",
						confidence: "VERIFIED",
						source: "Huawei Central; Mobilarena, Feb 2026; tech-zentrum, Nov 2025",
						sourceType: "Specialist press"
					}),
					f({
						id: "hw-hms",
						label: "Huawei Mobile Services",
						value: "AppGallery, Huawei ID, and Petal Search are the international app path. China models add Huawei’s own services, including Celia-related features where Huawei enables them, and BeiDou messaging through Huawei’s messaging app. An exact current AI feature list for HarmonyOS 6 on this model was not re-verified item by item.",
						confidence: "VERIFIED",
						source: "Huawei spec pages; international reviews",
						sourceType: "Manufacturer"
					}),
					f({
						id: "hw-support",
						label: "Update policy",
						value: "Not stated as a year count on the official spec pages. China units are officially eligible to move from HarmonyOS 5.1 to HarmonyOS 6. An EU review says Huawei points to the EU five-year software-support obligation. That is not a global promise and was not copied from a Huawei policy page.",
						confidence: "UNCONFIRMED",
						source: "Huawei China upgrade note; Mobilarena, Feb 2026",
						sourceType: "Independent lab"
					})
				]
			},
			{
				id: "network",
				title: "Network and radios",
				facts: [
					f({
						id: "hw-wifi",
						label: "Wi-Fi and Bluetooth",
						value: "Wi-Fi 802.11 a/b/g/n/ac/ax/be (Wi-Fi 7), 2×2 MIMO, EHT160. Bluetooth 5.2 with SBC, AAC, LDAC, and L2HC. NFC with Huawei Wallet. These are on the China spec page.",
						confidence: "VERIFIED",
						source: "Huawei China spec page",
						sourceType: "Manufacturer"
					}),
					f({
						id: "hw-sat",
						label: "Satellite",
						value: "BeiDou satellite messaging. Hardware is present on the China model. Use is limited to mainland China, requires activation, and needs open sky. It is not a US satellite feature and is not Emergency SOS via Globalstar.",
						confidence: "REGIONAL",
						source: "Huawei China spec page",
						sourceType: "Manufacturer"
					}),
					f({
						id: "hw-us-bands",
						label: "US network compatibility",
						value: "Not verified. The phone is not sold for US carriers. A full US band list was not on the official pages retrieved. Do not assume n71, mmWave, or carrier voice-over-LTE support.",
						confidence: "UNCONFIRMED",
						source: "This research pass, 1 Oct 2026",
						sourceType: "Manufacturer"
					})
				]
			}
		]
	}
];
var softwareColumns = [
	{
		id: "iphone",
		title: "iPhone 17 Pro · iOS 27",
		points: [
			{
				h: "Version",
				body: "Shipped on iOS 26 in September 2025. As of 1 October 2026 the current major release is iOS 27, which Apple lists as compatible. iOS 27’s headline assistant is Siri AI, English first, not initially in the EU."
			},
			{
				h: "Lock Screen and Home Screen",
				body: "iOS 26 introduced Liquid Glass and kept the Lock Screen’s depth, widgets, and always-on clock. The Home Screen is still an icon grid plus a dock. There is no classic app drawer. The App Library is the full catalog. Widgets can sit on the Home Screen and Lock Screen."
			},
			{
				h: "Control Center and notifications",
				body: "Control Center is a separate surface from notifications, with grouped connectivity, media, and focus controls. Notification grouping and scheduled summary are iOS behaviors. Focus modes still gate who can break through."
			},
			{
				h: "Multitasking",
				body: "One full-screen app at a time on this phone size, plus picture-in-picture, Slide Over is an iPad behavior and is not claimed here. The app switcher is a card stack. No desktop mode."
			},
			{
				h: "AI",
				body: "Apple Intelligence tools from iOS 26 (Live Translation, visual intelligence, on-device model for developers) plus iOS 27 Siri AI. The 17 Pro is in the hardware tier MacRumors says can run the heavier on-device model. Language and EU availability are limited."
			},
			{
				h: "Privacy",
				body: "App Tracking Transparency, on-device processing for parts of Apple Intelligence, Lockdown Mode, and Face ID. iMessage and FaceTime are end-to-end encrypted in Apple’s normal deployment. Apple still holds iCloud keys unless Advanced Data Protection is turned on. That last point is a standing Apple design, not a new 17 Pro-only feature."
			},
			{
				h: "Customization",
				body: "Tinted icons, widgets, Lock Screen, Focus, and Control Center shortcuts. Much less free-form than One UI. No system-wide icon pack store from Apple."
			},
			{
				h: "Continuity",
				body: "Handoff, Universal Clipboard, AirDrop, iPhone mirroring on Mac, and Continuity Camera are the Apple stack. They require other Apple devices. They do not extend to a Windows PC the way Link to Windows does."
			}
		]
	},
	{
		id: "galaxy",
		title: "Galaxy S26 · One UI 9 rolling out",
		points: [
			{
				h: "Version",
				body: "Launched on One UI 8.5 / Android 16. One UI 9 / Android 17 started reaching US units in the last week of September 2026. On 1 October 2026 that update is a rollout, not a guarantee."
			},
			{
				h: "Lock Screen and Home Screen",
				body: "One UI uses a large-type Lock Screen, widget stacks, and a Home Screen that can hide the app drawer or keep it. Icons, grid, and folders are adjustable. Edge panels have been part of One UI; whether every edge gesture from older flagships survived unchanged into One UI 9 was not re-tested here."
			},
			{
				h: "Quick Settings",
				body: "The notification shade and quick-settings tiles are one pull-down surface, split by swipe direction. Tiles are reorderable. That layout is the One UI pattern, distinct from iOS Control Center."
			},
			{
				h: "Multitasking",
				body: "Split screen and pop-up view are standard One UI phone features. DeX for PC is discontinued on One UI 7 and later. Samsung tells S26 owners to use Link to Windows, which does not mirror a full Android desktop onto the PC. Monitor DeX is listed by GSMArena and not confirmed in that support note."
			},
			{
				h: "Galaxy AI",
				body: "Photo Assist, Creative Studio, Now Nudge, Now Brief, and Bixby are on the US product page. Language lists are shorter for some of those tools. Good Lock on One UI 9 was not re-verified, so it is not described as a confirmed S26 feature."
			},
			{
				h: "Privacy",
				body: "Google Play Protect, Android permission dashboard, Samsung Knox, and a secure folder have been Galaxy flagship features. Private folder behavior on the One UI 9 build was not independently re-tested for this page. Google account sync is present because this is a GMS phone."
			},
			{
				h: "Ecosystem",
				body: "Quick Share, Smart Switch, Galaxy Watch, Buds, and Link to Windows. The S26 is named on Samsung’s Link to Windows device list."
			}
		]
	},
	{
		id: "nothing",
		title: "Nothing Phone (3) · Nothing OS 4.1 stable",
		points: [
			{
				h: "Version",
				body: "Launched on Nothing OS 3.5 / Android 15. Stable software on 1 October 2026 is Nothing OS 4.1 / Android 16. Nothing OS 5.0 / Android 17 is in open beta, with stable scheduled for mid-October 2026."
			},
			{
				h: "Home, lock, quick settings",
				body: "Nothing OS is a monochrome, dot-grid skin on Android. It has a Lock Screen, a Home Screen, an app drawer, and quick settings. Widgets exist. The visual identity is the dot matrix, not a copy of One UI or iOS."
			},
			{
				h: "Glyph Matrix",
				body: "The rear is a round LED matrix (launch coverage: 489 micro-LEDs) for notifications, timers, and a Glyph progress language. A red recording light shows when video is capturing. This is hardware UI, not just a software theme."
			},
			{
				h: "Nothing apps",
				body: "Essential Space and Essential Search are the named organization tools. Essential Notifications and a Glyph developer API are documented. There is no Nothing desktop mode."
			},
			{
				h: "AI",
				body: "Essential-series tools are Nothing’s AI surface. Nothing OS 5.0 is described by the company as adding further Essential AI features, but that build is still beta on this date."
			},
			{
				h: "Privacy and apps",
				body: "It is a normal Android phone with Google Mobile Services in markets where Nothing ships GMS, including the US model’s retail positioning. Play Store availability is the practical difference versus Huawei. A Nothing-specific privacy white paper was not retrieved."
			},
			{
				h: "Customization",
				body: "Nothing keeps the system visually strict. Icon and widget options exist inside Nothing OS, but the point of the skin is fewer themes, not Good-Lock-style theming. Do not describe older Phone (1) Glyph toys as Phone (3) features unless they were carried into the Matrix."
			}
		]
	},
	{
		id: "huawei",
		title: "Pura 80 Pro · two operating systems",
		points: [
			{
				h: "China",
				body: "HarmonyOS 5.1, with an official path to HarmonyOS 6. Some units ship on HarmonyOS 6. This is Huawei’s own operating system. Apps are HarmonyOS packages. Calling it Android or iOS is incorrect."
			},
			{
				h: "International",
				body: "EMUI 15.0 on the Hong Kong and European spec pages. EMUI sits on Android’s open-source code. A 2026 EU review identifies that base as Android 12. Huawei does not print the AOSP version on the spec page, so treat “Android 12” as a reviewer finding."
			},
			{
				h: "Home and controls",
				body: "Both skins use a home screen, a control panel, notifications, and widgets. HarmonyOS 5’s control layout is often compared with iOS by reviewers. EMUI keeps an Android-style app drawer. The simulation below switches between those two layouts. It is not an official screenshot."
			},
			{
				h: "Multitasking",
				body: "Split screen and floating windows have been part of recent Huawei phones. Which of those gestures shipped unchanged on EMUI 15 versus HarmonyOS 5.1 was not re-verified feature by feature, so this page does not claim a specific split-screen limit."
			},
			{
				h: "Apps",
				body: "Huawei Mobile Services and AppGallery on both variants. International phones can sideload many Android APKs; Petal Search helps find them. Google Mobile Services are not official. MicroG is a community workaround and breaks pieces of Google Pay, Android Auto, and some banking apps. China HarmonyOS 5 does not use APKs as its native format."
			},
			{
				h: "AI",
				body: "Huawei’s camera spec lists AI composition, AI night, and other camera modes on the China page. A full HarmonyOS 6 assistant feature list for this model was not verified line by line."
			},
			{
				h: "Privacy",
				body: "No Google account is required, which some people want and which also removes Google’s spam and account protections. Huawei ID is the account. Independent security audits of HarmonyOS 5.1 versus iOS 27 were not retrieved."
			}
		]
	}
];
var uxAxes = [
	{
		axis: "Customization",
		scores: {
			iphone: 6,
			galaxy: 8,
			nothing: 5,
			huawei: 7
		},
		why: "One UI exposes more layout controls than iOS. Nothing OS is intentionally narrow. HarmonyOS/EMUI are flexible, but Good Lock on One UI 9 was not re-verified, so Galaxy is not scored as a 10."
	},
	{
		axis: "Privacy controls",
		scores: {
			iphone: 8,
			galaxy: 7,
			nothing: 7,
			huawei: 6
		},
		why: "iOS permission prompts and on-device Apple Intelligence are the clearest documented model. Galaxy and Nothing inherit Android’s permission dashboard plus Google. Huawei avoids Google and also avoids Google’s review pipeline. None of these scores is an audit."
	},
	{
		axis: "Multitasking",
		scores: {
			iphone: 6,
			galaxy: 8,
			nothing: 7,
			huawei: 7
		},
		why: "Android split screen and pop-ups beat the iPhone’s single window. Galaxy loses points because DeX for PC is gone. Huawei’s floating-window set is not fully re-specified here, so it stays even with Nothing."
	},
	{
		axis: "Ease of use",
		scores: {
			iphone: 9,
			galaxy: 7,
			nothing: 8,
			huawei: 5
		},
		why: "For a US buyer. iOS 27 is a finished release. One UI 9 is mid-rollout. Nothing OS is simple if you accept the monochrome rules. Huawei in the US means missing apps and no official support."
	},
	{
		axis: "AI integration",
		scores: {
			iphone: 8,
			galaxy: 8,
			nothing: 6,
			huawei: 6
		},
		why: "Siri AI and Galaxy AI are shipping product surfaces with published language limits. Nothing’s bigger AI pass is still a beta. Huawei’s confirmed AI list in this pass is mostly camera modes."
	},
	{
		axis: "Notification management",
		scores: {
			iphone: 8,
			galaxy: 8,
			nothing: 7,
			huawei: 6
		},
		why: "iOS Focus and One UI’s shade are both mature. Nothing adds a rear LED channel, which is useful and also another place to look. Huawei’s two skins are not scored from a side-by-side notification test."
	},
	{
		axis: "File management",
		scores: {
			iphone: 5,
			galaxy: 8,
			nothing: 8,
			huawei: 7
		},
		why: "The Files app on iOS is still more locked down than Android’s file managers. EMUI can manage files but sharing them into Google apps is the weak point."
	},
	{
		axis: "App ecosystem",
		scores: {
			iphone: 9,
			galaxy: 9,
			nothing: 9,
			huawei: 3
		},
		why: "US context. iPhone, Galaxy, and Nothing Phone (3) can run the Play Store or the App Store. The Pura 80 Pro cannot officially. A 3 is “possible with compromises,” not “no apps exist.” Inside China, HarmonyOS would score much higher. That is a different market."
	},
	{
		axis: "Cross-device",
		scores: {
			iphone: 9,
			galaxy: 8,
			nothing: 4,
			huawei: 4
		},
		why: "Apple continuity is the deepest if you own the other devices. Samsung’s Link to Windows is real and DeX-for-PC is not. Nothing’s ecosystem is phones and audio. Huawei’s Super Device story does not include US Google or Apple gear."
	},
	{
		axis: "Accessibility",
		scores: {
			iphone: 9,
			galaxy: 8,
			nothing: 6,
			huawei: 6
		},
		why: "Apple documents a broad iOS 27 accessibility set, including richer VoiceOver image descriptions. Samsung’s accessibility suite is long-standing. Nothing and Huawei were not compared feature by feature in this pass, so they are not given a high score by inheritance."
	},
	{
		axis: "Gaming",
		scores: {
			iphone: 8,
			galaxy: 8,
			nothing: 6,
			huawei: 5
		},
		why: "A19 Pro and the US Snapdragon S26 are the current-class chips, with ray tracing on the Apple side officially. Nothing’s 8s Gen 4 is a step down. Kirin 9020 was not shown to match either in the one lab review retrieved. No frame-rate table is invented."
	},
	{
		axis: "Productivity",
		scores: {
			iphone: 8,
			galaxy: 8,
			nothing: 6,
			huawei: 4
		},
		why: "iPhone plus Mac, or Galaxy plus Link to Windows, are the workable US setups. Nothing is a phone, not a desk system. Huawei’s missing Google Workspace and office-app friction dominates the US score."
	}
];
var ecosystems = [
	{
		id: "iphone",
		name: "Apple",
		rows: [
			{
				k: "Computers",
				v: "Mac. iPhone Mirroring, Handoff, and Universal Clipboard require a Mac on a current macOS. No official Windows companion with the same depth."
			},
			{
				k: "Tablets",
				v: "iPad. Sidecar and Universal Control are Mac/iPad features, not iPhone features. iPhone pairs for calls and hotspot."
			},
			{
				k: "Watches",
				v: "Apple Watch. watchOS 27 shipped alongside iOS 27. An Apple Watch does not pair to the Galaxy, Nothing, or Huawei phones."
			},
			{
				k: "Earbuds",
				v: "AirPods. Spatial audio and automatic switching are inside the Apple account. Other Bluetooth headphones work without those features."
			},
			{
				k: "Cloud",
				v: "iCloud. Advanced Data Protection is optional. Photos, Keychain, and device backup are the core."
			},
			{
				k: "Sharing",
				v: "AirDrop between Apple devices. NameDrop and proximity features depend on the other device also being Apple."
			},
			{
				k: "Messages and calls",
				v: "iMessage and FaceTime are Apple-only. RCS and SMS still exist for everyone else. Live Translation in Phone was language-limited at the iOS 26 launch."
			},
			{
				k: "Smart home",
				v: "HomeKit, and Thread via the N1 chip on this iPhone. Matter accessories can also be reached through other ecosystems. HomeKit Secure Video 4K is an iOS 27 item Apple has described for supported cameras."
			}
		]
	},
	{
		id: "galaxy",
		name: "Samsung and Google",
		rows: [
			{
				k: "Computers",
				v: "Link to Windows is the supported PC path on One UI 7 and later, including the S26. DeX for PC is discontinued. A Samsung PC is not required."
			},
			{
				k: "Tablets",
				v: "Galaxy Tab can pair through Samsung’s shared features and Quick Share. Exact Tab S continuity features were not re-listed from a 2026 support page."
			},
			{
				k: "Watches",
				v: "Galaxy Watch. Wear OS watches from other brands can also pair because this is Android. Apple Watch cannot."
			},
			{
				k: "Earbuds",
				v: "Galaxy Buds4 launched with the S26 series. Standard Bluetooth audio works with other buds."
			},
			{
				k: "Cloud",
				v: "Google account plus Samsung account. Photos can live in Google Photos. Samsung Cloud is not a full replacement for iCloud device restore in Apple’s sense."
			},
			{
				k: "Sharing",
				v: "Quick Share with nearby Android and Chromebook devices. Wireless PowerShare is for charging accessories, not for files."
			},
			{
				k: "Messages and calls",
				v: "Google Messages, RCS where the carrier supports it, and phone-link calls on Windows. No iMessage."
			},
			{
				k: "Smart home",
				v: "SmartThings, plus Google Home. Bixby routines exist. A full SmartThings device matrix was not copied into this app."
			}
		]
	},
	{
		id: "nothing",
		name: "Nothing",
		rows: [
			{
				k: "Computers",
				v: "No Nothing computer. File transfer is Android’s usual USB, Nearby Share / Quick Share, and cloud drives."
			},
			{
				k: "Tablets",
				v: "No Nothing tablet line was confirmed as part of this phone’s continuity story."
			},
			{
				k: "Watches",
				v: "No Nothing watch was verified. Wear OS or other Bluetooth watches may pair as generic Android accessories. That was not lab-checked."
			},
			{
				k: "Earbuds",
				v: "Nothing Ear and CMF audio products. The phone’s 5W reverse wireless is explicitly aimed at topping those up. Integration is audio and Glyph-adjacent, not a watch-style health platform."
			},
			{
				k: "Cloud",
				v: "Google account. Nothing does not operate an iCloud equivalent in the sources checked."
			},
			{
				k: "Sharing",
				v: "Android nearby sharing. No proprietary high-speed fabric was documented."
			},
			{
				k: "Messages and calls",
				v: "Google Messages and the Phone app. Essential Space can hold notes and captures. It is not a messaging network."
			},
			{
				k: "Smart home",
				v: "Not a Nothing platform in the sources checked. Google Home would be the Android path. Not re-tested on this phone."
			}
		]
	},
	{
		id: "huawei",
		name: "Huawei",
		rows: [
			{
				k: "Computers",
				v: "Huawei PC collaboration features exist in markets where Huawei sells them. They were not verified against a US Windows or Mac workflow, and Google Drive integration is not official."
			},
			{
				k: "Tablets",
				v: "Huawei MatePad devices run HarmonyOS or EMUI depending on region. They do not join an Apple or Samsung account."
			},
			{
				k: "Watches",
				v: "Huawei Watch. It does not replace an Apple Watch or a Galaxy Watch on those phones, and the reverse is also true."
			},
			{
				k: "Earbuds",
				v: "Huawei FreeBuds. LDAC and L2HC are listed on the China Pura 80 Pro spec page."
			},
			{
				k: "Cloud",
				v: "Huawei ID cloud. Google Photos and iCloud are not system services. International users often add a third-party cloud by sideload."
			},
			{
				k: "Sharing",
				v: "Huawei Share between Huawei devices. Not AirDrop, not Quick Share with the Google stack, unless an app provides it."
			},
			{
				k: "Messages and calls",
				v: "Huawei’s own messaging stack in China, including the BeiDou path. International SMS/MMS works as a phone. iMessage, FaceTime, and Google Messages features that need GMS should be assumed absent until an app proves otherwise."
			},
			{
				k: "Smart home",
				v: "Huawei’s home platform is a China-centered system. It is not HomeKit and it is not SmartThings. US device support was not verified."
			}
		]
	}
];
var matrixRows = [
	{
		area: "Hardware class",
		cells: {
			iphone: "2025 flagship. Vapor chamber, A19 Pro. Superseded by iPhone 18 Pro in September 2026, but still a current supported phone.",
			galaxy: "2026 flagship, compact. Split chip by region. The most current of the four on a calendar.",
			nothing: "2025 upper-mid flagship silicon (Snapdragon 8s Gen 4), not an 8 Elite phone. Still Nothing’s top model.",
			huawei: "2025 camera flagship. Kirin 9020 is official. Its performance class is not established against A19 Pro or Snapdragon 8 Elite Gen 5."
		}
	},
	{
		area: "Display",
		cells: {
			iphone: "Sharper (460 ppi, 2622×1206). 3000-nit marketing peak. Lab: about 2755 nits on a 15% window, about 1000 nits in bright ambient.",
			galaxy: "FHD+ 2340×1080, officially 1–120Hz. 2600-nit peak is a US page claim, missing from the global spec table. No lab nits retrieved.",
			nothing: "1260×2800, 460 ppi, 120Hz. 4500-nit claim. PhoneArena measured 1501 nits at 20% APL. Probably not LTPO to 1Hz.",
			huawei: "2848×1276, true 1–120Hz LTPO, 1440Hz PWM, Kunlun Glass 2. Peak nits not on the official page retrieved."
		}
	},
	{
		area: "Performance",
		cells: {
			iphone: "A19 Pro, 6-core CPU, 6-core GPU, ray tracing. RAM not published by Apple. No benchmark number is shown.",
			galaxy: "US-pattern silicon is Snapdragon 8 Elite Gen 5 for Galaxy. Europe-pattern silicon is Exynos 2600. Do not mix their scores.",
			nothing: "Snapdragon 8s Gen 4, up to 3.2 GHz, 4 nm, UFS 4.0. A step below the other two US-sold chips.",
			huawei: "Kirin 9020 octa-core. Clocks, GPU, and process: not officially specified. One EU review found it uncompetitive for the money."
		}
	},
	{
		area: "Battery",
		cells: {
			iphone: "mAh not official. Lab: about 4252 mAh eSIM-only, about 3998 mAh SIM tray. Claim: up to 33 h video.",
			galaxy: "4300 mAh typical, 4175 mAh rated. Video claim 30 h (US) or 31 h (Japan).",
			nothing: "5150 mAh international. 5500 mAh reported for India. Nothing’s own support page only states 5150.",
			huawei: "5700 mAh typical in China (5580 rated). 5170 mAh on international pages. Largest official cells in this set, and they are not the same cell."
		}
	},
	{
		area: "Charging",
		cells: {
			iphone: "50% in 20 min from a ≥40W USB-C adapter. MagSafe and Qi2 up to 25W. China wireless may be 15W.",
			galaxy: "25W wired, 55% in 30 min under Samsung’s lab conditions. Wireless watts not stated officially. PowerShare exists.",
			nothing: "About 60 min to full. 1–50% in under 20 min. 65W is launch-coverage, not the support-page sentence. 15W wireless, 5W reverse wireless.",
			huawei: "100W wired with Huawei’s charger. China: 80W wireless with a separate charger, 18W wired reverse. Not a generic-brick guarantee."
		}
	},
	{
		area: "Cameras",
		cells: {
			iphone: "Triple 48MP. 4× optical at 100 mm, 8× optical-quality at 200 mm. 18MP front. No image-quality ranking is claimed.",
			galaxy: "50+10+12. 3× optical, 2× optical-quality crop. The most conservative zoom hardware here.",
			nothing: "Triple 50MP including a 3× periscope. Sensor part numbers come from secondary sources. No ranking is claimed.",
			huawei: "50MP 1-inch, variable ƒ/1.6–ƒ/4.0, 48MP 4× macro tele, 40MP ultrawide, spectral color sensor. Strongest official hardware list. Not a tested image-quality win."
		}
	},
	{
		area: "Video",
		cells: {
			iphone: "4K120, Dolby Vision, ProRes RAW, Apple Log 2, genlock with accessories. The deepest verified pro-video feature list.",
			galaxy: "8K30 and high-frame slow motion are official. Log and pro cinema modes were not on the spec rows retrieved.",
			nothing: "4K60 reported by GSMArena. 8K and Log not found.",
			huawei: "4K, Log, HDR Vivid. 1080p960 is AI frame insertion, which Huawei discloses."
		}
	},
	{
		area: "Build",
		cells: {
			iphone: "206 g US listing (some regions print 204 g). IP68 to 6 m. Aluminum unibody, Ceramic Shield 2. Dimensions in mm not captured from Apple.",
			galaxy: "167 g, 7.2 mm, IP68. Lightest and thinnest official body here. Gorilla Glass Victus 2.",
			nothing: "218 g, 8.99 mm, IP68, aluminum frame. The thickest of the four.",
			huawei: "About 219 g, 8.3 mm, IP68 and IP69. Heaviest official weight, tied with Nothing within a gram."
		}
	},
	{
		area: "Software",
		cells: {
			iphone: "iOS 27 is out and compatible.",
			galaxy: "One UI 9 / Android 17 is rolling out, not universal on 1 Oct 2026.",
			nothing: "Nothing OS 4.1 stable. OS 5.0 stable is scheduled mid-October, so it is still beta today.",
			huawei: "China HarmonyOS 5.1/6. International EMUI 15.0. Different products."
		}
	},
	{
		area: "Customization",
		cells: {
			iphone: "Widgets, Lock Screen, Focus, Control Center. No deep theming.",
			galaxy: "One UI layout controls are broad. Good Lock on One UI 9: not re-verified.",
			nothing: "Strict visual system. Glyph Matrix is the custom surface.",
			huawei: "Both skins are configurable. The limit is apps, not toggles."
		}
	},
	{
		area: "AI",
		cells: {
			iphone: "Siri AI on the high hardware tier, with language and EU limits.",
			galaxy: "Galaxy AI tools shipped, with shorter language lists for some of them.",
			nothing: "Essential tools now. Larger pass is in beta.",
			huawei: "Camera AI modes are official. A system-assistant parity claim is not."
		}
	},
	{
		area: "Privacy",
		cells: {
			iphone: "Tracking prompts, Lockdown Mode, optional Advanced Data Protection.",
			galaxy: "Android permissions plus Knox. Google account is in the loop.",
			nothing: "Android permissions plus Google, unless the buyer sideloads around that. No extra Nothing audit was found.",
			huawei: "No GMS. That removes Google and also removes Play Protect. Not automatically more private."
		}
	},
	{
		area: "Ecosystem",
		cells: {
			iphone: "Deepest, if the rest of the house is Apple.",
			galaxy: "Broad Android plus Link to Windows. DeX for PC is gone.",
			nothing: "Phone, Glyph, earbuds. Little else.",
			huawei: "Coherent inside Huawei’s own devices. Disconnected from Google and Apple."
		}
	},
	{
		area: "App availability",
		cells: {
			iphone: "App Store. US banking, transit, and government apps are generally present.",
			galaxy: "Play Store. Same practical US coverage.",
			nothing: "Play Store on the US retail phone.",
			huawei: "AppGallery and sideload. US daily apps are the failure point. China HarmonyOS has its own store and is not the Play Store."
		}
	},
	{
		area: "Connectivity",
		cells: {
			iphone: "Wi-Fi 7, Bluetooth 6, Thread, eSIM-only in the US. Satellite features are listed by GSMArena, not quoted from Apple in this pass.",
			galaxy: "US unlocked band list is Sub-6, including n71. mmWave not listed. Wi-Fi 7 is an aggregator line.",
			nothing: "Wi-Fi 7 is on Nothing’s page. US Sub-6 bands are listed by GSMArena. No mmWave. NFC not re-confirmed.",
			huawei: "Wi-Fi 7 and Bluetooth 5.2 official on the China page. BeiDou messaging is mainland China only. US bands unknown."
		}
	},
	{
		area: "Update support",
		cells: {
			iphone: "On iOS 27. No fixed end date from Apple.",
			galaxy: "Seven OS generations and seven years of security, per Samsung’s flagship policy as reported at launch.",
			nothing: "Reported as five OS upgrades and seven years of security. Not re-read from a Nothing legal page.",
			huawei: "HarmonyOS 6 upgrade is official for China. A year count is not on the spec page. EU five-year obligation is a reviewer’s citation."
		}
	},
	{
		area: "Value",
		cells: {
			iphone: "Launched at $1,099. A year old, so street prices are lower. Current Apple Store price was not re-checked.",
			galaxy: "Launched at $899.99. Newest of the US-sold pair, and the cheapest official starting MSRP among phones Huawei doesn’t undercut with a missing US price.",
			nothing: "Published from $799. Older silicon than the S26. The price is the argument, not the bench.",
			huawei: "No US price. Hardware per dollar cannot be scored without an official local price."
		}
	},
	{
		area: "US usability",
		cells: {
			iphone: "Designed for this market. eSIM, major carriers, Apple stores.",
			galaxy: "Official US retail. Confirm mmWave only if you need it; the unlocked band list does not show it.",
			nothing: "Official US sale. Carrier certification was not verified. Bands look Sub-6 capable on paper.",
			huawei: "Not a practical US primary phone. No official sale, no GMS, no verified carrier bands, no BeiDou outside mainland China."
		}
	}
];
var conclusions = [
	{
		title: "Best overall",
		pick: "Galaxy S26, for a US buyer who is not already bought into Apple",
		body: "The useful question in October 2026 is not which spec sheet has the largest number. It is which phone you can buy, update, and live in. The Galaxy S26 is the only 2026 phone in the set, it launched at $899.99, Samsung states a seven-year update policy, and it ships with Google services. One UI 9 is still rolling out, and the base model’s 25W charging and FHD+ screen are real limits next to the S26 Ultra and next to the iPhone’s sharper panel. The iPhone 17 Pro is the better phone if you already use a Mac, an Apple Watch, or iMessage, or if you want the pro video tools. It is also last year’s Pro: Apple announced the iPhone 18 Pro on 9 September 2026. Nothing Phone (3) is the right name for Nothing’s flagship, and it is the wrong answer if raw performance is the goal. The Pura 80 Pro’s hardware does not survive contact with a US SIM and a US app list."
	},
	{
		title: "Best for hardware and camera",
		pick: "Huawei Pura 80 Pro on the spec sheet. iPhone 17 Pro for verified pro video you can actually use in the US.",
		body: "Huawei is the only company here that officially specifies a 1-inch main sensor, a variable aperture, a 48MP macro telephoto at about 4×, IP69, and 100W charging. The China battery is also the largest official cell. That is a hardware lead. It is not an image-quality lead. No DXOMARK or other cross-lab photo scores for all four phones were retrieved, so this app does not declare a picture winner. Among phones sold in the United States, the iPhone 17 Pro has the strongest verified video feature set: 4K120, Dolby Vision, ProRes RAW, Apple Log 2, and an 8× optical-quality telephoto. The Galaxy S26’s 10MP 3× telephoto is the shortest reach. Nothing’s 50MP 3× periscope is more interesting on paper than Samsung’s 10MP tele, and its computational results were not ranked. If “best camera” means “best hardware list,” say Huawei and then say you may not be able to use the phone. If it means “best verified camera system in the US,” say iPhone 17 Pro."
	},
	{
		title: "Best for software and ecosystem",
		pick: "iPhone 17 Pro",
		body: "iOS 27 is a finished release, not a staged carrier rollout, and Apple’s continuity features are still the most complete set if the other devices are Apple’s. Samsung is close, and Link to Windows is a real advantage for people on Windows, but Samsung has removed DeX for PC. Nothing OS is pleasant and thin: there is no watch platform, no computer, and the next OS is still in beta on this date. Huawei’s software story is the most important factual split in the whole comparison. HarmonyOS 5 is not Android. EMUI 15 is Android-based and still has no official Google services. Neither one joins the Apple or Google ecosystems a US household already uses. Software support math also favors Samsung on paper (seven stated years) and Apple in practice (no promised end date, but iOS 27 already landed). Nothing’s five-plus-seven policy is reported, not re-read from Nothing’s legal text."
	}
];
var glossary = [
	{
		term: "Optical vs optical-quality",
		text: "Optical zoom uses a longer lens. Optical-quality, in Apple and Samsung’s wording, is a crop from a high-resolution sensor that they consider comparable to a lens. It is not the same as a separate telephoto."
	},
	{
		term: "LTPO",
		text: "A backplane that lets the refresh rate fall very low, often to 1Hz, to save power on an always-on clock. A phone can be 120Hz without being LTPO."
	},
	{
		term: "Peak nits",
		text: "Manufacturers usually mean a small highlight window, not the whole screen at full white. Lab numbers in this app are labeled separately when a lab published them."
	},
	{
		term: "Typical vs rated mAh",
		text: "Typical is an average. Rated is a minimum under a standard such as IEC 61960. Huawei and Samsung publish both for some models. Apple publishes neither."
	},
	{
		term: "HMS and GMS",
		text: "Google Mobile Services are Play Store, Play Services, and the Google apps. Huawei Mobile Services are AppGallery and Huawei’s own APIs. A phone can be Android-based and still lack GMS. HarmonyOS 5 is not that phone."
	},
	{
		term: "eSIM",
		text: "A programmable SIM with no plastic card. The US iPhone 17 Pro has no tray. That is a carrier and travel constraint, not a battery footnote only."
	},
	{
		term: "Sub-6 vs mmWave",
		text: "Most US 5G is Sub-6, including n71 (extended range) and n41 / n77 (capacity). mmWave (n260/n261) is short-range and mostly venue or dense urban. A phone can be a normal US 5G phone without mmWave."
	},
	{
		term: "Editorial score",
		text: "The 1–10 bars in the UI section are judgments by this comparison, written so you can disagree. They are not measurements and they are not from Apple, Samsung, Nothing, or Huawei."
	}
];
var nav = [
	{
		id: "overview",
		label: "Overview"
	},
	{
		id: "hardware",
		label: "Hardware"
	},
	{
		id: "cameras",
		label: "Cameras"
	},
	{
		id: "software",
		label: "Software"
	},
	{
		id: "uilab",
		label: "UI lab"
	},
	{
		id: "ecosystem",
		label: "Ecosystem"
	},
	{
		id: "matrix",
		label: "Matrix"
	},
	{
		id: "sources",
		label: "Sources"
	}
];
var screens = [
	{
		id: "lock",
		label: "Lock"
	},
	{
		id: "home",
		label: "Home"
	},
	{
		id: "library",
		label: "Library"
	},
	{
		id: "quick",
		label: "Quick"
	},
	{
		id: "notes",
		label: "Alerts"
	},
	{
		id: "settings",
		label: "Settings"
	},
	{
		id: "camera",
		label: "Camera"
	},
	{
		id: "tasks",
		label: "Recents"
	}
];
var phoneOrder = [
	{
		id: "iphone",
		label: "iOS 27"
	},
	{
		id: "galaxy",
		label: "One UI"
	},
	{
		id: "nothing",
		label: "Nothing OS"
	},
	{
		id: "huawei",
		label: "Huawei"
	}
];
function UiLab() {
	const [phone, setPhone] = (0, import_react.useState)("iphone");
	const [screen, setScreen] = (0, import_react.useState)("lock");
	const [huaweiOs, setHuaweiOs] = (0, import_react.useState)("harmony");
	const [wifi, setWifi] = (0, import_react.useState)(true);
	const [bright, setBright] = (0, import_react.useState)(70);
	const [zoom, setZoom] = (0, import_react.useState)("1");
	const [aperture, setAperture] = (0, import_react.useState)(1.6);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: phoneOrder.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setPhone(p.id);
							setScreen("lock");
							setZoom("1");
						},
						className: "min-h-11 rounded-full border px-4 py-2 text-sm " + (phone === p.id ? "border-brass bg-brass text-ink" : "border-line bg-surface text-fg"),
						children: p.label
					}, p.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-sm text-muted",
					children: "Original layout simulation of public interface patterns. Not an official screenshot, and not a copy of proprietary icons or wallpapers."
				}),
				phone === "huawei" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setHuaweiOs("harmony"),
						className: "min-h-11 rounded-full border px-4 py-2 text-sm " + (huaweiOs === "harmony" ? "border-brass text-brass" : "border-line text-muted"),
						children: "China · HarmonyOS"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setHuaweiOs("emui"),
						className: "min-h-11 rounded-full border px-4 py-2 text-sm " + (huaweiOs === "emui" ? "border-brass text-brass" : "border-line text-muted"),
						children: "International · EMUI 15"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex min-w-0 gap-2 overflow-x-auto pb-1",
					children: screens.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setScreen(s.id),
						className: "min-h-11 shrink-0 rounded-lg border px-3 py-2 text-xs tracking-wide uppercase " + (screen === s.id ? "border-brass text-brass" : "border-line text-muted"),
						children: s.label
					}, s.id))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto w-full max-w-xs",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-[2rem] border border-line bg-ink p-3 shadow-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-[1.4rem] border border-line",
					style: {
						background: "var(--color-bg-raised)",
						minHeight: 560
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Status, {
							phone,
							wifi,
							huaweiOs
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-3 pb-4 pt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenBody, {
								phone,
								screen,
								huaweiOs,
								wifi,
								setWifi,
								bright,
								setBright,
								zoom,
								setZoom,
								aperture,
								setAperture
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "pointer-events-none absolute bottom-2 left-0 right-0 text-center text-[10px] tracking-widest text-faint uppercase",
							children: "UI simulation"
						})
					]
				})
			})
		})]
	});
}
function Status({ phone, wifi, huaweiOs }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between px-4 pt-3 text-[11px] text-muted",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "spec-mono",
				children: "9:41"
			}),
			phone === "iphone" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-1/2 top-2 h-4 w-24 -translate-x-1/2 rounded-full bg-ink" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "spec-mono",
				children: [phone === "iphone" ? "iOS" : phone === "galaxy" ? "One UI" : phone === "nothing" ? "Nothing" : huaweiOs === "harmony" ? "HarmonyOS" : "EMUI", wifi ? " · wifi" : " · off"]
			})
		]
	});
}
function ScreenBody(props) {
	const { phone, screen } = props;
	if (screen === "lock") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { ...props });
	if (screen === "home") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Home$1, { ...props });
	if (screen === "library") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Library, { ...props });
	if (screen === "quick") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quick, { ...props });
	if (screen === "notes") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notes, {
		phone,
		os: props.huaweiOs
	});
	if (screen === "settings") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {
		phone,
		os: props.huaweiOs
	});
	if (screen === "camera") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { ...props });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tasks, { phone });
}
function Lock({ phone, huaweiOs }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-10 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Thursday 1 October"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "spec-mono mt-2 text-5xl text-fg",
				children: "9:41"
			}),
			phone === "nothing" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-6 grid w-24 grid-cols-5 gap-1",
				children: Array.from({ length: 15 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: i % 3 === 0 ? "h-2 w-2 rounded-full bg-brass" : "h-2 w-2 rounded-full bg-line" }, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mx-auto mt-6 max-w-[220px] text-xs text-muted",
				children: [
					phone === "iphone" && "Lock Screen widgets sit under the clock. Always-On is an official iPhone 17 Pro display feature.",
					phone === "galaxy" && "One UI lock screens use large type. Always-On was not confirmed in the S26 spec rows retrieved.",
					phone === "nothing" && "Glyph Matrix lives on the back, not on this screen. The dots here only echo that idea.",
					phone === "huawei" && (huaweiOs === "harmony" ? "HarmonyOS lock screen. This is not Android." : "EMUI lock screen on the international model. Android-based, no Google account required.")
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex justify-between px-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full border border-line px-3 py-2 text-xs text-muted",
					children: "Flash"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full border border-line px-3 py-2 text-xs text-muted",
					children: "Camera"
				})]
			})
		]
	});
}
var glyphs = [
	"Aa",
	"Bx",
	"Cm",
	"Dv",
	"Eq",
	"Ft",
	"Gn",
	"Hw"
];
function Home$1({ phone, huaweiOs }) {
	const drawer = phone !== "iphone" && !(phone === "huawei" && huaweiOs === "harmony");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mb-3 text-xs text-muted",
			children: [
				phone === "iphone" && "Home Screen. No app drawer. Swipe to the library screen.",
				phone === "galaxy" && "Home Screen. App drawer is separate. Icons can be hidden from this grid.",
				phone === "nothing" && "Home Screen. Monochrome grid. Essential Space is the first-party widget.",
				phone === "huawei" && (huaweiOs === "harmony" ? "HarmonyOS home. Service cards, not a Play Store dock." : "EMUI home. Android-style pages, AppGallery in the dock.")
			]
		}),
		phone === "nothing" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 rounded-xl border border-line p-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-brass",
				children: "Essential Space"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-fg",
				children: "Capture stays on device until you file it."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-4 gap-3",
			children: glyphs.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface-2 text-xs text-fg",
					children: g
				})
			}, g))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 flex justify-around rounded-2xl border border-line py-3 text-[11px] text-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Phone" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Notes" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: phone === "huawei" ? "AppGallery" : phone === "iphone" ? "Store" : "Play" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: drawer ? "Drawer" : "Search" })
			]
		})
	] });
}
function Library({ phone, huaweiOs }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-fg",
			children: phone === "iphone" ? "App Library" : phone === "huawei" && huaweiOs === "harmony" ? "HarmonyOS apps" : "App drawer"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 rounded-xl border border-line px-3 py-2 text-xs text-muted",
			children: "Search"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 grid grid-cols-2 gap-2",
			children: (phone === "huawei" ? [
				"AppGallery",
				"Petal Search",
				"Celendar",
				"Files"
			] : phone === "iphone" ? [
				"Social",
				"Utilities",
				"Creativity",
				"Recently added"
			] : [
				"Google",
				"Samsung",
				"Nothing",
				"Tools"
			]).map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-xl border border-line p-3 text-xs text-fg",
				children: name
			}, name))
		}),
		phone === "huawei" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-xs text-clay",
			children: huaweiOs === "harmony" ? "Native packages are HarmonyOS apps. This simulation does not show Android APK icons as if they were first-class." : "EMUI can sideload many APKs. Google Play is not part of this drawer."
		})
	] });
}
function Quick({ wifi, setWifi, bright, setBright, phone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted",
			children: phone === "iphone" ? "Control Center is separate from notifications." : phone === "galaxy" ? "One UI combines tiles and alerts in one shade, split by gesture." : "Quick settings. Tiles below are interactive stand-ins."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 grid grid-cols-2 gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setWifi(!wifi),
				className: "min-h-16 rounded-2xl border p-3 text-left text-sm " + (wifi ? "border-brass text-brass" : "border-line text-muted"),
				children: ["Wi-Fi", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-xs",
					children: wifi ? "On" : "Off"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-16 rounded-2xl border border-line p-3 text-sm text-fg",
				children: ["Bluetooth", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-xs text-muted",
					children: "Simulated"
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "mt-4 block text-xs text-muted",
			children: [
				"Brightness ",
				bright,
				"%",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "mt-2 w-full accent-brass",
					type: "range",
					min: 10,
					max: 100,
					value: bright,
					onChange: (e) => setBright(Number(e.target.value))
				})
			]
		})
	] });
}
function Notes({ phone, os }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-2 pt-2",
		children: (phone === "huawei" && os === "harmony" ? [
			"HarmonyOS notification",
			"AppGallery update",
			"No Google push services"
		] : phone === "huawei" ? [
			"EMUI notification",
			"Petal Search suggestion",
			"GMS-dependent apps may not notify"
		] : [
			"Message",
			"Calendar",
			"Battery"
		]).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-xl border border-line bg-surface px-3 py-3 text-sm text-fg",
			children: item
		}, item))
	});
}
function Settings({ phone, os }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "divide-y divide-line rounded-xl border border-line",
		children: (phone === "iphone" ? [
			"General",
			"Software Update · iOS 27",
			"Apple Intelligence",
			"Privacy & Security"
		] : phone === "galaxy" ? [
			"Connections",
			"Software update · One UI 9 rollout",
			"Galaxy AI",
			"Security and privacy"
		] : phone === "nothing" ? [
			"Display",
			"Glyph",
			"Software · Nothing OS 4.1 stable",
			"Essential"
		] : os === "harmony" ? [
			"HarmonyOS 5.1 / 6",
			"Huawei ID",
			"AppGallery",
			"Control panel"
		] : [
			"EMUI 15.0",
			"Huawei ID",
			"AppGallery",
			"No Google account"
		]).map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-3 py-3 text-sm text-fg",
			children: row
		}, row))
	});
}
function Camera({ phone, zoom, setZoom, aperture, setAperture }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex h-48 items-end justify-center rounded-xl border border-line bg-surface-2 p-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-center text-xs text-muted",
				children: ["Viewfinder stand-in", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mt-1 block spec-mono text-fg",
					children: [zoom, "×"]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 flex justify-center gap-2",
			children: (phone === "iphone" ? [
				"0.5",
				"1",
				"2",
				"4",
				"8"
			] : phone === "galaxy" ? [
				"0.5",
				"1",
				"2",
				"3"
			] : phone === "nothing" ? [
				"0.5",
				"1",
				"3"
			] : [
				"0.5",
				"1",
				"4"
			]).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setZoom(s),
				className: "min-h-11 min-w-11 rounded-full border text-xs " + (zoom === s ? "border-brass text-brass" : "border-line text-muted"),
				children: s
			}, s))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 text-xs text-muted",
			children: [
				phone === "iphone" && "Stops match the 17 Pro system: 0.5× ultrawide, 1×, 2× crop, 4× optical, 8× optical-quality.",
				phone === "galaxy" && "0.5× ultrawide, 1×, 2× optical-quality crop, 3× optical. 2× is not a separate lens.",
				phone === "nothing" && "0.5×, 1×, and 3× periscope. Ultrawide autofocus was not confirmed.",
				phone === "huawei" && "0.5×, 1×, and about 4× optical. The aperture control below reflects the official ƒ/1.6–ƒ/4.0 main camera."
			]
		}),
		phone === "huawei" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "mt-3 block text-xs text-muted",
			children: [
				"Simulated aperture ƒ/",
				aperture.toFixed(1),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "mt-2 w-full",
					type: "range",
					min: 16,
					max: 40,
					value: Math.round(aperture * 10),
					onChange: (e) => setAperture(Number(e.target.value) / 10)
				})
			]
		})
	] });
}
function Tasks({ phone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex gap-3 overflow-hidden pt-8",
		children: [
			"Maps",
			"Notes",
			"Camera"
		].map((name, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "h-64 w-36 shrink-0 rounded-2xl border border-line bg-surface p-3",
			style: { transform: `translateY(${i * 8}px)` },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-fg",
				children: name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-muted",
				children: phone === "iphone" ? "Card switcher. No split screen on this phone size." : "Recents. Android skins in this set also offer split screen; exact Huawei limits were not re-verified."
			})]
		}, name))
	});
}
var confidenceLabel = {
	VERIFIED: "Verified",
	INDEPENDENTLY_VERIFIED: "Independent",
	REGIONAL: "Regional",
	UNCONFIRMED: "Unconfirmed"
};
function badgeClass(c) {
	if (c === "VERIFIED") return "text-sage border-sage/40";
	if (c === "INDEPENDENTLY_VERIFIED") return "text-brass border-brass/40";
	if (c === "REGIONAL") return "text-fg border-line";
	return "text-clay border-clay/50";
}
function ComparisonApp() {
	const [theme, setTheme] = (0, import_react.useState)("dark");
	const [query, setQuery] = (0, import_react.useState)("");
	const [active, setActive] = (0, import_react.useState)("iphone");
	const [openGroup, setOpenGroup] = (0, import_react.useState)("display");
	const [only, setOnly] = (0, import_react.useState)("ALL");
	const [term, setTerm] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		document.documentElement.dataset.theme = theme;
	}, [theme]);
	const phone = phones.find((p) => p.id === active) ?? phones[0];
	const q = query.trim().toLowerCase();
	const filteredGroups = (0, import_react.useMemo)(() => {
		return phone.groups.map((g) => ({
			...g,
			facts: g.facts.filter((fact) => {
				if (only !== "ALL" && fact.confidence !== only) return false;
				if (!q) return true;
				return `${fact.label} ${fact.value} ${fact.note ?? ""} ${g.title}`.toLowerCase().includes(q);
			})
		})).filter((g) => g.facts.length > 0);
	}, [
		phone,
		q,
		only
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "border-b border-line bg-bg-raised",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-4 px-4 py-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.18em] text-brass uppercase",
						children: "Spec Ledger · 1 Oct 2026"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 text-2xl font-medium tracking-tight sm:text-3xl",
						children: "Four phones, sourced"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
						className: "min-h-11 rounded-full border border-line px-4 py-2 text-sm text-fg",
						children: theme === "dark" ? "Light paper" : "Dark desk"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "mx-auto flex max-w-6xl min-w-0 gap-2 overflow-x-auto px-4 pb-3",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${item.id}`,
						className: "min-h-11 shrink-0 rounded-full border border-line px-3 py-2 text-sm text-muted hover:text-fg",
						children: item.label
					}, item.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-line bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto max-w-6xl px-4 py-3 text-sm leading-relaxed text-muted",
					children: "Information verified against available manufacturer documentation and reputable independent sources. Specifications and software features may vary by region, model variant, and software version. Unverified information is explicitly labeled."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto min-w-0 max-w-6xl px-4 py-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "overview",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-4 flex flex-wrap items-end justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xl font-medium",
									children: "Devices"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "min-w-[220px] flex-1 text-sm text-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sr-only",
										children: "Search specifications"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: query,
										onChange: (e) => setQuery(e.target.value),
										placeholder: "Search specs, sources, caveats",
										className: "min-h-11 w-full rounded-xl border border-line bg-bg px-3 text-fg outline-none"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
								children: phones.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										setActive(item.id);
										document.getElementById("detail")?.scrollIntoView({
											behavior: "smooth",
											block: "start"
										});
									},
									className: "rounded-card border p-4 text-left " + (active === item.id ? "border-brass bg-surface" : "border-line bg-bg-raised"),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Silhouette, { id: item.id }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-xs tracking-wide text-brass uppercase",
											children: item.maker
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-lg leading-tight",
											children: item.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm text-muted",
											children: cardLine(item)
										})
									]
								}, item.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Snapshot, {
										k: "US starting price",
										v: "$1,099 launch",
										s: "iPhone 17 Pro · Apple, Sep 2025"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Snapshot, {
										k: "US starting price",
										v: "$899.99 launch",
										s: "Galaxy S26 · Samsung, Mar 2026"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Snapshot, {
										k: "Published from",
										v: "$799",
										s: "Nothing Phone (3) · Nothing index"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Snapshot, {
										k: "US price",
										v: "Not sold",
										s: "Pura 80 Pro · no official US MSRP"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "detail",
						className: "mt-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-end justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-[0.16em] text-brass uppercase",
									children: phone.maker
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-2xl font-medium",
									children: phone.name
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2",
									children: [
										"ALL",
										"VERIFIED",
										"INDEPENDENTLY_VERIFIED",
										"REGIONAL",
										"UNCONFIRMED"
									].map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setOnly(key),
										className: "min-h-11 rounded-full border px-3 py-2 text-xs " + (only === key ? "border-brass text-brass" : "border-line text-muted"),
										children: key === "ALL" ? "All labels" : confidenceLabel[key]
									}, key))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-3xl text-sm text-muted",
								children: phone.context
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex min-w-0 gap-2 overflow-x-auto",
								children: phone.groups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setOpenGroup(g.id),
									className: "min-h-11 shrink-0 rounded-full border px-3 py-2 text-sm " + (openGroup === g.id ? "border-brass text-fg" : "border-line text-muted"),
									children: g.title
								}, g.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 space-y-3",
								children: [filteredGroups.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "rounded-xl border border-line p-4 text-sm text-muted",
									children: "No specifications match that filter. Clear the search or switch the label."
								}), filteredGroups.map((g) => {
									if (!(q.length > 0 || only !== "ALL" || openGroup === g.id)) return null;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
										(q.length > 0 || only !== "ALL") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mb-2 text-sm text-brass",
											children: g.title
										}),
										g.intro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mb-3 max-w-3xl text-sm text-muted",
											children: g.intro
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "divide-y divide-line rounded-card border border-line",
											children: g.facts.map((fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FactRow, { fact }, fact.id))
										})
									] }, g.id);
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-xs text-faint",
								children: [
									"Other groups stay in the data. Pick a category, or search, to open them.",
									" ",
									q ? `Showing matches for “${query.trim()}”.` : "Search is empty, so the open category is complete."
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "hardware",
						className: "mt-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-medium",
								children: "Hardware, side by side"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-3xl text-sm text-muted",
								children: "Bars use only figures with a stated unit. The iPhone’s battery is missing from the capacity chart because Apple does not publish milliamp-hours. A lab estimate is not drawn on the same axis as official typical capacities."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 grid gap-6 lg:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meter, {
									title: "Weight",
									unit: "g",
									rows: [
										{
											name: "iPhone 17 Pro",
											g: 206,
											note: "US listing"
										},
										{
											name: "Galaxy S26",
											g: 167,
											note: "Official"
										},
										{
											name: "Phone (3)",
											g: 218,
											note: "Official"
										},
										{
											name: "Pura 80 Pro",
											g: 219,
											note: "About 219 g"
										}
									].map((r) => ({
										label: r.name,
										value: r.g,
										note: r.note
									})),
									max: 240
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meter, {
									title: "Official battery, typical or stated",
									unit: "mAh",
									max: 6e3,
									rows: [
										{
											label: "iPhone 17 Pro",
											value: 0,
											note: "Not disclosed"
										},
										{
											label: "Galaxy S26",
											value: 4300,
											note: "Typical · rated 4175"
										},
										{
											label: "Phone (3) intl.",
											value: 5150,
											note: "India reported 5500"
										},
										{
											label: "Pura 80 Pro CN",
											value: 5700,
											note: "Intl. page 5170"
										}
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 grid gap-3 md:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
										title: "Display, in practice",
										body: "The iPhone and the Nothing Phone (3) are both 460 ppi. The Galaxy S26 is FHD+ — about 411 ppi by GSMArena’s math — on a 1–120Hz panel Samsung does specify. The Pura 80 Pro matches the 460 ppi class and is the only one here with an official 1–120Hz LTPO line plus 1440Hz PWM. Peak-nit marketing is not comparable: Apple’s 3000, Samsung’s 2600, and Nothing’s 4500 are highlights, and only the iPhone and the Phone (3) have independent nit readings in this file."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
										title: "Performance, without fake scores",
										body: "A19 Pro and the US-pattern Snapdragon 8 Elite Gen 5 are the two high chips, and they are not the same chip. Exynos 2600 is a different S26. Snapdragon 8s Gen 4 in the Phone (3) is a tier down by Qualcomm’s own naming. Kirin 9020 has no official clocks. One European review found it unimpressive against older flagships. No Geekbench number is printed, because a shared lab table was not retrieved."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
										title: "Charging claims versus watts",
										body: "Samsung’s 55% in 30 minutes is a lab condition: 25W adapter, screen off, from empty. Apple’s claim is 50% in 20 minutes with at least a 40W adapter, plus 25W MagSafe. Nothing publishes times (about 60 minutes full, under 20 minutes to 50%) and the 65W figure comes from launch coverage. Huawei’s 100W and China’s 80W wireless require Huawei chargers, some sold separately."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
										title: "How they feel",
										body: "The S26 is the light, thin slab: 167 g and 7.2 mm. The iPhone is denser, with a camera bar across the back and a 6-meter IP68 rating. Phone (3) is the thick one, at 8.99 mm and 218 g, and the Glyph Matrix is the thing you notice on a table. The Pura 80 Pro is about the same weight, slightly thinner, and adds IP69. Repair scores were not retrieved for any of the four."
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "cameras",
						className: "mt-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-medium",
								children: "Cameras, without a winner’s trophy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-3xl text-sm text-muted",
								children: "No lab in the sources checked published a four-phone photo ranking. The notes below are hardware differences, not a claim that one JPEG is better."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 max-w-full overflow-x-auto rounded-card border border-line",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "w-full min-w-[720px] text-left text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
										className: "text-xs tracking-wide text-faint uppercase",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "p-3 font-medium",
											children: "Scene"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "p-3 font-medium",
											children: "What the hardware implies"
										})] })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
										className: "divide-y divide-line",
										children: cameraNotes.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-3 align-top text-brass",
											children: row.scene
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-3 text-muted",
											children: row.text
										})] }, row.scene))
									})]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "software",
						className: "mt-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-medium",
								children: "Software"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-3xl text-sm text-muted",
								children: "Features are limited to what was verified for these models and these versions. Older phones in the same brand are not treated as proof."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 grid gap-4 lg:grid-cols-2",
								children: softwareColumns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "rounded-card border border-line p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg",
										children: col.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 space-y-3",
										children: col.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-brass",
											children: point.h
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-muted",
											children: point.body
										})] }, point.h))
									})]
								}, col.id))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "uilab",
						className: "mt-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-medium",
								children: "UI lab"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-3xl text-sm text-muted",
								children: "Switch the phone, then the surface. The Huawei control toggles China HarmonyOS and international EMUI, because those are not the same operating system."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 rounded-card border border-line p-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UiLab, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg",
										children: "Editorial scores"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 max-w-3xl text-sm text-clay",
										children: "These 1–10 marks are an editorial evaluation for a United States buyer on 1 October 2026. They are not measurements, not benchmarks, and not manufacturer claims."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 space-y-4",
										children: uxAxes.map((axis) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl border border-line p-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex flex-wrap items-baseline justify-between gap-2",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-sm",
														children: axis.axis
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-2 grid gap-2 sm:grid-cols-4",
													children: Object.keys(axis.scores).map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "mb-1 flex justify-between text-xs text-muted",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: shortName(id) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "spec-mono",
															children: axis.scores[id]
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "h-1.5 rounded-full bg-surface-2",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "h-1.5 rounded-full bg-brass",
															style: { width: `${axis.scores[id] * 10}%` }
														})
													})] }, id))
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-xs text-muted",
													children: axis.why
												})
											]
										}, axis.axis))
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "ecosystem",
						className: "mt-14",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-medium",
							children: "Ecosystems"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 grid gap-4 lg:grid-cols-2",
							children: ecosystems.map((eco) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-card border border-line p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg",
									children: eco.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
									className: "mt-3 space-y-2",
									children: eco.rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-sm text-brass",
										children: row.k
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "text-sm text-muted",
										children: row.v
									})] }, row.k))
								})]
							}, eco.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "matrix",
						className: "mt-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-medium",
								children: "Matrix"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 max-w-full overflow-x-auto rounded-card border border-line",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "w-full min-w-[880px] text-left text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
										className: "text-xs tracking-wide text-faint uppercase",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "p-3 font-medium",
												children: " "
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "p-3 font-medium",
												children: "iPhone 17 Pro"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "p-3 font-medium",
												children: "Galaxy S26"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "p-3 font-medium",
												children: "Phone (3)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "p-3 font-medium",
												children: "Pura 80 Pro"
											})
										] })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
										className: "divide-y divide-line",
										children: matrixRows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "p-3 align-top font-medium text-brass",
												children: row.area
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-3 align-top text-muted",
												children: row.cells.iphone
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-3 align-top text-muted",
												children: row.cells.galaxy
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-3 align-top text-muted",
												children: row.cells.nothing
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-3 align-top text-muted",
												children: row.cells.huawei
											})
										] }, row.area))
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid gap-4",
								children: conclusions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "rounded-card border border-line p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs tracking-[0.16em] text-faint uppercase",
											children: item.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-1 text-lg",
											children: item.pick
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm text-muted",
											children: item.body
										})
									]
								}, item.title))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "sources",
						className: "mt-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-medium",
								children: "Sources and verification"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-3xl text-sm text-muted",
								children: "Every specification row carries a source, a source type, the check date (1 October 2026), and a confidence label. Aggregators such as GSMArena are not treated as the manufacturer."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex flex-wrap gap-2",
								children: glossary.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setTerm(term === item.term ? null : item.term),
									className: "min-h-11 rounded-full border px-3 py-2 text-sm " + (term === item.term ? "border-brass text-brass" : "border-line text-muted"),
									children: item.term
								}, item.term))
							}),
							term && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-3xl rounded-xl border border-line p-3 text-sm text-muted",
								children: glossary.find((g) => g.term === term)?.text
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex flex-wrap gap-3 text-xs",
								children: Object.keys(confidenceLabel).map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full border px-2 py-1 " + badgeClass(key),
									children: key
								}, key))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 space-y-6",
								children: phones.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 max-w-full overflow-x-auto rounded-xl border border-line",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
										className: "w-full min-w-[760px] text-left text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
											className: "text-faint uppercase",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-2 font-medium",
													children: "Spec"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-2 font-medium",
													children: "Label"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-2 font-medium",
													children: "Source"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-2 font-medium",
													children: "Type"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-2 font-medium",
													children: "Checked"
												})
											] })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
											className: "divide-y divide-line",
											children: item.groups.flatMap((g) => g.facts.filter((fact) => {
												if (!q) return true;
												return `${fact.label} ${fact.value} ${g.title}`.toLowerCase().includes(q);
											}).map((fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-2 text-fg",
													children: fact.label
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-2 " + badgeClass(fact.confidence),
													children: fact.confidence
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-2 text-muted",
													children: fact.source
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-2 text-muted",
													children: fact.sourceType
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "spec-mono p-2 text-muted",
													children: fact.checked
												})
											] }, fact.id)))
										})]
									})
								})] }, item.id))
							})
						]
					})
				]
			})
		]
	});
}
function FactRow({ fact }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-brass",
					children: fact.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpen(!open),
					className: "min-h-8 rounded-full border px-2 py-1 text-[10px] tracking-wide " + badgeClass(fact.confidence),
					children: fact.confidence
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-fg",
				children: fact.value
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-xs text-muted",
				children: [
					fact.sourceType,
					" · ",
					fact.source,
					" · checked ",
					fact.checked,
					fact.note ? ` · ${fact.note}` : ""
				]
			})
		]
	});
}
function Snapshot({ k, v, s }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-line px-3 py-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "text-xs text-faint",
				children: k
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "spec-mono text-lg text-fg",
				children: v
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "text-xs text-muted",
				children: s
			})
		]
	});
}
function Meter({ title, unit, rows, max }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-card border border-line p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "text-sm",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 space-y-3",
			children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between text-xs text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "spec-mono",
						children: row.value === 0 ? "—" : `${row.value} ${unit}`
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1 h-2 rounded-full bg-surface-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-2 rounded-full bg-brass",
						style: { width: row.value === 0 ? "0%" : `${row.value / max * 100}%` }
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] text-faint",
					children: row.note
				})
			] }, row.label))
		})]
	});
}
function Callout({ title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-card border border-line p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "text-base",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-muted",
			children: body
		})]
	});
}
function Silhouette({ id }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-16 items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-14 w-9 rounded-lg border border-line",
			children: [
				id === "iphone" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-0.5 top-2 h-6 w-2 rounded-sm bg-brass-dim" }),
				id === "galaxy" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-1/2 top-1 h-4 w-2 -translate-x-1/2 rounded-full bg-brass-dim" }),
				id === "nothing" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute bottom-1 right-1 grid grid-cols-3 gap-px",
					children: Array.from({ length: 9 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-brass" }, i))
				}),
				id === "huawei" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-1/2 top-2 h-5 w-5 -translate-x-1/2 rounded-full border border-brass" })
			]
		})
	});
}
function cardLine(phone) {
	if (phone.id === "iphone") return "A19 Pro · 6.3-inch · iOS 27 · eSIM in the US";
	if (phone.id === "galaxy") return "6.3-inch FHD+ · 4300 mAh · chip varies by market";
	if (phone.id === "nothing") return "Current flagship · Snapdragon 8s Gen 4 · Glyph Matrix";
	return "HarmonyOS in China · EMUI 15 abroad · not a US phone";
}
function shortName(id) {
	if (id === "iphone") return "iPhone";
	if (id === "galaxy") return "Galaxy";
	if (id === "nothing") return "Nothing";
	return "Huawei";
}
var cameraNotes = [
	{
		scene: "Daylight",
		text: "All four have large main sensors on paper. Only Huawei officially says 1-inch, and only Huawei officially offers a variable aperture. That can mean more control over depth of field. It does not, by itself, mean cleaner color."
	},
	{
		scene: "Night",
		text: "Apple, Samsung, and Nothing all advertise night processing. Huawei lists a super night mode. No matched night test was retrieved, so there is no ranking."
	},
	{
		scene: "Portraits",
		text: "The iPhone’s 100 mm 4× lens is a classic portrait field of view, and Apple ships Photographic Styles including a Bright style. Huawei’s 4× telephoto also focuses close, which the others do not officially match. Samsung’s portrait lens is 3× at 10MP."
	},
	{
		scene: "Zoom",
		text: "Reach, officially: iPhone 4× optical and 8× optical-quality, Samsung 3× optical and 2× optical-quality, Nothing 3× optical periscope, Huawei about 4× optical and 100× digital. Digital 100× and digital 40× are not optical."
	},
	{
		scene: "Ultrawide",
		text: "iPhone and Nothing are 48MP and 50MP. Samsung is 12MP. Huawei is 40MP at ƒ/2.2. Autofocus on Samsung’s and Nothing’s ultrawide cameras was not clearly specified."
	},
	{
		scene: "Skin tones",
		text: "Not ranked. Apple documents Photographic Styles that deliberately shift skin brightness. Huawei adds a 1.5MP spectral color sensor. Neither fact is a measured skin-tone win."
	},
	{
		scene: "Dynamic range",
		text: "Not measured across the four phones in one lab for this app. HDR stills and HDR video exist on the iPhone as Dolby Vision. Huawei lists HDR Vivid video. Samsung’s HDR photo standard was not on the spec row."
	},
	{
		scene: "Video",
		text: "The iPhone is the only one with verified 4K120, ProRes RAW, and Apple Log 2. The Galaxy S26 is the only one with verified 8K30. Huawei discloses that 960 fps is frame insertion. Nothing’s ceiling in secondary specs is 4K60."
	},
	{
		scene: "Front camera",
		text: "iPhone 18MP Center Stage with a square sensor. Galaxy 12MP with autofocus. Nothing 50MP. Huawei 13MP with autofocus and up to 4K. Resolution is not quality."
	},
	{
		scene: "Computation",
		text: "Apple’s Photonic Engine, Samsung’s ProVisual Engine, Nothing’s processing, and Huawei’s AI camera modes are all manufacturer pipelines. They are named where the maker named them. They are not scored."
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComparisonApp, {});
}
//#endregion
export { Home as component };
