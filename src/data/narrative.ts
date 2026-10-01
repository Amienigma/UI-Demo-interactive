import type { PhoneId } from "./types";

export const softwareColumns: {
  id: PhoneId;
  title: string;
  points: { h: string; body: string }[];
}[] = [
  {
    id: "iphone",
    title: "iPhone 17 Pro · iOS 27",
    points: [
      {
        h: "Version",
        body: "Shipped on iOS 26 in September 2025. As of 1 October 2026 the current major release is iOS 27, which Apple lists as compatible. iOS 27’s headline assistant is Siri AI, English first, not initially in the EU.",
      },
      {
        h: "Lock Screen and Home Screen",
        body: "iOS 26 introduced Liquid Glass and kept the Lock Screen’s depth, widgets, and always-on clock. The Home Screen is still an icon grid plus a dock. There is no classic app drawer. The App Library is the full catalog. Widgets can sit on the Home Screen and Lock Screen.",
      },
      {
        h: "Control Center and notifications",
        body: "Control Center is a separate surface from notifications, with grouped connectivity, media, and focus controls. Notification grouping and scheduled summary are iOS behaviors. Focus modes still gate who can break through.",
      },
      {
        h: "Multitasking",
        body: "One full-screen app at a time on this phone size, plus picture-in-picture, Slide Over is an iPad behavior and is not claimed here. The app switcher is a card stack. No desktop mode.",
      },
      {
        h: "AI",
        body: "Apple Intelligence tools from iOS 26 (Live Translation, visual intelligence, on-device model for developers) plus iOS 27 Siri AI. The 17 Pro is in the hardware tier MacRumors says can run the heavier on-device model. Language and EU availability are limited.",
      },
      {
        h: "Privacy",
        body: "App Tracking Transparency, on-device processing for parts of Apple Intelligence, Lockdown Mode, and Face ID. iMessage and FaceTime are end-to-end encrypted in Apple’s normal deployment. Apple still holds iCloud keys unless Advanced Data Protection is turned on. That last point is a standing Apple design, not a new 17 Pro-only feature.",
      },
      {
        h: "Customization",
        body: "Tinted icons, widgets, Lock Screen, Focus, and Control Center shortcuts. Much less free-form than One UI. No system-wide icon pack store from Apple.",
      },
      {
        h: "Continuity",
        body: "Handoff, Universal Clipboard, AirDrop, iPhone mirroring on Mac, and Continuity Camera are the Apple stack. They require other Apple devices. They do not extend to a Windows PC the way Link to Windows does.",
      },
    ],
  },
  {
    id: "galaxy",
    title: "Galaxy S26 · One UI 9 rolling out",
    points: [
      {
        h: "Version",
        body: "Launched on One UI 8.5 / Android 16. One UI 9 / Android 17 started reaching US units in the last week of September 2026. On 1 October 2026 that update is a rollout, not a guarantee.",
      },
      {
        h: "Lock Screen and Home Screen",
        body: "One UI uses a large-type Lock Screen, widget stacks, and a Home Screen that can hide the app drawer or keep it. Icons, grid, and folders are adjustable. Edge panels have been part of One UI; whether every edge gesture from older flagships survived unchanged into One UI 9 was not re-tested here.",
      },
      {
        h: "Quick Settings",
        body: "The notification shade and quick-settings tiles are one pull-down surface, split by swipe direction. Tiles are reorderable. That layout is the One UI pattern, distinct from iOS Control Center.",
      },
      {
        h: "Multitasking",
        body: "Split screen and pop-up view are standard One UI phone features. DeX for PC is discontinued on One UI 7 and later. Samsung tells S26 owners to use Link to Windows, which does not mirror a full Android desktop onto the PC. Monitor DeX is listed by GSMArena and not confirmed in that support note.",
      },
      {
        h: "Galaxy AI",
        body: "Photo Assist, Creative Studio, Now Nudge, Now Brief, and Bixby are on the US product page. Language lists are shorter for some of those tools. Good Lock on One UI 9 was not re-verified, so it is not described as a confirmed S26 feature.",
      },
      {
        h: "Privacy",
        body: "Google Play Protect, Android permission dashboard, Samsung Knox, and a secure folder have been Galaxy flagship features. Private folder behavior on the One UI 9 build was not independently re-tested for this page. Google account sync is present because this is a GMS phone.",
      },
      {
        h: "Ecosystem",
        body: "Quick Share, Smart Switch, Galaxy Watch, Buds, and Link to Windows. The S26 is named on Samsung’s Link to Windows device list.",
      },
    ],
  },
  {
    id: "nothing",
    title: "Nothing Phone (3) · Nothing OS 4.1 stable",
    points: [
      {
        h: "Version",
        body: "Launched on Nothing OS 3.5 / Android 15. Stable software on 1 October 2026 is Nothing OS 4.1 / Android 16. Nothing OS 5.0 / Android 17 is in open beta, with stable scheduled for mid-October 2026.",
      },
      {
        h: "Home, lock, quick settings",
        body: "Nothing OS is a monochrome, dot-grid skin on Android. It has a Lock Screen, a Home Screen, an app drawer, and quick settings. Widgets exist. The visual identity is the dot matrix, not a copy of One UI or iOS.",
      },
      {
        h: "Glyph Matrix",
        body: "The rear is a round LED matrix (launch coverage: 489 micro-LEDs) for notifications, timers, and a Glyph progress language. A red recording light shows when video is capturing. This is hardware UI, not just a software theme.",
      },
      {
        h: "Nothing apps",
        body: "Essential Space and Essential Search are the named organization tools. Essential Notifications and a Glyph developer API are documented. There is no Nothing desktop mode.",
      },
      {
        h: "AI",
        body: "Essential-series tools are Nothing’s AI surface. Nothing OS 5.0 is described by the company as adding further Essential AI features, but that build is still beta on this date.",
      },
      {
        h: "Privacy and apps",
        body: "It is a normal Android phone with Google Mobile Services in markets where Nothing ships GMS, including the US model’s retail positioning. Play Store availability is the practical difference versus Huawei. A Nothing-specific privacy white paper was not retrieved.",
      },
      {
        h: "Customization",
        body: "Nothing keeps the system visually strict. Icon and widget options exist inside Nothing OS, but the point of the skin is fewer themes, not Good-Lock-style theming. Do not describe older Phone (1) Glyph toys as Phone (3) features unless they were carried into the Matrix.",
      },
    ],
  },
  {
    id: "huawei",
    title: "Pura 80 Pro · two operating systems",
    points: [
      {
        h: "China",
        body: "HarmonyOS 5.1, with an official path to HarmonyOS 6. Some units ship on HarmonyOS 6. This is Huawei’s own operating system. Apps are HarmonyOS packages. Calling it Android or iOS is incorrect.",
      },
      {
        h: "International",
        body: "EMUI 15.0 on the Hong Kong and European spec pages. EMUI sits on Android’s open-source code. A 2026 EU review identifies that base as Android 12. Huawei does not print the AOSP version on the spec page, so treat “Android 12” as a reviewer finding.",
      },
      {
        h: "Home and controls",
        body: "Both skins use a home screen, a control panel, notifications, and widgets. HarmonyOS 5’s control layout is often compared with iOS by reviewers. EMUI keeps an Android-style app drawer. The simulation below switches between those two layouts. It is not an official screenshot.",
      },
      {
        h: "Multitasking",
        body: "Split screen and floating windows have been part of recent Huawei phones. Which of those gestures shipped unchanged on EMUI 15 versus HarmonyOS 5.1 was not re-verified feature by feature, so this page does not claim a specific split-screen limit.",
      },
      {
        h: "Apps",
        body: "Huawei Mobile Services and AppGallery on both variants. International phones can sideload many Android APKs; Petal Search helps find them. Google Mobile Services are not official. MicroG is a community workaround and breaks pieces of Google Pay, Android Auto, and some banking apps. China HarmonyOS 5 does not use APKs as its native format.",
      },
      {
        h: "AI",
        body: "Huawei’s camera spec lists AI composition, AI night, and other camera modes on the China page. A full HarmonyOS 6 assistant feature list for this model was not verified line by line.",
      },
      {
        h: "Privacy",
        body: "No Google account is required, which some people want and which also removes Google’s spam and account protections. Huawei ID is the account. Independent security audits of HarmonyOS 5.1 versus iOS 27 were not retrieved.",
      },
    ],
  },
];

