import Authenticated from "@/Layouts/Authenticated";
import Subscription from "@/Components/subscriptionCard";

export default function subscription() {
    return (
        <Authenticated>
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
                        <Subscription
                            name="basic"
                            price={250000}
                            durationInmonth={3}
                            features={[1, 2, 3]}
                        />
                        <Subscription
                            isPremium
                            name="premium"
                            price={400000}
                            durationInmonth={3}
                            features={[1, 2, 3]}
                        />
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
