import ServicePage, { serviceMetadata } from "../service-page";
import { services } from "../service-data";

const service = services["corporate-websites"];
export const metadata = serviceMetadata(service);

export default function CorporateWebsitesPage() {
  return <ServicePage service={service} />;
}
