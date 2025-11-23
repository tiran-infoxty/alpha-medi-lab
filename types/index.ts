/**
 * Centralized shared TypeScript types for the Alpha Medi Lab project.
 *
 * This file collects common interfaces used across multiple components so
 * they can be imported from a single location (e.g. `@/types` or `../types`).
 */

import React from 'react';

// ---- Packages -----------------------------------------------------------------

/** Package item shown in the Packages panel */
export interface PackageItem {
  name: string;
  price?: string; // some UI variants use `price`, others use `originalPrice`/`offerPrice`
  features?: string[];
  recommended?: boolean;
}

/** Package offer / promo used by the popup */
export interface PackageOffer {
  name: string;
  originalPrice: string;
  offerPrice: string;
  discountText?: string;
  includes: string[];
}

export type PackagesData = Record<string, PackageItem>;
export type PackageOffers = PackageOffer[];

// ---- Services -----------------------------------------------------------------

export interface Service {
  id: string;
  title: string;
  icon?: string;
  shortDesc?: string;
  fullDesc?: string;
  tests?: string[];
  specialties?: string[];
}

// ---- Branches -----------------------------------------------------------------

export interface BranchInfo {
  name: string;
  address: string;
  phone: string;
  hours?: string;
  services: string[];
  image?: string;
  locationLink?: string;
}

export type BranchesData = Record<string, BranchInfo>;

// ---- Contact & Forms ---------------------------------------------------------

export interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactInfo {
  icon?: string;
  title: string;
  details: string;
}

// ---- UI / Small types --------------------------------------------------------

export interface MousePosition {
  x: number;
  y: number;
}

export interface PackagePopupProps {
  showPopup: boolean;
  setShowPopup: (show: boolean) => void;
}

export interface NavLink {
  id: string;
  label: string;
  path: string;
}

export interface NavbarProps {
  activeSection: string;
}

// ---- Dark Mode Context ------------------------------------------------------

export interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export interface DarkModeProviderProps {
  children: React.ReactNode;
}

// ---- Misc helpers ------------------------------------------------------------

export interface StatItem {
  number: string;
  label: string;
}

// Keep file focused on declarations only. Add more shared types here as needed.
