import { FaFacebookF, FaTiktok, FaDiscord } from "react-icons/fa";

const socialLinks = [
    {
        id: "facebook",
        icon: <FaFacebookF />,
        link: "https://www.facebook.com/LEXYWRESTLINGNEWSINVN",
        label: "Fanpage",
    },
    {
        id: "tiktok",
        icon: <FaTiktok />,
        link: "https://www.tiktok.com/@lexydammedauvat",
        label: "TikTok",
    },
    {
        id: "discord",
        icon: <FaDiscord />,
        link: "https://discord.com/invite/zwxuxwXR4",
        label: "Discord",
    },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#EBEBE3] border-t border-zinc-300 py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center space-y-6">

                    {/* Logo hoặc Tên Brand */}
                    <h2 className="text-3xl font-black uppercase tracking-[0.3em] text-zinc-900">
                        Habibi Independent Community
                    </h2>

                    {/* Social Links */}
                    <div className="flex items-center space-x-8">
                        {socialLinks.map((social) => (
                            <a
                                key={social.id}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-600 hover:text-[#5865F2] transition-colors duration-300 text-2xl"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <div className="text-center pt-6 border-t border-zinc-200 w-full max-w-xs">
                        <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium">
                            © {currentYear} Habibi Independent Community. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;