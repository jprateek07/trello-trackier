import React, { useState } from "react";
import { AlignLeft, CheckSquare, Clock, MoreHorizontal } from "react-feather";
import { formatDate } from "../../Helper/Util";
import Chip from "../Common/Chip";
import Dropdown from "../Dropdown/Dropdown";
import placeholderImg from '../../assets/images/images.jpeg'
import user1 from '../../assets/images/user.png'
import user2 from '../../assets/images/user1.jpeg'
import "./Card.scss";
import CardInfo from "./CardInfo/CardInfo";

function Card(props) {
  const { card, boardId, removeCard, onDragEnd, onDragEnter, updateCard } = props;
  const { id, title, desc, date, tasks, labels } = card;
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <CardInfo
          onClose={() => setShowModal(false)}
          card={card}
          boardId={boardId}
          updateCard={updateCard}
        />
      )}
      <div
        className="card"
        key={card.id}
        draggable
        onDragEnd={() => onDragEnd(boardId, id)}
        onDragEnter={() => onDragEnter(boardId, id)}
        onClick={() => setShowModal(true)}
      >
        {
          card.img ? <img src={card.img} alt={card.title} width={200} height={138} /> : <img src={placeholderImg} alt="placeholder img" height={138} />
        }
        <div className="card-top">
          <div className="card-top-labels">
            {labels?.map((item, index) => (
              <Chip key={index} item={item} />
            ))}
          </div>
          <div
            className="card-top-more"
            onClick={(event) => {
              event.stopPropagation();
              setShowDropdown(true);
            }}
          >
            <MoreHorizontal />
            {showDropdown && (
              <Dropdown
                class="board-dropdown"
                onClose={() => setShowDropdown(false)}
              >
                <p onClick={() => removeCard(boardId, id)}>Delete Card</p>
              </Dropdown>
            )}
          </div>
        </div>
        <div className="card-title">{title}</div>
        <div>
          <p title={desc}>
            {/* <AlignLeft /> */}
            <div class="avatars">
              <span class="avatar">
                <img src={user2} />
              </span>
              <span class="avatar">
                <img src={user1} />
              </span>
              <span class="avatar">
                <img src={user2} />
              </span>
              <span class="avatar">
                <img src={user1} />
              </span>
            </div>
          </p>
        </div>
        <div className="card-footer">
          {date && (
            <p className="card-footer-item">
              <Clock className="card-footer-icon" />
              {formatDate(date)}
            </p>
          )}
          {tasks && tasks?.length > 0 && (
            <p className="card-footer-item">
              <CheckSquare className="card-footer-icon" />
              {tasks?.filter((item) => item.completed)?.length}/{tasks?.length}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
