import React from "react";
import buttonImage1 from '../images/profile.png'; 
import buttonImage2 from '../images/chat.png';
import buttonImage3 from '../images/setting.png';
import buttonImage4 from '../images/call.png';

const Chatlist = () => {
  const users = [
    {
      id: 1,
      username: "John Doe",
      lastMessage: "Hello there!",
      profilePic:
        "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
      online : true  
    },
    {
      id: 2,
      username: "Jane Smith",
      lastMessage: "Never Mind",
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDPIyqWfILYR2-i9tXjJxSA_SrgclY9z5Y1GSsQe5BIlOmHTGyqUegnK-8OrmKUCB-CCI&usqp=CAU",
      online : false  
    },
    {
      id: 3,
      username: "Jack Brown",
      lastMessage: "Hi! How are you doing?",
      profilePic: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
      online : true  
    },
    {
      id: 4,
      username: "Jane Smith",
      lastMessage: "Hi! How are you doing?",
      profilePic: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
      online : true  

    },
    
  ];

  return (
    <div className="bg-black text-white h-screen">


<nav class="bg-black pt-2 border-gray-200">
  <div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FlingZ</span>
  </a>
  <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <a href="/profile">
      <img class="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDPIyqWfILYR2-i9tXjJxSA_SrgclY9z5Y1GSsQe5BIlOmHTGyqUegnK-8OrmKUCB-CCI&usqp=CAU" alt="profile-pic" />
      </a>
  </div>
  </div>
</nav>


  <h1 className="text-3xl font-bold m-4">Messages</h1>

  <ul>
    {users.map((user, index) => (

        <div className="flex hover:bg-gray-900 w-full bg-black shadow-sm p-4 md:p-5">
          <div class="relative inline-block mr-3">
  <img class="inline-block size-[46px] rounded-full" src={user.profilePic} alt="" />
  <span className={`absolute top-0 end-0 block size-3 rounded-full ring-2 ring-white ${user.online ? 'bg-teal-400' : 'bg-amber-400'}`}></span>
</div>
          <div className="flex flex-grow items-center">
            <div className="flex flex-col">
              <p className="text-lg font-semibold">{user.username}</p>
              <p className="text-gray-300">{user.lastMessage}</p>
            </div>
            <div className="flex-grow"></div>
            <div className="flex items-center">
              <p className="text-gray-300 text-xs mr-2">15:03</p>
            </div>
          </div>
        </div>
    ))}
  </ul>
  
        <div className="flex justify-around w-full py-2 absolute bottom-0">
          <button>
            <img src={buttonImage1} alt="Profile" className="w-10 h-10" />
          </button>
          <button>
            <img src={buttonImage4} alt="Chat" className="w-10 h-10" />
          </button>
          <button>
            <img src={buttonImage2} alt="Call" className="w-10 h-10" />
          </button>
          <button>
            <img src={buttonImage3} alt="Setting" className="w-10 h-10" />
          </button>
        </div>
      
</div>


  );
};

export default Chatlist;