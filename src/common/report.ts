import { writeObjectToFile } from "../actions/file";

export const writeReport = (
  reportType: string = "misc",
  filePath: string = Date.now().toString(),
  object: object = {}
) => writeObjectToFile(`./reports/${reportType}/${filePath}`, object);

export const createReportWriter = (reportType: string, filePath: string) => (
  object: object
) => writeReport(reportType, filePath, object);
