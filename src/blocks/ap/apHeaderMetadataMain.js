/**
 * Always-visible AP header metadata rows: profile-of, preferred identifier,
 * publisher, and the stable address to this version.
 *
 * CSS: the publisher row emits the microformat classes `editor`,
 * `p-author h-card vcard`.
 */
export default {
  extends: 'template',
  template: `
        {{#ifprop "prof:isProfileOf"}}
          <dt>{{nls "respec.profileOf"}}:</dt>
          <dd>{{apRelated relation="prof:isProfileOf" namedClick="spec"}}</dd>
        {{/ifprop}}
        {{#ifprop "prof:hasToken"}}
          <dt>{{nls "respec.preferredIdentifier"}}:</dt>
          <dd>{{prop "prof:hasToken"}}</dd>
        {{/ifprop}}
        {{#ifprop "dcterms:publisher"}}
          <dt class="editor">{{nls "respec.createdBy"}}:</dt>
          <dd class="editor p-author h-card vcard">{{apPublisher}}</dd>
        {{/ifprop}}
        <dt>{{nls "respec.stableAddressToThisVersion"}}:</dt>
        <dd><a href="?esc_uri={{resourceURI}}">{{resourceURI}}</a></dd>
      `,
};
