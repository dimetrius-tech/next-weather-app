import {signOut} from "@/app/login/actions";

export default function Header() {
    return (
        <header className="w-full p-4 bg-blue-500 text-white text-center shadow-md">
            <div className="flex justify-between gap-4">
                <h1 className="text-4xl my-auto font-bold uppercase">Weather</h1>
                <div className="flex gap-4">
                    <form className="m-auto">
                        <button formAction={signOut}>Sign out</button>
                    </form>
                </div>
            </div>
        </header>
    );
}