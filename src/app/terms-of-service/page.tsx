"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function TermsOfService() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className="min-h-screen my-24 bg-background text-text py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-4xl mx-auto space-y-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-brand tracking-tight">
            Terms of Service
          </h1>
          <p className="text-secondary text-lg">
            Last Updated: January 14, 2026
          </p>
          <div className="h-1 w-24 bg-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Introduction */}
        <motion.section variants={itemVariants} className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <ChevronRight className="text-brand" />
            1. Acceptance of Terms
          </h2>
          <p className="leading-relaxed text-gray-300">
            By accessing and using <strong>HelloAnime</strong> ("the Service"),
            you accept and agree to be bound by the terms and provision of this
            agreement. In addition, when using these particular services, you
            shall be subject to any posted guidelines or rules applicable to
            such services. Any participation in this service will constitute
            acceptance of this agreement. If you do not agree to abide by the
            above, please do not use this service.
          </p>
        </motion.section>

        {/* Use of Service */}
        <motion.section variants={itemVariants} className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <ChevronRight className="text-brand" />
            2. Use of Service
          </h2>
          <p className="leading-relaxed text-gray-300">
            You agree to use the Service only for lawful purposes. You are
            prohibited from posting on or transmitting through the Service any
            material that is unlawful, harmful, threatening, abusive, harassing,
            defamatory, vulgar, obscene, sexually explicit, profane, hateful,
            racially, ethnically, or otherwise objectionable of any kind,
            including but not limited to any material that encourages conduct
            that would constitute a criminal offense, give rise to civil
            liability, or otherwise violate any applicable local, state,
            national, or international law.
          </p>
        </motion.section>

        {/* Intellectual Property */}
        <motion.section variants={itemVariants} className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <ChevronRight className="text-brand" />
            3. Intellectual Property
          </h2>
          <p className="leading-relaxed text-gray-300">
            The Service and its original content, features, and functionality
            are and will remain the exclusive property of HelloAnime and its
            licensors. The Service is protected by copyright, trademark, and
            other laws of both the country of origin and foreign countries. Our
            trademarks and trade dress may not be used in connection with any
            product or service without the prior written consent of HelloAnime.
          </p>
        </motion.section>

        {/* User Content */}
        <motion.section variants={itemVariants} className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <ChevronRight className="text-brand" />
            4. User Content
          </h2>
          <p className="leading-relaxed text-gray-300">
            Our Service may allow you to post, link, store, share and otherwise
            make available certain information, text, graphics, videos, or other
            material ("Content"). You are responsible for the Content that you
            post to the Service, including its legality, reliability, and
            appropriateness. By posting Content to the Service, you grant us the
            right and license to use, modify, publicly perform, publicly
            display, reproduce, and distribute such Content on and through the
            Service.
          </p>
        </motion.section>

        {/* Termination */}
        <motion.section variants={itemVariants} className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <ChevronRight className="text-brand" />
            5. Termination
          </h2>
          <p className="leading-relaxed text-gray-300">
            We may terminate or suspend access to our Service immediately,
            without prior notice or liability, for any reason whatsoever,
            including without limitation if you breach the Terms. All provisions
            of the Terms which by their nature should survive termination shall
            survive termination, including, without limitation, ownership
            provisions, warranty disclaimers, indemnity, and limitations of
            liability.
          </p>
        </motion.section>

        {/* Disclaimers */}
        <motion.section variants={itemVariants} className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <ChevronRight className="text-brand" />
            6. Limitation of Liability
          </h2>
          <p className="leading-relaxed text-gray-300">
            In no event shall HelloAnime, nor its directors, employees,
            partners, agents, suppliers, or affiliates, be liable for any
            indirect, incidental, special, consequential or punitive damages,
            including without limitation, loss of profits, data, use, goodwill,
            or other intangible losses, resulting from (i) your access to or use
            of or inability to access or use the Service; (ii) any conduct or
            content of any third party on the Service; (iii) any content
            obtained from the Service; and (iv) unauthorized access, use or
            alteration of your transmissions or content, whether based on
            warranty, contract, tort (including negligence) or any other legal
            theory, whether or not we have been informed of the possibility of
            such damage, and even if a remedy set forth herein is found to have
            failed of its essential purpose.
          </p>
        </motion.section>

        {/* Governing Law */}
        <motion.section variants={itemVariants} className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <ChevronRight className="text-brand" />
            7. Governing Law
          </h2>
          <p className="leading-relaxed text-gray-300">
            These Terms shall be governed and construed in accordance with the
            laws of Poland, without regard to its conflict of law provisions.
            Our failure to enforce any right or provision of these Terms will
            not be considered a waiver of those rights. If any provision of
            these Terms is held to be invalid or unenforceable by a court, the
            remaining provisions of these Terms will remain in effect.
          </p>
        </motion.section>

        {/* Changes */}
        <motion.section variants={itemVariants} className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <ChevronRight className="text-brand" />
            8. Changes to Terms
          </h2>
          <p className="leading-relaxed text-gray-300">
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material we will try to
            provide at least 30 days notice prior to any new terms taking
            effect. What constitutes a material change will be determined at our
            sole discretion. By continuing to access or use our Service after
            those revisions become effective, you agree to be bound by the
            revised terms.
          </p>
        </motion.section>

        {/* Contact */}
        <motion.section
          variants={itemVariants}
          className="bg-secondary-background p-6 rounded-2xl border border-secondary/20 mt-8"
        >
          <h2 className="text-2xl font-bold mb-4 text-brand">Contact Us</h2>
          <p className="mb-4 text-gray-300">
            If you have any questions about these Terms, please contact us at:
          </p>
          <a
            href="mailto:support@helloanime.com"
            className="text-secondary hover:text-brand transition-colors font-medium text-lg"
          >
            support@helloanime.com
          </a>
        </motion.section>
      </motion.div>
    </main>
  );
}
