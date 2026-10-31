export const plans = [
  {
    id: 1,
    name: "Basic",
    price: 15,
    period: "mo",
    description: "Perfect for individuals getting started.",
    buttonText: "Get started",
    popular: false,
    features: [
      "Access to basic features",
      "1 project",
      "5GB storage",
      "Email support",
      "Basic analytics"
    ]
  },

  {
    id: 2,
    name: "Pro",
    price: 29,
    period: "mo",
    description: "Ideal for professionals and small teams.",
    buttonText: "Get started",
    popular: true,
    features: [
      "Everything in Basic",
      "10 projects",
      "50GB storage",
      "Priority email support",
      "Advanced analytics"
    ]
  },

  {
    id: 3,
    name: "Enterprise",
    price: 99,
    period: "mo",
    description: "For large teams and businesses.",
    buttonText: "Get started",
    popular: false,
    features: [
      "Everything in Pro",
      "Unlimited projects",
      "1TB storage",
      "24/7 priority support",
      "Custom integrations"
    ]
  }
];