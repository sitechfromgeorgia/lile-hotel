import { Phone, MapPin, Star, Wifi, Car, Tv, Trees, Waves, Calendar, Clock, ChevronDown, Home as HomeIcon, BedDouble, Users, Check } from "lucide-react";

export default function HomePage() {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "995599050549";
  const phoneNumber = "+995599050549";
  const phoneNumber2 = "+995599458282";

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Trees className="w-6 h-6 text-nature" />
              <span className="text-xl font-bold text-gray-800">ლილე</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#home" className="text-gray-600 hover:text-primary transition">მთავარი</a>
              <a href="#rooms" className="text-gray-600 hover:text-primary transition">ოთახები</a>
              <a href="#services" className="text-gray-600 hover:text-primary transition">სერვისები</a>
              <a href="#location" className="text-gray-600 hover:text-primary transition">ლოკაცია</a>
              <a href="#contact" className="text-gray-600 hover:text-primary transition">კონტაქტი</a>
            </div>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-nature text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-nature/90 transition"
            >
              დაგვიკავშირდი
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-6">
            <Trees className="w-4 h-4" />
            <span className="text-sm">ფიჭვნარში, ზღვიდან 5 წუთში</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            ლილე — შენი მყუდრო<br />კუთხე ქობულეთში
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            საოჯახო სასტუმრო ფიჭვნარის გარემოში. მყუდრო ოთახები, უფასო პარკინგი, 
            და გულისხმიერი მასპინძლები.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${whatsappNumber}?text=მოგესალმებით!%20მაინტერესებს%20ოთახის%20დაჯავშნა`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-nature text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-nature/90 transition flex items-center justify-center gap-2"
            >
              <span>ჯავშნე ახლა</span>
            </a>
            <a
              href="tel:+995599050549"
              className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>დაგვირეკე</span>
            </a>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <Waves className="w-5 h-5" />
              <span>ზღვასთან ახლოს</span>
            </div>
            <div className="flex items-center gap-2">
              <Car className="w-5 h-5" />
              <span>უფასო პარკინგი</span>
            </div>
            <div className="flex items-center gap-2">
              <Wifi className="w-5 h-5" />
              <span>უფასო WiFi</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-primary py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">10+</div>
              <div className="text-white/80">ოთახი</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">30+</div>
              <div className="text-white/80">საწოლი</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">5 წთ</div>
              <div className="text-white/80">ზღვამდე</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">₾80+</div>
              <div className="text-white/80">ღამე</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">რას გთავაზობთ</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ყველა საჭირო სერვისი კომფორტული დასვენებისთვის
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 bg-nature/10 rounded-xl flex items-center justify-center mb-6">
                <Trees className="w-7 h-7 text-nature" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">ფიჭვნარის გარემო</h3>
              <p className="text-gray-600">სუფთა ჰაერი და მყუდრო გარემო ფიჭვნარის ხეებს შორის</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 bg-sea/10 rounded-xl flex items-center justify-center mb-6">
                <Waves className="w-7 h-7 text-sea" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">ზღვასთან ახლოს</h3>
              <p className="text-gray-600">მხოლოდ 5 წუთი სასიარულო ზღვამდე</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Car className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">უფასო პარკინგი</h3>
              <p className="text-gray-600">დაცული პარკინგი ტერიტორიაზე ყველა სტუმრისთვის</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Tv className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">ტელევიზორი</h3>
              <p className="text-gray-600">თანამედროვე ტელევიზორი ყველა ოთახში</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 bg-nature/10 rounded-xl flex items-center justify-center mb-6">
                <Wifi className="w-7 h-7 text-nature" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">უფასო WiFi</h3>
              <p className="text-gray-600">სწრაფი ინტერნეტი მთელს ტერიტორიაზე</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 bg-sea/10 rounded-xl flex items-center justify-center mb-6">
                <HomeIcon className="w-7 h-7 text-sea" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">ოჯახური გარემო</h3>
              <p className="text-gray-600">იდეალურია ოჯახებისა და ჯგუფებისთვის</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">ოთახები</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              აირჩიეთ თქვენზე მორგებული ოთახი კომფორტული დასვენებისთვის
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Standard Room */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <div 
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80')`,
                }}
              />
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-800">სტანდარტული</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="text-gray-600">4.8</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">ორკაციანი საწოლი, TV, კონდიციონერი, სააბაზანო</p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    <BedDouble className="w-4 h-4" /> 2 საწოლი
                  </span>
                  <span className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    <Wifi className="w-4 h-4" /> WiFi
                  </span>
                  <span className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    <Tv className="w-4 h-4" /> TV
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-primary">₾80</span>
                    <span className="text-gray-500">/ღამე</span>
                  </div>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=მოგესალმებით!%20მაინტერესებს%20სტანდარტული%20ოთახის%20დაჯავშნა`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-nature text-white px-6 py-3 rounded-full font-medium hover:bg-nature/90 transition"
                  >
                    ჯავშნე
                  </a>
                </div>
              </div>
            </div>
            
            {/* Family Room */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <div 
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80')`,
                }}
              />
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-800">ოჯახური</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="text-gray-600">4.9</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">2 ოთახი, 4 საწოლი, სამზარეულო, სააბაზანო, ვერანდა</p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    <Users className="w-4 h-4" /> 4 სტუმარი
                  </span>
                  <span className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    <BedDouble className="w-4 h-4" /> 4 საწოლი
                  </span>
                  <span className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    <HomeIcon className="w-4 h-4" /> სამზარეულო
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-primary">₾150</span>
                    <span className="text-gray-500">/ღამე</span>
                  </div>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=მოგესალმებით!%20მაინტერესებს%20ოჯახური%20ოთახის%20დაჯავშნა`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-nature text-white px-6 py-3 rounded-full font-medium hover:bg-nature/90 transition"
                  >
                    ჯავშნე
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">სად მდებარეობს</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              მარტივად მოსახვედრი ადგილი ქობულეთის ცენტრთან ახლოს
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">მისამართი</h3>
                    <p className="text-gray-600">დ. აღმაშენებლის ქ., 361 ა, ქობულეთი, აჭარა</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-nature/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-nature" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">ტელეფონი</h3>
                    <p className="text-gray-600">{phoneNumber}</p>
                    <p className="text-gray-600">{phoneNumber2}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">სამუშაო საათები</h3>
                    <p className="text-gray-600">ჩაბარება: 14:00</p>
                    <p className="text-gray-600">გაყვანა: 12:00</p>
                    <p className="text-gray-600">რეცეფშენი: 24/7</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">მანძილები</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">ზღვა</span>
                    <span className="font-semibold text-gray-800">5 წთ სასიარულო</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">ქობულეთის ცენტრი</span>
                    <span className="font-semibold text-gray-800">10 წთ</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">რკინიგზის სადგური</span>
                    <span className="font-semibold text-gray-800">15 წთ</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">ბათუმის აეროპორტი</span>
                    <span className="font-semibold text-gray-800">40 წთ</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-96 lg:h-auto rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2983.4567890123456!2d41.8167!3d41.8167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQ5JzAwLjAiTiA0McKwNDknMDAuMCJF!5e0!3m2!1ska!2sge!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[20%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">სტუმრების შეფასებები</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              რას ამბობენ ჩვენს შესახებ
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "ძალიან მყუდრო ადგილია, ფიჭვნარის გარემო და მშვიდობა. პერსონალი ძალიან გულისხმიერია."
              </p>
              <div className="font-semibold text-gray-800">ნინო კ.</div>
              <div className="text-sm text-gray-500">ივლისი 2025</div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "ოჯახთან ერთად დავისვენეთ. ოთახები სუფთაა, პარკინგი უფასოა. ზღვასთან ახლოსაა."
              </p>
              <div className="font-semibold text-gray-800">გიორგი მ.</div>
              <div className="text-sm text-gray-500">აგვისტო 2025</div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "მეორედ ვაპირებთ მისვლას. ფასი და ხარისხი შესანიშნავია. გირჩევთ ყველას!"
              </p>
              <div className="font-semibold text-gray-800">მარიამ თ.</div>
              <div className="text-sm text-gray-500">სექტემბერი 2025</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            დაიჯავშნე ოთახი დღესვე!
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            ივლისის უქმეები თითქმის გაყიდულია! მოიქციე სწრაფად და დაიჯავშნე სასურველი ოთახი.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${whatsappNumber}?text=მოგესალმებით!%20მაინტერესებს%20ოთახის%20დაჯავშნა`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-nature text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-nature/90 transition flex items-center justify-center gap-2"
            >
              <span>ჯავშნე WhatsApp-ზე</span>
            </a>
            <a
              href="tel:+995599050549"
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>დაგვირეკე</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">დაგვიკავშირდი</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ნებისმიერი შეკითხვისთვის დაგვიკავშირდი
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-md transition group"
            >
              <div className="w-16 h-16 bg-nature/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-nature/20 transition">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">WhatsApp</h3>
              <p className="text-gray-600">{phoneNumber}</p>
            </a>
            
            <a
              href="tel:+995599050549"
              className="bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-md transition group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">ტელეფონი</h3>
              <p className="text-gray-600">{phoneNumber}</p>
              <p className="text-gray-600">{phoneNumber2}</p>
            </a>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">მისამართი</h3>
              <p className="text-gray-600">დ. აღმაშენებლის ქ., 361 ა</p>
              <p className="text-gray-600">ქობულეთი, აჭარა</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Trees className="w-6 h-6 text-nature" />
                <span className="text-xl font-bold">ლილე</span>
              </div>
              <p className="text-gray-400">
                საოჯახო სასტუმრო ქობულეთში. მყუდრო გარემო, ზღვასთან ახლოს.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">სწრაფი ბმულები</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition">მთავარი</a></li>
                <li><a href="#rooms" className="hover:text-white transition">ოთახები</a></li>
                <li><a href="#services" className="hover:text-white transition">სერვისები</a></li>
                <li><a href="#location" className="hover:text-white transition">ლოკაცია</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">კონტაქტი</h4>
              <ul className="space-y-2 text-gray-400">
                <li>{phoneNumber}</li>
                <li>{phoneNumber2}</li>
                <li>დ. აღმაშენებლის ქ., 361 ა</li>
                <li>ქობულეთი, აჭარა</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} სასტუმრო ლილე. ყველა უფლება დაცულია.
            </p>
            <p className="text-gray-500 text-sm">
              შექმნილია <span className="text-nature">SiTech</span>-ის მიერ
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
