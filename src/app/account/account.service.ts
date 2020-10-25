import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Account } from './account.model';

@Injectable()
export class AccountService{
    
    accountChanged = new Subject<Account>();
    // private recipes: Recipe[] = [
    //     new Recipe(
    //         'Samosaa',
    //         'this is a simple test od desription.... ',
    //         'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe.jpg',
    //         [
    //             new Ingredient('Meat', 1),
    //             new Ingredient('French Fries', 20)
    //         ]),
    
    //     new Recipe(
    //         'Idli',
    //         'this is a simple test od desription.... ',
    //         'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe.jpg',
    //         [
    //             new Ingredient('Buns', 2),
    //             new Ingredient('Meet', 2)
    //         ])
    //   ];

      private accounts: Account;
      constructor(){}

      setAccounts(accounts: Account){
          this.accounts = accounts;
          this.accountChanged.next(this.accounts)

      }
      getAccounts(){
          return this.accounts;
      }
      getAccount(index: number){
          return this.accounts[index];

      }

    //   addIngredientToShoppingList(ingredients: Ingredient[]){
    //      this.elService.addIngredients(ingredients);
    //   }

    //   addAccount(account: Account){
    //       this.accounts.push(account);
    //       this.accountChanged.next(this.recipes.slice());
    //   }

    //   updateRecipe(index: number, newRecipe: Recipe)
    //   {
    //       this.recipes[index] = newRecipe;
    //       this.recipesChanged.next(this.recipes.slice());
    //   }

    //   deleteRecipe(index: number){
    //       this.recipes.splice(index, 1);
    //       this.recipesChanged.next(this.recipes.slice());
    //   }
}