export const uxAxes: {
  axis: string;
  scores: Record<PhoneId, number>;
  why: string;
}[] = [
  {
    axis: "Customization",
    scores: { iphone: 6, galaxy: 8, nothing: 5, huawei: 7 },
    why: "One UI exposes more layout controls than iOS. Nothing OS is intentionally narrow. HarmonyOS/EMUI are flexible, but Good Lock on One UI 9 was not re-verified, so Galaxy is not scored as a 10.",
  },
  {
    axis: "Privacy controls",
    scores: { iphone: 8, galaxy: 7, nothing: 7, huawei: 6 },
    why: "iOS permission prompts and on-device Apple Intelligence are the clearest documented model. Galaxy and Nothing inherit Android’s permission dashboard plus Google. Huawei avoids Google and also avoids Google’s review pipeline. None of these scores is an audit.",
  },
  {
    axis: "Multitasking",
    scores: { iphone: 6, galaxy: 8, nothing: 7, huawei: 7 },
    why: "Android split screen and pop-ups beat the iPhone’s single window. Galaxy loses points because DeX for PC is gone. Huawei’s floating-window set is not fully re-specified here, so it stays even with Nothing.",
  },
  {
    axis: "Ease of use",
    scores: { iphone: 9, galaxy: 7, nothing: 8, huawei: 5 },
    why: "For a US buyer. iOS 27 is a finished release. One UI 9 is mid-rollout. Nothing OS is simple if you accept the monochrome rules. Huawei in the US means missing apps and no official support.",
  },
  {
    axis: "AI integration",
    scores: { iphone: 8, galaxy: 8, nothing: 6, huawei: 6 },
    why: "Siri AI and Galaxy AI are shipping product surfaces with published language limits. Nothing’s bigger AI pass is still a beta. Huawei’s confirmed AI list in this pass is mostly camera modes.",
  },
  {
    axis: "Notification management",
    scores: { iphone: 8, galaxy: 8, nothing: 7, huawei: 6 },
    why: "iOS Focus and One UI’s shade are both mature. Nothing adds a rear LED channel, which is useful and also another place to look. Huawei’s two skins are not scored from a side-by-side notification test.",
  },
  {
    axis: "File management",
    scores: { iphone: 5, galaxy: 8, nothing: 8, huawei: 7 },
    why: "The Files app on iOS is still more locked down than Android’s file managers. EMUI can manage files but sharing them into Google apps is the weak point.",
  },
  {
    axis: "App ecosystem",
    scores: { iphone: 9, galaxy: 9, nothing: 9, huawei: 3 },
    why: "US context. iPhone, Galaxy, and Nothing Phone (3) can run the Play Store or the App Store. The Pura 80 Pro cannot officially. A 3 is “possible with compromises,” not “no apps exist.” Inside China, HarmonyOS would score much higher. That is a different market.",
  },
  {
    axis: "Cross-device",
    scores: { iphone: 9, galaxy: 8, nothing: 4, huawei: 4 },
    why: "Apple continuity is the deepest if you own the other devices. Samsung’s Link to Windows is real and DeX-for-PC is not. Nothing’s ecosystem is phones and audio. Huawei’s Super Device story does not include US Google or Apple gear.",
  },
  {
    axis: "Accessibility",
    scores: { iphone: 9, galaxy: 8, nothing: 6, huawei: 6 },
    why: "Apple documents a broad iOS 27 accessibility set, including richer VoiceOver image descriptions. Samsung’s accessibility suite is long-standing. Nothing and Huawei were not compared feature by feature in this pass, so they are not given a high score by inheritance.",
  },
  {
    axis: "Gaming",
    scores: { iphone: 8, galaxy: 8, nothing: 6, huawei: 5 },
    why: "A19 Pro and the US Snapdragon S26 are the current-class chips, with ray tracing on the Apple side officially. Nothing’s 8s Gen 4 is a step down. Kirin 9020 was not shown to match either in the one lab review retrieved. No frame-rate table is invented.",
  },
  {
    axis: "Productivity",
    scores: { iphone: 8, galaxy: 8, nothing: 6, huawei: 4 },
    why: "iPhone plus Mac, or Galaxy plus Link to Windows, are the workable US setups. Nothing is a phone, not a desk system. Huawei’s missing Google Workspace and office-app friction dominates the US score.",
  },
];

