import React from 'react'

const Welcome = () => {
    return (
        <>
            <div class="Toastify"></div>
            <div class="false">
                <div class="bg-black absolute bg-opacity-10 min-h-screen h-full w-full z-50 inset-0 hidden"></div>
                <nav class="relative flex justify-between items-center xl:px-32 sm:px-20 px-7 py-7 bg-white">
                    <div class="flex items-center lg:hidden cursor-pointer">
                        <img alt="logo" loading="lazy" width="118" height="28" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="fonts/textLogo.781c68bc.svg"/>
                    </div>
                    <button class="lg:hidden relative z-20">
                        <img alt="menu" loading="lazy" width="24" height="18" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="fonts/menu.bd48213b.svg"/>
                    </button>
                    <div class="transform ease-in-out transition duration-500 lg:flex-grow hidden -translate-x-full lg:translate-x-0 lg:flex">
                        <div class="flex flex-col lg:flex-row justify-between items-center w-full">
                            <a href="index.html">
                                <div class="items-center hidden lg:flex cursor-pointer relative">
                                    <img alt="logo" loading="lazy" width="118" height="28" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="fonts/textLogo.781c68bc.svg" />
                                </div>
                            </a>
                            <div class="flex flex-col lg:flex-row items-center w-full lg:w-auto">
                                <div class="flex flex-col lg:items-center lg:flex-row w-full space-y-3 lg:space-y-0 lg:space-x-8 lg:border-none border-b py-4 lg:py-0 border-grey-stroke text-light-grey">
                                    <a class="text-base lg:text-sm text-black" href="index.html">
                                        <p class="medium">Home</p>
                                    </a>
                                    <a class="text-base lg:text-sm" href="faqs.html">
                                        <p class="medium">FAQs</p>
                                    </a>
                                    <a class="text-base lg:text-sm" href="bounty.html">
                                        <p class="medium">Bounty</p>
                                    </a>
                                    <div class="items-center flex-shrink-0 hidden lg:flex">
                                        <img alt="separator" loading="lazy" width="2" height="17" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="fonts/separator.b19041fb.svg" />
                                    </div>
                                </div>
                                <div class="lg:ml-8 flex flex-col lg:flex-row w-full lg:w-auto space-y-3 lg:space-y-0 lg:space-x-8 border-b lg:border-none py-4 lg:py-0 border-grey-stroke">
                                    <a class="text-light-grey text-base lg:text-sm" href="sectors.html">
                                        <p class="medium">Sectors</p>
                                    </a>
                                    <a class="text-light-grey text-base lg:text-sm" href="ministries.html">
                                        <p class="medium">Ministries</p>
                                    </a>
                                    <a class="text-light-grey text-base lg:text-sm" href="states.html">
                                        <p class="medium">States</p>
                                    </a>
                                </div>
                            </div>
                            <div class="flex flex-col lg:flex-row items-start lg:items-center w-full lg:w-auto space-y-3 lg:space-y-0 lg:py-0 py-4 lg:space-x-5">
                                <a href="login.html">
                                    <p class="text-base lg:text-sm medium">Login</p>
                                </a>
                                <a href="user-type.html">
                                    <button class="whitespace-nowrap text-sm flex items-center px-6 py-3 bg-accepted-light rounded-full text-accepted backdrop-blur-3xl">
                                        <span class="medium mr-2">Create Account</span>
                                        <img alt="caret" loading="lazy" width="7" height="12" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="fonts/greenCaret.a14cc74a.svg"/>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
                <div style={{ position: 'fixed', top: '100px', right: '10px', zIndex: '9999' }}></div>
                <div class="home_landing-hero__u3Jsj">
                    <div class="lg:w-5/12 sm:w-7/12 mx-auto relative z-20">
                        <h1 class="xl:text-7xl sm:text-5xl text-4xl text-white text-center w-full font-bold">
                            The new way to track projects
                        </h1>
                        <p class="mt-6 text-sm xl:w-10/12 mx-auto w-full text-center text-lightGreen2">
                            Eyemark is the easiest way to discover and track government projects anytime, anywhere in Nigeria
                        </p>
                        <div class="flex justify-center w-full lg:absolute -bottom-24">
                            <div class="home_explore-input__BUzQA">
                                <input type="text" id="discover" placeholder="Search for any Project, LGA, State or Contractor" class="text-xs text-light-grey-6 medium focus:outline-none flex-grow truncate" />
                                <button class="bg-accepted medium text-xs rounded-full px-4 py-2.5 text-white flex items-center">
                                    <span>Explore</span><span class="hidden lg:block ml-1">Projects</span>
                                </button>
                            </div>
                        </div>
                        <div class="mt-16 lg:mt-12">
                            <p class="uppercase text-sm text-center medium text-white">
                                our partners:
                            </p>
                            <div class="xl:w-9/12 lg:w-11/12 mx-auto mt-6 flex items-center justify-center">
                                <span class="home_partners__bh3Bi home_partner1__LGjvq"></span>
                            </div>
                        </div>
                    </div>
                    <div class="absolute -top-20 sm:top-0 h-full bottom-0 -right-40 lg:right-0 z-0 overflow-hidden">
                        <img alt="motif" width="589" height="509" decoding="async" data-nimg="1" style={{ color: 'transparent', maxWidth: '100%', height: 'auto' }} src="fonts/heroMotif.36145ce0.svg"
                        />
                    </div>
                </div>
                <div class="home_landing-section__J_2Eo xl:py-36 py-24">
                    <div class="absolute w-full justify-center top-16 right-0 hidden lg:flex">
                        <a class="cursor-pointer" href>
                            <img alt="scroll down" loading="lazy" width="24" height="26" decoding="async" data-nimg="1" style={{ color: 'transparent', maxWidth: '100%', height: 'auto' }} src="fonts/scrollDown.68930c0e.svg" />
                        </a>
                    </div>
                    <div class="home_image-section__FkGkS flex flex-col items-center order-2 lg:order-1" id="first-section">
                        <a class="lg:hidden inline-block" href="discover.html">
                            <div class="home_explore-projects-green__fe_1K">
                                <p class="medium home_green-explore-projects-button__B_r9D mr-5">
                                    Explore all projects
                                </p>
                                <img alt="right-icon" loading="lazy" width="7" height="13" decoding="async" data-nimg="1" class="ml-5" style={{ color: 'transparent', maxWidth: '100%', height: 'auto' }} src="fonts/greenGradientCaret.4b50abab.svg" />
                            </div>
                        </a>
                    </div>
                    <div class="home_text-section__8_eBv order-1 lg:order-2">
                        <p class="home_text-head__oI2Wu text-accepted medium">
                            Ministries &amp; Contractors
                        </p>
                        <h1 class="home_text-title__Wm_fr medium">Explore MDA Projects</h1>
                        <p class="home_text-subtitle__2Gieq">
                            Do you want to know what’s happening with specific Ministries,
                            Departments, Agencies or contractor projects? Create an account
                            and be one of the first to get all the updates you need straight
                            from MDAs and Contractors.
                        </p>
                        <a class="hidden lg:inline-block mt-10" href="discover.html">
                            <div class="home_explore-projects-green__fe_1K transform hover:-translate-y-1 transition duration-1000 ease-in-out">
                                <p class="medium home_green-explore-projects-button__B_r9D mr-5">
                                    Explore all projects
                                </p>
                                <img alt="right-icon" loading="lazy" width="7" height="13" decoding="async" data-nimg="1" style={{ color: 'transparent', maxWidth: '100%', height: 'auto' }} src="fonts/greenGradientCaret.4b50abab.svg"/>
                            </div>
                        </a>
                    </div>
                    <div class="absolute bottom-0 -mb-56 inset-x-0 w-full z-0">
                        <img alt="motif" loading="lazy" width="1440" height="814" decoding="async" data-nimg="1" style={{ color: 'transparent', maxWidth: '100%', height: 'auto' }} src="fonts/landingMotif.951df702.svg" />
                    </div>
                </div>
                <div class="home_landing-section__J_2Eo pb-16">
                    <div class="home_text-section__8_eBv">
                        <p class="home_text-head__oI2Wu medium text-pending">
                            citizens &amp;cso
                        </p>
                        <h1 class="home_text-title__Wm_fr medium">
                            Review and engage with users on projects
                        </h1>
                        <p class="home_text-subtitle__2Gieq">
                            You can post text and media reviews on projects and also view and engage with reviews from other citizens.
                        </p>
                        <a href="user-type.html">
                            <button class="hidden lg:block mt-10">
                                <div class="home_explore-projects-gold__HUoJN transform hover:-translate-y-1 transition duration-1000 ease-in-out">
                                    <p class="medium home_gold-explore-projects-button__9NQxt mr-5">
                                        Sign up to Review Projects
                                    </p>
                                    <img alt="right-icon" loading="lazy" width="7" height="13" decoding="async" data-nimg="1" style={{ color: 'transparent', maxWidth: '100%', height: 'auto' }} src="fonts/goldGradientCaret.e11a297a.svg"/>
                                </div>
                            </button>
                        </a>
                    </div>
                    <div class="home_image-section__FkGkS flex flex-col items-center">
                        <a href="user-type.html">
                            <button class="lg:hidden">
                                <div class="home_explore-projects-gold__HUoJN transform hover:-translate-y-1 transition duration-1000 ease-in-out">
                                    <p class="medium home_gold-explore-projects-button__9NQxt mr-5">
                                        Sign up to Review Projects
                                    </p>
                                    <img alt="right-icon" loading="lazy" width="7" height="13" decoding="async" data-nimg="1" style={{ color: 'transparent', maxWidth: '100%', height: 'auto' }} src="fonts/goldGradientCaret.e11a297a.svg"/>
                                </div>
                            </button>
                        </a>
                    </div>
                </div>

                <footer class="xl:px-32 sm:px-20 px-7 xl:pb-32 py-12">
                    <div class="flex flex-col lg:flex-row justify-between">
                        <div class="lg:w-3/12 sm:w-6/12">
                            <img alt="" src="" />
                            <p class="mt-8 text-sm text-light-grey">
                                Eyemark is the easiest way to discover and track government projects anytime, anywhere in Nigeria
                            </p>
                        </div>
                        <div class="xl:w-7/12 lg:w-8/12 flex flex-col sm:flex-row justify-between mt-10 lg:mt-0 space-y-10 sm:space-y-0">
                            <div class="sm:w-4/12">
                                <p class="text-dark-grey medium">Resources</p>
                                <div class="mt-8 text-sm space-y-3">
                                    <a class="text-light-grey hover:text-dark-grey transition duration-300 ease-in-out" href="faqs.html">
                                        <p>FAQs</p>
                                    </a>
                                </div>
                            </div>
                            <div class="sm:w-4/12">
                                <p class="text-dark-grey medium">Company</p>
                                <div class="mt-8 text-sm">
                                    <a target="_blank" rel="noreferrer" href="terms.html">
                                        <p class="mt-3 text-light-grey hover:text-dark-grey transition duration-300 ease-in-out">
                                            Terms of use
                                        </p>
                                    </a>
                                    <a target="_blank" rel="noreferrer" href="privacy.html">
                                        <p class="mt-3 text-light-grey hover:text-dark-grey transition duration-300 ease-in-out">
                                            Privacy policy
                                        </p>
                                    </a>
                                    <a target="_blank" rel="noreferrer" href="community-guidelines.html">
                                        <p class="mt-3 text-light-grey hover:text-dark-grey transition duration-300 ease-in-out">
                                            Community Guidelines
                                        </p>
                                    </a>
                                </div>
                            </div>
                            <div class="sm:w-4/12">
                                <p class="text-dark-grey medium">Get in touch</p>
                                <p class="mt-8 text-sm text-light-grey">
                                    Need more information? You can get in touch with us through
                                    our socials
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col lg:flex-row w-full items-center justify-between mt-20 text-sub-text text-sm">
                        <p>Eyemark © 2021 All rights reserved.</p>
                        <div class="items-center justify-between space-x-5 hidden">
                            <button class="font-bold">English</button>
                            <button class="opacity-50">Igbo</button>
                            <button class="opacity-50">Yoruba</button>
                            <button class="opacity-50">Hausa</button>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Welcome