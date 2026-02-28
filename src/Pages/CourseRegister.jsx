import { useState, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  ArrowLeft, 
  User, 
  Mail, 
  Phone, 
  BookOpen, 
  CheckCircle,
  AlertCircle,
  Users
} from "lucide-react";
import { 
  calculateRegistrationFee, 
  formatCurrency
} from "../utils/calculations";

const CourseRegister = () => {
  const location = useLocation();
  
  // Get course info from navigation state
  const courseData = location.state?.courseData || null;
  const courseName = courseData?.title || "Selected Course";
  const coursePrice = courseData?.price || "TBD";
  
  // Check if user is logged in using useMemo
  const storedUser = useMemo(() => {
    try {
      const userStr = localStorage.getItem("user");
      return userStr ? JSON.parse(userStr) : null;
    } catch {
      return null;
    }
  }, []);
  
  const isLoggedIn = !!storedUser;
  const [isThirdParty, setIsThirdParty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Form states - pre-fill with stored user data
  const [formData, setFormData] = useState({
    firstName: storedUser?.firstName || "",
    lastName: storedUser?.lastName || "",
    email: storedUser?.email || "",
    phone: "",
    thirdPartyFirstName: "",
    thirdPartyLastName: "",
    thirdPartyEmail: "",
    thirdPartyPhone: "",
    thirdPartyRelation: "",
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Calculate registration fee using utility
  const feeBreakdown = useMemo(() => {
    return calculateRegistrationFee(courseData, isThirdParty);
  }, [courseData, isThirdParty]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const validateForm = () => {
    if (isThirdParty) {
      if (!formData.thirdPartyFirstName || !formData.thirdPartyLastName) {
        setError("Please enter the student's full name");
        return false;
      }
      if (!formData.thirdPartyEmail || !formData.thirdPartyEmail.includes("@")) {
        setError("Please enter a valid email address for the student");
        return false;
      }
      if (!formData.thirdPartyPhone) {
        setError("Please enter a phone number for the student");
        return false;
      }
      if (!formData.thirdPartyRelation) {
        setError("Please specify your relationship to the student");
        return false;
      }
    } else {
      if (!formData.firstName || !formData.lastName) {
        setError("Please enter your full name");
        return false;
      }
      if (!formData.email || !formData.email.includes("@")) {
        setError("Please enter a valid email address");
        return false;
      }
      if (!formData.phone) {
        setError("Please enter your phone number");
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    setError("");

    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setIsLoading(false);
    }, 1500);
  };

  // Redirect to sign in if not logged in
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="w-full max-w-md text-center">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle size={32} className="text-blue-600" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Sign In Required</h2>
            <p className="text-slate-600 mb-6">
              Please sign in to register for this course
            </p>
            <Link
              to="/signin"
              state={{ from: "/course-register", courseData }}
              className="inline-block w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Sign In
            </Link>
            <p className="mt-4 text-slate-600">
              Don't have an account?{" "}
              <Link
                to="/register"
                state={{ from: "/course-register", courseData, courseName }}
                className="text-blue-600 font-semibold hover:text-blue-700"
              >
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Success state
  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="w-full max-w-md text-center">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              {isThirdParty ? "Registration Successful!" : "You're Registered!"}
            </h2>
            <p className="text-slate-600 mb-2">
              {isThirdParty 
                ? `You have successfully registered ${formData.thirdPartyFirstName} ${formData.thirdPartyLastName} for`
                : `You have successfully registered for`}
            </p>
            <p className="text-lg font-semibold text-blue-600 mb-6">{courseName}</p>
            <p className="text-sm text-slate-500 mb-6">
              A confirmation email has been sent to your registered email address.
            </p>
            <Link
              to="/courses"
              className="inline-block w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Browse More Courses
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <Link
          to={courseData ? `/courses/${courseData.path}` : "/courses"}
          className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition"
        >
          <ArrowLeft size={20} />
          Back to Course
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div>
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Complete Your Registration</h1>
            <p className="text-slate-600">You're registering for <span className="font-semibold text-blue-600">{courseName}</span></p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                {/* Error Message */}
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-600">{error}</p>
                  </div>
                )}

                {/* Third Party Toggle */}
                <div className="mb-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={isThirdParty}
                        onChange={(e) => setIsThirdParty(e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-12 h-6 rounded-full transition-colors ${isThirdParty ? 'bg-blue-600' : 'bg-slate-300'}`}>
                        <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform mt-0.5 ${isThirdParty ? 'translate-x-6 ml-0.5' : 'translate-x-0.5'}`} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <span className="font-semibold text-slate-900 flex items-center gap-2">
                        <Users size={18} className="text-blue-600" />
                        Register for someone else
                      </span>
                      <p className="text-sm text-slate-600">
                        Enable this if you're registering on behalf of someone else (e.g., a child, employee, or friend)
                      </p>
                    </div>
                  </label>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {isThirdParty ? (
                    // Third Party Registration Form
                    <>
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                        <p className="text-sm text-amber-800">
                          <strong>Note:</strong> You are registering someone else for this course. 
                          Please provide the student's details below.
                        </p>
                      </div>

                      <h3 className="text-lg font-semibold text-slate-900 mb-4">Student Information</h3>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Student's First Name
                          </label>
                          <div className="relative">
                            <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                              type="text"
                              name="thirdPartyFirstName"
                              value={formData.thirdPartyFirstName}
                              onChange={handleChange}
                              required
                              placeholder="Student's first name"
                              className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Student's Last Name
                          </label>
                          <input
                            type="text"
                            name="thirdPartyLastName"
                            value={formData.thirdPartyLastName}
                            onChange={handleChange}
                            required
                            placeholder="Student's last name"
                            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Student's Email Address
                        </label>
                        <div className="relative">
                          <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="email"
                            name="thirdPartyEmail"
                            value={formData.thirdPartyEmail}
                            onChange={handleChange}
                            required
                            placeholder="student@example.com"
                            className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Student's Phone Number
                        </label>
                        <div className="relative">
                          <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="tel"
                            name="thirdPartyPhone"
                            value={formData.thirdPartyPhone}
                            onChange={handleChange}
                            required
                            placeholder="+234 800 000 0000"
                            className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Your Relationship to the Student
                        </label>
                        <select
                          name="thirdPartyRelation"
                          value={formData.thirdPartyRelation}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        >
                          <option value="">Select relationship</option>
                          <option value="parent">Parent</option>
                          <option value="guardian">Legal Guardian</option>
                          <option value="employer">Employer</option>
                          <option value="friend">Friend</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </>
                  ) : (
                    // Self Registration Form
                    <>
                      <h3 className="text-lg font-semibold text-slate-900 mb-4">Your Information</h3>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            First Name
                          </label>
                          <div className="relative">
                            <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              required
                              placeholder="Your first name"
                              className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            placeholder="Your last name"
                            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="you@example.com"
                            className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="+234 800 000 0000"
                            className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                  >
                    {isLoading 
                      ? "Processing..." 
                      : isThirdParty 
                        ? `Register ${formData.thirdPartyFirstName || "Student"} for ${courseName}` 
                        : `Complete Registration for ${courseName}`}
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sticky top-24">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Registration Summary</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 pb-4 border-b border-slate-200">
                    <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center">
                      <BookOpen size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{courseName}</p>
                      <p className="text-sm text-slate-500">Course Registration</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Course Fee</span>
                      <span className="font-medium text-slate-900">{coursePrice}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Registration</span>
                      <span className="font-medium text-green-600">{formatCurrency(feeBreakdown.baseFee)}</span>
                    </div>
                    {feeBreakdown.processingFee > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Processing Fee</span>
                        <span className="font-medium text-slate-900">{formatCurrency(feeBreakdown.processingFee)}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <div className="flex justify-between">
                      <span className="font-semibold text-slate-900">Total</span>
                      <span className="font-bold text-blue-600">{formatCurrency(feeBreakdown.total)}</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <p className="text-xs text-slate-500">
                      By registering, you agree to our Terms of Service and Privacy Policy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseRegister;
