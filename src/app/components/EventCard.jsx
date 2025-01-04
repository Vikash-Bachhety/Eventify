// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// export default function EventCard() {
//     const router = useRouter();
//     const handleClick = ()=> {
//       router.push("/eventDetails")
//     }
//   const events = [
//     {
//       id: 1,
//       title: "Rock Night with The Legends",
//       date: "January 20, 2024",
//       location: "Madison Square Garden, NY",
//       image: "https://img.freepik.com/free-vector/flat-background-world-music-day-celebration_23-2150394870.jpg?t=st=1735042751~exp=1735046351~hmac=570983b6d9676ae65792186ffd2fd6489b9d7b10c23eed50ee2188288b3dfe41&w=1380",
//       shortDescription: "Experience an electrifying night of rock with legendary performers.",
//       ticketPrice: "$120",
//       artists: ["The Rolling Stones", "Led Zeppelin"],
//     },
//     {
//       id: 2,
//       title: "Jazz & Blues Evening",
//       date: "February 10, 2024",
//       location: "Blue Note, Chicago",
//       image: "https://img.freepik.com/free-photo/excited-audience-watching-confetti-fireworks-having-fun-music-festival-night-copy-space_637285-559.jpg?t=st=1735042710~exp=1735046310~hmac=851aec32320e2c659de877a3aa8cfb38b96c52ca1bc282fd49e93923264ec870&w=1380",
//       shortDescription: "A soulful evening featuring top jazz and blues artists.",
//       ticketPrice: "$80",
//       artists: ["Miles Davis Band", "Norah Jones"],
//     },
//     {
//       id: 3,
//       title: "Classical Music Gala",
//       date: "March 15, 2024",
//       location: "Sydney Opera House, AU",
//       image: "https://img.freepik.com/free-vector/gradient-music-notes-background_23-2151299346.jpg?t=st=1735042682~exp=1735046282~hmac=934e1b725cd92385fdd6ed51cfa54bee492ae1b985f98c2fbc484f01448ace7f&w=1380",
//       shortDescription: "A night of serene classical music in a breathtaking venue.",
//       ticketPrice: "$150",
//       artists: ["Sydney Philharmonic Orchestra", "Yo-Yo Ma"],
//     },
//     {
//       id: 4,
//       title: "Rock Night with The Legends",
//       date: "January 20, 2024",
//       location: "Madison Square Garden, NY",
//       image: "https://img.freepik.com/free-vector/flat-background-world-music-day-celebration_23-2150394870.jpg?t=st=1735042751~exp=1735046351~hmac=570983b6d9676ae65792186ffd2fd6489b9d7b10c23eed50ee2188288b3dfe41&w=1380",
//       shortDescription: "Experience an electrifying night of rock with legendary performers.",
//       ticketPrice: "$120",
//       artists: ["The Rolling Stones", "Led Zeppelin"],
//     },
//     {
//       id: 5,
//       title: "Jazz & Blues Evening",
//       date: "February 10, 2024",
//       location: "Blue Note, Chicago",
//       image: "https://img.freepik.com/free-photo/excited-audience-watching-confetti-fireworks-having-fun-music-festival-night-copy-space_637285-559.jpg?t=st=1735042710~exp=1735046310~hmac=851aec32320e2c659de877a3aa8cfb38b96c52ca1bc282fd49e93923264ec870&w=1380",
//       shortDescription: "A soulful evening featuring top jazz and blues artists.",
//       ticketPrice: "$80",
//       artists: ["Miles Davis Band", "Norah Jones"],
//     },
//     {
//       id: 6,
//       title: "Classical Music Gala",
//       date: "March 15, 2024",
//       location: "Sydney Opera House, AU",
//       image: "https://img.freepik.com/free-vector/gradient-music-notes-background_23-2151299346.jpg?t=st=1735042682~exp=1735046282~hmac=934e1b725cd92385fdd6ed51cfa54bee492ae1b985f98c2fbc484f01448ace7f&w=1380",
//       shortDescription: "A night of serene classical music in a breathtaking venue.",
//       ticketPrice: "$150",
//       artists: ["Sydney Philharmonic Orchestra", "Yo-Yo Ma"],
//     },
//     {
//       id: 7,
//       title: "Rock Night with The Legends",
//       date: "January 20, 2024",
//       location: "Madison Square Garden, NY",
//       image: "https://img.freepik.com/free-vector/flat-background-world-music-day-celebration_23-2150394870.jpg?t=st=1735042751~exp=1735046351~hmac=570983b6d9676ae65792186ffd2fd6489b9d7b10c23eed50ee2188288b3dfe41&w=1380",
//       shortDescription: "Experience an electrifying night of rock with legendary performers.",
//       ticketPrice: "$120",
//       artists: ["The Rolling Stones", "Led Zeppelin"],
//     },
//     {
//       id: 8,
//       title: "Jazz & Blues Evening",
//       date: "February 10, 2024",
//       location: "Blue Note, Chicago",
//       image: "https://img.freepik.com/free-photo/excited-audience-watching-confetti-fireworks-having-fun-music-festival-night-copy-space_637285-559.jpg?t=st=1735042710~exp=1735046310~hmac=851aec32320e2c659de877a3aa8cfb38b96c52ca1bc282fd49e93923264ec870&w=1380",
//       shortDescription: "A soulful evening featuring top jazz and blues artists.",
//       ticketPrice: "$80",
//       artists: ["Miles Davis Band", "Norah Jones"],
//     },
//     {
//       id: 9,
//       title: "Classical Music Gala",
//       date: "March 15, 2024",
//       location: "Sydney Opera House, AU",
//       image: "https://img.freepik.com/free-vector/gradient-music-notes-background_23-2151299346.jpg?t=st=1735042682~exp=1735046282~hmac=934e1b725cd92385fdd6ed51cfa54bee492ae1b985f98c2fbc484f01448ace7f&w=1380",
//       shortDescription: "A night of serene classical music in a breathtaking venue.",
//       ticketPrice: "$150",
//       artists: ["Sydney Philharmonic Orchestra", "Yo-Yo Ma"],
//     },
//   ];

