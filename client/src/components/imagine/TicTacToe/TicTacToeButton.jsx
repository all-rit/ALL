import { useEffect, useState } from "react";

const TicTacToeButton = ({piece, moveMade , setUpdateBoard}) => {
        
    const [isSelected, SetIsSelected] = useState(false);
    const [userPiece , setPiece] = useState(null);
    
    useEffect(()=>{
        console.log(piece);
        setPiece(piece);
    },[piece]);

    const onSelect = (e) => {
        e.preventDefault();
        SetIsSelected(true);
        moveMade(e);
        console.log(piece);
        setPiece(piece);
        setUpdateBoard(true);
    }

    return( 
        <>   
            <div onClick={userPiece === null ? (e) => onSelect(e) : ()=>{}} className="btn btn-block text-black tw-text-center tw-bg-bgwhite tw-p-20">
                {userPiece}
            </div>
        </>
    );

}
export default TicTacToeButton;