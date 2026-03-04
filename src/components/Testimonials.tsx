import { Quote, Star, Building, Calendar } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Zanele Mvinjelwa",
    role: "Project & Systems Administrator",
    company: "Mandela Legacy",
    content: "Onwaba's expertise transformed our entire product suite. Her ability to bridge complex concepts with practical business applications delivered results that exceeded our expectations. The UML diagram she built for our project was our go to refrence until the end of the ptoject",
    rating: 5,
    date: "January 2026",
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Sinazo Mafilika",
    role: "Junior Fullstack Engineer",
    company: "Mandela Legacy",
    content: "Working with Onwaba was a game changer for our data pipeline infrastructure. Her systematic approach to ETL development and attention to data quality  saved us in maintenance. The multi tenant architecture she designed is both secure and scalable.",
    rating: 5,
    date: "January 2026",
    avatar: "MC"
  },
  {
    id: 3,
    name: "Dr. M Mbodila",
    role: "Manager",
    company: "Walter Sisulu University",
    content: "Onwaba's analytical skills and technical proficiency made him an invaluable asset to our academic research team. Her data visualization work helped us identify critical patterns in student performance data, leading to improved academic support systems and better student outcomes.",
    rating: 5,
    date: "December 2022",
    avatar: "AR"
  },
  {
    id: 4,
    name: "Simbulele Tauzeni",
    role: "QA INTERN",
    company: "UVU Capaciti",
    content: "Onwaba's full-stack capabilities are truly impressive. She seamlessly handled both frontend and backend challenges while maintaining clean, maintainable code. His Docker expertise and cloud deployment skills helped us deliever all projects on time",
    rating: 5,
    date: "May 2024",
    avatar: "DT"
  },
  
];

const renderStars = (rating: number) =>
  Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`w-4 h-4 ${i < rating ? 'text-brand-green fill-brand-green' : 'text-gray-600'}`}
    />
  ));

export default function Testimonials() {
  return (
    <div className="container mx-auto px-6 md:px-8 lg:px-16 xl:px-24">
      <div className="bg-[#0d1117] border border-[#30363d] rounded-md p-6 hover-lift">
        <div className="max-w-5xl mx-auto">
          {/* header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-white mb-3">Client Testimonials</h1>
            <div className="w-20 h-1 bg-brand-green mx-auto mb-4" />
            <p className="text-gray-400 max-w-2xl mx-auto">
              What colleagues and clients say about working with me
            </p>
          </div>

          {/* grid of cards */}
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="relative bg-[#161b22] border border-[#30363d] rounded-xl p-8 shadow-lg hover:scale-[1.02] transition-transform"
              >
                <div className="absolute -top-4 left-4 bg-brand-green p-2 rounded-full">
                  <Quote className="w-5 h-5 text-black" />
                </div>

                <p className="text-gray-200 italic leading-relaxed mb-6">
                  "{t.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center text-xl font-bold text-black">
                    {t.avatar}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{t.name}</h3>
                    <p className="text-brand-green text-sm">{t.role}</p>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Building className="w-3 h-3" /> {t.company}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex gap-1">{renderStars(t.rating)}</div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Calendar className="w-3 h-3" /> {t.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

         