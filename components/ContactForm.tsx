import { sendContactEmail } from "@/actions/sendContactEmail";
import ButtonSubmit from "./ButtonSubmit";
import { useEffect, useRef, useState } from "react";
import { useIsVisible } from "@/utils/useIsVisible";

// Type declaration for grecaptcha
declare global {
  interface Window {
    grecaptcha: {
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
      ready: (callback: () => void) => void;
    };
    onloadCallback?: () => void;
    recaptchaToken?: string;
  }
}

export default function ContactForm() {

  const contactRef = useRef(null);
  const isContactVisible = useIsVisible(contactRef);

  const [captchaStatus, setCaptchaStatus] = useState<string | null>(null);
  const recaptchaTokenRef = useRef<string | null>(null);

  useEffect(() => {
    const loadRecaptcha = () => {
      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.grecaptcha) {
          window.grecaptcha.ready(async () => {
            try {
              const token = await window.grecaptcha.execute(
                process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
                { action: "submit" }
              );
              recaptchaTokenRef.current = token; // Update ref immediately
            } catch (error) {
              console.error("Error generating reCAPTCHA token:", error);
              recaptchaTokenRef.current = null;
            }
          });
        }
      };
    };

    loadRecaptcha();
  }, []);

  const handleSubmitContact = async (formData: FormData) => {
    // Check ref value synchronously
    if (!recaptchaTokenRef.current) {
      setCaptchaStatus("reCAPTCHA verification failed. Please try again or reload the page.");
      return;
    }

    // Add reCAPTCHA token to form data
    formData.set("recaptchaToken", recaptchaTokenRef.current);

    // Call the Server Action
    const result = await sendContactEmail(formData);
    setCaptchaStatus(result.message);
  };

  return (
    <div ref={contactRef} id="contact" className={`prose prose-lg max-w-4xl mx-auto mt-64 flex flex-col ease-in delay-400 duration-700 ${isContactVisible ? "opacity-100" : "opacity-0"}`}>
      <h2 className="text-3xl text-white mb-6 text-left">
        Contact Me
      </h2>
      <p className="text-white text-left mb-6">
        I would love to hear from you! Please fill out the form and I will get back to as soon as possible.
      </p>

      <form
        action={handleSubmitContact}
        className="space-y-6 flex flex-col min-h-[400px]"  // ← added flex + min height (optional)
      >
        <div>
          <label htmlFor="name" className="block text-white font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-white font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
          />
        </div>

        <div className="flex-1"> {/* ← makes textarea take remaining space */}
          <label htmlFor="message" className="block text-white font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 h-full min-h-[120px]"
          />
        </div>

        <input type="hidden" name="recaptchaToken" value={recaptchaTokenRef.current || ""} />

        {/* Button container – pushes button to bottom-right */}
        <div className="flex justify-end mt-6">
          <ButtonSubmit
            text="Send Message"
            className="hover:cursor-pointer"
          />
        </div>

        {captchaStatus && <p className="text-white mt-4 text-center sm:text-left">{captchaStatus}</p>}
      </form>
    </div>
  )
}