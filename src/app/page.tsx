import BookATrip from "@/components/BookATrip/BookATrip";
import Company from "@/components/Company/Company";
import Destination from "@/components/Destination/Destination";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Service from "@/components/Service/Service";
import Subscribe from "@/components/Subscribe/Subscibe";
import Testimonial from "@/components/Testimonial/Testimonial";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Service/>
      <Destination/>
      <BookATrip/>
      <Testimonial/>
      <Company/>
      <Subscribe/>
      <Footer/>
    </main>
  );
}
