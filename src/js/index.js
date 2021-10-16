import {
  fraudPreventionHeadersEnum,
  getFraudPreventionHeaders,
  getScreenDetails,
  windowDetails,
  getGovClientTimezoneHeader
} from "./hmrc/mtdFraudPrevention";

exports.fraudPreventionHeadersEnum = fraudPreventionHeadersEnum;
exports.getFraudPreventionHeaders = getFraudPreventionHeaders;
exports.getGovClientTimezoneHeader = getGovClientTimezoneHeader;
exports.getScreenDetails = getScreenDetails;
exports.windowDetails = windowDetails;