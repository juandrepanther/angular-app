# Angular 18 + Angular Material UI / SCSS / Tailwind CSS

## Build

Already build on Vercel: `https://angular-app-taupe.vercel.app/`

## Run

- `npm run dev`

## Topics

- routing (redirect commented)
- fetch data on the initial component load
- environments
- Angular Material UI together with SCSS
- TS Generics
- angular linter
- list items using `@If` decorator
- `\*ngIf`, `\*ngFor` from `CommonModule` used for if no data is fetched
- pipes
- `@Input` to pass properties from parent to child component
- functions import to the component

- generated service by using `ng generate service service/products`
- refactored and used pipe async and streams
- error handler service & component
- parameters in the products service

- `<ng-content></ng-content>` as children

## Notes

- to generate new components and skipping the tests, run `ng g c components/global-error --skip-tests`
- error service holds all errors from the other components connected in their methods
