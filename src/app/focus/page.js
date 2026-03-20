import TermsHero from '@/components/Common/TermsHero'
import React from 'react'
import Image from "next/image";
import FocusFaq from '@/components/Common/FocusFaq';
import TitleWithText from '@/components/Common/TitleWithText';
import TitleWithButton from '@/components/Common/TitleWithButton';
import TheraphyCard from '@/components/Common/TheraphyCard';
import QuoteCard from '@/components/Common/QuoteCard';
import GetInTouch from '@/components/Common/GetInTouch';
import FAQ from '@/components/Common/FAQ';
const Blogimg = "/images/blog-img.png";

const Focus = ({ theme = "light" }) => {
    const isDark = theme === "dark";
    const heroData = {
        breadcrumbs: ["Expertise", "Focus Areas"],
        title: <>Focus Areas</>,
        // Description must now include the buttons directly below the paragraph
        description: (
            <>
                Our expertise is organized deliberately to help you navigate complex challenges. Each path below represents focused specialization, allowing you to identify the perspective most relevant to your specific context.
                {/* Two buttons in one row, placed immediately after description */}
                <div
                    className="gs__services-btn-row"
                >
                    <button className="gs__btn gs__vacancies-btn gs__btn-secondary">
                        <span className="gs__btn-inner">
                            <span className="gs__btn-text">Explore Job Functions</span>
                            <span className="gs__btn-text">Explore Job Functions</span>
                        </span>
                    </button>
                </div>
            </>
        ),
    };
    return (
        <>
            <TermsHero
                theme={theme}
                wrapperClassName="gs__vacancies-wp gs__services-wp gs__focus-area-wp"
                breadcrumbs={heroData.breadcrumbs}
                title={heroData.title}
                description={heroData.description}
                rightContentClassName="gs__vacancies-content"
                imageDiv={
                    <div className="gs__article-img">
                        <Image
                            src={Blogimg}
                            alt="article-img"
                            width={800}
                            height={450}
                        />
                    </div>
                }
            />
            <FocusFaq theme='light' />
            <div className='gs__expertise-focus-readcase'>
                <TitleWithText theme="light" />
                <div className="gs__expertise-btn-txt">
                    <TitleWithButton theme="light" />
                </div>
                <TheraphyCard theme="light" />
            </div>
            <QuoteCard />
            <div className="gs__theraphy-card-reverse">
                <div className="gs__expertise-btn-txt">
                    <TitleWithButton theme="light" />
                </div>
                <TheraphyCard theme="light" />
            </div>
            <QuoteCard />
            <div className='gs__expert-faq'>
                <FAQ />
            </div>
            <GetInTouch />
        </>
    )
}

export default Focus