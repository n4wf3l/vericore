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
 * Get formatted WhatsApp URL
 * @param phoneNumber - Phone number (e.g., "+32 396 847 374")
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
