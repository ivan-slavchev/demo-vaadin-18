// eagerly import theme styles so as we can override them
import '@vaadin/vaadin-lumo-styles/all-imports';

const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `
<custom-style>
<style>
        html {
      --lumo-font-size: 1rem;
      --lumo-font-size-xxxl: 1.75rem;
      --lumo-font-size-xxl: 1.375rem;
      --lumo-font-size-xl: 1.125rem;
      --lumo-font-size-l: 1rem;
      --lumo-font-size-m: 0.875rem;
      --lumo-font-size-s: 0.8125rem;
      --lumo-font-size-xs: 0.75rem;
      --lumo-font-size-xxs: 0.6875rem;
      --lumo-line-height-m: 1.4;
      --lumo-line-height-s: 1.2;
      --lumo-line-height-xs: 1.1;
      --lumo-border-radius: 0px;
      --lumo-size-xl: 3rem;
      --lumo-size-l: 2.5rem;
      --lumo-size-m: 2rem;
      --lumo-size-s: 1.75rem;
      --lumo-size-xs: 1.5rem;
      --lumo-space-xl: 1.875rem;
      --lumo-space-l: 1.25rem;
      --lumo-space-m: 0.625rem;
      --lumo-space-s: 0.3125rem;
      --lumo-space-xs: 0.1875rem;
      --lumo-body-text-color: hsla(214, 0%, 0%, 0.94);

    }

</style>
</custom-style>

<dom-module id="theme-vaadin-button-0" theme-for="vaadin-button">
    <template>
        <style>
        
:host(:not([theme~="tertiary"])) {
  background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-shade-5pct));
  box-shadow: inset 0 0 0 1px var(--lumo-contrast-20pct);
}
:host(:not([theme~="tertiary"]):not([theme~="primary"]):not([theme~="error"]):not([theme~="success"])) {
  color: var(--lumo-body-text-color);
}
:host([theme~="primary"]) {
  text-shadow: 0 -1px 0 var(--lumo-shade-20pct);
}
        </style>
    </template>
</dom-module>
<dom-module id="theme-vaadin-text-field-0" theme-for="vaadin-text-field">
    <template>
        <style>
        
[part="input-field"] {
  box-shadow: inset 0 0 0 1px var(--lumo-contrast-30pct);
  background-color: var(--lumo-base-color);
}

:host([invalid]) [part="input-field"] {
  box-shadow: inset 0 0 0 1px var(--lumo-error-color);
}

        </style>
    </template>
</dom-module>
<dom-module id="theme-vaadin-text-area-0" theme-for="vaadin-text-area">
    <template>
        <style>
        
[part="input-field"] {
  box-shadow: inset 0 0 0 1px var(--lumo-contrast-30pct);
  background-color: var(--lumo-base-color);
}

:host([invalid]) [part="input-field"] {
  box-shadow: inset 0 0 0 1px var(--lumo-error-color);
}

        </style>
    </template>
</dom-module>
<dom-module id="theme-vaadin-password-field-0" theme-for="vaadin-password-field">
    <template>
        <style>
        
[part="input-field"] {
  box-shadow: inset 0 0 0 1px var(--lumo-contrast-30pct);
  background-color: var(--lumo-base-color);
}

:host([invalid]) [part="input-field"] {
  box-shadow: inset 0 0 0 1px var(--lumo-error-color);
}

        </style>
    </template>
</dom-module>

`;

document.head.appendChild($_documentContainer.content);
