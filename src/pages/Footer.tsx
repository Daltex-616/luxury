import { Car, Instagram, MessageSquare, Smartphone, Mail } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    const email = "soporte@luxurytransfer.com.ar";

    const handleMailClick = () => {
        window.location.href = `mailto:${email}`;
    };

    return (
        <footer className="bg-gradient-to-b from-background to-accent/10 border-t border-accent/30 py-12">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {/* Logo o Branding */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-2xl font-bold text-accent tracking-tight">
                            Luxury Transfer
                        </h3>
                        <p className="mt-2 text-text/70 text-sm">
                            {t('footer.description')}
                        </p>
                    </div>

                    {/* Enlaces sociales */}
                    <div className="flex justify-center gap-6">
                        <a
                            href="https://www.instagram.com/luxurytransfer/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text/60 hover:text-accent transition-all duration-300 transform hover:scale-110"
                            aria-label="Instagram"
                        >
                            <Instagram size={28} />
                        </a>
                        <a
                            href="https://wa.me/+54 9 11 5980-4525"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text/60 hover:text-accent transition-all duration-300 transform hover:scale-110"
                            aria-label="WhatsApp"
                        >
                            <Smartphone size={28} />
                        </a>
                        <button
                            onClick={handleMailClick}
                            className="text-text/60 hover:text-accent transition-all duration-300 transform hover:scale-110"
                            aria-label="Email"
                        >
                            <Mail size={28} />
                        </button>
                    </div>

                    {/* Enlaces legales */}
                    <div className="flex flex-col items-center md:items-end gap-2">
                        <div className="flex justify-center gap-4">
                            <button className="text-text/60 hover:text-accent transition-colors text-sm" onClick={handleMailClick}>{t('footer.faq')}</button>
                        </div>
                        <p className="text-text/50 text-sm mt-2">
                            © {new Date().getFullYear()} Luxury Transfer
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;