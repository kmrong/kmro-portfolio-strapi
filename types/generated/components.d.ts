import type { Schema, Attribute } from '@strapi/strapi';

export interface ProjectsProjectCarousel extends Schema.Component {
  collectionName: 'components_projects_project_carousels';
  info: {
    displayName: 'projectCarousel';
    icon: 'plus';
    description: '';
  };
  attributes: {
    projectImage: Attribute.Media;
    projectCaption: Attribute.RichText;
  };
}

export interface ProjectsProjectImage extends Schema.Component {
  collectionName: 'components_projects_project_images';
  info: {
    displayName: 'projectSingle';
    description: '';
  };
  attributes: {
    projectImage: Attribute.Media;
    projectCaption: Attribute.RichText;
  };
}

export interface StandardCertificate extends Schema.Component {
  collectionName: 'components_standard_certificates';
  info: {
    displayName: 'Certificate';
    description: '';
  };
  attributes: {
    Source: Attribute.String;
    Date: Attribute.String;
    Logo: Attribute.Media;
    Title: Attribute.Blocks;
  };
}

export interface StandardContact extends Schema.Component {
  collectionName: 'components_standard_contacts';
  info: {
    displayName: 'Contact';
    icon: 'envelop';
  };
  attributes: {
    Email: Attribute.Email;
  };
}

export interface StandardCredential extends Schema.Component {
  collectionName: 'components_standard_credentials';
  info: {
    displayName: 'Credential';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Source: Attribute.String;
    Location: Attribute.String;
    Date: Attribute.String;
    Awards: Attribute.Blocks;
  };
}

export interface StandardStandardBlurb extends Schema.Component {
  collectionName: 'components_about_standard_blurbs';
  info: {
    displayName: 'StandardBlurb';
    description: '';
  };
  attributes: {
    SectionHeader: Attribute.String;
    Paragraph: Attribute.RichText;
    Image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'projects.project-carousel': ProjectsProjectCarousel;
      'projects.project-image': ProjectsProjectImage;
      'standard.certificate': StandardCertificate;
      'standard.contact': StandardContact;
      'standard.credential': StandardCredential;
      'standard.standard-blurb': StandardStandardBlurb;
    }
  }
}
