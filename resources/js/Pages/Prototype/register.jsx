import Input from "@/Components/TextInput";
import Label from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import { Link, Head } from "@inertiajs/react";

export default function register() {
    return (
        <>
            <Head title="Register" />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img
                        src="/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
                        alt=""
                    />
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="/images/moonton-white.svg" alt="" />
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <Label className="text-base block mb-2">
                                        Full Name
                                    </Label>

                                    <Input
                                        type="text"
                                        name="fullname"
                                        placeholder="Your Fullname"
                                    />
                                </div>
                                <div>
                                    <Label className="text-base block mb-2">
                                        Email Address
                                    </Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                        placeholder="Your Email Address"
                                    />
                                </div>
                                <div>
                                    <Label className="text-base block mb-2">
                                        Password
                                    </Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                        placeholder="Your Password"
                                    />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <PrimaryButton type="button">
                                    <Link href={route("prototype.dashboard")}>
                                        Sign Up
                                    </Link>
                                </PrimaryButton>
                                <SecondaryButton type="button">
                                    <Link href={route("prototype.login")}>
                                        Sign In to My Account
                                    </Link>
                                </SecondaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
