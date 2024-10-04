import BookATrip from "@/components/BookATrip/BookATrip";
import Destination from "@/components/Destination/Destination";
import Hero from "@/components/Hero/Hero";
import Service from "@/components/Service/Service";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Service/>
      <Destination/>
      <BookATrip/>
    </main>
  );
}
