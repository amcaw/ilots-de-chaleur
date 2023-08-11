import * as d3 from "d3"


export const load = async ({fetch}) => {
    
        const fetchAnnot = async () => {
            const secteurRes = await fetch("https://gist.githubusercontent.com/Yheloww/a1de676bc3d2b9546505cfcce034ea43/raw/3eb77b84f5cdc9f19d9937ca79dd6cbd32695638/annotations.json")
            const secteurData = await secteurRes.json()
            return secteurData
        }

        const fetchProv = async () => {
          const secteurRes = await fetch("https://gist.githubusercontent.com/Yheloww/27646b49316b9191e18d1c3f51b5b296/raw/5d71834c6f4d5dc3dd0652d8a6bfd48467a89fe4/belgium-with-regions_.json")
          const secteurData = await secteurRes.json()
          return secteurData
      }

        const fetchSecteurAll = async () => {
          const secteurRes = await fetch("https://gist.githubusercontent.com/Yheloww/a1ec1bc9a75c0d7f72fb4b1fe65ee171/raw/514357a88cc88b06f932d6d59a573c1cd93bcfe6/every_city.json")
          const secteurData = await secteurRes.json()
          return secteurData
    }


        const fetchTemp = async () => {
            const tempRes = await fetch("https://gist.githubusercontent.com/Yheloww/ebcf7632eaa0d227cca089042a83ff86/raw/24404f6d8ab9fcf7f33c0924d4a5587944432f80/every_city_infos.json")
            const tempData = await tempRes.json()
            return tempData
        }

        const fecthMar = async () => {
          const marRes = await d3.csv("https://gist.githubusercontent.com/Yheloww/51d8d8cceebdc6ac09a186e595f02add/raw/c0116bb68e9d3cc5428f25ab7cad8fb1d4bdbb71/mar_clean.csv")
          const marData = await marRes
          return marData
        }

        return {
            annot : fetchAnnot(),
            temp : fetchTemp(),
            mar : fecthMar(),
            provinces : fetchProv(),
            secteur_all : fetchSecteurAll()
        }
}



// let cities_object = [
//     {
//       name : "Liege",
//       secteur : "https://gist.githubusercontent.com/Yheloww/c9d7a4fa9b5903ce80f6f1f51f6d738e/raw/db0542e118ed6f00b2d5017134c3048ce45876e6/liege_revenu_densite%2520(1).json",
//       lst : "https://gist.githubusercontent.com/Yheloww/bba8f6cd07949116b34cdb6d94d07ac2/raw/fb5205b70519a670eec42fe7c5ccda5d96a5d3c0/liege_sel_centroid.json"
//     },
//     {
//       name : "Charleroi",
//       secteur : "https://gist.githubusercontent.com/Yheloww/c9d7a4fa9b5903ce80f6f1f51f6d738e/raw/db0542e118ed6f00b2d5017134c3048ce45876e6/charleroi_revenu_densite%2520(1).json",
//       lst : "https://gist.githubusercontent.com/Yheloww/bba8f6cd07949116b34cdb6d94d07ac2/raw/fb5205b70519a670eec42fe7c5ccda5d96a5d3c0/charleroi_sel_centroid.json"
//     },
//     {
//       name : "Namur",
//       secteur : "https://gist.githubusercontent.com/Yheloww/c9d7a4fa9b5903ce80f6f1f51f6d738e/raw/db0542e118ed6f00b2d5017134c3048ce45876e6/namur_revenu_densite%2520(1).json",
//       lst :"https://gist.githubusercontent.com/Yheloww/bba8f6cd07949116b34cdb6d94d07ac2/raw/fb5205b70519a670eec42fe7c5ccda5d96a5d3c0/namur_sel_centroid.json"
//     },
//     {
//       name : "Mons",
//       secteur : "https://gist.githubusercontent.com/Yheloww/c9d7a4fa9b5903ce80f6f1f51f6d738e/raw/db0542e118ed6f00b2d5017134c3048ce45876e6/mons_revenu_densite%2520(1).json",
//       lst : "https://gist.githubusercontent.com/Yheloww/bba8f6cd07949116b34cdb6d94d07ac2/raw/fb5205b70519a670eec42fe7c5ccda5d96a5d3c0/mons_sel_centroid.json"

//     },
//     {
//       name : "Tournai",
//       secteur : "https://gist.githubusercontent.com/Yheloww/c9d7a4fa9b5903ce80f6f1f51f6d738e/raw/db0542e118ed6f00b2d5017134c3048ce45876e6/tournai_revenu_densite%2520(1).json",
//       lst : "https://gist.githubusercontent.com/Yheloww/bba8f6cd07949116b34cdb6d94d07ac2/raw/fb5205b70519a670eec42fe7c5ccda5d96a5d3c0/tournai_sel_centroid.json"

//     }
//   ]