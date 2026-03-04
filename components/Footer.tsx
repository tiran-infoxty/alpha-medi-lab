import Link from "next/link";
import {
  FlaskConical,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center size-8 rounded bg-blue-600 text-white">
                <FlaskConical size={20} />
              </div>
              <span className="text-xl font-bold">Alpha Medi Lab</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Leading the way in medical diagnostics with cutting-edge
              technology and a commitment to patient care.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-blue-600 transition-colors"
                >
                  Find a Lab
                </Link>
              </li>
              <li>
                <Link
                  href="/packages"
                  className="hover:text-blue-600 transition-colors"
                >
                  Health Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/doctors"
                  className="hover:text-blue-600 transition-colors"
                >
                  For Doctors
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Microbiology
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Biochemistry
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Hematology
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Molecular Biology
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Histopathology
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-600 shrink-0" size={20} />

                <a
                  href="https://www.google.com/maps/place/Alpha+Medi+Lab/@6.9714668,79.9165437,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae2581d02273b3b:0xdfeddca6ff602652!8m2!3d6.9714668!4d79.9165437!16s%2Fg%2F11c61bcv_w?hl=en&entry=ttu&g_ep=EgoyMDI2MDMwMS4xIKXMDSoASAFQAw%3D%3D"
                  className="flex items-center gap-2 text-blue-700 dark:text-blue-300 font-semibold text-sm hover:underline"
                >
                  <span>
                    123 Medical Center Dr,
                    <br />
                    Tech City, TC 90210
                  </span>{" "}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-blue-600 shrink-0" size={20} />
                <a
                  href="tel:+94718227704"
                  className="flex items-center gap-2 text-blue-700 dark:text-blue-300 font-semibold text-sm hover:underline"
                >
                  <span>+94 71 822 7704</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-blue-600 shrink-0" size={20} />
                   <a
                  href="mailto:info@alphamedilab.lk"
                  className="flex items-center gap-2 text-blue-700 dark:text-blue-300 font-semibold text-sm hover:underline"
                >
                  <span>info@alphamedilab.lk</span>
                </a>
    
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © 2024 Alpha Medi Lab. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