//   return (
//     <section className="py-20 bg-transparent">

//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-50 mb-10">
//           Upcoming Events
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
//           {events.map((event) => (
//             <Card key={event.id} className="bg-white h-[500px] hover:shadow-md hover:shadow-black rounded-lg overflow-hidden hover:-skew-y-6 hover:scale-105 duration-300">
//               {/* Event Image */}
//               <div className="relative h-56">
//                 <img
//                   src={event.image}
//                   alt={event.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Event Details */}
//               <CardHeader className="px-4 pt-4">
//                 <CardTitle className="text-xl font-bold text-gray-800">{event.title}</CardTitle>
//                 <CardDescription className="text-gray-600">{event.date}</CardDescription>
//               </CardHeader>
//               <CardContent className="px-4 pb-4">
//                 <p className="text-sm text-gray-700 mb-2">{event.location}</p>
//                 <p className="text-sm text-gray-600 mb-2">{event.shortDescription}</p>
//                 <p className="text-sm text-gray-800 font-semibold mb-2">Ticket Price: {event.ticketPrice}</p>
//                 <p className="text-sm text-gray-700 mb-4 flex truncate">
//                   <span className="font-semibold">Artists:</span> {event.artists.join(", ")}
//                 </p>
//                 <button onClick={handleClick} className="bg-rose-600 text-white px-4 py-2 rounded-md hover:bg-rose-700 transition w-full">
//                   View Details
//                 </button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         <div className="w-full flex justify-center mt-10">
//           <Button className="relative overflow-hidden bg-rose-600 text-white px-6 py-5 rounded-md group">
//             <Link href="/events"><span className="absolute inset-0 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
//               <span className="relative z-10">See More Events</span></Link>
//           </Button>

//         </div>
//         <div className="border-b-2 border-sky-200 mt-20"></div>
//       </div>
//     </section>
//   );
// }
