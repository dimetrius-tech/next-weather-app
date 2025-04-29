import {login, signup} from './actions';

export default function LoginPage() {
    return (
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md m-auto">
            <h2 className="text-2xl font-semibold text-center text-gray-700">Login</h2>
            <form className="mt-4">
                <div>
                    <label className="block text-sm font-medium text-black">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="w-full px-4 py-2 mt-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email" required/>
                </div>
                <div className="mt-4">
                    <label className="block text-sm font-medium text-black">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="w-full px-4 py-2 mt-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your password" required
                    />
                </div>
                <button
                    formAction={login}
                    className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                >
                    Login
                </button>
                <button
                    formAction={signup}
                    className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                >
                    Sign up
                </button>
            </form>
        </div>
)
}