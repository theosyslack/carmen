import lighthouse from "lighthouse";
import { createReportWriter, createFolderPathFromUrl } from "../actions/file";
import { URL } from "url";

export default async function runLighthouseAudit(page, browser) {
  const now = Date.now();
  const url = await page.url();

  const folderPath = `${createFolderPathFromUrl(url)}/${now}/`;

  const writeAuditJSON = createReportWriter(
    "lighthouse",
    `${folderPath}lighthouse-results.json`
  );
  const writeAuditHTML = createReportWriter(
    "lighthouse",
    `${folderPath}index.html`
  );
  const { lhr, artifacts, report } = await lighthouse(page.url(), {
    port: new URL(browser.wsEndpoint()).port,
    output: "html"
  });

  await writeAuditJSON(lhr);
  await writeAuditHTML(report);
}
