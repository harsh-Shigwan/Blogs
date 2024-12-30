import React, { useContext, useEffect, useState } from "react";
import edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";
import DOMPurify from "dompurify";
import Backend_API from "../../Backend_API";
const Single = () => {
  const [post, setPost] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const PostId = location.pathname.split("/")[2];
  const { currentUser } = useContext(AuthContext);
  //console.log(location);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${Backend_API}/api/posts/${PostId}`
        );
        setPost(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [PostId]);

  const handleDelete = async ()=>{
    try {
      await axios.delete(`${Backend_API}/api/posts/${PostId}`, {
        withCredentials: true,
      });
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  }
  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }


  return (
    <div className="single">
      {/* Content Section */}
      <div className="content">
        <img src={`../upload/${post.img}`} alt="Blogging illustration" />
        <div className="user">
         { post.userImg && <img
            src={post?.userImg}
            alt="User"
          />}
          <div className="info">
            <span>{post?.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser?.username === post?.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img src={edit} alt="Edit" />
              </Link>
              <img  onClick={handleDelete} src={Delete} alt="Delete" />
            </div>
          )}
        </div>
        <h1>
          {post.title}
        </h1>
        <p
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(post.desc),
        }}
        ></p> 
      </div>
      {/* Menu Section */}
      <Menu cat={post.cat}></Menu>
    </div>
  );
};

export default Single;
