import { FC } from "react";
import { CardPlanSubscription } from "../../components/subscription";

export const SubscriptionPlans: FC = () => {
  return (
    <div className="w-full h-full bg-white rounded-lg flex overflow-auto">
      {/* <div className="w-[300px] min-w-[300px] h-full bg-[aqua]"></div> */}
      <CardPlanSubscription />
      <CardPlanSubscription />
      <CardPlanSubscription />
    </div>
  );
};
