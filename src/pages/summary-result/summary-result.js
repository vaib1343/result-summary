import React from "react";
import styled from "styled-components";
import Summary from "../components/summary/summary";

export default function SumnaryResult() {
    return (
        <S.container>
            <S.resultContainer>
                <h6>Your Result</h6>
                <S.circle>
                    <h1>76</h1>
                    <p>of 100</p>
                </S.circle>
                <S.status>great</S.status>
                <S.description>
                    Your performance exceed 65% of the people conducting the
                    test here!
                </S.description>
            </S.resultContainer>
            <S.summaryContainer>
                <Summary />
            </S.summaryContainer>
        </S.container>
    );
}

const S = {
    container: styled.div`
        @media only screen and (min-width: 700px) {
            width: 40%;
            min-width: 700px;
            margin: auto;
            display: flex;
            flex-direction: row;
            box-shadow: 0px 30px 60px 0px #3d6cec26;
            border-radius: 3.2rem;
            margin-top: 10rem;
        }
    `,
    resultContainer: styled.div`
        width: 100%;
        background: linear-gradient(
            180deg,
            #7755ff 0%,
            #6943ff 0.01%,
            #2f2ce9 100%
        );
        padding: 4rem;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 0rem 0rem 3.2rem 3.2rem;

        @media only screen and (min-width: 700px) {
            width: 50%;
            border-radius: 3.2rem;
        }

        h6 {
            text-align: center;
            font-size: 1.8rem;
            font-weight: 700;
        }
    `,
    circle: styled.div`
        border-radius: 50%;
        background: linear-gradient(
            180deg,
            #4d21c9 0%,
            rgba(37, 33, 201, 0) 100%,
            rgba(37, 33, 201, 0) 100%
        );
        width: 14rem;
        height: 14rem;
        margin: auto;
        margin-top: 3.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media only screen and (min-width: 700px) {
            height: 20rem;
            width: 20rem;
        }

        h1 {
            font-size: 5.6rem;
            font-weight: 800;
        }
        p {
            margin-top: 0.4rem;
            font-weight: 700;
            font-size: 1.6rem;
            color: #cac9ff;
        }
    `,
    status: styled.span`
        font-size: 2.4rem;
        font-weight: 500;
        text-transform: capitalize;
        text-align: center;
        margin-top: 2.4rem;
    `,
    description: styled.span`
        text-align: center;
        margin-top: 0.4rem;
        font-size: 1.6rem;
        opacity: 0.5;
    `,
    summaryContainer: styled.div`
        padding: 2.4rem 3rem 0rem 3rem;
        @media only screen and (min-width: 700px) {
            width: 50%;
            border-radius: 3.2rem;
        }
        p {
            font-weight: 700;
            font-size: 1.8rem;
            color: #303b59;
            margin-bottom: 0.8rem;
        }
    `,
};
