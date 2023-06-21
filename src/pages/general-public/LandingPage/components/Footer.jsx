export default function Footer() {
	return <footer className="xl:px-32 sm:px-20 px-7 xl:pb-32 py-12">
		<div className="flex flex-col lg:flex-row justify-between">
			<div className="lg:w-3/12 sm:w-6/12">
				<img alt="" src="" />
				<p className="mt-8 text-sm text-light-grey">
					M.O.R.E  PROJECT PROGRESS APP (MPPA) is the easiest way to discover and track government projects anytime, anywhere in Delta State
				</p>
			</div>
			<div className="xl:w-7/12 lg:w-8/12 flex flex-col sm:flex-row justify-between mt-10 lg:mt-0 space-y-10 sm:space-y-0">
				<div className="sm:w-4/12">
					<p className="text-dark-grey medium">Resources</p>
					<div className="mt-8 text-sm space-y-3">
						<a className="text-light-grey hover:text-dark-grey transition duration-300 ease-in-out" href="faqs.html">
							<p>FAQs</p>
						</a>
					</div>
				</div>
				<div className="sm:w-4/12">
					<p className="text-dark-grey medium">Company</p>
					<div className="mt-8 text-sm">
						<a target="_blank" rel="noreferrer" href="terms.html">
							<p className="mt-3 text-light-grey hover:text-dark-grey transition duration-300 ease-in-out">
								Terms of use
							</p>
						</a>
						<a target="_blank" rel="noreferrer" href="privacy.html">
							<p className="mt-3 text-light-grey hover:text-dark-grey transition duration-300 ease-in-out">
								Privacy policy
							</p>
						</a>
						<a target="_blank" rel="noreferrer" href="community-guidelines.html">
							<p className="mt-3 text-light-grey hover:text-dark-grey transition duration-300 ease-in-out">
								Community Guidelines
							</p>
						</a>
					</div>
				</div>
				<div className="sm:w-4/12">
					<p className="text-dark-grey medium">Get in touch</p>
					<p className="mt-8 text-sm text-light-grey">
						Need more information? You can get in touch with us through
						our socials
					</p>
				</div>
			</div>
		</div>
		<div className="flex flex-col lg:flex-row w-full items-center justify-between mt-20 text-sub-text text-sm">
			<p>Delta State Government © {new Date().getFullYear}. All Rights Reserved</p>
			<div className="items-center justify-between space-x-5 hidden">
				<button className="font-bold">English</button>
				<button className="opacity-50">Igbo</button>
				<button className="opacity-50">Yoruba</button>
				<button className="opacity-50">Hausa</button>
			</div>
		</div>
	</footer>
}