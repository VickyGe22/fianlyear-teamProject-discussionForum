"use client"; //这个是一个指令，用来告诉Code Insight这个文件是一个客户端文件，而不是服务器端文件

import { useState } from "react";  

export default function ContactForm() { //这里是一个表单，用来提交数据
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();   //阻止默认行为

    console.log("Full name: ", fullname);    //打印出来
    console.log("Email: ", email);
    console.log("Message: ", message);

    const res = await fetch("api/contact", {   //发送请求,我们应该是api/submit
      method: "POST",                          //对应route.js里的POST
      headers: {
        "Content-type": "application/json",    
      },
      body: JSON.stringify({    //将数据转换为JSON格式,并发送fullname,email,message数据
        fullname,
        email,          
        message,
      }),
    });

    const { msg, success } = await res.json();    //接收返回的数据,error和success
    setError(msg);
    setSuccess(success);

    if (success) {
      setFullname("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}  
        className="py-4 mt-4 border-t flex flex-col gap-5"
      >
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            id="fullname"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
            placeholder="john@gmail.com"
          />
        </div>

        <div>
          <label htmlFor="message">Your Message</label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="h-32"
            id="message"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <button className="bg-green-700 p-3 text-white font-bold" type="submit">
          Send
        </button>
      </form>

      <div className="bg-slate-100 flex flex-col">
        {error &&
          error.map((e) => (
            <div
              className={`${
                success ? "text-green-800" : "text-red-600"
              } px-5 py-2`}
            >
              {e}
            </div>
          ))}
      </div>
    </>
  );
}