import lighthouse from "lighthouse";
import { createReportWriter } from "../actions/file";

export default async function runLighthouseAudit(page, browser) {
  const writeReport = createReportWriter("lighthouse", "audit.json");
  const { lhr } = await lighthouse(page.url(), {
    port: new URL(browser.wsEndpoint()).port,
    output: "json",
    logLevel: "info"
  });

  console.log(Object.keys(lhr.audits));
  await writeReport(lhr);
}
