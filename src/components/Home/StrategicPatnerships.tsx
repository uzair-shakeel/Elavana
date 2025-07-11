import Image from "next/image"
import RippleButton from "../ui/Button"

const StrategicPatnerships = () => {
    return (
        <>
            <div className="bg-[#F6FCFD] py-10 px-5 md:px-8">
                <h1 className="text-[#2E2E2E] text-[24px] sm:text-[40px] sm:leading-[76px] font-semibold text-center">Strategic Patnerships</h1>
                <div className="mt-3 flex items-center flex-wrap justify-center sm:justify-between gap-10 max-w-[1288px] mx-auto w-full px-4 pt-8 sm:py-8">
                    <Image src='/assets/pesapal.png' alt="pesapal" width={213} height={57} />
                    <Image src='/assets/zoho.png' alt="zoho" width={190} height={84} />
                    <Image src='/assets/salesforce.png' alt="salesforce" width={154} height={108} />
                    <Image src='/assets/afriac-talking.png' alt="afriac-talking" width={213} height={72} />
                    <Image src='/assets/m-pesa.png' alt="m-pesa" width={213} height={120} />
                </div>
            </div>

            <div className="md:px-8 px-5">
                <div className="mt-14 sm:mt-[65px] mb-14 sm:mb-[88px] bg-[#3A96AF] max-w-[1280px] mx-auto w-full rounded-[12px] sm:rounded-[24px] py-8 lg:py-9 relative px-8 lg:px-[50px] flex items-center overflow-hidden">
                    <Image
                        src='/assets/bg-circle.svg'
                        alt="bg"
                        width={1280}
                        height={340}
                        className="absolute left-1/2 bottom-0 -translate-x-1/2 z-0 pointer-events-none bg-cover"
                        priority
                    />

                    <div className="w-full flex items-center justify-between lg:flex-row flex-col gap-6">
                        <div className="max-w-[630px] lg:text-left text-center">
                            <h1 className="text-[18px] sm:text-[32px] lg:text-[42px] leading-[25px] sm:leading-[44px] lg:leading-[54.6px] font-bold text-white">Elevate your journey. Whether you're guiding others or growing yourself — start now.</h1>
                            <div className="mt-8 flex items-center justify-center lg:justify-start flex-wrap gap-3">
                                <RippleButton className="text-white text-[14px] sm:text-[20px] sm:leading-[24px] font-semibold border border-[#FFFFFF] rounded-xl px-6 h-11 sm:h-[56px] tracking-[0.5px]">Discover Coaches</RippleButton>
                                <RippleButton className="text-[#3A96AF] bg-[#F7F8F9] text-[14px] sm:text-[20px] sm:leading-[24px] font-semibold border border-[#FFFFFF] rounded-xl px-6 h-11 sm:h-[56px] tracking-[0.5px]">I Am a Coach</RippleButton>
                            </div>
                        </div>
                        <Image src='/assets/image.png' alt="image" width={343} height={431} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default StrategicPatnerships