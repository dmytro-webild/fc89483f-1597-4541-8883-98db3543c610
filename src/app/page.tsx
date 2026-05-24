"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Award, Check, Leaf, Shield } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="small"
        sizing="largeSmallSizeMediumTitles"
        background="blurBottom"
        cardStyle="gradient-bordered"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Reviews",
          id: "#reviews",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="In-Sight Mechanical"
      button={{
        text: "Free Estimate",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "radial-gradient",
      }}
      title="Honest HVAC. Luxury-Level Service."
      description="Premium heating & cooling installations, repairs, and maintenance with the honesty, friendliness, and craftsmanship homeowners rave about."
      buttons={[
        {
          text: "Schedule Service",
          href: "#contact",
        },
        {
          text: "Call Now",
          href: "tel:+1000000000",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/young-man-room-with-solid-fuel-boiler-working-biofuel-economical-heating_169016-15373.jpg?_wi=1"
      mediaAnimation="blur-reveal"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/man-loads-pellets-solid-fuel-boiler-working-with-biofuels-economical-heating_169016-14811.jpg",
          alt: "Technician checking boiler",
        },
        {
          src: "http://img.b2bpic.net/free-photo/high-angle-people-sitting-by-fireplace_23-2149411897.jpg",
          alt: "Cozy family home",
        },
        {
          src: "http://img.b2bpic.net/free-photo/low-angle-man-working-as-plumber_23-2150746301.jpg",
          alt: "Plumber working",
        },
        {
          src: "http://img.b2bpic.net/free-photo/3d-rendering-hydraulic-elements_23-2149333324.jpg",
          alt: "System diagram",
        },
        {
          src: "http://img.b2bpic.net/free-photo/team-replacing-old-air-conditioner_482257-78499.jpg",
          alt: "Team work",
        },
      ]}
      avatarText="Trusted by 5,000+ local homeowners"
      marqueeItems={[
        {
          type: "text",
          text: "24/7 Priority Support",
        },
        {
          type: "text-icon",
          text: "NATE Certified",
          icon: Award,
        },
        {
          type: "text",
          text: "Licensed & Insured",
        },
        {
          type: "text-icon",
          text: "Eco-Friendly",
          icon: Leaf,
        },
        {
          type: "text",
          text: "Lifetime Warranty",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="About Our Craft"
      title="Quality You Can Trust"
      description="We treat every home with respect and every system with expert attention."
      subdescription="With over 15 years in the industry, our mission is to provide HVAC solutions that bring comfort back into your home."
      icon={Shield}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-skillful-technician-commissioned-outside-hvac-system-routine-maintenance-looking-refrigerant-issues-meticulous-mechanic-doing-air-conditioner-inspection-writing-data-tablet_482257-66265.jpg?_wi=1"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Installation",
          description: "High-efficiency systems for new or existing builds.",
          items: [
            {
              icon: Check,
              text: "Expert installation",
            },
            {
              icon: Check,
              text: "Premium units",
            },
          ],
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/worker-repairing-water-heater_23-2149334226.jpg",
          },
          reverse: false,
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-room-with-solid-fuel-boiler-working-biofuel-economical-heating_169016-15373.jpg?_wi=2",
          imageAlt: "hvac tools close up",
        },
        {
          title: "Maintenance",
          description: "Keep your system running at peak performance year round.",
          items: [
            {
              icon: Check,
              text: "Seasonal checkups",
            },
            {
              icon: Check,
              text: "System tuning",
            },
          ],
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/african-american-worker-sweeping-away-loose-debris-accumulated-around-air-conditioner-base-trained-engineer-cleaning-hvac-system-body-control-panel-with-dusting-brush-tool-remove-loose-dirt_482257-70162.jpg",
          },
          reverse: true,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-skillful-technician-commissioned-outside-hvac-system-routine-maintenance-looking-refrigerant-issues-meticulous-mechanic-doing-air-conditioner-inspection-writing-data-tablet_482257-66265.jpg?_wi=2",
          imageAlt: "hvac tools close up",
        },
        {
          title: "Repairs",
          description: "Rapid response team for all heating and cooling emergencies.",
          items: [
            {
              icon: Check,
              text: "24/7 Availability",
            },
            {
              icon: Check,
              text: "Certified techs",
            },
          ],
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/happy-mechanic-working-computer-auto-repair-shop_637285-9759.jpg",
          },
          reverse: false,
          imageSrc: "http://img.b2bpic.net/free-photo/young-loader-showing-thumbs-up-uniform-looking-happy-front-view_176474-21432.jpg?_wi=1",
          imageAlt: "hvac tools close up",
        },
      ]}
      title="Our Professional Services"
      description="Comprehensive heating, ventilation, and air conditioning solutions for modern comfort."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "5★",
          description: "Avg Customer Rating",
        },
        {
          id: "m2",
          value: "15+",
          description: "Years of Experience",
        },
        {
          id: "m3",
          value: "99%",
          description: "Happy Homeowners",
        },
      ]}
      title="Results You Can Count On"
      description="Hard work and integrity drive our success."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Johnson",
          handle: "@sarahj",
          testimonial: "Truly the most honest HVAC team I have ever worked with.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-loader-showing-thumbs-up-uniform-looking-happy-front-view_176474-21432.jpg?_wi=2",
        },
        {
          id: "2",
          name: "Mark Wilson",
          handle: "@markw",
          testimonial: "Fast service, fair pricing, and expert craftsmanship.",
          imageSrc: "http://img.b2bpic.net/free-photo/view-attractive-woman-doing-selfie-camera_197531-33575.jpg",
        },
        {
          id: "3",
          name: "Emily Chen",
          handle: "@emilyc",
          testimonial: "Responsive, friendly, and they fixed my system in no time.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-cute-couple-repairs-room_1157-25159.jpg",
        },
        {
          id: "4",
          name: "James Lee",
          handle: "@jamesl",
          testimonial: "Insight Mechanical is the gold standard for luxury HVAC.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-view-caucasian-business-woman-sitting-chair-smiling-camera_197531-32293.jpg",
        },
        {
          id: "5",
          name: "Jessica Alba",
          handle: "@jessicaa",
          testimonial: "Super professional and very clean work. Highly recommended.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-male-call-center-operator-wearing-headset-sitting-desk-with-office-tools-looking-laptop-showing-thumb-up-okay-gesture_141793-121302.jpg",
        },
      ]}
      title="What Homeowners Say"
      description="Authentic feedback from our satisfied clients."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",
          title: "How often should I service my AC?",
          content: "We recommend professional maintenance at least once a year.",
        },
        {
          id: "f2",
          title: "Do you offer emergency repairs?",
          content: "Yes, we have 24/7 response teams for urgent issues.",
        },
        {
          id: "f3",
          title: "What brands do you service?",
          content: "We work with all major brands and high-efficiency systems.",
        },
      ]}
      title="Common HVAC Questions"
      description="Answers to help you make the best decision for your home."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      title="Ready for Comfort?"
      description="Request your free consultation today."
      buttonText="Submit Request"
      tag="Get in touch"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="In-Sight Mechanical"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Installation",
              href: "#services",
            },
            {
              label: "Maintenance",
              href: "#services",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
