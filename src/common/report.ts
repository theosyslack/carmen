import { writeObjectToFile } from "../actions/file";

export const writeReport = (
  reportType: string = "misc",
  filePath: string = Date.now().toString(),
  object: object = {}
) => writeObjectToFile(object, `./reports/${reportType}/${filePath}`);

export const createReportWriter = (
  reportType: string,
  filePath: string
) => object => writeReport(reportType, filePath, object);
