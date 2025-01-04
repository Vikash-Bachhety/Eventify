"use client";

import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { TypographyH2, TypographyParagraph } from "@/components/ui/typography";

export default function Home() {
    return (
        <>
            {/* Testimonials Section */}
            <section className="w-full py-16 text-white flex flex-col justify-center items-center min-h-w-92">
                <div className="text-center">
                    <TypographyH2 className="text-3xl font-bold">What People Are Saying</TypographyH2>
                    <TypographyParagraph className="text-lg mt-4 max-w-2xl mx-auto">
                        Hear from our customers and performers who have experienced our events firsthand.
                    </TypographyParagraph>
                </div>

                <div className="mt-8 w-11/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-10">
                    {/* Testimonial 1 */}
                    <div className="w-96 p-6 bg-gray-800 rounded-lg hover:shadow-md hover:shadow-slate-50 hover:scale-105 duration-300">
                        <img className="w-28 h-28 object-cover object-center animate-bounce duration-2000 mx-auto mb-10 rounded-full" src="https://www.phdmedia.com/hungary/wp-content/uploads/sites/61/2015/05/temp-people-profile.jpg" />
                        <TypographyParagraph className="italic">"The energy of the crowd and the music was electrifying. I felt alive the entire night!"</TypographyParagraph>
                        <div className="mt-4">
                            <p className="font-semibold">Chris Taylor</p>
                            <p className="text-sm text-gray-400">Concert Enthusiast</p>
                        </div>
                    </div>
                    {/* Testimonial 2 */}
                    <div className="w-96 p-6 bg-gray-800 rounded-lg hover:shadow-md hover:shadow-slate-50 hover:scale-105 duration-300">
                        <img className="w-28 h-28 object-cover object-center animate-bounce duration-2000 mx-auto mb-10 rounded-full" src="https://images.unsplash.com/photo-1533689476487-034f57831a58?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <TypographyParagraph className="italic">"Performing at this event was a dream come true. The audience was so supportive and engaging!"</TypographyParagraph>
                        <div className="mt-4">
                            <p className="font-semibold">Samantha Lee</p>
                            <p className="text-sm text-gray-400">Musician</p>
                        </div>
                    </div>
                    {/* Testimonial 3 */}
                    <div className="w-96 p-6 bg-gray-800 rounded-lg hover:shadow-md hover:shadow-slate-50 hover:scale-105 duration-300">
                        <img className="w-28 h-28 object-cover object-center animate-bounce duration-2000 mx-auto mb-10 rounded-full" src="https://img.freepik.com/free-photo/young-male-posing-isolated-against-blank-studio-wall_273609-12356.jpg" />
                        <TypographyParagraph className="italic">"I’ve attended several events, and each time, the experience just gets better!"</TypographyParagraph>
                        <div className="mt-4">
                            <p className="font-semibold">Michael Brown</p>
                            <p className="text-sm text-gray-400">Frequent Attendee</p>
                        </div>
                    </div>
                    {/* Testimonial 4 */}
                    <div className="w-96 p-6 bg-gray-800 rounded-lg hover:shadow-md hover:shadow-slate-50 hover:scale-105 duration-300">
                        <img className="w-28 h-28 object-cover object-center animate-bounce duration-2000 mx-auto mb-10 rounded-full" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        <TypographyParagraph className="italic">"The organization and creativity put into these events are top-notch. Can't wait for the next one!"</TypographyParagraph>
                        <div className="mt-4">
                            <p className="font-semibold">Emily Davis</p>
                            <p className="text-sm text-gray-400">Event Planner</p>
                        </div>
                    </div>
                    {/* Testimonial 5 */}
                    <div className="w-96 p-6 bg-gray-800 rounded-lg hover:shadow-md hover:shadow-slate-50 hover:scale-105 duration-300">
                        <img className="w-28 h-28 object-cover object-center animate-bounce duration-2000 mx-auto mb-10 rounded-full" src="https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg" />
                        <TypographyParagraph className="italic">"As a photographer, this event provided the most vibrant and exciting visuals to capture. It was incredible!"</TypographyParagraph>
                        <div className="mt-4">
                            <p className="font-semibold">Liam Carter</p>
                            <p className="text-sm text-gray-400">Event Photographer</p>
                        </div>
                    </div>
                    {/* Testimonial 6 */}
                    <div className="w-96 p-6 bg-gray-800 rounded-lg hover:shadow-md hover:shadow-slate-50 hover:scale-105 duration-300">
                        <img className="w-28 h-28 object-cover object-center animate-bounce duration-2000 mx-auto mb-10 rounded-full" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <TypographyParagraph className="italic">"The food, the lights, the music, everything was just perfect. A night to remember!"</TypographyParagraph>
                        <div className="mt-4">
                            <p className="font-semibold">Sophia Green</p>
                            <p className="text-sm text-gray-400">Food Critic</p>
                        </div>
                    </div>
                    {/* Testimonial 7 */}
                    <div className="w-96 p-6 bg-gray-800 rounded-lg hover:shadow-md hover:shadow-slate-50 hover:scale-105 duration-300">
                        <img className="w-28 h-28 object-cover object-center animate-bounce duration-2000 mx-auto mb-10 rounded-full" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        <TypographyParagraph className="italic">"I made so many new friends and connections. This event truly brings people together."</TypographyParagraph>
                        <div className="mt-4">
                            <p className="font-semibold">Daniel Walker</p>
                            <p className="text-sm text-gray-400">Social Connector</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 w-full flex flex-col justify-center items-center">
                <div className="text-center p-8">
                    <TypographyH2 className="text-3xl font-bold text-gray-50">
                        Frequently Asked Questions
                    </TypographyH2>
                    <TypographyParagraph className="text-lg text-gray-50 mt-4 max-w-2xl mx-auto">
                        Have questions? We have answers! Here are some of the most common questions about our events.
                    </TypographyParagraph>
                </div>

                <div className="mt-8 space-y-6 w-3/4 md:w-1/3">
                    <Accordion type="single" collapsible className="space-y-4">
                        {/* Question 1 */}
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="bg-white p-4 shadow-lg rounded-t-md hover:bg-gray-200 transition-all">
                                How can I book tickets for an event?
                            </AccordionTrigger>
                            <AccordionContent className="p-4 bg-gray-50 mt-0.5 rounded-b-lg">
                                You can book tickets directly on our website for the upcoming events. Simply browse through the events page and select the one you're interested in.
                            </AccordionContent>
                        </AccordionItem>

                        {/* Question 2 */}
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="bg-white p-4 shadow-lg rounded-t-md hover:bg-gray-200 transition-all">
                                Can I bring a guest to the event?
                            </AccordionTrigger>
                            <AccordionContent className="p-4 bg-gray-50 mt-0.5 rounded-b-lg">
                                Yes, most events allow you to bring a guest. Please ensure you purchase additional tickets if required.
                            </AccordionContent>
                        </AccordionItem>

                        {/* Question 3 */}
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="bg-white p-4 shadow-lg rounded-t-md hover:bg-gray-200 transition-all">
                                Are the events available worldwide?
                            </AccordionTrigger>
                            <AccordionContent className="p-4 bg-gray-50 mt-0.5 rounded-b-lg">
                                Currently, we offer events in select cities and regions. Check the event details for location availability.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>
        </>
    );
}
