# Integration proposal

Real image API generation and Buffer conversion tested against the existing image-service boundary; Telegram delivery and text models are not tested. No native video command exists in the inspected source.

Inspected modules: `src/ai.js createAiService.image; src/commands.js; retain admission limits, require stable Telegram message job identity`.

## Acceptance before registration

1. Keep credentials server-side; register an explicit opt-in provider.
2. Query `/v1/pricing` with the actual Key and exact model conditions.
3. Persist the local business identity before POST; an uncertain response must be reconciled, never resubmitted automatically.
4. Poll existing image/video tasks, retain pending/settled/refunded billing, validate returned bytes and import the asset.
5. Verify the real application workflow and its cancellation, credits and error behavior with the maintainer. No UI, cloud deployment or native provider acceptance is claimed by these independent API examples.

Seedance Global models are disabled. ToAPIs uses `POST /v1/images/generations`, `POST /v1/videos/generations` and GET on the returned task; changing Base URL alone is insufficient.
