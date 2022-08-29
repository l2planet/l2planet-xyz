import Link from "next/link"
import { useMemo } from "react"
import { Timeline } from "react-twitter-widgets"
import { wrapn } from "wrapn"
import { FlexRow } from "../components/Divs"
import { ALink, LinksCommon } from "../components/chains/LinksCommon"
import { Twitter } from "../components/Twitter"
import { Video } from "../components/Video"
import { L2SolutionFromAPI, ProjectFromAPI } from "../types/external"
import { SecondaryInfoCommon } from "../components/chains/SecondaryInfoCommon"
import { Project } from "../types/internal"

export const ViewProject = ({ project }: { project: Project }) => (
    <>
        <SecondaryInfoCommon data={project}/>
        <DivColLgRow>

            <DivLabeled>
                <Label>Video</Label>
                <Video id={project.video}/>
            </DivLabeled>

            <DivLabeled className='lg:max-w-sm'>
                <Label className="lg:text-right">{project.twitter ? `Tweets` : 'No Twitter Account'}</Label>
                <Twitter id={project.twitter}/>
            </DivLabeled>

        </DivColLgRow>
    </>
)





const DivColLgRow = wrapn('div')`
    flex flex-col lg:flex-row justify-between
    gap-y-10 sm:gap-y-12 md:gap-y-14 lg:gap-y-16 gap-x-5
`


const DivLabeled = wrapn('div')`
    w-full
    flex flex-col
    gap-y-3
`

const Label = wrapn('h3')`
    font-bold text-left
    text-lg sm:text-xl md:text-[1.375rem]
`
