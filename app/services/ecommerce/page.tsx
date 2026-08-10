import ServicePage, { serviceMetadata } from "../service-page";
import { services } from "../service-data";

const service = services.ecommerce;
export const metadata = serviceMetadata(service);

export default function EcommercePage() {
  return <ServicePage service={service} />;
}
