// Course Price Calculations

/**
 * Calculate course price with optional discount
 * @param {string} price - Original price string (e.g., "₦150,000")
 * @param {number} discountPercent - Discount percentage (0-100)
 * @returns {object} - Original price, discount amount, and final price as numbers
 */
export const calculateDiscountedPrice = (price, discountPercent = 0) => {
  // Remove currency symbol and commas to get numeric value
  const numericPrice = parseFloat(price.replace(/[^0-9.-]+/g, ""));
  
  if (isNaN(numericPrice)) {
    return { original: 0, discount: 0, final: 0, originalString: price };
  }
  
  const discountAmount = (numericPrice * discountPercent) / 100;
  const finalPrice = numericPrice - discountAmount;
  
  return {
    original: numericPrice,
    discount: discountAmount,
    final: finalPrice,
    originalString: price,
    discountPercent
  };
};

/**
 * Format number as currency
 * @param {number} amount - Amount to format
 * @param {string} currency - Currency symbol (default: ₦)
 * @returns {string} - Formatted currency string
 */
export const formatCurrency = (amount, currency = "₦") => {
  return `${currency}${amount.toLocaleString("en-NG")}`;
};

/**
 * Calculate payment installments
 * @param {string} price - Course price string
 * @param {number} months - Number of months for payment plan
 * @returns {object} - Monthly payment amount and total
 */
export const calculateInstallment = (price, months = 3) => {
  const numericPrice = parseFloat(price.replace(/[^0-9.-]+/g, ""));
  
  if (isNaN(numericPrice) || months <= 0) {
    return { monthly: 0, total: 0, months: 0 };
  }
  
  // Add 5% interest for installment plans
  const totalWithInterest = numericPrice * 1.05;
  const monthlyPayment = totalWithInterest / months;
  
  return {
    monthly: Math.ceil(monthlyPayment),
    total: Math.ceil(totalWithInterest),
    months,
    interest: 5
  };
};

// Date Calculations

/**
 * Calculate course end date based on duration
 * @param {string} duration - Duration string (e.g., "6 Months", "3 Months")
 * @param {Date} startDate - Start date (default: today)
 * @returns {Date} - End date
 */
export const calculateEndDate = (duration, startDate = new Date()) => {
  const monthsMatch = duration.match(/(\d+)\s*Months?/i);
  
  if (!monthsMatch) {
    return startDate;
  }
  
  const months = parseInt(monthsMatch[1], 10);
  const endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth() + months);
  
  return endDate;
};

/**
 * Get course start date (next available cohort)
 * @returns {Date} - Next available start date
 */
export const getNextStartDate = () => {
  const today = new Date();
  const nextMonth = new Date(today);
  nextMonth.setMonth(nextMonth.getMonth() + 1);
  
  // Set to first day of next month
  return new Date(nextMonth.getFullYear(), nextMonth.getMonth(), 1);
};

/**
 * Format date for display
 * @param {Date|string} date - Date to format
 * @returns {string} - Formatted date string
 */
export const formatDate = (date) => {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
};

/**
 * Get time remaining until course starts
 * @param {Date|string} startDate - Course start date
 * @returns {object} - Days, weeks, months remaining
 */
export const getTimeUntilStart = (startDate) => {
  const start = new Date(startDate);
  const today = new Date();
  const diffTime = start - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return {
    days: diffDays,
    weeks: Math.ceil(diffDays / 7),
    months: Math.ceil(diffDays / 30),
    isPast: diffDays < 0,
    isStarting: diffDays >= 0 && diffDays <= 7
  };
};

// Search & Filter Calculations

/**
 * Calculate search relevance score
 * @param {string} query - Search query
 * @param {object} course - Course object to score
 * @returns {number} - Relevance score (higher = more relevant)
 */
export const calculateSearchRelevance = (query, course) => {
  const q = query.toLowerCase();
  let score = 0;
  
  // Title match (highest weight)
  if (course.title.toLowerCase().includes(q)) {
    score += 10;
    if (course.title.toLowerCase().startsWith(q)) {
      score += 5;
    }
  }
  
  // Description match
  if (course.desc && course.desc.toLowerCase().includes(q)) {
    score += 5;
  }
  
  // Level match
  if (course.level && course.level.toLowerCase().includes(q)) {
    score += 3;
  }
  
  return score;
};

