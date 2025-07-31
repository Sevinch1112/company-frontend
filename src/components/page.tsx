// // import Link from "next/link"
// // import { Button } from "@/components/ui/button"
// // import { Card, CardContent } from "@/components/ui/card"
// // import { Badge } from "@/components/ui/badge"
// // import {
// //   Globe,
// //   Smartphone,
// //   Palette,
// //   Code,
// //   Search,
// //   ShoppingCart,
// //   Phone,
// //   Mail,
// //   MapPin,
// //   Facebook,
// //   Twitter,
// //   Instagram,
// //   Linkedin,
// //   ChevronLeft,
// //   ChevronRight,
// // } from "lucide-react"

// // export default function Portfolio() {
// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white">
// //       {/* Header */}
// //       <header className="border-b border-gray-800">
// //         <div className="container mx-auto px-4 py-4 flex items-center justify-between">
// //           <div className="text-2xl font-bold">Logo</div>

// //           <nav className="hidden md:flex space-x-8">
// //             <Link href="#" className="hover:text-purple-400 transition-colors">
// //               Bosh sahifa
// //             </Link>
// //             <Link href="#" className="hover:text-purple-400 transition-colors">
// //               Kompaniya
// //             </Link>
// //             <Link href="#" className="hover:text-purple-400 transition-colors">
// //               Bizning xizmatlar
// //             </Link>
// //             <Link href="#" className="hover:text-purple-400 transition-colors">
// //               Loyihalar
// //             </Link>
// //           </nav>

// //           <div className="flex items-center space-x-4">
// //             <div className="hidden lg:flex items-center space-x-2 text-sm">
// //               <Phone className="w-4 h-4" />
// //               <span>+998 99 123 45 67</span>
// //             </div>
// //             <Button className="bg-purple-600 hover:bg-purple-700">Bog'lanish</Button>
// //           </div>
// //         </div>
// //       </header>

