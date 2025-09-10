'use client';

import InfoLabel from '@/components/InfoLabel';
import React, { useState } from 'react';

const accentText = 'text-[var(--color-main)] font-bold text-2xl';
const boxBase =
    'flex justify-center items-center border border-[var(--color-main)] text-[var(--color-main)] text-center';

export default function InfoForm() {
    const [isOutline, setIsOutline] = useState(true);

    const handleClick = (type: string = 'outline') => {
        setIsOutline(type === 'outline');
    };

    return (
        <section className="mx-auto max-w-[var(--w-section-full)] w-full flex mb-52 gap-24">
            <div
                className={`
                h-full flex flex-col gap-20
                text-xl font-semibold py-1
            `}
            >
                <button
                    onClick={() => handleClick('outline')}
                    className={`font-semibold text-2xl w-32 ${isOutline && 'text-[var(--color-main)]'}`}
                >
                    행사개요
                </button>

                <button
                    onClick={() => handleClick('attend')}
                    className={`font-semibold text-2xl w-32 ${!isOutline && 'text-[var(--color-main)]'}`}
                >
                    참가안내
                </button>
            </div>
            <div className="flex flex-col gap-14">
                {isOutline ? (
                    <>
                        {/* 행사 개요 */}
                        <div className="flex gap-10">
                            <div className="w-44">
                                <div>
                                    <InfoLabel>소개</InfoLabel>
                                </div>
                            </div>
                            <div className="w-full flex flex-col justify-center text-xl">
                                <p>
                                    조선미디어그룹의 테크전문 매체 IT조선이
                                    <br />
                                    <span className={accentText}>
                                        [2024 대한민국 인공지능대상 & 기업인의 밤]
                                    </span>
                                    을 개최합니다.
                                </p>
                                <p className="text-base mt-5">
                                    인공지능(AI) 보급, 확산 및 진흥을 위해 열리는 [2024 대한민국
                                    인공지능대상 & 기업인의 밤]에는 ‘과학기술정보통신부 장관상’,
                                    ‘산업통상자원부 장관상’, ‘중소벤처기업부 장관상’
                                    ‘한국지능정보사회진흥 원장상’, ‘정보통신산업진흥원 원장상’,
                                    ‘정보통신기획평가원 원장상’을 각 기관과 함께 선정, 시상 합니다.
                                    제 5회 행사인 [2023 대한민국 인공지능대상]에서는 총 7개사가
                                    수상의 영광을 누렸습니다. 수상기업은 새로운 AI기술과 서비스를
                                    선보이고, 글로벌 진출을 타진하는 등 AI업계를 선도했습니다. [2024
                                    대한민국 인공지능대상 & 기업인의 밤]은 전 세계 AI 시장 및 기술
                                    동향 조사를 바탕으로 AI 전문가 심사위원단이 수상자를 선정합니다.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div className="w-44">
                                <InfoLabel>주최사</InfoLabel>
                            </div>
                            <div className="w-full flex items-center text-lg">
                                IT조선 · (사)한국인공지능협회
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div className="w-44">
                                <div>
                                    <InfoLabel>후원</InfoLabel>
                                </div>
                            </div>
                            <div className="w-full flex items-center text-lg">
                                과학기술정보통신부, 산업통상자원부, 중소벤처기업부,
                                한국지능정보사회진흥원, 정보통신산업진흥원, 정보통신기획평가원
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div className="w-44">
                                <InfoLabel>미디어후원</InfoLabel>
                            </div>
                            <div className="w-full flex items-center text-lg">
                                조선일보, TV조선, 조선비즈
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div className="w-44">
                                <InfoLabel>시상 장소</InfoLabel>
                            </div>
                            <div className="w-full flex items-center text-lg">
                                웨스틴조선 서울 2F 오키드룸
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        {/* 참가안내 */}
                        <div className="flex gap-10">
                            <div className="w-44">
                                <div>
                                    <InfoLabel>행사일정</InfoLabel>
                                </div>
                            </div>
                            <div className="w-full flex items-center text-lg">
                                <ul className="w-full">
                                    <li className="list-disc ml-5">
                                        ️신청서 / 공적서 접수 : 2024년 9월 27일 ~ 10월 28일
                                    </li>
                                    <li className="list-disc ml-5">
                                        서 류 심 사 : 2024년 10월 29일 화요일 ~ 30일 수요일
                                    </li>
                                    <li className="list-disc ml-5">
                                        최 종 심 사: 2024년 11월 1일 금요일
                                    </li>
                                    <li className="list-disc ml-5 text-[var(--color-main)]">
                                        시 상 식 : 2024년 11월 19일 화요일
                                    </li>
                                    <li className="list-disc ml-5">시 간 표</li>
                                    <div className="overflow-x-auto mt-2">
                                        <table className="min-w-full border-collapse text-sm">
                                            <thead>
                                                <tr className="bg-[var(--color-main)] text-white">
                                                    <th scope="col" className="px-4 py-2 text-left">
                                                        시간
                                                    </th>
                                                    <th scope="col" className="px-4 py-2 text-left">
                                                        행사내용
                                                    </th>
                                                    <th scope="col" className="px-4 py-2 text-left">
                                                        비고
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-stone-200">
                                                <tr>
                                                    <td className="px-4 py-2 whitespace-nowrap">
                                                        17:30~
                                                    </td>
                                                    <td className="px-4 py-2">도착 및 인사</td>
                                                    <td className="px-4 py-2">
                                                        호텔 2층 오키드룸 등록데스크
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2 whitespace-nowrap">
                                                        18:00~18:02
                                                    </td>
                                                    <td className="px-4 py-2">개회선언</td>
                                                    <td className="px-4 py-2">사회자</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2 whitespace-nowrap">
                                                        18:02~18:05
                                                    </td>
                                                    <td className="px-4 py-2">개회사</td>
                                                    <td className="px-4 py-2">IT조선</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2 whitespace-nowrap">
                                                        18:05~18:15
                                                    </td>
                                                    <td className="px-4 py-2">축사 · 환영사</td>
                                                    <td className="px-4 py-2">국회의원, 협회</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2 whitespace-nowrap">
                                                        18:15~18:30
                                                    </td>
                                                    <td className="px-4 py-2">비전발표</td>
                                                    <td className="px-4 py-2">부처, 기관</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2 whitespace-nowrap">
                                                        18:30~18:35
                                                    </td>
                                                    <td className="px-4 py-2">심사평</td>
                                                    <td className="px-4 py-2">심사위원장</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2 whitespace-nowrap">
                                                        18:35~19:15
                                                    </td>
                                                    <td className="px-4 py-2">시상식</td>
                                                    <td className="px-4 py-2">
                                                        특별상, 대상, 우수상, 부문상
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2 whitespace-nowrap">
                                                        19:15~19:20
                                                    </td>
                                                    <td className="px-4 py-2">단체사진</td>
                                                    <td className="px-4 py-2">수상자, VIP</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2 whitespace-nowrap">
                                                        19:20~21:00
                                                    </td>
                                                    <td className="px-4 py-2">만찬</td>
                                                    <td className="px-4 py-2">네트워킹</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2 whitespace-nowrap">
                                                        21:00~
                                                    </td>
                                                    <td className="px-4 py-2">폐회</td>
                                                    <td className="px-4 py-2"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div className="w-44">
                                <div>
                                    <InfoLabel>심사 과정</InfoLabel>
                                </div>
                            </div>
                            <div className="w-full flex items-center text-lg">
                                <ul className="w-full">
                                    <li className="list-disc ml-5">
                                        ️️서류 심사 : 접수한 기업 대상으로 인공지능(AI) 전문 기자가
                                        국내외 AI시장 분석 및 트렌드 분석을 바탕으로 부문별 2배수
                                        내외 선정
                                    </li>
                                    <li className="list-disc ml-5">
                                        최종 심사 : 분야별 AI 전문가로 구성된 심사위원단이
                                        기술성(30%), 혁신성(30%), 시장성(40%) 기준으로 공정 평가
                                    </li>
                                    <div className="flex gap-10 mt-2">
                                        <div className={`${boxBase} w-36 h-24`}>기술성 30</div>
                                        <div className={`${boxBase} w-36 h-24`}>혁신성 30</div>
                                        <div className={`${boxBase} w-36 h-24`}>시장성 40</div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div className="w-44">
                                <div>
                                    <InfoLabel>수상부문</InfoLabel>
                                </div>
                            </div>
                            <div className="w-full flex flex-col justify-center gap-4 text-lg">
                                <div>
                                    <span className={accentText}>본상 대한민국 인공지능대상</span>
                                    <br />
                                    과학기술정보통신부 장관상 / 산업통상자원부 장관상 /
                                    중소벤처기업부 장관상 / 한국지능정보사회진흥원 원장상 /
                                    정보통신기획평가원 원장상 / 정보통신산업진흥원 원장상
                                </div>
                                <div>
                                    <span className={accentText}>
                                        부문 대상 대한민국 인공지능대상
                                    </span>
                                    <br />
                                    제조, 유통, 의료, 금융, 교육, 컴퓨팅 등 산업별 부문상
                                </div>
                                <div>
                                    <span className={accentText}>특별상 대한민국 인공지능대상</span>
                                    <br />
                                    (사)한국인공지능협회 / 인공지능정책 의정대상
                                </div>
                                <p>
                                    AI 기술 및 서비스에 관한 수상 부문은 위와 같음. 단, 심사위윈단의
                                    판단에 따라 부문을 통합 또는 신설할 수 있음.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div className="w-44">
                                <div>
                                    <InfoLabel>신청 대상</InfoLabel>
                                </div>
                            </div>
                            <div className="w-full flex items-center text-lg">
                                <ul className="w-full">
                                    <li className="list-disc ml-5">
                                        AI(인공지능) 기술을 통해 제품 판매 또는 다양한 서비스를
                                        제공하는 국내 활동 중인 학교, 기업, 공기관, 지방자치단체 등
                                        한국표준산업분류에서 인정하는 모든 형태의 단체.
                                    </li>
                                    <li className="list-disc ml-5">
                                        단, 소비자 관련법 및 공정거래법 위배해 시정명령 이상의 조치
                                        받은 기업은 심사에서 제외
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div className="w-44">
                                <div>
                                    <InfoLabel>신청 방법</InfoLabel>
                                </div>
                            </div>
                            <div className="w-full flex flex-col justify-center text-lg">
                                <div>
                                    대한민국인공지능대상 운영사무국으로 아래 서류 작성 및 첨부 후,
                                    이메일 제출
                                    <br /> ※ 관련 자료 미비 시, 운영사무국에서 추가 서류를 요청할 수
                                    있습니다.
                                </div>
                                <div className="flex gap-4 my-5">
                                    <div className={`${boxBase} w-1/4 h-24 font-bold text-2xl`}>
                                        참가신청서
                                    </div>
                                    <div className={`${boxBase} w-1/4 h-24 font-bold text-2xl`}>
                                        <div>
                                            <p>공적서</p>
                                            <p className="text-sm">(기업&기술 소개서)</p>
                                        </div>
                                    </div>
                                    <div className={`${boxBase} w-1/4 h-24 font-bold text-2xl`}>
                                        <div>
                                            <p>사업자등록증</p>
                                            <p className="text-sm">(사본)</p>
                                        </div>
                                    </div>
                                    <div className={`${boxBase} w-1/4 h-24 font-bold text-2xl`}>
                                        <div>
                                            <p>
                                                회사소개서 or <br /> 제품소개서
                                            </p>
                                            <p className="text-sm">(AI기술 및 적용 소개 필수)</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="w-full bg-[var(--color-main)] text-white py-4 px-16">
                                    eventit@chosunbiz.com 이메일 복사
                                </button>
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div className="w-44">
                                <div>
                                    <InfoLabel>접수 문의</InfoLabel>
                                </div>
                            </div>
                            <div className="w-full flex flex-col justify-center text-lg">
                                <p className="font-bold text-xl">
                                    대한민국 인공지능대상 운영사무국
                                </p>
                                <ul className="w-full">
                                    <li className="list-disc ml-5">
                                        Address. 서울특별시 중구 세종대로135 코리아나호텔 9층 912호
                                    </li>
                                    <li className="list-disc ml-5">Tel. 070-4285-0546</li>
                                    <li className="list-disc ml-5">Fax. 070-4285-0547</li>
                                    <li className="list-disc ml-5">
                                        E-mail. eventit@chosunbiz.com
                                    </li>
                                </ul>
                                <p className="font-bold text-xl mt-5">인공지능 기업인의 밤</p>
                                <ul className="w-full">
                                    <li className="list-disc ml-5">
                                        Address. 서울특별시 마포구 백범로 88 (대흥동) 경총회관 3층
                                    </li>
                                    <li className="list-disc ml-5">Tel. 02-713-4800</li>
                                    <li className="list-disc ml-5">Fax. 02-6971-8901</li>
                                    <li className="list-disc ml-5">E-mail. info@koraia.org</li>
                                </ul>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}
