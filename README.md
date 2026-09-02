# sentient-ui-types

TypeScript definitions for the SENTIENT UI, **generated** from `ui-ngx` — do not edit by hand.

This is the compile-time contract for UI extensions (e.g. `gateway-management-extension`).
An extension is loaded into SENTIENT at runtime and resolves its imports through
`src/app/modules/common/modules-map.ts`; the declarations here describe exactly what
that runtime exposes, so an extension must depend on the tag matching the SENTIENT
release it targets:

    "sentient-ui-types": "https://github.com/QuakeString/sentient-ui-types.git#4.3.0"

## Regenerate (from the SENTIENT repo)

    scripts/publish-ui-types.sh <release-tag>     # e.g. 4.3.0.22

which regenerates, commits into this repository and tags it with that release tag.
