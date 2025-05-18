import { TTestimonial } from "@/types/data";
import { v4 as uuid } from "uuid"


export const testimonials: TTestimonial[] = [
    {
        image: "/images/home/shay-wright.png",
        name: "Shay Wright",
        role: "Director of SEO Big Marketing",
        description: "Mosharaf is a pleasure to work with. He and his team do excellent work and are very knowledgeable and talented. They are also always very resposive and easy to work with. If they bid on your project, hire them, and I can assure you won’t be disappointed.",
        id: uuid() + '' || ''
    },
    {
        image: "/images/home/ivan.png",
        name: "Ivan Lo",
        role: "Founder and CEO Airgle Corporation",
        description: "He is a dream to work with! Very responsive, efficient and quality of workmanship was beyond my expectations. A stellar developer who is skillful in WordPress. You can absolutely trust him as an honest and skillful developer. Great work experience and we highly recommend this contractor. Thanks again.",
        id: uuid() + '' || ''
    },
    {
        image: "/images/home/Hayden-Hamilton-Walker.png",
        name: "Hayden Walker",
        role: "CO-FOUNDER Cryptolab",
        description: "Mosharaf was very friendly and pleasant to work with and very skilled at what they do. He and his team accommodated for my changes/revisions and provided great options and suggestions on my project Also, their team is very patient as I had numerous hold-ups on my side which Mosharaf and the team were great with. Recommend A+++",
        id: uuid() + '' || '',
    }
    ,
    {
        image: "/images/home/DhirajThareja.png",
        name: "Dhiraj Thareja",
        role: "Chief Executive Officer",
        description: `Choosing Webtricker for our website overhaul was hands down one of the best decisions we've made. From the initial consultation to the final launch, their team showcased unparalleled professionalism, creativity, and expertise.
        Highly recommend!`,
        id: uuid()+'' || ''
    }
    ,
    {
        image: "/images/home/John.png",
        name: "John Wong ( Larry Gong )",
        role: "Chief Executive Officer",
        description: `Mosharaf is a great developer in WordPress. I'm very satisfied with his service. Highly recommended!!`,
        id: uuid()+'' || ''
    }
    ,
    {
        image: "/images/home/WesleyDekadt.png",
        name: "Wesley Dekadt",
        role: "Chief Executive Officer",
        description: `Fixed all our issues perfectly. smooth communcation and fast service`,
        id: uuid()+'' || ''
    }
    ,
    {
        image: "/images/home/AriTeman.png",
        name: " Ari Teman",
        role: "CEO and founder of Friend or Fraud",
        description: `He writes exceptionally clean, professional, and efficient markup, and he's very timely and professional. I hope to work with him again`,
        id: uuid()+'' || ''
    }
    ,
    {
        image: "/images/home/PeterKim.png",
        name: " Peter Kim",
        role: "COO",
        description: `Mosharaf was very professional throughout the process and worked diligently to get our project done on time. Very easy to work with, and communicated well until completion. Would not hesitate to work on another project with him`,
        id: uuid()+'' || ''
    }
    ,
    {
        image: "/images/home/Lawrence.png",
        name: "Lawrence",
        role: "",
        description: `I have used many freelance programmers and Mosharef is the best. He was able to quickly fix problems that other programmers could not solve and he is always completely responsive and follows directions. I am only ending this contract so I can give him good feedback and start more work with him on a new contract.`,
        id: uuid()+'' || ''
    }
];