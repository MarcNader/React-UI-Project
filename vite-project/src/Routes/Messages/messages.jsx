import "./messages.styles.scss"
import 'react-chat-elements/dist/main.css'
import { MessageBox } from 'react-chat-elements'
import { ChatList } from 'react-chat-elements'
import { ChatItem } from 'react-chat-elements'

import FirstContact from "../../assets/Messages/contact1.svg"
import SecondContact from "../../assets/Messages/contact2.svg"
import ThirdContact from "../../assets/Messages/contact3.svg"
import FourthContact from "../../assets/Messages/contact4.svg"
import FifthContact from "../../assets/Messages/contact5.svg"
import Pen from "../../assets/Messages/Pen.svg"
import communication from "../../assets/Messages/Communication.svg"
import { useState } from "react"
const Messages = () => {
    const [name,setName]=useState("Karim Benzema");
    const [Pic,setPic]=useState(FirstContact);
    const datasource=[
        {
            avatar:FirstContact,
            alt: 'Reactjs',
            title: 'Karim Benzema',
            subtitle: 'What are you doing?',
            date: new Date(),
            unread: 0,
            id:1,
        },
        {
            avatar: SecondContact,
            alt: 'Reactjs',
            title: 'Pedri Rodriguez',
            subtitle: 'What are you doing?',
            date: new Date(2022, 10, 1, 11, 30),
            unread: 0,
            id:2,

        },

        {
            avatar: ThirdContact,
            alt: 'Reactjs',
            title: 'Samir Rami',
            subtitle: 'What are you doing?',
            date: new Date(2022, 10, 1, 11, 20),
            unread: 0,
            id:3,

        },

        {
            avatar: FourthContact,
            alt: 'Reactjs',
            title: 'Marc Nader',
            subtitle: 'What are you doing?',
            date: new Date(2022, 10, 1, 11, 17),
            unread: 0,
            id:4,
        },
        {
            avatar:FifthContact,
            alt: 'Reactjs',
            title: 'Marc Nader',
            subtitle: 'What are you doing?',
            date: new Date(2022, 10, 1, 11, 15),
            unread: 0,
            id:5,
        },
        {
            avatar:FirstContact,
            alt: 'Reactjs',
            title: 'Marc Nader',
            subtitle: 'What are you doing?',
            date: new Date(2022, 10, 1, 11, 12),
            unread: 0,
            id:6,

        },
        {
            avatar: SecondContact,
            alt: 'Reactjs',
            title: 'Marc Nader',
            subtitle: 'What are you doing?',
            date: new Date(2022, 10, 1, 11, 10),
            unread: 0,
            id:7,

        },
        {
            avatar: ThirdContact,
            alt: 'Reactjs',
            title: 'Marc Nader',
            subtitle: 'What are you doing?',
            date: new Date(2022, 10, 1, 11, 8),
            unread: 0,
            id:8,
        },
        {
            avatar: FourthContact,
            alt: 'Reactjs',
            title: 'Marc Nader',
            subtitle: 'What are you doing?',
            date: new Date(2022, 10, 1, 11, 6),
            unread: 0,
            id:9,

        },
        {
            avatar:FifthContact,
            alt: 'Reactjs',
            title: 'Marc Nader',
            subtitle: 'What are you doing?',
            date: new Date(2022, 10, 1, 11, 2),
            unread: 0,
            id:10,

        },
      
       
    ]

    return (
        <div className="messages-container">

            
            <div className="white-cont mx-4 my-4">


            <div className="first-column ms-4 my-4">

                <div className="messages-titles">  
                    <h3>Messages</h3>
                    <img src={Pen} alt="" />
            
                 </div>

                 <input
                    className='messages-search'
                    type='search'
                    placeholder="search.."
                />

                <ChatList
                    className='chat-list'
                    dataSource={datasource}
                    onClick={ (event)=> {
                        setName(event.title);
                        setPic(event.avatar);
                    }}
                    
                    />

                   

            </div>


            <div className="second-column mx-4 my-4">
                
                <div className="header">
                    <div className="messages-titles my-3 mx-3">  

                            <div className="d-flex align-items-center">

                                <img src={Pic} id="avatar"  />

                                <div className="d-flex flex-column">
                                <h5>{name}</h5>
                                <h6 className="text-secondary">Active Now</h6>

                                </div>
                            </div>
                        <img src={communication} alt="" />



                    </div>
                </div>

                <div className="Chat-Body">

                        <div>
                        <div className="reply-message mt-4 ms-4">
                            <img src={Pic}  id="avatar" />
                            <div className="message-box">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur alias libero doloribus quisquam neque molestias quos reprehenderit quaerat, iure explicabo.</div>
                            </div>
                            <div className="d-flex justify-content-end mt-2" id="message-time">5:45pm</div>
                            </div>

                        
                      
                    
                 </div>
                    
            </div>








            </div>



        </div>
    )
}

export default Messages