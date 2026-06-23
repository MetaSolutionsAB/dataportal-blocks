export default {
  extends: 'template',
  template: `
        {{#ifprop "prof:isProfileOf"}}
          <dt>{{nls "respec.profileOf"}}:</dt>
          <dd>{{specRelated relation="prof:isProfileOf"}}</dd>
        {{/ifprop}}
        {{#ifprop "prof:hasToken"}}
          <dt>{{nls "respec.preferredIdentifier"}}:</dt>
          <dd>{{prop "prof:hasToken"}}</dd>
        {{/ifprop}}
        {{#ifprop "dcterms:publisher"}}
          <dt class="editor">{{nls "respec.createdBy"}}:</dt>
          <dd class="editor p-author h-card vcard">{{specPublisher}}</dd>
        {{/ifprop}}
        <dt>{{nls "respec.stableAddressToThisVersion"}}:</dt>
        <dd><a href="?esc_uri={{resourceURI}}">{{resourceURI}}</a></dd>
      `,
};
