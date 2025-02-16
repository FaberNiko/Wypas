import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import Message from "../images/dorbell.png";
import "../App.scss";
import { AnimatePresence, motion } from "framer-motion";

export default function News() {
	const {
		loading,
		error,
		data = [],
	} = useFetch("https://burgerwypas.pl/strapi/api/feeds");

	const [isClicked, setIsClicked] = useState(false);

	const handleClick = () => {
		setIsClicked(!isClicked);
	};

	if (error || loading)
		return (
			<button className="newsButton" onClick={handleClick}>
				<img src={Message} alt="Message icon" />
				{data.length > 0 && (
					<div className="messageCounterContainer">
						<p className="counter">{data.length}</p>
					</div>
				)}
			</button>
		);

	return (
		<>
			<button className="newsButton" onClick={handleClick}>
				<img src={Message} alt="Message icon" />
				{data.length > 0 && (
					<div className="messageCounterContainer">
						<p className="counter">{data.length}</p>
					</div>
				)}
			</button>
			<AnimatePresence>
				{isClicked && (
					<div className="newsContainer">
						{data.map((feed, index) => (
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 10 }}
								transition={{ delay: index * 0.1 }}
								key={feed.id}
								className="newsCard">
								<div className="dateBox">
									<p className="date">{feed.attributes.Date}</p>
								</div>
								<div className="feedBox">
									<p className="feed-info">{feed.attributes.description}</p>
								</div>
							</motion.div>
						))}
					</div>
				)}
			</AnimatePresence>
		</>
	);
}
