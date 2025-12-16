import { ArrowLeft, Copy, Info } from "lucide-react";

export default function SendCrypto() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-sm">
                <div className="relative mb-6">
                    <ArrowLeft className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-700 cursor-pointer" />
                    <h1 className="text-center text-base font-semibold text-gray-900">
                        Send ETH to the address below
                    </h1>
                </div>
                <div className="flex justify-center mb-6">

                    <div className="inline-flex items-center justify-center bg-[#CCF6E5] rounded-full px-3 py-1.5 mb-6 gap-2">
                        <span className="text-xs font-medium text-[#013941] whitespace-nowrap">
                            4LiV4YjbxsL6739MKghUd
                        </span>
                        <Copy className="w-3.5 h-3.5 text-[#013941] cursor-pointer" />
                    </div>
                </div>
                <div className="bg-gray-50 rounded-2xl p-4 space-y-4 mb-4">
                    <div className="flex justify-between text-sm">
                        <span className="text-[#4F4F4F]">Amount to send</span>
                        <span className="font-semibold text-[#013941] flex items-center gap-1">
                            100 ETH <Copy className="w-4 h-4 text-[#013941] cursor-pointer" />
                        </span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-[#4F4F4F]">Network</span>
                        <span className="font-semibold text-[#013941]">ETH</span>
                    </div>

                    <div className="flex justify-between text-sm">
                        <span className="text-[#4F4F4F]">Wallet</span>
                        <span className="font-semibold text-[#013941]">Other</span>
                    </div>
                </div>
                <div className="flex items-start gap-2 text-xs mb-6">
                    <Info className="w-4 h-4 mt-0.5 text-[#013941]" />
                    <p className="text-[#4F4F4F]">
                        Only send {"{USDT}"} to this address. Ensure the sender is on the
                        {" {CELO} "}network otherwise you might lose your deposit.
                    </p>
                </div>
                <button className="w-full bg-[#013941] hover:bg-[#4c7d85] text-white py-3 rounded-full text-sm font-medium">
                    I have sent it
                </button>
            </div>
        </div>
    );
}
