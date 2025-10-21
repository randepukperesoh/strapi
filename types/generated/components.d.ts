import type { Schema, Struct } from '@strapi/strapi';

export interface ListAdvantages extends Struct.ComponentSchema {
  collectionName: 'components_list_advantages';
  info: {
    displayName: 'advantages';
    icon: 'bold';
  };
  attributes: {
    description: Schema.Attribute.String;
    descriptionSecondary: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ListCaseItem extends Struct.ComponentSchema {
  collectionName: 'components_list_case_items';
  info: {
    displayName: 'caseItem';
    icon: 'sun';
  };
  attributes: {
    description: Schema.Attribute.String;
    results: Schema.Attribute.Component<'list.string-list', true>;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ListListOfAdvantages extends Struct.ComponentSchema {
  collectionName: 'components_list_list_of_advantages';
  info: {
    displayName: 'listOfAdvantages';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ListShortAdvantages extends Struct.ComponentSchema {
  collectionName: 'components_list_short_advantages';
  info: {
    displayName: 'shortAdvantages';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ListSingleService extends Struct.ComponentSchema {
  collectionName: 'components_list_single_services';
  info: {
    displayName: 'single-service';
    icon: 'layer';
  };
  attributes: {
    description: Schema.Attribute.Text;
    list: Schema.Attribute.Component<'list.string-list', true>;
    title: Schema.Attribute.String;
  };
}

export interface ListStringList extends Struct.ComponentSchema {
  collectionName: 'components_list_string_lists';
  info: {
    displayName: 'stringList';
    icon: 'server';
  };
  attributes: {};
}

export interface ListTeamItem extends Struct.ComponentSchema {
  collectionName: 'components_list_team_items';
  info: {
    displayName: 'teamItem';
    icon: 'plus';
  };
  attributes: {
    description: Schema.Attribute.String;
    fio: Schema.Attribute.String;
    photo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    profession: Schema.Attribute.String;
    professionSecondary: Schema.Attribute.String;
    skill: Schema.Attribute.Component<'list.string-list', true>;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'seo';
    icon: 'television';
  };
  attributes: {
    description: Schema.Attribute.Text;
    keyword: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'list.advantages': ListAdvantages;
      'list.case-item': ListCaseItem;
      'list.list-of-advantages': ListListOfAdvantages;
      'list.short-advantages': ListShortAdvantages;
      'list.single-service': ListSingleService;
      'list.string-list': ListStringList;
      'list.team-item': ListTeamItem;
      'seo.seo': SeoSeo;
    }
  }
}
