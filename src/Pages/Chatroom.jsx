import loginBackground from '../images/loginbackground.jpg';
import buttonImage1 from '../images/profile.png'; 
import buttonImage2 from '../images/chat.png';
import buttonImage3 from '../images/setting.png';
import buttonImage4 from '../images/call.png';

import React from "react";

const ChatRoom = () => {
  const users = [
    {
      id: 1,
      username: "John Doe",
      lastMessage: "Hello there!",
      profilePic:
        "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
      online: true,
    },
    {
      id: 2,
      username: "Jane Smith",
      lastMessage: "Never Mind",
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDPIyqWfILYR2-i9tXjJxSA_SrgclY9z5Y1GSsQe5BIlOmHTGyqUegnK-8OrmKUCB-CCI&usqp=CAU",
      online: false,
    },
    {
      id: 3,
      username: "Jack Brown",
      lastMessage: "Hi! How are you doing?",
      profilePic: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
      online: true,
    },
    {
      id: 4,
      username: "Jane Smith",
      lastMessage: "Hi! How are you doing?",
      profilePic: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
      online: true,
    },
    {
        id: 41,
        username: "Jane Smith",
        lastMessage: "Hi! How are you doing?",
        profilePic: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
        online: true,
      },
      {
        id: 4,
        username: "Jane Smith",
        lastMessage: "Hi! How are you doing?",
        profilePic: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
        online: true,
      },{
        id: 4,
        username: "Jane Smith",
        lastMessage: "Hi! How are you doing?",
        profilePic: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
        online: true,
      },{
        id: 42,
        username: "Jane Smith",
        lastMessage: "Hi! How are you doing?",
        profilePic: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
        online: true,
      },{
        id: 34,
        username: "Jane Smith",
        lastMessage: "Hi! How are you doing?",
        profilePic: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
        online: true,
      },{
        id: 324,
        username: "Jane Smith",
        lastMessage: "Hi! How are you doing?",
        profilePic: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
        online: true,
      },
    // Add more users as needed
  ];

  const a = true;

  
  return (
    <div className="flex flex-col min-h-screen bg-black text-white relative">
      <nav className="bg-black border-b-2 border-gray-600 sticky top-0 z-10">
        <div className="max-w-screen-2xl flex flex-wrap flex-grow items-center justify-between mx-auto p-4">
          <a href="." className="flex items-center  space-x-3 rtl:space-x-reverse">
            <div className="relative inline-block mr-1">
              <img
                className="inline-block size-[46px] rounded-full"
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                alt="DP"
              />
              <span
                className={`absolute top-0 end-0 block size-3 rounded-full ring-2 ring-white ${
                  a ? "bg-teal-400" : "bg-amber-400"
                }`}
              ></span>
            </div>
            <span className="self-center text-2xl font-bold whitespace-nowrap">
              John Doe
            </span>
          </a>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a href="/call">
              <svg
                className="w-8 h-8 text-[#EF1E57]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m18.4 14.8-1.2-1.3a1.7 1.7 0 0 0-2.4 0l-.7.7a1.7 1.7 0 0 1-2.4 0l-1.9-1.9a1.7 1.7 0 0 1 0-2.4l.7-.6a1.7 1.7 0 0 0 0-2.5L9.2 5.6a1.6 1.6 0 0 0-2.4 0c-3.2 3.2-1.7 6.9 1.5 10 3.2 3.3 7 4.8 10.1 1.6a1.6 1.6 0 0 0 0-2.4Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      <div className="flex-grow overflow-y-auto">
      <ul class="space-y-5 mx-4 mt-6">
            <li class="max-w-lg flex gap-x-2 sm:gap-x-4 me-11">
              <img
                class="inline-block size-9 rounded-full"
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                alt="profile-pic"
              />

              <div>
                <div class="bg-[#EF1E57] text-white rounded-2xl py-2 px-4 space-y-3">
                  <p class="text-sm">Hi!</p>
                </div>
                <span class="mt-1.5 ml-3 ms-auto flex items-center gap-x-1 text-[9px] text-gray-200">
                  12:03
                </span>
              </div>
            </li>

            <li class="flex ms-auto gap-x-2 sm:gap-x-4">
              <div class="grow text-end space-y-3">
                <div class="inline-flex flex-col justify-end">
                  <div class="inline-block bg-blue-600 rounded-2xl py-2 px-4 shadow-sm">
                    <p class="text-sm text-white">Hello! My name is Lucia</p>
                  </div>

                  <span class="mt-1.5 flex mr-3 justify-end gap-x-1 text-[9px] text-gray-200">
                    12:05
                  </span>
                </div>
              </div>

              <span class="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
                <img
                  class="inline-block size-9 rounded-full"
                  src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
                  alt="profile-pic"
                />
              </span>
            </li>

           


            <li class="max-w-lg flex gap-x-2 sm:gap-x-4 me-11">
              <img
                class="inline-block size-9 rounded-full"
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                alt="dp"
              />

              <div>
                <div class="bg-[#EF1E57] rounded-2xl px-4 py-2 space-y-3">
                  <p class="text-sm text-white">
                    Preline UI is an open-source set of prebuilt UI components
                    based on the utility-first Tailwind CSS framework.
                  </p>
                </div>

                <span class="mt-1.5 flex ml-3 justify-start gap-x-1 text-[9px] text-gray-200">
                  12:08
                </span>
              </div>
            </li>
          </ul>
      </div>

      <div className="flex mt-8 items-center px-3 sticky bottom-0 z-10">
        <input
          type="text"
          placeholder="Message"
          className="flex-grow text-white p-3 bg-gray-900 border border-gray-800 rounded-l-md focus:outline-none"
        />
        <button className="px-6 py-4 bg-[#EF1E57] text-white rounded-r-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
</svg>        </button>
      </div>
    </div>
  );
};

export default ChatRoom;