# Workday Calendar

Independent, buildless private prototype for W016. Open `dist/index.html` through a static HTTP server. No installation, remote requests, analytics, advertising or stored input.

## Behavior

- Count workdays between explicit Gregorian dates, with independent start/end inclusion controls.
- Select excluded weekdays and enter up to 500 holiday dates. There is no bundled official holiday calendar.
- Move up to ±5,000 workdays from a reference date; reference day excluded, zero preserves it.
- CSV exports all counted dates. The screen table previews the first 500 rows. Shared holidays and excluded weekdays are counted only once, as excluded weekdays.
- Supported years: 1900–2100; maximum range 36,600 days. UTC date-only arithmetic avoids device time-zone effects.
- Six complete static locale catalogs: `/` (Korean), `/en/`, `/es/`, `/zh/`, `/ja/`, `/de/`. Each route has a manual language selector. Language changes reset input.

## Verification

Executed from this app directory, with the workspace RTK executable explicitly:

```powershell
& '../../.tools/rtk/rtk.exe' proxy node --check dist/app.js
& '../../.tools/rtk/rtk.exe' proxy node test.mjs
```

Both exited 0. Actual fixture output: `PASS: 20 date, exclusion, shift, validation and six-locale fixtures`.

The Node executable used was the environment's bundled primary runtime. Fixtures cover a known 12-day span (9 workdays, 2 weekend days, 1 supplied holiday), forward/backward weekend crossing, holiday-aware deadline, zero shift, leap day, empty inclusion, duplicate exclusions, invalid dates, impossible weekday rules, invalid amount/range, holiday deduplication, and complete six-language catalog keys. Browser visual, clipboard and download QA remain for the owner; they have not been claimed as verified.

## Source

Original interface, text and code. Date semantics reference the primary [ECMAScript Date specification](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date-objects). No third-party assets or prose are redistributed.

## Public GitHub Pages release

Launch: https://nanalab.kr/workday-calendar/

Korean is at the root. English, Spanish, Chinese, Japanese and German use `/en/`, `/es/`, `/zh/`, `/ja/`, `/de/`.
GitHub Pages serves `main` → `/docs` using the branch build. No project CNAME is used.

Build: `node scripts/build-public.mjs`. The `dist/` snapshot and its original generators/tests are preserved as the application source. The public build adds metadata, six-locale sitemaps, original JPEG cards, More Apps styling and the existing NaNa publisher integrations. It does not upload selected user files.

Publisher integrations: AdSense, Google Tag Manager, Google Analytics and Cloudflare Web Analytics, with the same publisher settings as the NaNa Lab homepage. These scripts can make network requests independently of local file processing.

Original JPEG cards are rendered from original text and geometry using an installed system font; no font files are redistributed. Existing source references and third-party notices remain applicable.
