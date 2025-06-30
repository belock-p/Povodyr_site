import React, { useState } from "react";
import { toast } from "sonner";
const DetailsSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formData.fullName || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Demo form submission
    toast.success("Request submitted successfully!");

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      company: ""
    });
    
      const TELEGRAM_TOKEN = "7724608200:AAGXoUPrYwVW95-z2VTaEXUexfKuloXhbxE";
      const CHAT_ID = "-1002665199535";
    
      const message = `
    🔔 Нова заявка з сайту:
    👤 Ім'я: ${formData.fullName}
    📧 Email: ${formData.email}
    🏢 Організація: ${formData.company || 'не вказано'}
      `;
    
      fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message
        })
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.ok) {
            toast.success("Заявка успішно надіслана!");
            setFormData({
              fullName: "",
              email: "",
              company: ""
            });
          } else {
            toast.error("Помилка надсилання в Telegram.");
            console.error("Telegram error", data);
          }
        })
        .catch((err) => {
          toast.error("Помилка підключення до Telegram.");
          console.error(err);
        });
    };
  };
  return <section id="details" className="w-full bg-white py-0">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          {/* Left Card - The Details */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant">
            {/* Card Header with background image instead of gradient */}
            <div className="relative h-48 sm:h-64 p-6 sm:p-8 flex items-end" style={{
            backgroundImage: "url('/Povodyr_site/background-section3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
              <h2 className="text-2xl sm:text-3xl font-display text-white font-bold">
                Деталі
              </h2>
            </div>
            
            {/* Card Content */}
            <div className="bg-white p-4 sm:p-8" style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #ECECEC"
          }}>
              <h3 className="text-lg sm:text-xl font-display mb-6 sm:mb-8">
                Від ідеї до реального інструменту, що змінює життя
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-dark-900 flex items-center justify-center mt-1 flex-shrink-0">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
                      <span className="font-semibold text-base">Доступність:</span> працює навіть без інтернету
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-dark-900 flex items-center justify-center mt-1 flex-shrink-0">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
                      <span className="font-semibold text-base">Гнучкість:</span> адаптується до рівня зору та потреб користувача
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-dark-900 flex items-center justify-center mt-1 flex-shrink-0">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
                      <span className="font-semibold text-base">Швидкість:</span> миттєве розпізнавання та голосова підтримка
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-dark-900 flex items-center justify-center mt-1 flex-shrink-0">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
                      <span className="font-semibold text-base">Надійність:</span> не потребує складного налаштування
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-dark-900 flex items-center justify-center mt-1 flex-shrink-0">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
                      <span className="font-semibold text-base">Свобода:</span> допомагає бути незалежним у повсякденному житті
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Contact Form */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant">
            {/* Card Header with background image instead of gradient */}
            <div className="relative h-48 sm:h-64 p-6 sm:p-8 flex flex-col items-start" style={{
            backgroundImage: "url('/Povodyr_site/background-section1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
              <div className="inline-block px-4 sm:px-6 py-2 border border-white text-white rounded-full text-xs mb-4">
                Залишити заявку
              </div>
              <h2 className="text-2xl sm:text-3xl font-display text-white font-bold mt-auto">
                Спробуйте самі
              </h2>
            </div>
            
            {/* Card Content - Form */}
            <div className="bg-white p-4 sm:p-8" style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #ECECEC"
          }}>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <input 
                    type="text" 
                    name="fullName" 
                    value={formData.fullName} 
                    onChange={handleChange} 
                    placeholder="Ваше ім'я та прізвище" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent" 
                    required 
                  />
                </div>
                
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Електронна пошта" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent" 
                    required 
                  />
                </div>
                
                <div>
                  <input 
                    type="text" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    placeholder="Організація (необов'язково)" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent" 
                  />
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="w-full px-6 py-3 bg-pulse-500 hover:bg-pulse-600 text-white font-medium rounded-full transition-colors duration-300"
                  >
                    Надіслати заявку
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default DetailsSection;