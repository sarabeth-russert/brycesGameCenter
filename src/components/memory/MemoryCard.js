import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";

import ReactCardFlip from "react-card-flip";

const styles = {
  card: {
    border: "1px solid #eeeeee",
    borderRadius: "3px",
    padding: "15px",
    width: "250px",
  },
  matchedCard: {
    border: "1px solid #eeeeee",
    borderRadius: "3px",
    padding: "15px",
    width: "250px",
    height: "240px",
  },
  image: {
    height: "200px",
    width: "200px",
  },
  div: { width: "250px" },
};

// export default class MemoryCard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isFlipped: false,
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(event) {
//     event.preventDefault();
//     if (card.matched) return;
//     this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
//   }

//   render() {
//     return (
//       <div style={styles.div}>
//         {!card.matched && (
//           <ReactCardFlip
//             isFlipped={this.state.isFlipped}
//             flipSpeedBackToFront={2}
//             flipSpeedFrontToBack={2}
//           >
//             <div style={styles.card} onClick={this.handleClick}>
//               <img
//                 style={styles.image}
//                 src="/memory/cardBack.jpg"
//                 alt={"angler"}
//               />
//             </div>

//             <div
//               style={styles.card}
//               onClick={(e) => {
//                 if (this.props.cardIdOne)
//                   this.props.setCardIdTwo(this.props.card.id);
//                 else this.props.setCardIdOne(this.props.card.id);
//                 this.handleClick(e);
//               }}
//             >
//               <img
//                 style={styles.image}
//                 src={this.props.card.src}
//                 alt={this.props.card.id}
//               />
//             </div>
//           </ReactCardFlip>
//         )}
//       </div>
//     );
//   }
// }

const MemoryCard = ({ card, handleFlip, flipped }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    // flips cards when selected
    const flippedCards = [flipped[0]?.uniqueId, flipped[1]?.uniqueId];
    if (flippedCards.includes(card.uniqueId) && !isFlipped) setIsFlipped(true);
    if (!flippedCards.includes(card.uniqueId) && isFlipped) setIsFlipped(false);
  }, [flipped, card, isFlipped]);

  return (
    <div style={styles.div}>
      {!card.matched ? (
        <ReactCardFlip
          isFlipped={isFlipped}
          flipSpeedBackToFront={2}
          flipSpeedFrontToBack={2}
        >
          <div style={styles.card} onClick={() => handleFlip(card)}>
            <img
              style={styles.image}
              src="/memory/cardBack.jpg"
              alt={"angler"}
            />
          </div>

          <div style={styles.card}>
            <img style={styles.image} src={card.src} alt={card.id} />
          </div>
        </ReactCardFlip>
      ) : (
        <div style={styles.matchedCard}>
          <Typography>{card.name}</Typography>
        </div>
      )}
    </div>
  );
};

export default MemoryCard;
