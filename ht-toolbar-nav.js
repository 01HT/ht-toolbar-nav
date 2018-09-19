"use strict";
import { LitElement, html } from "@polymer/lit-element";
import { repeat } from "lit-html/directives/repeat.js";
import "@polymer/iron-iconset-svg";
import "@polymer/iron-icon";

class HTToolbarNav extends LitElement {
  render() {
    const { data, page } = this;
    return html`
    <style>
      :host {
          display: block;
          position: relative;
          box-sizing: border-box;
      }

      iron-icon {
        width: 18px;
        height: 18px;
        margin-left: 4px;
        color: var(--secondary-text-color);
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
        <iron-iconset-svg size="24" name="ht-toolbar-nav">
        <svg>
            <defs>
                <g id="open-in-new"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
            </defs>
        </svg>
    </iron-iconset-svg>
    <nav role="navigation">
      ${repeat(
        data,
        i =>
          html`<a href=${i.href} target=${i.blank ? "_blank" : ""} ?active=${
            i.href && i.href.startsWith(`/${page}`) ? true : false
          }>${i.title} ${
            i.blank
              ? html`<iron-icon icon="ht-toolbar-nav:open-in-new"></iron-icon>`
              : ``
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
      data: { type: Array },
      page: { type: String }
    };
  }
}

customElements.define(HTToolbarNav.is, HTToolbarNav);
