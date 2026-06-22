"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { Button } from '@/components/ui/button'
import { FormField } from "@/components/form/form-field";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Phone",
    value: "+92 51 123 4567",
    href: "tel:+925112345678",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@estatepk.com",
    href: "mailto:hello@estatepk.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Blue Area, Islamabad, Pakistan",
    href: "#",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sat: 9 AM – 7 PM",
    href: null,
  },
];
const ContactForm = () => {
      const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  return (
     <section className="py-20 " id="contact">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/8 px-3 py-1.5 rounded-full mb-3">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Let's Find Your Perfect Property
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm md:text-base">
            Our expert agents are ready to help. Reach out and we'll get back to
            you within a few hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
         
          <div className="space-y-5">
            {/* Info cards */}
            {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-start gap-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm font-medium text-gray-800 hover:text-primary transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-gray-800">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="relative w-full h-44 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5490027394204!2d73.0937!3d33.7215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df94d1cb88d0d9%3A0x3ba559f0b8af53b4!2sBlue%20Area%2C%20Islamabad!5e0!3m2!1sen!2spk!4v1690000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right — enquiry form */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[420px] text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Message Sent!</h3>
                <p className="text-gray-500 text-sm max-w-xs">
                  Thank you for reaching out. One of our agents will contact you
                  shortly.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSubmitted(false)}
                  className="mt-2"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Send an Enquiry
                  </h3>
                  <p className="text-xs text-gray-400">
                    Fill in the form and we'll be in touch.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <FormField
                      label="First Name"
                      type="text"
                      placeholder="john@example.com"
                      required
                    //   error={errors.email?.message}
                    //   {...register("email", {
                    //     required: "Email is required",
                    //     pattern: {
                    //       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    //       message: "Invalid email address",
                    //     },
                    //   })}
                    />
                  </div>
                  <div className="space-y-1">
                    <FormField
                      label="Last Name"
                      type="text"
                      placeholder="john@example.com"
                      required />
                  </div>
                </div>

                <div className="space-y-1">
                  <FormField
                      label="Email"
                      type="email"
                      placeholder="john@example.com"
                      required />
                </div>

                <div className="space-y-1">
                  <FormField
                      label="Contact Number"
                      type="number"
                      placeholder="john@example.com"
                      required />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-gray-600">
                    I'm interested in
                  </label>
                  <Select>
                    <SelectTrigger className="h-10 w-full">
                      <SelectValue placeholder="Select purpose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="buy">Buying a Property</SelectItem>
                      <SelectItem value="rent">Renting a Property</SelectItem>
                      <SelectItem value="sell">Selling a Property</SelectItem>
                      <SelectItem value="invest">Investment Advice</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1">
                    <FormField
  label="Message"
  textarea
  placeholder="Enter your message"
  required
  rows={10}
  className="resize-none"
/>
                  {/* <label className="text-xs font-medium text-gray-600">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your requirements…"
                    rows={4}
                    className="resize-none"
                  /> */}
                </div>

                <Button
                  type="submit"
                  className="w-full h-11 gap-2 font-semibold"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
