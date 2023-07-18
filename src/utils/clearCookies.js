// Clear all cookies
import eraseCookie from "./eraseCookie";

export default function clearStorage() {
  eraseCookie("activeStep");
  eraseCookie("paymentAmount");
  eraseCookie("payerEmail");
  eraseCookie("payerName");
}
