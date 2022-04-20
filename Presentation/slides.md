---
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.svg')
---

![bg left:40% 80%](https://marp.app/assets/marp.svg)

# **Strict Components**

Are your components ready to be used in a `strict:true` application?

---

# Strict by default


For all new Angular Applications the typescript flag `strict` is enabled by default.

Including full template checking of bindings
 - @Input 
 - @Output

---
# The problem

Why do we have to talk about this? 

Because just setting the correct types isn't actually enough...

Let's see why
 ---

 # Our Component

 ```ts
export class DisplayComponent {

  @Input()
  public disabled: boolean = false;
}
 ```
This is ok

 ```html
<app-display [disabled]="true" ></app-display>

 ```
But what about supporting plain attributes...
 ```html
<app-display disabled ></app-display>

 ```
---

# disabled is not boolean

```html
<app-display disabled ></app-display>

 ```
 This is actually equivalent to:

 ```html
<app-display [disabled]="''" ></app-display>

 ```
 Which is why the type checker is complaining about the `disabled` input not being a boolean, because it is a string.

 ---
 # Input Coercion

 To be able to support plain attribute as booleans we must perform input coercion.

 ```ts
    public toBoolean(value: any): boolean {
        if (typeof value === 'boolean') {
            return value;
        }

        if (typeof value === 'string') {
            return value.toUpperCase() === 'TRUE' || value == '';
        }

        return false;
    }
 ```

 But what about our types?

 ---
 # Input Type Coercion

There are two approaches depending on your Angular / Typescript version

 - `ngAcceptInputType_`
 - Set / Get with different Types
   - Requires Typescript v? or above

 ---

 # `ngAcceptInputType_`

Static property supported by Angular that enables you to widen the accepted types of an Input property.

```ts
@Input()
public disabledWithAcceptType: boolean = false;

// Define in component
static ngAcceptInputType_disabledWithAcceptType: boolean | '';
```