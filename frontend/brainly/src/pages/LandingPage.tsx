import { motion } from "framer-motion";
import { Brainly } from "../icons/Brainly";

const LandingPage: React.FC = () => {
    return (
        <div className="bg-black text-white min-h-screen flex flex-col items-center justify-between font-sans">
            {/* Header Section */}
            <motion.header
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full py-6 flex justify-between items-center px-8 border-b border-gray-800"
            >
                <h1 className="text-3xl font-bold text-white flex gap-3 justify-center items-center"><Brainly/>Brainly</h1>
                <div>
                    <a
                        href="/signin"
                        className="mr-4 text-gray-300 hover:text-white transition"
                    >
                        Sign In
                    </a>
                    <a
                        href="/signup"
                        className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
                    >
                        Sign Up
                    </a>
                </div>
            </motion.header>

            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-center px-8 mt-16"
            >
                <h2 className="text-4xl font-bold">
                    Bookmark Your Content with Ease
                </h2>
                <p className="text-gray-400 mt-4">
                    Manage and revisit your favorite YouTube videos and Tweets on
                    Brainly. Built for productivity and simplicity.
                </p>
                <div className="mt-8">
                    <a
                        href="/signup"
                        className="px-6 py-3 bg-blue-500 rounded-lg text-lg hover:bg-blue-600 transition"
                    >
                        Get Started
                    </a>
                </div>
            </motion.section>

            {/* Features Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap justify-center gap-8 mt-16 px-4"
            >
                <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-sm text-center">
                    <h3 className="text-2xl font-semibold mb-4 text-blue-500">
                        Easy Bookmarking
                    </h3>
                    <p className="text-gray-400">
                        Save and organize your favorite YouTube videos and Tweets in one
                        place.
                    </p>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-sm text-center">
                    <h3 className="text-2xl font-semibold mb-4 text-blue-500">
                        Lightning Fast
                    </h3>
                    <p className="text-gray-400">
                        Access your bookmarks instantly with a seamless user experience.
                    </p>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-sm text-center">
                    <h3 className="text-2xl font-semibold mb-4 text-blue-500">
                        Stay Organized
                    </h3>
                    <p className="text-gray-400">
                        Revisit your saved links whenever you need them, all in one
                        dashboard.
                    </p>
                </div>
            </motion.section>

            {/* Footer Section */}
            <motion.footer
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.8 }}
                className="w-full py-6 mt-16 bg-gray-900 text-center"
            >
                <p className="text-gray-500">© 2024 Brainly. All Rights Reserved.</p>
            </motion.footer>
        </div>
    );
};

export default LandingPage;
