import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaYoutube, FaInstagram, FaDrawPolygon } from "react-icons/fa";
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import { SiBlueprint, SiHomeassistantcommunitystore } from "react-icons/si";
import { AiOutlineFileProtect } from "react-icons/ai";
import { IoConstructSharp } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import { GiSteelClaws } from "react-icons/gi";
import { FaCube } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaCut } from "react-icons/fa";
import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";

import {
  profile2,
  profile3,
  profile4,
  profile5,
  member1,
  member2,
  member3,
  member4,
  building_5,
  building_6,
  building_7,
  building_8,
  building_9,
  building_10,
  blog_1,
  blog_2,
  blog_3,
} from "./assets";

export const navTabs = [
  { name: "Home", id: "/", type: "scroll" },
  { name: "Tentang Kami", id: "/tentang-kami", type: "scroll" },
  { name: "Layanan", id: "/layanan-kami", type: "scroll" },
  // { name: "Team", id: "/tim-kami", type: "scroll" },
  { name: "Project", id: "/project-kami", type: "scroll" },
  { name: "Testimonial", id: "/testimonial", type: "scroll" },
  { name: "Blog", id: "/blog-kami", type: "scroll" },
];

export const services = [
  {
    name: "Pengecoran Beton",
    icon: <SiBlueprint />,
    description: `layanan pengecoran untuk lantai, jalan, fondasi bangunan dan struktur beton lainnya`,
  },
  {
    name: "Pembesian & Formwork",
    icon: <GiSteelClaws />,
    description: `Instalasi tulangan baja dan bekisting sebagai struktur cetakan beton sebelum di cor

    `,
  },
  {
    name: "Beton Pracetak",
    icon: <FaCube title="Blok Beton" />,
    description: `Produksi dan pemasangan elemen beton pracetak seperti kolom, balok, dinding, tangga, dll..`,
  },
  {
    name: "Perataan Lantai ",
    icon: <SiHomeassistantcommunitystore />,
    description: `Many construction companies specialize in renovation and remodeling services, 
                which involve updating and improving existing structures. This can range from minor 
                repairs to major overhauls of residential, commercial, or industrial properties.`,
  },
  {
    name: "Perbaikan Struktur Beton",
    icon: <FaTools title="Perbaikan / Repair Icon" />,
    description: `Perbaikan beton yang retak, rusak, atau keropos akibat usia atau cuaca menggunakan bahan kimia khusus..`,
  },
  {
    name: "Pemotongan & Pembobokan Beton",
    icon: <FaCut title="Pemotongan / Cutting Icon" />,
    description: `Layanan pemotongan beton dengan alat khusus (concrete saw, core drill) untuk renovasi atau instalasi.`,
  },
];

export const teams = [
  {
    name: "Radian",
    title: "CEO",
    profile: member2,
    social: [
      { name: "Facebook", icon: <CiFacebook />, url: "http://facebook.com" },
      { name: "LinkedIn", icon: <CiLinkedin />, url: "http://linkedin.com" },
      {
        name: "Youtube",
        icon: <FaYoutube />,
        url: "https://www.youtube.com/",
      },
      { name: "Instagram", icon: <FaInstagram />, url: "http://instagram.com" },
    ],
  },
  {
    name: "Mawar",
    title: "Technical Lead",
    profile: member1,
    social: [
      { name: "Facebook", icon: <CiFacebook />, url: "http://facebook.com" },
      { name: "LinkedIn", icon: <CiLinkedin />, url: "http://linkedin.com" },
      {
        name: "Youtube",
        icon: <FaYoutube />,
        url: "https://www.youtube.com/",
      },
      { name: "Instagram", icon: <FaInstagram />, url: "http://instagram.com" },
    ],
  },
  {
    name: "Bunga",
    title: "Project Manager",
    profile: member3,
    social: [
      { name: "Facebook", icon: <CiFacebook />, url: "http://facebook.com" },
      { name: "LinkedIn", icon: <CiLinkedin />, url: "http://linkedin.com" },
      {
        name: "Youtube",
        icon: <FaYoutube />,
        url: "https://www.youtube.com/",
      },
      { name: "Instagram", icon: <FaInstagram />, url: "http://instagram.com" },
    ],
  },
  {
    name: "Gabriel",
    title: "Qaulity control",
    profile: member4,
    social: [
      { name: "Facebook", icon: <CiFacebook />, url: "http://facebook.com" },
      { name: "LinkedIn", icon: <CiLinkedin />, url: "http://linkedin.com" },
      {
        name: "Youtube",
        icon: <FaYoutube />,
        url: "https://www.youtube.com/",
      },
      { name: "Instagram", icon: <FaInstagram />, url: "http://instagram.com" },
    ],
  },
];

