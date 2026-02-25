"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "accepted");
        setIsVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem("cookieConsent", "rejected");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full z-50 p-4 pb-6 md:p-6 lg:p-10 pointer-events-none flex justify-center">
            <div className="pointer-events-auto flex flex-col md:flex-row items-center gap-6 bg-charcoal text-cream p-6 md:p-8 rounded-[2rem] shadow-2xl max-w-5xl w-full border border-stone/20">

                <div className="flex-1">
                    <p className="font-sans text-sm leading-relaxed text-cream/90">
                        Utilizamos cookies para lhe oferecer a melhor experiência no nosso site, analisar o tráfego e personalizar conteúdos de acordo com as suas preferências.
                    </p>
                </div>

                <div className="flex gap-4 shrink-0 w-full md:w-auto">
                    <button
                        onClick={handleReject}
                        className="flex-1 md:flex-none px-6 py-2.5 rounded-full border border-cream/20 text-cream text-sm font-medium hover:bg-cream/5 transition-colors font-sans"
                    >
                        Rejeitar
                    </button>
                    <button
                        onClick={handleAccept}
                        className="flex-1 md:flex-none px-6 py-2.5 rounded-full bg-rose text-cream text-sm font-medium hover:bg-rose/90 transition-colors font-sans hover:scale-[1.03] duration-300 ease-out"
                    >
                        Aceitar
                    </button>
                </div>

            </div>
        </div>
    );
}
