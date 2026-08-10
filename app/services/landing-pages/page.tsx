import ServicePage, { serviceMetadata } from "../service-page";
import { services } from "../service-data";

const service = services["landing-pages"];
export const metadata = serviceMetadata(service);

export default function LandingPagesPage() {
  return <ServicePage service={service} />;
}
