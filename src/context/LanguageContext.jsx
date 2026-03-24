import React, { createContext, useContext, useState } from 'react';

const translations = {
    tr: {
        nav: {
            home: "Ana Sayfa",
            skills: "Yetenekler",
            projects: "Projeler",
            timeline: "Zaman Çizelgesi",
            contact: "İletişim"
        },
        hero: {
            subtitle: "Fahri Kaymaz — Dijital Deneyim",
            title1: "Modern",
            title2: "Coding",
            title3: "Architect",
            desc: "Yüksek performanslı C# çözümleri, AI entegre sistemler ve karmaşık sistem mimarileri geliştiren bir yazılım uzmanıyım. Modern teknolojileri kullanarak ölçeklenebilir ve yenilikçi dijital çözümler inşa ediyorum.",
            explore: "Projelerimi Keşfet",
            contact: "Bana Ulaşın"
        },
        projects: {
            title: "Öne Çıkan",
            titleSpan: "Projeler",
            subtitle: "Fikirlerin koda dönüştüğü dijital eserlerim.",
            live: "CANLI PROJE",
            details: "Detaylar",
            inspect: "Siteyi İncele",
            list: {
                navora: {
                    title: "NavoraApp - Sağlık & Planlama",
                    desc: "AI destekli kalori analizi, adım takibi ve akıllı planlama sunan kapsamlı PWA uygulaması."
                },
                advisor: {
                    title: "Executive Finance Advisor",
                    desc: "Modern finansal danışmanlık ve analiz platformu. Şık tasarım ve yüksek performanslı kullanıcı deneyimi."
                },
                sovereign: {
                    title: "THE SOVEREIGN",
                    desc: "Lüks aydınlatma enstrümanları için tasarlanmış, 4K materyal kalitesine odaklanan premium deneyim."
                },
                erp: {
                    title: "Mini ERP Uygulaması",
                    desc: "C# ve SQL tabanlı, temel ERP mantığında çalışan kapsamlı veri yönetim sistemi."
                },
                ai_infra: {
                    title: "AI Sunucu Altyapısı",
                    desc: "Yapay zeka modellerini API olarak dış dünyaya servis eden özelleştirilmiş backend sistemi."
                },
                socket: {
                    title: "Socket Haberleşme Sistemi",
                    desc: "Gerçek zamanlı veri aktarımı sağlayan client-server mimarili sohbet altyapısı."
                },
                wizard: {
                    title: "Wizard UI Başvuru Formu",
                    desc: "Modern ve kullanıcı dostu, 10+ adımlı profesyonel wizard form tasarımı."
                },
                tamahagane: {
                    title: "Tamahagane Forge",
                    desc: "Samuray estetiğiyle tasarlanmış, yüksek performanslı ve görsel odaklı modern web deneyimi."
                }
            },
            showMore: "Daha Fazla Göster",
            showLess: "Daha Az Göster"
        },
        contact: {
            title: "Hadi",
            titleSpan: "Tanışalım",
            desc: "Projeleriniz için bir geliştiriciye mi ihtiyacınız var veya sadece merhaba demek mi istiyorsunuz? Bana her zaman ulaşabilirsiniz.",
            name: "İsim",
            email: "E-Posta",
            message: "Mesaj",
            placeholderName: "Adınız Soyadınız",
            placeholderEmail: "Mail adresiniz",
            placeholderMessage: "Mesajınız...",
            send: "Gönder",
            sending: "Gönderiliyor...",
            successTitle: "Mesajınız Gönderildi!",
            successDesc: "En kısa sürede size dönüş yapacağım.",
            newMsg: "Yeni Mesaj Gönder"
        },
        console: {
            title: "fahri-kaymaz-console v1.0.4",
            uptime: "ÇALIŞMA SÜRESİ",
            location: "KONUM",
            ide: "FAVORİ IDE",
            focus: "ODAK"
        }
    },
    en: {
        nav: {
            home: "Home",
            skills: "Skills",
            projects: "Projects",
            timeline: "Timeline",
            contact: "Contact"
        },
        hero: {
            subtitle: "Fahri Kaymaz — Digital Experience",
            title1: "Modern",
            title2: "Coding",
            title3: "Architect",
            desc: "I am a software expert developing high-performance C# solutions, AI-integrated systems, and complex system architectures. I build scalable and innovative digital solutions using modern technologies.",
            explore: "Explore My Projects",
            contact: "Contact Me"
        },
        projects: {
            title: "Featured",
            titleSpan: "Projects",
            subtitle: "Digital works where ideas turn into code.",
            live: "LIVE PROJECT",
            details: "Details",
            inspect: "Visit Site",
            list: {
                navora: {
                    title: "NavoraApp - Health & Planning",
                    desc: "Comprehensive PWA application offering AI-powered calorie analysis, step tracking, and smart planning."
                },
                advisor: {
                    title: "Executive Finance Advisor",
                    desc: "Modern financial consulting and analysis platform. Sleek design and high-performance user experience."
                },
                sovereign: {
                    title: "THE SOVEREIGN",
                    desc: "A premium experience designed for luxury lighting instruments, focusing on 4K material quality."
                },
                erp: {
                    title: "Mini ERP Application",
                    desc: "Comprehensive data management system working in basic ERP logic based on C# and SQL."
                },
                ai_infra: {
                    title: "AI Server Infrastructure",
                    desc: "Customized backend system serving AI models as an API to the outside world."
                },
                socket: {
                    title: "Socket Communication System",
                    desc: "Client-server architecture chat infrastructure providing real-time data transfer."
                },
                wizard: {
                    title: "Wizard UI Application Form",
                    desc: "Modern and user-friendly, 10+ step professional wizard form design."
                },
                tamahagane: {
                    title: "Tamahagane Forge",
                    desc: "High-performance and visually-oriented modern web experience designed with samurai aesthetics."
                }
            },
            showMore: "Show More",
            showLess: "Show Less"
        },
        contact: {
            title: "Let's",
            titleSpan: "Connect",
            desc: "Need a developer for your projects or just want to say hi? You can always reach out to me.",
            name: "Name",
            email: "Email",
            message: "Message",
            placeholderName: "Your Name",
            placeholderEmail: "Your email address",
            placeholderMessage: "Your message...",
            send: "Send",
            sending: "Sending...",
            successTitle: "Message Sent!",
            successDesc: "I will get back to you as soon as possible.",
            newMsg: "Send New Message"
        },
        console: {
            title: "fahri-kaymaz-console v1.0.4",
            uptime: "UPTIME",
            location: "LOCATION",
            ide: "PREFERRED IDE",
            focus: "FOCUS"
        }
    }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState('tr');

    const t = (path) => {
        const keys = path.split('.');
        let current = translations[lang];
        for (const key of keys) {
            if (current[key] === undefined) return path;
            current = current[key];
        }
        return current;
    };

    const toggleLanguage = () => {
        setLang(prev => prev === 'tr' ? 'en' : 'tr');
    };

    return (
        <LanguageContext.Provider value={{ lang, t, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
