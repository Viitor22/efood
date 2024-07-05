import {BounceLoader} from 'react-spinners'
import { colors } from '../../Styles'
import {ContainerLoader} from "./index.ts"


const Loader = () => {
    return(
        <ContainerLoader>
            <BounceLoader color={colors.main}/>
        </ContainerLoader>
    )
}

export default Loader