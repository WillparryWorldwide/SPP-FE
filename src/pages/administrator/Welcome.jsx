import React from "react";
import { SearchNav, Title } from "./components";
import IconSVG from "../../components/icon/svg";
import SiteImages from "../../Utils/images";

const Welcome = () => {
	return (
		<>
			<div className="sticky top-0 z-50">
				<SearchNav />
				<Title
					headText="Welcome"
					icon={
						<span
							style={{
								boxSizing: "border-box",
								display: "inline-block",
								overflow: "hidden",
								width: "initial",
								height: "initial",
								background: "none",
								opacity: 1,
								border: 0,
								margin: 0,
								padding: 0,
								position: "relative",
								maxWidth: "100%"
							}}>
							<span
								style={{
									boxSizing: "border-box",
									display: "block",
									width: "initial",
									height: "initial",
									background: "none",
									opacity: 1,
									border: 0,
									margin: 0,
									padding: 0,
									maxWidth: "100%"
								}}>
								<img
									alt="empty"
									aria-hidden="true"
									src={IconSVG.empty}
									style={{
										display: "block",
										maxWidth: "100%",
										width: "initial",
										height: "initial",
										background: "none",
										opacity: 1,
										border: 0,
										margin: 0,
										padding: 0,
									}}
								/>
							</span>
							<img
								alt="discover"
								src={IconSVG.discoverIcon}
								decoding="async"
								data-nimg="intrinsic"
								className="leftSideBar_nav-icon__7Dhay"
								style={{
									position: "absolute",
									inset: 0,
									boxSizing: "border-box",
									padding: 0,
									border: "none",
									margin: "auto",
									display: "block",
									width: 0,
									height: 0,
									minWidth: "100%",
									maxWidth: "100%",
									minHeight: "100%",
									maxHeight: "100%",
								}}
							/>
							<noscript />
						</span>
					}
				/>
			</div>
			<div className="h-full  p-6">
				<div>
					<div className="flex flex-wrap p-0 pb-28 sm:pb-0" data-testid="discover-projects">
						<div className="flex justify-start gap-8 px-3 sm:px-8 pt-8 pb-10 bg-grey-white w-full">
							<div data-testid="Sectors-card" className="w-fit bg-white rounded-lg cursor-pointer overflow-hidden flex-shrink-0 flex flex-col sm:flex-row items-center justify-between p-4">
								<div>
									<div className="flex items-center lg:mb-14">
										<span>
											<span>
												<img
													alt="something"
													aria-hidden="true"
													src={SiteImages.developer}
													className="w-20"
												/>
											</span>
										</span>
										<p className="medium ml-4">Projects 7</p>
									</div>
								</div>
							</div>
							<div data-testid="Sectors-card" className="w-fit bg-white rounded-lg cursor-pointer overflow-hidden flex-shrink-0 flex flex-col sm:flex-row items-center justify-between p-4">
								<div>
									<div className="flex items-center lg:mb-14">
										<span>
											<span>
												<img
													alt="something"
													aria-hidden="true"
													src={SiteImages.developer}
													className="w-20"
												/>
											</span>
										</span>
										<p className="medium ml-4">Contractor 3</p>
									</div>
								</div>
							</div>
							<div data-testid="Sectors-card" className="w-fit bg-white rounded-lg cursor-pointer overflow-hidden flex-shrink-0 flex flex-col sm:flex-row items-center justify-between p-4">
								<div>
									<div className="flex items-center lg:mb-14">
										<span>
											<span>
												<img
													alt="something"
													aria-hidden="true"
													src={SiteImages.developer}
													className="w-20"
												/>
											</span>
										</span>
										<p className="medium ml-4">Sectors 2</p>
									</div>
								</div>
							</div>
							<div data-testid="Sectors-card" className="w-fit bg-white rounded-lg cursor-pointer overflow-hidden flex-shrink-0 flex flex-col sm:flex-row items-center justify-between p-4">
								<div>
									<div className="flex items-center lg:mb-14">
										<span>
											<span>
												<img
													alt="something"
													aria-hidden="true"
													src={SiteImages.developer}
													className="w-20"
												/>
											</span>
										</span>
										<p className="medium ml-4">MDA 2</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Welcome;