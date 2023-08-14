/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["svs.gsfc.nasa.gov"],
	},
	redirects: async () => {
		return [
			{
				source: "/about",
				destination: "/",
				permanent: false,
			},
			{
				source: "/study/:lacture", // dynamic page to redirect
				destination: "/redirect",
				permanent: false,
			},
			{
				source: "/others", //not avaliable routes to redirect
				destination: "/",
				permanent: false,
			},
		];
	},
};

module.exports = nextConfig;
