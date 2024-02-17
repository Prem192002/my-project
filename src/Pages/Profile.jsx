


import loginBackground from '../images/loginbackground.jpg';

function Profile() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${loginBackground})`}}>
        <div class="flex items-center justify-center bg-gray-900 bg-opacity-70 rounded-xl shadow-lg w-80 h-80vw"> 
            <div class="relative z-10 bg-black bg-opacity-50 p-10 rounded-lg flex flex-col items-center text-left w-full">
            <div class="mb-6">
                <div class="rounded-full overflow-hidden border-2 border-white">
                    <img src="https://lh3.googleusercontent.com/a/ACg8ocIyTOK0ddMY3aoEXSiGwU75t3O3etBPHZeG1CSsZSHvHKs=s96-c" alt="Profile Picture" class="w-24 h-24"/>
                </div>
            </div>
            <div class="text-white text-center">
                <h1 class="text-2xl font-bold">User</h1>
                <h3 class="text-lg">VIT Bhopal University</h3>
            </div>
            <div class="text-white mt-6 text-left max-w-sm">
                <div class="mb-4">
                    <h3 class="text-lg font-bold mb-2">Bio</h3>
                    <p class="text-sm text-justify font-comforter">My love for gaming started when I was a kid, and I've been hooked ever since. If you're passionate about gaming, let's play together and see where this adventure takes us!</p>
                </div>
                <div>
                    <h3 class="text-lg font-bold mb-2">Interests</h3>
                    <ul class="flex flex-wrap">
                        <li class="bg-white bg-opacity-20 rounded-full px-4 py-2 mr-2 mb-2">Gaming</li>
                        <li class="bg-white bg-opacity-20 rounded-full px-4 py-2 mr-2 mb-2">Music</li>
                        <li class="bg-white bg-opacity-20 rounded-full px-4 py-2 mr-2 mb-2">Coding</li>
                        <li class="bg-white bg-opacity-20 rounded-full px-4 py-2 mr-2 mb-2">Reading</li>
                        <li class="bg-white bg-opacity-20 rounded-full px-4 py-2 mr-2 mb-2">Travelling</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Profile;
