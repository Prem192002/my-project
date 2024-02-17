
import loginBackground from '../images/loginbackground.jpg';
import React, { useState } from 'react';

function Form() {
  const [selectedInterests, setSelectedInterests] = useState([]);
  
  const handleInterestChange = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(item => item !== interest));
    } else {
      if (selectedInterests.length < 5) {
        setSelectedInterests([...selectedInterests, interest]);
      }
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${loginBackground})`}}>
      <div className="flex items-center justify-center bg-gray-900 bg-opacity-70 rounded-xl shadow-lg w-full max-w-lg p-8">
        <div className="w-full overflow-y-auto" style={{ maxHeight: '80vh' }}>
          <h1 className="text-white text-4xl font-semibold mb-6">Let Us Know You</h1>
          <form>
            <div className="flex flex-wrap -mx-4 mb-6">
              
              <div className="w-full md:w-1/2 px-4 mb-6">
              <label className="block text-white text-2xl font-medium mb-2" htmlFor="batch">Batch</label>

                <select id="batch" name="batch" className="appearance-none bg-gray-800 rounded w-full py-2 px-3 text-white text-lg leading-tight focus:outline-none focus:bg-gray-700">
                  <option value="">Select Batch</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="below">Below 2019</option>
                </select>
              </div>
              <div className="w-full px-4 mb-6">
                <span className="block text-white text-2xl font-medium mb-2">Gender</span>
                <div className="text-white">
                  <input type="radio" id="male" name="gender" value="male" className="form-radio" />
                  <label htmlFor="male" className="ml-2 mr-8 text-lg">Male</label>
                  <input type="radio" id="female" name="gender" value="female" className="form-radio" />
                  <label htmlFor="female" className="ml-2 text-lg">Female</label>
                </div>
              </div>
              <div className="w-full px-4 mb-6">
                <span className="block text-white text-2xl font-medium mb-2">Interest (Choose up to 5)</span>
                <div className="text-white">
                <label htmlFor="outdoorActivities" className="flex items-center cursor-pointer mb-2">
                    <input type="checkbox" id="outdoorActivities" name="outdoorActivities" value="Outdoor Activities" className="form-checkbox" onChange={() => handleInterestChange("Outdoor Activities")} disabled={selectedInterests.length === 5 && !selectedInterests.includes("Outdoor Activities")} />
                    <span className="ml-2">Outdoor Activities</span>
                  </label>
                  <label htmlFor="foodAndCulinary" className="flex items-center cursor-pointer mb-2">
                    <input type="checkbox" id="foodAndCulinary" name="foodAndCulinary" value="Food and Culinary" className="form-checkbox" onChange={() => handleInterestChange("Food and Culinary")} disabled={selectedInterests.length === 5 && !selectedInterests.includes("Food and Culinary")}/>
                    <span className="ml-2">Food and Culinary</span>
                  </label>
                  <label htmlFor="artsAndCreativity" className="flex items-center cursor-pointer mb-2">
                    <input type="checkbox" id="artsAndCreativity" name="artsAndCreativity" value="Arts and Creativity" className="form-checkbox" onChange={() => handleInterestChange("Arts and Creativity")} disabled={selectedInterests.length === 5 && !selectedInterests.includes("Arts and Creativity")} />
                    <span className="ml-2">Arts and Creativity</span>
                  </label>
                  <label htmlFor="fitnessAndSports" className="flex items-center cursor-pointer mb-2">
                    <input type="checkbox" id="fitnessAndSports" name="fitnessAndSports" value="Fitness and Sports" className="form-checkbox" onChange={() => handleInterestChange("Fitness and Sports")} disabled={selectedInterests.length === 5 && !selectedInterests.includes("Fitness and Sports")} />
                    <span className="ml-2">Fitness and Creativity</span>
                  </label>
                  <label htmlFor="travelAndExploration" className="flex items-center cursor-pointer mb-2">
                    <input type="checkbox" id="travelAndExploration" name="travelAndExploration" value="Travel and Exploration" className="form-checkbox" onChange={() => handleInterestChange("Travel and Exploration")} disabled={selectedInterests.length === 5 && !selectedInterests.includes("Travel and Exploration")}/>
                    <span className="ml-2">Travel and Exploration</span>
                  </label>
                  <label htmlFor="entertainment" className="flex items-center cursor-pointer mb-2">
                    <input type="checkbox" id="entertainment" name="entertainment" value="Entertainment" className="form-checkbox" onChange={() => handleInterestChange("Entertainment")} disabled={selectedInterests.length === 5 && !selectedInterests.includes("Entertainment")}/>
                    <span className="ml-2">Entertainment</span>
                  </label>
                  <label htmlFor="socialActivities" className="flex items-center cursor-pointer mb-2">
                    <input type="checkbox" id="socialActivities" name="socialActivities" value=" Social Activities" className="form-checkbox" onChange={() => handleInterestChange("Social Activities")} disabled={selectedInterests.length === 5 && !selectedInterests.includes("Social Activities")}/>
                    <span className="ml-2">Social Activities</span>
                  </label>
                  <label htmlFor="personalDevelopment" className="flex items-center cursor-pointer mb-2">
                    <input type="checkbox" id="personalDevelopment" name="personalDevelopment" value=" Persoanl Development" className="form-checkbox" onChange={() => handleInterestChange("Persoanl Development")} disabled={selectedInterests.length === 5 && !selectedInterests.includes("Persoanl Development")}/>
                    <span className="ml-2">Persoanl Development</span>
                  </label>
                  <label htmlFor="pets" className="flex items-center cursor-pointer mb-2">
                    <input type="checkbox" id="pets" name="pets" value=" Pets" className="form-checkbox" onChange={() => handleInterestChange("Pets")} disabled={selectedInterests.length === 5 && !selectedInterests.includes("Pets")}/>
                    <span className="ml-2">Pets</span>
                  </label>
                  <label htmlFor="sports" className="flex items-center cursor-pointer mb-2">
                    <input type="checkbox" id="sports" name="sports" value=" Sports" className="form-checkbox" onChange={() => handleInterestChange("Sports")} disabled={selectedInterests.length === 5 && !selectedInterests.includes("Sports")}/>
                    <span className="ml-2">Sports</span>
                  </label>
                </div>
              </div>
              <div className="w-full px-4 mb-6">
                <span className="block text-white text-2xl font-medium mb-2">Bio</span>
                <textarea id="bio" name="bio" rows="4" className="appearance-none bg-gray-800 rounded w-full py-2 px-3 text-white text-lg leading-tight focus:outline-none focus:bg-gray-700"></textarea>
              </div>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
