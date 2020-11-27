import React, { useState } from 'react';
import TableCell from '@material-ui/core/TableCell';


function DisplayData({row, title}) {
  const titleCase = ["Exemplaires ouvrages", "Textes publiés", "Airs", "Thèmes", "Catalogues"]
  return(
    <>
    {/* Sélection Exemplaires ouvrages */}
    {title===titleCase[0] &&  <TableCell align="right">{row.groupe_ouvrage}</TableCell>}
    {title===titleCase[0] &&  <TableCell align="right">{row.titre_ouvrage}</TableCell>}
    {title===titleCase[0] &&  <TableCell align="right">{row.nombres_pièces}</TableCell>}
    {title===titleCase[0] &&  <TableCell align="right">{row.ville_conservation}</TableCell>}
    {title===titleCase[0] &&  <TableCell align="right">{row.depot_conservation}</TableCell>}
    {title===titleCase[0] &&  <TableCell align="right">{row.numero_cote}</TableCell>}
    {title===titleCase[0] &&  <TableCell align="right">{row.description_cote}</TableCell>}
    {title===titleCase[0] &&  <TableCell align="right">{row.lien_ustc}</TableCell>}
    {title===titleCase[0] &&  <TableCell align="right">{row.annee_indiquee}</TableCell>}
    {title===titleCase[0] &&  <TableCell align="right">{row.format}</TableCell>}
    {title===titleCase[0] &&  <TableCell align="right">{row.manuscrit_imprime}</TableCell>}
    {title===titleCase[0] &&  <TableCell align="right">{row.forme_editoriale}</TableCell>}
    {title===titleCase[0] &&  <TableCell align="right">{row.lieu_edition_indique}</TableCell>}
    {title===titleCase[0] &&  <TableCell align="right">{row.lieu_edition_reel}</TableCell>}
    {title===titleCase[0] &&  <TableCell align="right">{row.editeur_libraire_imprimeur}</TableCell>}
    {title===titleCase[0] &&  <TableCell align="right">{row.editeur}</TableCell>}
    {title===titleCase[0] &&  <TableCell align="right">{row.libraire}</TableCell>}
    {title===titleCase[0] &&  <TableCell align="right">{row.imprimeur}</TableCell>}
    {title===titleCase[0] &&  <TableCell align="right">{row.religion}</TableCell>}





    {/* Sélection Textes publiés */}
    {title===titleCase[1] && <TableCell align="right">{row.groupe_texte}</TableCell>}
    {title===titleCase[1] && <TableCell align="right">{row.titre_groupe}</TableCell>}
    {title===titleCase[1] && <TableCell align="right">{row.nature_texte}</TableCell>}
    {title===titleCase[1] && <TableCell align="right">{row.titre}</TableCell>}
    {title===titleCase[1] && <TableCell align="right">{row.sur_l_air_de}</TableCell>}
    {title===titleCase[1] && <TableCell align="right">{row.incipit}</TableCell>}
    {title===titleCase[1] && <TableCell align="right">{row.incipit_normalise}</TableCell>}
    {title===titleCase[1] && <TableCell align="right">{row.type_incipit}</TableCell>}  
    {title===titleCase[1] && <TableCell align="right">{row.auteur_indique}</TableCell>}
    {title===titleCase[1] && <TableCell align="right">{row.autre_auteur}</TableCell>}  
    {title===titleCase[1] && <TableCell align="right">{row.source_information }</TableCell>}
    {title===titleCase[1] && <TableCell align="right">{row.page}</TableCell>}
    {title===titleCase[1] && <TableCell align="right">{row.lien_chansons_melodies}</TableCell>}
    {title===titleCase[1] && <TableCell align="right">{row.contenu_texte}</TableCell>}
    {title===titleCase[1] && <TableCell align="right">{row.forme_litteraire}</TableCell>}

    {/* Sélection Airs */}
    {title===titleCase[2] && <TableCell align="right">{row.lien_chansons_melodies}</TableCell>}

    {/* Sélection Thèmes */}
    {title===titleCase[3] && <TableCell align="right">{row.intitule}</TableCell>} 

    {/* Sélection Catalogues */}
    {title===titleCase[4] &&  <TableCell align="right">{row.titre}</TableCell>}
    {title===titleCase[4] &&  <TableCell align="right">{row.annee}</TableCell>}
    {title===titleCase[4] &&  <TableCell align="right">{row.editeur}</TableCell>}
    {title===titleCase[4] &&  <TableCell align="right">{row.auteur}</TableCell>}

    </> 
  )}

  export default DisplayData 
  
  // Tentative pour détecter les colonnes automatiquement mais le tableCell marche pas :(
  // const results = data["data"];
  // var columnsIn = results[0]; 
  // let columnsNameObj = [];
  // let resultStr = "";

  // for(var key in columnsIn){
  //   if (key !== 'status' && key !== 'owner' && key !== 'created_on') {
  //     let v = "rowTmp."+key;
  //     columnsNameObj.push(v)
  //   }
  // } 

  // for (var c in columnsNameObj) {
  //   resultStr += '  <TableCell align="right"> {eval(columnsNameObj[' + c + '])} </TableCell>\n'
  // }
  // console.log(resultStr)

  // console.log()
   //switch
    //(columnsNameObj).map((c) => {
      //<TableCell align="right">{eval(columnsNameObj[0])}</TableCell> // ça, ça marche 
      //<TableCell align="right">{eval(c.v)}</TableCell>        // c = valeur
    
       /* <TableCell align="right">{eval(columnsNameObj[0].v)}</TableCell> 
       <TableCell align="right">{eval(columnsNameObj[1].v)}</TableCell> 
       <TableCell align="right">{eval(columnsNameObj[2].v)}</TableCell> 
       <TableCell align="right">{eval(columnsNameObj[3].v)}</TableCell> 
       <TableCell align="right">{eval(columnsNameObj[4].v)}</TableCell>  */