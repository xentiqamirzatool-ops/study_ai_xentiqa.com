import type { Plan } from '@/types';
export const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    priceLabel: "$0",
    features: [
      "All written lessons",
      "All courses",
      "AI Playground",
      "Code Playground"
    ],
    cta: "Start learning"
  },
  {
    id: "pro-monthly",
    name: "Pro Monthly",
    priceLabel: "$12/mo",
    highlight: true,
    features: [
      "Everything in Free",
      "Pro videos",
      "Guided projects",
      "Certificates",
      "Priority support"
    ],
    cta: "Go Pro"
  },
  {
    id: "pro-yearly",
    name: "Pro Yearly",
    priceLabel: "$96/yr",
    features: [
      "Everything in Pro",
      "Save 33%",
      "Early access",
      "1:1 office hours"
    ],
    cta: "Go Pro Yearly"
  }
];
