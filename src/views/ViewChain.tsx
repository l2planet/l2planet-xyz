import { wrapn } from "wrapn"
import { Grid4CardsCommon } from "../components/chains/common"
import { PrimaryInfoCommon } from "../components/chains/PrimaryInfoCommon"
import { CardSolution } from "../components/chains/common"
import { L1ChainFromAPI } from "../types/external"
import { L1Chain } from "../types/internal"


export const ViewChain = ( { chain }: { chain: L1Chain } ) => (
    <>
        <PrimaryInfoCommon data={chain}/>
        <Grid4CardsCommon>
            {chain.solutions && chain.solutions.map(solution => <CardSolution key={solution.id} solution={solution}/>)}
        </Grid4CardsCommon>
    </>
)



