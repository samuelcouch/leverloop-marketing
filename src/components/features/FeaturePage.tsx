import { features, type Feature } from "../../data/features";
import FeatureHero from "./FeatureHero";
import FeatureDetails from "./FeatureDetails";
import FreeResources from "./FreeResources";
import FAQ from "./FAQ";
import SearchMockup from "./mockups/SearchMockup";
import PipelineMockup from "./mockups/PipelineMockup";
import AssistantsMockup from "./mockups/AssistantsMockup";

const mockupMap: Record<Feature["mockup"], React.FC> = {
  search: SearchMockup,
  pipeline: PipelineMockup,
  assistants: AssistantsMockup,
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
      <FreeResources resources={feature.resources} />
    </>
  );
}
