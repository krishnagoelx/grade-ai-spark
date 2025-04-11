
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "GradeAI has revolutionized how I grade papers. What used to take me hours now takes minutes, and the feedback is consistent and detailed.",
    author: "Dr. Sarah Johnson",
    role: "High School English Teacher",
    avatar: "/placeholder.svg"
  },
  {
    quote: "The ability to quickly grade large batches of papers while maintaining quality feedback has been a game-changer for our department.",
    author: "Prof. Michael Chen",
    role: "University Professor",
    avatar: "/placeholder.svg"
  },
  {
    quote: "My students love the detailed feedback they receive, and I love how much time I save on grading. It's a win-win solution.",
    author: "Emily Rodriguez",
    role: "Middle School Science Teacher",
    avatar: "/placeholder.svg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">What Educators Say</h2>
          <p className="text-muted-foreground text-lg">
            Trusted by teachers and professors around the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="flex-none">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author.split(' ').map(name => name[0]).join('')}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="italic text-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