export const ecosystems: {
  id: PhoneId;
  name: string;
  rows: { k: string; v: string }[];
}[] = [
  {
    id: "iphone",
    name: "Apple",
    rows: [
      { k: "Computers", v: "Mac. iPhone Mirroring, Handoff, and Universal Clipboard require a Mac on a current macOS. No official Windows companion with the same depth." },
      { k: "Tablets", v: "iPad. Sidecar and Universal Control are Mac/iPad features, not iPhone features. iPhone pairs for calls and hotspot." },
      { k: "Watches", v: "Apple Watch. watchOS 27 shipped alongside iOS 27. An Apple Watch does not pair to the Galaxy, Nothing, or Huawei phones." },
      { k: "Earbuds", v: "AirPods. Spatial audio and automatic switching are inside the Apple account. Other Bluetooth headphones work without those features." },
      { k: "Cloud", v: "iCloud. Advanced Data Protection is optional. Photos, Keychain, and device backup are the core." },
      { k: "Sharing", v: "AirDrop between Apple devices. NameDrop and proximity features depend on the other device also being Apple." },
      { k: "Messages and calls", v: "iMessage and FaceTime are Apple-only. RCS and SMS still exist for everyone else. Live Translation in Phone was language-limited at the iOS 26 launch." },
      { k: "Smart home", v: "HomeKit, and Thread via the N1 chip on this iPhone. Matter accessories can also be reached through other ecosystems. HomeKit Secure Video 4K is an iOS 27 item Apple has described for supported cameras." },
    ],
  },
  {
    id: "galaxy",
    name: "Samsung and Google",
    rows: [
      { k: "Computers", v: "Link to Windows is the supported PC path on One UI 7 and later, including the S26. DeX for PC is discontinued. A Samsung PC is not required." },
      { k: "Tablets", v: "Galaxy Tab can pair through Samsung’s shared features and Quick Share. Exact Tab S continuity features were not re-listed from a 2026 support page." },
      { k: "Watches", v: "Galaxy Watch. Wear OS watches from other brands can also pair because this is Android. Apple Watch cannot." },
      { k: "Earbuds", v: "Galaxy Buds4 launched with the S26 series. Standard Bluetooth audio works with other buds." },
      { k: "Cloud", v: "Google account plus Samsung account. Photos can live in Google Photos. Samsung Cloud is not a full replacement for iCloud device restore in Apple’s sense." },
      { k: "Sharing", v: "Quick Share with nearby Android and Chromebook devices. Wireless PowerShare is for charging accessories, not for files." },
      { k: "Messages and calls", v: "Google Messages, RCS where the carrier supports it, and phone-link calls on Windows. No iMessage." },
      { k: "Smart home", v: "SmartThings, plus Google Home. Bixby routines exist. A full SmartThings device matrix was not copied into this app." },
    ],
  },
  {
    id: "nothing",
    name: "Nothing",
    rows: [
      { k: "Computers", v: "No Nothing computer. File transfer is Android’s usual USB, Nearby Share / Quick Share, and cloud drives." },
      { k: "Tablets", v: "No Nothing tablet line was confirmed as part of this phone’s continuity story." },
      { k: "Watches", v: "No Nothing watch was verified. Wear OS or other Bluetooth watches may pair as generic Android accessories. That was not lab-checked." },
      { k: "Earbuds", v: "Nothing Ear and CMF audio products. The phone’s 5W reverse wireless is explicitly aimed at topping those up. Integration is audio and Glyph-adjacent, not a watch-style health platform." },
      { k: "Cloud", v: "Google account. Nothing does not operate an iCloud equivalent in the sources checked." },
      { k: "Sharing", v: "Android nearby sharing. No proprietary high-speed fabric was documented." },
      { k: "Messages and calls", v: "Google Messages and the Phone app. Essential Space can hold notes and captures. It is not a messaging network." },
      { k: "Smart home", v: "Not a Nothing platform in the sources checked. Google Home would be the Android path. Not re-tested on this phone." },
    ],
  },
  {
    id: "huawei",
    name: "Huawei",
    rows: [
      { k: "Computers", v: "Huawei PC collaboration features exist in markets where Huawei sells them. They were not verified against a US Windows or Mac workflow, and Google Drive integration is not official." },
      { k: "Tablets", v: "Huawei MatePad devices run HarmonyOS or EMUI depending on region. They do not join an Apple or Samsung account." },
      { k: "Watches", v: "Huawei Watch. It does not replace an Apple Watch or a Galaxy Watch on those phones, and the reverse is also true." },
      { k: "Earbuds", v: "Huawei FreeBuds. LDAC and L2HC are listed on the China Pura 80 Pro spec page." },
      { k: "Cloud", v: "Huawei ID cloud. Google Photos and iCloud are not system services. International users often add a third-party cloud by sideload." },
      { k: "Sharing", v: "Huawei Share between Huawei devices. Not AirDrop, not Quick Share with the Google stack, unless an app provides it." },
      { k: "Messages and calls", v: "Huawei’s own messaging stack in China, including the BeiDou path. International SMS/MMS works as a phone. iMessage, FaceTime, and Google Messages features that need GMS should be assumed absent until an app proves otherwise." },
      { k: "Smart home", v: "Huawei’s home platform is a China-centered system. It is not HomeKit and it is not SmartThings. US device support was not verified." },
    ],
  },
];

