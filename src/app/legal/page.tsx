"use client";

/* ── Shared UI piece ── */

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: 13,
        fontWeight: 300,
        letterSpacing: "0.01em",
        padding: "4px 12px",
        borderRadius: "var(--radius)",
        backgroundColor: "var(--border)",
        color: "var(--foreground)",
      }}
    >
      {children}
    </span>
  );
}

/* ── Shared styles ── */

const bodyParagraph: React.CSSProperties = {
  fontSize: 15,
  fontWeight: 300,
  lineHeight: 1.8,
  color: "var(--foreground)",
  marginTop: 16,
};

const h3Style: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 300,
  letterSpacing: "-0.005em",
  marginTop: 40,
  marginBottom: 4,
  color: "var(--foreground)",
};

const listStyle: React.CSSProperties = {
  ...bodyParagraph,
  paddingLeft: 20,
  listStyle: "disc",
};

const listItemStyle: React.CSSProperties = {
  marginBottom: 6,
};

/* ── Page ── */

export default function Legal() {
  return (
    <main>
      {/* ════════════════════════════════════════════
          SECTION 1 — Header
         ════════════════════════════════════════════ */}
      <section style={{ paddingTop: 80, paddingBottom: 40 }}>
        <Badge>Legal</Badge>
        <h1
          style={{
            marginTop: 20,
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          Privacy Policy &amp; Legal Notice
        </h1>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 2 — Privacy Policy
         ════════════════════════════════════════════ */}
      <section style={{ paddingBottom: 64, maxWidth: 720 }}>
        <h2 style={{ marginBottom: 16 }}>Privacy Policy</h2>

        {/* 01 — Who we are */}
        <h3 style={h3Style}>01 — Who we are?</h3>
        <p style={bodyParagraph}>
          &copy; The Luka Dosen Labs | Landquart, 07.01.2025
        </p>
        <p style={bodyParagraph}>
          The following company is generally responsible for data processing under this privacy
          policy (&ldquo;we&rdquo; or &ldquo;us&rdquo;):
        </p>
        <p style={{ ...bodyParagraph, whiteSpace: "pre-line" }}>
          {`The Luka Dosen Labs
Bahnhofstrasse 11
7302 Landquart
Switzerland`}
        </p>

        {/* 02 — Data and purposes */}
        <h3 style={h3Style}>02 — What personal data do we process and for what purposes?</h3>
        <p style={bodyParagraph}>
          We process different personal data depending on the occasion and purpose.
        </p>
        <p style={bodyParagraph}>
          We generally collect your personal data directly from you, for example when you provide
          us with personal data, when you use our services, or when you communicate with us. This
          is the case, for instance, when you provide your email address, first and last name,
          address, and place of residence when creating a user account.
        </p>
        <p style={bodyParagraph}>
          Personal data may also be collected from other sources. This particularly applies to the
          following data and sources:
        </p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            Information from public registers, such as debt collection registers and authorities
          </li>
          <li style={listItemStyle}>
            Information from private information providers, such as credit agencies
          </li>
          <li style={listItemStyle}>
            Providers of online services, such as internet analytics providers that collect
            information on our website and use it for evaluations (more details can be found in
            the section &ldquo;How do we process personal data in connection with websites, apps,
            and email newsletters?&rdquo;)
          </li>
          <li style={listItemStyle}>
            Information from financial service providers when you make payments to us
          </li>
          <li style={listItemStyle}>
            Information we receive from a company you work for, such as name, contact details,
            title, function, etc.
          </li>
          <li style={listItemStyle}>
            Information about you that other persons share with us, for example in the context of
            official or court proceedings or in communication with us
          </li>
        </ul>
        <p style={bodyParagraph}>
          We primarily process your personal data to offer our services and for the following
          purposes, as well as for other purposes that we communicate to you separately or that
          are obvious:
        </p>
        <ul style={listStyle}>
          <li style={listItemStyle}>Communication with you and third parties</li>
          <li style={listItemStyle}>
            Provision, administration, security, and personalisation of websites, apps, online
            offerings, and other infrastructure
          </li>
          <li style={listItemStyle}>To enter into and execute contracts with you</li>
          <li style={listItemStyle}>
            To enter into and execute contracts with our suppliers, customers, and business
            partners with whom you are connected, and for customer relationship management
          </li>
          <li style={listItemStyle}>
            For advertising and marketing purposes, such as organising events, competitions, and
            similar activities, and for sending targeted information and marketing communications
            by post and through electronic channels (provided the recipient has not objected to
            direct marketing)
          </li>
          <li style={listItemStyle}>
            To prepare and execute company acquisitions and sales and similar transactions
          </li>
          <li style={listItemStyle}>To manage and maintain our IT and other resources</li>
          <li style={listItemStyle}>
            For accounting, archiving, training, and other administrative purposes
          </li>
          <li style={listItemStyle}>To review and improve our internal processes</li>
          <li style={listItemStyle}>
            To ensure the safety of our employees and our buildings and premises
          </li>
          <li style={listItemStyle}>
            To review and comply with legal obligations, including orders from courts or authorities
          </li>
          <li style={listItemStyle}>
            For compliance and for detecting, investigating, and preventing misuse
          </li>
          <li style={listItemStyle}>
            To enforce our claims and those of affiliated companies, and to defend against claims
            against us, our employees, affiliated companies, and our contractual and business
            partners before courts and authorities in Switzerland and abroad
          </li>
        </ul>

        {/* 03 — Disclosure */}
        <h3 style={h3Style}>03 — To whom do we disclose your personal data?</h3>
        <p style={bodyParagraph}>
          Our employees have access to personal data insofar as this is necessary for the described
          purposes and for the activities of the respective employees. This includes employees in
          support and marketing. They act according to our instructions and are obliged to maintain
          confidentiality and secrecy in handling your personal data.
        </p>
        <p style={bodyParagraph}>
          We may also disclose your personal data to third parties when we wish to use their
          services (e.g. IT service providers). It is also possible that personal data may be
          disclosed to other companies for their own purposes. In such cases, the recipient of the
          data is a separate data controller under data protection law. This applies, for example,
          to the following cases:
        </p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            When we are considering or conducting transactions such as mergers or the acquisition
            or sale of individual parts of a company or its assets, we must transfer personal data
            to another company in this context.
          </li>
          <li style={listItemStyle}>
            We may disclose your personal data to third parties (e.g. courts and authorities in
            Switzerland and abroad) where required by law. We also reserve the right to process
            your personal data to comply with a court order, to assert or defend legal claims, or
            where we consider it necessary for other legal reasons. In doing so, we may also
            disclose personal data to other parties involved in proceedings.
          </li>
          <li style={listItemStyle}>
            We may transfer claims against you to other companies, such as debt collection agencies.
          </li>
        </ul>

        {/* 04 — International transfers */}
        <h3 style={h3Style}>04 — When do we disclose your personal data abroad?</h3>
        <p style={bodyParagraph}>
          The recipients of your personal data may also be located abroad, including outside
          Switzerland or the countries of the EU and the European Economic Area (EEA). The
          countries concerned may not have laws that protect your personal data to the same extent
          as Switzerland or the EU or EEA countries. When we wish to transfer your personal data to
          such a country, we must ensure adequate protection of your personal data. One means of
          doing so is to conclude data transfer agreements with the recipients of your personal
          data that ensure the required level of data protection. Please contact us if you would
          like a copy of our data transfer agreements relating to your personal data.
        </p>

        {/* 05 — Websites, apps, newsletters */}
        <h3 style={h3Style}>
          05 — How do we process personal data in connection with websites, apps, and email
          newsletters?
        </h3>
        <p style={bodyParagraph}>
          When you visit or use our website and app, we process technical data, such as information
          about the time of access to our website, the duration of the visit, the pages accessed,
          and information about the device used. This enables us to provide the website, for IT
          security reasons, and to improve user-friendliness. We also use &ldquo;cookies&rdquo;,
          which are files stored on your device when you visit our website, and similar
          technologies. Some cookies are necessary for the functionality of the website and are
          automatically deleted after the visit. We use other cookies to store settings (such as
          language preferences) for a later visit, for anonymous statistics about the use of our
          website, and to personalise the content on our websites. We may also use cookies on
          partner websites to display interest-based advertising and to evaluate your response to
          this advertising; however, the respective partner does not receive any personal data
          through this.
        </p>
        <p style={bodyParagraph}>
          We also use cookies from third-party providers so that they can collect the information
          required for their services. We do not receive any personal data from them either;
          however, the third-party providers collect information about your use of our website in
          order to provide their services. This primarily involves statistical analyses of the use
          of our website. Third-party providers may combine the information collected about you
          with data from other websites you have visited, and may use this information for their
          own purposes (e.g. to control advertising on partner sites of these providers). If you
          have registered with the relevant provider, the provider can identify you. Such
          processing of your personal data is carried out under the sole responsibility of the
          provider in accordance with its own privacy policy. An example of a service for
          statistical analysis is Google Analytics, a service provided by Google in the USA. Google
          uses cookies to collect information about your behaviour on our website and the device
          used (tablet, PC, smartphone, etc.), such as information about your browser, the website
          from which you accessed our website, the name of your provider, your IP address, the
          date and time of access to the website, pages visited and time spent, and, where
          applicable, visits to other websites and apps. Based on this information, we receive
          evaluations from Google. Google stores this information in the USA; however, your IP
          address is truncated beforehand in the EU or EEA. You can prevent the use of Google
          Analytics by installing a &ldquo;browser add-on&rdquo; available at{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--foreground)", textUnderlineOffset: "3px" }}
          >
            https://tools.google.com/dlpage/gaoptout
          </a>
          .
        </p>
        <p style={bodyParagraph}>
          When we send newsletters by email, we can determine whether and when you have opened the
          email. This allows us to assess your use of the email and better tailor our offerings to
          your interests. You can prevent this data processing in your email program.
        </p>
        <p style={bodyParagraph}>
          You can prevent the use of the aforementioned technologies: In your browser, you can
          prevent cookies from being accepted by adjusting the settings and delete stored cookies,
          and you can uninstall apps or configure them so that cookies are not used or are
          rejected. You can also configure your email program so that no information about the use
          of the email is transmitted.
        </p>
        <p style={bodyParagraph}>
          If you do not accept cookies that have been installed for the smooth use of our web
          application, errors may occur when using the web application.
        </p>

        {/* 06 — Retention */}
        <h3 style={h3Style}>06 — How long do we store your personal data?</h3>
        <p style={bodyParagraph}>
          We store your personal data in a personally identifiable form for as long as is necessary
          for the specific purpose for which we collected it. For contracts, this is generally at
          least for the duration of the contractual relationship.
        </p>
        <p style={bodyParagraph}>
          We also store personal data if we have a legitimate interest in doing so, for example for
          documentation and evidence purposes and for the preservation and defence of legal claims.
          We also store your personal data as long as they are subject to a statutory retention
          obligation.
        </p>

        {/* 07 — Security */}
        <h3 style={h3Style}>07 — How do we protect your personal data?</h3>
        <p style={bodyParagraph}>
          We take appropriate technical security measures (such as encryption, pseudonymisation,
          logging, access restrictions, data backup, etc.) and organisational measures (such as
          instructions to our employees, confidentiality agreements, reviews, etc.) to maintain the
          security of your personal data, to protect it against unauthorised or unlawful
          processing, and to counter the risk of loss, unintended alteration, unwanted disclosure,
          or unauthorised access.
        </p>

        {/* 08 — Rights */}
        <h3 style={h3Style}>
          08 — What rights do you have in connection with the processing of your personal data?
        </h3>
        <p style={bodyParagraph}>
          You may object to data processing at any time, particularly data processing in connection
          with direct advertising (e.g. against promotional emails). Under the law applicable to
          you, you also have the right to information, rectification, deletion, restriction of data
          processing, and objection to our data processing, as well as the right to receive the
          personal data you have provided to us free of charge in a readable format. You also have
          the right to withdraw consent without affecting the lawfulness of data processing carried
          out prior to the withdrawal. You may also file a complaint with the competent data
          protection authority.
        </p>

        {/* 09 — Legal bases */}
        <h3 style={h3Style}>09 — What else should be noted?</h3>
        <p style={bodyParagraph}>
          In processing your personal data, we rely in particular on the following legal bases:
        </p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            The performance of a contract with the data subject or for pre-contractual measures at
            their request
          </li>
          <li style={listItemStyle}>
            Legitimate interests; this includes, for example, the interest in customer care and
            communication with customers outside of a contract; in marketing activities; in getting
            to know our customers and other persons better; in improving services and developing
            new ones; in combating fraud and preventing and investigating offences; in protecting
            customers, employees, and other persons and data; in ensuring IT security, particularly
            in connection with the use of websites, apps, and other IT infrastructure; in ensuring
            and organising business operations, including the operation and further development of
            websites and other systems; in corporate management and development; in the sale or
            purchase of companies, parts of companies, and other assets; and in the enforcement or
            defence of legal claims in compliance with Swiss law and internal rules
          </li>
          <li style={listItemStyle}>Consent, if we specifically request consent</li>
          <li style={listItemStyle}>A requirement to comply with legal provisions</li>
        </ul>
        <p style={bodyParagraph}>
          There is generally no obligation to disclose personal data to us unless you are in a
          contractual relationship with us that establishes such an obligation. However, we will
          need to collect and process the personal data that is necessary or legally required for
          the establishment and execution of a contractual relationship and for the fulfilment of
          the associated obligations. Otherwise, we cannot enter into or continue the relevant
          contract. The processing of log data and certain other data when using websites is also
          effectively mandatory. When communicating with us, we must also process at least the
          personal data that you transmit to us or that we transmit to you.
        </p>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 3 — Legal Notice
         ════════════════════════════════════════════ */}
      <section style={{ paddingBottom: 80, maxWidth: 720 }}>
        <h2 style={{ marginBottom: 16 }}>Legal Notice</h2>

        <h3 style={h3Style}>01 — Contact Address</h3>
        <p style={{ ...bodyParagraph, whiteSpace: "pre-line" }}>
          {`The Luka Dosen Labs
Bahnhofstrasse 11
7302 Landquart
Switzerland`}
        </p>
        <p style={bodyParagraph}>
          Email:{" "}
          <a
            href="mailto:hello@lukadosen.ch"
            style={{ color: "var(--foreground)", textUnderlineOffset: "3px" }}
          >
            hello@lukadosen.ch
          </a>
          <br />
          Web:{" "}
          <a
            href="https://www.lukadosen.ch"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--foreground)", textUnderlineOffset: "3px" }}
          >
            www.lukadosen.ch
          </a>
        </p>

        <h3 style={h3Style}>02 — Authorised Representatives</h3>
        <p style={bodyParagraph}>Luka Došen</p>

        <h3 style={h3Style}>03 — Commercial Register Entry</h3>
        <p style={bodyParagraph}>
          Registered company name: The Luka Dosen Labs
          <br />
          UID: CHE-461.710.564
          <br />
          Commercial Register Office: Chur
        </p>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 4 — Footer
         ════════════════════════════════════════════ */}
      <footer
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          paddingTop: 48,
          paddingBottom: 24,
        }}
      >
        <div style={{ height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span
            style={{
              fontSize: 24,
              fontWeight: 300,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--foreground)",
            }}
          >
            LUKA
          </span>
        </div>

        <nav style={{ display: "flex", gap: 24, marginTop: 20 }}>
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Letters", href: "/letters" },
            { label: "Legal", href: "/legal" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: 14,
                fontWeight: 300,
                color: "var(--muted)",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--foreground)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--muted)";
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p
          style={{
            marginTop: 20,
            fontSize: 13,
            color: "var(--muted)",
            letterSpacing: "0.01em",
          }}
        >
          &copy; 2026 The Luka Dosen Labs. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
