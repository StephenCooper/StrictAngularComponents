# StrictAngularComponents
Code examples for writing Angular Components that are compliant with Typescript strict mode. Two sample apps for the approaches described under [Template Type Checking](https://angular.io/guide/template-typecheck#troubleshooting-template-errors).

In both demos you will see compilation errors when running `npm run start` as I have left examples that need fixing following the approaches outlined below.

## Setter Getter Demo

Shows how to use Setters and Getters to perform input coercion now that Typescript 4.3 allows its setters and getters to have different types.

```ts
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean | string) {
    this._disabled = (value === '') || value === true;
  }
```

## ngAcceptInputType Demo

Before Angular 13 and Typescript 4.3 we had to use the static flag `ngAcceptInputType_` to enable input coercion. 

```ts
  @Input()
  public disabled: boolean = false;
  static ngAcceptInputType_disabled: boolean | '';
```