export const projects = [
  {
    title: "Proyek Pembangunan Perumahan",
    image: building_5,
    description: `Pengembangan perumahan komprehensif yang melibatkan pembangunan komunitas perumahan baru dari pembersihan dan persiapan lokasi awal hingga konstruksi rumah dan lansekap akhir.`,
  },
  {
    title: "Gedung Perkantoran Komersial",
    image: building_6,
    description: `Pembangunan gedung perkantoran bertingkat yang mencakup seluruh desain arsitektur dan struktur, koordinasi pekerjaan khusus untuk sistem HVAC dan kelistrikan, serta pengawasan proyek secara menyeluruh.`,
  },
  {
    title: "Renovasi Ruang Ritel",
    image: building_7,
    description: `Mengubah toko ritel yang ketinggalan zaman menjadi ruang komersial modern, yang melibatkan pembongkaran interior, desain tata letak baru, pemasangan perlengkapan baru, dan pembaruan utilitas.`,
  },
  {
    title: "Konstruksi Gudang Industri",
    image: building_8,
    description: `Membangun gudang industri berskala besar, termasuk pembersihan lahan, pekerjaan pondasi, pemasangan struktur baja, dan manajemen konstruksi lengkap dari awal hingga akhir.`,
  },
  {
    title: "Restorasi Bangunan Bersejarah",
    image: building_9,
    description: `Memulihkan dan merenovasi bangunan bersejarah untuk menjaga integritas arsitekturnya sekaligus memperbaruinya agar sesuai dengan standar modern, yang melibatkan pengerjaan yang cermat dan teknik restorasi khusus.`,
  },
  {
    title: "Educational Facility Expansion",
    image: building_10,
    description: `Expanding an existing school with new classrooms and facilities, encompassing all phases from initial design and site preparation to construction and 
    final project management to ensure timely completion.`,
  },
];

