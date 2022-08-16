import React, { useEffect, useState } from 'react';
// import 'bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout, setProfile, uploadImage } from "./Firebase";

const Details = () => {

    const [data, setData] = useState({ year: "year", email: "", phone: "", fb: "", insta: "", linkedin: "", college: "", twitter: "",image_url:null,referral_id:"", referred: false});

    const handleChange = event => {
        const { name, value } = event.target;
        setData({...data, [name]: value})
        console.log(data.year);
    };

    return (
        <div className='bacolor'>
        <div  >

        <form >
    <div className="mb-6">
    <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Year</label>
        <select id="underline_select" name="year" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange}>
            <option value="Other">Other</option>
            <option value="Y8">Y8</option>
            <option value="Y9">Y9</option>
            <option value="Y10">Y10</option>
            <option value="Y11">Y11</option>
            <option value="Y12">Y12</option>
            <option value="Y13">Y13</option>
            <option value="Y14">Y14</option>
            <option value="Y15">Y15</option>
            <option value="Y16">Y16</option>
            <option value="Y17">Y17</option>
            <option value="Y18">Y18</option>
            <option value="Y19">Y19</option>
            <option value="Y20">Y20</option>
            <option value="Y21">Y21</option>
            <option value="Y22">Y22</option>
        </select>
        
        <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gender</label>
        <select id="underline_select" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="US">Any</option>
            <option value="CA">Male</option>
            <option value="FR">Female</option>
        </select>
        
        </div>
    <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
        <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hall</label>
        <select id="underline_select" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="CA">Hall 1</option>
            <option value="FR">Hall 2</option>
            <option value="FR">Hall 3</option>
            <option value="FR">Hall 4</option>
            <option value="FR">Hall 5</option>
            <option value="FR">Hall 6</option>
            <option value="FR">Hall 7</option>
            <option value="FR">Hall 8</option>
            <option value="FR">Hall 9</option>
            <option value="FR">Hall 11</option>
            <option value="FR">Hall 12</option>
            <option value="FR">Hall 13</option>
        </select>
        </div>
        <div className="mb-6">
        <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Programme</label>
        <select id="underline_select" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="CA">B.Tech</option>
            <option value="FR">M.Tech</option>
        </select>
        </div> 
        <div >
        <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Department</label>
        <select id="underline_select" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="CA">any</option>
            <option value="CA">ME</option>
            <option value="FR">EE</option>
            <option value="FR">CSE</option>
            <option value="FR">MTH</option>
            <option value="FR">BSBE</option>
            <option value="FR">CE</option>
            <option value="FR">CHE</option>
            <option value="FR">MSE</option>
            <option value="FR">AE</option>
            <option value="FR">ECO</option>
        </select>
        </div> 
    <div >
    <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Blood Group</label>
    <div id="dropdown-states" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="states-button">
            
            <li>
                <button type="button" className="inline-flex py-2 px-4 w-full text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <div className="inline-flex items-center">
                        A-
                    </div>
                </button>
            </li>
            <li>
                <button type="button" className="inline-flex py-2 px-4 w-full text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <div className="inline-flex items-center">
                        B+
                    </div>
                </button>
            </li>
            <li>
                <button type="button" className="inline-flex py-2 px-4 w-full text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <div className="inline-flex items-center">
                        B-
                    </div>
                </button>
            </li>
            <li>
                <button type="button" className="inline-flex py-2 px-4 w-full text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <div className="inline-flex items-center">
                        O+
                    </div>
                </button>
            </li>
            <li>
                <button type="button" className="inline-flex py-2 px-4 w-full text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <div className="inline-flex items-center">
                        O-
                    </div>
                </button>
            </li>
        </ul>
    </div>
    <label for="states" className="sr-only">Choose a state</label>
    <select id="states" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>A(+) positive</option>
        <option value="CA">A(-) negative</option>
        <option value="CA">B(+) negative</option>
        <option value="CA">B(-) negative</option>
        <option value="CA">O(+) negative</option>
        <option value="CA">O(-) negative</option>
    </select>
        </div> 
        
    </div>
    <div className='mb-6'>
    <div>
            <label for="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hometown</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hometown" onChange={handleChange}/>
        </div>
    <div>
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name, Username or Roll no.</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" onChange={handleChange}/>
        </div>
        
    </div>
    
    
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

        </div>        
        </div>
        );
    };
    
    
export default Details;

{/* <label>
Twitter Profile Link: 
<input id="twitter" type="text" name="twitter" placeholder='twitterId' onChange={handleChange} value={data.twitter}/>
</label> */}