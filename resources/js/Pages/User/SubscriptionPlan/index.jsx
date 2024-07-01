import Authenticated from "@/Layouts/Authenticated";
import Subscription from "@/Components/subscriptionCard";

export default function subscription({ auth, subscriptionPlan }) {
    return (
        <Authenticated auth={auth}>
            <div className="mx-auto max-w-screen hidden lg:block">
                <div className="py-20 flex flex-col items-center">
                    <div className="text-black font-semibold text-[26px] mb-3">
                        Pricing for Everyone
                    </div>
                    <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                        Invest your little money to get a whole new experiences
                        from movies.
                    </p>

                    <div className="flex justify-center gap-10 mt-[70px]">
                        {subscriptionPlan.map((subscriptionPlan) => (
                            <Subscription
                                name={subscriptionPlan.name}
                                price={subscriptionPlan.price}
                                durationInmonth={
                                    subscriptionPlan.active_period_in_months
                                }
                                features={JSON.parse(subscriptionPlan.features)}
                                isPremium={subscriptionPlan.name === "prime"}
                                key={subscriptionPlan.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
