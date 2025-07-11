import React, { Suspense } from 'react'
import Payment from '@/components/CustomerFlow/Payment/Payment'

const Page = () => {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3A96AF] mx-auto mb-4"></div>
                    <p className="text-[#64748B]">Loading payment page...</p>
                </div>
            </div>
        }>
            <Payment />
        </Suspense>
    )
}

export default Page