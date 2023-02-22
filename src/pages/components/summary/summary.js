import React from "react";
import { Images } from "../../../assets";
import styled from "styled-components";

const theme = {
    red: {
        color: "#FF5555",
        bgColor:
            "linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #FF5555",
    },
    green: {
        color: "#00BB8F",
        bgColor:
            "linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #00BB8F",
    },
    blue: {
        color: "#1125D6",
        bgColor:
            "linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #1125D6",
    },
    yellow: {
        color: "#FFB21E",
        bgColor:
            "linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #FFB21E",
    },
};

const summary = [
    {
        id: 0,
        label: "Reaction",
        marks: {
            total: 100,
            acheived: 80,
        },
        color: "red",
        icon: Images.reaction,
    },
    {
        id: 1,
        label: "Memory",
        marks: {
            total: 100,
            acheived: 92,
        },
        color: "yellow",
        icon: Images.memory,
    },
    {
        id: 2,
        label: "Verbal",
        marks: {
            total: 100,
            acheived: 61,
        },
        color: "green",
        icon: Images.verbal,
    },
    {
        id: 3,
        label: "Visual",
        marks: {
            total: 100,
            acheived: 73,
        },
        color: "blue",
        icon: Images.visual,
    },
];

export default function Summary() {
    return (
        <React.Fragment>
            <p>Summary</p>
            {summary.map(({ id, label, marks, color, icon }) => (
                <S.summary key={id} color={color}>
                    <S.summaryTitle>
                        <img src={icon} alt={`${label}`} />
                        <h1>{label}</h1>
                    </S.summaryTitle>
                    <S.marks>
                        {marks.acheived} <S.total>/ {marks.total}</S.total>
                    </S.marks>
                </S.summary>
            ))}
            <S.continue>Continue</S.continue>
        </React.Fragment>
    );
}

const S = {
    summary: styled.div`
        padding: 1.8rem;
        background: ${(props) => theme[props.color].bgColor};
        color: ${(props) => theme[props.color].color};
        border-radius: 1.2rem;
        margin-block: 1.6rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h1 {
            margin-bottom: 0px;
            font-size: 1.6rem;
            font-weight: 500;
        }
    `,
    marks: styled.span`
        font-size: 1.6rem;
        font-weight: 700;
        line-height: 21px;
        letter-spacing: 0px;
        text-align: right;
        color: #303b59;
    `,
    total: styled.span`
        color: #303b59;
        opacity: 0.5;
    `,
    continue: styled.button`
        width: 100%;
        margin-block: 2rem 4rem;
        padding-block: 1.7rem;
        border-radius: 12.8rem;
        border: 0px;
        outline: 0px;
        color: white;
        font-size: 1.8rem;
        font-weight: 700;
        background-color: #303b59 !important;
        cursor: pointer;

        @media only screen and (max-width: 700px) {
            background: linear-gradient(
                180deg,
                #7755ff 0%,
                #6943ff 0.01%,
                #2f2ce9 100%
            );
        }
    `,
    summaryTitle: styled.div`
        display: flex;
        align-items: center;
        width: 100px;
        img {
            margin-right: 1rem;
        }
    `,
};
