import React from "react";
import Link from "next/link";

interface Props {
    children: React.ReactNode;
}

const RecruitBTN = ({children}: Props) => {
    const NAV_BTN_STYLE_NORMAL = "px-4 py-2 mr-[20px] ml-[20px] bg-primary-cecom_blue text-white rounded-3xl font-gmarket-m";

    return (
        <Link href={
            "https://docs.google.com/forms/d/e/1FAIpQLScFdhl1gyjc6JcxLMjnutXJITixr_nu79pWqZLitBNCIzCS5g/viewform"
        }>
            <div className={NAV_BTN_STYLE_NORMAL}>{children}</div>
        </Link>
    )
}

export default RecruitBTN;