"use client";

import { useState } from "react";
import Icon from "../ui/Icon";
import styles from "./ContactForm.module.scss";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    preferredContactTime: "",
    monthlyLeadGoal: "",
    currentWebsite: "",
    message: "",
    honeypot: "", // Spam protection
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ 
          name: "", 
          email: "", 
          phone: "",
          businessType: "",
          preferredContactTime: "",
          monthlyLeadGoal: "",
          currentWebsite: "",
          message: "", 
          honeypot: "" 
        });
      } else {
        setSubmitStatus("error");
        console.error("Form submission error:", data.error);
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.contactFormCard}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="john@company.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Phone <span style={{ fontSize: "0.85rem", fontWeight: "normal", color: "#666" }}>(We'll call during USA business hours)</span></label>
          <input
            type="tel"
            name="phone"
            placeholder="+1 (555) 123-4567"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Business Type</label>
          <select
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            required
          >
            <option value="">Select your business type</option>
            <option value="plumber">Plumber</option>
            <option value="electrician">Electrician</option>
            <option value="hvac">HVAC</option>
            <option value="landscaping">Landscaping</option>
            <option value="lawyer">Lawyer / Legal Services</option>
            <option value="accountant">Accountant</option>
            <option value="consultant">Consultant</option>
            <option value="dentist">Dentist</option>
            <option value="chiropractor">Chiropractor</option>
            <option value="fitness">Fitness / Personal Trainer</option>
            <option value="salon">Salon / Beauty</option>
            <option value="other">Other Service Business</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>Preferred Contact Time</label>
          <select
            name="preferredContactTime"
            value={formData.preferredContactTime}
            onChange={handleChange}
          >
            <option value="">Select preferred time</option>
            <option value="morning-est">Morning (9 AM - 12 PM EST)</option>
            <option value="afternoon-est">Afternoon (12 PM - 5 PM EST)</option>
            <option value="evening-est">Evening (5 PM - 8 PM EST)</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>Monthly Lead Goal</label>
          <select
            name="monthlyLeadGoal"
            value={formData.monthlyLeadGoal}
            onChange={handleChange}
          >
            <option value="">Select your goal</option>
            <option value="10-20">10-20 leads per month</option>
            <option value="21-50">21-50 leads per month</option>
            <option value="51-100">51-100 leads per month</option>
            <option value="100+">100+ leads per month</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>Current Website (Optional)</label>
          <input
            type="url"
            name="currentWebsite"
            placeholder="https://yourwebsite.com"
            value={formData.currentWebsite}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Message (Optional)</label>
          <textarea
            name="message"
            rows={4}
            placeholder="Tell us about your business and goals..."
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        {/* Honeypot field for spam protection */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />
        {submitStatus === "success" && (
          <div className={styles.successMessage}>
            Message sent successfully! We'll get back to you within 24 hours.
          </div>
        )}
        {submitStatus === "error" && (
          <div className={styles.errorMessage}>
            Something went wrong. Please try again later.
          </div>
        )}
        <button
          type="submit"
          className={`btn-primary button ${styles.submitButton}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

