import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certifications } from '../data';
import { SectionHeader } from './About';
import { ShieldCheck, ExternalLink, Award } from 'lucide-react';
import geminiBadgeImg from '../assets/gemini-certified.png';

const verifiedBadges = [
    // AWS Badges (Credly)
    {
        id: "aws-arch",
        provider: "AWS",
        name: "AWS Academy Graduate - Cloud Architecting",
        issuer: "Amazon Web Services Training & Certification",
        code: "AWS_ARCHITECT",
        verifyUrl: "https://www.credly.com/badges/a90c4554-f9a0-494f-8973-44ab488988e8",
        type: "credly",
        credlyId: "a90c4554-f9a0-494f-8973-44ab488988e8"
    },
    {
        id: "aws-found",
        provider: "AWS",
        name: "AWS Academy Graduate - Cloud Foundations",
        issuer: "Amazon Web Services Training & Certification",
        code: "AWS_FOUNDATIONS",
        verifyUrl: "https://www.credly.com/badges/ded8bc5f-6db4-4add-8bb3-a32bfc76605c",
        type: "credly",
        credlyId: "ded8bc5f-6db4-4add-8bb3-a32bfc76605c"
    },
    // Oracle Badges
    {
        id: "oci-devops",
        provider: "Oracle",
        name: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional",
        issuer: "Oracle University",
        code: "OCI_DEVOPS_PRO",
        imageUrl: "https://brm-workforce.oracle.com/pdf/certview/images/OCI25DOPOCP.png",
        verifyUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=8FB7DCCC4A40F74DCA5BEA1F8F33D4F65CB02530D7DD0157C21F5B25D775CB6B",
        type: "oracle"
    },
    {
        id: "oci-genai",
        provider: "Oracle",
        name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
        issuer: "Oracle University",
        code: "OCI_GENAI_PRO",
        imageUrl: "https://brm-workforce.oracle.com/pdf/certview/images/OCI25GAIOCP.png",
        verifyUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=74C7DAF305D1F019266F108DAD0232403A8F6692FE6D1745BAE06C52E5FB7475",
        type: "oracle"
    },
    {
        id: "oci-dev",
        provider: "Oracle",
        name: "Oracle Cloud Infrastructure 2025 Certified Developer Professional",
        issuer: "Oracle University",
        code: "OCI_DEV_PRO",
        imageUrl: "https://brm-workforce.oracle.com/pdf/certview/images/OCID25CP.png",
        verifyUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=82938C8C62E0CF356515B70682F6CE7150797B691FB4657731D4CF051899D952",
        type: "oracle"
    },
    {
        id: "ora-vector",
        provider: "Oracle",
        name: "Oracle AI Vector Search Certified Professional",
        issuer: "Oracle University",
        code: "ORA_VECTOR_SEARCH",
        imageUrl: "https://brm-workforce.oracle.com/pdf/certview/images/DB23AIOCP.png",
        verifyUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=A49FEA77598769E4F8A93AA5C24A80682343E737D186CFA3D988A3296E6E74C8",
        type: "oracle"
    },
    {
        id: "oci-found",
        provider: "Oracle",
        name: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
        issuer: "Oracle University",
        code: "OCI_FOUNDATIONS",
        imageUrl: "https://brm-workforce.oracle.com/pdf/certview/images/OCI25FNDCFAV1.png",
        verifyUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=099426C621911854C779D8D346F2DC8F81C3A3AA7EF66CDBD19DE0303CDBD6AA",
        type: "oracle"
    },
    {
        id: "oci-ai-found",
        provider: "Oracle",
        name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
        issuer: "Oracle University",
        code: "OCI_AI_FOUNDATIONS",
        imageUrl: "https://brm-workforce.oracle.com/pdf/certview/images/OCI25AICFAV1.png",
        verifyUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=AE2F5D8B40C6A97BACEF038E2FFD12166F627DB570BB812599E1B34C57D1C5C7",
        type: "oracle"
    },
    // Coursera Credentials
    {
        id: "coursera-qc-spec",
        provider: "Coursera",
        name: "The Complete Quantum Computing Course for Beginners",
        issuer: "Packt (3-Course Specialization)",
        code: "QC_SPECIALIZATION",
        imageUrl: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~9W0COCHTW84X/CERTIFICATE_LANDING_PAGE~9W0COCHTW84X.jpeg",
        verifyUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/9W0COCHTW84X",
        type: "image"
    },
    {
        id: "coursera-qc-qiskit",
        provider: "Coursera",
        name: "Quantum Computing with Qiskit and Advanced Algorithms",
        issuer: "Packt Publishing",
        code: "QC_QISKIT",
        imageUrl: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~WJU8QJ86211C/CERTIFICATE_LANDING_PAGE~WJU8QJ86211C.jpeg",
        verifyUrl: "https://www.coursera.org/account/accomplishments/verify/WJU8QJ86211C",
        type: "image"
    },
    {
        id: "coursera-qc-python",
        provider: "Coursera",
        name: "Python Programming for Quantum Computing",
        issuer: "Packt Publishing",
        code: "QC_PYTHON",
        imageUrl: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~21DEMWZHF3Q9/CERTIFICATE_LANDING_PAGE~21DEMWZHF3Q9.jpeg",
        verifyUrl: "https://www.coursera.org/account/accomplishments/verify/21DEMWZHF3Q9",
        type: "image"
    },
    {
        id: "coursera-agile",
        provider: "Coursera",
        name: "Agile Software Development",
        issuer: "University of Minnesota",
        code: "AGILE_UMN",
        imageUrl: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~CX34Y0D09X09/CERTIFICATE_LANDING_PAGE~CX34Y0D09X09.jpeg",
        verifyUrl: "https://www.coursera.org/account/accomplishments/verify/CX34Y0D09X09",
        type: "image"
    },
    // Google for Education (Gemini Certified)
    {
        id: "google-gemini-cert",
        provider: "Google",
        name: "Gemini Certified University Student",
        issuer: "Google for Education",
        code: "GEMINI_CERT_AI",
        imageUrl: geminiBadgeImg,
        verifyUrl: "https://www.credential.net/0dcf4cde-fbbb-4a7e-ad95-dcdc07a6e387",
        type: "image"
    }
];

