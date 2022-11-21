import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import InputOption from "../../common/InputOption";
import Post from "./Post/post";
import { db } from "./../../firebase";
import { useSelector } from "react-redux";
import firebase from "firebase/compat/app";
import FlipMove from "react-flip-move";

function Feed() {
  const { user } = useSelector((state) => state.user);
  console.log("user", user);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      email: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feedInputContainer">
        <div className="feedInput">
          <CreateIcon />
          <form>
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
            <button onClick={sendPost} type="submit">
              send
            </button>
          </form>
        </div>

        <div className="feedInputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#7085F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
        </div>
      </div>
      {/* Posts */}
      <FlipMove>
        {posts.map(({ id, data: { name, email, message, photoUrl } }) =>
          user.email === email ? (
            <Post key={id} name={name} email={email} message={message} photoUrl={photoUrl} />
          ) : null
        )}
      </FlipMove>
    </div>
  );
}

export default Feed;
