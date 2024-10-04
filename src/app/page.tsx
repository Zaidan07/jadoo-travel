import BookATrip from "@/components/BookATrip/BookATrip";
import Destination from "@/components/Destination/Destination";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Service from "@/components/Service/Service";
import Testimonial from "@/components/Testimonial/Testimonial";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Service/>
      <Destination/>
      <BookATrip/>
      <Testimonial/>
      <Footer/>
    </main>
  );
}
