import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
    title: "Geraldin | Portofolio",

    description:
		"My name is Geraldin, I'm a meteorologist and hydrogeologist from Bandung Institut of Technology. I'm passionate about data analyst, data science, and also eager to learn anything new.",

    author: "Geraldin Andira Cahyarani Putri",
    applicationName: "Geraldin",

    keywords: [
		"Geraldin",
		"Geraldin",
		"Geraldin Andira",
		"Andira",
		"Geraldin Andira Cahyarani Putri",
		"Geraldin Andira Cahyarani Putri",
		"bloodfallen",
		"Geraldin porto",
		"Geralidn um",
	],

    openGraph: {
		type: "website",
		url: "https://https://geraldin-portfolio.com/",
		title: "Alvalens | Portofolio",
		site_name: "Geraldin | Portofolio",
		description: "My name is Geraldin, This is my portofolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Geraldin Portofolio",
			},
		],
		site_name: "Geraldin | Portofolio",
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Chat />
				<Analytics />
			</body>
		</html>
	);
}
