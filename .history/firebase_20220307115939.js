// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBY7ouuqokzJkB1_kmuH9wUXa8g2AAZkLk",
    authDomain: "screenrecord-a2545.firebaseapp.com",
    projectId: "screenrecord-a2545",
    storageBucket: "screenrecord-a2545.appspot.com",
    messagingSenderId: "674019972480",
    appId: "1:674019972480:web:54ba1124dd7ce895219d65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(app);
const storageRef = ref(storage, 'Record');

// 'file' comes from the Blob or File API
const uploadToStorage = (blobUrl) => {
    getFileBlob(blobURL, blob => {
    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
    });
})}

const getFileBlob = (url, cb) => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.addEventListener('load', function() {
      cb(xhr.response);
    });
    xhr.send();
  };