"use client";
import React from "react";
import Image from "next/image";

const features = [
  {
    icon: "/assets/icons/core-features1.svg",
    title: "Client Management Dashboard",
    position: "top-left",
  },
  {
    icon: "/assets/icons/core-features2.svg",
    title: "Automated Scheduling & Reminders",
    position: "top-right",
  },
  {
    icon: "/assets/icons/core-features3.svg",
    title: "Built In Community Space",
    position: "middle-left",
  },
  {
    icon: "/assets/icons/core-features4.svg",
    title: "On Demand Invoicing",
    position: "middle-right",
  },
  {
    icon: "/assets/icons/core-features5.svg",
    title: "Analytics & Performing Tracking",
    position: "bottom-left",
  },
  {
    icon: "/assets/icons/core-features6.svg",
    title: "Custom Coaching Packages And Digital Products",
    position: "bottom-right",
  },
];

const CoreFeatures: React.FC = () => {
  return (
    <section className="w-full bg-[#F8FAFC] py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E293B] mb-4">
            Core Features
          </h2>
          <p className="text-lg text-[#64748B] max-w-3xl mx-auto">
            Become the best version of yourself by accessing to the perspectives
            and life experiences of others who've been there, done that.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto pb-32 md:pb-40 pt-32 md:pt-40">
          {/* Dashboard mockup image in center */}
          <div className="relative z-10 mx-auto mb-8 md:mb-0 max-w-3xl rounded-[24px] shadow-lg overflow-hidden border-2 border-black">
            <Image
              src="/assets/hero/dashboard.png"
              alt="Dashboard Mockup"
              width={800}
              height={450}
              className="w-full h-auto"
            />
          </div>

          {/* Feature cards positioned around the dashboard */}
          <div className="relative z-20 max-w-5xl mx-auto">
            {/* Top Left - Client Management Dashboard */}
            <div className="absolute top-[-100px] left-[-20px] md:top-[-100px] md:left-[-120px] max-w-[280px]">
              <div className="flex items-center bg-white rounded-lg p-3 md:p-4 shadow-lg border border-gray-100">
                <div className="flex-shrink-0 mr-3 md:mr-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#FEF2F2] rounded-lg">
                    <Image
                      src="/assets/icons/core-features1.svg"
                      alt="Client Management"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-sm md:text-base font-semibold text-[#1E293B]">
                    Client Management Dashboard
                  </h3>
                </div>
              </div>
            </div>

            {/* Top Right - Automated Scheduling */}
            <div className="absolute top-[-100px] right-[-20px] md:top-[-100px] md:right-[-120px] max-w-[280px]">
              <div className="flex items-center bg-white rounded-lg p-3 md:p-4 shadow-lg border border-gray-100">
                <div className="flex-shrink-0 mr-3 md:mr-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#FEF2F2] rounded-lg">
                    <Image
                      src="/assets/icons/core-features2.svg"
                      alt="Automated Scheduling"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-sm md:text-base font-semibold text-[#1E293B]">
                    Automated Scheduling & Reminders
                  </h3>
                </div>
              </div>
            </div>

            {/* Middle Left - Community Space */}
            <div className="absolute top-1/2 left-[-20px] md:left-[-120px] max-w-[280px] transform -translate-y-1/2">
              <div className="flex items-center bg-white rounded-lg p-3 md:p-4 shadow-lg border border-gray-100">
                <div className="flex-shrink-0 mr-3 md:mr-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#FEF2F2] rounded-lg">
                    <Image
                      src="/assets/icons/core-features3.svg"
                      alt="Community Space"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-sm md:text-base font-semibold text-[#1E293B]">
                    Built In Community Space
                  </h3>
                </div>
              </div>
            </div>

            {/* Middle Right - On Demand Invoicing */}
            <div className="absolute top-1/2 right-[-20px] md:right-[-120px] max-w-[280px] transform -translate-y-1/2">
              <div className="flex items-center bg-white rounded-lg p-3 md:p-4 shadow-lg border border-gray-100">
                <div className="flex-shrink-0 mr-3 md:mr-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#FEF2F2] rounded-lg">
                    <Image
                      src="/assets/icons/core-features4.svg"
                      alt="On Demand Invoicing"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-sm md:text-base font-semibold text-[#1E293B]">
                    On Demand Invoicing
                  </h3>
                </div>
              </div>
            </div>

            {/* Bottom Left - Analytics */}
            <div className="absolute bottom-[-100px] left-[-20px] md:bottom-[-100px] md:left-[-120px] max-w-[280px]">
              <div className="flex items-center bg-white rounded-lg p-3 md:p-4 shadow-lg border border-gray-100">
                <div className="flex-shrink-0 mr-3 md:mr-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#FEF2F2] rounded-lg">
                    <Image
                      src="/assets/icons/core-features5.svg"
                      alt="Analytics"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-sm md:text-base font-semibold text-[#1E293B]">
                    Analytics & Performing Tracking
                  </h3>
                </div>
              </div>
            </div>

            {/* Bottom Right - Custom Coaching */}
            <div className="absolute bottom-[-100px] right-[-20px] md:bottom-[-100px] md:right-[-120px] max-w-[280px]">
              <div className="flex items-center bg-white rounded-lg p-3 md:p-4 shadow-lg border border-gray-100">
                <div className="flex-shrink-0 mr-3 md:mr-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#FEF2F2] rounded-lg">
                    <Image
                      src="/assets/icons/core-features6.svg"
                      alt="Custom Coaching"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-sm md:text-base font-semibold text-[#1E293B]">
                    Custom Coaching Packages And Digital Products
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
