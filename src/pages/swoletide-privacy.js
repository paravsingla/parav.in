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
            Swoletide is designed to work entirely offline. We don&apos;t require an
            account, we don&apos;t collect personal information, and your training
            data never leaves your device.
          </p>
        </Hero>

        <div className="privacy-content">
          <p>
            <em>Effective Date: 10/1/2026</em>
          </p>

          <p>
            Swoletide (&quot;the App&quot;, &quot;we&quot;, &quot;us&quot;) is a 5/3/1 strength
            training tracker developed and maintained by Parav (&quot;the Developer&quot;). This Privacy Policy explains how the App
            handles your information.
          </p>

          <h2>Summary</h2>
          <p>
            Swoletide is designed to work entirely offline. We do not require
            you to create an account, we do not collect personal information,
            and we do not sell or share your data with anyone. All of your
            training data stays on your device unless you choose to delete
            it.
          </p>

          <h2>Information We Collect</h2>
          <p>
            <strong>
              We do not collect, transmit, or store any personal information
              on our servers.
            </strong>{' '}
            Swoletide has no backend server and does not require internet
            access to function.
          </p>
          <p>
            The App stores the following data <strong>locally on your
            device only</strong>, using local on-device storage:
          </p>
          <ul>
            <li>
              Training Max values and history, for each lift (Squat, Bench
              Press, Deadlift, Overhead Press)
            </li>
            <li>
              Workout program and template selections, including custom
              programs you create
            </li>
            <li>
              Logged workout sessions (sets, reps, weights, completion
              status, notes)
            </li>
            <li>Body weight entries you choose to log</li>
            <li>
              App preferences (units, bar weight, rounding increment,
              onboarding status)
            </li>
          </ul>
          <p>
            This data is never transmitted off your device by the App. It is
            not visible to the Developer, and we have no access to it.
          </p>

          <h2>Third-Party Services</h2>
          <p>Swoletide uses the following third-party component:</p>
          <ul>
            <li>
              <strong>Google Fonts</strong> — used to render the App&apos;s
              typography. Depending on how fonts are packaged, this may
              involve a one-time network request to Google&apos;s font servers
              the first time a font is loaded, which can expose your
              device&apos;s IP address to Google. No personal training data is
              sent as part of this request. See{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google&apos;s Privacy Policy
              </a>{' '}
              for details on how Google handles this data.
            </li>
          </ul>
          <p>
            Swoletide does <strong>not</strong> use analytics, advertising
            networks, crash-reporting services, or any other third-party
            tracking SDKs.
          </p>

          <h2>Data Sharing</h2>
          <p>
            We do not share, sell, rent, or trade any data with third
            parties, because we do not collect or have access to any data in
            the first place. All App data remains on your device.
          </p>

          <h2>Data Deletion</h2>
          <p>Because all data is stored locally on your device:</p>
          <ul>
            <li>
              Uninstalling the App permanently deletes all associated data.
            </li>
            <li>
              You can also clear data manually via your device&apos;s system
              Settings → Apps → Swoletide → Storage → Clear Data (exact steps
              vary by device/OS).
            </li>
          </ul>
          <p>
            There is no account or server-side copy of your data for us to
            delete, because none exists.
          </p>

          <h2>Permissions</h2>
          <p>
            Swoletide does not request access to your camera, microphone,
            contacts, location, or any other sensitive device permissions.
            The App only reads and writes to its own private local storage
            sandbox.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Swoletide is not directed at children under 13 and does not
            knowingly collect any information from children, as it does not
            collect information from anyone.
          </p>

          <h2>Data Security</h2>
          <p>
            Since all data remains on your device and is never transmitted,
            the security of your training data is governed by your device&apos;s
            own operating system security (e.g. device lock screen,
            encryption at rest provided by Android/iOS).
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in the App&apos;s functionality. Any changes will be posted
            with an updated &quot;Effective Date&quot; above. Continued use of the
            App after changes constitutes acceptance of the updated policy.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please
            contact:
          </p>
          <p>
            <strong>Parav</strong>
            <br />
            Email:{' '}
            <a href="mailto:paravksingla@gmail.com">
              hello@parav.in
            </a>
          </p>

          <p>
            <em>
              This policy applies solely to the Swoletide mobile application
              and does not apply to any third-party services linked from
              within the App.
            </em>
          </p>
        </div>
      </div>
    </div>
  )
}
