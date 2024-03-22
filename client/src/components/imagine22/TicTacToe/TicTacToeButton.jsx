/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const TicTacToeButton = ({ piece, moveMade, setUpdateBoard }) => {
  const [isSelected, SetIsSelected] = useState(false);
  const [userPiece, setPiece] = useState(null);

  useEffect(() => {
    setPiece(piece);
  }, [piece]);

  const onSelect = (e) => {
    e.preventDefault();
    SetIsSelected(true);
    moveMade(e);
    setPiece(piece);
    setUpdateBoard(true);
  };

  return (
    <>
      <div
        onClick={userPiece === null ? (e) => onSelect(e) : () => {}}
        className="btn btn-block text-black tw-text-center tw-bg-white tw-p-20 tw-text-5xl"
      >
        {userPiece === null ? (
          <div className="tw-text-white">O</div>
        ) : (
          <div
            className={
              userPiece === "X" ? "tictactoe__team" : "tictactoe__opposing"
            }
          >
            {userPiece}
          </div>
        )}
      </div>
    </>
  );
};
export default TicTacToeButton;
