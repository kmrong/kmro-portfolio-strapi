import type { Schema, Attribute } from '@strapi/strapi';

export interface ProjectsProjectCarousel extends Schema.Component {
  collectionName: 'components_projects_project_carousels';
  info: {
    displayName: 'projectCarousel';
    icon: 'plus';
    description: '';
  };
  attributes: {
    projectImages: Attribute.Media;
    projectCaption: Attribute.Text;
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
    projectCaption: Attribute.Text;
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
      'standard.contact': StandardContact;
      'standard.standard-blurb': StandardStandardBlurb;
    }
  }
}