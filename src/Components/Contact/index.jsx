import React from "react";
import axios from "axios";



const ContactUs = () => {
  const sendMessage = (event) => {
    event.preventDefault();

    const token = "8091527756:AAErWWMRg6UTuaI3RIVjiizXhwasqEIhlFQ";
    const chat_id = "6643238247";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const name = document.getElementById("name").value.trim();
    const number = document.getElementById("number").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !number || !email || !message) {
      alert("Iltimos, barcha majburiy maydonlarni to‘ldiring!");
      return;
    }

    const messageContent = `
 Yangi xabar:

 Ismi: ${name}
 Telefon: ${number}
 Email: ${email}
 Mavzu: ${subject}
 Xabar: ${message}
`;

    axios.post(url, {
      chat_id: chat_id,
      text: messageContent,
    })
      .then(() => {
        alert("Xabar muvaffaqiyatli yuborildi!");
        document.getElementById("myform").reset();
      })
      .catch((error) => {
        console.error("Xabar yuborishda xatolik:", error);
      });
  };

  return (
   <div id="contact" className="bg-amber-50 py-10 mt-10">
     <div className="container max-w-[1260px] mx-auto px-4 ">
      <h2 className="text-black md:font-extrabold font-bold md:text-5xl text-3xl text-center">
        Contact Us
      </h2>
      <div className=" flex items-center justify-center mt-20">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* RIGHT SIDE - Contact Info */}
          <div className="order-1 md:order-2 flex flex-col justify-center">
              <p className="mb-4">
                <span className="font-bold text-2xl">Email:</span>{" "}info@luxlineuae.com
              </p>
            <p className="mb-4">
              <span className="font-bold text-2xl">Phone:</span> +971 52 133
              0070
            </p>
            <p>
              <span className="font-bold text-2xl">Address:</span> 11 Shaikh
              Mohammed Bin Zayed street – Al Sajaa – Sharjah
            </p>
          </div>

          {/* LEFT SIDE - Form */}
          <form
            id="myform"
            onSubmit={sendMessage}
            className="order-2 md:order-1 space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                id="name"
                type="text"
                placeholder="Name*"
                pattern="^[A-Za-z\s]+$"
                title="Ism faqat harflardan iborat bo‘lishi kerak"
                className="border border-red-200 rounded-lg px-4 py-3 focus:outline-none"
                required
              />

              <input
                id="number"
                type="tel"
                placeholder="Phone Number*"
                pattern="^\+998\d{9}$"
                title="Telefon raqam +998 bilan boshlanib, jami 9 ta raqamdan iborat bo‘lishi kerak"
                className="border border-red-200 rounded-lg px-4 py-3 focus:outline-none"
                required
                defaultValue="+998"
                onFocus={(e) => {
                  if (!e.target.value.startsWith("+998")) {
                    e.target.value = "+998";
                  }
                }}
                onChange={(e) => {
                  const cleaned = e.target.value.replace(/[^\d]/g, "");
                  e.target.value = "+998" + cleaned.slice(3, 12);
                }}
              />


            </div>
            <input
              id="email"
              type="email"
              placeholder="Email*"
              className="w-full border border-red-200 rounded-lg px-4 py-3 focus:outline-none"
              required
            />
            <input
              id="subject"
              type="text"
              placeholder="Your subject"
              className="w-full border border-red-200 rounded-lg px-4 py-3 focus:outline-none"
            />
            <textarea
              id="message"
              placeholder="Message"
              rows="6"
              className="w-full border border-red-200 rounded-lg px-4 py-3 focus:outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[#fff5ef] text-black font-bold py-3 px-10 rounded-lg border border-black hover:bg-black hover:text-white transition-all"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
   </div>
  );
};

export default ContactUs;