export const testimonial = [
  {
    image: profile2,
    name: "Chairul",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laboris`,
  },
  {
    image: profile3,
    name: "Arul",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    image: profile4,
    name: "Renanta",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laboris`,
  },
  {
    image: profile5,
    name: "Namoura",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
];

export const blogs = [
  {
    title: "Sustainable Construction: Building for the Future",
    image: blog_1,
    category: "Building",
    content: `
        As the construction industry continues to evolve, the focus on sustainability 
        has never been more critical. Sustainable construction is not just a trend; 
        it's a necessity for our planet's future. In this blog post, we'll explore 
        the principles of sustainable construction, the benefits it offers, and how 
        our company is leading the way in eco-friendly building practices.
      `,
    date: new Date("January 10, 2024"),
    likeCount: 34,
    commentCount: 4,
    tags: ["Edu4CommDev", "CommGrowthEdu", "EducateCommunities"],
    poster: {
      name: "Johnson",
    },
  },
  {
    title: "The Importance of Quality Craftsmanship in Construction",
    image: blog_2,
    category: "Construction",
    content: `
        Quality craftsmanship is the cornerstone of any successful construction project.
         It ensures that buildings are not only aesthetically pleasing but also durable 
         and safe. In this blog post, we'll delve into why quality craftsmanship matters 
         and how our company upholds the highest standards in every project we undertake.
      `,
    date: new Date("December 15, 2023"),
    likeCount: 201,
    commentCount: 123,
    tags: ["Skills4Growth", "EconSkillImpact", "GrowWithSkills"],
    poster: {
      name: "Bissi",
    },
  },
  {
    title: "Innovative Technologies Transforming the Construction Industry",
    image: blog_3,
    category: "Innovations",
    content: `
      The construction industry is undergoing a revolution, thanks to the advent of 
      innovative technologies. These advancements are making construction projects 
      more efficient, cost-effective, and sustainable. In this blog post, we'll 
      explore some of the most exciting technologies transforming the way we build 
      and how our company is leveraging them to deliver superior results.
      `,
    date: new Date("July 20, 2023"),
    likeCount: 198,
    commentCount: 121,
    tags: ["CommEdu", "CommunityEngagement", "EduCommunity"],
    poster: {
      name: "Abisola",
    },
  },
];

export const contacts = [
  {
    name: "Email",
    value: "radianaspalbeton@gmail.com",
    icon: <MdOutlineAlternateEmail />,
    buttonText: "Kirim Email",
    href: "mailto:radianaspalbeton@gmail.com",
  },
  {
    name: "Telepon",
    value: "08123456789",
    icon: <IoCallOutline />,
    buttonText: "Hubungi Sekarang",
    href: "tel:08123456789",
  },
  {
    name: "Alamat",
    value: "Jln Megawati, Medan, Indonesia",
    icon: <IoLocationOutline />,
    buttonText: "Lihat Lokasi",
    href: "https://www.google.com/maps/place/Jln+Megawati,+Medan", // bisa diganti sesuai lokasi
  },
];
export const footer = [
  {
    name: "Explore",
    routes: [
      { name: "Privacy Policy" },
      { name: "Terms and Conditions" },
      { name: "Cookie Policy" },
    ],
  },
  {
    name: "Section",
    routes: [
      { name: "Home", id: "header" },
      { name: "About Us", id: "about" },
      { name: "Services", id: "services" },
      { name: "Team", id: "team" },
      { name: "Project", id: "project" },
      { name: "Testimonial", id: "testimonial" },
      { name: "Blog", id: "blog" },
    ],
  },
];
export const aboutSteps = [
  {
    step: 1,
    title: "Langkah 1: Awal Mula",
    year: "2021",
    description: "Deskripsi tentang langkah pertama.",
    image:
      "https://media.istockphoto.com/id/692096736/id/foto/penuangan-beton-selama-lantai-bangunan-konkret-komersial.jpg?s=612x612&w=0&k=20&c=nlQS7jo69Odc7XHiSeW7kru_JCr_B0job8ngxplU-P4=",
  },
  {
    step: 2,
    title: "Langkah 2: Perjalanan",
    year: "2022",
    description: "Deskripsi tentang langkah kedua.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhr486LGN1zX45l6wrAp-zLIMVj5rZRhfMQ&s",
  },
  {
    step: 3,
    title: "Langkah 3: Pencapaian",
    year: "2023",
    description: "Deskripsi tentang langkah ketiga.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgMo8PtwuDBZoQPtuIkPJrII53ZHn5ogCwbw&s",
  },
  {
    step: 4,
    title: "Langkah 4: Pencapaian",
    year: "2023",
    description: "Deskripsi tentang langkah ketiga.",
    image:
      "https://teknoscaff.com/wp-content/uploads/2023/03/30_Langkah-langkah-Pelaksanaan-Pengerjaan-Beton_Aksesoris-Teknoscaff-1.jpg",
  },
  {
    step: 5,
    title: "Langkah 5: Pencapaian",
    year: "2023",
    description: "Deskripsi tentang langkah ketiga.",
    image:
      "https://www.99.co/id/panduan/wp-content/uploads/2022/03/26132025/beton-bertulang-1.jpg",
  },
  {
    step: 6,
    title: "Langkah 6: Pencapaian",
    year: "2023",
    description: "Deskripsi tentang langkah ketiga.",
    image:
      "https://www.asuransiastra.com/wp-content/uploads/2022/11/Mengenal-Concrete-Vibrator-Sebagai-Alat-Cor-Beton.jpg",
  },
];

// untuk layanan lebih lanjut

export const servicesdetail = [
  {
    id: 1,
    icon: <FaCode size={40} />,
    title: "Pengecoran bekisting",
    description:
      "Kami menjaga bangunan anda agar lebih kuat dengan pengecoran yang baik",
    image:
      "https://www.99.co/id/panduan/wp-content/uploads/2022/03/26132025/beton-bertulang-1.jpg",
  },
  {
    id: 1,
    icon: <FaCode size={40} />,
    title: "Pengecoran bekisting",
    description:
      "Kami menjaga bangunan anda agar lebih kuat dengan pengecoran yang baik",
    image:
      "https://www.99.co/id/panduan/wp-content/uploads/2022/03/26132025/beton-bertulang-1.jpg",
  },
  {
    id: 1,
    icon: <FaCode size={40} />,
    title: "Pengecoran bekisting",
    description:
      "Kami menjaga bangunan anda agar lebih kuat dengan pengecoran yang baik",
    image:
      "https://www.99.co/id/panduan/wp-content/uploads/2022/03/26132025/beton-bertulang-1.jpg",
  },
  {
    id: 1,
    icon: <FaCode size={40} />,
    title: "Pengecoran bekisting",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    image:
      "https://www.99.co/id/panduan/wp-content/uploads/2022/03/26132025/beton-bertulang-1.jpg",
  },
  {
    id: 1,
    icon: <FaCode size={40} />,
    title: "Pengecoran bekisting",
    description:
      "Kami menjaga bangunan anda agar lebih kuat dengan pengecoran yang baik",
    image:
      "https://www.99.co/id/panduan/wp-content/uploads/2022/03/26132025/beton-bertulang-1.jpg",
  },
];
