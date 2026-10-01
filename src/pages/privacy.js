import React from 'react'
import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Hero } from '../components/Hero'
import config from '../utils/config'

export default function Privacy() {
  return (
    <div>
      <Helmet title={config.siteTitle} />
      <SEO />
      <div className="container">
        <Hero title="Privacy Policy">
          <p className="hero-description">

    # Privacy Policy for Swoletide

**Effective Date:** [Insert Date]

Swoletide ("the App", "we", "us") is a 5/3/1 strength training tracker developed and maintained by Parav ("the Developer"). This Privacy Policy explains how the App handles your information.

## Summary

Swoletide is designed to work entirely offline. We do not require you to create an account, we do not collect personal information, and we do not sell or share your data with anyone. All of your training data stays on your device unless you choose to delete it.

## Information We Collect

**We do not collect, transmit, or store any personal information on our servers.** Swoletide has no backend server and does not require internet access to function.

The App stores the following data **locally on your device only**, using local on-device storage (Hive):

- Training Max values and history, for each lift (Squat, Bench Press, Deadlift, Overhead Press)
- Workout program and template selections, including custom programs you create
- Logged workout sessions (sets, reps, weights, completion status, notes)
- Body weight entries you choose to log
- App preferences (units, bar weight, rounding increment, onboarding status)

This data is never transmitted off your device by the App. It is not visible to the Developer, and we have no access to it.

## Third-Party Services

Swoletide uses the following third-party component:

- **Google Fonts** (via the `google_fonts` Flutter package) — used to render the App's typography. Depending on how fonts are packaged, this may involve a one-time network request to Google's font servers the first time a font is loaded, which can expose your device's IP address to Google. No personal training data is sent as part of this request. See [Google's Privacy Policy](https://policies.google.com/privacy) for details on how Google handles this data.

Swoletide does **not** use analytics, advertising networks, crash-reporting services, or any other third-party tracking SDKs.

## Data Sharing

We do not share, sell, rent, or trade any data with third parties, because we do not collect or have access to any data in the first place. All App data remains on your device.

## Data Deletion

Because all data is stored locally on your device:

- Uninstalling the App permanently deletes all associated data.
- You can also clear data manually via your device's system Settings → Apps → Swoletide → Storage → Clear Data (exact steps vary by device/OS).

There is no account or server-side copy of your data for us to delete, because none exists.

## Permissions

Swoletide does not request access to your camera, microphone, contacts, location, or any other sensitive device permissions. The App only reads and writes to its own private local storage sandbox.

## Children's Privacy

Swoletide is not directed at children under 13 and does not knowingly collect any information from children, as it does not collect information from anyone.

## Data Security

Since all data remains on your device and is never transmitted, the security of your training data is governed by your device's own operating system security (e.g. device lock screen, encryption at rest provided by Android/iOS).

## Changes to This Policy

We may update this Privacy Policy from time to time to reflect changes in the App's functionality. Any changes will be posted with an updated "Effective Date" above. Continued use of the App after changes constitutes acceptance of the updated policy.

## Contact Us

If you have any questions about this Privacy Policy, please contact me at hello@parav.in:

---

*This policy applies solely to the Swoletide mobile application and does not apply to any third-party services linked from within the App.*
    
    
    </p>
        </Hero>
      </div>
    </div>
  )
}

Privacy.Layout = Layout
