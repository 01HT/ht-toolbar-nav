"use strict";
import { LitElement, html } from "@polymer/lit-element";
import { repeat } from "lit-html/lib/repeat.js";
class HTToolbarNav extends LitElement {
  _render({ data, page }) {
    return html`
    <style>
      :host {
          display: block;
          position: relative;
          box-sizing: border-box;
      }

      a {
        text-decoration: none;
        color: #414549;
        font-weight: 500;
        font-size: 14px;
        text-transform: uppercase;
      }

      nav {
        display:flex;
        height:64px;
      }

      nav > a {
        display:flex;
        align-items:center;
        justify-content:center;
        position: relative;
        margin: 0 9px;
        padding: 0 12px;
      }

      .active-underline, .hover-underline {
        position:absolute;
        bottom:0;
        width:0;
        height:4px;
      }

      a[active] .active-underline {
        width:100%;
        background: var(--accent-color);
        transition: width .2s cubic-bezier(.4,0,.2,1);
      }

      a:hover .hover-underline {
        width:100%;
        background: #dfe1e5;
      }
    </style>
    <nav role="navigation">
      ${repeat(
        data,
        i =>
          html`<a href=${i.href} active?=${
            i.href && i.href.startsWith(`/${page}`) ? true : false
          }>${
            i.title
          }<div class="hover-underline"></div><div class="active-underline"></div></a>`
      )}
    </nav>
`;
  }

  static get is() {
    return "ht-toolbar-nav";
  }

  static get properties() {
    return {
      data: Array,
      page: String
    };
  }
}

customElements.define(HTToolbarNav.is, HTToolbarNav);