/**
 * Sort courses by various criteria
 * @param {array} courses - Array of course objects
 * @param {string} sortBy - Sort criteria (price-asc, price-desc, duration, name, level)
 * @returns {array} - Sorted course array
 */
export const sortCourses = (courses, sortBy = "name") => {
  const sorted = [...courses];
  
  switch (sortBy) {
    case "price-asc":
      return sorted.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ""));
        const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ""));
        return priceA - priceB;
      });
      
    case "price-desc":
      return sorted.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ""));
        const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ""));
        return priceB - priceA;
      });
      
    case "duration":
      return sorted.sort((a, b) => {
        const durationA = parseInt(a.duration) || 0;
        const durationB = parseInt(b.duration) || 0;
        return durationA - durationB;
      });
      
    case "name":
    default:
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
  }
};

// Form Validation Calculations

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - Is valid email
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number (Nigerian format)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - Is valid phone number
 */
export const isValidPhone = (phone) => {
  // Nigerian phone formats: +234, 234, 0 followed by 10 digits
  const phoneRegex = /^(\+234|234|0)[789]\d{9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
};

/**
 * Calculate password strength
 * @param {string} password - Password to check
 * @returns {object} - Strength score and feedback
 */
export const calculatePasswordStrength = (password) => {
  let score = 0;
  const feedback = [];
  
  if (!password) {
    return { score: 0, level: "none", feedback: ["Enter a password"] };
  }
  
  // Length check
  if (password.length >= 8) {
    score += 1;
  } else {
    feedback.push("At least 8 characters");
  }
  
  // Uppercase check
  if (/[A-Z]/.test(password)) {
    score += 1;
  } else {
    feedback.push("Add uppercase letter");
  }
  
  // Lowercase check
  if (/[a-z]/.test(password)) {
    score += 1;
  } else {
    feedback.push("Add lowercase letter");
  }
  
  // Number check
  if (/[0-9]/.test(password)) {
    score += 1;
  } else {
    feedback.push("Add a number");
  }
  
  // Special character check
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    score += 1;
  } else {
    feedback.push("Add special character");
  }
  
  let level = "weak";
  if (score >= 5) level = "strong";
  else if (score >= 3) level = "medium";
  
  return { score, level, feedback };
};

// Registration Calculations

/**
 * Calculate registration fee
 * @param {object} course - Course object
 * @param {boolean} isThirdParty - Is third party registration
 * @returns {object} - Fee breakdown
 */
export const calculateRegistrationFee = (course, isThirdParty = false) => {
  const coursePrice = parseFloat(course.price.replace(/[^0-9.-]+/g, ""));
  
  const baseFee = 0; // Free registration
  const processingFee = isThirdParty ? 500 : 0; // Additional fee for third party
  const total = baseFee + processingFee;
  
  return {
    coursePrice,
    baseFee,
    processingFee,
    total,
    isThirdParty
  };
};

// User Session Calculations

/**
 * Check if user session is valid
 * @param {string} sessionExpiry - Session expiry timestamp
 * @returns {boolean} - Is session valid
 */
export const isSessionValid = (sessionExpiry) => {
  if (!sessionExpiry) return false;
  return new Date(sessionExpiry) > new Date();
};

/**
 * Calculate session time remaining
 * @param {string} sessionExpiry - Session expiry timestamp
 * @returns {object} - Time remaining
 */
export const getSessionTimeRemaining = (sessionExpiry) => {
  const expiry = new Date(sessionExpiry);
  const now = new Date();
  const diffMs = expiry - now;
  const diffMins = Math.floor(diffMs / 60000);
  
  if (diffMins <= 0) {
    return { expired: true, minutes: 0 };
  }
  
  return {
    expired: false,
    minutes: diffMins,
    hours: Math.floor(diffMins / 60),
    days: Math.floor(diffMins / 1440)
  };
};

export default {
  calculateDiscountedPrice,
  formatCurrency,
  calculateInstallment,
  calculateEndDate,
  getNextStartDate,
  formatDate,
  getTimeUntilStart,
  calculateSearchRelevance,
  sortCourses,
  isValidEmail,
  isValidPhone,
  calculatePasswordStrength,
  calculateRegistrationFee,
  isSessionValid,
  getSessionTimeRemaining
};
