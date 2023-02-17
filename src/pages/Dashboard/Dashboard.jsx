import React, { useEffect, useState } from "react";
import { Dropdown, Menu } from 'antd';
import Board from "../../Components/Board/Board";
import "./Dashboard.scss";
import CustomInput from "../../Components/CustomInput/CustomInput";
import { fetchBoardList, updateLocalStorageBoards } from "../../Helper/APILayers";

function Dashboard() {
  const [boards, setBoards] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const boards = await fetchBoardList();
    setBoards(boards);
  }
  const [targetCard, setTargetCard] = useState({
    boardId: 0,
    cardId: 0,
  });
  const addboardHandler = (name) => {
    const tempBoardsList = [...boards];
    tempBoardsList.push({
      id: Date.now() + Math.random() * 2,
      title: name,
      cards: [],
    });
    setBoards(tempBoardsList);
  };
  const removeBoard = (boardId) => {
    const boardIndex = boards.findIndex((item) => item.id === boardId);
    if (boardIndex < 0)
      return;
    const tempBoardsList = [...boards];
    tempBoardsList.splice(boardIndex, 1);
    setBoards(tempBoardsList);
  };
  const addCardHandler = (boardId, title) => {
    const boardIndex = boards.findIndex((item) => item.id === boardId);
    if (boardIndex < 0)
      return;
    const tempBoardsList = [...boards];
    tempBoardsList[boardIndex].cards.push({
      id: Date.now() + Math.random() * 2,
      title,
      labels: [],
      date: "",
      tasks: [],
      desc: "",
    });
    setBoards(tempBoardsList);
  };
  const removeCard = (boardId, cardId) => {
    const boardIndex = boards.findIndex((item) => item.id === boardId);
    if (boardIndex < 0)
      return;
    const tempBoardsList = [...boards];
    const cards = tempBoardsList[boardIndex].cards;
    const cardIndex = cards.findIndex((item) => item.id === cardId);
    if (cardIndex < 0)
      return;
    cards.splice(cardIndex, 1);
    setBoards(tempBoardsList);
  };
  const updateCard = (boardId, cardId, card) => {
    const boardIndex = boards.findIndex((item) => item.id === boardId);
    if (boardIndex < 0)
      return;
    const tempBoardsList = [...boards];
    const cards = tempBoardsList[boardIndex].cards;
    const cardIndex = cards.findIndex((item) => item.id === cardId);
    if (cardIndex < 0)
      return;
    tempBoardsList[boardIndex].cards[cardIndex] = card;
    setBoards(tempBoardsList);
  };
  const onDragEnd = (boardId, cardId) => {
    var _a, _b, _c, _d;
    const sourceBoardIndex = boards.findIndex((item) => item.id === boardId);
    if (sourceBoardIndex < 0)
      return;
    const sourceCardIndex = (_b = (_a = boards[sourceBoardIndex]) === null || _a === void 0 ? void 0 : _a.cards) === null || _b === void 0 ? void 0 : _b.findIndex((item) => item.id === cardId);
    if (sourceCardIndex < 0)
      return;
    const targetBoardIndex = boards.findIndex((item) => item.id === targetCard.boardId);
    if (targetBoardIndex < 0)
      return;
    const targetCardIndex = (_d = (_c = boards[targetBoardIndex]) === null || _c === void 0 ? void 0 : _c.cards) === null || _d === void 0 ? void 0 : _d.findIndex((item) => item.id === targetCard.cardId);
    if (targetCardIndex < 0)
      return;
    const tempBoardsList = [...boards];
    const sourceCard = tempBoardsList[sourceBoardIndex].cards[sourceCardIndex];
    tempBoardsList[sourceBoardIndex].cards.splice(sourceCardIndex, 1);
    tempBoardsList[targetBoardIndex].cards.splice(targetCardIndex, 0, sourceCard);
    setBoards(tempBoardsList);
    setTargetCard({
      boardId: 0,
      cardId: 0,
    });
  };
  const onDragEnter = (boardId, cardId) => {
    if (targetCard.cardId === cardId)
      return;
    setTargetCard({
      boardId: boardId,
      cardId: cardId,
    });
  };
  useEffect(() => {
    updateLocalStorageBoards(boards);
  }, [boards]);
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <div className="group-chat-menu-list" type="button" onClick={() => { localStorage.clear(); window.location.reload() }}>
          Logout
        </div>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="app">
      <div className="app-nav">
        <h1>Trello - Sprint Plans</h1>
        <p className="user-email">Hello {localStorage.getItem("email")}</p>
        <Dropdown
          overlay={menu}
          placement="bottomCenter"
          getPopupContainer={(trigger) => {
            return trigger;
          }}
        >
          <div className="user-avatar">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </div>
        </Dropdown>
      </div>
      <div className="app-boards-container">
        <div className="app-boards">
          {boards.map((item) => (
            <Board
              key={item.id}
              board={item}
              addCard={addCardHandler}
              removeBoard={() => removeBoard(item.id)}
              removeCard={removeCard}
              onDragEnd={onDragEnd}
              onDragEnter={onDragEnter}
              updateCard={updateCard}
            />
          ))}
          <div className="app-boards-last">
            <CustomInput
              displayClass="app-boards-add-board"
              editClass="app-boards-add-board-edit"
              placeholder="Enter Board Name"
              text="Add Board"
              buttonText="Add Board"
              onSubmit={addboardHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
