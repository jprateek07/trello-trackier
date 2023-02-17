import React, { useEffect, useState } from "react";
import { Calendar, CheckSquare, List, Tag, Trash, Type } from "react-feather";
import { colorsList } from "../../../Helper/Util";
import Modal from "../../Modal/Modal";
import CustomInput from "../../CustomInput/CustomInput";

import "./CardInfo.scss";
import Chip from "../../Common/Chip";
function CardInfo(props) {
  const { onClose, card, boardId, updateCard } = props;
  const [selectedColor, setSelectedColor] = useState("");
  const [cardValues, setCardValues] = useState(Object.assign({}, card));
  const updateTitle = (value) => {
    setCardValues(Object.assign(Object.assign({}, cardValues), { title: value }));
  };
  const updateDesc = (value) => {
    setCardValues(Object.assign(Object.assign({}, cardValues), { desc: value }));
  };
  const addLabel = (label) => {
    const index = cardValues.labels.findIndex((item) => item.text === label.text);
    if (index > -1)
      return; //if label text already exist then return
    setSelectedColor("");
    setCardValues(Object.assign(Object.assign({}, cardValues), { labels: [...cardValues.labels, label] }));
  };
  const removeLabel = (label) => {
    const tempLabels = cardValues.labels.filter((item) => item.text !== label.text);
    setCardValues(Object.assign(Object.assign({}, cardValues), { labels: tempLabels }));
  };
  const addTask = (value) => {
    const task = {
      id: Date.now() + Math.random() * 2,
      completed: false,
      text: value,
    };
    setCardValues(Object.assign(Object.assign({}, cardValues), { tasks: [...cardValues.tasks, task] }));
  };
  const removeTask = (id) => {
    const tasks = [...cardValues.tasks];
    const tempTasks = tasks.filter((item) => item.id !== id);
    setCardValues(Object.assign(Object.assign({}, cardValues), { tasks: tempTasks }));
  };
  const updateTask = (id, value) => {
    const tasks = [...cardValues.tasks];
    const index = tasks.findIndex((item) => item.id === id);
    if (index < 0)
      return;
    tasks[index].completed = Boolean(value);
    setCardValues(Object.assign(Object.assign({}, cardValues), { tasks }));
  };

  const updateDate = (date) => {
    if (!date)
      return;
    setCardValues(Object.assign(Object.assign({}, cardValues), { date }));
  };
  useEffect(() => {
    if (updateCard)
      updateCard(boardId, cardValues.id, cardValues);

  }, [cardValues]);

  return (
    <Modal onClose={onClose}>
      <div className="cardinfo">
        <div className="cardinfo-box">
          <div className="cardinfo-box-title">
            <Type />
            <p>Title</p>
          </div>
          <CustomInput
            defaultValue={cardValues.title}
            text={cardValues.title}
            placeholder="Enter Title"
            onSubmit={updateTitle}
          />
        </div>

        <div className="cardinfo-box">
          <div className="cardinfo-box-title">
            <List />
            <p>Description</p>
          </div>
          <CustomInput
            defaultValue={cardValues.desc}
            text={cardValues.desc || "Add a Description"}
            placeholder="Enter description"
            onSubmit={updateDesc}
          />
        </div>

        <div className="cardinfo-box">
          <div className="cardinfo-box-title">
            <Calendar />
            <p>Date</p>
          </div>
          <input
            type="date"
            defaultValue={cardValues.date}
            min={new Date().toISOString().substr(0, 10)}
            onChange={(event) => updateDate(event.target.value)}
          />
        </div>

        <div className="cardinfo-box">
          <div className="cardinfo-box-title">
            <Tag />
            <p>Labels</p>
          </div>
          <div className="cardinfo-box-labels">
            {cardValues.labels?.map((item, index) => (
              <Chip key={index} item={item} removeLabel={removeLabel} />
            ))}
          </div>
          <ul>
            {colorsList.map((item, index) => (
              <li
                key={index}
                style={{ backgroundColor: item }}
                className={selectedColor === item ? "li-active" : ""}
                onClick={() => setSelectedColor(item)}
              />
            ))}
          </ul>
          <CustomInput
            text="Add Label"
            placeholder="Enter label text"
            onSubmit={(value) =>
              addLabel({ color: selectedColor, text: value })
            }
          />
        </div>

        <div className="cardinfo-box">
          <div className="cardinfo-box-title">
            <CheckSquare />
            <p>Tasks</p>
          </div>
          <div className="cardinfo-box-task-list">
            {cardValues.tasks?.map((item) => (
              <div key={item.id} className="cardinfo-box-task-checkbox">
                <input
                  type="checkbox"
                  defaultChecked={item.completed}
                  onChange={(event) =>
                    updateTask(item.id, event.target.checked)
                  }
                />
                <p className={item.completed ? "completed" : ""}>{item.text}</p>
                <Trash onClick={() => removeTask(item.id)} />
              </div>
            ))}
          </div>
          <CustomInput
            text={"Add a Task"}
            placeholder="Enter task"
            onSubmit={addTask}
          />
        </div>
      </div>
    </Modal>
  );
}

export default CardInfo;
