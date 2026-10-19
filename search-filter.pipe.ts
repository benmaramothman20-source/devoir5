
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(produits: any[], searchTerm: string): any[] {
    console.log("transforme.....");
    if (!produits) {
      return [];
    }

    if (!searchTerm) {
      return produits;
    }

    return produits.filter(produit =>
      produit.nomProduit
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  }
}
