/**
 * Smooth scroll to a section with header offset
 * @param sectionId - ID of the section to scroll to (with or without #)
 * @param offset - Additional offset in pixels (default: 80)
 */
export const scrollToSection = (sectionId: string, offset: number = 80): void => {
  const id = sectionId.startsWith('#') ? sectionId.slice(1) : sectionId;
  const element = document.getElementById(id);
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Navigation infaillible vers le formulaire de contact.
 *
 * - Si #contact existe déjà sur la page → scroll smooth immédiat
 * - Sinon → navigation NATIVE (window.location) vers la homepage
 *   correspondant à la langue courante, avec ancre #contact
 *   Le navigateur gère lui-même le scroll après le load (100% fiable,
 *   contrairement au navigate() de React Router qui peut perdre le hash)
 */
export const goToContact = (offset: number = 80): void => {
  if (typeof window === 'undefined') return;
  const existing = document.getElementById('contact');
  if (existing) {
    const pos = existing.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: pos - offset, behavior: 'smooth' });
    return;
  }
  const path = window.location.pathname;
  const langPath =
    path === '/nl' || path.startsWith('/nl/') ? '/nl'
    : path === '/en' || path.startsWith('/en/') ? '/en'
    : '';
  window.location.href = `${langPath}/#contact`;
};

/**
 * Get formatted WhatsApp URL
 * @param phoneNumber - Phone number (e.g., "+32 496 84 73 74")
 * @param message - Optional pre-filled message
 */
export const getWhatsAppUrl = (phoneNumber: string, message?: string): string => {
  const cleanNumber = phoneNumber.replace(/\D/g, '');
  const baseUrl = `https://wa.me/${cleanNumber}`;
  
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  
  return baseUrl;
};
