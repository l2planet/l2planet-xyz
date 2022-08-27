import { wrapn } from "wrapn";
import { CardSolution } from "../components/solutions/CardSolution";
import { GridSolution } from "../components/solutions/GridSolution";
import { L1Chain } from "../types/constants";

export const ViewChain = ( { chain: {name, id, logo, description, solutions} }: { chain: L1Chain } ) => {

    return (
        <Div>
            <DivChainInfo>
                <ImgChainLogo src={logo}/>
                <DivChainText>
                    <Name>{name}</Name>
                    <Description>{description}</Description>
                </DivChainText>
            </DivChainInfo>
            <GridSolution>
                {Object.entries(solutions).map(([key, value]) => <CardSolution key={key} chain={id} id={key} solution={value}/>)}
            </GridSolution>
        </Div>
    )
}


const Div = wrapn('div')`
    flex flex-col
    gap-y-6
`

const DivChainInfo = wrapn('div')`
    flex
    flex-col lg:flex-row-reverse
    items-center justify-between
    gap-y-4
`

const DivChainText = wrapn('div')`
    flex flex-col lg:text-left
`

const ImgChainLogo = wrapn('img')`
    w-1/2 sm:w-1/3 md:w-1/4
    aspect-square
    drop-shadow-[0_10px_8px_#11203630]
    dark:drop-shadow-none
` 

const Name = wrapn('h1')`
    font-bold
    text-[15vw] sm:text-[10vw] md:text-[7.5vw] lg:text-[min(9vw,7.2rem)]
`

const Description = wrapn('p')`
    font-bold
    text-[5vw] sm:text-[4vw] md:text-[3vw] lg:text-[min(2.5vw,2rem)]
    text-slate-600 dark:text-slate-300
`