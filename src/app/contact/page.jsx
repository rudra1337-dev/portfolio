"use client";
import React from "react";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";
import emailjs from "@emailjs/browser";
const contactMethods = [
    {
        icon: Mail,
        label: "Email",
        value: personalInfo.email,
        href: `mailto:${personalInfo.email}`,
        description: "Drop me a line anytime",
    },
    {
        icon: Phone,
        label: "Phone",
        value: personalInfo.phone,
        href: `tel:${personalInfo.phone}`,
        description: "Mon-Fri from 9am to 6pm",
    },
    {
        icon: MapPin,
        label: "Location",
        value: personalInfo.location,
        href: null,
        description: "Available for remote work",
    },
];
const socialLinks = [
    { icon: Github, href: personalInfo.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: personalInfo.twitter, label: "Twitter" },
];
export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        //EMAIL JS USED HERE
        try {
            // Send the email
            await emailjs.send("service_portfolio", // Your Service ID
            "template_5a9usum", // Your Template ID
            {
                name: formData.name, // Sender name
                email: formData.email, // Sender email (Reply-to)
                subject: formData.subject,
                message: formData.message,
                time: new Date().toLocaleString(), // Optional, for your template
            }, "rwbHAW5UN5xopcYG_" // Your Public Key
            );
            // Success feedback
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: "", email: "", subject: "", message: "" });
            // Hide success message after 5 seconds
            setTimeout(() => setIsSubmitted(false), 5000);
        }
        catch (error) {
            console.error("EmailJS Error:", error);
            setIsSubmitting(false);
            alert("Oops! Something went wrong. Please try again.");
        }
    };
    return (<div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have a project in mind or just want to chat? I&apos;d love to hear from you.
              Fill out the form below or reach out through any of the contact methods.
            </p>
          </div>
        </div>
      </section>







      {/* Contact Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Contact Info */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8">
                  Feel free to reach out through any of these channels. I typically respond within 24 hours.
                </p>









                {/* Contact Methods */}
                <div className="space-y-6 mb-10">
                  {contactMethods.map((method) => (<div key={method.label} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                        <method.icon className="h-5 w-5 text-foreground"/>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{method.label}</h3>
                        {method.href ? (<a href={method.href} className="text-muted-foreground hover:text-primary transition-colors">
                            {method.value}
                          </a>) : (<p className="text-muted-foreground">{method.value}</p>)}
                        <p className="text-sm text-muted-foreground mt-1">
                          {method.description}
                        </p>
                      </div>
                    </div>))}
                </div>











                {/* Social Links */}
                <div>
                  <h3 className="font-semibold text-foreground mb-4">
                    Connect with me
                  </h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (<a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300" aria-label={social.label}>
                        <social.icon className="h-5 w-5"/>
                      </a>))}
                  </div>
                </div>
              </div>











              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-card border border-border rounded-2xl p-6 lg:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Send a Message
                  </h2>

                  {isSubmitted ? (<div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                        <CheckCircle2 className="h-8 w-8 text-green-500"/>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. I&apos;ll get back to you soon.
                      </p>
                    </div>) : (<form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                            Your Name
                          </label>
                          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"/>
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Email Address
                          </label>
                          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"/>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                          Subject
                        </label>
                        <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
                          <option value="">Select a subject</option>
                          <option value="project">Project Inquiry</option>
                          <option value="job">Job Opportunity</option>
                          <option value="collaboration">Collaboration</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Message
                        </label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} placeholder="Tell me about your project or inquiry..." className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"/>
                      </div>

                      <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                        {isSubmitting ? (<>
                            <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"/>
                            Sending...
                          </>) : (<>
                            <Send className="h-4 w-4"/>
                            Send Message
                          </>)}
                      </Button>
                    </form>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Additional Info Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Looking Forward to Hearing From You
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Whether you have a question, want to discuss a project, or just want to say hello,
              I&apos;m always open to connecting with fellow developers and potential collaborators.
              Let&apos;s build something amazing together!
            </p>
          </div>
        </div>
      </section>
    </div>);
}