export const matrixRows: { area: string; cells: Record<PhoneId, string> }[] = [
  {
    area: "Hardware class",
    cells: {
      iphone: "2025 flagship. Vapor chamber, A19 Pro. Superseded by iPhone 18 Pro in September 2026, but still a current supported phone.",
      galaxy: "2026 flagship, compact. Split chip by region. The most current of the four on a calendar.",
      nothing: "2025 upper-mid flagship silicon (Snapdragon 8s Gen 4), not an 8 Elite phone. Still Nothing’s top model.",
      huawei: "2025 camera flagship. Kirin 9020 is official. Its performance class is not established against A19 Pro or Snapdragon 8 Elite Gen 5.",
    },
  },
  {
    area: "Display",
    cells: {
      iphone: "Sharper (460 ppi, 2622×1206). 3000-nit marketing peak. Lab: about 2755 nits on a 15% window, about 1000 nits in bright ambient.",
      galaxy: "FHD+ 2340×1080, officially 1–120Hz. 2600-nit peak is a US page claim, missing from the global spec table. No lab nits retrieved.",
      nothing: "1260×2800, 460 ppi, 120Hz. 4500-nit claim. PhoneArena measured 1501 nits at 20% APL. Probably not LTPO to 1Hz.",
      huawei: "2848×1276, true 1–120Hz LTPO, 1440Hz PWM, Kunlun Glass 2. Peak nits not on the official page retrieved.",
    },
  },
  {
    area: "Performance",
    cells: {
      iphone: "A19 Pro, 6-core CPU, 6-core GPU, ray tracing. RAM not published by Apple. No benchmark number is shown.",
      galaxy: "US-pattern silicon is Snapdragon 8 Elite Gen 5 for Galaxy. Europe-pattern silicon is Exynos 2600. Do not mix their scores.",
      nothing: "Snapdragon 8s Gen 4, up to 3.2 GHz, 4 nm, UFS 4.0. A step below the other two US-sold chips.",
      huawei: "Kirin 9020 octa-core. Clocks, GPU, and process: not officially specified. One EU review found it uncompetitive for the money.",
    },
  },
  {
    area: "Battery",
    cells: {
      iphone: "mAh not official. Lab: about 4252 mAh eSIM-only, about 3998 mAh SIM tray. Claim: up to 33 h video.",
      galaxy: "4300 mAh typical, 4175 mAh rated. Video claim 30 h (US) or 31 h (Japan).",
      nothing: "5150 mAh international. 5500 mAh reported for India. Nothing’s own support page only states 5150.",
      huawei: "5700 mAh typical in China (5580 rated). 5170 mAh on international pages. Largest official cells in this set, and they are not the same cell.",
    },
  },
  {
    area: "Charging",
    cells: {
      iphone: "50% in 20 min from a ≥40W USB-C adapter. MagSafe and Qi2 up to 25W. China wireless may be 15W.",
      galaxy: "25W wired, 55% in 30 min under Samsung’s lab conditions. Wireless watts not stated officially. PowerShare exists.",
      nothing: "About 60 min to full. 1–50% in under 20 min. 65W is launch-coverage, not the support-page sentence. 15W wireless, 5W reverse wireless.",
      huawei: "100W wired with Huawei’s charger. China: 80W wireless with a separate charger, 18W wired reverse. Not a generic-brick guarantee.",
    },
  },
  {
    area: "Cameras",
    cells: {
      iphone: "Triple 48MP. 4× optical at 100 mm, 8× optical-quality at 200 mm. 18MP front. No image-quality ranking is claimed.",
      galaxy: "50+10+12. 3× optical, 2× optical-quality crop. The most conservative zoom hardware here.",
      nothing: "Triple 50MP including a 3× periscope. Sensor part numbers come from secondary sources. No ranking is claimed.",
      huawei: "50MP 1-inch, variable ƒ/1.6–ƒ/4.0, 48MP 4× macro tele, 40MP ultrawide, spectral color sensor. Strongest official hardware list. Not a tested image-quality win.",
    },
  },
  {
    area: "Video",
    cells: {
      iphone: "4K120, Dolby Vision, ProRes RAW, Apple Log 2, genlock with accessories. The deepest verified pro-video feature list.",
      galaxy: "8K30 and high-frame slow motion are official. Log and pro cinema modes were not on the spec rows retrieved.",
      nothing: "4K60 reported by GSMArena. 8K and Log not found.",
      huawei: "4K, Log, HDR Vivid. 1080p960 is AI frame insertion, which Huawei discloses.",
    },
  },
  {
    area: "Build",
    cells: {
      iphone: "206 g US listing (some regions print 204 g). IP68 to 6 m. Aluminum unibody, Ceramic Shield 2. Dimensions in mm not captured from Apple.",
      galaxy: "167 g, 7.2 mm, IP68. Lightest and thinnest official body here. Gorilla Glass Victus 2.",
      nothing: "218 g, 8.99 mm, IP68, aluminum frame. The thickest of the four.",
      huawei: "About 219 g, 8.3 mm, IP68 and IP69. Heaviest official weight, tied with Nothing within a gram.",
    },
  },
  {
    area: "Software",
    cells: {
      iphone: "iOS 27 is out and compatible.",
      galaxy: "One UI 9 / Android 17 is rolling out, not universal on 1 Oct 2026.",
      nothing: "Nothing OS 4.1 stable. OS 5.0 stable is scheduled mid-October, so it is still beta today.",
      huawei: "China HarmonyOS 5.1/6. International EMUI 15.0. Different products.",
    },
  },
  {
    area: "Customization",
    cells: {
      iphone: "Widgets, Lock Screen, Focus, Control Center. No deep theming.",
      galaxy: "One UI layout controls are broad. Good Lock on One UI 9: not re-verified.",
      nothing: "Strict visual system. Glyph Matrix is the custom surface.",
      huawei: "Both skins are configurable. The limit is apps, not toggles.",
    },
  },
  {
    area: "AI",
    cells: {
      iphone: "Siri AI on the high hardware tier, with language and EU limits.",
      galaxy: "Galaxy AI tools shipped, with shorter language lists for some of them.",
      nothing: "Essential tools now. Larger pass is in beta.",
      huawei: "Camera AI modes are official. A system-assistant parity claim is not.",
    },
  },
  {
    area: "Privacy",
    cells: {
      iphone: "Tracking prompts, Lockdown Mode, optional Advanced Data Protection.",
      galaxy: "Android permissions plus Knox. Google account is in the loop.",
      nothing: "Android permissions plus Google, unless the buyer sideloads around that. No extra Nothing audit was found.",
      huawei: "No GMS. That removes Google and also removes Play Protect. Not automatically more private.",
    },
  },
  {
    area: "Ecosystem",
    cells: {
      iphone: "Deepest, if the rest of the house is Apple.",
      galaxy: "Broad Android plus Link to Windows. DeX for PC is gone.",
      nothing: "Phone, Glyph, earbuds. Little else.",
      huawei: "Coherent inside Huawei’s own devices. Disconnected from Google and Apple.",
    },
  },
  {
    area: "App availability",
    cells: {
      iphone: "App Store. US banking, transit, and government apps are generally present.",
      galaxy: "Play Store. Same practical US coverage.",
      nothing: "Play Store on the US retail phone.",
      huawei: "AppGallery and sideload. US daily apps are the failure point. China HarmonyOS has its own store and is not the Play Store.",
    },
  },
  {
    area: "Connectivity",
    cells: {
      iphone: "Wi-Fi 7, Bluetooth 6, Thread, eSIM-only in the US. Satellite features are listed by GSMArena, not quoted from Apple in this pass.",
      galaxy: "US unlocked band list is Sub-6, including n71. mmWave not listed. Wi-Fi 7 is an aggregator line.",
      nothing: "Wi-Fi 7 is on Nothing’s page. US Sub-6 bands are listed by GSMArena. No mmWave. NFC not re-confirmed.",
      huawei: "Wi-Fi 7 and Bluetooth 5.2 official on the China page. BeiDou messaging is mainland China only. US bands unknown.",
    },
  },
  {
    area: "Update support",
    cells: {
      iphone: "On iOS 27. No fixed end date from Apple.",
      galaxy: "Seven OS generations and seven years of security, per Samsung’s flagship policy as reported at launch.",
      nothing: "Reported as five OS upgrades and seven years of security. Not re-read from a Nothing legal page.",
      huawei: "HarmonyOS 6 upgrade is official for China. A year count is not on the spec page. EU five-year obligation is a reviewer’s citation.",
    },
  },
  {
    area: "Value",
    cells: {
      iphone: "Launched at $1,099. A year old, so street prices are lower. Current Apple Store price was not re-checked.",
      galaxy: "Launched at $899.99. Newest of the US-sold pair, and the cheapest official starting MSRP among phones Huawei doesn’t undercut with a missing US price.",
      nothing: "Published from $799. Older silicon than the S26. The price is the argument, not the bench.",
      huawei: "No US price. Hardware per dollar cannot be scored without an official local price.",
    },
  },
  {
    area: "US usability",
    cells: {
      iphone: "Designed for this market. eSIM, major carriers, Apple stores.",
      galaxy: "Official US retail. Confirm mmWave only if you need it; the unlocked band list does not show it.",
      nothing: "Official US sale. Carrier certification was not verified. Bands look Sub-6 capable on paper.",
      huawei: "Not a practical US primary phone. No official sale, no GMS, no verified carrier bands, no BeiDou outside mainland China.",
    },
  },
];

