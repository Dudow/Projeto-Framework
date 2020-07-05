import React from 'react'

import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { FiUser } from 'react-icons/fi'
import { BsUpload } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";

export default function Post({dados}) {
    return (
        <li>
            <div className="space-photo">
                <div className="fake-photo"><FiUser />{dados.userId}</div>
            </div>
            <div className="post-area">
                <div>
                    <span className="post-user">
                        <span>
                            
                            Usuário maneiro {dados.userId}
                        </span>
                        <span>
                            @User {dados.userId}
                        </span>
                    </span>

                    <span className="post-title">{dados.title}</span>
                    {dados.body}
                </div>

                <div className="tt-Icons">
                    <span><FaRegComment /></span>
                    <span><AiOutlineRetweet /></span>
                    <span><FaRegHeart /></span>
                    <span><BsUpload /></span>
                </div>
            </div>
        </li>
    )

}



