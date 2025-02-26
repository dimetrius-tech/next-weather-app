import { useState, FormEvent } from "react";
import Link from "next/link";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignup = (e: FormEvent) => {
        e.preventDefault();
        // Placeholder signup logic
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        console.log("Signing up with", email, password);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-80">
                <h2 className="text-xl font-semibold text-center mb-4">Sign Up</h2>
                <form onSubmit={handleSignup} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 border rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-2 border rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full p-2 border rounded"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
                        Sign Up
                    </button>
                    <p className="text-center text-sm mt-2">
                        Already have an account? <Link href="/login" className="text-green-600 hover:underline">Log in</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}