export default function Certifications() {
    const [filter, setFilter] = useState('ALL');

    const filteredBadges = filter === 'ALL'
        ? verifiedBadges
        : verifiedBadges.filter(badge => badge.provider === filter);

    return (
        <section id="certifications" className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <SectionHeader code="SYS_07" label="CERT_REGISTRY" title="Verified Credentials" />

                {/* Official Badges Showcase */}
                <div className="mt-8 sm:mt-12 mb-12 sm:mb-16">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
                        <div className="flex items-center gap-2 sm:gap-3">
                            <Award size={18} className="text-accent shrink-0" />
                            <span className="font-mono text-[10px] sm:text-[11px] text-accent tracking-[0.15em] sm:tracking-[0.25em] uppercase font-semibold">
                                OFFICIAL DIGITAL BADGES // LIVE VERIFIED REPOSITORY
                            </span>
                        </div>

                        {/* Filter Tabs & Transcript */}
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 self-start sm:self-auto w-full sm:w-auto justify-between sm:justify-start">
                            <div className="flex items-center flex-wrap gap-1 sm:gap-2 p-1 bg-surface-raised border border-surface-border rounded-xl">
                                {[
                                    { label: "ALL (13)", value: "ALL" },
                                    { label: "ORACLE (6)", value: "Oracle" },
                                    { label: "COURSERA (4)", value: "Coursera" },
                                    { label: "AWS (2)", value: "AWS" },
                                    { label: "GOOGLE (1)", value: "Google" },
                                ].map((tab) => (
                                    <button
                                        key={tab.value}
                                        onClick={() => setFilter(tab.value)}
                                        className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg font-mono text-[9px] sm:text-[10px] tracking-wider transition-all duration-300 ${
                                            filter === tab.value
                                                ? 'bg-accent/15 text-accent border border-accent/40 font-bold shadow-sm'
                                                : 'text-ts hover:text-tp hover:bg-surface-overlay'
                                        }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            <a
                                href="https://www.credly.com/users/gowtham-c-k/badges/credly"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-xl font-mono text-[9px] sm:text-[10px] tracking-wider border border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/60 transition-all duration-300"
                            >
                                <Award size={12} />
                                <span>CREDLY_PROFILE ↗</span>
                            </a>
                        </div>
                    </div>

                    <motion.div
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
                    >
                        <AnimatePresence>
                            {filteredBadges.map((badge, idx) => (
                                <motion.div
                                    key={badge.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                                    className="holo-card rounded-2xl p-4 sm:p-5 border border-surface-border flex flex-col items-center justify-between text-center relative overflow-hidden group hover:border-accent/40 transition-all duration-300"
                                >
                                    {/* Header status */}
                                    <div className="w-full flex items-center justify-between font-mono text-[9px] text-accent/60 tracking-wider mb-3 border-b border-surface-border pb-2">
                                        <span>{badge.code}</span>
                                        <span className="text-emerald-400 font-semibold flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                            {badge.provider.toUpperCase()} VERIFIED
                                        </span>
                                    </div>

                                    {/* Badge Visual */}
                                    <div className="bg-white rounded-xl p-3 shadow-md flex items-center justify-center w-full min-h-[220px] max-h-[280px] overflow-hidden my-2">
                                        {badge.type === 'credly' ? (
                                            <iframe
                                                src={`https://www.credly.com/embedded_badge/${badge.credlyId}`}
                                                width="150"
                                                height="270"
                                                frameBorder="0"
                                                scrolling="no"
                                                title={badge.name}
                                                className="rounded"
                                            />
                                        ) : (
                                            <img
                                                src={badge.imageUrl}
                                                alt={badge.name}
                                                className="max-h-[185px] max-w-[220px] w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                                                loading="lazy"
                                            />
                                        )}
                                    </div>

                                    {/* Footer Details */}
                                    <div className="mt-3 w-full pt-3 border-t border-surface-border flex flex-col justify-between flex-grow">
                                        <div>
                                            <p className="text-[12px] text-tp font-medium leading-snug mb-1 line-clamp-2">
                                                {badge.name}
                                            </p>
                                            <p className="text-[10px] text-ts mb-3 font-mono">
                                                {badge.issuer}
                                            </p>
                                        </div>
                                        <a
                                            href={badge.verifyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-1.5 font-mono text-[11px] text-accent hover:underline tracking-wider font-semibold py-1.5 px-3 rounded-lg border border-accent/20 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
                                        >
                                            Verify on {badge.provider} <ExternalLink size={12} />
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>

                {/* All Other Accreditations Index */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                    <span className="font-mono text-[10px] text-accent/60 tracking-[0.25em] uppercase font-semibold">
                        ACCREDITATIONS & CERTIFICATIONS DIRECTORY
                    </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {certifications.map((cert, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            whileHover={{ y: -3, transition: { duration: 0.2 } }}
                            className="group holo-card rounded-2xl p-5 neon-border"
                        >
                            <div className="relative z-10 flex items-start gap-4">
                                <div className="w-10 h-10 border border-accent/20 rounded-xl flex items-center justify-center text-accent/60 group-hover:text-accent group-hover:border-accent/40 transition-all duration-500 shrink-0 mt-0.5">
                                    <ShieldCheck size={20} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <p className="text-[13px] text-tp font-medium leading-snug group-hover:text-accent transition-colors duration-500">
                                        {cert.name}
                                    </p>
                                    <p className="font-mono text-[9px] text-accent/30 tracking-widest mt-2">
                                        {cert.code}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
