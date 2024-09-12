import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import Message from "../images/message.png";
import "../App.scss";
import { AnimatePresence, motion } from "framer-motion";

export default function News() {
	const {
		loading,
		error,
		data = [],
	} = useFetch("http://localhost:1337/api/feeds");

	const [isClicked, setIsClicked] = useState(false);

	const handleClick = () => {
		setIsClicked(!isClicked);
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Coś poszło nie tak</p>;

	return (
		<>
			<button className="newsButton" onClick={handleClick}>
				<img src={Message} alt="Message icon" />
				{data.length > 0 && ( // Warunek sprawdzający czy są aktualności
					<div className="messageCounterContainer">
						<p className="counter">{data.length}</p>
					</div>
				)}
			</button>
			<AnimatePresence>
				{isClicked &&
					data.map(feed => (
						<motion.div
							initial={{ opacity: 0, x: 30, y: 30 }}
							animate={{ opacity: 1, x: 0,y: 0 }}
							exit={{ opacity: 0, x: 10, y: 10 }}
							key={feed.id}
							className="newsCard">
							<p className="date">{feed.attributes.Date}</p>
							<p className="feed-info">{feed.attributes.description}</p>
						</motion.div>
					))}
			</AnimatePresence>
		</>
	);
}
