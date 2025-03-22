import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import type { PricingPlan as PricingPlanType } from "@/types/website";

export function PricingPlan({ plan }: { plan: PricingPlanType }) {
  return (
    <div className="relative rounded-xl bg-black/50 border border-white/10 p-8 shadow-lg hover:border-primary/20 transition-colors backdrop-blur-md">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-white">{plan.price}</span>
          {plan.price !== "Custom" && (
            <span className="text-white/70">/mo</span>
          )}
        </div>
        <p className="text-sm text-white/70">{plan.description}</p>
        <ul className="space-y-3">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-white"
            >
              <Check className="w-4 h-4 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
        <Button className="w-full bg-primary hover:bg-primary/90">
          {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
        </Button>
      </div>
    </div>
  );
}
