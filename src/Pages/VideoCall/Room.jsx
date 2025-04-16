import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaVideo, FaUserFriends, FaArrowRight } from "react-icons/fa";

const Room = () => {
  const [roomName, setRoomName] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const submitHandle = (e) => {
    e.preventDefault();
    if (!roomName.trim() || !userName.trim()) {
      alert("Lütfen oda adı ve kullanıcı adı giriniz");
      return;
    }
    sessionStorage.setItem('username', userName);
    navigate(`/video/${roomName}`);
  };

  return (
    <div className="room-container">
      <div className="room-card">
        <div className="room-header">
          <FaVideo className="header-icon" />
          <h1>Video Konferans Başlat</h1>
          <p>Kaliteli görüntülü görüşme deneyimi için hemen katılın</p>
        </div>

        <form onSubmit={submitHandle} className="room-form">
          <div className="input-group">
            <label htmlFor="username">Kullanıcı Adınız</label>
            <input
              id="username"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Adınızı girin"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="roomname">Oda Adı</label>
            <input
              id="roomname"
              type="text"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              placeholder="Oda adı girin veya oluşturun"
              required
            />
          </div>

          <button type="submit" className="join-button">
            <span>Görüşmeye Katıl</span>
            <FaArrowRight className="button-icon" />
          </button>
        </form>

        <div className="room-features">
          <div className="feature">
            <FaUserFriends className="feature-icon" />
            <span>100+ katılımcı desteği</span>
          </div>
          <div className="feature">
            <FaVideo className="feature-icon" />
            <span>HD video kalitesi</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;