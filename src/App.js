import { useState, useEffect } from 'react';


function App() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const launchDate = new Date('May 30, 2025').getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);

      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-red-100 flex flex-col font-sans">
      {/* Header */}
      <header className="w-full py-6 px-8 flex justify-between items-center bg-white shadow-sm">
  <div className="flex items-center">
    <img src="/logo.jpeg" alt="LitStudio Logo" className="h-16 w-auto object-contain" />
  </div>
  <a
    href="https://wa.me/+1234567890"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition duration-300"
  >
    Contact Us
  </a>
</header>


      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 text-center py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-black">Discover Book Smile </span>
          <span className="text-red-500 italic">Photography Simplified</span>
        </h1>

        <p className="text-lg md:text-xl mb-12 max-w-2xl text-gray-700 leading-relaxed">
          We're building a marketplace where you can book professional photographers across various categories.
          Our platform is launching soon, but you can already book photographers via WhatsApp!
        </p>

        {/* Countdown */}
        <div className="mb-20 relative">
          <h3 className="text-xl font-medium mb-6 text-gray-700">Launching In</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[{ label: 'Days', value: days },
              { label: 'Hours', value: hours },
              { label: 'Minutes', value: minutes },
              { label: 'Seconds', value: seconds }].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-red-500 to-red-600 p-1 rounded-xl shadow-lg">
                <div className="bg-white rounded-lg p-4 w-24 h-28 flex flex-col items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-105">
                  <span className="text-3xl font-bold text-red-500">{item.value}</span>
                  <span className="text-gray-700 font-medium mt-1">{item.label}</span>
                  <div className="w-12 h-1 bg-red-200 rounded-full mt-1"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute -z-10 w-full h-full top-0 flex justify-center items-center opacity-10">
            <div className="w-32 h-32 bg-red-400 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-6 mb-20 px-4">
          {['Event Photography', 'Personal Photoshoot', 'Wedding Photography', 'Food Photography', 'Product Photography'].map((text, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-md flex flex-col items-center justify-center w-40 hover:shadow-lg transition">
              
              <span className="font-medium text-sm text-gray-800 text-center">{text}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md text-center mb-20">
          <h2 className="text-2xl font-bold mb-4">Book a Photographer Now!</h2>
          <p className="mb-6 text-gray-700">
            Don't wait for our launch! Contact us on WhatsApp to book your photographer today.
          </p>
          <a
            href="https://wa.me/=+917208353481"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-green-600 transition duration-300"
          >
            
            Book via WhatsApp
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-10 px-6 bg-red-500 text-white">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start">
  <img src="/logo.jpeg" alt="LitStudio Logo" className="h-16 w-auto object-contain" />
</div>
            <p className="text-sm mt-2">© 2025 LitStudio. All rights reserved.</p>
          </div>

          <div className="flex gap-5 justify-center">
           
          </div>
        </div>

        <div className="mt-10 text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-white">
            <div>
              <span className="font-bold block mb-1 text-xl">10+</span>
              <span>Photographers</span>
            </div>
            <div>
              <span className="font-bold block mb-1 text-xl">4K+</span>
              <span>Photoshoots Completed</span>
            </div>
            <div>
              <span className="font-bold block mb-1 text-xl">22K+</span>
              <span>Happy Customers</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
