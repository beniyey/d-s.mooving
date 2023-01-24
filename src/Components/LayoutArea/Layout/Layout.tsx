import { useRef, useState } from "react";
import { StringLiteralType } from "typescript";
import AboutPage from "../../Pages/AboutPage/AboutPage";
import AggregationPage from "../../Pages/AggregationPage/AggregationPage";
import ContactPage from "../../Pages/ContactPage/ContactPage";
import MainPage from "../../Pages/MainPage/MainPage";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Layout.css";

enum Tabs {
    'דף הבית' = 0,
    'קצת עלינו' = 1,
    'מחירים' = 2,
    'צור קשר' = 3,
}

function Layout(): JSX.Element {


    const containerRef = useRef<HTMLDivElement>(null);

    const tabSet = function data(item: string) {
        window.scrollTo(window.innerWidth * Tabs[item as keyof typeof Tabs], 0)
    }

    return (
        <div ref={containerRef} className="tab-container">
            <div className="Layout-header">
                <Header tabSet={tabSet} />
            </div>
            <div className="tab">
                <MainPage />
            </div>
            <div className="tab">
                <AboutPage />
            </div>
            <div className="tab">
                <AggregationPage />
            </div>
            <div className="tab">
                <ContactPage />
            </div>
        </div>
    );
}

export default Layout;
