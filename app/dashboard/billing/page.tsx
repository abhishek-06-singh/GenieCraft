"use client";
import { Button } from "@/components/ui/button";
import React, { useContext, useState } from "react";
import axios from "axios";
import { Loader2Icon } from "lucide-react";
import { db } from "@/utils/db";
import { UserSubscription } from "@/utils/schema";
import logoPayment from "../../logopayment.ico";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";

declare global {
  interface Window {
    Razorpay: any;
  }
}
function Billing() {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const { userSubscription, setUserSubscription } = useContext(
    UserSubscriptionContext
  );

  const CreateSubscription = () => {
    setLoading(true);
    axios.post("/api/create-subscription", {}).then(
      (resp) => {
        console.log(resp.data);
        OnPayment(resp.data.id);
      },
      (error) => {
        setLoading(false);
      }
    );
  };

  const OnPayment = (subId: string) => {
    const options = {
      key: "rzp_test_flMYel5EjRHbXj",
      subscription_id: subId,
      name: "GenieCraft",

      description: "Monthly Subscription",
      handler: async (resp: any) => {
        console.log(resp);
        if (resp) {
          SaveSubscription(resp?.razorpay_payment_id);
        }
        setLoading(false);
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const SaveSubscription = async (paymentId) => {
    const result = await db.insert(UserSubscription).values({
      email: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
      active: true,
      paymentId: paymentId,
      joinDate: moment().format("DD/MM/yyyy"),
    });
    console.log(result);
    if (result) {
      window.location.reload();
    }
  };

  const tiers = [
    {
      name: "Team",
      id: "tier-team",
      href: "#",
      priceMonthly: "Rs 299",
      description: "A plan that scales with your rapidly growing business.",
      features: [
        "10,0000 Words/Month",
        "50+ Template Access",
        "Unlimted Download & Copy",
        "1 Year of History",
      ],
      featured: true,
    },
    {
      name: "Free",
      id: "tier-personal",
      href: "#",
      priceMonthly: "Rs 0",
      description:
        "The perfect plan if you're just getting started with our product.",
      features: [
        "10,000 Words/Month",
        "50+ Content Templates",
        "Unlimted Download & Copy",
        "1 Month of History",
      ],
      featured: false,
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="relative isolate bg-white px-6 py-10 sm:py-32 lg:px-8">
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      <div
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        aria-hidden="true"
      ></div>
      <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
        <h2 className="text-base font-semibold leading-7 text-pink-600">
          Pricing
        </h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          The right price for you, whoever you are
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
        Upgrade With Monthly Plan
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured
                ? "relative bg-white shadow-2xl h-[33rem]"
                : "bg-white/60 sm:mx-8 lg:mx-0 rounded-2xl",
              tier.featured
                ? ""
                : tierIdx === 0
                ? "rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl"
                : "sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none",
              "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
            )}
          >
            <h3
              id={tier.id}
              className="text-base font-semibold leading-7 text-pink-600"
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-gray-900">
                {tier.priceMonthly}
              </span>
              <span className="text-base text-gray-500">/month</span>
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              {tier.description}
            </p>
            <ul
              role="list"
              className="mt-8 space-y-3 text-sm leading-6 text-gray-600 sm:mt-10"
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  {feature}
                </li>
              ))}
            </ul>

            {tier.featured && (
              <Button
                disabled={loading}
                onClick={() => CreateSubscription()}
                className={classNames(
                  "bg-pink-600 text-white shadow hover:bg-pink-500",
                  "mt-8 block rounded-md py-2 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-pink-600 sm:mt-10"
                )}
                variant="outline"
              >
                {loading && <Loader2Icon className="animate-spin" />}
                {userSubscription ? "Active Plan" : "Get Started"}
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Billing;
