import ServicePage, { serviceMetadata } from "../service-page";
import { services } from "../service-data";

const service = services["web-applications"];
export const metadata = serviceMetadata(service);

export default function WebApplicationsPage() {
  return <ServicePage service={service} />;
}
