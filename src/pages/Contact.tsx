import { Mail, Target } from "lucide-react";
import { useLocation } from "wouter";

function Contact() {
  const [, navigate] = useLocation();

  const handleInquiry = () => {
    navigate("/contact-form");
  };
  return (
    <div className="max-w-3xl mx-auto mt-8 px-4 sm:px-6 lg:px-8 py-20 font-inter">
      <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
        Get Involved
      </h2>
      <p className="text-xl text-gray-600 mb-12 text-center">
        Interested in collaborating or learning more about our work? We welcome
        inquiries from researchers, practitioners, and community organizations.
      </p>
      <div className="bg-white p-10 rounded-lg shadow-lg border border-gray-100">
        <div className="space-y-8">
          <div className="flex items-start">
            <Mail className="h-6 w-6 text-emerald-600 mt-1 mr-4 shrink-0" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Email Us</h3>
              <p className="text-gray-600">graduateresearchclinic@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start">
            <Target className="h-6 w-6 text-emerald-600 mt-1 mr-4 shrink-0" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                Research Location
              </h3>
              <p className="text-gray-600">Ibadan, Nigeria.</p>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4 text-lg">
              Collaboration Opportunities
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We're open to partnerships with academic institutions, NGOs,
              government agencies, and community organizations working on
              sustainable urban development and circular economy initiatives.
            </p>
            <button
              onClick={handleInquiry}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 rounded-md font-semibold transition-colors"
            >
              Send Inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
