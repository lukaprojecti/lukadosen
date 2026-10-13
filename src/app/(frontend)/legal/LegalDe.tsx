/* German privacy policy and imprint, shown on /legal in site mode `landing`.
   Content mirrors the English version in page.tsx. */

/* ── Shared styles (same as page.tsx) ── */

const badgeStyle: React.CSSProperties = {
  display: "inline-block",
  fontSize: 13,
  fontWeight: 300,
  letterSpacing: "0.01em",
  padding: "4px 12px",
  borderRadius: "var(--radius)",
  backgroundColor: "var(--border)",
  color: "var(--foreground)",
};

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

const linkStyle: React.CSSProperties = {
  color: "var(--foreground)",
  textUnderlineOffset: "3px",
};

const ADDRESS = `The Luka Dosen Labs
Bahnhofstrasse 11
7302 Landquart
Schweiz`;

export default function LegalDe() {
  return (
    <main>
      {/* Header */}
      <section style={{ paddingTop: 80, paddingBottom: 40 }}>
        <span style={badgeStyle}>Rechtliches</span>
        <h1
          style={{
            marginTop: 20,
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          Datenschutzerklärung &amp; Impressum
        </h1>
      </section>

      {/* Datenschutzerklärung */}
      <section style={{ paddingBottom: 64, maxWidth: 720 }}>
        <h2 style={{ marginBottom: 16 }}>Datenschutzerklärung</h2>

        <h3 style={h3Style}>01 — Wer sind wir?</h3>
        <p style={bodyParagraph}>&copy; The Luka Dosen Labs | Landquart, 07.01.2025</p>
        <p style={bodyParagraph}>
          Für die Datenbearbeitungen nach dieser Datenschutzerklärung ist grundsätzlich folgendes
          Unternehmen verantwortlich (&laquo;wir&raquo; oder &laquo;uns&raquo;):
        </p>
        <p style={{ ...bodyParagraph, whiteSpace: "pre-line" }}>{ADDRESS}</p>

        <h3 style={h3Style}>02 — Welche Personendaten bearbeiten wir und zu welchen Zwecken?</h3>
        <p style={bodyParagraph}>
          Wir bearbeiten je nach Anlass und Zweck unterschiedliche Personendaten.
        </p>
        <p style={bodyParagraph}>
          Wir erheben Ihre Personendaten grundsätzlich direkt bei Ihnen, zum Beispiel wenn Sie uns
          Personendaten übermitteln, unsere Dienstleistungen nutzen oder mit uns kommunizieren. Das
          ist etwa der Fall, wenn Sie bei der Eröffnung eines Benutzerkontos Ihre E-Mail-Adresse,
          Vor- und Nachnamen, Adresse und Wohnort angeben.
        </p>
        <p style={bodyParagraph}>
          Personendaten können auch aus anderen Quellen stammen. Dies gilt insbesondere für folgende
          Daten und Quellen:
        </p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            Angaben aus öffentlichen Registern, etwa Betreibungsregistern, und von Behörden
          </li>
          <li style={listItemStyle}>
            Angaben von privaten Informationsdienstleistern, etwa Wirtschaftsauskunfteien
          </li>
          <li style={listItemStyle}>
            Anbieter von Online-Diensten, etwa Anbieter von Internet-Analysediensten, die auf
            unserer Website Angaben erheben und für Auswertungen nutzen (Näheres im Abschnitt
            &laquo;Wie bearbeiten wir Personendaten im Zusammenhang mit Websites, Apps und
            E-Mail-Newslettern?&raquo;)
          </li>
          <li style={listItemStyle}>
            Angaben von Finanzdienstleistern, wenn Sie Zahlungen an uns leisten
          </li>
          <li style={listItemStyle}>
            Angaben, die wir von einem Unternehmen erhalten, für das Sie tätig sind, etwa Name,
            Kontaktangaben, Titel und Funktion
          </li>
          <li style={listItemStyle}>
            Angaben über Sie, die uns andere Personen mitteilen, etwa im Rahmen von behördlichen
            oder gerichtlichen Verfahren oder in der Kommunikation mit uns
          </li>
        </ul>
        <p style={bodyParagraph}>
          Wir bearbeiten Ihre Personendaten in erster Linie, um unsere Dienstleistungen anzubieten,
          sowie für die folgenden Zwecke und für weitere Zwecke, die wir Ihnen gesondert mitteilen
          oder die erkennbar sind:
        </p>
        <ul style={listStyle}>
          <li style={listItemStyle}>Kommunikation mit Ihnen und mit Dritten</li>
          <li style={listItemStyle}>
            Bereitstellung, Verwaltung, Sicherheit und Personalisierung von Websites, Apps,
            Online-Angeboten und weiterer Infrastruktur
          </li>
          <li style={listItemStyle}>Abschluss und Abwicklung von Verträgen mit Ihnen</li>
          <li style={listItemStyle}>
            Abschluss und Abwicklung von Verträgen mit unseren Lieferanten, Kunden und
            Geschäftspartnern, mit denen Sie in Verbindung stehen, sowie Pflege der
            Kundenbeziehungen
          </li>
          <li style={listItemStyle}>
            Werbe- und Marketingzwecke, etwa die Durchführung von Anlässen, Wettbewerben und
            ähnlichen Aktivitäten, sowie der Versand gezielter Informationen und
            Marketingmitteilungen per Post und über elektronische Kanäle (sofern die empfangende
            Person der Direktwerbung nicht widersprochen hat)
          </li>
          <li style={listItemStyle}>
            Vorbereitung und Abwicklung von Unternehmenskäufen und -verkäufen sowie ähnlichen
            Transaktionen
          </li>
          <li style={listItemStyle}>Verwaltung und Unterhalt unserer IT und weiterer Ressourcen</li>
          <li style={listItemStyle}>
            Buchhaltung, Archivierung, Schulung und weitere administrative Zwecke
          </li>
          <li style={listItemStyle}>Überprüfung und Verbesserung unserer internen Abläufe</li>
          <li style={listItemStyle}>
            Gewährleistung der Sicherheit unserer Mitarbeitenden sowie unserer Gebäude und
            Räumlichkeiten
          </li>
          <li style={listItemStyle}>
            Prüfung und Einhaltung gesetzlicher Pflichten, einschliesslich Anordnungen von
            Gerichten oder Behörden
          </li>
          <li style={listItemStyle}>
            Compliance sowie Erkennung, Untersuchung und Verhinderung von Missbrauch
          </li>
          <li style={listItemStyle}>
            Durchsetzung unserer Ansprüche und jener verbundener Unternehmen sowie Abwehr von
            Ansprüchen gegen uns, unsere Mitarbeitenden, verbundene Unternehmen sowie unsere
            Vertrags- und Geschäftspartner vor Gerichten und Behörden im In- und Ausland
          </li>
        </ul>

        <h3 style={h3Style}>03 — Wem geben wir Ihre Personendaten bekannt?</h3>
        <p style={bodyParagraph}>
          Unsere Mitarbeitenden haben Zugriff auf Personendaten, soweit dies für die beschriebenen
          Zwecke und für die Tätigkeit der jeweiligen Mitarbeitenden erforderlich ist. Dazu gehören
          auch Mitarbeitende in Support und Marketing. Sie handeln nach unseren Weisungen und sind
          im Umgang mit Ihren Personendaten zu Vertraulichkeit und Verschwiegenheit verpflichtet.
        </p>
        <p style={bodyParagraph}>
          Wir können Ihre Personendaten auch Dritten bekanntgeben, wenn wir deren Dienstleistungen
          in Anspruch nehmen möchten (z. B. IT-Dienstleister). Es ist auch möglich, dass
          Personendaten anderen Unternehmen für deren eigene Zwecke bekanntgegeben werden. In
          solchen Fällen ist die empfangende Stelle datenschutzrechtlich selbst verantwortlich. Dies
          betrifft zum Beispiel folgende Fälle:
        </p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            Wenn wir Transaktionen wie Fusionen oder den Erwerb oder Verkauf einzelner
            Unternehmensteile oder Vermögenswerte prüfen oder durchführen, müssen wir in diesem
            Zusammenhang Personendaten an ein anderes Unternehmen übermitteln.
          </li>
          <li style={listItemStyle}>
            Wir können Ihre Personendaten Dritten (z. B. Gerichten und Behörden im In- und Ausland)
            bekanntgeben, wenn das Gesetz dies verlangt. Wir behalten uns zudem vor, Ihre
            Personendaten zu bearbeiten, um einer gerichtlichen Anordnung nachzukommen, rechtliche
            Ansprüche geltend zu machen oder abzuwehren, oder wenn wir es aus anderen rechtlichen
            Gründen für notwendig halten. Dabei können wir Personendaten auch weiteren
            Verfahrensbeteiligten bekanntgeben.
          </li>
          <li style={listItemStyle}>
            Wir können Forderungen gegen Sie an andere Unternehmen abtreten, etwa an
            Inkassounternehmen.
          </li>
        </ul>

        <h3 style={h3Style}>04 — Wann geben wir Ihre Personendaten ins Ausland bekannt?</h3>
        <p style={bodyParagraph}>
          Die Empfänger Ihrer Personendaten können sich auch im Ausland befinden, auch ausserhalb
          der Schweiz, der EU und des Europäischen Wirtschaftsraums (EWR). Die betreffenden Länder
          verfügen möglicherweise nicht über Gesetze, die Ihre Personendaten im gleichen Umfang
          schützen wie in der Schweiz, der EU oder dem EWR. Wenn wir Ihre Personendaten in ein
          solches Land übermitteln, stellen wir einen angemessenen Schutz Ihrer Personendaten
          sicher. Ein Mittel dazu ist der Abschluss von Datenübermittlungsverträgen mit den
          Empfängern Ihrer Personendaten, die den erforderlichen Datenschutz gewährleisten. Bitte
          kontaktieren Sie uns, wenn Sie eine Kopie unserer Datenübermittlungsverträge zu Ihren
          Personendaten wünschen.
        </p>

        <h3 style={h3Style}>
          05 — Wie bearbeiten wir Personendaten im Zusammenhang mit Websites, Apps und
          E-Mail-Newslettern?
        </h3>
        <p style={bodyParagraph}>
          Wenn Sie unsere Website und App besuchen oder nutzen, bearbeiten wir technische Daten,
          etwa Angaben zum Zeitpunkt des Zugriffs, zur Dauer des Besuchs, zu den aufgerufenen
          Seiten und zum verwendeten Gerät. Dies ermöglicht uns, die Website bereitzustellen, dient
          der IT-Sicherheit und hilft uns, die Benutzerfreundlichkeit zu verbessern. Wir verwenden
          zudem &laquo;Cookies&raquo;, also Dateien, die beim Besuch unserer Website auf Ihrem
          Gerät gespeichert werden, sowie ähnliche Technologien. Einige Cookies sind für die
          Funktion der Website notwendig und werden nach dem Besuch automatisch gelöscht. Andere
          Cookies verwenden wir, um Einstellungen (etwa Spracheinstellungen) für einen späteren
          Besuch zu speichern, für anonyme Statistiken über die Nutzung unserer Website und um die
          Inhalte unserer Websites zu personalisieren. Wir können Cookies auch auf
          Partner-Websites einsetzen, um interessenbezogene Werbung anzuzeigen und Ihre Reaktion
          auf diese Werbung auszuwerten; der jeweilige Partner erhält dabei jedoch keine
          Personendaten.
        </p>
        <p style={bodyParagraph}>
          Wir setzen auch Cookies von Drittanbietern ein, damit diese die für ihre Dienste
          erforderlichen Angaben erheben können. Auch von ihnen erhalten wir keine Personendaten;
          die Drittanbieter erheben jedoch Angaben über Ihre Nutzung unserer Website, um ihre
          Dienste zu erbringen. Dabei geht es in erster Linie um statistische Auswertungen der
          Nutzung unserer Website. Drittanbieter können die über Sie erhobenen Angaben mit Daten
          von anderen Websites verknüpfen, die Sie besucht haben, und diese für eigene Zwecke
          verwenden (z. B. zur Steuerung von Werbung auf Partnerseiten dieser Anbieter). Wenn Sie
          beim betreffenden Anbieter registriert sind, kann dieser Sie identifizieren. Eine solche
          Bearbeitung Ihrer Personendaten erfolgt in der alleinigen Verantwortung des Anbieters
          gemäss dessen eigener Datenschutzerklärung. Ein Beispiel für einen Dienst zur
          statistischen Auswertung ist Google Analytics, ein Dienst von Google in den USA. Google
          verwendet Cookies, um Angaben über Ihr Verhalten auf unserer Website und das verwendete
          Gerät (Tablet, PC, Smartphone usw.) zu erheben, etwa Angaben zu Ihrem Browser, zur
          Website, von der aus Sie auf unsere Website gelangt sind, zum Namen Ihres Providers, zu
          Ihrer IP-Adresse, zu Datum und Uhrzeit des Zugriffs, zu den besuchten Seiten und zur
          Verweildauer sowie gegebenenfalls zu Besuchen anderer Websites und Apps. Auf Grundlage
          dieser Angaben erhalten wir Auswertungen von Google. Google speichert diese Angaben in den
          USA; Ihre IP-Adresse wird jedoch vorher in der EU oder im EWR gekürzt. Sie können die
          Verwendung von Google Analytics verhindern, indem Sie ein &laquo;Browser-Add-on&raquo;
          installieren, das unter{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            https://tools.google.com/dlpage/gaoptout
          </a>{" "}
          verfügbar ist.
        </p>
        <p style={bodyParagraph}>
          Wenn wir Newsletter per E-Mail versenden, können wir feststellen, ob und wann Sie die
          E-Mail geöffnet haben. So können wir Ihre Nutzung der E-Mail auswerten und unsere Angebote
          besser auf Ihre Interessen abstimmen. Sie können diese Datenbearbeitung in Ihrem
          E-Mail-Programm unterbinden.
        </p>
        <p style={bodyParagraph}>
          Sie können den Einsatz der genannten Technologien verhindern: In Ihrem Browser können Sie
          die Annahme von Cookies über die Einstellungen unterbinden und gespeicherte Cookies
          löschen, und Sie können Apps deinstallieren oder so konfigurieren, dass Cookies nicht
          verwendet oder abgelehnt werden. Ihr E-Mail-Programm können Sie zudem so einstellen, dass
          keine Angaben über die Nutzung der E-Mail übermittelt werden.
        </p>
        <p style={bodyParagraph}>
          Wenn Sie Cookies nicht akzeptieren, die für die reibungslose Nutzung unserer
          Webanwendung gesetzt werden, kann es bei der Nutzung der Webanwendung zu Fehlern kommen.
        </p>

        <h3 style={h3Style}>06 — Wie lange bewahren wir Ihre Personendaten auf?</h3>
        <p style={bodyParagraph}>
          Wir bewahren Ihre Personendaten in personenbezogener Form so lange auf, wie es für den
          konkreten Zweck, für den wir sie erhoben haben, erforderlich ist. Bei Verträgen ist dies
          in der Regel mindestens für die Dauer des Vertragsverhältnisses der Fall.
        </p>
        <p style={bodyParagraph}>
          Wir bewahren Personendaten zudem auf, wenn wir ein berechtigtes Interesse daran haben,
          etwa zu Dokumentations- und Beweiszwecken sowie zur Wahrung und Abwehr rechtlicher
          Ansprüche. Ausserdem bewahren wir Ihre Personendaten auf, solange sie einer gesetzlichen
          Aufbewahrungspflicht unterliegen.
        </p>

        <h3 style={h3Style}>07 — Wie schützen wir Ihre Personendaten?</h3>
        <p style={bodyParagraph}>
          Wir treffen angemessene technische Sicherheitsmassnahmen (etwa Verschlüsselung,
          Pseudonymisierung, Protokollierung, Zugriffsbeschränkungen und Datensicherung) und
          organisatorische Massnahmen (etwa Weisungen an unsere Mitarbeitenden,
          Vertraulichkeitsvereinbarungen und Kontrollen), um die Sicherheit Ihrer Personendaten zu
          wahren, sie vor unberechtigter oder unrechtmässiger Bearbeitung zu schützen und dem Risiko
          von Verlust, unbeabsichtigter Veränderung, ungewollter Offenlegung oder unberechtigtem
          Zugriff entgegenzuwirken.
        </p>

        <h3 style={h3Style}>
          08 — Welche Rechte haben Sie im Zusammenhang mit der Bearbeitung Ihrer Personendaten?
        </h3>
        <p style={bodyParagraph}>
          Sie können Datenbearbeitungen jederzeit widersprechen, insbesondere Datenbearbeitungen im
          Zusammenhang mit Direktwerbung (z. B. gegen Werbe-E-Mails). Nach dem für Sie anwendbaren
          Recht haben Sie zudem das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
          Datenbearbeitung und Widerspruch gegen unsere Datenbearbeitungen sowie das Recht, die
          Personendaten, die Sie uns zur Verfügung gestellt haben, kostenlos in einem lesbaren
          Format zu erhalten. Sie haben ausserdem das Recht, eine Einwilligung zu widerrufen, ohne
          dass dadurch die Rechtmässigkeit der vor dem Widerruf erfolgten Datenbearbeitung berührt
          wird. Sie können zudem bei der zuständigen Datenschutzbehörde Beschwerde einreichen.
        </p>

        <h3 style={h3Style}>09 — Was ist ausserdem zu beachten?</h3>
        <p style={bodyParagraph}>
          Bei der Bearbeitung Ihrer Personendaten stützen wir uns insbesondere auf folgende
          Rechtsgrundlagen:
        </p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            Die Erfüllung eines Vertrags mit der betroffenen Person oder vorvertragliche Massnahmen
            auf deren Anfrage
          </li>
          <li style={listItemStyle}>
            Berechtigte Interessen; dazu gehören zum Beispiel das Interesse an der Kundenpflege und
            der Kommunikation mit Kunden auch ausserhalb eines Vertrags; an Marketingaktivitäten;
            daran, unsere Kunden und weitere Personen besser kennenzulernen; an der Verbesserung
            bestehender und der Entwicklung neuer Dienstleistungen; an der Bekämpfung von Betrug
            sowie der Verhinderung und Aufklärung von Delikten; am Schutz von Kunden,
            Mitarbeitenden und weiteren Personen sowie von Daten; an der Gewährleistung der
            IT-Sicherheit, insbesondere im Zusammenhang mit der Nutzung von Websites, Apps und
            weiterer IT-Infrastruktur; an der Sicherstellung und Organisation des Geschäftsbetriebs,
            einschliesslich des Betriebs und der Weiterentwicklung von Websites und weiteren
            Systemen; an der Unternehmensführung und -entwicklung; am Verkauf oder Kauf von
            Unternehmen, Unternehmensteilen und anderen Vermögenswerten; sowie an der Durchsetzung
            oder Abwehr rechtlicher Ansprüche unter Einhaltung des Schweizer Rechts und interner
            Regeln
          </li>
          <li style={listItemStyle}>Eine Einwilligung, sofern wir diese gesondert einholen</li>
          <li style={listItemStyle}>Die Pflicht zur Einhaltung gesetzlicher Vorschriften</li>
        </ul>
        <p style={bodyParagraph}>
          Grundsätzlich besteht keine Pflicht, uns Personendaten bekanntzugeben, es sei denn, Sie
          stehen mit uns in einem Vertragsverhältnis, das eine solche Pflicht begründet. Wir müssen
          jedoch die Personendaten erheben und bearbeiten, die für die Begründung und Abwicklung
          eines Vertragsverhältnisses und die Erfüllung der damit verbundenen Pflichten erforderlich
          oder gesetzlich vorgeschrieben sind. Andernfalls können wir den betreffenden Vertrag nicht
          abschliessen oder fortführen. Auch die Bearbeitung von Protokolldaten und bestimmten
          weiteren Daten bei der Nutzung von Websites ist faktisch zwingend. In der Kommunikation
          mit uns müssen wir zudem mindestens die Personendaten bearbeiten, die Sie uns oder wir
          Ihnen übermitteln.
        </p>
      </section>

      {/* Impressum */}
      <section style={{ paddingBottom: 80, maxWidth: 720 }}>
        <h2 style={{ marginBottom: 16 }}>Impressum</h2>

        <h3 style={h3Style}>01 — Kontaktadresse</h3>
        <p style={{ ...bodyParagraph, whiteSpace: "pre-line" }}>{ADDRESS}</p>
        <p style={bodyParagraph}>
          E-Mail:{" "}
          <a href="mailto:hello@lukadosen.ch" style={linkStyle}>
            hello@lukadosen.ch
          </a>
          <br />
          Web:{" "}
          <a href="https://www.lukadosen.ch" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            www.lukadosen.ch
          </a>
        </p>

        <h3 style={h3Style}>02 — Vertretungsberechtigte Personen</h3>
        <p style={bodyParagraph}>Luka Došen</p>

        <h3 style={h3Style}>03 — Handelsregistereintrag</h3>
        <p style={bodyParagraph}>
          Eingetragener Firmenname: The Luka Dosen Labs
          <br />
          UID: CHE-461.710.564
          <br />
          Handelsregisteramt: Chur
        </p>
      </section>
    </main>
  );
}
