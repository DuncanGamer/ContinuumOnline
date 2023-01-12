import { FaMusic} from 'react-icons/fa';
import { FaHandshakeAltSlash} from 'react-icons/fa';
import {FaShieldAlt } from 'react-icons/fa';

function Market2 (){
return(
    <>
     <div className=" px-4  sm:pt-20 pb-20">
            <div className=" container flex flex-col lg:flex-row gap-y-6 justify-between mx-auto ">
                <div className=" flex  gap-4">
                    <div>
                        <i className=" text-4xl"> <FaMusic/></i>
                    </div>
                    <div>
                        <div className=" text-xl md:text-3xl font-bold">Plus de 1000 </div>
                        <div className=" text-gray-500">Concerts par an.</div>
                    </div>

                </div>
                <div className=" flex gap-4 ">
                    <div>
                        <i className=" text-4xl"><FaHandshakeAltSlash/></i>
                    </div>
                    <div>
                        <div className=" text-xl md:text-3xl font-bold">Acheter et vendre</div>
                        <div className=" text-gray-500">Rapide et facile.</div>
                    </div>


                </div>
                <div className=" flex gap-4">
                    <div>
                        <i className="text-4xl"><FaShieldAlt/> </i>
                    </div>
                    <div>
                        <div className=" text-xl md:text-3xl font-bold">Transactions </div>
                        <div className=" text-gray-500">Sûr et garanti.</div>
                    </div>

                </div>
            </div>
        </div>
    
    </>
)
}
export default Market2