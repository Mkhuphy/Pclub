import userEvent from "@testing-library/user-event";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout, setProfile, uploadImage } from "./Firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { Button, Modal, Accordion } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { async } from "@firebase/util";
import Sidebar from "../components/Navbar/Sidebar";
// import "./style.css";
import "../index.css";
export default function Dashboard() {

        // const cafeList = document.querySelector('#cafe-list');
        // const form = document.querySelector('#add-cafe-form');


        const [values, setValues] = useState([]);
        const global_data = [];
        const global_data_key = [];


        useEffect(() => {
          global_data && global_data.length > 0 && we()
        },[global_data])


          async function  we (){
              console.log("FN called");

              const citiesRef = collection(db,'People');
              const snapshot = await getDocs(citiesRef);
              // hideFunction(form.name.value);
              snapshot.forEach(doc => {
                // console.log(doc.id, '=>', doc.data());
                // renderCafe1(doc);
                var temp_arr = [];
                var temp_arr_key = [];
                var key = "";
                for (key in doc.data()) {
                  temp_arr.push(doc.data()[key]);
                  temp_arr_key.push(key);
                }
                global_data.push(temp_arr);
                global_data_key.push(temp_arr_key);
              });
              setValues(global_data);
          }
          we();

          function hideFunction() {
            // Declare variables
            var input, filter, ul, li, a, i, txtValue;
            input = document.getElementById('name').value;
            filter = input.toUpperCase();
            ul = document.getElementById("cafe-list"); 
            li = ul.getElementsByTagName('li');

            // Loop through all list items, and hide those who don't match the search query
            for (i = 0; i < li.length; i++) {
              // a = li[i].getElementsByTagName("a")[0];
              // x = li[i].getel
              for(var j = 0; j<li[i].childElementCount; j++){
                var temp = (li[i].childNodes[j].textContent).toString().toUpperCase();
                var pos = temp.indexOf(filter);
                if(pos!=-1){
                  li[i].style.display = "block";
                  break;
                }
                if(j==(li[i].childElementCount-1)){
                  li[i].style.display = "none";
                }
              }
          
            }
          }
          return(
            <>
             <div className="margin2">             
            
            <div class="p-4 w-full max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
               
                <div class="flex justify-between items-center mb-4">
                    <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">All Students</h5>
              </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            

        {values.map((value, index) => {
            
            return (
              <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                      <img class="w-8 h-8 rounded-full" src="pclub.png" alt="Neil image"/>
                  </div>
                  <div class="flex-1 min-w-0">

                      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Neil Sims
                      </p>
                      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          email@windster.com
                      </p>
                      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          210569
                      </p>

                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      Y18
                  </div>
              </div>
          </li>
            );
          })}
        </ul>
   </div>
</div>
              </div>
            </>
          )

}