export const conclusions = [
  {
    title: "Best overall",
    pick: "Galaxy S26, for a US buyer who is not already bought into Apple",
    body: "The useful question in October 2026 is not which spec sheet has the largest number. It is which phone you can buy, update, and live in. The Galaxy S26 is the only 2026 phone in the set, it launched at $899.99, Samsung states a seven-year update policy, and it ships with Google services. One UI 9 is still rolling out, and the base model’s 25W charging and FHD+ screen are real limits next to the S26 Ultra and next to the iPhone’s sharper panel. The iPhone 17 Pro is the better phone if you already use a Mac, an Apple Watch, or iMessage, or if you want the pro video tools. It is also last year’s Pro: Apple announced the iPhone 18 Pro on 9 September 2026. Nothing Phone (3) is the right name for Nothing’s flagship, and it is the wrong answer if raw performance is the goal. The Pura 80 Pro’s hardware does not survive contact with a US SIM and a US app list.",
  },
  {
    title: "Best for hardware and camera",
    pick: "Huawei Pura 80 Pro on the spec sheet. iPhone 17 Pro for verified pro video you can actually use in the US.",
    body: "Huawei is the only company here that officially specifies a 1-inch main sensor, a variable aperture, a 48MP macro telephoto at about 4×, IP69, and 100W charging. The China battery is also the largest official cell. That is a hardware lead. It is not an image-quality lead. No DXOMARK or other cross-lab photo scores for all four phones were retrieved, so this app does not declare a picture winner. Among phones sold in the United States, the iPhone 17 Pro has the strongest verified video feature set: 4K120, Dolby Vision, ProRes RAW, Apple Log 2, and an 8× optical-quality telephoto. The Galaxy S26’s 10MP 3× telephoto is the shortest reach. Nothing’s 50MP 3× periscope is more interesting on paper than Samsung’s 10MP tele, and its computational results were not ranked. If “best camera” means “best hardware list,” say Huawei and then say you may not be able to use the phone. If it means “best verified camera system in the US,” say iPhone 17 Pro.",
  },
  {
    title: "Best for software and ecosystem",
    pick: "iPhone 17 Pro",
    body: "iOS 27 is a finished release, not a staged carrier rollout, and Apple’s continuity features are still the most complete set if the other devices are Apple’s. Samsung is close, and Link to Windows is a real advantage for people on Windows, but Samsung has removed DeX for PC. Nothing OS is pleasant and thin: there is no watch platform, no computer, and the next OS is still in beta on this date. Huawei’s software story is the most important factual split in the whole comparison. HarmonyOS 5 is not Android. EMUI 15 is Android-based and still has no official Google services. Neither one joins the Apple or Google ecosystems a US household already uses. Software support math also favors Samsung on paper (seven stated years) and Apple in practice (no promised end date, but iOS 27 already landed). Nothing’s five-plus-seven policy is reported, not re-read from Nothing’s legal text.",
  },
];

