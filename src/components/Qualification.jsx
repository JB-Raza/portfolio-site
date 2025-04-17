import React from 'react'
import { Mortarboard } from 'react-bootstrap-icons'

import { QualificationCard } from './Cards.jsx'
import { MainHeading } from './elementComp.js'

export default function Qualification() {
    return (
        <div className="qualification-section container-fluid mx-auto py-2 px-0 px-md-2">
            <div className="my-5 py-4 px-0">
                <div className="row w-100 m-0">
                    {/* col 1 */}
                    <div className="col col-12 col-md-6 m-0">
                        {/* head */}
                        <div className="head d-flex align-items-center justify-content-center justify-content-md-start gap-3">
                            <i className="fa-brands fa-intercom fs-1 color-primary"></i>
                            <MainHeading value={"My Experience"} />
                        </div>
                        {/* cards row */}
                        <div className="row gap-4 cards-row my-5 p-0 mx-0">
                            {/* card 1 */}
                            {(expData || []).map((exp, i) => (
                                <QualificationCard key={i} data={exp} type={"exp"} />
                            ))}
                        </div>
                    </div>

                    {/* col 2 education */}
                    <div className="col col-12 col-md-6 m-0">
                        {/* head */}
                        <div className="head d-flex align-items-center justify-content-center justify-content-md-start gap-3">
                            <Mortarboard className='fs-1 color-primary' />
                            <MainHeading value={"My Education"} />
                        </div>
                        {/* cards row */}
                        <div className="row gap-4 cards-row my-5 p-0 mx-0">
                            {/* card 1 */}
                            {(eduData || []).map((education, i) => (
                                <QualificationCard key={i} data={education} type={"edu"} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const expData = [
    {date: "2022 - Present", title: "LEAD DEVELOPER", place: "Blockdots, London"},
    {date: "2021 - 2022", title: "Full Stack Web Developer", place: "Parsons, The New School"},
    {date: "2020 - 2021", title: "UI Designer", place: "House of Life, Leeds"},
    {date: "2018 - 2020", title: "Junior Graphics Designer", place: "Theme Junction, Bursa"},
]
const eduData = [
    {date: "2020 - 2023", title: "PROGRAMMING COURSE", place: "Blockdots, London"},
    {date: "2019 - 2020", title: "GRAPHIC DESIGN COURSE", place: "Blockdots, London"},
    {date: "2018 - 2019", title: "WEB DESIGN COURSE", place: "Blockdots, London"},
    {date: "2017 - 2018", title: "DESIGN & TECHNOLOGY", place: "Blockdots, London"},

]