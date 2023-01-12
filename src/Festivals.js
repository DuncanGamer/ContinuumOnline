import Concert from './Concerts';
import Artic from './Artic.png'
import BruceSprinting from './Bruce-sprinting.png'
import BryanAdams from './Bryan-Adams.png'

function Festivals () {
    return (
        <>
        <div className=" container m-auto pb-5 mt-32">
            <h3 className="px-4 text-xl text-gray-600  font-bold">FESTIVALS</h3>
        </div>

         <div className=" container relative snap-x overflow-x-auto mx-auto flex lg:flex-row gap-y-6 justify-between gap-5 px-6 py-6 ">
        <Concert
        Image = {Artic}
        Title = "Artic"
        Text = " Les Arctic Monkeys seront en concert à l'Accor Arena Bercy de Paris le mardi 9 mai 2023."
        Tikets= "69 Billets restants disponibles"
        />
        <Concert
        Image = {BruceSprinting}
        Title = "Bruce Sprinting"
        Text = "Bruce Springsteen  The E Street Band. Accueil. Bruce Springsteen PARIS lundi. 15. mai 2023. "
        Tikets= "76 Billets restants disponibles"
        />
         <Concert
        Image = {BryanAdams}
        Title = "Bryan Adams"
        Text = "  Bryan Adams, né le 5 novembre 1959 à Kingston (Ontario), est un auteur-compositeur-interprète multi-instrumentiste canadien."
        Tikets= "94 Billets restants disponibles"
        
        />
      </div>
        </>
    )
}
export default Festivals