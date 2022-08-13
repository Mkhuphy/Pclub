import React, { useEffect, useState } from 'react';
// import 'bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout, setProfile, uploadImage } from "./Firebase";

const Details = () => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/register");

      }, [user, loading]);

    const [data, setData] = useState({ name: "", email: "", phone: "", fb: "", insta: "", linkedin: "", college: "", twitter: "",image_url:null,referral_id:"", referred: false});
    const [image, setImage ] = useState(null);
    const [ url, setUrl ] = useState(null);
    const [ rby, setRby ] = useState("");

    const handleChange = event => {
        const { name, value } = event.target;
        setData({...data, [name]: value})
    };
    
    const handleChange1 = event => {
        const value  = event.target;
        console.log(typeof(value.value))
        setRby(value.value);
        console.log(typeof(rby))
    };

    const submitForm = (e) => {
        e.preventDefault();
        const j = (Math.round(1000000000 * Math.random()));
        const r = j.toString();
        data.referral_id= r;

        setUrl(uploadImage(image,user.uid));
        // setData({...data, [image_url]: {url}})
        console.log("sss"+rby+"sss")
        setProfile(data, user.uid, rby);
        setUrl('');
        setImage('');
        setData({ name: "", email: "", phone: "", fb: "", insta: "", linkedin: "", college: "", twitter: "" , image_url:null, referral_id:""});
        navigate("/Dashboard");
    }

    return (
        <div className='bacolor'>
        <div  >

        <form onSubmit={submitForm} >
    <div class="mb-6">
    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Year</label>
        <select id="underline_select" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="US">Other</option>
            <option value="CA">Y8</option>
            <option value="FR">Y9</option>
            <option value="FR">Y10</option>
            <option value="FR">Y11</option>
            <option value="FR">Y12</option>
            <option value="FR">Y13</option>
            <option value="FR">Y14</option>
            <option value="FR">Y15</option>
            <option value="FR">Y16</option>
            <option value="FR">Y17</option>
            <option value="FR">Y18</option>
            <option value="FR">Y19</option>
            <option value="FR">Y20</option>
            <option value="FR">Y21</option>
            <option value="FR">Y22</option>
        </select>
        
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gender</label>
        <select id="underline_select" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="US">Any</option>
            <option value="CA">Male</option>
            <option value="FR">Female</option>
        </select>
        
        </div>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hall</label>
        <select id="underline_select" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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
        <div class="mb-6">
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Programme</label>
        <select id="underline_select" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="CA">B.Tech</option>
            <option value="FR">M.Tech</option>
        </select>
        </div> 
        <div >
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Department</label>
        <select id="underline_select" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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
    <button id="states-button" data-dropdown-toggle="dropdown-states" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
        <svg aria-hidden="true" class="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
    <div id="dropdown-states" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="states-button">
            <li>
                <button type="button" class="inline-flex py-2 px-4 w-full text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <div class="inline-flex items-center">
                        A+
                    </div>
                </button>
            </li>
            <li>
                <button type="button" class="inline-flex py-2 px-4 w-full text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <div class="inline-flex items-center">
                        A-
                    </div>
                </button>
            </li>
            <li>
                <button type="button" class="inline-flex py-2 px-4 w-full text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <div class="inline-flex items-center">
                        B+
                    </div>
                </button>
            </li>
            <li>
                <button type="button" class="inline-flex py-2 px-4 w-full text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <div class="inline-flex items-center">
                        B-
                    </div>
                </button>
            </li>
            <li>
                <button type="button" class="inline-flex py-2 px-4 w-full text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <div class="inline-flex items-center">
                        O+
                    </div>
                </button>
            </li>
            <li>
                <button type="button" class="inline-flex py-2 px-4 w-full text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <div class="inline-flex items-center">
                        O-
                    </div>
                </button>
            </li>
        </ul>
    </div>
    <label for="states" class="sr-only">Choose a state</label>
    <select id="states" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>A(+) positive</option>
        <option value="CA">A(-) negative</option>
        <option value="CA">B(+) negative</option>
        <option value="CA">B(-) negative</option>
        <option value="CA">O(+) negative</option>
        <option value="CA">O(-) negative</option>
    </select>
        </div> 
    
        <div>
            <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hometown</label>
            <input name="fb" value={data.fb} type="url" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="hometown" required onChange={handleChange}/>
        </div>
        
    </div>
    <div class='mb-6'>
    <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name, Username or Roll no.</label>
            <input type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" onChange={handleChange1}/>
        </div>
        
    </div>
    
    
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
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