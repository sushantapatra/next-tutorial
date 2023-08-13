import React from "react";
import Image from "next/image";
import vercel from "../../../public/vercel.svg";
import bigimage15 from "../../../public/bigimage15.png";

const ImageComponent = () => {
	console.log(vercel);
	return (
		<div>
			<h3>Next Js Image Component</h3>
			<Image src={vercel} />
			<p>Image showing using html img tag</p>
			<img src={vercel.src} />

			<p>Netwok Image showing</p>
			<Image
				src="https://svs.gsfc.nasa.gov/vis/a030000/a030800/a030877/frames/5760x3240_16x9_01p/BlackMarble_2016_928m_russia_east_labeled.png"
				width={2400}
				height={2400}
			/>
		</div>
	);
};

export default ImageComponent;
