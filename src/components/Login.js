import logo from '../images/logodog.jpg';

export default function Login({ onLogin }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(); // เรียกใช้ฟังก์ชันเพื่ออัปเดตสถานะล็อกอิน
    };

    return (
        <>
            <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
                <div className="mx-auto w-full max-w-lg">
                    <img
                        alt="Your Company"
                        src={logo}
                        className="mx-auto h-20 w-auto"
                    />
                    <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-pink-800">
                        Period Tracker
                    </h2>
                </div>

                <div className="mt-10 mx-auto w-full max-w-lg">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div>
                            <label htmlFor="email" className="block text-lg font-medium leading-6 text-pink-800">
                                อีเมล
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-pink-300 placeholder:text-pink-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 text-lg leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-lg font-medium leading-6 text-pink-800">
                                    รหัสผ่าน
                                </label>
                                <div className="text-base">
                                    <a href="#" className="font-semibold text-pink-600 hover:text-pink-500">
                                        ลืมรหัสผ่าน?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-pink-300 placeholder:text-pink-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 text-lg leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-pink-600 px-5 py-3 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
                            >
                                ลงชื่อเข้าใช้
                            </button>
                        </div>
                    </form>
                    <div className="mt-6 text-center">
                        <button
                            className="flex w-full justify-center rounded-md bg-gray-300 px-5 py-3 text-lg font-semibold leading-6 text-gray-700 shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
                        >
                            สมัครสมาชิก
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}