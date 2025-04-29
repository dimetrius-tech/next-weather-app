"use client";

interface ModalProps {
    onClose: () => void;
}

export default function Modal({onClose}: ModalProps) {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
            <div className="p-8 border w-96 shadow-lg rounded-md bg-white">
                <div className="text-centi er">
                    <h3 className="text-2xl font-bold text-gray-900">Login</h3>
                    <div className="flex items-center justify-center bg-gray-100">
                        <div className="bg-white p-6 rounded-lg shadow-md w-80">
                            <h2 className="text-xl font-semibold text-center mb-4">Login</h2>
                            {/*<form className="space-y-4">*/}
                            {/*    <input*/}
                            {/*        id="email"*/}
                            {/*        name="email"*/}
                            {/*        type="email"*/}
                            {/*        placeholder="Email"*/}
                            {/*        className="w-full p-2 border rounded"*/}
                            {/*    />*/}
                            {/*    <input*/}
                            {/*        id="password"*/}
                            {/*        name="password"*/}
                            {/*        type="password"*/}
                            {/*        placeholder="Password"*/}
                            {/*        className="w-full p-2 border rounded"*/}
                            {/*    />*/}
                            {/*    <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">*/}
                            {/*        Login*/}
                            {/*    </button>*/}
                            {/*</form>*/}
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">

                        {/* Navigates back to the base URL - closing the modal */}
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}