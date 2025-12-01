import Image from "next/image";
import { motion } from "framer-motion";
import Me1 from "@/public/image/me1.jpg";
import Me4 from "@/public/image/me4.jpg";
import Me3 from "@/public/image/me3.jpg";
import Hr from "@/components/Hr";

function Title() {
	return (
		<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start ">
				<Hr variant="long"></Hr>
				<h1 className="text-3xl font-bold mt-3">Who Am I?</h1>
			</div>
		</div>
	);
}

export default function About() {
	return (
		<>
			<Title />
			<div className="relative mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
				<div className="flex justify-center items-start flex-col mb-5 ">
					<div className="images relative w-full  aspect-square">
						<div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{ opacity: 0, scale: 0.5, x: 100 }}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								className="w-full h-full">
								<Image
									src={Me1}
									alt="Geraldin"
									layout="fill"
									objectFit="cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute top-16 right-28 w-[30%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{ delay: 0.3 }}
								className="w-full h-full">
								<Image
									src={Me4}
									alt="Geraldin"
									layout="fill"
									objectFit="cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{
									delay: 0.5,
								}}
								className="w-full h-full">
								<Image
									src={Me3}
									alt="Geraldin"
									layout="fill"
									objectFit="cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
					</div>
				</div>
				<motion.div
					className="flex justify-center items-start flex-col mb-5 md:px-10"
					initial={{
						opacity: 0,
						x: 200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						delay: 0.5,

						type: "spring",
					}}>
					<h2 className="text-xl font-bold tracking-wider mb-3">
						Geraldin Andira Cahyarani Putri
					</h2>
					<p className="text-gray-600 text-justify title text-lg">
					Hey there, I&apos;m Geraldin Andira Cahyarani Putri, a
					<span className="text-black font-medium">
						{" "}
						passionate Hydrogeologist{" "}
					</span>
					with a growing expertise in
					<span className="text-black font-medium">
						{" "}
						Data Analyst and Data Science.
					</span>{" "}
					Hailing from Yogyakarta, Indonesia, I took bachelor&apos;s degree in{" "}
					<span className="text-black font-medium">Meteorology</span> and master&apos;s
					degree in{" "}
					<span className="text-black font-medium">
						Groundwater Engineering
					</span>{" "}
					at{" "}
					<span className="text-black font-medium">
						Bandung Institute of Technology
					</span>
					. Trained in meteorology and hydrology, I developed strong experience in
					field data collection, Python-based analysis, and data science workflows.
					I enjoy working with data to uncover patterns, solve complex problems, and
					support decision-making across scientific and technical projects.
					<br />
					<br />
					I believe that being a{" "}
					<span className="text-black font-medium">lifelong learner</span> is essential
					in today&apos;s dynamic professional landscape. I&apos;m always eager to explore
					opportunities that bridge science, data, and technology.
					</p>

				
				</motion.div>
			</div>
		</>
	);
}
