import { useState } from "react";

const AdminCreditDebit = () => {
    const [accountNumber,setAccountNumber]=useState();
    const [amount,setAmount]=useState();

    const handleAccountNumber=(e)=>{
     const newData=e.target.value;
        setAccountNumber(newData);
    }

    const handleAmount=(e)=>{
      const newData=e.target.value
        setAmount(newData)
    }

    return (
        <div className="w-full h-[80vh] ">
            <div className="w-full h-full flex items-center justify-center">
                <div className="w-1/3 h-max flex flex-col gap-4 items-center justify-center shadow-xl p-4">
                    <div className="w-full h-max flex flex-col gap-2">
                        <p className="text-sm">Recipient Account Number</p>
                        <input
                            type="number"
                            className="w-full h-10 rounded border border-gray-300 shadow pl-3"
                            placeholder="enter account number"
                            onChange={handleAccountNumber}
                        />
                    </div>
                    <div className="w-max h-max px-4 py-1 bg-slate-500 rounded-full text-xs font-semibold text-white">
                        <p>Account Name Will Appear Here</p>
                    </div>
                    <div className="w-full h-max flex flex-col gap-2">
                        <p className="text-sm">Type</p>
                        <select
                            name=""
                            id=""
                            className="w-full h-10 rounded border border-gray-300 shadow pl-3"
                        >
                            <option value="">Select</option>
                            <option value="">Credit</option>
                            <option value="">Debit</option>
                        </select>
                    </div>
                    <div className="w-full h-max flex flex-col gap-2">
                        <p className="text-sm">Amount</p>
                        <input
                            type="number"
                            className="w-full h-10 rounded border border-gray-300 shadow pl-3"
                            placeholder="enter amount"
                            onChange={handleAmount}
                        />
                    </div>
                    <div className="w-full h-max flex flex-col gap-2">
                        <p className="text-sm">Transaction Description</p>
                        <input
                            type="text"
                            className="w-full h-10 rounded border border-gray-300 shadow pl-3"
                            placeholder="enter description"
                        />
                    </div>
                    <div className="w-full h-max flex items-center justify-center">
                        <button className="w-max h-max px-8 py-2 rounded-full bg-green-700 text-white text-sm">
                            PROCEED
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminCreditDebit;
