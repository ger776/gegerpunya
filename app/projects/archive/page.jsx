"use client";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import FixedButon from "@/components/FixedButton";
import Projects from "@/json/data.json";
import Link from "next/link";

export default function Page() {
	const projects = Projects.Projects;

	return (
		<>
			<main className="overflow-hidden">
				<FixedButon href="/projects">
					<FontAwesomeIcon icon={faChevronLeft} className="text-black pr-10" />
				</FixedButon>

				<div className="min-h-screen w-screen mt-10 md:mt-0 p-10 flex justify-center items-center flex-col mb-10">

					{/* Header */}
					<div className="flex justify-center items-center flex-col my-5 self-start ">
						<motion.div
							className="bg-gray-700 w-28 h-1 rounded-full mb-3 self-start"
							initial={{ opacity: 0, x: -250 }}
							animate={{ opacity: 1, x: 50 }}
							transition={{ delay: 0.5, duration: 1, type: "spring" }}
						/>
						<motion.div
							className="bg-gray-700 w-28 h-1 rounded-full"
							initial={{ opacity: 0, x: 200 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.5, duration: 1, type: "spring" }}
						/>
						<motion.h1
							className="text-3xl font-bold mt-3"
							initial={{ opacity: 0, x: -200 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.7, duration: 1, type: "spring" }}
						>
							Archive
						</motion.h1>
					</div>

					{/* Table */}
					<div className="mx-auto container md:px-10 grid grid-cols-1">
						<table className="">
							<thead>
								<tr className="hover:shadow-md transition-all ease duration-500">
									<th className="text-start">Year</th>
									<th className="text-start">Title</th>
									<th className="text-start">Technology</th>
									<th className="text-start">Link</th>
								</tr>
							</thead>

							<tbody>
								{projects.map((project, index) => (
									<tr key={index} className="hover:shadow-md transition-all ease duration-500">
										<td>{project.year}</td>

										<td>
											<Link href={`/projects/${project.slug}`}>
												{project.title}
											</Link>
										</td>

										<td>{project.tech.join(", ")}</td>

										<td>
											{/* >>> Link Dikosongkan, karena kamu ingin menghapus GitHub/Discord <<< */}
											<span className="text-gray-400 text-sm">No link</span>
										</td>

									</tr>
								))}
							</tbody>

						</table>
					</div>

				</div>
			</main>
		</>
	);
}
