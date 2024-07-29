import {Modal} from "antd";
import {useState} from "react";
import {FaRegEye} from "react-icons/fa6";
// import {toast} from "react-toastify";

const UserProfile = () => {
    const [openPassword, setOpenPassword] = useState(false);
    const [openPIN, setOpenPIN] = useState(false);
    return (
        <>
            <div className="w-full h-max flex flex-col gap-5 p-5">
                <div className="w-full h-max flex items-center justify-center">
                    <p>User Profile</p>
                </div>
                <div className="w-full h-max flex items-center justify-center">
                    <div className="w-1/3 h-max flex flex-col gap-4 items-center justify-center shadow-xl p-4">
                        <div className="w-full h-max flex gap-4">
                            <div className="w-1/2 h-max">
                                <p className="text-sm">First Name</p>
                                <input
                                    type="text"
                                    className="w-full h-10 rounded border border-gray-300 shadow pl-3"
                                    value={"Akintunde"}
                                    disabled
                                />
                            </div>
                            <div className="w-1/2 h-max">
                                <p className="text-sm">Last Name</p>
                                <input
                                    type="text"
                                    className="w-full h-10 rounded border border-gray-300 shadow pl-3"
                                    value={"Abdulquadri"}
                                    disabled
                                />
                            </div>
                        </div>

                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-sm">Email</p>
                            <input
                                type="text"
                                className="w-full h-10 rounded border border-gray-300 shadow pl-3"
                                value={"akintundeabdulquadri@gmail.com"}
                                disabled
                            />
                        </div>
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-sm">Phone Number</p>
                            <input
                                type="text"
                                className="w-full h-10 rounded border border-gray-300 shadow pl-3"
                                value={"akintundeabdulquadri@gmail.com"}
                                disabled
                            />
                        </div>
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-sm">Date Of Birth</p>
                            <input
                                type="text"
                                className="w-full h-10 rounded border border-gray-300 shadow pl-3"
                                value={"10-04-1960"}
                                disabled
                            />
                        </div>
                        <div className="w-full h-max flex flex-col gap-2">
                            <p className="text-sm">Address</p>
                            <input
                                type="text"
                                className="w-full h-10 rounded border border-gray-300 shadow pl-3"
                                value={"Lagos"}
                                disabled
                            />
                        </div>
                        <div className="w-full h-max flex gap-4">
                            <div className="w-1/2 h-max">
                                <p className="text-sm">Gender</p>
                                <input
                                    type="text"
                                    className="w-full h-10 rounded border border-gray-300 shadow pl-3"
                                    value={"Gay"}
                                    disabled
                                />
                            </div>
                            <div className="w-1/2 h-max">
                                <p className="text-sm">Account Type</p>
                                <input
                                    type="text"
                                    className="w-full h-10 rounded border border-gray-300 shadow pl-3"
                                    value={"Savings"}
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="w-full h-max flex items-center justify-center gap-4">
                            <button
                                className="w-max h-max px-4 py-2 rounded-full bg-green-700 text-white text-sm"
                                onClick={() => setOpenPassword(true)}
                            >
                                Change Password
                            </button>
                            <button
                                className="w-max h-max px-4 py-2 rounded-full bg-green-700 text-white text-sm"
                                onClick={() => setOpenPIN(true)}
                            >
                                Change PIN
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                open={openPIN}
                closeIcon
                maskClosable
                cancelButtonProps={{hidden: true}}
                okButtonProps={{hidden: true}}
                onCancel={() => setOpenPIN(false)}
            >
                <div className="w-full h-max flex flex-col gap-4 items-center justify-center shadow-xl p-4">
                    <p>Change Transfer PIN</p>
                    <div className="w-full h-max">
                        <p className="text-sm">Old PIN</p>
                        <div className="w-full h-10 flex items-center rounded border border-gray-300 shadow pr-2">
                            <input
                                type="password"
                                className="w-full outline-none pl-3"
                                placeholder="Enter old PIN"
                            />
                            <span className="w-max h-max cursor-pointer">
                                <FaRegEye size={18} />
                                {/* <FaRegEyeSlash /> */}
                            </span>
                        </div>
                    </div>
                    <div className="w-full h-max">
                        <p className="text-sm">New PIN</p>
                        <div className="w-full h-10 flex items-center rounded border border-gray-300 shadow pr-2">
                            <input
                                type="password"
                                className="w-full outline-none pl-3"
                                placeholder="Create a PIN"
                            />
                            <span className="w-max h-max cursor-pointer">
                                <FaRegEye size={18} />
                                {/* <FaRegEyeSlash /> */}
                            </span>
                        </div>
                    </div>
                </div>
            </Modal>
            <Modal
                open={openPassword}
                closeIcon
                maskClosable
                cancelButtonProps={{hidden: true}}
                okButtonProps={{hidden: true}}
                onCancel={() => setOpenPassword(false)}
            >
                <div className="w-full h-max flex flex-col gap-4 items-center justify-center shadow-xl p-4">
                    <p>Change Password</p>
                    <div className="w-full h-max">
                        <p className="text-sm">Old Password</p>
                        <div className="w-full h-10 flex items-center rounded border border-gray-300 shadow pr-2">
                            <input
                                type="password"
                                className="w-full outline-none pl-3"
                                placeholder="Enter old password"
                            />
                            <span className="w-max h-max cursor-pointer">
                                <FaRegEye size={18} />
                                {/* <FaRegEyeSlash /> */}
                            </span>
                        </div>
                    </div>
                    <div className="w-full h-max">
                        <p className="text-sm">New Password</p>
                        <div className="w-full h-10 flex items-center rounded border border-gray-300 shadow pr-2">
                            <input
                                type="password"
                                className="w-full outline-none pl-3"
                                placeholder="Create a password with unique caracters"
                            />
                            <span className="w-max h-max cursor-pointer">
                                <FaRegEye size={18} />
                                {/* <FaRegEyeSlash /> */}
                            </span>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default UserProfile;
