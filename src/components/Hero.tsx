import React from 'react'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import CarouselImg from './image/carousel-1.jpg'

function Hero() {
  return (
    <>
        <header className="pb-96 md:mb-0 mb-96">
            <div className="relative">
                <div className="lg:absolute z-50 top-0 right-0 w-full lg:p-5 px-5 flex justify-between items-center bg-zinc-900 lg:bg-transparent text-white">
                    <div className="z-50 text-white p-5 text-2xl md:text-4xl lg:text-5xl font-bold">GYMNAST</div>
                    <div className="bg-zinc-900 text-white p-8 text-lg font-semibold hidden lg:flex gap-8 px-10">
                        <a href="" className="hover:text-red-600 duration-300">HOME</a>
                        <a href="" className="hover:text-red-600 duration-300">About Us</a>
                        <a href="" className="hover:text-red-600 duration-300">Our Features</a>
                        <a href="" className="hover:text-red-600 duration-300">Classes</a>
                        <a href="" className="hover:text-red-600 duration-300">Page</a>
                        <a href="" className="hover:text-red-600 duration-300">Contact</a>
                    </div>
                    <Sheet>
                        <SheetTrigger asChild>
                            <button className="z-50 relative h-10 w-10 rounded-lg text-2xl lg:text-4xl font-semibold lg:hidden py-2 px-3 bg-white/10 cursor-pointer hover:bg-white/20">
                                <Image layout="fill" quality={100} src="/image/menu.svg" alt="" className='p-2'/>
                            </button>
                        </SheetTrigger>
                        <SheetContent className='bg-zinc-900 bottom-0 text-white'>
                            <div className="flex flex-col gap-5">
                                <div className="text-2xl font-semibold">Menu</div>
                                <a href="" className="hover:text-red-600 duration-300">HOME</a>
                                <a href="" className="hover:text-red-600 duration-300">About Us</a>
                                <a href="" className="hover:text-red-600 duration-300">Features</a>
                                <a href="" className="hover:text-red-600 duration-300">Classes</a>
                                <a href="" className="hover:text-red-600 duration-300">Page</a>
                                <a href="" className="hover:text-red-600 duration-300">Contact</a>
                            </div>
                    </SheetContent>
                    </Sheet>
                </div>
                <div className="w-full h-[70vh] lg:h-[110vh] relative">
                    <Image layout="fill" objectFit='cover' objectPosition='top' quality={100} src="/image/carousel-1.jpg" alt="" className="" />
                </div>
                
                
    
                <div className="absolute top-0 left-0 z-20 w-full h-full pt-20 md:pt-0 flex items-center justify-center backdrop-brightness-75">
                    <div className="text-center">
                        <div className="lg:text-4xl font-bold text-red-600">GYM & Fitness Center</div>
                        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold lg:py-5 text-white">Best Gym In Town</div>
                        <a href="" className="border-2 border-white bg-transparent p-3 my-5 inline-block text-lg lg:text-xl font-semibold text-white hover:text-black hover:bg-white duration-300">Join Us Now</a>
                    </div>
                </div>
        
        
                <div className="absolute z-20 top-full md:top-3/4 md:pt-20 p-5 pt-10 sm:p-24 md:p-10 w-full md:px-16 lg:px-20 xl:px-52">
                    <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 text-white">
                        <div className="col-span-1 py-16 md:py-20 px-5 md:px-12 bg-red-600 text-right">
                            <div className="text-3xl md:text-4xl xl:text-5xl font-bold">Body Building</div>
                            <div className="text-lg lg:text-xl py-3">Lorem ipsum dolor sit amet llo culpa doloribus dignissimos voluptas incidunt laudantium, itaque ut laborum hic voluptatibus cum optio nobis exercitationem voluptate, aliquam nisi reprehenderit quisquam?</div>
                            <a href="" className="border-2 border-white bg-transparent p-3 my-5 inline-block text-xl font-semibold text-white hover:text-black hover:bg-white duration-300">Join Now</a>
                        </div>
                        <div className="col-span-1 py-16 md:py-20 px-5 md:px-12 bg-zinc-900">
                            <div className="text-3xl md:text-4xl xl:text-5xl font-bold">Muscle Building</div>
                            <div className="text-lg lg:text-xl py-3">Lorem ipsum dolor sit amet llo culpa doloribus dignissimos voluptas incidunt laudantium, itaque ut laborum hic voluptatibus cum optio nobis exercitationem voluptate, aliquam nisi reprehenderit quisquam?</div>
                            <a href="" className="border-2 border-white bg-transparent p-3 my-5 inline-block text-xl font-semibold text-white hover:text-black hover:bg-white duration-300">Join Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>


        <div className="flex items-center justify-center px-5 sm:px-24 md:px-44 lg:px-20 pt-56 md:pt-48 lg:pt-10 pb-12">
            <div className="w-full flex items-center lg:flex-row flex-col">
                <div className="relative w-full lg:w-1/2 lg:h-[75vh] xl:h-[85vh] xl:p-8">
                    <Image layout="fill" quality={100} objectFit='cover' src="/image/about.jpg" alt="" className="" />
                </div>
                <div className="w-full lg:w-1/2 py-3 md:py-8 lg:ps-8 xl:ps-10 lg:py-12 xl:py-36">
                    <div className="text-3xl md:text-5xl lg:text-5xl font-bold pt-20">10 years experience</div>
                    <div className="text-lg xl:text-xl py-3 sm:py-5">Labore vero lorem eos sed aliquy ipsum aliquy sed. Vero dolore dolore takima ipsum lorem rebum</div>
                    <div className=" grid grid-cols-1 gap-3 lg:grid-cols-2">
                        <div className="col-span-1">
                            <div className="relative w-20 h-20 mb-2">
                            <Image layout="fill" quality={100} src="/image/gym1.png" alt="" className="w-20 mb-2" />
                            </div>
                            <div className="text-lg font-semibold">Certified GYM Trainer</div>
                            <div className="">Ipsum sanctu dolor ipsum dolore sit et kasd duo</div>
                        </div>
                        <div className="col-span-1">
                            <div className="relative w-20 h-20 mb-2">
                            <Image layout="fill" quality={100} src="/image/gym2.png" alt="" className="w-20 mb-2" />
                            </div>
                            <div className="text-lg font-semibold">Certified GYM Trainer</div>
                            <div className="">Ipsum sanctu dolor ipsum dolore sit et kasd duo</div>
                        </div>
                    </div>
                    <a href="" className="border-2 border-red-600 bg-transparent p-3 my-5 inline-block text-lg lg:text-xl font-semibold text-red-600 hover:text-white hover:bg-red-600 duration-300">Join Us Now</a>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="col-span-1 flex items-center py-20 px-5 bg-black text-white">
                <div className="relative h-20 w-full">
                <Image layout="fill" quality={100} src="/image/calendar.svg" alt="" className="h-20" />
                </div>
                <div className="p-4">
                    <div className="text-3xl font-semibold">Progression</div>
                    <div className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero</div>
                </div>
            </div>
            <div className="col-span-1 flex items-center py-20 px-5 bg-red-600 text-white">
                <div className="relative h-20 w-full">
                <Image layout="fill" quality={100} src="/image/workout.svg" alt="" className="h-20" />
                </div>
                <div className="p-4">
                    <div className="text-3xl font-semibold">Progression</div>
                    <div className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero</div>
                </div>
            </div>
            <div className="col-span-1 flex items-center py-20 px-5 bg-black text-white">
                <div className="relative h-20 w-full">
                <Image layout="fill" quality={100} src="/image/machine.svg" alt="" className="h-20" />
                </div>
                <div className="p-4">
                    <div className="text-3xl font-semibold">Progression</div>
                    <div className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero</div>
                </div>
            </div>
        </div>


        <div className="pt-16 md:pt-20 lg:pt-28 px-5 md:px-12 lg:px-24 xl:px-28">
            <div className="text-center text-lg lg:text-xl font-semibold text-red-600">Why Chooose Us?</div>
            <div className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-700 pt-3">Benifits of Joining Our GYM</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10 md:gap-y-16 py-12 md:py-24">
                <div className="col-span-1 grid grid-cols-1 sm:grid-cols-5 sm:gap-8 gap-y-4 p-2 text-zinc-600">
                    <div className="col-span-1 sm:col-span-2 h-40 relative">
                        <Image layout="fill" quality={100} objectFit='cover' src="/image/feature-1.jpg" alt="" className="w-full" />
                        <div className="absolute -top-5 -right-5">
                            <div className="relative w-12 xl:w-14 h-14">
                            <Image objectFit='cover' layout="fill" quality={100} src="/image/choose1.png" className="absolute -top-5 -right-5 bg-red-600 w-12 xl:w-14 p-1" alt={''} />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="text-xl font-bold">Video Instruction</div>
                        <div className="">Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor</div>
                    </div>
                </div>
                <div className="col-span-1 grid grid-cols-1 sm:grid-cols-5 sm:gap-8 gap-y-4 p-2 text-zinc-600">
                    <div className="col-span-1 sm:col-span-2 h-40 relative">
                        <Image layout="fill" quality={100} objectFit='cover' src="/image/feature-2.jpg" alt="" className="w-full" />
                        <div className="absolute -top-5 -right-5">
                            <div className="relative w-12 xl:w-14 h-14">
                            <Image objectFit='cover' layout="fill" quality={100} src="/image/choose1.png" className="absolute -top-5 -right-5 bg-red-600 w-12 xl:w-14 p-1" alt={''} />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="text-xl font-bold">Training Calendar</div>
                        <div className="">Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor</div>
                    </div>
                </div>
                <div className="col-span-1 grid grid-cols-1 sm:grid-cols-5 sm:gap-8 gap-y-4 p-2 text-zinc-600">
                    <div className="col-span-1 sm:col-span-2 h-40 relative">
                        <Image layout="fill" quality={100} objectFit='cover' src="/image/feature-3.jpg" alt="" className="w-full" />
                        <div className="absolute -top-5 -right-5">
                            <div className="relative w-12 xl:w-14 h-14">
                            <Image objectFit='cover' layout="fill" quality={100} src="/image/choose1.png" className="absolute -top-5 -right-5 bg-red-600 w-12 xl:w-14 p-1" alt={''} />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="text-xl font-bold">Free Apps & WiFi</div>
                        <div className="">Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor</div>
                    </div>
                </div>
                <div className="col-span-1 grid grid-cols-1 sm:grid-cols-5 sm:gap-8 gap-y-4 p-2 text-zinc-600">
                    <div className="col-span-1 sm:col-span-2 h-40 relative">
                        <Image layout="fill" quality={100} objectFit='cover' src="/image/feature-4.jpg" alt="" className="w-full" />
                        <div className="absolute -top-5 -right-5">
                            <div className="relative w-12 xl:w-14 h-14">
                            <Image objectFit='cover' layout="fill" quality={100} src="/image/choose1.png" className="absolute -top-5 -right-5 bg-red-600 w-12 xl:w-14 p-1" alt={''} />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="text-xl font-bold">Community Support</div>
                        <div className="">Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor</div>
                    </div>
                </div>
            </div>
        </div>


        <div className="relative">
            <div className="relative h-96 w-full">
            <Image layout="fill" quality={100} src="/image/bg.jpg" alt="" className="brightness-50 object-cover object-top" />
            </div>
            <div className="absolute text-center lg:text-left top-0 right-0 w-full h-full backdrop-brightness-50 flex flex-col items-center justify-center text-white">
                <div className="text-2xl lg:text-5xl font-bold">subscribe our newsletter</div>
                <div className="text-lg">Subscribe and get Our latest article in your inbox</div>
                <form className="bg-white mt-5">
                    <Input type="search" name="" id="subscribe_email" placeholder="Your Email" className="inline-block py-3 px-5 w-64 placeholder:text-xl" />
                    <button type='submit' className="bg-red-600 text-white p-3">Subscribe</button>
                </form>
            </div>
        </div>


        <div className="py-12 lg:py-28 text-center">
            <div className="text-red-600 text-lg font-semibold">Class Timetable</div>
            <div className="text-zinc-700 text-3xl lg:text-5xl font-bold py-3">Working Hours and Class Time</div>
            <div className="flex justify-center py-8 text-lg md:gap-5">
                <a id="tableBtn1" href="" className="bg-red-600 text-white p-2 font-semibold text-sm lg:text-base hover:text-red-900">All Classes</a>
                <a id="tableBtn2" href="" className="text-red-600 bg-white p-2 font-semibold text-sm lg:text-base hover:text-red-900">Cardio</a>
                <a id="tableBtn3" href="" className="text-red-600 bg-white p-2 font-semibold text-sm lg:text-base hover:text-red-900">Crossfit</a>
                <a id="tableBtn4" href="" className="text-red-600 bg-white p-2 font-semibold text-sm lg:text-base hover:text-red-900">Powerlifting</a>
            </div>
            <div className="h-52 sm:h-64 md:h-96 relative">
                <Image layout="fill" quality={100} src="/image/table1.png" alt="" id="table1" className="p-8 lg:px-28 xl:px-52 absolute top-0 left-0 duration-1000" />
                <Image layout="fill" quality={100} src="/image/table2.png" alt="" id="table2" className="opacity-0 p-8 lg:px-28 xl:px-52 absolute top-0 left-0 duration-1000" />
                <Image layout="fill" quality={100} src="/image/table3.png" alt="" id="table3" className="opacity-0 p-8 lg:px-28 xl:px-52 absolute top-0 left-0 duration-1000" />
                <Image layout="fill" quality={100} src="/image/table4.png" alt="" id="table4" className="opacity-0 p-8 lg:px-28 xl:px-52 absolute top-0 left-0 duration-1000" />
            </div>
        </div>


        <div className="md:pe-40">
            <div className="flex items-center justify-center text-white bg-zinc-900">
                <div className="w-2/3 relative hidden md:block h-96">
                    <Image layout="fill" quality={100} src="/image/carousel-1.jpg" alt="" className="w-full h-96 object-cover object-top brightness-50" />
                    <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center">
                        <div className="p-20 md:px-12 lg:px-20">
                            <div className="text-red-600 text-lg md:text-xl font-bold">Body Mass Index</div>
                            <div className="text-white text-3xl lg:text-5xl font-bold py-3">What is BMI?</div>
                            <div className="text-white">Vero elitr lorem magna justo magna justo at justo est ipsum sed clita lorem dolor ipsum sed. Lorem sea lorem vero. Sanct dolor clita clita rebum kasd magna erat diam</div>
                        </div>    
                    </div>
                </div>
                <form className="px-8 py-12">
                    <div className="text-3xl lg:text-4xl font-bold">Calculate Your BMI</div>
                    <div className="grid grid-cols-2 gap-2 py-4">
                        <Input id='weight' type="text" placeholder="Weight(KG)" className="col-span-1 border border-white placeholder:text-lg bg-slate-700 p-4" />
                        <Input id='height' type="text" placeholder="Height(cm)" className="col-span-1 border border-white placeholder:text-lg bg-slate-700 p-4" />
                        <Input id='age' type="text" placeholder="Age" className="col-span-1 border border-white placeholder:text-lg bg-slate-700 p-4" />
                        <Input id='gender' type="text" placeholder="Gender" className="col-span-1 border border-white placeholder:text-lg bg-slate-700 p-4" />
                    </div>
                    <button type='submit' className="bg-slate-600 border-2 border-white text-lg p-3 w-full">Calculate Now</button>
                </form>
            </div>
        </div>

        <div className="py-20 md:px-10 xl:px-32">
            <div className="text-center text-lg lg:text-xl font-semibold text-red-600">Our Trainers</div>
            <div className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-700 pt-3">Meet Our Expert Trainers</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-5 xl:gap-10 p-8 md:p-12">
                <div className="relative col-span-1">
                    <div className="relative w-full h-[300px]">
                    <Image objectFit='cover' layout="fill" quality={100} src="/image/team-1.jpg" alt="" className="w-full" />
                    </div>
                    <div className="p-5 sticky z-20 text-center bg-zinc-900">
                        <div className="text-2xl font-bold text-red-600">Trainer Name</div>
                        <div className="text-xl text-white">Trainer</div>
                    </div>
                    <div className="absolute pb-28 z-10 top-0 right-0 w-full h-full opacity-0 hover:opacity-100 p-5 bg-black/40 duration-500 flex items-center justify-center gap-3">
                        <a href="" className="w-10 h-10 flex items-center justify-center hover:text-white rounded-full hover:bg-black/50 border-2 duration-300 bg-white">a</a>
                        <a href="" className="w-10 h-10 flex items-center justify-center hover:text-white rounded-full hover:bg-black/50 border-2 duration-300 bg-white">b</a>
                        <a href="" className="w-10 h-10 flex items-center justify-center hover:text-white rounded-full hover:bg-black/50 border-2 duration-300 bg-white">c</a>
                        <a href="" className="w-10 h-10 flex items-center justify-center hover:text-white rounded-full hover:bg-black/50 border-2 duration-300 bg-white">d</a>
                    </div>
                </div>
                <div className="relative col-span-1">
                    <div className="relative w-full h-[300px]">
                    <Image objectFit='cover' layout="fill" quality={100} src="/image/team-2.jpg" alt="" className="w-full" />
                    </div>
                    <div className="p-5 sticky z-20 text-center bg-zinc-900">
                        <div className="text-2xl font-bold text-red-600">Trainer Name</div>
                        <div className="text-xl text-white">Trainer</div>
                    </div>
                    <div className="absolute pb-28 z-10 top-0 right-0 w-full h-full opacity-0 hover:opacity-100 p-5 bg-black/40 duration-500 flex items-center justify-center gap-3">
                        <a href="" className="w-10 h-10 flex items-center justify-center hover:text-white rounded-full hover:bg-black/50 border-2 duration-300 bg-white">a</a>
                        <a href="" className="w-10 h-10 flex items-center justify-center hover:text-white rounded-full hover:bg-black/50 border-2 duration-300 bg-white">b</a>
                        <a href="" className="w-10 h-10 flex items-center justify-center hover:text-white rounded-full hover:bg-black/50 border-2 duration-300 bg-white">c</a>
                        <a href="" className="w-10 h-10 flex items-center justify-center hover:text-white rounded-full hover:bg-black/50 border-2 duration-300 bg-white">d</a>
                    </div>
                </div>
                <div className="relative col-span-1">
                    <div className="relative w-full h-[300px]">
                    <Image objectFit='cover' layout="fill" quality={100} src="/image/team-3.jpg" alt="" className="w-full" />
                    </div>
                    <div className="p-5 sticky z-20 text-center bg-zinc-900">
                        <div className="text-2xl font-bold text-red-600">Trainer Name</div>
                        <div className="text-xl text-white">Trainer</div>
                    </div>
                    <div className="absolute pb-28 z-10 top-0 right-0 w-full h-full opacity-0 hover:opacity-100 p-5 bg-black/40 duration-500 flex items-center justify-center gap-3">
                        <a href="" className="w-10 h-10 flex items-center justify-center hover:text-white rounded-full hover:bg-black/50 border-2 duration-300 bg-white">a</a>
                        <a href="" className="w-10 h-10 flex items-center justify-center hover:text-white rounded-full hover:bg-black/50 border-2 duration-300 bg-white">b</a>
                        <a href="" className="w-10 h-10 flex items-center justify-center hover:text-white rounded-full hover:bg-black/50 border-2 duration-300 bg-white">c</a>
                        <a href="" className="w-10 h-10 flex items-center justify-center hover:text-white rounded-full hover:bg-black/50 border-2 duration-300 bg-white">d</a>
                    </div>
                </div>
                <div className="relative col-span-1">
                    <div className="relative w-full h-[300px]">
                    <Image objectFit='cover' layout="fill" quality={100} src="/image/team-4.jpg" alt="" className="w-full" />
                    </div>
                    <div className="p-5 sticky z-20 text-center bg-zinc-900">
                        <div className="text-2xl font-bold text-red-600">Trainer Name</div>
                        <div className="text-xl text-white">Trainer</div>
                    </div>
                    <div className="absolute pb-28 z-10 top-0 right-0 w-full h-full opacity-0 hover:opacity-100 p-5 bg-black/40 duration-500 flex items-center justify-center gap-3">
                        <a href="" className="w-10 h-10 flex items-center justify-center hover:text-white rounded-full hover:bg-black/50 border-2 duration-300 bg-white">a</a>
                        <a href="" className="w-10 h-10 flex items-center justify-center hover:text-white rounded-full hover:bg-black/50 border-2 duration-300 bg-white">b</a>
                        <a href="" className="w-10 h-10 flex items-center justify-center hover:text-white rounded-full hover:bg-black/50 border-2 duration-300 bg-white">c</a>
                        <a href="" className="w-10 h-10 flex items-center justify-center hover:text-white rounded-full hover:bg-black/50 border-2 duration-300 bg-white">d</a>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="md:ps-40">
            <div className="grid md:grid-cols-5 text-white bg-zinc-900 min-h-[400px]">
                <div className="lg:py-12 md:col-span-2 h-full relative">
                    <div className="absolute p-8">
                        <div className="flex items-center">
                            <div className="relative h-20 w-20">
                            <Image layout="fill" quality={100} src="/image/testimonial-1.jpg" alt="" className="rounded-full h-20 border-8 border-zinc-600" />
                            </div>
                            <div className="flex justify-center flex-col p-5">
                                <div className="text-red-600 font-semibold text-xl">Client Name</div>
                                <div className="text-lg">Profession</div>
                            </div>
                        </div>
                        <div className="mt-5 border-2 border-white bg-zinc-700 text-white p-5">
                            <div className="">
                                Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus clita
                            </div>
                        </div>
                    </div>
                    <div className="absolute p-8">
                        <div className="flex items-center">
                            <div className="relative h-20 w-20">
                            <Image layout="fill" quality={100} src="/image/testimonial-1.jpg" alt="" className="rounded-full h-20 border-8 border-zinc-600" />
                            </div>
                            <div className="flex justify-center flex-col p-5">
                                <div className="text-red-600 font-semibold text-xl">Client Name</div>
                                <div className="text-lg">Profession</div>
                            </div>
                        </div>
                        <div className="mt-5 border-2 border-white bg-zinc-700 text-white p-5">
                            <div className="">
                                Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus clita
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-8 p-3 w-full flex justify-center gap-3">
                        <button className="bg-zinc-400 hover:bg-red-600 duration-300 w-10 h-2 rounded-s-full rounded-e-full"></button>
                        <button className="bg-zinc-400 hover:bg-red-600 duration-300 w-10 h-2 rounded-s-full rounded-e-full"></button>
                        <button className="bg-zinc-400 hover:bg-red-600 duration-300 w-10 h-2 rounded-s-full rounded-e-full"></button>
                    </div>
                </div>
                <div className="lg:col-span-3 relative hidden md:block h-96">
                    <Image layout="fill" quality={100} src="/image/carousel-2.jpg" alt="" className="w-full h-96 object-cover object-top brightness-50" />
                    <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center">
                        <div className="p-20 md:px-12 lg:px-20">
                            <div className="text-red-600 text-lg md:text-xl font-bold">Testimonial</div>
                            <div className="text-white text-3xl lg:text-5xl font-bold py-3">What Our Clients Say?</div>
                            <div className="text-white">Vero elitr lorem magna justo magna justo at justo est ipsum sed clita lorem dolor ipsum sed. Lorem sea lorem vero. Sanct dolor clita clita rebum kasd magna erat diam</div>
                        </div>   
                    </div>
                </div>
            </div>
        </div>


        <div className="pt-16 md:pt-20 lg:pt-28 px-5 md:px-12 lg:px-24 xl:px-40">
            <div className="text-center text-lg lg:text-xl font-semibold text-red-600">Why Chooose Us?</div>
            <div className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-700 pt-3">Benifits of Joining Our GYM</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10 md:gap-y-16 py-12 md:py-20">
                <div className="col-span-1 p-2 text-zinc-800">
                    <div className="relative w-full h-[300px] lg:h-[400px]">
                    <Image objectFit='cover' layout="fill" quality={100} src="/image/blog-1.jpg" alt="" className="w-full object-cover h-[400px]" />
                    </div>
                    <div className="flex pt-5 gap-3">
                        <div className="w-20 h-20 rounded-full flex flex-col items-center justify-center text-white bg-red-600">
                            <div className="">01</div>
                            <div className="font-semibold">Oct</div>
                            <div className="">2024</div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="font-bold text-2xl">Lorem ispm dloer awee wmet</div>
                            <div className="">Admin Web Design 28 Comments</div>
                        </div>
                    </div>
                    <div className="py-5 mb-2 text-lg text-zinc-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt raecto quam ullam cupiditate assumenda temporibus quidem magnam neque, cum, quasi dolore obcaecati, hic repellat?</div>
                    <a href="#" className="text-red-600 border-2 py-2 px-3 border-red-600">Read More</a>
                </div>
                <div className="col-span-1 p-2 text-zinc-800">
                    <div className="relative w-full h-[300px] lg:h-[400px]">
                    <Image objectFit='cover' layout="fill" quality={100} src="/image/blog-2.jpg" alt="" className="w-full object-cover h-[400px]" />
                    </div>
                    <div className="flex pt-5 gap-3">
                        <div className="w-20 h-20 rounded-full flex flex-col items-center justify-center text-white bg-red-600">
                            <div className="">01</div>
                            <div className="font-semibold">Oct</div>
                            <div className="">2024</div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="font-bold text-2xl">Lorem ispm dloer awee wmet</div>
                            <div className="">Admin Web Design 28 Comments</div>
                        </div>
                    </div>
                    <div className="py-5 mb-2 text-lg text-zinc-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt raecto quam ullam cupiditate assumenda temporibus quidem magnam neque, cum, quasi dolore obcaecati, hic repellat?</div>
                    <a href="#" className="text-red-600 border-2 py-2 px-3 border-red-600">Read More</a>
                </div>
            </div>
        </div>

        <footer className="relative bg-transparent bg-cover bg-blend-multiply text-white">
            <Image layout="fill" quality={100} src="/image/bg.jpg" className="absolute -z-10 w-full h-full object-cover object-top brightness-[20%]" alt={''} />
            <div className="grid grid-cols-2 md:grid-cols-2 gap-5 lg:gap-10 lg:grid-cols-4 pt-8 lg:pt-20 px-10 lg:px-20">
                <div className="flex flex-col gap-1 text-sm lg:text-lg">
                    <div className="font-bold text-red-600">Get In Touch</div>
                    <div className="">91st Street, 27th x 28th Street, Mandalay, Myanmar</div>
                    <div className="">+959 255 599 863</div>
                    <div className="">kaungkhantkyawdk@gmail.com</div>
                </div>
                <div className="flex flex-col gap-1 text-sm lg:text-lg">
                    <div className="font-semibold text-red-600">Opening Hours</div>
                    <div className="font-semibold">Monday - Friday</div>
                    <div className="">8:00 AM - 8:00 PM</div>
                    <div className="font-semibold">Saturday - Sunday</div>
                    <div className="">2:00 PM - 8:00 PM</div>
                </div>
                <div className="lg:flex flex-col gap-1 text-sm lg:text-lg">
                    <div className="font-bold text-red-600">Quick Links</div>
                    <a href="#" className="hover:underline pe-4">Home</a>
                    <a href="#" className="hover:underline pe-4">About</a>
                    <a href="#" className="hover:underline pe-4">Classes</a>
                    <a href="#" className="hover:underline pe-4">Contact</a>
                </div>
                <div className="lg:flex flex-col gap-1 text-sm lg:text-lg hidden">
                    <div className="font-bold text-red-600">Popular Links</div>
                    <a href="#" className="hover:underline">Blog</a>
                    <a href="#" className="hover:underline">About</a>
                    <a href="#" className="hover:underline">Classes</a>
                    <a href="#" className="hover:underline">Contact</a>
                </div>
            </div>
            <div className="px-2 lg:px-20">
                <div className="bg-white h-[1px] mt-4 lg:mt-10"></div>
                <div className="text-center text-sm py-4 lg:py-8">© Gymnast. All Rights Reserved. Developed by Danial</div>
            </div>
        </footer>
    </>
  )
}

export default Hero;