import lighthouse from "lighthouse";
import { createReportWriter } from "../actions/file";
import { URL } from "url";

export default async function runLighthouseAudit(page, browser) {
  const now = Date.now();
  const writeAuditJSON = createReportWriter(
    "lighthouse",
    `${now}/lighthouse-results.json`
  );
  const writeAuditHTML = createReportWriter("lighthouse", `${now}/index.html`);
  const { lhr, artifacts, report } = await lighthouse(page.url(), {
    port: new URL(browser.wsEndpoint()).port,
    output: "html"
  });

  await writeAuditJSON(lhr);
  await writeAuditHTML(report);
}
