import {useState, useEffect} from 'react'
import FileUploadForm from '../FileUploadForm'
import axios from 'axios'

export default function Profile({currentUser, users}) {
    // const [msg, setMsg] = useState('')
    const [displayImg, setDisplayImg] = useState('')

    // // useEffect is used to receive data from the backend
    // useEffect(() => {
    //     (async () => {
    //         try {
    //             // get the token from the local storage
    //             const token = localStorage.getItem('jwt')
    //             // make the auth headers
    //             const options = {
    //                 headers: {
    //                     'Authorization': token
    //                 }
    //             }
    //             const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/auth-locked`, options)
    //             // set the data from the server in state
    //             setMsg(response.data.msg)
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     })()
    // }, [])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/${currentUser.id}`)
          .then((response) => {
            //   console.log(response.data)
            setDisplayImg(`https://res.cloudinary.com/solful/image/upload/c_thumb,g_face,h_300,w_300/${response.data.avatar}.png`)
          })
          .catch((err) => {
            console.log(err)
          })
      }, [])

      console.log(displayImg)
    
    return (
        <div className="center">
          <h1>DevelUp Profile</h1>
          {displayImg === `https://res.cloudinary.com/solful/image/upload/c_thumb,g_face,h_300,w_300/undefined.png` ? 'No Profile Picture'
             : displayImg
             &&
             <img 
             src={displayImg}
             alt="Profile picture"
             />}







            {/* {
              displayImg
              &&
              <img 
              src={displayImg}
              alt="Profile picture"
              />
            } */}
            <h3>{currentUser.name} | {currentUser.email}</h3>
            <FileUploadForm currentUser={currentUser} setDisplayImg={setDisplayImg} users={users}/>
            
        </div>
    )
}