import { useState } from "react";
import { motion } from "framer-motion";
import { Brainly } from "../icons/Brainly";
import { Menu, X } from "lucide-react"; // Icons for menu toggle

const LandingPage: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-black text-white min-h-screen flex flex-col font-sans">
            {/* Header Section */}
            <motion.header
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full py-4 px-6 flex justify-between items-center border-b border-gray-800"
            >
                <div className="flex items-center gap-3">
                    <Brainly />
                    <h1 className="text-2xl font-bold">Brainly</h1>
                </div>
                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-4">
                    <a
                        href="/signin"
                        className="text-gray-300 hover:text-white transition"
                    >
                        Sign In
                    </a>
                    <a
                        href="/signup"
                        className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
                    >
                        Sign Up
                    </a>
                </nav>
                {/* Mobile Navigation */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Sidebar */}
            {isMenuOpen && (
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed top-0 left-0 w-3/4 h-full bg-gray-900 z-50 shadow-lg flex flex-col px-6 py-4"
                >
                    <a
                        href="/signin"
                        className="text-gray-300 py-2 hover:text-white transition"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Sign In
                    </a>
                    <a
                        href="/signup"
                        className="text-gray-300 py-2 hover:text-white transition"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Sign Up
                    </a>
                </motion.div>
            )}

            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-center px-6 md:px-16 lg:px-32 mt-16 flex-1"
            >
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                    Bookmark Your Content with Ease
                </h2>
                <p className="text-gray-400 mt-4 text-lg">
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
                className="flex flex-wrap justify-center gap-6 mt-12 px-6 md:px-16 lg:px-32"
            >
                {[
                    {
                        title: "Easy Bookmarking",
                        description: "Save and organize your favorite YouTube videos and Tweets in one place.",
                    },
                    {
                        title: "Lightning Fast",
                        description: "Access your bookmarks instantly with a seamless user experience.",
                    },
                    {
                        title: "Stay Organized",
                        description: "Revisit your saved links whenever you need them, all in one dashboard.",
                    },
                ].map((feature, index) => (
                    <div
                        key={index}
                        className="bg-gray-900 p-6 rounded-lg shadow-lg w-full sm:w-1/2 lg:w-1/3 text-center"
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-blue-500">
                            {feature.title}
                        </h3>
                        <p className="text-gray-400">{feature.description}</p>
                    </div>
                ))}
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
