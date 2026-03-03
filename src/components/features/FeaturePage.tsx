import { features, type Feature } from "../../data/features";
import FeatureHero from "./FeatureHero";
import FeatureDetails from "./FeatureDetails";

import FAQ from "./FAQ";
import {
  CustomerDatabaseMockup,
  DispatchBoardMockup,
  EquipmentTrackingMockup,
  EstimateBuilderMockup,
  LeadEngineMockup,
  MembershipsMockup,
  MobileTechMockup,
  PaymentsMockup,
  PipelineBoardMockup,
  ReliabilityRouterMockup,
  RevenueRecoveryMockup,
  TeamManagementMockup,
  UnifiedInboxMockup,
} from "./mockups/HomeServiceMockups";

const mockupMap: Record<Feature["mockup"], React.FC> = {
  lead: LeadEngineMockup,
  pipeline: PipelineBoardMockup,
  customer: CustomerDatabaseMockup,
  equipment: EquipmentTrackingMockup,
  estimate: EstimateBuilderMockup,
  payments: PaymentsMockup,
  dispatch: DispatchBoardMockup,
  mobile: MobileTechMockup,
  memberships: MembershipsMockup,
  recovery: RevenueRecoveryMockup,
  inbox: UnifiedInboxMockup,
  team: TeamManagementMockup,
  reliability: ReliabilityRouterMockup,
};

export default function FeaturePage({ feature }: { feature: Feature }) {
  const Mockup = mockupMap[feature.mockup];

  return (
    <>
      <FeatureHero
        badge={feature.badge}
        headline={feature.headline}
        description={feature.description}
        ctaLabel={feature.ctaLabel}
        ctaHref={feature.ctaHref}
        mockup={<Mockup />}
      />
      <FeatureDetails details={feature.details} />
      <FAQ faqs={feature.faqs} />
    </>
  );
}
