

import React, {useState} from "react"
import axios from "axios"
import { GrDocumentUpload} from 'react-icons/gr'


const Cloudinary = ({addproduct}) => {
  
  const  [imageSelected , setImageSelected] = useState("")
  const  [image , setImage] = useState([])
   addproduct.image = image
  const uploadImage = async e => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "Kustoms-Sports")

    const res = await axios.post("https://api.cloudinary.com/v1_1/kustoms/image/upload", formData)
    const file = await res.data
    setImage([...image,file.secure_url])
  }

    return (
    <div className="App flex flex-col">
      <div className="flex flex-row">
      <input
      type="file"
      onChange={(e) => {setImageSelected(e.target.files[0])}}
      />
      <button onClick={uploadImage}><GrDocumentUpload className="w-[30px] h-[30px]"/></button>
      </div>

     {
     image?.map((e,i)=> {
   
      return (
        <div>
          <img id={i}
            src={e}
            alt="imagen del product"
            width="300px"
            height="300px"
          />
        </div>
    )})
     }
    </div>
  );
}

export default Cloudinary;