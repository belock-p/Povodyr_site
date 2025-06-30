import React, { useRef } from "react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
}

const testimonials: TestimonialProps[] = [{
  content: "Не вистачає чогось, що допоможе зорієнтуватися і почуватися впевнено, без постійної залежності від інших",
  author: "Оксана",
  role: "втрата зору після поранення",
  gradient: "from-blue-700 via-indigo-800 to-purple-900",
  backgroundImage: "/Providnyk_site/background-section1.png"
}, {
  content: "Мені потрібен інструмент, який працює тут і зараз, без зайвих кроків і англійських меню.",
  author: "Сергій",
  role: "тотальна втрата зору",
  gradient: "from-indigo-900 via-purple-800 to-orange-500",
  backgroundImage: "/Providnyk_site/background-section2.png"
}, {
  content: "Не хочу бути тягарем — хочу бути самостійною.",
  author: "Аліна",
  role: "часткова втрата зору",
  gradient: "from-purple-800 via-pink-700 to-red-500",
  backgroundImage: "/Providnyk_site/background-section3.png"
}, {
  content: "Було б добре мати голосового помічника, який може підказати, що переді мною — швидко, просто, без складних дій.",
  author: "Михайло",
  role: "без зору із народження",
  gradient: "from-orange-600 via-red-500 to-purple-600",
  backgroundImage: "/Providnyk_site/background-section1.png"
}];

const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/Providnyk_site/background-section1.png"
}: TestimonialProps) => {
  return <div className="bg-cover bg-center rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden" style={{
    backgroundImage: `url('${backgroundImage}')`
  }}>
      <div className="absolute top-0 right-0 w-24 h-24 bg-white z-10"></div>
      
      <div className="relative z-0">
        <p className="text-xl mb-8 font-medium leading-relaxed pr-20">{`"${content}"`}</p>
        <div>
          <h4 className="font-semibold text-xl">{author}</h4>
          <p className="text-white/80">{role}</p>
        </div>
      </div>
    </div>;
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return <section className="py-12 bg-white relative" id="testimonials" ref={sectionRef}> {/* Reduced from py-20 */}
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">04</span>
            <span>Відгуки</span>
          </div>
        </div>
        
        <h2 className="text-5xl font-display font-bold mb-12 text-left">Відгуки</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} content={testimonial.content} author={testimonial.author} role={testimonial.role} gradient={testimonial.gradient} backgroundImage={testimonial.backgroundImage} />)}
        </div>
      </div>
    </section>;
};

export default Testimonials;