export const glossary: { term: string; text: string }[] = [
  { term: "Optical vs optical-quality", text: "Optical zoom uses a longer lens. Optical-quality, in Apple and Samsung’s wording, is a crop from a high-resolution sensor that they consider comparable to a lens. It is not the same as a separate telephoto." },
  { term: "LTPO", text: "A backplane that lets the refresh rate fall very low, often to 1Hz, to save power on an always-on clock. A phone can be 120Hz without being LTPO." },
  { term: "Peak nits", text: "Manufacturers usually mean a small highlight window, not the whole screen at full white. Lab numbers in this app are labeled separately when a lab published them." },
  { term: "Typical vs rated mAh", text: "Typical is an average. Rated is a minimum under a standard such as IEC 61960. Huawei and Samsung publish both for some models. Apple publishes neither." },
  { term: "HMS and GMS", text: "Google Mobile Services are Play Store, Play Services, and the Google apps. Huawei Mobile Services are AppGallery and Huawei’s own APIs. A phone can be Android-based and still lack GMS. HarmonyOS 5 is not that phone." },
  { term: "eSIM", text: "A programmable SIM with no plastic card. The US iPhone 17 Pro has no tray. That is a carrier and travel constraint, not a battery footnote only." },
  { term: "Sub-6 vs mmWave", text: "Most US 5G is Sub-6, including n71 (extended range) and n41 / n77 (capacity). mmWave (n260/n261) is short-range and mostly venue or dense urban. A phone can be a normal US 5G phone without mmWave." },
  { term: "Editorial score", text: "The 1–10 bars in the UI section are judgments by this comparison, written so you can disagree. They are not measurements and they are not from Apple, Samsung, Nothing, or Huawei." },
];

export const nav = [
  { id: "overview", label: "Overview" },
  { id: "hardware", label: "Hardware" },
  { id: "cameras", label: "Cameras" },
  { id: "software", label: "Software" },
  { id: "uilab", label: "UI lab" },
  { id: "ecosystem", label: "Ecosystem" },
  { id: "matrix", label: "Matrix" },
  { id: "sources", label: "Sources" },
] as const;