// //       {/* Hero Section */}
// //       <section className="py-20">
// //         <div className="container mx-auto px-4">
// //           <div className="grid lg:grid-cols-2 gap-12 items-center">
// //             <div>
// //               <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
// //                 Biz veb-saytlar, ilovalarni ishlab chiqamiz
// //               </h1>
// //               <p className="text-gray-300 text-lg mb-8 leading-relaxed">
// //                 Zamonaviy texnologiyalar yordamida sizning biznesingiz uchun professional veb-saytlar va mobil ilovalar
// //                 yaratamiz. Bizning tajribali jamoamiz har bir loyihaga individual yondashadi.
// //               </p>
// //               <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
// //                 Batafsil ma'lumot
// //               </Button>
// //             </div>
// //             <div className="flex justify-center">
// //               <div className="w-80 h-80 bg-gray-200 rounded-full"></div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Company Stats */}
// //       <section className="py-16 bg-black/30">
// //         <div className="container mx-auto px-4">
// //           <h2 className="text-3xl font-bold text-center mb-12">Kompaniya haqida</h2>
// //           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
// //             <div className="text-center">
// //               <div className="text-4xl font-bold text-purple-400 mb-2">20+</div>
// //               <div className="text-gray-300">Bajarilgan loyihalar</div>
// //             </div>
// //             <div className="text-center">
// //               <div className="text-4xl font-bold text-purple-400 mb-2">4 yil</div>
// //               <div className="text-gray-300">Bozordagi tajriba</div>
// //             </div>
// //             <div className="text-center">
// //               <div className="text-4xl font-bold text-purple-400 mb-2">15+</div>
// //               <div className="text-gray-300">Mutaxassislar</div>
// //             </div>
// //             <div className="text-center">
// //               <div className="text-4xl font-bold text-purple-400 mb-2">4 soha</div>
// //               <div className="text-gray-300">Faoliyat yo'nalishlari</div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Services */}
// //       <section className="py-20">
// //         <div className="container mx-auto px-4">
//           {/* <h2 className="text-3xl font-bold text-center mb-12">Bizning xizmatlarimiz</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
//               <CardContent className="p-6">
//                 <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
//                   <Globe className="w-6 h-6" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3 text-white">Veb-sayt yaratish</h3>
//                 <p className="text-gray-300">
//                   Zamonaviy va responsive veb-saytlar yaratish. SEO optimizatsiya va yuqori tezlik bilan ishlaydigan
//                   saytlar.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
//               <CardContent className="p-6">
//                 <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
//                   <Smartphone className="w-6 h-6" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3 text-white">Mobil ilovalar</h3>
//                 <p className="text-gray-300">
//                   Android va iOS uchun mobil ilovalar yaratish. Cross-platform yechimlar va native dasturlash.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
//               <CardContent className="p-6">
//                 <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
//                   <Palette className="w-6 h-6" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3 text-white">Dizayn xizmatlari</h3>
//                 <p className="text-gray-300">
//                   UI/UX dizayn, brending va grafik dizayn xizmatlari. Foydalanuvchi tajribasini yaxshilash.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
//               <CardContent className="p-6">
//                 <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
//                   <Code className="w-6 h-6" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3 text-white">Backend dasturlash</h3>
//                 <p className="text-gray-300">
//                   Server tomonidagi dasturlash, API yaratish va ma'lumotlar bazasi bilan ishlash.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
//               <CardContent className="p-6">
//                 <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
//                   <Search className="w-6 h-6" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3 text-white">SEO optimizatsiya</h3>
//                 <p className="text-gray-300">
//                   Qidiruv tizimlarida yuqori o'rinlarni egallash uchun saytingizni optimizatsiya qilish.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
//               <CardContent className="p-6">
//                 <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
//                   <ShoppingCart className="w-6 h-6" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3 text-white">E-commerce yechimlar</h3>
//                 <p className="text-gray-300">
//                   Onlayn do'konlar yaratish, to'lov tizimlari integratsiyasi va mahsulot boshqaruvi.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Portfolio */}
//       <section className="py-20 bg-black/30">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">Bizlardan loyihalarimiz</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[1, 2, 3, 4, 5, 6].map((item) => (
//               <Card
//                 key={item}
//                 className="bg-gray-800 border-gray-700 overflow-hidden hover:scale-105 transition-transform"
//               >
//                 <div className="aspect-video bg-gray-600 relative">
//                   <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
//                   <div className="absolute bottom-4 left-4">
//                     <Badge variant="secondary">Web sayt</Badge>
//                   </div>
//                 </div>
//                 <CardContent className="p-4">
//                   <h3 className="font-semibold text-white mb-2">Loyiha nomi {item}</h3>
//                   <p className="text-gray-400 text-sm">Qisqacha tavsif</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services List */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">Bizning xizmatlar</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Globe className="w-8 h-8" />
//               </div>
//               <h3 className="text-xl font-semibold mb-3">Veb saytlar</h3>
//               <p className="text-gray-300">Professional veb-saytlar yaratish va qo'llab-quvvatlash</p>
//             </div>
//             <div className="text-center">
//               <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Palette className="w-8 h-8" />
//               </div>
//               <h3 className="text-xl font-semibold mb-3">UX/UI Dizayn</h3>
//               <p className="text-gray-300">Foydalanuvchi tajribasini yaxshilash va zamonaviy dizayn</p>
//             </div>
//             <div className="text-center">
//               <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Smartphone className="w-8 h-8" />
//               </div>
//               <h3 className="text-xl font-semibold mb-3">Mobil ilovalar</h3>
//               <p className="text-gray-300">iOS va Android uchun mobil ilovalar yaratish</p>
//             </div>
//             <div className="text-center">
//               <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Code className="w-8 h-8" />
//               </div>
//               <h3 className="text-xl font-semibold mb-3">CRM</h3>
//               <p className="text-gray-300">Biznes jarayonlarini avtomatlashtirish tizimlari</p>
//             </div>
//             <div className="text-center">
//               <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Search className="w-8 h-8" />
//               </div>
//               <h3 className="text-xl font-semibold mb-3">Grafik dizayn</h3>
//               <p className="text-gray-300">Brending, logo va reklama materiallari yaratish</p>
//             </div>
//             <div className="text-center">
//               <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <ShoppingCart className="w-8 h-8" />
//               </div>
//               <h3 className="text-xl font-semibold mb-3">Mobil dizayn</h3>
//               <p className="text-gray-300">Mobil qurilmalar uchun optimallashtirilgan dizayn</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Blog */}
//       <section className="py-20 bg-black/30">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between mb-12">
//             <h2 className="text-3xl font-bold">Blog yangiliklar</h2>
//             <div className="flex space-x-2">
//               <Button variant="outline" size="icon">
//                 <ChevronLeft className="w-4 h-4" />
//               </Button>
//               <Button variant="outline" size="icon">
//                 <ChevronRight className="w-4 h-4" />
//               </Button>
//             </div>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[1, 2, 3].map((item) => (
//               <Card key={item} className="bg-gray-800 border-gray-700">
//                 <div className="aspect-video bg-gradient-to-br from-cyan-500 to-blue-600"></div>
//                 <CardContent className="p-6">
//                   <h3 className="text-xl font-semibold mb-3 text-white">Blog maqolasi {item}</h3>
//                   <p className="text-gray-300 mb-4">
//                     Qisqacha tavsif va maqola haqida ma'lumot. Bu yerda asosiy g'oyalar keltiriladi.
//                   </p>
//                   <div className="flex items-center justify-between text-sm text-gray-400">
//                     <span>12 Dekabr 2024</span>
//                     <span>5 daqiqa</span>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between mb-12">
//             <h2 className="text-3xl font-bold">Bizning jamoa</h2>
//             <div className="flex space-x-2">
//               <Button variant="outline" size="icon">
//                 <ChevronLeft className="w-4 h-4" />
//               </Button>
//               <Button variant="outline" size="icon">
//                 <ChevronRight className="w-4 h-4" />
//               </Button>
//             </div>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { name: "Abdullayev Bobur", role: "Frontend Developer" },
//               { name: "Karimova Malika", role: "UI/UX Designer" },
//               { name: "Toshmatov Sardor", role: "Backend Developer" },
//               { name: "Nazarova Gulnora", role: "Project Manager" },
//             ].map((member, index) => (
//               <Card key={index} className="bg-gray-800 border-gray-700 text-center">
//                 <CardContent className="p-6">
//                   <div className="w-24 h-24 bg-gray-600 rounded-full mx-auto mb-4"></div>
//                   <h3 className="font-semibold text-white mb-1">{member.name}</h3>
//                   <p className="text-gray-400 text-sm">{member.role}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-black py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//             <div>
//               <h3 className="text-2xl font-bold mb-6">LOGO</h3>
//               <p className="text-gray-400 mb-6">
//                 Biz sizning biznesingiz uchun eng yaxshi raqamli yechimlarni taklif etamiz.
//               </p>
//               <div className="flex space-x-4">
//                 <Link href="#" className="text-gray-400 hover:text-white">
//                   <Facebook className="w-5 h-5" />
//                 </Link>
//                 <Link href="#" className="text-gray-400 hover:text-white">
//                   <Twitter className="w-5 h-5" />
//                 </Link>
//                 <Link href="#" className="text-gray-400 hover:text-white">
//                   <Instagram className="w-5 h-5" />
//                 </Link>
//                 <Link href="#" className="text-gray-400 hover:text-white">
//                   <Linkedin className="w-5 h-5" />
//                 </Link>
//               </div>
//             </div>

//             <div>
//               <h4 className="font-semibold mb-4">Xizmatlar</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li>
//                   <Link href="#" className="hover:text-white">
//                     Veb-sayt yaratish
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="hover:text-white">
//                     Mobil ilovalar
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="hover:text-white">
//                     UI/UX Dizayn
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="hover:text-white">
//                     SEO xizmatlari
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="hover:text-white">
//                     E-commerce
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="font-semibold mb-4">Kompaniya</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li>
//                   <Link href="#" className="hover:text-white">
//                     Biz haqimizda
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="hover:text-white">
//                     Jamoa
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="hover:text-white">
//                     Loyihalar
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="hover:text-white">
//                     Blog
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="hover:text-white">
//                     Aloqa
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="font-semibold mb-4">Aloqa ma'lumotlari</h4>
//               <div className="space-y-3 text-gray-400">
//                 <div className="flex items-center space-x-2">
//                   <Phone className="w-4 h-4" />
//                   <span>+998 99 123 45 67</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Mail className="w-4 h-4" />
//                   <span>info@company.uz</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <MapPin className="w-4 h-4" />
//                   <span>Toshkent, O'zbekiston</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
//             <p>&copy; 2024 Company Name. Barcha huquqlar himoyalangan.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   ) */}
// }
